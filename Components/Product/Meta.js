import * as React from 'react';
import { Text } from "native-base";
const MetaData = (props) => {
    return (
        <Text fontSize="xs"  
            _dark={{
                color: "primary.400"
            }} 
            _light={{
                color: "primary.400"
            }} 
            fontWeight="400" mt="1" mb="0">
            {props.name} {props.value}
        </Text>
    )
}
export default MetaData;