import * as React from 'react';
import { Text } from "native-base";

const numberFormat = (n) => {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Price = (props) => {
    if(props.sale != null && props.sale != ""){
        return (
            <Text 
            _dark={{
                color: "primary.100"
            }} 
            _light={{
                color: "primary.100"
            }} > {props.currency}
            <Text 
            _dark={{
                color: "primary.100"
            }} 
            _light={{
                color: "primary.100"
            }} > {props.sale ? numberFormat(props.sale) : ''} </Text>
            <Text textDecorationLine="line-through" fontSize="sm" fontWeight="300"
            _dark={{
                color: "primary.400"
            }} 
            _light={{
                color: "secondary.400"
            }} > {props.regular ? numberFormat(props.regular) : ''} </Text>
            </Text>
        )
    }else{
        return (
            <Text _dark={{
                color: "primary.100"
            }} 
            _light={{
                color: "primary.100"
            }}>{props.currency} {props.regular ? numberFormat(props.regular) : ''}</Text>
        )
    }
}
export default Price;