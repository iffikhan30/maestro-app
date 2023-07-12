import { Box, Input, Icon } from "native-base";
import Ionicons from '@expo/vector-icons/Ionicons';
const SearchBox = (props) => {
    return (
        <Box>
            <Input variant="rounded" 
                _dark={{
                    backgroundColor: "primary.200",
                    color: "primary.100"
                }}
                _light={{
                    backgroundColor: "secondary.50",
                    color: "secondary.100"
                }}
                focusOutlineColor="#fff" 
                onChangeText={props.onChangeText}
                value={props.value} 
                placeholder="Search Here" 
                w="100%"
                InputRightElement={ <Icon size={5} mr="2"
                    as={<Ionicons name="search-outline" />}
                    _dark={{
                        color: "primary.1100" 
                    }} 
                    _light={{
                        color: "secondary.1100" 
                    }} /> }
            />
        </Box>
    )
}
export default SearchBox;