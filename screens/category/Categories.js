import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import data from '../../data/dummy-data';

import { CategoryGridTile } from '../../components/index';

const Categories = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={() =>
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: { categoryId: itemData.item.id, category: itemData.item },
          })
        }
      />
    );
  };

  return (
    <FlatList
      numColumns={2}
      data={data.CATEGORIES}
      keyExtractor={(item, index) => item.id}
      renderItem={renderGridItem}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#FFFF2E',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Categories;
