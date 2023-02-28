export const screenSizes = {
  xs: "480px",
  sm: "576px",
  md: "766px",
  lg: "992px",
  xl: "1200px",
  xxl: "1600px",
};

export const devices = {
  mobileXS: ` (min-width: ${screenSizes.xs})`,
  mobileSM: ` (min-width: ${screenSizes.sm})`,
  tablet: ` (min-width: ${screenSizes.md})`,
  laptop: ` (min-width: ${screenSizes.lg})`,
  laptopXL: ` (min-width: ${screenSizes.xl})`,
  Desktop: ` (min-width: ${screenSizes.xxl})`,
};

export const sizes = {
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 18,
  xl: 24,
  xxl: 50,
  "3xl": 75,
  "4xl": 100,
};

const generalColors = {
  bodyBg: "#fafafa",
  white: "#fff",
  black: "#000",
  primary: "",
  secondary: "",
};
const fontColors = {};

const createTheme = () => {
  const theme = {
    generalColors,
    fontColors,
    sizes,
    devices,
  };

  return theme;
};

export default createTheme;

export const ThemeType = createTheme();
