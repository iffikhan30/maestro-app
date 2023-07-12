import { Box, Heading } from "native-base";

const ApiError = (props) =>{
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
export default ApiError;