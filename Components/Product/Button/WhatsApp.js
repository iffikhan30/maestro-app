import * as React from 'react';
import { Linking } from 'react-native';
import { IconButton, Icon, Button } from "native-base";
import Ionicons from '@expo/vector-icons/Ionicons';
import Options from '../../Helper/Options';
const WhatsApp = (props) =>{
    const whatsappNumber = Options.number;
    const WhatsappText = Options.WhatsappText;
    return (
        <Button
            variant="solid" 
            rounded="lg"
            py="4"
            _dark={{
                backgroundColor: "primary.900"
            }} 
            _light={{
                backgroundColor: "secondary.900"
            }}
            
            leftIcon={<Icon size="md" as={Ionicons} name="logo-whatsapp" color="white" />}
            onPress={()=>{
                Linking.openURL(`whatsapp://send?text=${WhatsappText}+${props.productTitle}%3F&phone=${whatsappNumber}`)
            }}
            
        >WhatsApp</Button>
    )
}
export default WhatsApp;