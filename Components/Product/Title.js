import * as React from 'react';
import { Heading } from "native-base";
const Title = (props) =>{
    return (
        <Heading size="md" fontWeight={500} >{props.title}</Heading>
    )
}
export default Title;