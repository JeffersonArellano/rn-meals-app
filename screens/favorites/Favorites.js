import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { MealList, CustomHeaderButton } from '../../components/index';
import data from '../../data/dummy-data';

const Favorites = (props) => {
  const favMeals = data.MEALS.filter(
    (meal) => meal.id === 'm1' || meal.id === 'm2'
  );

  return <MealList data={favMeals} navigation={props.navigation} />;
};

Favorites.navigationOptions = (navigationData) => {
  return {
    headerTitle: 'Your Favorites',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() => {
            navigationData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default Favorites;
