import { createMuiTheme } from '@material-ui/core/styles';
import { indigo } from '@material-ui/core/colors/green';
import lightBlue from '@material-ui/core/colors/lightBlue';

export const appTheme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: lightBlue,
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize: 16,
  },
});
