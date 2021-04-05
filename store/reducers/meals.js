import data from '../../data/dummy-data';

const initialState = {
  mealList: data.MEALS,
  filteredMeals: data.MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  return state;
};

export default mealsReducer;
