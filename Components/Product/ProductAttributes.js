import * as React from 'react';
import { Heading, Text, HStack, View } from "native-base";
import { useNavigation } from '@react-navigation/native';
import { Pressable, Dimensions } from 'react-native';
import Options from '../Helper/Options';
const ProductAttributes = (props) => {
    const navigation = useNavigation();
    const attrs = props.attributes;
    if (!Array.isArray(attrs)) {
        // Handle the case when attrs is not an array
        return null; // or display an error message, or render a fallback UI
    }
    return (
        <View>
            <Heading fontWeight="400" size="sm" mb="2">{Options.additionalInformationText}</Heading>
            {attrs.map((item,i) => (
                item.termname != null ? 
                <HStack alignItems="center" justifyContent="space-between" key={i}>
                    <Heading 
                     _dark={{
                        color: "primary.400"
                    }} 
                    _light={{
                        color: "secondary.400"
                    }} size="xs" fontWeight={300}
                    >{item.termkey}:</Heading>
                    <Pressable onPress={() => navigation.navigate(item.termkey,{
                        bartitle: item.termname,
                        brandtitle: item.termname,
                        brandid: item.termid,
                        brandslug: item.termname
                    })}>
                        <Text textDecorationLine="underline">
                            {item.termname}
                        </Text>
                    </Pressable>
                </HStack> : ''
            ))}

        </View>
    )
}
export default ProductAttributes;