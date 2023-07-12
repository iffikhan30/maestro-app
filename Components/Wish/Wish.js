import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Animated, StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Avatar, Box, HStack, Icon, VStack, Spacer,Text, Pressable } from 'native-base';

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

const removeFromWishlist = async (item) => {
  try {
    const existingWishlist = await getWishlist();
    const updatedWishlist = existingWishlist.filter((i) => i.id !== item.id);
    await AsyncStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  } catch (error) {
    console.log('Error removing from wishlist:', error);
  }
}

const Wish = () => {
  const navigation = useNavigation();
  const [wishlist, setWishlist] = React.useState([]);
  
  //Get wishlist 
  React.useEffect(() => {
    const fetchWishlist = async () => {
      const wishlistData = await getWishlist();
      setWishlist(wishlistData);
    };
    fetchWishlist();
  }, []);
  
  //Remove Wishlist
  const handleRemoveFromWishlist = (productid) => {
    const item = { id: productid };
    removeFromWishlist(item);
  }

  //swape animation
  const rowSwipeAnimatedValues = React.useMemo(() => {
    const swipeValues = {};
    wishlist.forEach((item) => {
      swipeValues[item.id] = new Animated.Value(0);
    });
    return swipeValues;
  }, [wishlist]);

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
        rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
      closeRow(rowMap, rowKey);
      handleRemoveFromWishlist(rowKey)
      const newData = [...wishlist];
      const prevIndex = wishlist.findIndex(item => item.key === rowKey);
      newData.splice(prevIndex, 1);
      setWishlist(newData);
  };
  const onRowDidOpen = rowKey => {
      console.log('This row opened', rowKey);
  };

  const onSwipeValueChange = swipeData => {
      const { key, value } = swipeData;
      rowSwipeAnimatedValues[key].setValue(Math.abs(value));
  };

  const renderItem = ({ item, index }) => 
    (<Box borderTopColor={'primary.50'} borderTopWidth={'1'}>
      <Pressable onPress={() => navigation.navigate('Product',{
        bartitle: item.brandName,
        productid: item.id,
      })} 
      _dark={{
        bg: 'coolGray.800'
      }} _light={{
        bg: 'white'
      }} >
        <Box pl="4" pr="5" py="2"
        _dark={{
          backgroundColor: "primary.300"
        }} 
        _light={{
          backgroundColor: "secondary.300"
        }} >
          <HStack alignItems="center" space={3}>
            <Avatar 
            _dark={{
              backgroundColor: "primary.600"
            }} 
            _light={{
              backgroundColor: "secondary.600"
            }} size="50px" source={{
              uri: item.image
            }} />
            <VStack w={'70%'}>
              <Text fontWeight={'medium'}>
                {item.title}
              </Text>
              <Text textTransform={'capitalize'} fontSize={'xs'}>
                {item.brandName}
              </Text>
            </VStack>
            <Spacer />
            <Icon 
            as={<Ionicons name='swap-horizontal' />}
            _dark={{
                color: "primary.1100" 
            }} 
            _light={{
                color: "secondary.1100" 
            }} size="lg" />
          </HStack>
        </Box>
      </Pressable>
    </Box>
  );

  const renderHiddenItem = ({ item }, rowMap) => (
    <View style={styles.rowBack}>
      <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnLeft]}
          onPress={() => closeRow(rowMap, item.key)}
      >
        <Text 
        _dark={{
          color: "primary.200"
        }} 
        _light={{
          color: "primary.50"
        }}>Close</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => deleteRow(rowMap, item.key)}
      >
        <Animated.View
            style={[
                styles.trash,
                {
                    transform: [
                        {
                            scale: rowSwipeAnimatedValues[
                              item.id
                            ].interpolate({
                                inputRange: [45, 90],
                                outputRange: [0, 1],
                                extrapolate: 'clamp',
                            }),
                        },
                    ],
                },
            ]}
        >
          <Image
              source={require('../../assets/trash.png')}
              style={styles.trash}
          />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
  return (
    <View>
      <Box>
        <SwipeListView
            data={wishlist}
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItem}
            rightOpenValue={-150}
            previewRowKey={'0'}
            previewOpenValue={-40}
            previewOpenDelay={3000}
            onRowDidOpen={onRowDidOpen}
            onSwipeValueChange={onSwipeValueChange}
        />
      </Box>
    </View>
  );
}
export default Wish;

const styles = StyleSheet.create({
  container: {
      backgroundColor: 'white',
      flex: 1,
  },
  backTextWhite: {
      color: '#FFF',
  },
  rowFront: {
      backgroundColor: '#fff',
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      justifyContent: 'center',
      height: 90,
  },
  rowBack: {
      alignItems: 'center',
      backgroundColor: '#DDD',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 15,
  },
  backRightBtn: {
      alignItems: 'center',
      bottom: 0,
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      width: 75,
  },
  backRightBtnLeft: {
      backgroundColor: 'white',
      right: 75,
  },
  backRightBtnRight: {
      backgroundColor: 'red',
      right: 0,
  },
  trash: {
      height: 25,
      width: 25,
  },
});