import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import Colors from '../assets/Colors';
import { MEALS, CATEGORIES } from '../Data';

const CategoryMeals = props => {

  const categoryId = props.navigation.getParam('categoryId');

  const renderMeal = itemData => {
    return (
      <TouchableOpacity 
        style={styles.gridItem} 
        onPress={() => {
          props.navigation.navigate({
            routeName: 'MealDetails',
            params: {
              mealId: itemData.item.id
            }
          });
        }}
        activeOpacity={0.7}
      >
        <ImageBackground source={{uri: itemData.item.img}} style={styles.image} imageStyle={{ borderRadius: 10}}>
          <View style={styles.mealBody}>
            <Text style={styles.price}>₹{itemData.item.price}</Text>
            <Text style={styles.text}>{itemData.item.title}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    )
  }

  const meals = MEALS.filter(item => item.catId === categoryId);

  return (
    <FlatList 
      data={meals} 
      renderItem={renderMeal}
    />
  );
}

CategoryMeals.navigationOptions = categoryData => {
  const categoryId = categoryData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(category => category.id === categoryId);

  return {
    headerTitle: selectedCategory.title,
    headerStyle: {
      backgroundColor: Colors.primary
    },
    headerTintColor: Colors.secondary
  }
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 12,
    height: 140,
    borderRadius: 10,
    elevation: 5,
  },
  mealBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  price: {
    fontSize: 18,
    fontFamily: 'poppins-600',
    color: '#eee',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: '50%',
    borderTopLeftRadius: 10,
    paddingLeft: 10
  },
  text: {
    fontSize: 18,
    fontFamily: 'poppins-400',
    textAlign: 'right',
    color: '#eee',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: '50%',
    borderTopRightRadius: 10,
    paddingRight: 10
  }
});

export default CategoryMeals;
