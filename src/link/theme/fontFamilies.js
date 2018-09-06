import { injectGlobal } from 'styled-components'

/**
 * Global Fonts
**/
injectGlobal`
@font-face {
  font-family: 'ff-din-web';
  font-weight: 400;

  src: url('https://res.cloudinary.com/roa-canon/raw/upload/v1481915056/web/fonts/DINOT.otf');
}

@font-face {
  font-family: 'ff-din-web';
  font-weight: 400;
  font-style: italic;

  src: url('https://res.cloudinary.com/roa-canon/raw/upload/v1481915056/web/fonts/DINOT-Italic.otf');
}

@font-face {
  font-family: 'ff-din-web';
  font-weight: 500;

  src: url('https://res.cloudinary.com/roa-canon/raw/upload/v1481917384/web/fonts/DINOT-Medium.otf');
}


@font-face {
  font-family: 'ff-din-web';
  font-weight: 500;
  font-style: italic;

  src: url('https://res.cloudinary.com/roa-canon/raw/upload/v1481917385/web/fonts/DINOT-MediumItalic.otf');
}

@font-face {
  font-family: 'ff-din-web';
  font-weight: 800;

  src: url('https://res.cloudinary.com/roa-canon/raw/upload/v1481915056/web/fonts/DINOT-Bold.otf');
}

@font-face {
  font-family: 'ff-din-web';
  font-weight: 800;
  font-style: italic;

  src: url('https://res.cloudinary.com/roa-canon/raw/upload/v1481915056/web/fonts/DINOT-BoldItalic.otf');
}

@font-face {
  font-family: 'din-cond';
  font-weight: 400;

  src: url('https://res.cloudinary.com/roa-canon/raw/upload/v1481917384/web/fonts/DINOT-CondMedium.otf');
}
`

const fontFamilies = {
  dinCondensed: `"din-cond", "din-condensed-web", Arial, sans-serif`,
  dinRegular: `"ff-din-web", Helvetica, Arial, sans-serif`,
  caslon: `"adobe-caslon-pro", Helvetica, Arial, serif`
}

export default {
  headerFont: fontFamilies.dinCondensed,
  primaryFont: fontFamilies.dinRegular,
  secondaryFont: fontFamilies.caslon
}
