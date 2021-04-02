import React from 'react';
import { StyleSheet } from 'react-native';
import { MealList } from '../../components/index';
import data from '../../data/dummy-data';

const Favorites = (props) => {
  const favMeals = data.MEALS.filter(
    (meal) => meal.id === 'm1' || meal.id === 'm2'
  );

  return <MealList data={favMeals} navigation={props.navigation} />;
};

Favorites.navigationOptions = {
  headerTitle: 'Your Favorites',
};

export default Favorites;
