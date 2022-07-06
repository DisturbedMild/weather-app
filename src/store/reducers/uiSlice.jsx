/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
	name: 'ui',
	initialState: {
		isLoading: false,
		error: null
	},
	reducers: {
		isUiLoaded: (state, action) => {
			state.isLoading = action.payload.isLoading;
			state.error = action.payload.error;
		}
	}
})


export const { isUiLoaded } = uiSlice.actions;

export default uiSlice.reducer;