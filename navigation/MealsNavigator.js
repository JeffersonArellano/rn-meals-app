import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Categories, CategoryMeals, MealDetails } from '../screens/index';
import Color from '../constants/Colors';

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
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Color.primaryColor : '',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Color.primaryColor,
    },
  }
);

export default createAppContainer(MealsNavigator);
