import { updateCity as dispatchCityData } from '../reducers/citySlice';
import { isUiLoaded } from '../reducers/uiSlice';

function updateCityWeather(cityName) {
  return (dispatch) => {
    dispatch(isUiLoaded({ isLoading: true, error: null }));
    const sendRequest = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=93c64c0f1745440a167896326be70440`
        );

        if (!response.ok) {
          dispatch(isUiLoaded({ error: 'City not found!' }));
          throw new Error('City not found!');
        }

        const data = await response.json();
        if (!data.error) {
          dispatch(dispatchCityData(data));
          dispatch(isUiLoaded({ error: null }));
        }
      } catch (err) {
        dispatch(isUiLoaded({ error: err.message || 'Something went wrong' }));
        throw new Error(err.message || 'Something went wrong!');
      }
      dispatch(isUiLoaded({ isLoading: false, error: null }));
    };
    sendRequest();
  };
}

export default updateCityWeather;
