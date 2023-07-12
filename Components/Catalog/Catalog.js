import * as React from 'react';
import { Box, HStack} from "native-base";
import CatalogList from './CatalogList';
import { useRoute } from '@react-navigation/native';
import Wrapper from '../UI/Wrapper';
import CatalogApi from '../Apis/CatalogApi';
import ApiError from '../Errors/ApiError';
import ApiNotFound from '../Errors/ApiNotFound';
import SortBy from '../Filter/SortBy';
import Filter from '../Filter/Filter';

const Cataglog = (props) => {
    const route = useRoute();
    const { brandid, brandslug, brandtitle, modelid, modelslug, modeltitle  } = route.params;
    const [api404, setApi404] = React.useState(true);
    const [notFound, setNotFound] = React.useState(true);
    const [api404message, setApi404message] = React.useState();
    const [api, setApi] = React.useState([]);
    const [sortValue, setSortValue] = React.useState('');

    const [filteredApi, setFilteredApi] = React.useState([]);
    const handleSortChange = (value) => {
        setSortValue(value);
        if(value === 'price-asc'){
            const sortedData = [...api].sort((a,b) => a.regular_price - b.regular_price);
            setFilteredApi(sortedData);
        } else if (value == 'price-desc') {
            const sortedData = [...api].sort((a, b) => b.regular_price - a.regular_price);
            setFilteredApi(sortedData);
        }
    };

    const handleYearChange = (value) => {
        // Filter the catalog items based on the selected year
        const filteredData = api.filter((item) => item.year_of_production == value);
        setFilteredApi(filteredData);
    }
    return (
        <Wrapper>
            <Box>
                {notFound === true ? 
                (api.length > 1 ? <HStack space={3} flex={1} flexDirection="row" w="100%" flexWrap="wrap" >
                    <Filter items={api} handleYearChange={handleYearChange} />
                    <SortBy sortValue={sortValue} handleSortChange={handleSortChange} />
                </HStack> : '') : ''}
                <CatalogApi
                setApi404={setApi404}
                setNotFound={setNotFound}
                setApi404message={setApi404message}
                setApi={setApi}
                setModelId={props.catalogid ? props.catalogid : modelid}
                />
                 { props.catalogid ? 
                    <CatalogList items={filteredApi.length > 0 ? filteredApi : api} brandid={brandid} brandslug={brandslug} brandtitle={brandtitle} modelid={props.catalogid} modelslug={modelslug} modeltitle={modeltitle} /> :
                    ( api404 === false ? 
                        <ApiError apiMessage={api404message} /> : ( notFound != true ?  <ApiNotFound apiMessage={api404message} notFound={setNotFound} /> : <CatalogList items={filteredApi.length > 0 ? filteredApi : api} brandid={brandid} brandslug={brandslug} brandtitle={brandtitle} modelid={modelid} modelslug={modelslug} modeltitle={modeltitle} /> )
                    )
                }
            </Box>
        </Wrapper>
    )
}

export default Cataglog;