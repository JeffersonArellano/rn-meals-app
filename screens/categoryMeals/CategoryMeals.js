import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import CATEGORIES from '../../data/dummy-data';

const CategoryMeals = (props) => {
  const categoryId = props.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(
    (categories) => categories.id === categoryId
  );

  return (
    <View style={{ ...props.style, ...styles.screen }}>
      <Text> Category {selectedCategory.title}</Text>
      <Button
        title='Navigate to details'
        onPress={() => {
          props.navigation.navigate('MealDetails');
        }}
      />
    </View>
  );
};

CategoryMeals.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(
    (categories) => categories.id === categoryId
  );

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#FFFF2E',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMeals;
