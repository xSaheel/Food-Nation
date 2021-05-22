import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';

import Categories from '../screens/Categories';
import CategoryMeals from '../screens/CategoryMeals';
import MealDetails from '../screens/MealDetails';
import Favorites from '../screens/Favorites';
import Colors from '../assets/Colors';

const MealsNavigator =  createStackNavigator({
    Categories: Categories,
    CategoryMeals: CategoryMeals,
    MealDetails: MealDetails
})

const MealsBottomNavigator = createBottomTabNavigator({
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>
            }
        }
    },
    Favorites:  {
        screen: Favorites,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>
            }
        }
    },
}, {
    tabBarOptions: {
        activeTintColor: Colors.secondary,
    }
})

export default createAppContainer(MealsBottomNavigator);