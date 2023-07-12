import * as React from 'react';
import { Box, HStack, Icon, Slide, Text } from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons';

const ErrorTopSlide = (props) => {
    return (
        <Slide in="true" placement="top">
          <Box w="100%" position="absolute" p="2" borderRadius="xs" bg="emerald.100" alignItems="center" justifyContent="center" 
            _dark={{
                backgroundColor: "primary.100"
            }} 
            _light={{
                backgroundColor: "secondary.100"
            }} safeArea>
            <HStack space={2} alignItems="center">
                <Icon 
                as={<Ionicons name="alert-circle-outline" />}
                _dark={{
                    color: "primary.1100"
                }} 
                _light={{
                    color: "secondary.1100"
                }} size="lg" />
                <Text 
                    _dark={{
                        color: "primary.1100"
                    }} 
                    _light={{
                        color: "secondary.1100"
                    }} textAlign="center"  fontWeight="medium">
                    {props.title ? props.title : 'No Internet Connection'}
                </Text>
            </HStack>
          </Box>
        </Slide>
    )
}
export default ErrorTopSlide;