import * as React from 'react';
import { Image } from 'react-native';
import { Box, Heading, Text, Pressable } from "native-base";
import { useNavigation } from '@react-navigation/native';
import Price from '../Helper/Price';
const CatalogItem = (props) => {
    const navigation = useNavigation();
    const brandid = props.brandid;
    const brandslug = props.brandslug;
    const brandtitle = props.brandtitle;
    const brandname = props.brand;
    const modelid = props.modelid;
    const modelslug = props.modelslug;
    const modeltitle = props.modeltitle;
    const modelname = props.model;
    const productid = props.productid;
    const regularPrice = props.regular_price;
    const salePrice = props.sale_price;

    return (
        <Box 
            rounded="lg"
            _dark={{
                backgroundColor: "primary.200"
              }} 
            _light={{
                backgroundColor: "primary.50"
            }} 
            px="1.5"
            py="1.5" 
            h="320"
            shadow={2} 
            justifyContent="center" 
            flexBasis="46.5%" 
            m="1.5" 
            key={props.key} 
            >
            <Pressable onPress={() => navigation.navigate('Product',{
                bartitle: brandtitle ? brandtitle : brandname + ' ' + modeltitle ? modeltitle : modelname,
                brandid: brandid,
                brandslug: brandslug,
                modelid: modelid,
                modelslug: modelslug,
                productid: productid,
            })}>
                <Image 
                    testID={props.key}
                    alt={props.catalogtitle}
                    fadeDuration={500}
                    source={{ uri: props.thumbnail }}
                    resizeMode={'contain'}
                    style={{ width: '100%', height: 150 }}
                />
                <Heading textAlign="center" isTruncated size="xs" fontWeight="500" my="2"
                _dark={{
                    color: "primary.100"
                }} 
                _light={{
                    color: "primary.100"
                }}  >{ props.brandtitle } {props.year_of_production}</Heading>
                <Heading textAlign="center" size="xs" fontSize="11" fontWeight="400" 
                _dark={{
                    color: "primary.400"
                }} 
                _light={{
                    color: "secondary.400"
                }} >{modelname + ' ' +  props.case_diameter + 'mm' + ' '+ props.year_of_production + ' ' + props.condition }</Heading>
                <Text textAlign="center" mt="1.5" fontSize="lg" fontWeight="500">
                    { props.stock == 0 ? <Text> Sold Out </Text> : <Price currency="AED" sale={salePrice} regular={regularPrice} /> }
                </Text>
                <Heading mt="2" textAlign="center" size="xs" fontSize="11" fontWeight="400" 
                _dark={{
                    color: "primary.400" 
                }} 
                _light={{
                    color: "secondary.400" 
                }} >{ props.scope_of_delivery }</Heading>
            </Pressable>
        </Box>
    )
}
export default CatalogItem;