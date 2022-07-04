import { createSlice } from '@reduxjs/toolkit';

export const weatherSlice = createSlice({
  name: 'cities',
  initialState: {
    cities: [],
  },
  reducers: {
    addNewCity: (state, action) => {
      const itemIndex = state.cities.findIndex(
        (item) => item.id === action.payload.item.id
      );
      console.log(action.payload.item.id);
      const existingItem = state.cities[itemIndex];

      if (!existingItem) {
        state.cities.push(existingItem);
      } 
    },
    removeCity: (state, action) => {
      const itemIndex = state.cities.findIndex(
        (item) => item.id === action.payload.item.id
      );
      const existingItem = state.cities[itemIndex];

      if (existingItem) {
        state.cities.filter((item) => item.id !== action.payload.item.id);
      }
    },
  },
});

export const { addNewCity, removeCity } = weatherSlice.actions;

export default weatherSlice.reducer;
