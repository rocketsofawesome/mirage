import React from 'react'

export default class BrowserDetection {
  static isFF     = () => typeof InstallTrigger !== 'undefined'
  static isIE     = () => window.ActiveXObject || 'ActiveXObject' in window
  /*
    isIEsxe = check for windows Internet Explorer v6-11
    see: https://tinyurl.com/yy88yz9k for more info
  */
  static isIEsxe  = () => /*@cc_on!@*/false || !!document.documentMode
  static isSafari = () => navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1
  static isMobile = () => {
    try {
      document.createEvent('TouchEvent')
      return true
    } catch (e) {
      return false
    }
  }
}

export const IEUpgradeMessage = () => {
  return (
    <div style={{ margin: '10px' }}>
      <h1>Oops! Unfortunately, we are having trouble loading the site with this version
      of Internet Explorer. Please try using <a href="https://www.google.com/chrome/">
      Chrome</a> as your web browser.</h1>
    </div>
  )
}
