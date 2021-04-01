import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { enableScreens } from 'react-native-screens';
import * as Font from 'expo-font';
import MealsNavigator from './navigation/MealsNavigator';

enableScreens();

const fetchFonts = async () => {
  await Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return <MealsNavigator />;
}

const styles = StyleSheet.create({});
