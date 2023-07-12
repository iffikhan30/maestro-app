import { Box, Heading } from "native-base";
import { Image } from "react-native";

const NoWatch = () =>{
    return (
        <Box 
        _dark={{
            backgroundColor: "primary.200"
          }} 
        _light={{
            backgroundColor: "primary.50"
        }} rounded="2xl" textAlign="center" minHeight="350" alignItems="center" justifyContent="center" >
            <Image 
            testID="404"
            alt="No Watch"
            fadeDuration={500}
            source={{ uri: 'https://watchmaestro.com/wp-content/uploads/2023/06/no-watch.png' }}
            resizeMode={'contain'}
            style={{ width: '100%', height: 150 }}
            />
            <Heading 
            _dark={{
                backgroundColor: "primary.200"
            }} 
            _light={{
                backgroundColor: "secondary.200"
            }} size="sm" mt="3" fontWeight="normal" >No watches available right now</Heading>
        </Box>
    )
}
export default NoWatch;