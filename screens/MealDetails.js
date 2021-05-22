import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Colors from '../assets/Colors';
import { MEALS } from '../Data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const MealDetails = props => {

  const mealId = props.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

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
  const mealId = meals.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return {
    headerTitle: selectedMeal.title,
    headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title="fav" iconName='ios-star' onPress={() => console.log('marked')} />
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
