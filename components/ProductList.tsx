import { Pressable, StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import * as React from 'react'
import { Product } from './Product'
import MasonryList from '@react-native-seoul/masonry-list'
import { HeartIcon } from 'react-native-heroicons/outline'
import { Link, router } from 'expo-router'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '@/app/store/Api'
import { addToWishlist } from '@/app/store/slice/WishListSlice'
import MenuItem from 'react-native-paper/lib/typescript/components/Menu/MenuItem'
import Loder from '@/app/Helper/Loder'
import { theme } from '@/constants/Colors'
import Category from './Category'

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
                    <Loder size={40} color='green' />
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
        <View key={index} style={{ marginHorizontal: 3 }}>

            <Pressable onPress={() => router.push({
                pathname: '/Screen/SingleDetails',
                params: item
            })}>
                <View style={styles.card}>
                    <View style={styles.productsCard}>
                        <Image style={styles.images} source={{ uri: item.image }} />
                        <View style={styles.icon}>
                            <HeartIcon size={26} color={'#000'} onPress={() => dispatch(addToWishlist(item))} />
                        </View>
                    </View>
                    <View style={{ padding: 10, }}>
                        <Text style={{ color: "#000", fontSize: 18 }}>{item.title.slice(0, 14)}</Text>
                        <Text style={{ fontSize: 14, fontWeight: '300' }}>$ {item.price}</Text>
                    </View>
                </View>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    productList: {
        // marginHorizontal: 5,
        backgroundColor: '#fff',
        borderRadius: 25,
        height: '100%',
    },
    productsCard: {
        justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#fff',
        flexDirection: 'row',
    },
    card: {
        shadowOpacity: 3,
        shadowRadius: 10,
        shadowOffset: { width: 0.2, height: 1 },
        marginBottom: 20,
        elevation: 2,
    },
    images: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        // marginVertical: 10,
        marginTop: 20,
        marginBottom: 8,
    },
    icon: {
        position: 'absolute',
        right: 3,
        top: 5,
        borderRadius: 50,
        padding: 7,
        backgroundColor: theme.colors.inverseOnSurface,
    }
})