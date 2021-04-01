import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';
import styles from './CategoryGridTileStyle';

const CategoryGridTile = (props) => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  return (
    <View style={{ ...styles.gridItem }}>
      <TouchableComponent
        style={styles.touchableComponent}
        onPress={props.onPress}
      >
        <View
          style={{ ...styles.container, ...{ backgroundColor: props.color } }}
        >
          <Text style={{ ...styles.item }} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </TouchableComponent>
    </View>
  );
};

export default CategoryGridTile;
