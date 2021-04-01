import React from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  Platform,
} from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import Color from '../../../constants/Colors';

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      style={{ ...props.style, ...styles.container }}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === 'android' ? 'white' : Color.primaryColor}
    ></HeaderButton>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default CustomHeaderButton;
