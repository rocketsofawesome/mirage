import { injectGlobal } from 'styled-components'

/**
 * Global Fonts
**/
injectGlobal`
@font-face {
  font-family: 'ff-din-web';
  font-weight: 400;

  src: url('https://d2lknnt52h7uhg.cloudfront.net/roa-canon/raw/upload/v1481915056/web/fonts/DINOT.otf');
}

@font-face {
  font-family: 'ff-din-web';
  font-weight: 400;
  font-style: italic;

  src: url('https://d2lknnt52h7uhg.cloudfront.net/roa-canon/raw/upload/v1481915056/web/fonts/DINOT-Italic.otf');
}

@font-face {
  font-family: 'ff-din-web';
  font-weight: 500;

  src: url('https://d2lknnt52h7uhg.cloudfront.net/roa-canon/raw/upload/v1481917384/web/fonts/DINOT-Medium.otf');
}


@font-face {
  font-family: 'ff-din-web';
  font-weight: 500;
  font-style: italic;

  src: url('https://d2lknnt52h7uhg.cloudfront.net/roa-canon/raw/upload/v1481917385/web/fonts/DINOT-MediumItalic.otf');
}

@font-face {
  font-family: 'ff-din-web';
  font-weight: 800;

  src: url('https://d2lknnt52h7uhg.cloudfront.net/roa-canon/raw/upload/v1481915056/web/fonts/DINOT-Bold.otf');
}

@font-face {
  font-family: 'ff-din-web';
  font-weight: 800;
  font-style: italic;

  src: url('https://d2lknnt52h7uhg.cloudfront.net/roa-canon/raw/upload/v1481915056/web/fonts/DINOT-BoldItalic.otf');
}

@font-face {
  font-family: 'din-cond';
  font-weight: 400;

  src: url('https://d2lknnt52h7uhg.cloudfront.net/roa-canon/raw/upload/v1481917384/web/fonts/DINOT-CondMedium.otf');
}

@font-face {
  font-family: 'adobe-caslon-pro';
  src: url('https://use.typekit.net/af/3cbd9b/000000000000000000012d68/27/l?primer=b997bcdf54b83a9f7b731c29130c4fbe326c83acb7cf220896c6041d3c02ba6a&fvd=n4&v=3');
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
