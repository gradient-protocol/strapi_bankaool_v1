const config = {
  locales: [
    'es',
  ],
  defaultLocale: 'es',
  theme: {
    colors: {
      primary100: '#E6EEFF',
      primary200: '#C7DBFF',
      primary500: '#83A1FF',
      primary600: '#5D7FFF',
      primary700: '#3A5FFF',
      danger100: '#FFE6E6',
      danger200: '#FFC7C7',
      danger500: '#FF4040',
      danger600: '#FF1A1A',
      dangerHover: '#FF7373',
      danger700: '#E60000',
      buttonPrimary500: '#83A1FF',
      buttonPrimary600: '#5D7FFF',
      buttonPrimaryHover: '#A0B9FF',
      neutral0: '#FFFFFF',
      neutral100: '#FFFFFF',
      neutral1000: '#151515',
      neutral150: '#FFFFFF',
      neutral200: '#FFFFFF',
      neutral300: '#FFFFFF',
      neutral400: '#151515',
      neutral500: '#151515',
      neutral600: '#151515',
      neutral700: '#151515',
      neutral800: '#151515',
      neutral900: '#151515',
    },
    dark: {
      colors: {
        buttonPrimary500: '#C7FB56',
        buttonPrimary600: '#C7FB56',
        buttonPrimaryHover: '#D9FC8A',
        primary100: '#C7FB56',
        primary200: '#C7FB56',
        primary500: '#C7FB56',
        primary600: '#C7FB56',
        primary700: '#C7FB56',
        dangerHover: '#D9FC8A',
        neutral0: '#151515',
        neutral100: '#151515',
        neutral1000: '#FFFFFF',
        neutral150: '#151515',
        neutral200: '#151515',
        neutral300: '#151515',
        neutral400: '#FFFFFF',
        neutral500: '#FFFFFF',
        neutral600: '#FFFFFF',
        neutral700: '#FFFFFF',
        neutral800: '#FFFFFF',
        neutral900: '#FFFFFF',
        borderColor: '#373737',
      },
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
