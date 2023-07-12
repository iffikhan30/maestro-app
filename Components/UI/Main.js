import * as React from 'react';
import { View } from "native-base";
import { useNavigation, useIsFocused } from '@react-navigation/native';

const Main = ({ children }) => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [paddingSize, setPaddingSize] = React.useState("1.5");
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('state', () => {
          if (isFocused) {
            const currentRoute = navigation.getCurrentRoute();
            const currentRouteName = currentRoute?.name;
            setPaddingSize(currentRouteName == 'Product' ? '0' : '1.5');
          }
        });
    
        return unsubscribe;
      }, [navigation, isFocused]);
    return(
        <View style={{flex: 1}}
        _dark={{
            backgroundColor: "primary.50"
          }} 
        _light={{
            backgroundColor: "secondary.50"
        }} px={paddingSize} >{children}</View>
    )
}
export default Main;