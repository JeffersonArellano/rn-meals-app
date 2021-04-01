import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import data from '../../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { CustomHeaderButton } from '../../components/index';

const MealDetails = (props) => {
  const mealId = props.navigation.getParam('mealId');
  const selectedMeal = data.MEALS.find((meals) => meals.id === mealId);

  return (
    <View style={{ ...props.style, ...styles.screen }}>
      <Text> Meals Details Component ID {selectedMeal.id}</Text>
      <Button
        title='Go back to Parent'
        onPress={() => {
          props.navigation.popToTop();
        }}
      ></Button>
    </View>
  );
};

MealDetails.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = data.MEALS.find((meals) => meals.id === mealId);

  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='Favorite'
          iconName='star-outline'
          onPress={() => {
            console.log('Marked as favorite');
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealDetails;
