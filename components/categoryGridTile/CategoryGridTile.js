import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 0.2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  touchableComponent: {
    flex: 1,
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
  },
  item: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'open-sans-bold',
    textAlign: 'right',
  },
});

export default CategoryGridTile;
