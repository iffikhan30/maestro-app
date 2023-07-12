import * as React from 'react';
import { Image } from 'react-native';
import { Box,Pressable } from "native-base";
import { useNavigation } from '@react-navigation/native';

const BrandItem = (props) => {
    const navigation = useNavigation();
    const brandid = props.termid;
    const brandslug = props.slug;
    const brandtitle = props.title;
    return (
        <Box 
            rounded="lg"
            _dark={{
                backgroundColor: "primary.200"
              }} 
            _light={{
                backgroundColor: "primary.50"
            }} 
            p="1.5" 
            shadow={2} 
            h="150" 
            justifyContent="center" 
            flexBasis="46%" 
            m="1.5" 
            key={props.key} >
                <Pressable onPress={() => navigation.navigate('Models',{
                    bartitle: brandtitle,
                    brandtitle: brandtitle,
                    brandid: brandid,
                    brandslug: brandslug
                })}>
                    <Image
                        testID={props.key}
                        alt={props.title}
                        fadeDuration={500}
                        source={{ uri: props.imageuri }}
                        resizeMode={'contain'}
                        style={{ width: '100%', height: 50, tintColor: 'white'}}
                    />
                </Pressable>
        </Box>
    )
}
export default BrandItem;