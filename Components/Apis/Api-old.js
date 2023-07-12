import * as React from 'react';
const Api = (props) => {
    React.useEffect(() => {
      fetch(props.apiLink)
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.code === 'rest_no_route') {
            props.setApi404(false);
            props.setApi404message(responseJson.message);
          } else if(responseJson.code === 'empty_query') { 
            props.setNotFound(responseJson.type);
            props.setApi404message(responseJson.message);
          } else { 
            const jsonArray = responseJson;
            //const jsonArray = Object.values(responseJson);
            props.setApi(jsonArray);
          }
        })
        .catch((error) => {
            props.setApi404(false);
            props.setApi404message(error);
            console.error(error);
        });
    }, [props.apiLink, props.setApi404, props.setNotFound, props.setApi404message, props.setApi]);
  
    return null;
  };
  export default Api;