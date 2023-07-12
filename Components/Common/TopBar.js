import { StatusBar, useColorMode} from "native-base";
const TopBar = () => {
    const { colorMode, onChangeMode } = useColorMode();
    return (
        <StatusBar
            barStyle={colorMode === 'light' ? 'dark-content' : 'light-content'}
            translucent
            backgroundColor="transparent"
        />
            
    )
}
export default TopBar;