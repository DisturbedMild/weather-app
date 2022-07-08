import { addNewCity as dispatchNewCity } from '../reducers/citySlice';

function addNewCity(cityName) {
  return (dispatch) => {
    const sendRequest = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=93c64c0f1745440a167896326be70440`
        );

        if (!response.ok) {
          throw new Error('City not found!');
        }

        const data = await response.json();

        if (!data.error) {
          dispatch(dispatchNewCity(data));
        }
      } catch (err) {
        throw new Error(err || 'Something went wrong!');
      }
    };
    sendRequest();
  };
}

export default addNewCity;
