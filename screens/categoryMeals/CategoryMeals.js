import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const CategoryMeals = (props) => {
  return (
    <View style={{ ...props.style, ...styles.container }}>
      <Text> Category Meals Component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFF2E',
    width: '80%',
  },
});

export default CategoryMeals;
