import React, {useEffect, useState} from 'react';
import * as Font from 'expo-font';
const FontsLoad = ({ children }) => {
    const [fontsLoaded, setFontsLoaded] = useState(false);
  
    useEffect(() => {
      const loadFonts = async () => {
        try {
          await Font.loadAsync({
            'Poppins-Thin': 'https://watchmaestro.com/fonts/Poppins-Thin.ttf',
            'Poppins-ThinItalic': 'https://watchmaestro.com/fonts/Poppins-ThinItalic.ttf',
            'Poppins-ExtraLight': 'https://watchmaestro.com/fonts/Poppins-ExtraLight.ttf',
            'Poppins-ExtraLightItalic': 'https://watchmaestro.com/fonts/Poppins-ExtraLightItalic.ttf',
            'Poppins-Light': 'https://watchmaestro.com/fonts/Poppins-Light.ttf',
            'Poppins-LightItalic': 'https://watchmaestro.com/fonts/Poppins-LightItalic.ttf',
            'Poppins-Regular': 'https://watchmaestro.com/fonts/Poppins-Regular.ttf',
            'Poppins-Italic': 'https://watchmaestro.com/fonts/Poppins-Italic.ttf',
            'Poppins-Medium': 'https://watchmaestro.com/fonts/Poppins-Medium.ttf',
            'Poppins-MediumItalic': 'https://watchmaestro.com/fonts/Poppins-MediumItalic.ttf',
            'Poppins-SemiMedium': 'https://watchmaestro.com/fonts/Poppins-SemiBold.ttf',
            'Poppins-SemiMediumItalic': 'https://watchmaestro.com/fonts/Poppins-SemiBoldItalic.ttf',
            'Poppins-Bold': 'https://watchmaestro.com/fonts/Poppins-Bold.ttf',
            'Poppins-BoldItalic': 'https://watchmaestro.com/fonts/Poppins-BoldItalic.ttf',
            'Poppins-ExtraBold': 'https://watchmaestro.com/fonts/Poppins-ExtraBold.ttf',
            'Poppins-ExtraBoldItalic': 'https://watchmaestro.com/fonts/Poppins-ExtraBoldItalic.ttf',
            'Poppins-Black': 'https://watchmaestro.com/fonts/Poppins-Black.ttf',
            'Poppins-BlackItalic': 'https://watchmaestro.com/fonts/Poppins-BlackItalic.ttf',
          });
          setFontsLoaded(true);
        } catch (error) {
          console.log(error);
        }
      };
  
      loadFonts();
    }, []);
  
    if (!fontsLoaded) {
        return null; // or a loading screen/component
    }
    return <>{children}</>
}
export default FontsLoad;