import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'

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
        <View style={styles.categoryText}>
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
        </View>
      </ScrollView>

      {/* <ProductList /> */}

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
    borderWidth: 1,
    padding: 10,
    borderColor: 'gray',
    borderRadius: 10,
    marginHorizontal: 10,
    marginTop: 20,
    marginBottom: 10,
  },
})