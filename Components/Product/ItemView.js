import { Text, Icon } from "native-base";
import Ionicons from '@expo/vector-icons/Ionicons';
const ItemView = (props) => {
    return (
        <Text
        color="primary.700" fontWeight="400"><Icon 
            as={<Ionicons name="flame-outline" />}
            _dark={{
                color: "primary.700"
            }} 
            _light={{
                color: "secondary.700"
            }} size="lg" />This item has {props.itemview} views this week.</Text>
    )
}
export default ItemView;