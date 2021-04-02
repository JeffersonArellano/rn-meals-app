import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import data from '../../data/dummy-data';
import { MealList } from '../../components/index';

const CategoryMeals = (props) => {
  const categoryId = props.navigation.getParam('categoryId');

  const mealsList = data.MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return <MealList data={mealsList} navigation={props.navigation} />;
};

CategoryMeals.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = data.CATEGORIES.find(
    (categories) => categories.id === categoryId
  );

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMeals;
