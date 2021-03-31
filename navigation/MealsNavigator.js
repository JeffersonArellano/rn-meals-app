import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Categories, CategoryMeals, MealDetails } from '../screens/index';

const MealsNavigator = createStackNavigator({
  Categories,
  CategoryMeals: { screen: CategoryMeals },
  MealDetails,
});

export default createAppContainer(MealsNavigator);
