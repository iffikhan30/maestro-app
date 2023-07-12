import * as React from 'react';
import { Box } from "native-base";
import ModelsList from './ModelsList';
import { useRoute } from '@react-navigation/native';
import Wrapper from '../UI/Wrapper';
import Options from '../Helper/Options';
import ApiError from '../Errors/ApiError';
import ApiNotFound from '../Errors/ApiNotFound';
import ModelsApi from '../Apis/ModelsApi';
import Cataglog from '../Catalog/Catalog';

const Models = (props) => {
    const route = useRoute();
    const { brandid, brandslug, brandtitle } = route.params;
    const ModelTitle = Options.modelTitle;
    const [api404, setApi404] = React.useState(true);
    const [notFound, setNotFound] = React.useState(true);
    const [api404message, setApi404message] = React.useState();
    const [api, setApi] = React.useState([]);
    return (
        <Wrapper>
        <Box>
            <ModelsApi
                setApi404={setApi404}
                setNotFound={setNotFound}
                setApi404message={setApi404message}
                setApi={setApi}
                setBrandId={brandid}
            />
            { api404 === false ? <ApiError apiMessage={api404message} /> : ( 
        notFound === 'models' ? <Cataglog catalogid={brandid} /> : <ModelsList items={api} title={ModelTitle} brandid={brandid} brandslug={brandslug} brandtitle={brandtitle} /> 
                )
            }
        </Box>
        </Wrapper>
    )
}

export default Models;