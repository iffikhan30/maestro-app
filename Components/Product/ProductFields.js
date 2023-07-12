import { View, Text, Heading, HStack, Icon } from 'native-base';
import React, { useState } from 'react';
import { TouchableOpacity, Animated } from 'react-native';
import Octicons from '@expo/vector-icons/Octicons';
const ProductFields = (props) => {
  const [expanded, setExpanded] = useState(false);
  const [animation] = useState(new Animated.Value(0));
  const [plusIcon, setPlusIcon] = useState('plus');

  const toggleCollapse = () => {
    if (expanded) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
      setPlusIcon('plus');
    } else {
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
      setPlusIcon('dash');
    }
    setExpanded(!expanded);
  };

  const contentHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 110], // Adjust this value to control the expanded content height
  });

  return (
        <View mb="2">
            <TouchableOpacity onPress={toggleCollapse}>
                <Heading fontWeight="400" size="xs" mb="2">{props.title} <Icon size="sm" as={Octicons} name={plusIcon} /></Heading>
            </TouchableOpacity>
            <Animated.View style={{ height: contentHeight, overflow: 'hidden' }}>
                {props.content.map((field, index) => (
                  field.value === null ? '':
                    <HStack flex={1} alignItems="center" justifyContent="space-between" key={index}>
                      <Heading 
                      _dark={{
                          color: "primary.400"
                      }} 
                      _light={{
                          color: "secondary.400"
                      }} 
                      size="xs" fontWeight={300}>{field.title}</Heading>
                      <Text fontWeight={200} >{field.value}</Text>
                    </HStack>
                ))}
            </Animated.View>
        </View>
      );

      
};

export default ProductFields;