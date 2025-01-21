import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Animatable from 'react-native-animatable';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const Category = ({ isActiveCategory, setIsActiveCategory }) => {
  const [isCategory, setIsCategory] = useState([]);

  interface categoryProps {
    id: number,
    name: string,
  }

  const category = ["All", "electronics", "jewelery", "men's clothing", "women's clothing"]
  // const getCategory = (async () => {
  //   const res = await fetch('https://fakestoreapi.com/products/categories');
  //   const result = await res.json();
  //   console.log('category....', result)
  //   setIsCategory(result);
  // })
  // useEffect(() => {
  //   getCategory();
  // }, [])
  return (
    <View style={[styles.containerBody]}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <Animatable.View animation={'fadeInRight'} duration={1000} style={styles.categoryText}>
          {
            category.map((item, index) => {
              let isActive = item == isActiveCategory
              let activeButton = isActive ? "#000" : "#fff"
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => setIsActiveCategory(item)}
                >
                  <View style={[styles.category, { backgroundColor: activeButton }]} >
                    <Text style={{ color: isActive ? "#fff" : '#000', fontWeight: '600' }}>{item}</Text>
                  </View>
                </TouchableOpacity>
              )

            })
          }
        </Animatable.View>
      </ScrollView>
    </View>

  )
}

export default Category

const styles = StyleSheet.create({
  containerBody: {
    // marginTop: 3,
  },
  categoryText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  category: {
    borderWidth: 0.4,
    padding: widthPercentageToDP(2.5),
    borderColor: '#8e8e8e',
    borderRadius: widthPercentageToDP(3.4),
    marginHorizontal: widthPercentageToDP(3),
    marginTop: heightPercentageToDP(2.5),
    marginBottom: heightPercentageToDP(2.3),
  },
})