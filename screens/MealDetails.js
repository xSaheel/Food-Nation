import React, { useCallback, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Colors from '../assets/Colors';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../store/actions/mealsActions';

const MealDetails = props => {

  const allMeals = useSelector(state => state.meals.meals);

  const mealId = props.navigation.getParam('mealId');
  const selectedMeal = allMeals.find(meal => meal.id === mealId);

  const dispatch = useDispatch();

  const toggleFavHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    props.navigation.setParams({toggleFav: toggleFavHandler});
  },[toggleFavHandler]);

  return (
    <View style={styles.container}>
      <View style={styles.imgFrame}>
        <ImageBackground source={{uri: selectedMeal.img}} style={styles.image} imageStyle={{ borderRadius: 10}}></ImageBackground>
      </View>
      <View style={styles.txtContainer}>
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <Text style={styles.desc}>{selectedMeal.desc}</Text>
      </View>
    </View>
  );
}

MealDetails.navigationOptions = meals => {

  const mealTitle = meals.navigation.getParam('mealTitle');
  const toggleFav = meals.navigation.getParam('toggleFav');

  return {
    headerTitle: mealTitle,
    headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title="fav" iconName='ios-star' onPress={toggleFav} />
    </HeaderButtons>, 
    headerStyle: {
      backgroundColor: Colors.primary
    },
    headerTintColor: Colors.secondary
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },
  txtContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 12,
    marginBottom: 20,
    padding: 5,
    height: 300,
    borderRadius: 10,
    backgroundColor: '#ccc',
    elevation: 5
  },
  title: {
    fontSize: 25,
    fontFamily: 'poppins-600',
    color: Colors.secondary
  },
  desc: {
    fontSize: 18,
    fontFamily: 'poppins-200',
    textAlign: 'center',
    padding: 5,
    color: Colors.secondary
  },
  imgFrame: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 12,
    height: 80,
    borderRadius: 10,
    elevation: 3
  },
  image: {
    height: 200,
    width: '100%',
  },
});

export default MealDetails;
