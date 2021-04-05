import React from 'react';
import { Platform, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import {
  Categories,
  CategoryMeals,
  MealDetails,
  Favorites,
  Filters,
} from '../screens/index';
import { Ionicons } from '@expo/vector-icons';
import Color from '../constants/Colors';

const defaultOption = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Color.primaryColor : '',
  },
  headerTitleStyle: {
    fontFamily: 'open-sans',
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans',
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
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={{ fontFamily: 'open-sans' }}>Meals</Text>
        ) : (
          Meals
        ),
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
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={{ fontFamily: 'open-sans' }}>Favorites</Text>
        ) : (
          Favorites
        ),
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
          labelStyle: {
            fontFamily: 'open-sans',
          },
          activeTintColor: Color.accentColor,
        },
      });

const FiltersNavigator = createStackNavigator(
  {
    Filters,
  },
  {
    // navigationOptions: {
    //   drawerLabel: 'Our Filter',
    // },
    defaultNavigationOptions: defaultOption,
  }
);

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsfavTabNavigator,
      navigationOptions: {
        drawerLabel: 'Meals',
      },
    },
    Filters: FiltersNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Color.accentColor,
      labelStyle: {
        fontFamily: 'open-sans-bold',
      },
    },
  }
);

export default createAppContainer(MainNavigator);
