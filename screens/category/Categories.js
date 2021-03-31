import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const Categories = (props) => {
  return (
    <View style={{ ...props.style, ...styles.screen }}>
      <Text> Categories Component</Text>
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

export default Categories;
