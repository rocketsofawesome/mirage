export default class BrowserDetection {
  static isMobile = () => {
    try {
      document.createEvent('TouchEvent')
      return true
    } catch (e) {
      return false
    }
  }
}
