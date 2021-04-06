import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import DefaultText from '../common/defaultText/DefaultText';
import styles from './MealItemStyle';

const MealCard = (props) => {
  return (
    <View
      style={{
        ...props.style,
        ...styles.mealItem,
      }}
    >
      <TouchableOpacity onPress={props.onSelectedMeal}>
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
            <DefaultText style={{ fontSize: 10 }}>
              Duration : {props.duration}m
            </DefaultText>
            <DefaultText style={{ fontSize: 10 }}>
              Complexity: {props.complexity.toUpperCase()}
            </DefaultText>
            <DefaultText style={{ fontSize: 10 }}>
              Affordability: {props.affordability.toUpperCase()}
            </DefaultText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MealCard;
