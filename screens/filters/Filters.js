import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const Filters = (props) => {
  return (
    <View style={{ ...props.style, ...styles.screen }}>
      <Text> Filters Component</Text>
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

export default Filters;
