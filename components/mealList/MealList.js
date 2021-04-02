import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import MealItem from '../mealItem/MealItem';

const MealList = (props) => {
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
