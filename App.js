import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Categories,
  CategoryMeals,
  Favorites,
  Filters,
  MealDetails,
} from './screens/index';

export default function App() {
  return (
    <View>
      <Categories />
      <CategoryMeals />
      <Favorites />
      <Filters />
      <MealDetails />
    </View>
  );
}

const styles = StyleSheet.create({});
