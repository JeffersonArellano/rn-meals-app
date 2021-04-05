import React from 'react';
import { useSelector } from 'react-redux';
import data from '../../data/dummy-data';
import { MealList } from '../../components/index';

const CategoryMeals = (props) => {
  const categoryId = props.navigation.getParam('categoryId');
  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const mealsList = availableMeals.filter(
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

export default CategoryMeals;
