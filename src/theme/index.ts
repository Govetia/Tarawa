import { extendTheme, theme as base } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import localFont from '@next/font/local';

const styles = {
  global: (props) => ({
    body: {
      bg: mode('#fff', '#2d3142')(props),
    },
    p: {
      fontFamily: "samsungone400"
    }
  }),
};

const colors = {
  white: '#ffffff',
  lightGray: '#F9F9F9',
  mediumGray: '#E4E4E4',
  darkGray: '#3B3B3B',
  blue: '#00CBCB',
  darkBlue: '#009F9F',
  black: '#000000',
  brand: {
    50: '#f6e8ff',
    100: '#e3bdff',
    200: '#cd94ff',
    300: '#b46ef7',
    400: '#9a4ce7',
    500: '#7e31ce',
    600: '#641eab',
    700: '#4b1483',
    800: '#341158',
    900: '#1e0d2d',
  },
};

const tigerWalk = localFont({ src: '../../public/assets/webfonts/tiger_walk-webfont.woff2' });
const samsungone400 = localFont({ src: '../../public/assets/webfonts/samsungone-400-webfont.woff2' });
const samsungone700 = localFont({ src: '../../public/assets/webfonts/samsungone-700-webfont.woff2' });
const samsungSharpSans = localFont({ src: '../../public/assets/webfonts/samsungsharpsans-webfont.woff2' });
const samsungSharpSansBold = localFont({ src: '../../public/assets/webfonts/samsungsharpsans-bold-webfont.woff2' });
const samsungSharpSansMedium = localFont({ src: '../../public/assets/webfonts/samsungsharpsans-medium-webfont.woff2' });

const fonts = {
  tigerWalk,
  samsungone400,
  samsungone700,
  samsungSharpSans,
  samsungSharpSansBold,
  samsungSharpSansMedium,
};

const components = {
  Button: {
    variants: {
      pill: (props) => ({
        ...base.components.Button.variants.outline(props),
        rounded: 'full',
        color: 'gray.500',
      }),
    },
  },
};

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};


const theme = extendTheme({ config, styles, colors, fonts, components });
export default theme;
