import { Colors } from './Colors';
import { Fonts } from './Fonts';
import { createTheme } from '@mui/material/styles';

export const Theme = createTheme({
  palette: {
    text: {
      primary: Colors.black,
      secondary: Colors.black,
    },
    background: {
      default: Colors.black,
      secondary: Colors.black,
      paper: Colors.white,
    },

    primary: {
      main: '#ffffff',
      light: Colors.black,
      dark: Colors.black,
      contrastText: Colors.black,
    },
    secondary: {
      main: '#ffffff',
      light: Colors.black,
      dark: Colors.black,
      contrastText: Colors.black,
    },
  },
  typography: {
    h1: {
      fontFamily: Fonts.roboto,
      fontSize: 38,
      fontWeight: 700,
    },
    h2: {
      fontFamily: Fonts.roboto,
      fontSize: 36,
      fontWeight: 700,
    },
    h3: {
      fontFamily: Fonts.roboto,
      fontSize: 27,
      fontWeight: 700,
      //color: '#ffffff',
    },
    h4: {
      fontFamily: Fonts.roboto,
      fontSize: 17,
      fontWeight: 700,
    },
    h5: {
      fontFamily: Fonts.roboto,
      fontSize: 15,
      fontWeight: 700,
    },
    h6: {
      fontFamily: Fonts.roboto,
      fontSize: 13,
      fontWeight: 700,
    },
    subtitle1: {
      fontFamily: Fonts.roboto,
      fontSize: 18,
      fontWeight: 700,
    },
    body1: {
      fontFamily: Fonts.roboto,
      fontSize: 20,
      fontWeight: 400,
    },
    body2: {
      fontFamily: Fonts.roboto,
      fontSize: 11,
      fontWeight: 400,
    },
    caption: {
      fontFamily: Fonts.roboto,
      fontSize: 15,
      fontWeight: 400,
    },
  },
  components: {},
});
