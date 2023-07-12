import * as React from 'react';
import { HStack, Text, Slider } from "native-base";
const PriceRange = (props) => {
    const prices = props.prices.map((item) => item.regular_price);
    const lowest = Math.min(...prices);
    const highest = Math.max(...prices);
    const middleprice = (highest+lowest)/2;
    const [onPriceValue, setOnPriceValue] = React.useState(middleprice);
    const [onPriceEndValue, setOnPriceEndValue] = React.useState(middleprice);
    
    return (
        !Array.isArray(props.prices) ? '': <><HStack flex={1} justifyContent="space-between" mb={'2'}>
            <Text>Price </Text><Text>{onPriceValue}-{onPriceEndValue}</Text><Text fontSize={'xs'}>[ {lowest} - {highest} ]</Text>
        </HStack>
        
            <Slider defaultValue={middleprice} minValue={lowest} maxValue={highest}  size="sm" colorScheme="green" 
                onChange={v => {
                    setOnPriceValue(Math.floor(v));
                }} onChangeEnd={v => {
                    v && setOnPriceEndValue(Math.floor(v));
                }} step={10}>
                <Slider.Track bg="green.100">
                    <Slider.FilledTrack bg="green.600" />
                </Slider.Track>
                <Slider.Thumb />
            </Slider>
        </>
    )
}
export default PriceRange;