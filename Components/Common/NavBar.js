import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HStack, Pressable, Center, Icon, Badge, Modal } from "native-base";
import { useNavigation, useIsFocused } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Search from '../Search/Search';

const getWishlist = async () => {
  try {
    const wishlist = await AsyncStorage.getItem('wishlist');
    return wishlist ? JSON.parse(wishlist) : [];
  } catch (error) {
    console.log('Error getting wishlist:', error);
    return [];
  }
};

const NavBar = () => {
  const navigation = useNavigation();
  const [ selected, setSelected ] = React.useState(1);
  const isFocused = useIsFocused();
  const [brandScreen, setBrandScreen] = React.useState("1");
  const [wishlist, setWishlist] = React.useState([]);
  
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('state', () => {
      if (isFocused) {
        const currentRoute = navigation.getCurrentRoute();
        const currentRouteName = currentRoute?.name;
        setBrandScreen(currentRouteName == 'Brands' ? '1' : '0');
        setSelected(currentRouteName == 'Brands' ? 1 : (currentRouteName == 'Search' ? 2 : (currentRouteName == 'Wish' ? 3 : 0)));
      }
    });

    return unsubscribe;
  }, [navigation, isFocused]);

  //Get wishlist 
  React.useEffect(() => {
    setInterval(() => { 
    const fetchWishlist = async () => {
      const wishlistData = await getWishlist();
      setWishlist(wishlistData);
    };
    fetchWishlist();
  }, 1000)
  }, []);

  
  const [ searchModal, setSearchModal ] = React.useState(false);

    return (
      brandScreen == 1 ? '' :
        <Center position="absolute" w="100%" bottom="0">
          <Modal isOpen={searchModal} onClose={() => setSearchModal(false)}>
            <Modal.Content maxWidth="400px">
                <Modal.CloseButton />
                <Modal.Body>
                    <Search />
                </Modal.Body>
            </Modal.Content>
        </Modal>
          <HStack 
          _dark={{
            backgroundColor: "primary.1000",
            borderColor: "primary.1200"
          }} 
          _light={{
            backgroundColor: "secondary.1000",
            borderColor: "secondary.1200"
          }} 
          w="35%"
          h="10"
          my="3"
          rounded="xl"  
          blurRadius={90}
          borderWidth="1" 
          alignItems="center" safeAreaBottom>
            <Pressable cursor="pointer" opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={() => { 
              navigation.navigate('Brands') 
            } }>
              <Center borderRightWidth="1" 
              _dark={{
                borderColor: "primary.1100"
              }} 
              _light={{
                borderColor: "secondary.1200"
              }} py="2">
                <Icon as={<Ionicons name={selected === 1 ? 'home' : 'home-outline'} />}
                _dark={{
                  color: "primary.1100"
                }} 
                _light={{
                  color: "secondary.1100"
                }} size="lg" />
              </Center>
            </Pressable>
            
            <Pressable cursor="pointer" opacity={selected === 2 ? 1 : 0.5} py="2" flex={1} onPress={() => 
              { 
                navigation.navigate('Search',{
                  bartitle: "Search",
                })
              }
              }>
              <Center borderRightWidth="1" 
              _dark={{
                borderColor: "primary.1100"
              }} 
              _light={{
                borderColor: "secondary.1200"
              }} py="2">
                <Icon as={<Ionicons name={selected === 2 ? 'search' : 'search-outline'} />}
                _dark={{
                  color: "primary.1100"
                }} 
                _light={{
                  color: "secondary.1100"
                }}
                size="lg" />
              </Center>
            </Pressable>
            <Pressable cursor="pointer" opacity={selected === 3 ? 1 : 0.5} py="2" flex={1} onPress={() => {
              navigation.navigate('Wish',{
                bartitle: "Wish List",
              }) }}>
              <Center>
              {!Array.isArray(wishlist) ? '': <Badge position={'absolute'} w={4} h={4} 
                _dark={{
                  backgroundColor: "primary.100",
                }} 
                _light={{
                  backgroundColor: "secondary.100",
                }}
                rounded="full" top={-4} right={0} zIndex={1} 
                _text={{
                  fontSize: 8,
                }}
                p={0}>
                  {wishlist.length}
                </Badge>}
                <Icon as={<Ionicons name={selected === 3 ? 'heart' : 'heart-outline'} />}
                _dark={{
                  color: "primary.1100"
                }} 
                _light={{
                  color: "secondary.1100"
                }}
                size="lg" />
              </Center>
            </Pressable>
          </HStack>
        </Center>
    )
}
export default NavBar;