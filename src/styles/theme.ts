import { createMuiTheme, Theme } from '@material-ui/core/styles';

// @ts-ignore
interface ArgosTheme extends Theme {
  palette: {
    primary: {
      main: string;
    };

    secondary: { main: string };

    lightGrayColor: {
      main: string;
    };

    lightWhiteColor: {
      main: string;
    };

    lightPurpleColor: {
      main: string;
    };
  };
}

const palette = {
  primary: {
    main: '#0852BC',
  },

  secondary: { main: '#6081F5' },

  lightGrayColor: {
    main: '#E5E5E5',
  },
  lightWhiteColor: {
    main: '#EEEEEE',
  },

  lightPurpleColor: {
    main: '#512DA8',
  },
};

const theme = createMuiTheme({
  palette,
});

export default (theme as unknown) as ArgosTheme;
