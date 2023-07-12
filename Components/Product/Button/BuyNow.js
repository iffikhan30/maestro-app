import * as React from 'react';
import { Linking } from 'react-native';
import { Button } from "native-base";
import Options from '../../Helper/Options';

const BuyNow = (props) => {
    const whatsappNumber = Options.number;
    const WhatsappBuyNowText = Options.WhatsappBuyNowText;
    const supportedURL = `https://watchmaestro.com/checkout/?add-to-cart=${props.productid}&quantity=1`;
    const handlePress = React.useCallback(async () => {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(supportedURL);
    
        if (supported) {
          // Opening the link with some app, if the URL scheme is "http" the web link should be opened
          // by some browser in the mobile
          await Linking.openURL(supportedURL);
        } else {
          Alert.alert(`Don't know how to open this URL: ${supportedURL}`);
        }
      }, [supportedURL]);
    return (
        <Button 
            py="4" 
            variant="solid" 
            rounded="lg" 
            _dark={{
                backgroundColor: "primary.1300",
                color: "primary.50"
            }} 
            _light={{
                backgroundColor: "primary.1300",
                color: "secondary.50"
            }}
            onPress={()=>{
                Linking.openURL(`whatsapp://send?text=${WhatsappBuyNowText}+${props.productTitle}%3F&phone=${whatsappNumber}`)
            }}
        >Buy Now</Button>
    )
}
export default BuyNow;