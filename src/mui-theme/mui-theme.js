import { createTheme } from '@mui/material';
import { blueGrey, red } from '@mui/material/colors';

const commonHeadingStyles = {
  fontFamily: '"Roboto Condensed", "Arial Narrow", serif',
};

export const muiTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: blueGrey.A400,
    },
    secondary: {
      main: blueGrey.A700,
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: '#000',
      secondary: '#FFF',
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: '"Roboto", Arial, sans-serif',
    h1: { ...commonHeadingStyles },
    h2: { ...commonHeadingStyles },
    h3: { ...commonHeadingStyles },
    h4: { ...commonHeadingStyles },
    h5: { ...commonHeadingStyles },
    h6: { ...commonHeadingStyles },
    allVariants: {
      letterSpacing: 1,
      lineHeight: 1,
    },
  },
});
