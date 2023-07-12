import * as React from 'react';
import Api from './Api';

const SearchApi = ({ setApi404, setNotFound, setApi404message, setApi }) => { 
    const apiLink = 'https://watchmaestro.com/wp-json/watchy/v1/app/products/17';
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
export default SearchApi;