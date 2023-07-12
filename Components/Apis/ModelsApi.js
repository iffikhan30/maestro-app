import * as React from 'react';
import Api from './Api';

const ModelsApi = ({ setApi404, setNotFound, setApi404message, setApi, setBrandId }) => { 
    const apiLink = 'http://watchmaestro.com/wp-json/watchy/v1/app/models/'+setBrandId;
      return (
        <Api 
            apikey={`models_${setBrandId}`}
            apiLink={apiLink}
            setApi404={setApi404}
            setNotFound={setNotFound}
            setApi404message={setApi404message}
            setApi={setApi}
        />
      )
}
export default ModelsApi;