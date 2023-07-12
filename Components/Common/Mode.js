import { Switch, HStack, IconButton, Icon, useToast, useColorMode } from "native-base";
import Entypo from '@expo/vector-icons/Entypo';
import { useState, useEffect } from "react";

const Mode = () => {
    const {colorMode, toggleColorMode} = useColorMode();
    const [iconName, setIconName ] = useState("light-down");

    const onPressIcon = () => {
        toggleColorMode();
        setIconName('light-up')
    }

    useEffect(() => {
        setIconName(colorMode === "light" ? "light-up" : "light-down");
    }, [colorMode]);
    return (
        
            <IconButton value={colorMode} onPress={onPressIcon} onChangeMode={toggleColorMode}
                icon={<Icon 
                    as={Entypo} 
                    name={iconName} 
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
                    _hover={{
                        _icon: {
                            color: "secondary.100",
                            name: "light-up"
                        },
                        _ios: {
                            _icon: {
                                color: "secondary.100",
                                size: "2xl"
                            }
                        }
                    }} 
                    _pressed={{
                        _icon: {
                            color: "secondary.100",
                            name: "light-up"
                        },
                        _ios: {
                            _icon: {
                                color: "secondary.100",
                                size: "2xl"
                            }
                        }
                    }} 
                    _ios={{
                        _icon: {
                            color: "secondary.100",
                            size: "2xl"
                        }
                    }} />
    )
}
export default Mode;