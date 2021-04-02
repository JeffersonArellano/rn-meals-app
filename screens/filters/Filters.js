import React from 'react';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { CustomHeaderButton } from '../../components/index';

const Filters = (props) => {
  return (
    <View style={{ ...props.style, ...styles.screen }}>
      <Text> Filters Component</Text>
    </View>
  );
};

Filters.navigationOptions = (navigationData) => {
  return {
    headerTitle: 'Filter Meals',
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

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#FFFF2E',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Filters;
