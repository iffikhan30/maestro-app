import { Box, Button } from 'native-base';
import React, { useRef, useState, useEffect } from 'react';
import { useWindowDimensions, ScrollView, StyleSheet, Image } from 'react-native';

var styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    width: '100%',
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    borderColor: '#000000',
    borderWidth: 1,
    borderStyle: 'solid'
  },
});

const Gallery = (props) => {
  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const contentWidth = useWindowDimensions().width;

  useEffect(() => {
    setContainerWidth(contentWidth);
  }, [contentWidth]);

  const scrollToIndex = (index) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: index * containerWidth, animated: true });
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      scrollToIndex(newIndex);
    }
  };

  const handleNext = () => {
    if (currentIndex < props.gallery.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      scrollToIndex(newIndex);
    }
  };

  return (
    <Box width={containerWidth}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const { x } = event.nativeEvent.contentOffset;
          const index = Math.round(x / containerWidth);
          setCurrentIndex(index);
        }}
        onLayout={(event) => {
          setContainerWidth(event.nativeEvent.layout.width);
        }}
      >
        {props.gallery.map((item, i) => (
          <Box key={i} style={{ width: containerWidth }} 
          _dark={{
            backgroundColor: "primary.600"
          }} 
          _light={{
            backgroundColor: "secondary.600"
          }}
          >
            <Image
              testID={item.i}
              fadeDuration={500}
              source={{ uri: item }}
              resizeMode="cover"
              style={{ width: containerWidth, height: 350 }}
            />
          </Box>
        ))}
      </ScrollView>
      <Box style={styles.pagination}>
        {props.gallery.map((item, i) => (
          <Box
            key={i}
            style={[
              styles.paginationDot,
              { backgroundColor: currentIndex === i ? '#000000' : '#00000000' },
            ]}
          />
        ))}
      </Box>
      <Box style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10, display: 'none' }}>
        <Button onPress={handlePrevious} disabled={currentIndex === 0}>
          Previous
        </Button>
        <Button onPress={handleNext} disabled={currentIndex === props.gallery.length - 1}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Gallery;
