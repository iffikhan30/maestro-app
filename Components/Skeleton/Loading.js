import { Box } from 'native-base';
import { Platform } from 'react-native';

const Loading = () => {
    const AnimatedLottieView = Platform.select({
        ios: () => require('lottie-react-native'),
        android: () => require('lottie-react-native'),
        web: () => null // or any other fallback for web platform
      })();

    return (
        <Box 
        _dark={{
            backgroundColor: "primary.200"
          }} 
        _light={{
            backgroundColor: "primary.50"
        }} rounded="2xl" p="16" textAlign="center" minHeight="350" alignItems="center" justifyContent="center" >
            {Platform.OS != 'web' ? <AnimatedLottieView style={{width:100}} source={require('../../assets/lottie-clock-gif.json')} autoPlay loop /> : 'Loading...'}
        </Box>
    )
}
export default Loading;