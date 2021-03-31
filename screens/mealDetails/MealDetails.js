import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const MealDetails = (props) => {
  return (
    <View style={{ ...props.style, ...styles.screen }}>
      <Text> Meals Details Component</Text>
      <Button
        title='Go back to Parent'
        onPress={() => {
          props.navigation.popToTop();
        }}
      ></Button>
    </View>
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

export default MealDetails;
