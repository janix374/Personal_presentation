import { createMuiTheme } from '@material-ui/core/styles';
import { grey, red } from '@material-ui/core/colors';

export const darkTheme = createMuiTheme({
    palette: {
        type: "dark",
        secondary: {
            main: grey[50],
        },
        error: {
            main: red[400]
        },
        text: {
            primary: "#6e6d6d"
        }
    },
    typography: {
        fontFamily: "Bangers",
        fontSize: 20,
      },
  });

export const lightTheme = createMuiTheme({
    palette: {
        type: "light",
        secondary: {
            main: "#3C403D"
        },
        error: {
            main: red[400]
        },
    },
    typography: {
        fontFamily: "Bangers",
        fontSize: 20,
      },
  });


