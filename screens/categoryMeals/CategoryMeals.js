import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import data from '../../data/dummy-data';
import { DefaultText, MealList } from '../../components/index';

const CategoryMeals = (props) => {
  const categoryId = props.navigation.getParam('categoryId');
  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const mealsList = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  if (mealsList.length === 0) {
    return (
      <View style={styles.container}>
        <DefaultText>
          No meals found, please check the applied filters.
        </DefaultText>
      </View>
    );
  }

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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMeals;
