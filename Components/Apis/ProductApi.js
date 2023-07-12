import * as React from 'react';
import Api from './Api';

const ProductApi = ({ setApi404, setNotFound, setApi404message, setApi, setProductId }) => { 
    const apiLink = 'https://watchmaestro.com/wp-json/watchy/v1/app/products/watch/'+setProductId;
      return (
        <Api 
            apikey={`product_${setProductId}`}
            apiLink={apiLink}
            setApi404={setApi404}
            setNotFound={setNotFound}
            setApi404message={setApi404message}
            setApi={setApi}
        />
      )
}
export default ProductApi;