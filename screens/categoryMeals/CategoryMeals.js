import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import data from '../../data/dummy-data';
import { MealItem } from '../../components/index';

const CategoryMeals = (props) => {
  const categoryId = props.navigation.getParam('categoryId');

  const mealsList = data.MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  const mealCard = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        imageUrl={itemData.item.imageUrl}
        onSelectedMeal={() => {
          props.navigation.navigate({
            routeName: 'MealDetails',
            params: { mealId: itemData.item.id },
          });
        }}
      />
    );
  };

  return (
    <View style={{ ...props.style, ...styles.screen }}>
      <FlatList
        data={mealsList}
        keyExtractor={(item, index) => item.id}
        renderItem={mealCard}
        style={{ width: '100%' }}
      ></FlatList>
    </View>
  );
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
