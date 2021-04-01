import { StyleSheet, Platform } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 0.2 },
    shadowRadius: 10,
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
    overflow:
      Platform.OS === 'android' && Platform.Version >= 21
        ? 'hidden'
        : 'visible',
    elevation: 5,
  },
  item: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'open-sans-bold',
    textAlign: 'right',
  },
});
