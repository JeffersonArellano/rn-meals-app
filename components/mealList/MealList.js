import React from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet, FlatList } from 'react-native';
import MealItem from '../mealItem/MealItem';

const MealList = (props) => {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);

  const mealCard = (itemData) => {
    const isFavorite = favoriteMeals.some(
      (meal) => meal.id === itemData.item.id
    );

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
            params: {
              mealId: itemData.item.id,
              mealTitle: itemData.item.title,
              isFavorite: isFavorite,
            },
          });
        }}
      />
    );
  };

  return (
    <View style={{ ...props.style, ...styles.screen }}>
      <FlatList
        data={props.data}
        keyExtractor={(item, index) => item.id}
        renderItem={mealCard}
        style={{ width: '100%' }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealList;
