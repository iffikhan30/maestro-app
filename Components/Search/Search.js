import React, { useState, useEffect } from 'react';
import Wrapper from '../UI/Wrapper';
import { Box, HStack, Text } from 'native-base';
import ErrorTopSlide from '../Internet/ErrorTopSlide';
import SearchBox from './SearchBox';
import Loading from '../Skeleton/Loading';
import CatalogItem from '../Catalog/CatalogItem';

const Search = () => {
  const [api404, setApi404] = useState(true);
  const [api404message, setApi404message] = useState();
  const [search, setSearch] = useState();
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {  
        fetch('https://watchmaestro.com/wp-json/watchy/v1/app/products/17')
      .then((response) => response.json())
      .then((responseJson) => {
        if( responseJson.code === 'rest_no_route' ) {
          setApi404(false);
          setApi404message(responseJson.message);
        } else {
          setFilteredDataSource(responseJson);
          setMasterDataSource(responseJson);
        }
          
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.brand
          ? item.brand.toUpperCase()+item.model.toUpperCase()
          : '';
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };
  return (
    <Wrapper>
        <Box>
          <SearchBox 
              onChangeText={(text) => searchFilterFunction(text)}
              value={search != null ? search : ''}
          />
          {(Array.isArray(filteredDataSource) && filteredDataSource.length > 0) ? <Text 
            _dark={{
              color: 'primary.100'
            }}
            _light={{
              color: 'secondary.100'
            }} my="2" >Count : {filteredDataSource.length}</Text> : '' } 

            { api404 === false ? <ErrorTopSlide title={api404message}/> : 
              (Array.isArray(filteredDataSource) && filteredDataSource.length > 0) ? 
                <HStack space={0} flex={1} flexDirection="row" w="100%" flexWrap="wrap">
                  {filteredDataSource.map((item,i) => (
                    <CatalogItem
                      key={item.id}
                      duration={i+1}
                      productid={item.id}
                      brand={item.brand}
                      model={item.model}
                      stock={item.stock}
                      regular_price={item.regular_price}
                      sale_price={item.sale_price}
                      scope_of_delivery={item.scope_of_delivery}
                      case_diameter={item.case_diameter}
                      year_of_production={item.year_of_production}
                      condition={item.condition}
                      thumbnail={item.thumbnail}
                      modeltitle={item.brand}
                      modelslug={item.brand}
                      modelid={item.id}
                      brandtitle={item.model}
                      brandslug={item.model}
                      brandid={item.id}
                  />
                  ))}
                </HStack> : <Loading />
            }
      </Box>
    </Wrapper>
  );
};

export default Search;
