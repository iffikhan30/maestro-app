import { useRoute } from "@react-navigation/native";
import { Box, Heading, useToast } from "native-base";

const ApiNotFound = (props) => {
    const route = useRoute();
    const toast = useToast();
    return (
        <Box 
        _dark={{
            backgroundColor: "primary.200"
          }} 
        _light={{
            backgroundColor: "primary.50"
        }} rounded="2xl" textAlign="center" minHeight="250" alignItems="center" justifyContent="center" >
            <Heading 
            _dark={{
                backgroundColor: "primary.200"
            }} 
            _light={{
                backgroundColor: "secondary.200"

            }} size="sm" mt="3" fontWeight="normal" textAlign="center">{props.apiMessage}</Heading>
        </Box>
    )
}
export default ApiNotFound;