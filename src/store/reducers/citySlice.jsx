import { createSlice } from '@reduxjs/toolkit';

export const citySlice = createSlice({
  name: 'cities',
  initialState: {
    cities: [],
  },
  reducers: {
    addNewCity: (state, action) => {
      const itemIndex = state.cities.findIndex(
        (item) =>
          item.name === action.payload.name &&
          item.sys.country === action.payload.sys.country
      );

      const existingItem = state.cities[itemIndex];

      if (!existingItem) {
        state.cities.unshift(action.payload);
        localStorage.removeItem('items');
        localStorage.setItem('items', JSON.stringify(state.cities));
      }

    },
    updateCity: (state, action) => {
      const itemIndex = state.cities.findIndex(
        (item) => item.name === action.payload.name
      );
      const existingItem = state.cities[itemIndex];

      if (existingItem) {
        // eslint-disable-next-line no-param-reassign
        state.cities[itemIndex] = action.payload;
      }
    },
    removeCity: (state, action) => {
      const itemIndex = state.cities.findIndex(
        (item) => item.name === action.payload.name
      );
      const existingItem = state.cities[itemIndex];

      if (existingItem) {
        state.cities.filter((item) => item.name !== action.payload.name);
      }
    },
  },
});

export const { addNewCity, updateCity, removeCity } = citySlice.actions;

export default citySlice.reducer;
