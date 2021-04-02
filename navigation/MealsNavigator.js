import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {
  Categories,
  CategoryMeals,
  MealDetails,
  Favorites,
} from '../screens/index';
import { Ionicons } from '@expo/vector-icons';
import Color from '../constants/Colors';

const defaultOption = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Color.primaryColor : '',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Color.primaryColor,
};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: Categories,
      navigationOptions: {
        headerTitle: 'Categories',
      },
    },
    CategoryMeals: {
      screen: CategoryMeals,
    },
    MealDetails,
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultOption,
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: { screen: Favorites },
    MealDetails: MealDetails,
  },
  {
    defaultNavigationOptions: defaultOption,
  }
);

const tabsConfiguration = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarLabel: 'Meals',
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name='restaurant' size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Color.primaryColor,
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarLabel: 'Favorites',
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Color.accentColor,
    },
  },
};

const MealsfavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabsConfiguration, {
        activeColor: 'white',
        shifting: true,
      })
    : createBottomTabNavigator(tabsConfiguration, {
        tabBarOptions: {
          activeTintColor: Color.accentColor,
        },
      });

export default createAppContainer(MealsfavTabNavigator);
