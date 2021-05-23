import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';

import Categories from '../screens/Categories';
import CategoryMeals from '../screens/CategoryMeals';
import MealDetails from '../screens/MealDetails';
import Favorites from '../screens/Favorites';
import Filters from '../screens/Filters';
import Colors from '../assets/Colors';


const MealsNavigator =  createStackNavigator({
    Categories: Categories,
    CategoryMeals: CategoryMeals,
    MealDetails: MealDetails,
})

const FavoriteNavigator = createStackNavigator({
    Favorites: Favorites,
    MealDetails: MealDetails
})

const FilterNavigator = createStackNavigator({
    Filters: Filters,
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
        screen: FavoriteNavigator,
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

const MainNavigator = createDrawerNavigator({
    Cuisines: MealsBottomNavigator,
    Filters: FilterNavigator
})

export default createAppContainer(MainNavigator);