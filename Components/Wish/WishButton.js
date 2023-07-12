import * as React from 'react';
import { Icon, Pressable } from "native-base";
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useToast } from 'native-base';

    // Add an item to the wishlist and check already in wishlist
    const addToWishlist = async (item,toast,navigation) => {
        try {
            const existingWishlist = await getWishlist();
            const isItemInWishlist = existingWishlist.some((i) => i.id === item.id);

            if (isItemInWishlist) {
                toast.show({
                    description: "Watch is already in the wishlist!",
                });
                navigation.navigate('Wish',{
                    bartitle: "Wish List",
                });
                return;
            }

            const updatedWishlist = [...existingWishlist, item];
            toast.show({
                description: "Watch Added!"
            })
            await AsyncStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
        } catch (error) {
            console.log('Error adding to wishlist:', error);
        }
    };
  
  // Retrieve the current wishlist
  const getWishlist = async () => {
    try {
      const wishlist = await AsyncStorage.getItem('wishlist');
      return wishlist ? JSON.parse(wishlist) : [];
    } catch (error) {
      console.log('Error getting wishlist:', error);
      return [];
    }
  };
  
const WishButton = (props) => {
    const navigation = useNavigation();
    const toast = useToast();
    const [selected, setSelected] = React.useState(0);

    //If product already in wishlist icon fill color
    const checkProductAlreadyInWIshlist = async (id) => {
        try {
            const existingWishlist = await getWishlist();
            const isItemInWishlist = existingWishlist.some((i) => i.id === id);
            if (isItemInWishlist) {
                setSelected(1);
            }
        }catch{
            console.log('Something Went Wrong:', error);
        }
    }
    checkProductAlreadyInWIshlist(props.productid);

    //Add to wishlist
    const handleAddToWishlist = () => {
        const item = { key: props.productid, id: props.productid, image: props.productImage, title: props.productTitle, brandName: props.brandName };
        addToWishlist(item,toast,navigation);
        setSelected(1);
    };
    
    
    return (
        <Pressable position="absolute" top="0" zIndex="2" right="0" px="3" py="1.5" cursor="pointer" opacity={selected === 1 ? 1 : 0.5} onPress={handleAddToWishlist}>
            <Icon 
            as={<Ionicons name={ selected === 1 ? 'heart' : 'heart-outline' } />}
            _dark={{
                color: "primary.1100" 
            }} 
            _light={{
                color: "secondary.1100" 
            }} size="lg" />
        </Pressable>
    )
}
export default WishButton;