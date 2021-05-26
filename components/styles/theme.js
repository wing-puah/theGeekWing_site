const breakpointsValue = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

const mediaWidthRules = (rule, breakpoint) => {
  const widthMinOrMaxRules = {
    up: 'min',
    down: 'max',
  };
  const _rule = rule ? widthMinOrMaxRules[rule] : widthMinOrMaxRules.up;
  return `${_rule}-width: ${breakpoint}px`;
};

const breakpointsMixin = (rule) => {
  return Object.keys(breakpointsValue).reduce((acc, cur) => {
    acc[cur] = `@media only screen and (${mediaWidthRules(
      rule,
      breakpointsValue[cur]
    )})`;
    return acc;
  }, {});
};

const breakpoints = {
  values: breakpointsValue,
  up: breakpointsMixin('up'),
  down: breakpointsMixin('down'),
};

const device = Object.keys(breakpointsValue).reduce((acc, cur) => {
  acc[cur] = `@media only screen and (min-width: ${breakpointsValue[cur]}px)`;
  return acc;
}, {});

const palette = {
  primary: {
    light: '#35BDF2',
    main: '#0442BF',
    dark: '#056CF2',
    contrastText: '#F2F2F2',
  },
  secondary: {
    light: '#F2C166',
    main: '#F29F05',
    dark: '#F26835',
    contrastText: '#F2F2F2',
  },
  highlight: {
    light: '#0CF22F',
    main: '#04BF68',
    dark: '#02402E',
  },
  error: {
    light: '#E10000',
    main: '#BA0000',
    dark: '#950000',
  },
  grey: {
    50: '#EEEEEE',
    100: '#dddddd',
    200: '#888888',
    300: '#4C5359',
    400: '#232526',
  },
  common: {
    white: '#fff',
    black: '#222',
  },
  text: {
    primary: '#222',
    disabled: '#ddd',
    hint: '#056CF2',
  },
};

const fontFamily = {
  header: `'Exo', sans-serif`,
  body: `'Open Sans', sans-serif`,
};

const typography = {
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 900,
  fontFamily: fontFamily.body,
  h1: {
    fontFamily: fontFamily.header,
    fontWeight: 900,
    fontSize: '1.8rem',
    [device.laptop]: {
      fontSize: '3rem',
    },
  },
  h2: {
    fontSize: '1.5rem',
    [device.laptop]: {
      fontSize: '2rem',
    },
  },
  body1: {
    fontFamily: fontFamily.body,
    fontWeight: 400,
    fontSize: '1rem',
  },
  blockquote: {
    fontColor: palette.grey[400],
    lineHeight: 2,
  },
};

const zIndex = {
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
  menu: 2000,
};

const theme = {
  palette,
  border: {
    light: palette.grey[50],
    main: palette.grey[100],
    dark: palette.grey[200],
  },
  button: {
    primary: {
      default: {
        color: palette.secondary.main,
        contrastText: palette.secondary.contrastText,
      },
      hover: {
        color: palette.secondary.dark,
        contrastText: palette.secondary.contrastText,
      },
    },
    secondary: {
      default: {
        color: palette.primary.main,
        contrastText: palette.primary.contrastText,
      },
      hover: {
        color: palette.primary.dark,
        contrastText: palette.primary.contrastText,
      },
    },
  },
  navigation: {
    default: '#48A9A6',
    hover: '#C1666B',
  },
  footer: {
    background: '#69168C',
    color: '#F2F2F2',
  },
  breakpoints,
  device,
  zIndex,
  typography,
};

export { device, palette };
export default theme;
