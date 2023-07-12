import * as React from 'react';
import { Image } from 'react-native';
import { Box, Heading,Pressable } from "native-base";
import { useNavigation } from '@react-navigation/native';

const ModelItem = (props) => {
    const navigation = useNavigation();
    const brandtitle = props.brandtitle;
    const brandid = props.brandid;
    const brandslug = props.brandslug;
    const modelid = props.modelid;
    const modelslug = props.modelslug;
    const modeltitle = props.modeltitle;
    return (
        <Box 
            rounded="lg"
            _dark={{
                backgroundColor: "primary.200"
              }} 
            _light={{
                backgroundColor: "primary.50"
            }} 
            px="3"
            py="1.5"  
            h="300"
            shadow={2} 
            justifyContent="center"
            flexBasis="46.5%"
            m="1.5"
            key={props.key} >
                <Pressable onPress={() => navigation.navigate( 'Catalog', {
                        bartitle: brandtitle + ' ' + modeltitle,
                        brandtitle: brandtitle,
                        brandid: brandid,
                        brandslug: brandslug,
                        modeltitle: modeltitle,
                        modelid: modelid,
                        modelslug: modelslug
                    })}>
                    <Image
                        testID={props.key}
                        alt={props.title}
                        fadeDuration={500}
                        source={{ uri: props.imageuri }}
                        resizeMode={'contain'}
                        style={{ width: '100%', height: 150 }}
                    />
                    <Heading isTruncated size="xs" fontWeight="300" my="2" textAlign="center" 
                    _dark={{
                        color: "primary.400"
                    }} 
                    _light={{
                        color: "secondary.400"
                    }}  >{props.brandtitle}</Heading>
                    <Heading isTruncated size="sm" fontWeight="400" textAlign="center"
                    _dark={{
                        color: "primary.100"
                    }} 
                    _light={{
                        color: "primary.100"
                    }} >{props.title} {props.brandid}</Heading>
                </Pressable>
        </Box>
    )
}
export default ModelItem;