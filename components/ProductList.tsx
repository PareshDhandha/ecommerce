import { Pressable, StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import * as React from 'react'
import MasonryList from '@react-native-seoul/masonry-list'
import { HeartIcon } from 'react-native-heroicons/outline'
import { router } from 'expo-router'
import { useDispatch } from 'react-redux'
import { addToWishlist } from '@/app/store/slice/WishListSlice'
import Loder from '@/app/Helper/Loder'
import { theme } from '@/constants/Colors'
import Category from './Category'
import * as Animatable from 'react-native-animatable';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


const ProductList = () => {
    const [product, setProduct] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [fillterProducts, setFillterProducts] = React.useState([])
    const [isActiveCategory, setIsActiveCategory] = React.useState('All');
    // const dispatch = useDispatch();
    // const products = useSelector(state => state);

    const getProduct = (async () => {
        const res = await fetch('https://fakestoreapi.com/products')
        const result = await res.json();
        console.log('result...', result)
        setIsLoading(false)
        setProduct(result);
        setFillterProducts(result);
    })
    const fillterData = () => {
        if (isActiveCategory === 'All') {
            setFillterProducts(product);
        } else {
            const fillterItem = product.filter(products => products.category === isActiveCategory)
            setFillterProducts(fillterItem);
            console.log('filleter....', fillterItem)
        }
    }
    React.useEffect(() => { getProduct() }, [])
    React.useEffect(() => {
        fillterData();
    }, [isActiveCategory, product])
    return (
        <View style={styles.productList}>
            <Category isActiveCategory={isActiveCategory} setIsActiveCategory={setIsActiveCategory} />
            <ScrollView showsVerticalScrollIndicator={false}>
                {isLoading ? (
                    <Loder size={hp(6)} color='green' />
                ) :
                    <MasonryList
                        data={fillterProducts}
                        keyExtractor={(item): string => item.id}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }: { item: any }) => <ProductData item={item} />}
                        onEndReachedThreshold={0.1}
                    />
                }
            </ScrollView>
        </View>
    )
}

export default ProductList

const ProductData = ({ item, index }: any) => {
    const dispatch = useDispatch();
    return (
        <View key={index} style={{ marginHorizontal: wp(0.8) }}>

            <Pressable onPress={() => router.push({
                pathname: '/Screen/SingleDetails',
                params: item
            })}>
                <Animatable.View animation={'fadeInUp'} style={[styles.card]}>
                    <View style={styles.productsCard}>
                        <Image style={styles.images} source={{ uri: item.image }} />
                        <View style={styles.icon}>
                            <HeartIcon size={hp(2.6)} color={'#000'} onPress={() => dispatch(addToWishlist(item))} />
                        </View>
                    </View>
                    <View style={{ padding: wp(4) }}>
                        <Text style={{ color: "#000", fontSize: hp(1.9), }}>{item.title.slice(0, 18)}</Text>
                        <Text style={{ fontSize: hp(1.7), fontWeight: '300', color: "#000" }}>$ {item.price}</Text>
                    </View>
                </Animatable.View>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    productList: {
        // marginHorizontal: 5,
        backgroundColor: '#fff',
        borderRadius: wp(5),
        height: hp(73.5),
    },
    productsCard: {
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 10,
        // shadowOffset: { width: 0, height: 0.2 },
        // shadowColor: '#8e8e8e',
        // shadowOpacity: 0.01,
        // elevation: 1,
        // marginBottom: hp(2),
    },
    card: {
        marginBottom: hp(3),
        borderRadius: wp(3.5),
        backgroundColor: '#f2f7ff',

    },
    images: {
        width: wp(40.3),
        height: hp(15),
        resizeMode: 'contain',
        // marginVertical: 10,
        marginTop: hp(2),
        backgroundColor: '#fff',
        borderRadius: wp(2.6),
    },
    icon: {
        position: 'absolute',
        right: wp(1),
        top: hp(0.6),
        borderRadius: wp(10),
        padding: wp(2),
        backgroundColor: theme.colors.inverseOnSurface,
    }
})