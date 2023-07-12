import { SafeAreaView } from "react-native-safe-area-context";
import { useColorMode, HStack, IconButton, Icon, Heading } from "native-base";
import AntDesign from '@expo/vector-icons/AntDesign';
import Mode from "./Mode";
import TopBar from "./TopBar";
import Network from "../Internet/Network";
import ErrorTopSlide from "../Internet/ErrorTopSlide";

const AppBar = (props) => {
    const headerTitle = props.route.params ? ( props.route.params.bartitle ? props.route.params.bartitle : '' ) : '';
    const {colorMode,onChangeMode}  = useColorMode();
    const gooBack = () => {
        props.navigation.goBack();
    }
    return (
        <SafeAreaView>
            <TopBar/>
            {Network() === true ? '' : <ErrorTopSlide />}
            <HStack pt="3" pb="3" width="100%" alignItems="center" justifyContent="space-between">
            {props.route.name == 'Brands' ? '' : 
                <IconButton value={colorMode} onPress={gooBack}
                icon={<Icon 
                    as={AntDesign} 
                    name="arrowleft" 
                    _dark={{
                        color: "primary.100"
                    }}
                    _light={{
                        color: "secondary.100"
                    }}
                    />} 
                    borderRadius="full" 
                    _icon={{
                        color: "primary.100",
                        size: "md"
                    }}
                    _ios={{
                        _icon: {
                            color: "secondary.100",
                            size: "2xl"
                        }
                    }} />
                }
                {props.route.name == 'Brands' ? '' : <Heading isTruncated fontSize="md" textTransform="capitalize">{headerTitle}</Heading>}
                <Mode onAppModeColor={onChangeMode} />
            </HStack>
        </SafeAreaView>
    )
}
export default AppBar;