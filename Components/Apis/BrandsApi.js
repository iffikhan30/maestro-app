import * as React from 'react';
import Api from './Api';
const BrandsApi = ({ setApi404, setNotFound, setApi404message, setApi }) => { 
    const apiLink = 'https://watchmaestro.com/wp-json/watchy/v1/app/brands';
      return (
        <Api 
            apikey="brands"
            apiLink={apiLink}
            setApi404={setApi404}
            setNotFound={setNotFound}
            setApi404message={setApi404message}
            setApi={setApi}
        />
      )
}
export default BrandsApi;