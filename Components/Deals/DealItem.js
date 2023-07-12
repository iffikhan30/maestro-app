import * as React from 'react';
import { useWindowDimensions, Image, Animated } from 'react-native';
import { Box, Heading, Text, Pressable } from "native-base";
import Price from '../Helper/Price';
import LottieView from 'lottie-react-native';

const DealItem = (props) => {
    const opacityValue = React.useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
        Animated.timing(opacityValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }).start();
    }, []);
      
    const brandid = props.brandid;
    const brandslug = props.brandslug;
    const modelid = props.modelid;
    const modelslug = props.modelslug;
    const productid = props.productid;
    const productslug = props.productslug;
    const regularPrice = props.regular_price;
    const salePrice = props.sale_price;
    const currency = props.currency;
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
            py="14.5" 
            shadow={2} 
            justifyContent="center" 
            flexBasis="97%" 
            m="1.5" 
            key={props.key} 
            >
                <Animated.Text style={[ { textAlign: 'center', opacity: opacityValue }]}>
                    <Heading justifyContent="center">Deal of the Week!</Heading>
                </Animated.Text>

                <Heading textAlign="center" isTruncated size="xs" fontWeight="500" my="2"
                _dark={{
                    color: "primary.100"
                }} 
                _light={{
                    color: "primary.100"
                }}  >{props.brandslug.replace(/-/g, ' ').charAt(0).toUpperCase() + props.brandslug.replace(/-/g, ' ').slice(1)}</Heading>
                <Heading textAlign="center" size="xs" fontSize="11" fontWeight="400" 
                _dark={{
                    color: "primary.400"
                }} 
                _light={{
                    color: "secondary.400"
                }} >{props.excerpt}</Heading>
                <Text textAlign="center" mt="1.5" fontSize="lg" fontWeight="500">
                    { props.stock == 0 ? <Text>Sold</Text> : <Price currency={currency} sale={salePrice} regular={regularPrice} /> }
                </Text>
                <Heading mt="2" textAlign="center" size="xs" fontSize="11" fontWeight="400" 
                _dark={{
                    color: "primary.400"
                }} 
                _light={{
                    color: "secondary.400"
                }} >{props.extra}</Heading>
                <Image
                    testID={props.key}
                    alt={props.title}
                    fadeDuration={100}
                    source={{ uri: props.imageuri }}
                    resizeMode={'contain'}
                    style={{ width: '100%', minHeight: 350 }}
                />
                {props.gallery.map((item, i) => (
                    <Image key={item.id}
                    testID={item.id}
                    alt={props.title}
                    fadeDuration={100*i}
                    source={{ uri: item.image }}
                    resizeMode="contain"
                    style={{ width: '100%', minHeight: 350 }}
                    />
                ))}
                
        </Box>
    )
}
export default DealItem;