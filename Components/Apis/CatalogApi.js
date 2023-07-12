import * as React from 'react';
import Api from './Api';

const CatalogApi = ({ setApi404, setNotFound, setApi404message, setApi, setModelId }) => { 
    const apiLink = 'https://watchmaestro.com/wp-json/watchy/v1/app/products/'+setModelId;
      return (
        <Api 
            apikey={`catalog_${setModelId}`}
            apiLink={apiLink}
            setApi404={setApi404}
            setNotFound={setNotFound}
            setApi404message={setApi404message}
            setApi={setApi}
        />
      )
}
export default CatalogApi;