import { Colors } from './Colors';
import { Fonts } from './Fonts';
import { createTheme } from '@mui/material/styles';

export const Theme = createTheme({
  palette: {
    background: {
      default: Colors.primaryBg,
      secondary: Colors.secondaryBg,
      paper: Colors.white,
    },

    primary: {
      main: '#2E2252',
      light: Colors.black,
      dark: Colors.black,
      contrastText: Colors.white,
    },
    secondary: {
      main: '#757ce8',
      light: Colors.black,
      dark: Colors.black,
      contrastText: Colors.white,
    },
  },
  typography: {
    h1: {
      fontFamily: Fonts.roboto,
      fontSize: 36,
      fontWeight: 700,
    },
    h2: {
      fontFamily: Fonts.roboto,
      fontSize: 34,
      fontWeight: 700,
    },
    h3: {
      fontFamily: Fonts.roboto,
      fontSize: 32,
      fontWeight: 700,
    },
    h4: {
      fontFamily: Fonts.roboto,
      fontSize: 34,
      fontWeight: 700,
    },
    h5: {
      fontFamily: Fonts.roboto,
      fontSize: 28,
      fontWeight: 700,
    },
    h6: {
      fontFamily: Fonts.roboto,
      fontSize: 24,
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
      fontSize: 18,
      fontWeight: 500,
    },
    caption: {
      fontFamily: Fonts.roboto,
      fontSize: 15,
      fontWeight: 400,
    },
  },
  components: {},
});
