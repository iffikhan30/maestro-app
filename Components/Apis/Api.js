import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Api = (props) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedData = await AsyncStorage.getItem(props.apikey); //`modelsData_${brand.id}`;
        let response;

        if (cachedData) {
          response = JSON.parse(cachedData);
        }else{
          // api call
          response = await fetch(props.apiLink);
          response = await response.json();
          // set data inside storage
          await AsyncStorage.setItem(props.apikey, JSON.stringify(response));
        }
        if (response.code === 'rest_no_route') {
          props.setApi404(false);
          props.setApi404message(response.message);
        } else if (response.code === 'empty_query') {
          props.setNotFound(response.type);
          props.setApi404message(response.message);
        } else {
          const jsonArray = response;
          //const jsonArray = Object.values(response);
          props.setApi(jsonArray);
        }
      } catch (error) {
        props.setApi404(false);
        props.setApi404message(error);
        console.error(error);
      }
    };
    fetchData();
  }, [props.apiLink, props.setApi404, props.setNotFound, props.setApi404message, props.setApi]);

  return null;
};
export default Api;