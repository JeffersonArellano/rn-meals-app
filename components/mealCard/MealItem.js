import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';

import styles from './MealItemStyle';

const MealCard = (props) => {
  return (
    <View
      style={{
        ...props.style,
        ...styles.mealItem,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          props.onSelectedMeal;
        }}
      >
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: props.imageUrl }}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <Text> {props.duration}m</Text>
            <Text> {props.complexity.toUpperCase()}</Text>
            <Text> {props.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MealCard;
