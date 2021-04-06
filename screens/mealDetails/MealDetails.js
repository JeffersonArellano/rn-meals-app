import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../../store/actions/meals';

import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { CustomHeaderButton, DefaultText } from '../../components/index';

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetails = (props) => {
  const mealId = props.navigation.getParam('mealId');

  const isCurrentFavorite = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === mealId)
  );
  const availableMeals = useSelector((state) => state.meals.mealList);
  const selectedMeal = availableMeals.find((meals) => meals.id === mealId);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    //props.navigation.setParams({ mealTitle: selectedMeal.title });
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    props.navigation.setParams({ isFavorite: isCurrentFavorite });
  }, [isCurrentFavorite]);

  return (
    <ScrollView>
      <Image
        style={styles.image}
        source={{ uri: selectedMeal.imageUrl }}
      ></Image>
      <View style={styles.details}>
        <DefaultText>Duration : {selectedMeal.duration}m</DefaultText>
        <DefaultText>
          Complexity: {selectedMeal.complexity.toUpperCase()}
        </DefaultText>
        <DefaultText>
          Affordability: {selectedMeal.affordability.toUpperCase()}
        </DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}

      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetails.navigationOptions = (navigationData) => {
  // const mealId = navigationData.navigation.getParam('mealId');
  const mealTitle = navigationData.navigation.getParam('mealTitle');
  // const selectedMeal = data.MEALS.find((meals) => meals.id === mealId);
  const toggleFav = navigationData.navigation.getParam('toggleFav');
  const isFavorite = navigationData.navigation.getParam('isFavorite');

  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='Favorite'
          iconName={isFavorite ? 'ios-star' : 'star-outline'}
          onPress={toggleFav}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center',
    color: 'black',
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
});

export default MealDetails;
