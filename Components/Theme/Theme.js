import React from 'react';
import { extendTheme  } from 'native-base';

import Colors from './Colors';
import Fonts from './Fonts';
import Heading from './Heading';
const colors = Colors.colors;
const fontConfig = Fonts.fontConfig
const fonts = Fonts.fonts
const heading = Heading;
const Theme = extendTheme({
      colors,
      fontConfig,
      fonts,
      components: {
        heading
      },
      config: {
        // Changing initialColorMode to 'dark'
        useSystemColorMode: false,
        initialColorMode: 'dark',
      },
});
export default Theme;