import React from 'react';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { MealList, CustomHeaderButton } from '../../components/index';

const Favorites = (props) => {
  const availableMeals = useSelector((state) => state.meals.favoriteMeals);
  return <MealList data={availableMeals} navigation={props.navigation} />;
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
