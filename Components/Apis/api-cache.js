import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Api = (props) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedData = await AsyncStorage.getItem(props.apikey);
        if (cachedData) {
          console.log("Cache Data");
          console.log(cachedData);
          const parsedData = JSON.parse(cachedData);
          props.setApi(parsedData);
        }
          const response = await fetch(props.apiLink);
          const responseJson = await response.json();
          console.log("Api Response Data");
          console.log(responseJson);

          if (responseJson.code === 'rest_no_route') {
            props.setApi404(false);
            props.setApi404message(responseJson.message);
          } else if (responseJson.code === 'empty_query') {
            props.setNotFound(responseJson.type);
            props.setApi404message(responseJson.message);
          } else {
            console.log("Api Working Retunr Json");
            const jsonArray = Object.values(responseJson);
            props.setApi(jsonArray);

            // Compare the latest API response with cached data
            const isDataUpdated = JSON.stringify(jsonArray) !== cachedData;

            if (isDataUpdated) {
              console.log("Cache Is Data Updated!");
              // Update the cached API response data
              await AsyncStorage.setItem(props.apikey, JSON.stringify(jsonArray));
            }
          }
      } catch (error) {
        props.setApi404(false);
        props.setApi404message(error);
        console.error(error);
      }
    };

    fetchData();
  }, [props.apikey, props.apiLink, props.setApi404, props.setNotFound, props.setApi404message, props.setApi]);

  return null;
};

export default Api;
