import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import Color from '../../../constants/Colors';

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.text}</Text>
      <Switch
        trackColor={{ true: Color.primaryColor }}
        thumbColor={Platform.OS === 'android' ? Color.primaryColor : ''}
        value={props.value}
        onValueChange={props.Onchange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 10,
  },
});

export default FilterSwitch;
