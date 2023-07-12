import { useWindowDimensions } from "react-native";
import { Heading, useColorModeValue, Box } from "native-base";
import RenderHTML from "react-native-render-html";
const Content = (props) => {
    const contentWidth = useWindowDimensions().width-48;
    const mixedStyle = {
        body: {
            whiteSpace: 'normal',
            color: 'gray'
        },
        p: {
          color: '#898989'
        },
        a: {
            color: '#ffffff'
        }
    }
    return (
        <Box>
            <Heading fontWeight="400" size="sm">DESCRIPTION:</Heading>
            <RenderHTML contentWidth={contentWidth} tagsStyles={mixedStyle} source={{html: props.content}} />
        </Box>
    )
}

export default Content;
