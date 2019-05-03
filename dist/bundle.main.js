(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types'), require('styled-components'), require('react-sizeme'), require('instafeed.js')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', 'styled-components', 'react-sizeme', 'instafeed.js'], factory) :
  (factory((global.Mirage = {}),global.React,global.PropTypes,global.styled,global.reactSizeme,global.Instafeed));
}(this, (function (exports,React,PropTypes,styled,reactSizeme,Instafeed) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
  var styled__default = 'default' in styled ? styled['default'] : styled;
  Instafeed = Instafeed && Instafeed.hasOwnProperty('default') ? Instafeed['default'] : Instafeed;

  var _templateObject = _taggedTemplateLiteral(['\n  0% {\n    opacity: 0;\n  }\n  10% {\n    opacity: 1;\n  }\n  90% {\n    opacity 1;\n  }\n  100% {\n    opacity 0;\n  }\n'], ['\n  0% {\n    opacity: 0;\n  }\n  10% {\n    opacity: 1;\n  }\n  90% {\n    opacity 1;\n  }\n  100% {\n    opacity 0;\n  }\n']),
      _templateObject2 = _taggedTemplateLiteral(['\n  animation: ', ' ', 's ease-in-out ', ';\n'], ['\n  animation: ', ' ', 's ease-in-out ', ';\n']);

  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var animation = styled.keyframes(_templateObject);

  var FadeInOut = styled__default(function (_ref) {
    var className = _ref.className,
        children = _ref.children,
        props = _objectWithoutProperties(_ref, ['className', 'children']);

    return React__default.cloneElement(children, {
      className: '' + (children.props.className ? children.props.className + ' ' : '') + className
    });
  })(_templateObject2, animation, function (props) {
    return props.duration;
  }, function (props) {
    return props.iteration;
  });

  FadeInOut.propTypes = {
    duration: PropTypes.number,
    iteration: PropTypes.string
  };

  FadeInOut.defaultProps = {
    duration: 5,
    iteration: 'infinite'

    /** @component */
  };

  var _jsxFileName = '/Users/jrusso/Documents/ROA/mirage/src/core/grid/grid.js',
      _this = undefined;

  var _templateObject$1 = _taggedTemplateLiteral$1(['\n  grid-template-columns:\n    repeat(', ', 1fr);\n  max-width: 144rem;\n  padding: ', 'rem ', ';\n'], ['\n  grid-template-columns:\n    repeat(', ', 1fr);\n  max-width: 144rem;\n  padding: ', 'rem ', ';\n']),
      _templateObject2$1 = _taggedTemplateLiteral$1(['\n  display: flex;\n  flex-wrap: wrap;\n  margin-left: auto;\n  margin-right: auto;\n  padding: ', 'rem ', ';\n  @supports (display:grid) {\n    max-width: 100%;\n    grid-gap: ', 'rem;\n    display: grid;\n    grid-auto-flow: row;\n    grid-template-columns:\n      repeat(', ', 1fr);\n    ', '\n    ', '\n  }\n'], ['\n  display: flex;\n  flex-wrap: wrap;\n  margin-left: auto;\n  margin-right: auto;\n  padding: ', 'rem ', ';\n  @supports (display:grid) {\n    max-width: 100%;\n    grid-gap: ', 'rem;\n    display: grid;\n    grid-auto-flow: row;\n    grid-template-columns:\n      repeat(', ', 1fr);\n    ', '\n    ', '\n  }\n']),
      _templateObject3 = _taggedTemplateLiteral$1(['', ''], ['', '']);

  function _taggedTemplateLiteral$1(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var TwelveColGrid = styled.css(_templateObject$1, function (props) {
    return props.theme.grid.columns.desktop;
  }, function (props) {
    return props.theme.grid.gutter;
  }, function (props) {
    return props.theme.grid.margins.desktop;
  });

  var Grid = styled__default(function (_ref) {
    var className = _ref.className,
        children = _ref.children;

    return React__default.createElement(
      'div',
      { className: className, __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: _this
      },
      children
    );
  })(_templateObject2$1, function (props) {
    return props.theme.grid.gutter;
  }, function (props) {
    return props.theme.grid.margins.mobile;
  }, function (props) {
    return props.theme.grid.gutter;
  }, function (props) {
    return props.theme.grid.columns.mobile;
  }, function (props) {
    return props.theme.media.tablet(_templateObject3, TwelveColGrid);
  }, function (props) {
    return props.debug && '> * {\n        background-color: hsl(200, 33%, 96%);\n      }';
  });

  Grid.propTypes = {
    debug: PropTypes.bool,
    theme: PropTypes.shape({
      media: PropTypes.shape({
        tablet: PropTypes.func,
        desktop: PropTypes.func
      }),
      grid: PropTypes.shape({
        columns: PropTypes.shape({
          mobile: PropTypes.number,
          tablet: PropTypes.number,
          desktop: PropTypes.number
        }),
        gutter: PropTypes.string,
        margins: PropTypes.shape({
          mobile: PropTypes.number,
          tablet: PropTypes.number,
          desktop: PropTypes.number
        })
      })
    })

    /** @component */
  };

  var _templateObject$2 = _taggedTemplateLiteral$2(['\n  width: calc((100% * (', '/', ')) - 2rem);\n  box-sizing: border-box;\n  margin: 0 ', 'rem;\n  @supports (display:grid) {\n    width: auto;\n    margin: 0;\n    ', '\n    grid-column-end: ', ';\n  }\n'], ['\n  width: calc((100% * (', '/', ')) - 2rem);\n  box-sizing: border-box;\n  margin: 0 ', 'rem;\n  @supports (display:grid) {\n    width: auto;\n    margin: 0;\n    ', '\n    grid-column-end: ', ';\n  }\n']),
      _templateObject2$2 = _taggedTemplateLiteral$2(['\n  width: calc((100% * (', '/', ')) - 2rem);\n  box-sizing: border-box;\n  margin: 0 ', 'rem;\n  @supports (display:grid) {\n    width: auto;\n    margin: 0;\n    ', '\n    grid-column-end: ', ';\n    ', '\n    ', '\n  }\n'], ['\n  width: calc((100% * (', '/', ')) - 2rem);\n  box-sizing: border-box;\n  margin: 0 ', 'rem;\n  @supports (display:grid) {\n    width: auto;\n    margin: 0;\n    ', '\n    grid-column-end: ', ';\n    ', '\n    ', '\n  }\n']),
      _templateObject3$1 = _taggedTemplateLiteral$2(['', ''], ['', '']);

  function _taggedTemplateLiteral$2(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var DesktopSizer = styled.css(_templateObject$2, function (props) {
    return props.desktop.width;
  }, function (props) {
    return props.theme.grid.columns.desktop;
  }, function (props) {
    return props.theme.grid.gutter / 2;
  }, function (props) {
    return props.desktop.start ? 'grid-column-start: ' + props.desktop.start + ';' : '';
  }, function (props) {
    if (props.desktop.start) {
      return props.desktop.start + props.desktop.width;
    } else {
      return 'span ' + props.desktop.width;
    }
  });

  var desktopFallback = function desktopFallback(props, key) {
    if (props.tablet && props.tablet[key]) {
      return props.tablet[key];
    }
    return props.desktop[key];
  };

  var TabletSizer = styled.css(_templateObject$2, function (props) {
    return desktopFallback(props, 'width');
  }, function (props) {
    return props.theme.grid.columns.tablet;
  }, function (props) {
    return props.theme.grid.gutter / 2;
  }, function (props) {
    return desktopFallback(props, 'start') ? 'grid-column-start: ' + desktopFallback(props, 'start') + ';' : '';
  }, function (props) {
    if (desktopFallback(props, 'start')) {
      return desktopFallback(props, 'start') + desktopFallback(props, 'width');
    } else {
      return 'span ' + desktopFallback(props, 'width');
    }
  });
  var Sizer = styled__default.div(_templateObject2$2, function (props) {
    return props.mobile.width;
  }, function (props) {
    return props.theme.grid.columns.mobile;
  }, function (props) {
    return props.theme.grid.gutter / 2;
  }, function (props) {
    return props.mobile.start ? 'grid-column-start: ' + props.mobile.start + ';' : '';
  }, function (props) {
    if (props.mobile.start) {
      return props.mobile.start + props.mobile.width;
    } else {
      return 'span ' + props.mobile.width;
    }
  }, function (props) {
    return props.theme.media.tablet(_templateObject3$1, TabletSizer);
  }, function (props) {
    return props.theme.media.desktop(_templateObject3$1, DesktopSizer);
  });

  Sizer.defaultProps = {
    desktop: {
      width: 12
    },
    mobile: {
      width: 4
    }
  };

  Sizer.propTypes = {
    desktop: PropTypes.shape({
      width: PropTypes.number,
      start: PropTypes.number
    }),
    mobile: PropTypes.shape({
      width: PropTypes.number,
      start: PropTypes.number
    })

    /** @component */
  };

  var _templateObject$3 = _taggedTemplateLiteral$3(['\n  max-width: 1440px;\n  margin: 0 auto;\n'], ['\n  max-width: 1440px;\n  margin: 0 auto;\n']),
      _templateObject2$3 = _taggedTemplateLiteral$3(['\n  max-width: 100%;\n  margin-left: 10px;\n  margin-right: 10px;\n  ', '\n'], ['\n  max-width: 100%;\n  margin-left: 10px;\n  margin-right: 10px;\n  ', '\n']),
      _templateObject3$2 = _taggedTemplateLiteral$3(['\n    margin-left: 20px;\n    margin-right: 20px;\n  '], ['\n    margin-left: 20px;\n    margin-right: 20px;\n  ']),
      _templateObject4 = _taggedTemplateLiteral$3(['\n  padding: 0 3%;\n  ', '\n'], ['\n  padding: 0 3%;\n  ', '\n']),
      _templateObject5 = _taggedTemplateLiteral$3(['\n    padding: 0 7%;\n  '], ['\n    padding: 0 7%;\n  ']),
      _templateObject6 = _taggedTemplateLiteral$3(['\n  display: flex;\n  flex-wrap: wrap;\n  ', '\n  ', '\n'], ['\n  display: flex;\n  flex-wrap: wrap;\n  ', '\n  ', '\n']);

  function _taggedTemplateLiteral$3(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var constrained = styled.css(_templateObject$3);

  var notConstrained = styled.css(_templateObject2$3, function (props) {
    return props.theme.media.tablet(_templateObject3$2);
  });

  var padding = styled.css(_templateObject4, function (props) {
    return props.theme.media.tablet(_templateObject5);
  });

  var FlexRow = styled.css(_templateObject6, function (props) {
    return props.constrained ? constrained : notConstrained;
  }, function (props) {
    return props.padding && padding;
  });

  FlexRow.propTypes = {
    constrained: PropTypes.bool,
    padding: PropTypes.bool

    /** @component */
  };

  var _templateObject$4 = _taggedTemplateLiteral$4(['\n      margin-left: ', ';\n    '], ['\n      margin-left: ', ';\n    ']),
      _templateObject2$4 = _taggedTemplateLiteral$4(['\n  box-sizing: border-box;\n  max-width: ', ';\n  flex-basis: ', ';\n  ', '\n  ', '\n\n  ', '\n'], ['\n  box-sizing: border-box;\n  max-width: ', ';\n  flex-basis: ', ';\n  ', '\n  ', '\n\n  ', '\n']),
      _templateObject3$3 = _taggedTemplateLiteral$4(['\n    max-width: ', ';\n    flex-basis: ', ';\n    ', '\n  '], ['\n    max-width: ', ';\n    flex-basis: ', ';\n    ', '\n  ']);

  function _objectWithoutProperties$1(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _taggedTemplateLiteral$4(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var columnToPercent = function columnToPercent(elementWidth, containerWidth) {
    return 100 * (elementWidth / containerWidth) + '%';
  };

  var spanner = function spanner(props, breakpoint) {
    if (props[breakpoint].span) {
      return styled.css(_templateObject$4, function (props) {
        return props.desktop.nested ? columnToPercent(props.desktop.span, props.desktop.nested) : columnToPercent(props.desktop.span, props.theme.grid.columns.desktop);
      });
    } else {
      return null;
    }
  };

  var FlexCol = styled__default(function (_ref) {
    var className = _ref.className,
        children = _ref.children,
        props = _objectWithoutProperties$1(_ref, ['className', 'children']);

    return React__default.cloneElement(children, {
      className: '' + (children.props.className ? children.props.className + ' ' : '') + className
    });
  })(_templateObject2$4, function (props) {
    return props.mobile.nested ? columnToPercent(props.mobile.width, props.mobile.nested) : columnToPercent(props.mobile.width, props.theme.grid.columns.mobile);
  }, function (props) {
    return props.mobile.nested ? columnToPercent(props.mobile.width, props.mobile.nested) : columnToPercent(props.mobile.width, props.theme.grid.columns.mobile);
  }, function (props) {
    return spanner(props, 'mobile');
  }, function (props) {
    return props.nested ? '\n      padding-left: 0;\n      padding-right: 0;\n    ' : '\n      padding-left: 5px;\n      padding-right: 5px;\n    ';
  }, function (props) {
    return props.theme.media.tablet(_templateObject3$3, function (props) {
      return props.desktop.nested ? columnToPercent(props.desktop.width, props.desktop.nested) : columnToPercent(props.desktop.width, props.theme.grid.columns.desktop);
    }, function (props) {
      return props.desktop.nested ? columnToPercent(props.desktop.width, props.desktop.nested) : columnToPercent(props.desktop.width, props.theme.grid.columns.desktop);
    }, function (props) {
      return spanner(props, 'desktop');
    });
  });

  FlexCol.propTypes = {
    children: PropTypes.node.isRequired,
    mobile: PropTypes.shape({
      width: PropTypes.number.isRequired,
      span: PropTypes.number,
      nested: PropTypes.number
    }),
    desktop: PropTypes.shape({
      width: PropTypes.number.isRequired,
      span: PropTypes.number,
      nested: PropTypes.number
    })
  };

  FlexCol.defaultProps = {
    mobile: {
      width: 4
    },
    desktop: {
      width: 12
    }

    /** @component */
  };

  var _jsxFileName$1 = '/Users/jrusso/Documents/ROA/mirage/src/core/icons/BagIcon.js',
      _this$1 = undefined;

  var _templateObject$5 = _taggedTemplateLiteral$5(['\n  width: ', ';\n  > polygon, path {\n    fill: none;\n    stroke: ', ';\n    stroke-linecap:round;\n    stroke-linejoin:round;\n  }\n  > g circle {\n    fill: ', ';\n  }\n  > g text {\n    fill: ', ';\n    font-family: ', ';\n    font-size: .8rem;\n    font-weight: 500;\n  }\n'], ['\n  width: ', ';\n  > polygon, path {\n    fill: none;\n    stroke: ', ';\n    stroke-linecap:round;\n    stroke-linejoin:round;\n  }\n  > g circle {\n    fill: ', ';\n  }\n  > g text {\n    fill: ', ';\n    font-family: ', ';\n    font-size: .8rem;\n    font-weight: 500;\n  }\n']);

  function _taggedTemplateLiteral$5(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var BaseBagIcon = function BaseBagIcon(_ref) {
    var className = _ref.className,
        count = _ref.count;

    return React__default.createElement(
      'svg',
      { className: className, version: '1.1', viewBox: '0 0 19 15', __source: {
          fileName: _jsxFileName$1,
          lineNumber: 7
        },
        __self: _this$1
      },
      React__default.createElement('polygon', { points: '10.5,12.7 10.6,6.8 0.5,6.8 0.5,12.7 2.6,14.5 8.7,14.5', __source: {
          fileName: _jsxFileName$1,
          lineNumber: 8
        },
        __self: _this$1
      }),
      React__default.createElement('path', { d: 'M3.1,6.4v-1C3.1,4.1,4.2,3,5.5,3s2.4,1.1,2.4,2.4v1H3.1z', __source: {
          fileName: _jsxFileName$1,
          lineNumber: 9
        },
        __self: _this$1
      }),
      count && React__default.createElement(
        'g',
        {
          __source: {
            fileName: _jsxFileName$1,
            lineNumber: 11
          },
          __self: _this$1
        },
        React__default.createElement('circle', { cx: '13', cy: '6', r: '6', __source: {
            fileName: _jsxFileName$1,
            lineNumber: 12
          },
          __self: _this$1
        }),
        React__default.createElement(
          'text',
          { x: '12.75', y: '7', alignmentBaseline: 'middle', textAnchor: 'middle', __source: {
              fileName: _jsxFileName$1,
              lineNumber: 13
            },
            __self: _this$1
          },
          count
        )
      )
    );
  };

  var BagIcon = styled__default(BaseBagIcon)(_templateObject$5, function (props) {
    return props.width;
  }, function (props) {
    return props.theme.colors.rocketBlue;
  }, function (props) {
    return props.theme.colors.rocketBlue;
  }, function (props) {
    return props.theme.colors.white;
  }, function (props) {
    return props.theme.fonts.primaryFont;
  });

  BagIcon.propTypes = {
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        rocketBlue: PropTypes.string,
        white: PropTypes.string
      }),
      fonts: PropTypes.shape({
        primaryFont: PropTypes.string
      })
    }),
    width: PropTypes.string
  };

  BagIcon.propTypes = {
    count: PropTypes.number,
    width: PropTypes.string.isRequired
  };

  BagIcon.defaultProps = {
    width: '2rem'

    /** @component */
  };

  var _jsxFileName$2 = '/Users/jrusso/Documents/ROA/mirage/src/core/icons/cards/CardIcon.base.js',
      _this$2 = undefined;

  var BaseCardIcon = function BaseCardIcon(_ref) {
    var className = _ref.className,
        children = _ref.children,
        box = _ref.box;

    return React__default.createElement(
      'svg',
      { className: className, version: '1.1', xmlns: 'http://www.w3.org/2000/svg', viewBox: box, __source: {
          fileName: _jsxFileName$2,
          lineNumber: 6
        },
        __self: _this$2
      },
      children
    );
  };

  BaseCardIcon.propTypes = {
    box: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string])
  };

  var _jsxFileName$3 = '/Users/jrusso/Documents/ROA/mirage/src/core/icons/cards/Amex.base.js',
      _this$3 = undefined;

  var Amex = function Amex(_ref) {
    var className = _ref.className;
    return React__default.createElement(
      BaseCardIcon,
      { className: className, box: '0 0 750 472', __source: {
          fileName: _jsxFileName$3,
          lineNumber: 7
        },
        __self: _this$3
      },
      React__default.createElement(
        'g',
        { fillRule: 'evenodd', __source: {
            fileName: _jsxFileName$3,
            lineNumber: 8
          },
          __self: _this$3
        },
        React__default.createElement('path', { d: 'M0,41.0047706 C0,18.9107459 17.9143492,1 39.9919369,1 L710.008063,1 C732.095,1 750,18.9064659 750,41.0047706 L750,431.995229 C750,454.089254 732.085651,472 710.008063,472 L39.9919369,472 C17.905,472 0,454.093534 0,431.995229 L0,41.0047706 Z M0.00266072556,221.9061 L36.0288848,221.9061 L44.15208,202.394972 L62.3381392,202.394972 L70.4400485,221.9061 L141.324438,221.9061 L141.324438,206.989254 L147.651644,221.969689 L184.449478,221.969689 L190.776684,206.766694 L190.776684,221.9061 L366.938002,221.9061 L366.855519,189.878599 L370.263908,189.878599 C372.650579,189.960734 373.347689,190.180645 373.347689,194.104597 L373.347689,221.9061 L464.458915,221.9061 L464.458915,214.450327 C471.807839,218.371629 483.238316,221.9061 498.279397,221.9061 L536.60981,221.9061 L544.812827,202.394972 L562.998886,202.394972 L571.020974,221.9061 L644.885376,221.9061 L644.885376,203.372648 L656.071066,221.9061 L715.261567,221.9061 L715.261567,99.3918994 L656.683033,99.3918994 L656.683033,113.860975 L648.480016,99.3918994 L588.371565,99.3918994 L588.371565,113.860975 L580.839051,99.3918994 L499.64701,99.3918994 C486.056024,99.3918994 474.109366,101.281013 464.458915,106.545627 L464.458915,99.3918994 L408.429356,99.3918994 L408.429356,106.545627 C402.288401,101.119392 393.920419,99.3918994 384.615862,99.3918994 L179.918263,99.3918994 L166.183597,131.035219 L152.079091,99.3918994 L87.6043891,99.3918994 L87.6043891,113.860975 L80.5215377,99.3918994 L25.5349832,99.3918994 L0,157.641785 L0,221.9061 L0.00266072556,221.9061 L0.00266072556,221.9061 Z M227.659661,204.65237 L206.043927,204.65237 L205.964105,135.854711 L175.389708,204.65237 L156.876379,204.65237 L126.22216,135.793772 L126.22216,204.65237 L83.3365853,204.65237 L75.234676,185.059106 L31.3327042,185.059106 L23.1483124,204.65237 L0.247447477,204.65237 L38.0058039,116.8099 L69.3331867,116.8099 L105.194446,199.978602 L105.194446,116.8099 L139.60827,116.8099 L167.202655,176.400447 L192.551387,116.8099 L227.657001,116.8099 L227.657001,204.65237 L227.659661,204.65237 L227.659661,204.65237 Z M67.6223402,166.748214 L53.1905647,131.729395 L38.8412718,166.748214 L67.6223402,166.748214 L67.6223402,166.748214 Z M313.811294,204.65237 L243.373906,204.65237 L243.373906,116.8099 L313.811294,116.8099 L313.811294,135.102245 L264.460157,135.102245 L264.460157,150.935828 L312.627271,150.935828 L312.627271,168.942024 L264.460157,168.942024 L264.460157,186.484553 L313.811294,186.484553 L313.811294,204.65237 L313.811294,204.65237 L313.811294,204.65237 Z M413.125537,140.467541 C413.125537,154.472949 403.738497,161.708811 398.268045,163.881425 C402.881743,165.630113 406.822278,168.719464 408.698089,171.278908 C411.675441,175.647981 412.188961,179.550736 412.188961,187.395991 L412.188961,204.65237 L390.921782,204.65237 L390.84196,193.574691 C390.84196,188.288882 391.350159,180.687384 387.513392,176.461386 C384.432272,173.372036 379.736092,172.701705 372.145041,172.701705 L349.510249,172.701705 L349.510249,204.65237 L328.42666,204.65237 L328.42666,116.8099 L376.923705,116.8099 C387.699643,116.8099 395.639248,117.0934 402.456027,121.017352 C409.126466,124.941303 413.125537,130.669584 413.125537,140.467541 L413.125537,140.467541 Z M385.552438,152.803746 C382.654907,154.555084 379.227893,154.613374 375.122393,154.613374 L349.507588,154.613374 L349.507588,135.102245 L375.470948,135.102245 C379.14541,135.102245 382.979516,135.266516 385.469955,136.686663 C388.205181,137.966386 389.897402,140.690101 389.897402,144.452432 C389.897402,148.291599 388.287663,151.380949 385.552438,152.803746 L385.552438,152.803746 Z M446.868858,204.65237 L425.354231,204.65237 L425.354231,116.8099 L446.868858,116.8099 L446.868858,204.65237 L446.868858,204.65237 Z M696.466202,204.65237 L666.586254,204.65237 L626.619495,138.721501 L626.619495,204.65237 L583.678045,204.65237 L575.472367,185.059106 L531.671503,185.059106 L523.710612,204.65237 L499.037704,204.65237 C488.788589,204.65237 475.812231,202.394972 468.463307,194.936549 C461.053186,187.478126 457.197795,177.375474 457.197795,161.401466 C457.197795,148.373734 459.501983,136.464103 468.564414,127.052978 C475.381193,120.042325 486.056024,116.8099 500.586247,116.8099 L520.999333,116.8099 L520.999333,135.632151 L501.014623,135.632151 C493.319805,135.632151 488.97484,136.771448 484.789519,140.835825 C481.194879,144.534567 478.728386,151.526673 478.728386,160.733785 C478.728386,170.14491 480.606858,176.930353 484.526107,181.363014 C487.772192,184.839195 493.671021,185.893708 499.221294,185.893708 L508.690817,185.893708 L538.40846,116.81255 L570.001916,116.81255 L605.700871,199.899116 L605.700871,116.81255 L637.805185,116.81255 L674.869092,177.990164 L674.869092,116.81255 L696.466202,116.81255 L696.466202,204.65237 L696.466202,204.65237 Z M568.285748,166.748214 L553.694329,131.729395 L539.182732,166.748214 L568.285748,166.748214 Z M750,344.518333 C744.878103,351.976756 734.897722,355.757633 721.386557,355.757633 L680.666813,355.757633 L680.666813,336.916836 L721.221592,336.916836 C725.244609,336.916836 728.059657,336.38958 729.754539,334.741573 C731.22326,333.382365 732.247639,331.408466 732.247639,329.010643 C732.247639,326.451198 731.22326,324.41901 729.672057,323.200226 C728.14214,321.859565 725.915112,321.250173 722.243311,321.250173 C702.444852,320.579843 677.745337,321.859565 677.745337,294.055412 C677.745337,281.31118 685.871193,267.896617 707.997786,267.896617 L749.997339,267.896617 L749.997339,250.415027 L710.975138,250.415027 C699.198767,250.415027 690.644534,253.223528 684.586062,257.589951 L684.586062,250.415027 L626.866942,250.415027 C617.636885,250.415027 606.802411,252.693622 601.677854,257.589951 L601.677854,250.415027 L498.606667,250.415027 L498.606667,257.589951 C490.40365,251.697399 476.562555,250.415027 470.174153,250.415027 L402.187294,250.415027 L402.187294,257.589951 C395.697784,251.331764 381.266009,250.415027 372.46965,250.415027 L296.380881,250.415027 L278.969093,269.178989 L262.661506,250.415027 L149.000631,250.415027 L149.000631,373.014013 L260.522283,373.014013 L278.463555,353.953304 L295.364484,373.014013 L364.10699,373.074952 L364.10699,344.234834 L370.865232,344.234834 C379.9862,344.375259 390.743513,344.009624 400.234321,339.924051 L400.234321,373.011363 L456.934383,373.011363 L456.934383,341.058049 L459.669609,341.058049 C463.160481,341.058049 463.503714,341.201123 463.503714,344.674655 L463.503714,373.008714 L635.748444,373.008714 C646.684026,373.008714 658.114503,370.22141 664.44437,365.16346 L664.44437,373.008714 L719.079708,373.008714 C730.448989,373.008714 741.552196,371.421646 750,367.357269 L750,344.518333 Z M408.51716,296.840067 C408.51716,321.247524 390.229993,326.286927 371.799147,326.286927 L345.489893,326.286927 L345.489893,355.757633 L304.506737,355.757633 L278.543377,326.671109 L251.560959,355.757633 L168.040784,355.757633 L168.040784,267.893967 L252.846089,267.893967 L278.788164,296.694343 L305.608277,267.893967 L372.98317,267.893967 C389.716473,267.893967 408.51716,272.506796 408.51716,296.840067 Z M240.886128,337.446742 L189.044551,337.446742 L189.044551,319.965152 L235.335855,319.965152 L235.335855,302.038442 L189.044551,302.038442 L189.044551,286.064434 L241.907847,286.064434 L264.971016,311.669478 L240.886128,337.446742 Z M324.488786,347.766655 L292.115738,311.976823 L324.488786,277.323639 L324.488786,347.766655 Z M372.738383,308.442352 L345.489893,308.442352 L345.489893,286.067084 L372.98317,286.067084 C380.595506,286.067084 385.879707,289.156434 385.879707,296.840067 C385.879707,304.438915 380.840293,308.442352 372.738383,308.442352 Z M514.999397,267.893967 L585.372927,267.893967 L585.372927,286.064434 L535.997843,286.064434 L535.997843,302.038442 L584.167619,302.038442 L584.167619,319.965152 L535.997843,319.965152 L535.997843,337.446742 L585.372927,337.526227 L585.372927,355.757633 L514.999397,355.757633 L514.999397,267.893967 L514.999397,267.893967 Z M488.362873,314.925749 C493.056393,316.650592 496.893159,319.742592 498.69181,322.302036 C501.669162,326.591623 502.100199,330.595061 502.185343,338.339633 L502.185343,355.757633 L481.01661,355.757633 L481.01661,344.764739 C481.01661,339.47893 481.527469,331.652223 477.608221,327.56665 C474.5271,324.41901 469.83092,323.666543 462.138762,323.666543 L439.605077,323.666543 L439.605077,355.757633 L418.41772,355.757633 L418.41772,267.893967 L467.098355,267.893967 C477.773186,267.893967 485.547826,268.362934 492.468373,272.040479 C499.122847,276.043917 503.308169,281.528441 503.308169,291.551608 C503.305508,305.575562 493.913147,312.731939 488.362873,314.925749 Z M475.628641,303.991144 C472.808272,305.657698 469.32006,305.800772 465.217222,305.800772 L439.602417,305.800772 L439.602417,286.067084 L465.565777,286.067084 C469.32006,286.067084 473.077005,286.14657 475.628641,287.654151 C478.361206,289.076948 479.994891,291.798014 479.994891,295.557695 C479.994891,299.317376 478.361206,302.345787 475.628641,303.991144 Z M665.891804,309.417379 C669.997304,313.648676 672.197724,318.990126 672.197724,328.032967 C672.197724,346.934703 660.33887,355.757633 639.074351,355.757633 L598.006052,355.757633 L598.006052,336.916836 L638.909386,336.916836 C642.908457,336.916836 645.74479,336.38958 647.522155,334.741573 C648.97225,333.382365 650.012594,331.408466 650.012594,329.010643 C650.012594,326.451198 648.887107,324.41901 647.439672,323.200226 C645.827273,321.859565 643.602906,321.250173 639.931105,321.250173 C620.212468,320.579843 595.518274,321.859565 595.518274,294.055412 C595.518274,281.31118 603.558987,267.896617 625.664294,267.896617 L667.935241,267.896617 L667.935241,286.596989 L629.256274,286.596989 C625.422168,286.596989 622.929069,286.740064 620.80847,288.184057 C618.498961,289.606854 617.642207,291.718528 617.642207,294.505832 C617.642207,297.820392 619.603162,300.075141 622.255905,301.050168 C624.480272,301.82118 626.869603,302.04639 630.461583,302.04639 L641.812238,302.351086 C653.258679,302.629287 661.115802,304.600536 665.891804,309.417379 Z M750,286.59169 L711.571141,286.59169 C707.734374,286.59169 705.185399,286.734765 703.038194,288.178758 C700.813827,289.601555 699.957074,291.713229 699.957074,294.500533 C699.957074,297.815093 701.835546,300.069842 704.568111,301.044869 C706.792478,301.815881 709.181809,302.041091 712.693967,302.041091 L724.121783,302.345787 C735.653368,302.629287 743.350847,304.603185 748.044367,309.417379 C748.89846,310.08771 749.41198,310.840176 750,311.592642 L750,286.59169 Z', __source: {
            fileName: _jsxFileName$3,
            lineNumber: 9
          },
          __self: _this$3
        })
      )
    );
  };

  Amex.propTypes = {
    className: PropTypes.string
  };

  var _jsxFileName$4 = '/Users/jrusso/Documents/ROA/mirage/src/core/icons/cards/Default.base.js',
      _this$4 = undefined;

  var Default = function Default(_ref) {
    var className = _ref.className;
    return React__default.createElement(
      BaseCardIcon,
      { className: className, box: '0 0 750 472', __source: {
          fileName: _jsxFileName$4,
          lineNumber: 7
        },
        __self: _this$4
      },
      React__default.createElement('path', { d: 'M0,462a10,10,0,0,0,10,10H740a10,10,0,0,0,10-10V144H0Z', __source: {
          fileName: _jsxFileName$4,
          lineNumber: 8
        },
        __self: _this$4
      }),
      React__default.createElement('path', { d: 'M750,10A10,10,0,0,0,740,0H10A10,10,0,0,0,0,10V73H750Z', __source: {
          fileName: _jsxFileName$4,
          lineNumber: 9
        },
        __self: _this$4
      })
    );
  };

  Default.propTypes = {
    className: PropTypes.string
  };

  var _jsxFileName$5 = '/Users/jrusso/Documents/ROA/mirage/src/core/icons/cards/Diners.base.js',
      _this$5 = undefined;

  var Diners = function Diners(_ref) {
    var className = _ref.className;
    return React__default.createElement(
      BaseCardIcon,
      { className: className, box: '0 0 750 471', __source: {
          fileName: _jsxFileName$5,
          lineNumber: 7
        },
        __self: _this$5
      },
      React__default.createElement(
        'g',
        { fillRule: 'evenodd', __source: {
            fileName: _jsxFileName$5,
            lineNumber: 8
          },
          __self: _this$5
        },
        React__default.createElement('path', { d: 'M0,40.0047706 C0,17.9107459 17.9143492,0 39.9919369,0 L710.008063,0 C732.095,0 750,17.9064659 750,40.0047706 L750,430.995229 C750,453.089254 732.085651,471 710.008063,471 L39.9919369,471 C17.905,471 0,453.093534 0,430.995229 L0,40.0047706 Z M584.933911,236.947339 C584.933911,137.53154 501.952976,68.8140806 411.038924,68.8471464 L332.79674,68.8471464 C240.793699,68.8140806 165.066089,137.552041 165.066089,236.947339 C165.066089,327.877778 240.793699,402.587432 332.79674,402.150963 L411.038924,402.150963 C501.952976,402.586771 584.933911,327.857939 584.933911,236.947339 Z M333.166996,82.6223815 C249.097073,82.6488342 180.972583,150.929824 180.952783,235.202123 C180.972583,319.459873 249.096413,387.73425 333.166996,387.760703 C417.256719,387.73425 485.395069,319.459873 485.406949,235.202123 C485.394409,150.929824 417.256719,82.6488342 333.166996,82.6223815 Z M236.682602,235.202123 C236.761801,194.021908 262.428934,158.90597 298.622956,144.951518 L298.622956,325.431566 C262.428934,311.48505 236.761141,276.388291 236.682602,235.202123 Z M367.697836,325.471245 L367.697836,144.945566 C403.905059,158.866291 429.611791,194.002068 429.67779,235.202123 C429.611791,276.414743 403.905059,311.524068 367.697836,325.471245 Z', __source: {
            fileName: _jsxFileName$5,
            lineNumber: 9
          },
          __self: _this$5
        })
      )
    );
  };

  Diners.propTypes = {
    className: PropTypes.string
  };

  var _jsxFileName$6 = '/Users/jrusso/Documents/ROA/mirage/src/core/icons/cards/Discover.base.js',
      _this$6 = undefined;

  var Discover = function Discover(_ref) {
    var className = _ref.className;
    return React__default.createElement(
      BaseCardIcon,
      { className: className, box: '0 0 750 471', __source: {
          fileName: _jsxFileName$6,
          lineNumber: 7
        },
        __self: _this$6
      },
      React__default.createElement(
        'g',
        { fillRule: 'evenodd', __source: {
            fileName: _jsxFileName$6,
            lineNumber: 8
          },
          __self: _this$6
        },
        React__default.createElement(
          'g',
          {
            transform: 'translate(375.000000, 235.500000) scale(1, -1) translate(-375.000000, -235.500000)', __source: {
              fileName: _jsxFileName$6,
              lineNumber: 9
            },
            __self: _this$6
          },
          React__default.createElement('path', {
            d: 'M 0,40.004771 C 0,17.910746 17.914349,0 39.991937,0 L 710.00806,0 C 732.095,0 750,17.906466 750,40.004771 l 0,390.990459 C 750,453.08925 732.08565,471 710.00806,471 L 39.991937,471 C 17.905,471 0,453.09353 0,430.99523 Z m 149.43105,-31.4905954 557.42909,0 c 18.77936,0 34.00303,15.2195984 34.00303,33.9925264 l 0,179.418418 c 0,0 -208.87509,-147.428343 -591.43212,-213.4109444 z M 87.362471,255.88812 c -6.669449,-5.66014 -15.333048,-8.13053 -29.049923,-8.13053 l -5.695708,0 0,67.65297 5.695708,0 c 13.716875,0 22.038656,-2.30833 29.049923,-8.27282 7.341313,-6.14632 11.757621,-15.66817 11.757621,-25.47066 0,-9.81829 -4.416308,-19.63264 -11.757621,-25.77896 z m -24.798007,76.85861 -31.158432,0 0,-102.3095 30.99446,0 c 16.480851,0 28.383104,3.65617 38.829788,11.81042 12.41477,9.66019 19.75609,24.21767 19.75609,39.27319 0,30.19403 -23.99665,51.22589 -58.421906,51.22589 z m 68.188736,-102.3095 21.22733,0 0,102.3095 -21.22733,0 z m 73.13186,63.29653 c -12.73767,4.43089 -16.47917,7.35582 -16.47917,12.88158 0,6.44276 6.66482,11.34005 15.81403,11.34005 6.35917,0 11.58693,-2.45852 17.11656,-8.28468 l 11.1072,13.6721 c -9.12819,7.50601 -20.04619,11.344 -31.97787,11.344 -19.25492,0 -33.94259,-12.57327 -33.94259,-29.31655 0,-14.09502 6.83889,-21.30855 26.77534,-28.05566 8.31001,-2.75497 12.53922,-4.59294 14.67422,-5.82616 4.24056,-2.60477 6.3642,-6.28861 6.3642,-10.5851 0,-8.28864 -7.01126,-14.431 -16.48085,-14.431 -10.12505,0 -18.27949,4.75895 -23.1688,13.64443 L 159.97551,247.7016 c 9.78028,-13.49422 21.52445,-19.47453 37.67694,-19.47453 22.05841,0 37.53441,13.78672 37.53441,33.59328 0,16.25315 -7.1559,23.61292 -31.3018,31.91341 z m 37.99732,-11.93665 c 0,-30.0715 25.11586,-53.38798 57.43933,-53.38798 9.14038,0 16.96478,1.68777 26.6181,5.96054 l 0,23.4904 c -8.4887,-7.98429 -16.00618,-11.20567 -25.63006,-11.20567 -21.37941,0 -36.55311,14.5733 -36.55311,35.28895 0,19.6445 15.65721,35.13876 35.56507,35.13876 10.12842,0 17.78884,-3.3953 26.6181,-11.51002 l 0,23.47854 c -9.32117,4.44274 -16.9816,6.28465 -26.11357,6.28465 -32.1595,0 -57.94386,-23.79079 -57.94386,-53.53817 z m 252.364,-17.61349 -29.02301,68.72017 -23.1873,0 46.18119,-104.93403 11.42337,0 47.01367,104.93403 -23.01071,0 -29.39721,-68.72017 z m 62.00658,-33.74639 60.19869,0 0,17.32036 -38.98746,0 0,27.61693 37.54955,0 0,17.32827 -37.54955,0 0,22.70777 38.98746,0 0,17.33617 -60.19869,0 z m 101.66254,55.21014 -6.2015,0 0,30.98455 6.53785,0 c 13.21865,0 20.40398,-5.20955 20.40398,-15.16619 0,-10.2847 -7.18533,-15.81836 -20.74033,-15.81836 z m 42.58222,16.89348 c 0,19.15437 -14.0301,30.20588 -38.51236,30.20588 l -31.47418,0 0,-102.3095 21.20282,0 0,41.0993 2.7665,0 29.38039,-41.0993 26.10515,0 -34.2575,43.09932 c 15.98936,3.05933 24.78918,13.34008 24.78918,29.0043 z m -367.64587,-20.93267 0,0.0356 c 0,30.05964 25.92016,54.39194 57.89467,54.39194 31.97451,0 57.89467,-24.3323 57.89467,-54.39194 l 0,-0.0356 c 0,-30.05964 -25.92016,-54.42751 -57.89467,-54.42751 -31.97451,0 -57.89467,24.36787 -57.89467,54.42751 z', __source: {
              fileName: _jsxFileName$6,
              lineNumber: 11
            },
            __self: _this$6
          })
        )
      )
    );
  };

  Discover.propTypes = {
    className: PropTypes.string
  };

  var _jsxFileName$7 = '/Users/jrusso/Documents/ROA/mirage/src/core/icons/cards/JCB.base.js',
      _this$7 = undefined;

  var JCB = function JCB(_ref) {
     var className = _ref.className;
     return React__default.createElement(
        BaseCardIcon,
        { className: className, box: '0 0 750 471', __source: {
              fileName: _jsxFileName$7,
              lineNumber: 7
           },
           __self: _this$7
        },
        React__default.createElement(
           'g',
           { fillRule: 'evenodd', __source: {
                 fileName: _jsxFileName$7,
                 lineNumber: 8
              },
              __self: _this$7
           },
           React__default.createElement(
              'g',
              {
                 __source: {
                    fileName: _jsxFileName$7,
                    lineNumber: 9
                 },
                 __self: _this$7
              },
              React__default.createElement('rect', {
                 x: '0',
                 y: '0',
                 width: '750',
                 height: '471',
                 rx: '40', __source: {
                    fileName: _jsxFileName$7,
                    lineNumber: 10
                 },
                 __self: _this$7
              })
           ),
           React__default.createElement(
              'g',
              { transform: 'translate(155.000000, 66.000000)',
                 fill: '#FFFFFF', __source: {
                    fileName: _jsxFileName$7,
                    lineNumber: 17
                 },
                 __self: _this$7
              },
              React__default.createElement('path', {
                 d: 'm 24.180777,192.9493 c 0,0 -0.273259,-89.5021 0.03034,-130.713584 4.054224,-24.089001 28.713217,-42.119028 52.864848,-39.91895 l 67.310515,0 c -0.0789,81.941864 -0.0683,163.886424 -0.20314,245.826604 -0.74635,24.24305 -21.88376,45.46784 -46.179915,46.07374 -24.596815,0.0721 -49.196149,0.0105 -73.793937,0.031 l 0,-102.36183 c 18.264856,3.34751 36.626104,6.95237 55.313504,5.86236 17.923305,-0.93137 39.537528,-3.67524 49.801728,-20.44226 7.59693,-12.38525 4.19217,-27.16287 4.823,-40.8607 l -0.23281,-35.02929 c -13.85232,0.0774 -27.70464,0.15489 -41.556967,0.23234 -0.200364,20.3779 0.411493,40.80012 -0.325899,61.1488 -1.596968,13.5333 -16.078567,20.48386 -28.516122,19.23382 -14.38394,-0.13222 -27.187303,-5.50203 -39.335145,-9.08205 z', __source: {
                    fileName: _jsxFileName$7,
                    lineNumber: 19
                 },
                 __self: _this$7
              }),
              React__default.createElement('path', {
                 d: 'm 159.85062,136.5565 c 0.15364,-23.04134 -0.31645,-46.105843 0.25211,-69.131787 1.6841,-21.943077 20.124,-40.412279 41.80275,-43.091567 21.80037,-0.717971 43.672,-0.113144 65.50027,-0.312841 4.23381,0 8.46763,0 12.70144,0 -0.0564,82.335025 0.11285,164.675695 -0.0847,247.007175 -1.5733,25.57784 -26.2495,47.05322 -51.82331,44.62372 -22.78284,0 -45.56567,0 -68.34851,0 0,-37.34731 0,-74.69462 0,-112.04193 17.82059,14.07505 41.89423,16.19033 63.85722,15.90731 14.42135,-0.37438 28.79787,-2.51748 42.70307,-6.35682 -0.10071,-6.76991 -0.20142,-13.53981 -0.30213,-20.30971 -19.63891,9.45349 -43.98235,16.1344 -64.47132,5.37602 -16.27614,-9.31594 -18.18786,-32.76987 -9.48731,-47.86263 10.74645,-15.65641 32.45408,-16.12208 49.35354,-12.81175 8.2927,0.73852 19.43169,8.15781 24.90722,7.99048 0,-6.19882 0,-12.39765 0,-18.59647 -28.34546,-7.16643 -58.71741,-9.48539 -87.11474,-1.37066 -7.06049,2.414 -13.97289,5.82928 -19.44555,10.98146 z', __source: {
                    fileName: _jsxFileName$7,
                    lineNumber: 21
                 },
                 __self: _this$7
              }),
              React__default.createElement('path', {
                 d: 'm 293.91013,215.1805 c 0,32.98487 0,65.96973 0,98.9546 25.40901,-0.0606 50.83235,0.12109 76.23243,-0.0907 24.15687,-2.16736 45.13425,-24.23224 43.88382,-48.83672 0,-80.96662 0,-161.93324 0,-242.899863 -25.06545,0.09218 -50.14129,-0.185316 -75.20017,0.140412 -25.20246,1.521518 -46.62552,25.056733 -44.91608,50.401254 0,16.256878 0,32.513757 0,48.770637 25.22736,0.11344 50.47179,-0.22865 75.68831,0.1742 13.25128,0.32531 27.38603,10.70453 24.98392,25.24757 -1.0073,11.1285 -11.59437,18.42894 -21.99714,19.64076 12.99985,1.03728 28.16749,9.42882 27.91114,24.14848 0.34108,15.87429 -16.81059,24.8889 -30.89727,24.34935 -25.22965,0 -50.45931,0 -75.68896,0 z', __source: {
                    fileName: _jsxFileName$7,
                    lineNumber: 23
                 },
                 __self: _this$7
              }),
              React__default.createElement('path', {
                 d: 'M317.96875,137.258883 L317.96875,161.044279 L343.941512,161.044279 C343.941512,161.044279 356.111741,161.008725 356.111741,149.133804 C356.111741,137.258883 343.941512,137.258883 343.941512,137.258883 L317.96875,137.258883 Z', __source: {
                    fileName: _jsxFileName$7,
                    lineNumber: 25
                 },
                 __self: _this$7
              }),
              React__default.createElement('path', {
                 d: 'M345.749893,175.01374 L317.96875,175.01374 L317.96875,200.568656 L345.749893,200.568656 C345.829565,200.568656 359.445848,201.361012 359.445848,187.791199 C359.445848,174.221386 345.749893,175.01374 345.749893,175.01374 Z', __source: {
                    fileName: _jsxFileName$7,
                    lineNumber: 27
                 },
                 __self: _this$7
              })
           )
        )
     );
  };

  JCB.propTypes = {
     className: PropTypes.string
  };

  var _jsxFileName$8 = '/Users/jrusso/Documents/ROA/mirage/src/core/icons/cards/Mastercard.base.js',
      _this$8 = undefined;

  var Mastercard = function Mastercard(_ref) {
    var className = _ref.className;
    return React__default.createElement(
      BaseCardIcon,
      { className: className, box: '0 0 750 471', __source: {
          fileName: _jsxFileName$8,
          lineNumber: 7
        },
        __self: _this$8
      },
      React__default.createElement(
        'g',
        { fillRule: 'evenodd', __source: {
            fileName: _jsxFileName$8,
            lineNumber: 8
          },
          __self: _this$8
        },
        React__default.createElement('path', {
          d: 'M 0,40.004771 C 0,17.910746 17.914349,0 39.991937,0 L 710.00806,0 C 732.095,0 750,17.906466 750,40.004771 l 0,390.990459 C 750,453.08925 732.08565,471 710.00806,471 L 39.991937,471 C 17.905,471 0,453.09353 0,430.99523 Z M 703.97468,235.48039 c 0,112.36221 -91.6058,203.80556 -204.19747,203.80556 -46.96116,0 -90.25335,-15.94211 -124.79115,-42.60197 -34.51495,26.65986 -77.80667,42.60197 -124.77013,42.60197 -112.58892,0 -204.190614,-91.44335 -204.190614,-203.80556 0,-112.36631 91.601694,-203.766344 204.190614,-203.766344 46.96346,0 90.25518,15.882374 124.77013,42.580996 34.5378,-26.698622 77.82999,-42.580996 124.79115,-42.580996 112.59167,0 204.19747,91.400034 204.19747,203.766344 z M 499.77721,49.935684 c -41.41885,0 -79.65762,13.54311 -110.54927,36.397678 28.01769,26.023748 48.73854,59.817678 58.63977,97.902548 l -18.92519,0 c -9.69562,-33.67082 -28.64823,-63.39726 -53.95646,-86.274626 -25.2808,22.877366 -44.24712,52.603806 -53.90619,86.274626 l -18.95261,0 c 9.92408,-38.08487 30.64493,-71.8788 58.66262,-97.902548 -30.90993,-22.854568 -69.13453,-36.397678 -110.57395,-36.397678 -102.66759,0 -185.896411,83.059846 -185.896411,185.544706 0,102.45842 83.228821,185.54425 185.896411,185.54425 41.43942,0 79.66402,-13.54265 110.57395,-36.39585 -26.36368,-24.50436 -46.25296,-55.89884 -56.76645,-91.23861 l 19.13538,0 c 10.16624,30.9435 28.21417,58.25544 51.82725,79.60704 23.64051,-21.3516 41.71128,-48.66354 51.87752,-79.60704 l 19.13081,0 c -10.53177,35.33977 -30.41648,66.73425 -56.76645,91.23861 30.89165,22.8532 69.13042,36.39585 110.54927,36.39585 102.66759,0 185.89824,-83.08583 185.89824,-185.54425 0,-102.48486 -83.23065,-185.544706 -185.89824,-185.544706 z m -324.80332,141.318476 -29.76721,0 -18.60261,55.34845 -0.77492,-55.34845 -27.58592,0 -14.974299,89.42693 17.951519,0 11.52966,-68.32111 1.61015,68.32111 13.07904,0 24.51045,-68.72923 -10.98182,68.72923 19.17239,0 14.83357,-89.42693 z m 35.65494,57.0174 c -2.0168,-0.2052 -2.89498,-0.28499 -4.27988,-0.28499 -10.88038,0 -16.36147,3.71728 -16.36147,11.04014 0,4.53671 2.68983,7.42226 6.84679,7.42226 7.82458,0 13.44639,-7.42226 13.79456,-18.17741 z m 13.93391,32.40953 -15.89177,0 0.36918,-7.54356 c -4.85101,5.95806 -11.30988,8.80804 -20.08757,8.80804 -10.41251,0 -17.50192,-8.11355 -17.50192,-19.84818 0,-17.73235 12.36488,-28.04016 33.63631,-28.04016 2.17946,0 4.97072,0.20291 7.82275,0.56817 0.59261,-2.42089 0.73562,-3.43594 0.73562,-4.73827 0,-4.79845 -3.32356,-6.60831 -12.28858,-6.60831 -9.3703,-0.12266 -17.11264,2.21752 -20.29136,3.27406 0.20516,-1.22024 2.67018,-16.3484 2.67018,-16.3484 9.53616,-2.80529 15.84883,-3.86321 22.94006,-3.86321 16.46291,0 25.18349,7.35979 25.16384,21.31057 0.0196,3.74054 -0.59261,8.35568 -1.54938,14.43868 -1.67046,10.50937 -5.23664,33.08122 -5.72736,38.59057 z m 250.44541,-91.62347 c -25.40875,0 -43.17796,22.32607 -43.17796,54.29419 0,23.74741 12.862,38.59376 33.50061,38.59376 5.29558,0 9.87838,-0.69448 16.9285,-2.64478 l 3.36286,-20.35616 c -6.33734,3.11354 -11.55068,4.59553 -16.28426,4.59553 -11.14403,0 -17.86974,-8.21524 -17.86974,-21.77932 0,-19.70226 10.01089,-33.51031 24.33044,-33.51031 5.31843,0 10.2896,1.38395 17.13411,4.84132 l 3.13897,-19.39765 c -2.81,-1.09713 -12.69295,-4.63658 -21.06353,-4.63658 z m 55.25407,59.21394 c -1.99669,-0.2052 -2.89223,-0.28499 -4.29952,-0.28499 -10.86074,0 -16.36193,3.71728 -16.36193,11.04014 0,4.53671 2.6912,7.42226 6.8902,7.42226 7.80401,0 13.44685,-7.42226 13.77125,-18.17741 z m 13.93575,32.40953 -15.86848,0 0.36553,-7.54356 c -4.87065,5.95806 -11.34963,8.80804 -20.11316,8.80804 -10.39012,0 -17.52248,-8.11355 -17.52248,-19.84818 0,-17.73235 12.40966,-28.04016 33.66053,-28.04016 2.17946,0 4.97118,0.20291 7.82686,0.56817 0.58484,-2.42089 0.73106,-3.43594 0.73106,-4.73827 0,-4.79845 -3.32174,-6.60831 -12.26803,-6.60831 -9.38949,-0.12266 -17.11126,2.21752 -20.29135,3.27406 0.18276,-1.22024 2.65007,-16.3484 2.65007,-16.3484 9.55398,-2.80529 15.86847,-3.86321 22.91859,-3.86321 16.4853,0 25.2077,7.35979 25.18486,21.31057 0.0411,3.74054 -0.58942,8.35568 -1.54893,14.43868 -1.64944,10.50937 -5.23161,33.08122 -5.72507,38.59057 z m -225.40265,-17.2034 c -1.28391,0.45098 -2.97448,0.6913 -5.15394,0.6913 -4.56453,0 -6.5795,-1.62472 -6.5795,-5.38806 0.0411,-2.31601 3.19837,-19.51896 5.40067,-33.327 l 9.83727,0 2.60895,-17.4884 -9.80071,0 2.22058,-10.97584 -19.05176,0 c 0,0 -7.21049,42.80124 -8.29017,49.57188 -1.22269,7.7483 -2.77024,16.18607 -2.65053,19.39766 0,10.3525 5.3399,15.98634 15.13833,15.98634 4.44573,0 8.53507,-0.73552 13.79867,-2.35978 l 2.52214,-16.1081 z m 58.63978,15.5381 c -6.56122,1.99499 -12.88028,2.92978 -19.5603,2.92978 -21.35596,-0.0442 -32.47713,-11.16463 -32.47713,-32.45422 0,-24.85001 14.15962,-43.15008 33.37267,-43.15008 15.70856,0 25.756,10.22756 25.756,26.332 0,5.32742 -0.71278,10.51256 -2.3668,17.89606 l -37.9372,0 c -1.28392,10.50936 5.48292,14.90335 16.56754,14.90335 6.82166,0 12.95796,-1.38395 19.80247,-4.5545 l -3.15725,18.09761 z M 366.716,235.88805 c 0.12337,-1.50479 2.01497,-13.01689 -8.86405,-13.01689 -6.07232,0 -10.43124,4.65756 -12.18121,13.01689 l 21.04526,0 z M 239.29625,230.9455 c 0,9.21251 4.4407,15.53582 14.58729,20.31467 7.76381,3.65892 8.96503,4.71501 8.96503,8.03375 0,4.50981 -3.42317,6.54401 -11.02295,6.54401 -5.70406,0 -11.04259,-0.85499 -17.17706,-2.84451 0,0 -2.52351,16.02237 -2.64687,16.79711 4.38176,0.93525 8.25133,1.82581 19.96695,2.15504 20.23058,0 29.56342,-7.70908 29.56342,-24.30145 0,-10.02281 -3.89287,-15.83859 -13.51128,-20.25447 -8.02424,-3.6995 -8.96136,-4.51346 -8.96136,-7.90835 0,-3.94575 3.19836,-5.93891 9.41142,-5.93891 3.74803,0 8.90243,0.40812 13.75161,1.09895 l 2.73278,-16.8769 c -4.97255,-0.77337 -12.49009,-1.42317 -16.87185,-1.42317 -21.45328,0 -28.86892,11.16281 -28.78713,24.60423 z m 412.88316,49.73559 -18.14845,0 0.91382,-6.76882 c -5.2773,5.59326 -10.67341,8.0333 -17.6824,8.0333 -13.94031,0 -23.14704,-11.97858 -23.14704,-30.15599 0,-24.22165 14.27843,-44.59514 31.18865,-44.59514 7.42021,0 13.08132,3.01004 18.32207,9.90335 l 4.23556,-25.84363 18.91148,0 -14.59369,89.42693 z M 623.883,263.88763 c 8.92345,0 15.21966,-10.10854 15.21966,-24.50482 0,-9.25172 -3.5639,-14.25492 -10.17081,-14.25492 -8.69956,0 -14.87241,10.10672 -14.87241,24.40268 0,9.53535 3.30346,14.35706 9.82356,14.35706 z m -59.14695,-55.9221 c -2.40334,22.4916 -6.66174,45.28461 -9.98347,67.81724 l -0.87727,4.89832 19.15365,0 c 6.86735,-44.46882 8.53507,-53.15237 19.27245,-52.05479 1.70884,-9.13088 4.88893,-17.07845 7.29228,-21.10445 -8.04161,-1.67077 -12.52847,2.88601 -18.37234,11.48748 0.46605,-3.74237 1.30219,-7.34247 1.11943,-11.0438 l -17.60473,0 z m -167.57616,0 c -2.40792,22.4916 -6.68459,45.28461 -10.00632,67.81724 l -0.87727,4.89832 19.17193,0 c 6.86735,-44.46882 8.51679,-53.15237 19.25417,-52.05479 1.73168,-9.13088 4.93005,-17.07845 7.29684,-21.10445 -8.00962,-1.67077 -12.52846,2.88601 -18.38147,11.48748 0.47062,-3.74237 1.30219,-7.34247 1.14227,-11.0438 l -17.60015,0 z', __source: {
            fileName: _jsxFileName$8,
            lineNumber: 9
          },
          __self: _this$8
        })
      )
    );
  };

  Mastercard.propTypes = {
    className: PropTypes.string
  };

  var _jsxFileName$9 = '/Users/jrusso/Documents/ROA/mirage/src/core/icons/cards/Maestro.base.js',
      _this$9 = undefined;

  var Maestro = function Maestro(_ref) {
    var className = _ref.className;
    return React__default.createElement(
      BaseCardIcon,
      { className: className, box: '0 0 750 471', __source: {
          fileName: _jsxFileName$9,
          lineNumber: 7
        },
        __self: _this$9
      },
      React__default.createElement(
        'g',
        { fillRule: 'evenodd', __source: {
            fileName: _jsxFileName$9,
            lineNumber: 8
          },
          __self: _this$9
        },
        React__default.createElement('path', {
          d: 'M 0,40.004771 C 0,17.910746 17.914349,0 39.991937,0 L 710.00806,0 C 732.095,0 750,17.906466 750,40.004771 l 0,390.990459 C 750,453.08925 732.08565,471 710.00806,471 L 39.991937,471 C 17.905,471 0,453.09353 0,430.99523 Z M 703.57762,235.04812 c 0,112.42453 -91.51299,203.89557 -204.04498,203.89557 -46.90013,0 -90.17077,-15.87809 -124.68046,-42.59357 -34.51426,26.71548 -77.76208,42.59357 -124.68092,42.59357 -112.49547,0 -204.006182,-91.47104 -204.006182,-203.89557 0,-112.39579 91.510712,-203.853148 204.006182,-203.853148 46.91884,0 90.16666,15.91733 124.68092,42.60589 34.50969,-26.68856 77.78033,-42.60589 124.68046,-42.60589 112.53199,0 204.04498,91.457358 204.04498,203.853148 z M 499.53264,49.452684 c -41.38058,0 -79.5791,13.549576 -110.48214,36.410494 30.17258,28.034392 51.80334,65.074462 60.68756,106.746022 l -18.69978,0 c -8.71987,-37.28277 -28.72536,-70.25341 -56.1861,-95.107985 -27.44249,24.854575 -47.43884,57.825215 -56.16784,95.107985 l -18.69066,0 C 308.86877,150.93764 330.50866,113.89757 360.65842,85.863178 329.79646,63.00226 291.56143,49.452684 250.17126,49.452684 c -102.56395,0 -185.734171,83.081256 -185.734171,185.595436 0,102.51281 83.170221,185.65428 185.734171,185.65428 41.39017,0 79.6252,-13.56006 110.48716,-36.42053 -26.3468,-24.53066 -46.20162,-55.86303 -56.72939,-91.2662 l 19.11524,0 c 10.1671,30.9423 28.25056,58.26546 51.80791,79.6382 23.61213,-21.37274 41.65907,-48.6959 51.82616,-79.6382 l 19.11067,0 c -10.49124,35.40317 -30.37802,66.73554 -56.73851,91.2662 30.90304,22.86047 69.10156,36.42053 110.48214,36.42053 102.59316,0 185.75152,-83.14147 185.75152,-185.65428 0,-102.51418 -83.15836,-185.595436 -185.75152,-185.595436 z M 371.15422,278.55959 c -7.54657,1.93892 -14.85574,2.89195 -22.5621,2.89195 -24.57086,0 -37.40413,-11.19688 -37.40413,-32.63167 0,-24.97958 16.29839,-43.37233 38.45874,-43.37233 18.09259,0 29.65669,10.3287 29.65669,26.46593 0,5.33178 -0.77612,10.54631 -2.7027,17.96345 l -43.71806,0 c -1.57962,10.4464 6.06282,15.04414 19.07871,15.04414 7.7931,0 14.81922,-1.38461 22.61688,-4.53888 l -3.42403,18.17741 z m -11.77867,-43.41202 c 0,-1.61637 2.42421,-12.82374 -10.21275,-13.07876 -6.98047,0 -11.99782,4.66023 -14.03854,13.07876 l 24.25129,0 z m 31.24544,-4.93442 c 0,9.24018 5.2091,15.64498 17.04712,20.36406 9.03032,3.70994 10.45471,4.77566 10.45471,8.09416 0,4.62465 -3.97187,6.70043 -12.85153,6.66119 -6.66545,-0.0406 -12.75567,-0.86042 -19.90962,-2.85134 l -3.20489,16.81242 c 6.37783,1.49 15.34423,1.99594 23.29712,2.1579 23.58931,0 34.46404,-7.73056 34.46404,-24.42847 0,-10.02441 -4.52429,-15.94106 -15.76425,-20.34809 -9.35446,-3.72454 -10.43189,-4.56945 -10.43189,-7.94817 0,-3.97956 3.70709,-5.99831 10.96147,-5.99831 4.38276,0 10.38624,0.40968 16.09296,1.11179 l 3.1775,-16.97073 c -5.78433,-0.77009 -14.60921,-1.42202 -19.6996,-1.42202 -25.0411,0 -33.71075,11.2466 -33.63314,24.76561 z m -94.20657,50.06227 -18.36423,0 0.44969,-7.69863 c -5.59259,6.02341 -13.0273,8.87475 -23.16381,8.87475 -11.95946,0 -20.1808,-8.18495 -20.1808,-19.92883 0,-17.87449 14.27229,-28.1854 38.78106,-28.1854 2.50548,0 5.73685,0.15329 9.01479,0.52921 0.67249,-2.41474 0.85419,-3.43073 0.85419,-4.73323 0,-4.89564 -3.83766,-6.68993 -14.17778,-6.68993 -10.15614,0.0424 -17.01106,1.5484 -23.3688,3.25738 l 3.12774,-16.39864 c 11.01215,-2.77652 18.22407,-3.85456 26.36323,-3.85456 18.97553,0 29.01936,7.40801 29.01936,21.39556 0.15066,3.71587 -1.15047,11.22744 -1.80332,14.47615 -0.75329,4.78295 -5.99891,32.40173 -6.55132,38.95617 z m -16.10254,-32.6262 c -2.31145,-0.25867 -3.33866,-0.32984 -4.94019,-0.32984 -12.52786,0 -18.84451,3.69808 -18.84451,11.06686 0,4.66525 3.0871,7.51659 7.91636,7.51659 8.97188,0 15.48302,-7.51659 15.86834,-18.25361 z m 203.89935,15.32243 c -1.52484,0.52374 -3.44229,0.7304 -5.94869,0.7304 -5.21822,0 -7.50091,-1.63234 -7.50091,-5.41755 0,-2.36137 6.17695,-33.34655 6.17695,-33.34655 l 11.26736,0 3.01314,-17.82249 -11.20343,0 3.33729,-17.47713 -21.84077,0 c 0,0 -9.77904,52.82145 -10.38623,56.46387 -0.61176,3.6228 -3.38751,16.62355 -3.01315,19.38913 0,10.22194 6.1313,15.96021 17.39865,15.96021 5.04475,0 9.75622,-0.6679 15.76425,-2.32168 l 2.93554,-16.15821 z m 104.61106,-40.12043 c -11.06191,0 -17.95106,13.09154 -17.95106,24.673 0,9.78398 4.68864,16.29736 12.49087,16.19562 10.69668,0 17.46257,-9.789 17.46257,-26.26793 0,-7.49378 -3.0588,-14.60069 -12.00238,-14.60069 z m -7.29547,58.60032 c -24.60282,0 -34.52795,-14.9424 -34.52795,-33.20194 0,-25.5211 16.80515,-42.80206 42.81867,-42.80206 22.59862,0 34.59644,14.22979 34.59644,32.48933 0,30.28627 -18.01042,43.51467 -42.88716,43.51467 z m -76.00441,-74.38763 c -2.77118,22.63965 -7.70635,45.59273 -11.53214,68.23786 l -0.94047,4.97365 22.08273,0 c 7.94833,-43.80163 10.60081,-56.28366 27.25987,-51.87481 0.85829,-2.35041 8.02594,-20.70439 8.02594,-20.70439 -11.60976,-4.27336 -19.10611,1.84311 -25.872,10.46283 0.6072,-3.91888 1.75767,-7.66486 1.47005,-11.09514 l -20.49398,0 z m -267.19602,-16.22619 -35.72408,0 -24.1609,55.34477 -1.81382,-55.34477 -34.3152,0 -16.98275,89.4377 19.93609,0 13.09852,-68.34279 3.64546,68.34279 20.03561,0 30.06028,-68.76159 -13.05744,68.76159 21.96175,0 17.31648,-89.4377 z', __source: {
            fileName: _jsxFileName$9,
            lineNumber: 9
          },
          __self: _this$9
        })
      )
    );
  };

  Maestro.propTypes = {
    className: PropTypes.string
  };

  var _jsxFileName$a = '/Users/jrusso/Documents/ROA/mirage/src/core/icons/cards/Paypal.base.js',
      _this$a = undefined;

  var Paypal = function Paypal(_ref) {
    var className = _ref.className;
    return React__default.createElement(
      BaseCardIcon,
      { className: className, box: '0 0 780 501', __source: {
          fileName: _jsxFileName$a,
          lineNumber: 7
        },
        __self: _this$a
      },
      React__default.createElement('path', { d: 'M622.483,238.885c-4.039-3.597-9.111-5.397-15.212-5.397c-8.071,0-14.838,2.781-20.285,8.343 c-5.454,5.561-8.18,12.382-8.18,20.446c0,6.113,1.963,10.912,5.89,14.396c3.928,3.492,9.049,5.234,15.377,5.234 c7.853,0,14.559-2.726,20.12-8.179c5.562-5.449,8.343-12.104,8.344-19.955C628.536,247.448,626.515,242.485,622.483,238.885z', __source: {
          fileName: _jsxFileName$a,
          lineNumber: 8
        },
        __self: _this$a
      }),
      React__default.createElement('path', { d: 'M250.826,238.885c-4.039-3.597-9.11-5.397-15.215-5.397c-8.072,0-14.835,2.781-20.283,8.343 c-5.455,5.561-8.181,12.382-8.181,20.446c0,6.113,1.907,10.912,5.727,14.396c3.813,3.492,8.885,5.234,15.214,5.234 c8.064,0,14.884-2.666,20.447-8.017c5.562-5.338,8.343-12.047,8.343-20.117C256.878,247.448,254.858,242.485,250.826,238.885z', __source: {
          fileName: _jsxFileName$a,
          lineNumber: 11
        },
        __self: _this$a
      }),
      React__default.createElement('path', { d: 'M725,0H55C24.673,0,0,24.673,0,55v391c0,30.327,24.673,55,55,55h670c30.325,0,55-24.673,55-55V55 C780,24.673,755.325,0,725,0z M120.777,257.697c-0.654,0-2.183-0.106-4.58-0.324c-2.402-0.217-4.474-0.327-6.217-0.327 c-1.748,0-3.599,0.163-5.562,0.487c-1.963,0.326-3.6,1.04-4.907,2.13c-1.309,1.092-2.076,2.51-2.291,4.254l-5.888,35.985 c-0.44,4.147-2.837,6.216-7.198,6.216H59.27c-1.309,0-2.401-0.543-3.271-1.636c-0.874-1.09-1.202-2.289-0.981-3.6L76.283,167.4 c0.435-4.142,2.725-6.215,6.869-6.215h52.347c13.521,0,24.48,2.894,32.88,8.668c8.395,5.783,12.597,15.107,12.597,27.974 c0,18.761-5.348,33.427-16.032,44.004C154.255,252.412,139.533,257.697,120.777,257.697z M295.481,214.511L282.068,299.9 c-0.654,4.147-3.057,6.216-7.197,6.216h-22.574c-2.836,0-4.253-1.74-4.253-5.234c0-1.961,0.434-4.252,1.309-6.868 c-3.926,4.363-9.161,7.852-15.704,10.469c-6.542,2.615-12.871,3.926-18.975,3.926c-12.652,0-22.737-3.813-30.262-11.451 c-7.525-7.631-11.288-17.881-11.288-30.752c0-15.92,5.505-29.773,16.521-41.551c11.014-11.778,24.374-17.668,40.078-17.668 c14.831,0,25.192,4.367,31.081,13.088c0.655-7.198,2.505-10.798,5.563-10.798h24.864c1.307,0,2.396,0.547,3.27,1.636 C295.37,212.004,295.696,213.202,295.481,214.511z M338.342,339.814H313.15c-2.837,0-4.253-1.416-4.253-4.254 c0-1.742,8.94-14.828,26.826-39.259c-0.219-0.866-2.78-8.505-7.688-22.897c-4.907-14.396-9.487-27.811-13.739-40.245 c-4.252-12.432-6.379-18.863-6.379-19.303c0-1.087,0.434-2.126,1.309-3.106c0.867-0.982,1.848-1.474,2.941-1.474h24.541 c3.704,0,6.102,1.749,7.196,5.236l14.396,49.075l34.679-51.04c1.523-2.175,3.485-3.271,5.889-3.271h25.192 c1.087,0,2.07,0.493,2.945,1.474c0.866,0.98,1.306,2.018,1.306,3.106c0,1.097-0.218,1.857-0.652,2.29l-83.427,120.399 C342.701,338.727,340.74,339.814,338.342,339.814z M492.432,257.697c-0.65,0-2.182-0.106-4.58-0.324 c-2.4-0.217-4.471-0.327-6.214-0.327c-1.749,0-3.601,0.163-5.563,0.487c-1.965,0.326-3.599,1.04-4.907,2.13 c-1.311,1.092-2.074,2.51-2.29,4.254l-5.891,37.949c-0.874,2.836-2.618,4.252-5.234,4.252h-26.826c-1.31,0-2.405-0.543-3.271-1.636 c-0.875-1.09-1.202-2.289-0.98-3.6L447.94,167.4c0.433-4.142,2.833-6.215,7.198-6.215h52.019c13.523,0,24.481,2.894,32.879,8.668 c8.396,5.783,12.597,15.107,12.596,27.974c0,18.761-5.345,33.427-16.031,44.004C525.91,252.412,511.191,257.697,492.432,257.697z M667.141,214.511L653.726,299.9c-0.653,4.147-3.056,6.216-7.194,6.216h-22.576c-2.84,0-4.254-1.74-4.254-5.234 c0-0.866,0.215-2.178,0.655-3.926c0.433-1.744,0.655-2.724,0.655-2.942c-3.714,4.363-8.835,7.852-15.379,10.469 c-6.543,2.615-12.978,3.926-19.301,3.926c-12.653,0-22.74-3.813-30.266-11.451c-7.523-7.631-11.285-17.881-11.285-30.752 c0-15.92,5.505-29.773,16.521-41.551c11.011-11.778,24.373-17.668,40.077-17.668c15.052,0,25.405,4.367,31.083,13.088 c0.653-7.198,2.503-10.798,5.558-10.798h24.866c1.309,0,2.396,0.547,3.271,1.636C667.029,212.004,667.356,213.202,667.141,214.511z M725.05,166.09l-21.266,133.813c-0.441,4.147-2.732,6.216-6.871,6.216h-21.595c-1.307,0-2.402-0.491-3.27-1.472 c-0.874-0.981-1.312-2.013-1.312-3.108l0.328-0.654l21.267-136.099c0.433-2.4,1.849-3.6,4.254-3.6h24.208 c2.833,0,4.255,1.527,4.256,4.58V166.09z', __source: {
          fileName: _jsxFileName$a,
          lineNumber: 14
        },
        __self: _this$a
      }),
      React__default.createElement('path', { d: 'M509.774,195.044c-2.617-2.29-5.347-3.65-8.178-4.089c-2.84-0.435-6.657-0.653-11.454-0.653h-5.887 c-2.403,0-3.82,1.2-4.252,3.597l-5.563,35.007l10.47-0.327c9.596,0,16.793-1.635,21.593-4.906c4.796-3.274,7.197-9.488,7.197-18.65 C513.699,200.662,512.393,197.334,509.774,195.044z', __source: {
          fileName: _jsxFileName$a,
          lineNumber: 42
        },
        __self: _this$a
      }),
      React__default.createElement('path', { d: 'M137.465,194.064c-3.926-2.504-10.255-3.761-18.975-3.761h-6.219c-2.4,0-3.817,1.2-4.252,3.597 l-5.563,35.007l10.797-0.327c8.505,0,15.048-1.195,19.629-3.598c4.58-2.4,7.412-7.414,8.506-15.049 C142.698,201.865,141.389,196.574,137.465,194.064z', __source: {
          fileName: _jsxFileName$a,
          lineNumber: 45
        },
        __self: _this$a
      })
    );
  };

  Paypal.propTypes = {
    className: PropTypes.string
  };

  var _jsxFileName$b = '/Users/jrusso/Documents/ROA/mirage/src/core/icons/cards/Visa.base.js',
      _this$b = undefined;

  var Visa = function Visa(_ref) {
    var className = _ref.className;
    return React__default.createElement(
      BaseCardIcon,
      { className: className, box: '0 0 750 471', __source: {
          fileName: _jsxFileName$b,
          lineNumber: 7
        },
        __self: _this$b
      },
      React__default.createElement(
        'g',
        { fillRule: 'evenodd', __source: {
            fileName: _jsxFileName$b,
            lineNumber: 8
          },
          __self: _this$b
        },
        React__default.createElement('path', { d: 'M0,40.0047706 C0,17.9107459 17.9143492,0 39.9919369,0 L710.008063,0 C732.095,0 750,17.9064659 750,40.0047706 L750,430.995229 C750,453.089254 732.085651,471 710.008063,471 L39.9919369,471 C17.905,471 0,453.093534 0,430.995229 L0,40.0047706 Z M277.6505,333.6295 L311.0115,137.8675 L364.3705,137.8675 L330.9865,333.6295 L277.6505,333.6295 Z M524.5125,142.6875 C513.9405,138.7215 497.3765,134.4655 476.6895,134.4655 C423.9655,134.4655 386.8255,161.0165 386.5095,199.0695 C386.2125,227.1985 413.0235,242.8905 433.2635,252.2545 C454.0325,261.8495 461.0155,267.9695 460.9165,276.5375 C460.7845,289.6595 444.3305,295.6545 428.9935,295.6545 C407.6365,295.6545 396.2905,292.6875 378.7675,285.3785 L371.8915,282.2665 L364.4025,326.0905 C376.8655,331.5545 399.9115,336.2895 423.8405,336.5345 C479.9295,336.5345 516.3415,310.2875 516.7555,269.6525 C516.9565,247.3835 502.7405,230.4355 471.9565,216.4645 C453.3055,207.4085 441.8835,201.3655 442.0045,192.1955 C442.0045,184.0585 451.6725,175.3575 472.5615,175.3575 C490.0105,175.0865 502.6495,178.8915 512.4975,182.8575 L517.2795,185.1165 L524.5125,142.6875 Z M661.3395,138.0545 L620.1085,138.0545 C607.3355,138.0545 597.7775,141.5405 592.1675,154.2885 L512.9225,333.6915 L568.9535,333.6915 C568.9535,333.6915 578.1155,309.5695 580.1875,304.2735 C586.3105,304.2735 640.7415,304.3575 648.5235,304.3575 C650.1195,311.2105 655.0155,333.6915 655.0155,333.6915 L704.5275,333.6915 L661.3395,138.0545 Z M175.088482,244.366797 C175.089488,244.370031 175.090494,244.373266 175.0915,244.3765 L180.6575,271.5055 L232.8975,138.0105 L289.4185,138.0105 L205.4145,333.3955 L148.9595,333.4605 L101.520801,163.434171 C85.1184477,154.339743 66.4024534,147.029038 45.4725,141.9625 L46.1535,137.8895 L132.1945,137.8895 C143.7835,138.3215 153.1515,142.0205 156.3815,154.4165 L175.088482,244.366796 Z M595.5425,264.2325 C599.9555,252.9535 616.8015,209.5095 616.8015,209.5095 C616.4865,210.0305 621.1815,198.1755 623.8765,190.8255 L627.4835,207.7035 C627.4835,207.7035 637.7005,254.4325 639.8355,264.2315 L595.5425,264.2315 L595.5425,264.2325 Z', __source: {
            fileName: _jsxFileName$b,
            lineNumber: 9
          },
          __self: _this$b
        })
      )
    );
  };

  Visa.propTypes = {
    className: PropTypes.string
  };

  var _jsxFileName$c = '/Users/jrusso/Documents/ROA/mirage/src/core/icons/cards/CardIcon.js',
      _this$c = undefined;

  var _templateObject$6 = _taggedTemplateLiteral$6(['\n  fill: ', ';\n'], ['\n  fill: ', ';\n']);

  function _taggedTemplateLiteral$6(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var CardIconBase = function CardIconBase(_ref) {
    var brand = _ref.brand,
        className = _ref.className;

    var Child = null;
    switch (brand) {
      case 'amex':
        Child = Amex;
        break;
      case 'diners':
        Child = Diners;
        break;
      case 'discover':
        Child = Discover;
        break;
      case 'jcb':
        Child = JCB;
        break;
      case 'mastercard':
        Child = Mastercard;
        break;
      case 'maestro':
        Child = Maestro;
        break;
      case 'paypal':
        Child = Paypal;
        break;
      case 'visa':
        Child = Visa;
        break;
      default:
        Child = Default;
    }
    return React__default.createElement(Child, { className: className, __source: {
        fileName: _jsxFileName$c,
        lineNumber: 46
      },
      __self: _this$c
    });
  };

  var CardIcon = styled__default(CardIconBase)(_templateObject$6, function (props) {
    return props.theme.colors.navy;
  });

  CardIcon.propTypes = {
    brand: PropTypes.string.isRequired,
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        rocketBlue: PropTypes.string
      })
    })

    /** @component */
  };

  var _jsxFileName$d = '/Users/jrusso/Documents/ROA/mirage/src/core/icons/Chevron.js',
      _this$d = undefined;

  var _templateObject$7 = _taggedTemplateLiteral$7(['\n      0% {\n        transform: translateX(0px) ', ';\n      }\n      50% {\n        transform: translateX(', ') ', ';\n      }\n      100% {\n        transform: translateX(0px) ', ';\n      }\n    '], ['\n      0% {\n        transform: translateX(0px) ', ';\n      }\n      50% {\n        transform: translateX(', ') ', ';\n      }\n      100% {\n        transform: translateX(0px) ', ';\n      }\n    ']),
      _templateObject2$5 = _taggedTemplateLiteral$7(['\n      0% {\n        transform: translateY(0px) ', ';\n      }\n      50% {\n        transform: translateY(-.2rem) ', ';\n      }\n      100% {\n        transform: translateY(0px) ', ';\n      }\n    '], ['\n      0% {\n        transform: translateY(0px) ', ';\n      }\n      50% {\n        transform: translateY(-.2rem) ', ';\n      }\n      100% {\n        transform: translateY(0px) ', ';\n      }\n    ']),
      _templateObject3$4 = _taggedTemplateLiteral$7(['\n  ', ' 0.75s infinite\n'], ['\n  ', ' 0.75s infinite\n']),
      _templateObject4$1 = _taggedTemplateLiteral$7(['\n  width: 12px;\n  height: 8px;\n  fill:none;\n  stroke: ', ';\n  stroke-miterlimit:10;\n  stroke-width:5px;\n  ', '\n  cursor: pointer;\n  animation: ', ';\n'], ['\n  width: 12px;\n  height: 8px;\n  fill:none;\n  stroke: ', ';\n  stroke-miterlimit:10;\n  stroke-width:5px;\n  ', '\n  cursor: pointer;\n  animation: ', ';\n']);

  function _taggedTemplateLiteral$7(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var BaseChevron = function BaseChevron(_ref) {
    var className = _ref.className;

    return React__default.createElement(
      'svg',
      { className: className, viewBox: '0 0 48 24.12', __source: {
          fileName: _jsxFileName$d,
          lineNumber: 7
        },
        __self: _this$d
      },
      React__default.createElement('polyline', { points: '1 1 24 22.75 47 1', __source: {
          fileName: _jsxFileName$d,
          lineNumber: 8
        },
        __self: _this$d
      })
    );
  };

  var pulse = function pulse(props) {
    if (props.left || props.right) {
      return styled.keyframes(_templateObject$7, direction(props), pulseDirection(props), direction(props), direction(props));
    } else {
      return styled.keyframes(_templateObject2$5, direction(props), direction(props), direction(props));
    }
  };

  var pulseDirection = function pulseDirection(props) {
    if (props.right) {
      return '.2rem';
    } else if (props.left) {
      return '-.2rem';
    }
  };

  var animated = function animated(props) {
    return styled.css(_templateObject3$4, pulse(props));
  };

  var direction = function direction(props) {
    if (props.down) {
      return 'rotate(0deg)';
    } else if (props.left) {
      return 'rotate(-90deg)';
    } else if (props.right) {
      return 'rotate(90deg)';
    } else if (props.up) {
      return 'rotate(180deg)';
    }
  };

  var Chevron = styled__default(BaseChevron)(_templateObject4$1, function (props) {
    return props.theme.colors.rocketBlue;
  }, function (props) {
    return 'transform: ' + direction(props) + ';';
  }, function (props) {
    return props.animated ? animated : '';
  });

  var validateDirection = function validateDirection(props, propName, componentName) {
    var directions = ['down', 'left', 'right', 'up'];
    var propDirections = Object.keys(props).filter(function (key) {
      return directions.includes(key);
    });
    if (propDirections.length > 1) {
      return new Error('More than one direction prop was supplied to ' + componentName + ', only use one.');
    } else if (propDirections.length === 0) {
      return new Error('No direction prop was supplied to ' + componentName + ', please select one.');
    }
    return null;
  };

  Chevron.propTypes = {
    animated: PropTypes.bool,
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        rocketBlue: PropTypes.string.isRequired
      })
    }),
    validateDirection: validateDirection
  };

  Chevron.defaultProps = {};

  var _jsxFileName$e = '/Users/jrusso/Documents/ROA/mirage/src/core/icons/GuaranteeIcon.js',
      _this$e = undefined;

  var _templateObject$8 = _taggedTemplateLiteral$8(['\n  0% {\n    transform: rotate(0deg);\n  }\n  25% {\n    transform: rotate(90deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  75% {\n    transform: rotate(270deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n'], ['\n  0% {\n    transform: rotate(0deg);\n  }\n  25% {\n    transform: rotate(90deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  75% {\n    transform: rotate(270deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n']),
      _templateObject2$6 = _taggedTemplateLiteral$8(['\n  animation: ', ';\n  animation-duration: 25s;\n  animation-iteration-count: infinite;\n  transform-origin: 50% 50%;\n  animation-timing-function: linear;\n'], ['\n  animation: ', ';\n  animation-duration: 25s;\n  animation-iteration-count: infinite;\n  transform-origin: 50% 50%;\n  animation-timing-function: linear;\n']),
      _templateObject3$5 = _taggedTemplateLiteral$8(['\n  width: ', ';\n  circle {\n    fill: ', ';\n  }\n  path {\n    fill: ', ';\n    ', '\n  }\n  polyline {\n    stroke-linecap: round;\n    stroke-width: 2;\n    fill: none;\n    stroke: ', ';\n  }\n'], ['\n  width: ', ';\n  circle {\n    fill: ', ';\n  }\n  path {\n    fill: ', ';\n    ', '\n  }\n  polyline {\n    stroke-linecap: round;\n    stroke-width: 2;\n    fill: none;\n    stroke: ', ';\n  }\n']);

  function _taggedTemplateLiteral$8(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var UnstyledGuaranteeIcon = function UnstyledGuaranteeIcon(_ref) {
    var className = _ref.className;

    return React__default.createElement(
      'svg',
      { className: className, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 42 42', __source: {
          fileName: _jsxFileName$e,
          lineNumber: 7
        },
        __self: _this$e
      },
      React__default.createElement('path', { d: 'M21,2.555c1.389,0,4.005-1.869,5.347-1.509s2.673,3.286,3.876,3.981,4.4.384,5.385,1.366.672,4.182,1.366,5.385,3.621,2.534,3.981,3.876S39.445,19.611,39.445,21s1.809,3.99,1.509,5.347-3.286,2.673-3.981,3.876-.384,4.4-1.366,5.385-4.182.672-5.385,1.366-2.534,3.621-3.876,3.981S22.389,39.445,21,39.445s-4.005,1.869-5.347,1.509-2.673-3.286-3.876-3.981-4.4-.384-5.385-1.366-.672-4.182-1.366-5.385S1.345,27.7,1.046,26.347,2.555,22.389,2.555,21,.686,16.995,1.046,15.653s3.286-2.673,3.981-3.876.384-4.4,1.366-5.385,4.182-.672,5.385-1.366,2.534-3.621,3.876-3.981S19.611,2.555,21,2.555Z', __source: {
          fileName: _jsxFileName$e,
          lineNumber: 8
        },
        __self: _this$e
      }),
      React__default.createElement('circle', { cx: '21', cy: '21', r: '14.7', __source: {
          fileName: _jsxFileName$e,
          lineNumber: 9
        },
        __self: _this$e
      }),
      React__default.createElement('polyline', { points: '14.629 21.734 18.691 25.483 26.345 17.203', __source: {
          fileName: _jsxFileName$e,
          lineNumber: 10
        },
        __self: _this$e
      })
    );
  };

  var rotate = styled.keyframes(_templateObject$8);

  var animation$1 = styled.css(_templateObject2$6, rotate);

  var GuaranteeIcon = styled__default(UnstyledGuaranteeIcon)(_templateObject3$5, function (props) {
    return props.width;
  }, function (props) {
    return props.theme.colors.white;
  }, function (props) {
    return props.theme.colors.rocketBlue;
  }, function (props) {
    return props.animated && animation$1;
  }, function (props) {
    return props.theme.colors.rocketBlue;
  });

  GuaranteeIcon.propTypes = {
    width: PropTypes.string.isRequired
  };

  GuaranteeIcon.defaultProps = {
    width: '2.5rem'

    /** @component */
  };

  var _jsxFileName$f = '/Users/jrusso/Documents/ROA/mirage/src/core/icons/MailboxIcon.js',
      _this$f = undefined;

  var _templateObject$9 = _taggedTemplateLiteral$9(['\n  0% {\n    transform: rotate(0deg);\n  }\n  26% {\n    transform: rotate(0deg);\n  }\n  30% {\n    transform: rotate(90deg);\n  }\n  33% {\n    transform: rotate(100deg);\n  }\n  36% {\n    transform: rotate(80deg);\n  }\n  37% {\n    transform: rotate(95deg);\n  }\n  39% {\n    transform: rotate(85deg);\n  }\n  40% {\n    transform: rotate(90deg);\n  }\n  70% {\n    transform: rotate(90deg);\n  }\n  90% {\n    transform: rotate(90deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n'], ['\n  0% {\n    transform: rotate(0deg);\n  }\n  26% {\n    transform: rotate(0deg);\n  }\n  30% {\n    transform: rotate(90deg);\n  }\n  33% {\n    transform: rotate(100deg);\n  }\n  36% {\n    transform: rotate(80deg);\n  }\n  37% {\n    transform: rotate(95deg);\n  }\n  39% {\n    transform: rotate(85deg);\n  }\n  40% {\n    transform: rotate(90deg);\n  }\n  70% {\n    transform: rotate(90deg);\n  }\n  90% {\n    transform: rotate(90deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n']),
      _templateObject2$7 = _taggedTemplateLiteral$9(['\n  animation: ', ';\n  animation-duration: 5s;\n  animation-timing-function: ease-in-out;\n  animation-iteration-count: infinite;\n'], ['\n  animation: ', ';\n  animation-duration: 5s;\n  animation-timing-function: ease-in-out;\n  animation-iteration-count: infinite;\n']),
      _templateObject3$6 = _taggedTemplateLiteral$9(['\n  width: ', ';\n\n  .line, .flag circle, .flag .flag-portion, .body {\n    fill: none;\n    stroke: ', ';\n    stroke-miterlimit: 10;\n  }\n\n  .face, .iris, .outterCircle {\n    fill: ', ';\n  }\n\n  .flag {\n    transform: rotate(90deg);\n    transform-origin: 51.775% 57.726%;\n    ', '\n  }\n'], ['\n  width: ', ';\n\n  .line, .flag circle, .flag .flag-portion, .body {\n    fill: none;\n    stroke: ', ';\n    stroke-miterlimit: 10;\n  }\n\n  .face, .iris, .outterCircle {\n    fill: ', ';\n  }\n\n  .flag {\n    transform: rotate(90deg);\n    transform-origin: 51.775% 57.726%;\n    ', '\n  }\n']);

  function _taggedTemplateLiteral$9(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var UnstyledMailbox = function UnstyledMailbox(_ref) {
    var className = _ref.className;

    return React__default.createElement(
      'svg',
      { className: className, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 148 148', __source: {
          fileName: _jsxFileName$f,
          lineNumber: 7
        },
        __self: _this$f
      },
      React__default.createElement(
        'g',
        { className: 'mailbox', __source: {
            fileName: _jsxFileName$f,
            lineNumber: 8
          },
          __self: _this$f
        },
        React__default.createElement('path', { className: 'body', d: 'M64.15,54.44c1.5-.69,45.25,2.25,60.25,3.18,23,3.76,22.31,29.88,22.31,29.88v22.31l-83.63.69-17.37,1,.5-38.12C46.4,70.44,48.52,54.81,64.15,54.44Z', __source: {
            fileName: _jsxFileName$f,
            lineNumber: 9
          },
          __self: _this$f
        }),
        React__default.createElement('line', { className: 'line', x1: '83.21', y1: '148', x2: '84.08', y2: '110.33', __source: {
            fileName: _jsxFileName$f,
            lineNumber: 10
          },
          __self: _this$f
        }),
        React__default.createElement('line', { className: 'line', x1: '89.9', y1: '148', x2: '90.46', y2: '110.33', __source: {
            fileName: _jsxFileName$f,
            lineNumber: 11
          },
          __self: _this$f
        }),
        React__default.createElement('line', { className: 'line', x1: '109.71', y1: '148', x2: '111.89', y2: '110.1', __source: {
            fileName: _jsxFileName$f,
            lineNumber: 12
          },
          __self: _this$f
        }),
        React__default.createElement('path', { className: 'face', d: 'M123.81,57.5c-9.27,0-20.75,14.33-20.75,28.94v23.89l43.65-.52s-.58-14.56,0-23.48C147.9,68,133.09,57.5,123.81,57.5Zm-8.33,22.08c0-3.26,2-6.41,4.25-6.41S124,76.32,124,79.58s-2.29,5.92-4.5,5.92S115.48,82.85,115.48,79.58Zm9.86,23.23c-5.61.16-6.24-5.51-6.48-10.9l2.44-.13s0,7.72,3.76,8c4.94.44,4.34-8,4.34-8l1.78.22C131.87,94.81,132,102.62,125.34,102.81Zm7.18-17.64c-2.05,0-4.71-2.52-4.71-5.84s2.66-6.16,4.71-6.16,4.38,2.85,4.38,6.16S134.57,85.17,132.52,85.17Z', __source: {
            fileName: _jsxFileName$f,
            lineNumber: 13
          },
          __self: _this$f
        }),
        React__default.createElement('circle', { className: 'iris002', cx: '118.33', cy: '80.44', r: '1.19', __source: {
            fileName: _jsxFileName$f,
            lineNumber: 14
          },
          __self: _this$f
        }),
        React__default.createElement('circle', { className: 'iris003', cx: '130.46', cy: '79.88', r: '1.31', __source: {
            fileName: _jsxFileName$f,
            lineNumber: 15
          },
          __self: _this$f
        })
      ),
      React__default.createElement(
        'g',
        { className: 'flag', __source: {
            fileName: _jsxFileName$f,
            lineNumber: 17
          },
          __self: _this$f
        },
        React__default.createElement('path', { className: 'outterCircle', d: 'M75.57,76.42a7.39,7.39,0,0,0-5.82,1.81A9.33,9.33,0,0,0,67.07,83h1a8.52,8.52,0,0,1,2.32-4,6.15,6.15,0,0,1,4.25-1.59,7.26,7.26,0,0,1,.8,0c3.36.33,9,2.39,9,8,0,3.64-4.86,8.12-8.81,8.12A8.17,8.17,0,0,1,68,87.23H67a9.2,9.2,0,0,0,8.76,7.33c4.49,0,9.81-4.94,9.81-9.12C85.52,79.88,80.52,76.91,75.57,76.42Z', __source: {
            fileName: _jsxFileName$f,
            lineNumber: 18
          },
          __self: _this$f
        }),
        React__default.createElement('circle', { cx: '76.63', cy: '85.43', r: '3.67', __source: {
            fileName: _jsxFileName$f,
            lineNumber: 19
          },
          __self: _this$f
        }),
        React__default.createElement('polyline', { className: 'flag-portion', points: '73.83 83.05 7.69 82.21 7.69 105.03 23.93 105.54 24.02 86.54 67.27 87.22 73.47 87.31', __source: {
            fileName: _jsxFileName$f,
            lineNumber: 20
          },
          __self: _this$f
        })
      )
    );
  };

  var animateFlag = styled.keyframes(_templateObject$9);

  var animated$1 = styled.css(_templateObject2$7, animateFlag);

  var MailboxIcon = styled__default(UnstyledMailbox)(_templateObject3$6, function (props) {
    return props.width;
  }, function (props) {
    return props.theme.colors.rocketBlue;
  }, function (props) {
    return props.theme.colors.rocketBlue;
  }, function (props) {
    return props.animate && animated$1;
  });

  MailboxIcon.propTypes = {
    animated: PropTypes.bool,
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        rocketBlue: PropTypes.string,
        white: PropTypes.string
      })
    }),
    width: PropTypes.string
  };

  MailboxIcon.defaultProps = {
    width: '7rem'

    /** @component */
  };

  var _jsxFileName$g = '/Users/jrusso/Documents/ROA/mirage/src/core/icons/Ruler.js',
      _this$g = undefined;

  var _templateObject$a = _taggedTemplateLiteral$a(['\n  width: ', ';\n  > path {\n    fill: ', ';\n  }\n  > line, circle {\n    fill: none;\n    stroke-linecap: round;\n    stroke: ', ';\n  }\n'], ['\n  width: ', ';\n  > path {\n    fill: ', ';\n  }\n  > line, circle {\n    fill: none;\n    stroke-linecap: round;\n    stroke: ', ';\n  }\n']);

  function _taggedTemplateLiteral$a(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var BaseRuler = function BaseRuler(props) {
    return React__default.createElement(
      'svg',
      Object.assign({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 27 12' }, props, {
        __source: {
          fileName: _jsxFileName$g,
          lineNumber: 7
        },
        __self: _this$g
      }),
      React__default.createElement('path', { d: 'M26,1V11H1V1H26m.5-1H.5A.5.5,0,0,0,0,.5v11a.5.5,0,0,0, .5.5h26a.5.5,0,0,0,.5-.5V.5a.51.51,0,0,0-.5-.5Z', __source: {
          fileName: _jsxFileName$g,
          lineNumber: 8
        },
        __self: _this$g
      }),
      React__default.createElement('circle', { cx: '4', cy: '7.9', r: '1.25', __source: {
          fileName: _jsxFileName$g,
          lineNumber: 10
        },
        __self: _this$g
      }),
      React__default.createElement('line', { x1: '4', y1: '0.5', x2: '4', y2: '3.5', __source: {
          fileName: _jsxFileName$g,
          lineNumber: 11
        },
        __self: _this$g
      }),
      React__default.createElement('line', { x1: '8', y1: '0.5', x2: '8', y2: '3.5', __source: {
          fileName: _jsxFileName$g,
          lineNumber: 12
        },
        __self: _this$g
      }),
      React__default.createElement('line', { x1: '12', y1: '0.5', x2: '12', y2: '3.5', __source: {
          fileName: _jsxFileName$g,
          lineNumber: 13
        },
        __self: _this$g
      }),
      React__default.createElement('line', { x1: '16', y1: '0.5', x2: '16', y2: '3.5', __source: {
          fileName: _jsxFileName$g,
          lineNumber: 14
        },
        __self: _this$g
      }),
      React__default.createElement('line', { x1: '20', y1: '0.5', x2: '20', y2: '3.5', __source: {
          fileName: _jsxFileName$g,
          lineNumber: 15
        },
        __self: _this$g
      }),
      React__default.createElement('line', { x1: '24', y1: '0.5', x2: '24', y2: '3.5', __source: {
          fileName: _jsxFileName$g,
          lineNumber: 16
        },
        __self: _this$g
      })
    );
  };

  var Ruler = styled__default(BaseRuler)(_templateObject$a, function (props) {
    return props.width;
  }, function (props) {
    return props.theme.colors.navy;
  }, function (props) {
    return props.theme.colors.navy;
  });

  Ruler.propTypes = {
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        navy: PropTypes.string
      })
    }),
    width: PropTypes.string
  };

  Ruler.defaultProps = {
    width: '27px'
    /** @component */
  };

  var _jsxFileName$h = '/Users/jrusso/Documents/ROA/mirage/src/core/icons/XIcon.js',
      _this$h = undefined;

  var _templateObject$b = _taggedTemplateLiteral$b(['\n  width: ', ';\n  line {\n    stroke-width: 1.5;\n    fill: none;\n    stroke: ', ';\n  }\n'], ['\n  width: ', ';\n  line {\n    stroke-width: 1.5;\n    fill: none;\n    stroke: ', ';\n  }\n']);

  function _taggedTemplateLiteral$b(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var BaseXIcon = function BaseXIcon(_ref) {
    var className = _ref.className;

    return React__default.createElement(
      'svg',
      { className: className, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 15 15', __source: {
          fileName: _jsxFileName$h,
          lineNumber: 7
        },
        __self: _this$h
      },
      React__default.createElement('line', { x1: '0', y1: '0', x2: '15', y2: '15', __source: {
          fileName: _jsxFileName$h,
          lineNumber: 8
        },
        __self: _this$h
      }),
      React__default.createElement('line', { x1: '0', y1: '15', x2: '15', y2: '0', __source: {
          fileName: _jsxFileName$h,
          lineNumber: 9
        },
        __self: _this$h
      })
    );
  };

  var XIcon = styled__default(BaseXIcon)(_templateObject$b, function (props) {
    return props.width;
  }, function (props) {
    return props.theme.colors.rocketBlue;
  });

  XIcon.propTypes = {
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        rocketBlue: PropTypes.string
      })
    }),
    width: PropTypes.string
  };

  XIcon.defaultProps = {
    width: '10px'

    /** @component */
  };

  var _jsxFileName$i = '/Users/jrusso/Documents/ROA/mirage/src/core/icons/AIcon/AIcon.base.js',
      _this$i = undefined;

  var _templateObject$c = _taggedTemplateLiteral$c(['\n  width: ', ';\n'], ['\n  width: ', ';\n']);

  function _taggedTemplateLiteral$c(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var AIcon = function AIcon(props) {
    return React__default.createElement(
      'svg',
      Object.assign({ viewBox: '0 0 80 80' }, props, {
        __source: {
          fileName: _jsxFileName$i,
          lineNumber: 7
        },
        __self: _this$i
      }),
      React__default.createElement('path', { d: 'M57.5,64.6V40.1c0-9.4,0.1-14.8-4.7-19.5c-7.2-7-18.5-7-25.6,0c-4.8,4.8-4.8,10.2-4.8,19.5v24.5h7.4V50.3h20.2 v14.4H57.5z M29.9,43.6V40c0-9.8,0.5-12.5,2.8-15.1c3.9-4,10.5-4,14.5,0l0,0C49.6,27.6,50,30.3,50,40v3.5H29.9z', __source: {
          fileName: _jsxFileName$i,
          lineNumber: 8
        },
        __self: _this$i
      })
    );
  };

  var BaseAIcon = styled__default(AIcon)(_templateObject$c, function (props) {
    return props.width;
  });

  BaseAIcon.propTypes = {
    width: PropTypes.string.isRequired
  };

  BaseAIcon.defaultProps = {
    width: '9.2rem'

    /** @component */
  };

  var _templateObject$d = _taggedTemplateLiteral$d(['\n  fill: ', ';\n'], ['\n  fill: ', ';\n']);

  function _taggedTemplateLiteral$d(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var AIcon$1 = styled__default(BaseAIcon)(_templateObject$d, function (props) {
    return props.theme.colors.rocketBlue;
  });

  AIcon$1.propTypes = {
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        rocketBlue: PropTypes.string
      })
    })

    /** @component */
  };

  var _templateObject$e = _taggedTemplateLiteral$e(['\n  fill: ', ';\n'], ['\n  fill: ', ';\n']);

  function _taggedTemplateLiteral$e(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var GrayAIcon = styled__default(BaseAIcon)(_templateObject$e, function (props) {
    return props.theme.colors.gray[3];
  });

  GrayAIcon.propTypes = {
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        gray: PropTypes.array
      })
    })

    /** @component */
  };

  var _templateObject$f = _taggedTemplateLiteral$f(['\n  fill: ', ';\n'], ['\n  fill: ', ';\n']);

  function _taggedTemplateLiteral$f(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var NavyAIcon = styled__default(BaseAIcon)(_templateObject$f, function (props) {
    return props.theme.colors.navy;
  });

  NavyAIcon.propTypes = {
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        navy: PropTypes.string
      })
    })

    /** @component */
  };

  var _templateObject$g = _taggedTemplateLiteral$g(['\n  fill: ', ';\n'], ['\n  fill: ', ';\n']);

  function _taggedTemplateLiteral$g(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var WhiteAIcon = styled__default(BaseAIcon)(_templateObject$g, function (props) {
    return props.theme.colors.white;
  });

  WhiteAIcon.propTypes = {
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        white: PropTypes.string
      })
    })

    /** @component */
  };

  var _jsxFileName$j = '/Users/jrusso/Documents/ROA/mirage/src/core/icons/Checkmark/Checkmark.base.js',
      _this$j = undefined;

  var _templateObject$h = _taggedTemplateLiteral$h(['\n    0% {\n      width: 0;\n      stroke-dashoffset: 15;\n      stroke: transparent;\n    }\n    50% {\n      width: ', ';\n      stroke-dashoffset: 15;\n      stroke: ', ';\n    }\n    100% {\n      width: ', ';\n      transform: scaleX(1);\n      stroke-dashoffset: 0;\n    }\n  '], ['\n    0% {\n      width: 0;\n      stroke-dashoffset: 15;\n      stroke: transparent;\n    }\n    50% {\n      width: ', ';\n      stroke-dashoffset: 15;\n      stroke: ', ';\n    }\n    100% {\n      width: ', ';\n      transform: scaleX(1);\n      stroke-dashoffset: 0;\n    }\n  ']),
      _templateObject2$8 = _taggedTemplateLiteral$h(['\n  width: ', ';\n  fill: none;\n  stroke-width: 2;\n  > polyline {\n    stroke-linecap: round;\n    stroke-dasharray: 16;\n    stroke-dashoffset: 0;\n    animation-name: ', ';\n    animation-duration: 0.5s\n  }\n'], ['\n  width: ', ';\n  fill: none;\n  stroke-width: 2;\n  > polyline {\n    stroke-linecap: round;\n    stroke-dasharray: 16;\n    stroke-dashoffset: 0;\n    animation-name: ', ';\n    animation-duration: 0.5s\n  }\n']);

  function _taggedTemplateLiteral$h(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var UnstyledCheckmark = function UnstyledCheckmark(props) {
    return React__default.createElement(
      'svg',
      Object.assign({}, props, { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 26.5 26.5', __source: {
          fileName: _jsxFileName$j,
          lineNumber: 7
        },
        __self: _this$j
      }),
      React__default.createElement('polyline', { points: '7,14 11,17.7 18.6,9.5', __source: {
          fileName: _jsxFileName$j,
          lineNumber: 8
        },
        __self: _this$j
      })
    );
  };

  var animateCheckmarkIn = function animateCheckmarkIn(props) {
    return styled.keyframes(_templateObject$h, props.width, props.stroke, props.width);
  };

  var Checkmark = styled__default(UnstyledCheckmark)(_templateObject2$8, function (props) {
    return props.width;
  }, function (props) {
    return animateCheckmarkIn;
  });

  Checkmark.propTypes = {
    stroke: PropTypes.string,
    width: PropTypes.string
  };

  Checkmark.defaultProps = {
    width: '2.6rem'

    /** @component */
  };

  var _templateObject$i = _taggedTemplateLiteral$i(['\n  stroke: ', '\n'], ['\n  stroke: ', '\n']);

  function _taggedTemplateLiteral$i(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var BlueCheckmark = styled__default(Checkmark)(_templateObject$i, function (props) {
    return props.theme.colors.rocketBlue;
  });

  BlueCheckmark.propTypes = {
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        rocketBlue: PropTypes.string
      })
    })

    /** @component */
  };

  var _templateObject$j = _taggedTemplateLiteral$j(['\n  stroke: ', '\n'], ['\n  stroke: ', '\n']);

  function _taggedTemplateLiteral$j(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var GrayCheckmark = styled__default(Checkmark)(_templateObject$j, function (props) {
    return props.theme.colors.loading;
  });

  GrayCheckmark.propTypes = {
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        loading: PropTypes.string
      })
    })

    /** @component */
  };

  var _templateObject$k = _taggedTemplateLiteral$k(['\n  stroke: ', '\n'], ['\n  stroke: ', '\n']);

  function _taggedTemplateLiteral$k(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var NavyCheckmark = styled__default(Checkmark)(_templateObject$k, function (props) {
    return props.theme.colors.navy;
  });

  NavyCheckmark.propTypes = {
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        navy: PropTypes.string
      })
    })

    /** @component */
  };

  var _templateObject$l = _taggedTemplateLiteral$l(['\n  stroke: ', '\n'], ['\n  stroke: ', '\n']);

  function _taggedTemplateLiteral$l(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var WhiteCheckmark = styled__default(Checkmark)(_templateObject$l, function (props) {
    return props.theme.colors.white;
  });

  WhiteCheckmark.propTypes = {
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        white: PropTypes.string
      })
    })

    /** @component */
  };

  var _jsxFileName$k = '/Users/jrusso/Documents/ROA/mirage/src/core/icons/CircleChevron/CircleChevron.base.js',
      _this$k = undefined;

  var _templateObject$m = _taggedTemplateLiteral$m(['\n  width: ', ';\n  polyline {\n    stroke-linecap: round;\n    fill: none;\n  }\n'], ['\n  width: ', ';\n  polyline {\n    stroke-linecap: round;\n    fill: none;\n  }\n']);

  function _taggedTemplateLiteral$m(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var CircleChev = function CircleChev(_ref) {
    var className = _ref.className,
        left = _ref.left,
        right = _ref.right;

    return React__default.createElement(
      'svg',
      { className: className, viewBox: '0 0 60 60', __source: {
          fileName: _jsxFileName$k,
          lineNumber: 7
        },
        __self: _this$k
      },
      React__default.createElement('ellipse', { cx: '30', cy: '30', rx: '30', ry: '30', __source: {
          fileName: _jsxFileName$k,
          lineNumber: 8
        },
        __self: _this$k
      }),
      right && React__default.createElement('polyline', { className: 'right', points: '23.5,16.8 36.5,30 23.5,43.2', __source: {
          fileName: _jsxFileName$k,
          lineNumber: 9
        },
        __self: _this$k
      }),
      left && React__default.createElement('polyline', { className: 'left', points: '36.5,43.2 23.5,30 36.5,16.8', __source: {
          fileName: _jsxFileName$k,
          lineNumber: 10
        },
        __self: _this$k
      })
    );
  };

  var BaseChevron$1 = styled__default(CircleChev)(_templateObject$m, function (props) {
    return props.width;
  });

  var validateDirection$1 = function validateDirection(props, propName, componentName) {
    if (!props.left && !props.right) {
      return new Error('Either the left or right prop must be supplied to ' + componentName + '.');
    } else if (props.left && props.right) {
      return new Error('Both the left and right prop were supplied to ' + componentName + ', only select one.');
    }
    return null;
  };

  CircleChev.propTypes = {
    className: PropTypes.string,
    left: validateDirection$1,
    right: validateDirection$1,
    width: PropTypes.string
  };

  CircleChev.defaultProps = {
    width: '4rem'

    /** @component */
  };

  var _templateObject$n = _taggedTemplateLiteral$n(['\n  ellipse {\n    fill: ', ';\n  }\n  polyline {\n    stroke: ', ';\n    stroke-width: 4;\n  }\n'], ['\n  ellipse {\n    fill: ', ';\n  }\n  polyline {\n    stroke: ', ';\n    stroke-width: 4;\n  }\n']);

  function _taggedTemplateLiteral$n(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var CircleChevron = styled__default(BaseChevron$1)(_templateObject$n, function (props) {
    return props.theme.colors.lightBlue[2];
  }, function (props) {
    return props.theme.colors.white;
  });

  CircleChevron.propTypes = {
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        lightBlue: PropTypes.array,
        white: PropTypes.string
      })
    }),
    width: PropTypes.string
  };

  CircleChevron.defaultProps = {
    width: '6rem'

    /** @component */
  };

  var _templateObject$o = _taggedTemplateLiteral$o(['\n  ellipse {\n    fill: ', ';\n  }\n  polyline {\n    stroke: ', ';\n    stroke-width: 3;\n  }\n'], ['\n  ellipse {\n    fill: ', ';\n  }\n  polyline {\n    stroke: ', ';\n    stroke-width: 3;\n  }\n']);

  function _taggedTemplateLiteral$o(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var YellowCircleChevron = styled__default(BaseChevron$1)(_templateObject$o, function (props) {
    return props.theme.colors.yellow;
  }, function (props) {
    return props.theme.colors.rocketBlue;
  });

  YellowCircleChevron.propTypes = {
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        rocketBlue: PropTypes.array,
        yellow: PropTypes.string
      })
    }),
    width: PropTypes.string
  };

  YellowCircleChevron.defaultProps = {
    width: '6rem'

    /** @component */
  };

  var _jsxFileName$l = '/Users/jrusso/Documents/ROA/mirage/src/core/icons/Hamburger/Hamburger.base.js',
      _this$l = undefined;

  var _templateObject$p = _taggedTemplateLiteral$p(['\n  0% {\n    stroke-dashoffset: 0;\n  }\n  100% {\n    stroke-dashoffset: -322;\n  }\n'], ['\n  0% {\n    stroke-dashoffset: 0;\n  }\n  100% {\n    stroke-dashoffset: -322;\n  }\n']),
      _templateObject2$9 = _taggedTemplateLiteral$p(['\n  0% {\n    stroke-dashoffset: -322;\n  }\n  100% {\n    stroke-dashoffset: 0;\n  }\n'], ['\n  0% {\n    stroke-dashoffset: -322;\n  }\n  100% {\n    stroke-dashoffset: 0;\n  }\n']),
      _templateObject3$7 = _taggedTemplateLiteral$p(['\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n'], ['\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n']),
      _templateObject4$2 = _taggedTemplateLiteral$p(['\n  100% {\n    opacity: 1;\n  }\n  0% {\n    opacity: 0;\n  }\n'], ['\n  100% {\n    opacity: 1;\n  }\n  0% {\n    opacity: 0;\n  }\n']),
      _templateObject5$1 = _taggedTemplateLiteral$p(['\n  33.3333333333%, 66.6666666666% {\n    opacity: 0;\n  }\n  0%, 100% {\n    opacity: 1;\n  }\n'], ['\n  33.3333333333%, 66.6666666666% {\n    opacity: 0;\n  }\n  0%, 100% {\n    opacity: 1;\n  }\n']),
      _templateObject6$1 = _taggedTemplateLiteral$p(['\n  0%, 100% {\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dashoffset: -322;\n  }\n'], ['\n  0%, 100% {\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dashoffset: -322;\n  }\n']),
      _templateObject7 = _taggedTemplateLiteral$p(['\n  .line {\n    stroke-dashoffset: 0;\n  }\n  .hamburger-outerline {\n    animation: ', ' 2s ease-in-out infinite;\n  }\n  .hamburger-innerline {\n    animation: ', ' 2s ease-in-out infinite;\n  }\n'], ['\n  .line {\n    stroke-dashoffset: 0;\n  }\n  .hamburger-outerline {\n    animation: ', ' 2s ease-in-out infinite;\n  }\n  .hamburger-innerline {\n    animation: ', ' 2s ease-in-out infinite;\n  }\n']),
      _templateObject8 = _taggedTemplateLiteral$p(['\n  .line {\n    stroke-dashoffset: 0;\n  }\n  .hamburger-outerline {\n    animation: ', ' 1s ease-in-out;\n  }\n  .hamburger-innerline {\n    animation: ', ' 1s ease-in-out;\n  }\n'], ['\n  .line {\n    stroke-dashoffset: 0;\n  }\n  .hamburger-outerline {\n    animation: ', ' 1s ease-in-out;\n  }\n  .hamburger-innerline {\n    animation: ', ' 1s ease-in-out;\n  }\n']),
      _templateObject9 = _taggedTemplateLiteral$p(['\n  .hamburger-outerline {\n    animation: ', ' 1s ease-in-out;\n    stroke-dashoffset: -322;\n  }\n  .hamburger-innerline {\n    animation: ', ' 1s ease-in-out;\n    stroke-dashoffset: 125;\n  }\n'], ['\n  .hamburger-outerline {\n    animation: ', ' 1s ease-in-out;\n    stroke-dashoffset: -322;\n  }\n  .hamburger-innerline {\n    animation: ', ' 1s ease-in-out;\n    stroke-dashoffset: 125;\n  }\n']),
      _templateObject10 = _taggedTemplateLiteral$p(['\n  width: 4.8rem;\n  height: 4.8rem;\n  max-width: 100%;\n  max-height: 100%;\n  cursor: pointer;\n\n.line {\n  fill:none;\n  stroke-linecap:round;\n  stroke-miterlimit:10;\n  stroke-width: 8;\n}\n\n//Closed\n', '\n\n//Open\n', '\n\n//Animated\n', '\n\n\n.hamburger-innerline {\n  stroke-dasharray:125;\n}\n.hamburger-outerline {\n  stroke-dasharray:100 322;\n}\n'], ['\n  width: 4.8rem;\n  height: 4.8rem;\n  max-width: 100%;\n  max-height: 100%;\n  cursor: pointer;\n\n.line {\n  fill:none;\n  stroke-linecap:round;\n  stroke-miterlimit:10;\n  stroke-width: 8;\n}\n\n//Closed\n', '\n\n//Open\n', '\n\n//Animated\n', '\n\n\n.hamburger-innerline {\n  stroke-dasharray:125;\n}\n.hamburger-outerline {\n  stroke-dasharray:100 322;\n}\n']);

  function _taggedTemplateLiteral$p(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var topPoints = 'M2,74.21H102c51.54,1.7,72.86-35.69,59.31-58.6S93.4-3.52,\n89.36,69.35L18.64,140.06';
  var bottomPoints = 'M2,138.79H102c51.54-1.7,72.86,35.69,59.31,58.6s-67.91,\n19.13-72-53.74L18.64,72.94';

  var UnstyledHamburger = function UnstyledHamburger(_ref) {
    var className = _ref.className;

    return React__default.createElement(
      'svg',
      {
        className: className,
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 167.29 210.66', __source: {
          fileName: _jsxFileName$l,
          lineNumber: 12
        },
        __self: _this$l
      },
      React__default.createElement('path', {
        className: 'line hamburger-outerline',
        d: topPoints, __source: {
          fileName: _jsxFileName$l,
          lineNumber: 16
        },
        __self: _this$l
      }),
      React__default.createElement('line', {
        className: 'line hamburger-innerline',
        x1: '2',
        y1: '105.54',
        x2: '102',
        y2: '105.54', __source: {
          fileName: _jsxFileName$l,
          lineNumber: 19
        },
        __self: _this$l
      }),
      React__default.createElement('path', {
        className: 'line hamburger-outerline',
        d: bottomPoints, __source: {
          fileName: _jsxFileName$l,
          lineNumber: 25
        },
        __self: _this$l
      })
    );
  };

  var animateToX = styled.keyframes(_templateObject$p);

  var animateFromX = styled.keyframes(_templateObject2$9);

  var removeCenterLine = styled.keyframes(_templateObject3$7);

  var addCenterLine = styled.keyframes(_templateObject4$2);

  var animateCenterLine = styled.keyframes(_templateObject5$1);

  var animateX = styled.keyframes(_templateObject6$1);

  var animated$2 = styled.css(_templateObject7, animateX, animateCenterLine);

  var closed = styled.css(_templateObject8, animateFromX, addCenterLine);

  var open = styled.css(_templateObject9, animateToX, removeCenterLine);

  var BaseHamburger = styled__default(UnstyledHamburger)(_templateObject10, function (props) {
    return !props.open && props.open !== undefined && closed;
  }, function (props) {
    return props.open && open;
  }, function (props) {
    return props.animated && animated$2;
  });

  BaseHamburger.propTypes = {
    animated: PropTypes.bool,
    open: PropTypes.bool,
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        navy: PropTypes.string,
        rocketBlue: PropTypes.string,
        white: PropTypes.string
      })
    })

    /** @component */
  };

  var _templateObject$q = _taggedTemplateLiteral$q(['\n  stroke: ', ';\n'], ['\n  stroke: ', ';\n']);

  function _taggedTemplateLiteral$q(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var BlueHamburger = styled__default(BaseHamburger)(_templateObject$q, function (props) {
    return props.theme.colors.rocketBlue;
  });

  BlueHamburger.propTypes = {
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        white: PropTypes.string
      })
    })

    /** @component */
  };

  var _templateObject$r = _taggedTemplateLiteral$r(['\n  stroke: ', ';\n'], ['\n  stroke: ', ';\n']);

  function _taggedTemplateLiteral$r(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var GrayHamburger = styled__default(BaseHamburger)(_templateObject$r, function (props) {
    return props.theme.colors.loading;
  });

  GrayHamburger.propTypes = {
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        white: PropTypes.string
      })
    })

    /** @component */
  };

  var _templateObject$s = _taggedTemplateLiteral$s(['\n  stroke: ', ';\n'], ['\n  stroke: ', ';\n']);

  function _taggedTemplateLiteral$s(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var Hamburger = styled__default(BaseHamburger)(_templateObject$s, function (props) {
    return props.theme.colors.white;
  });

  Hamburger.propTypes = {
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        white: PropTypes.string
      })
    })

    /** @component */
  };

  var _templateObject$t = _taggedTemplateLiteral$t(['\n  stroke: ', ';\n'], ['\n  stroke: ', ';\n']);

  function _taggedTemplateLiteral$t(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var NavyHamburger = styled__default(BaseHamburger)(_templateObject$t, function (props) {
    return props.theme.colors.navy;
  });

  NavyHamburger.propTypes = {
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        white: PropTypes.string
      })
    })

    /** @component */
  };

  var _jsxFileName$m = '/Users/jrusso/Documents/ROA/mirage/src/core/icons/Logo/Logo.base.js',
      _this$m = undefined;

  var _templateObject$u = _taggedTemplateLiteral$u(['\n  0% {\n    transform: translateY(0px);\n  }\n  25% {\n    transform: translateY(-10px);\n  }\n  50% {\n    transform: translateY(0px);\n  }\n  75% {\n    transform: translateY(10px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n'], ['\n  0% {\n    transform: translateY(0px);\n  }\n  25% {\n    transform: translateY(-10px);\n  }\n  50% {\n    transform: translateY(0px);\n  }\n  75% {\n    transform: translateY(10px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n']),
      _templateObject2$a = _taggedTemplateLiteral$u(['\n  > * {\n    animation-name: ', ';\n    animation-duration: 3s;\n    animation-iteration-count: infinite;\n    transform-origin: center;\n    &:nth-child(1) {\n      animation-delay: -2.8125s;\n    }\n    &:nth-child(2) {\n      animation-delay: -2.625s;\n    }\n    &:nth-child(3) {\n      animation-delay: -2.4375s;\n    }\n    &:nth-child(4) {\n      animation-delay: -2.25s;\n    }\n    &:nth-child(5) {\n      animation-delay: -2.0625s;\n    }\n    &:nth-child(6) {\n      animation-delay: -1.875s;\n    }\n    &:nth-child(7) {\n      animation-delay: -1.6875s;\n    }\n    &:nth-child(8) {\n      animation-delay: -1.5s;\n    }\n    &:nth-child(9) {\n      animation-delay: -1.3125s;\n    }\n    &:nth-child(10) {\n      animation-delay: -1.125s;\n    }\n    &:nth-child(11) {\n      animation-delay: -0.9375s;\n    }\n    &:nth-child(12) {\n      animation-delay: -0.75s;\n    }\n    &:nth-child(13) {\n      animation-delay: -0.5625s;\n    }\n    &:nth-child(14) {\n      animation-delay: -0.375s;\n    }\n    &:nth-child(15) {\n      animation-delay: -0.1875s;\n    }\n    &:nth-child(16) {\n      animation-delay: 0s;\n    }\n  }\n'], ['\n  > * {\n    animation-name: ', ';\n    animation-duration: 3s;\n    animation-iteration-count: infinite;\n    transform-origin: center;\n    &:nth-child(1) {\n      animation-delay: -2.8125s;\n    }\n    &:nth-child(2) {\n      animation-delay: -2.625s;\n    }\n    &:nth-child(3) {\n      animation-delay: -2.4375s;\n    }\n    &:nth-child(4) {\n      animation-delay: -2.25s;\n    }\n    &:nth-child(5) {\n      animation-delay: -2.0625s;\n    }\n    &:nth-child(6) {\n      animation-delay: -1.875s;\n    }\n    &:nth-child(7) {\n      animation-delay: -1.6875s;\n    }\n    &:nth-child(8) {\n      animation-delay: -1.5s;\n    }\n    &:nth-child(9) {\n      animation-delay: -1.3125s;\n    }\n    &:nth-child(10) {\n      animation-delay: -1.125s;\n    }\n    &:nth-child(11) {\n      animation-delay: -0.9375s;\n    }\n    &:nth-child(12) {\n      animation-delay: -0.75s;\n    }\n    &:nth-child(13) {\n      animation-delay: -0.5625s;\n    }\n    &:nth-child(14) {\n      animation-delay: -0.375s;\n    }\n    &:nth-child(15) {\n      animation-delay: -0.1875s;\n    }\n    &:nth-child(16) {\n      animation-delay: 0s;\n    }\n  }\n']),
      _templateObject3$8 = _taggedTemplateLiteral$u(['\n  width: ', ';\n  ', '\n'], ['\n  width: ', ';\n  ', '\n']);

  function _taggedTemplateLiteral$u(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var UnstyledBaseLogo = function UnstyledBaseLogo(_ref) {
    var className = _ref.className;

    return React__default.createElement(
      'svg',
      { className: className, viewBox: '0 0 492 60', __source: {
          fileName: _jsxFileName$m,
          lineNumber: 7
        },
        __self: _this$m
      },
      React__default.createElement('path', { className: 'letter letter-r', d: 'M52.6,39.4l-4.1-8.1h-3.6v8.1H42V20.2h7.5c3.6,0,6,2.4,6,5.6c0.1,2.4-1.5,4.5-3.8,5.1l4.4,8.5L52.6,39.4z M49.2,22.8h-4.3v6h4.3c2,0,3.3-1.1,3.3-3C52.5,24,51.2,22.8,49.2,22.8z', __source: {
          fileName: _jsxFileName$m,
          lineNumber: 8
        },
        __self: _this$m
      }),
      React__default.createElement('path', { className: 'letter letter-o', d: 'M78,37.7c-2.8,2.8-7.3,2.8-10.1,0c-1.9-1.9-1.8-4-1.8-7.7c0-3.7,0-5.8,1.8-7.8c2.8-2.8,7.3-2.8,10.1,0 c1.9,1.9,1.8,4,1.8,7.7S79.8,35.8,78,37.7z M75.7,24c-1.6-1.6-4.1-1.6-5.7,0l0,0c-1,1-1.2,2.1-1.2,6s0.2,5,1.2,6 c1.6,1.6,4.1,1.6,5.7,0l0,0c1-1,1.1-2.1,1.1-6S76.7,25.1,75.7,24z', __source: {
          fileName: _jsxFileName$m,
          lineNumber: 10
        },
        __self: _this$m
      }),
      React__default.createElement('path', { className: 'letter letter-c', d: 'M104.1,26.1h-3c-0.1-0.8-0.4-1.5-1-2.1c-1.6-1.6-4.1-1.6-5.7,0l0,0c-1,1-1.2,2.1-1.2,6s0.2,5,1.2,6 c1.6,1.6,4.1,1.6,5.7,0l0,0c0.6-0.6,0.9-1.3,1-2.1h3c-0.2,1.6-0.6,2.8-1.7,3.9c-2.8,2.8-7.3,2.8-10.1,0c-1.9-1.9-1.9-4-1.9-7.7 s0-5.8,1.9-7.7c2.8-2.8,7.3-2.8,10.1,0C103.5,23.4,103.9,24.6,104.1,26.1', __source: {
          fileName: _jsxFileName$m,
          lineNumber: 13
        },
        __self: _this$m
      }),
      React__default.createElement('path', { className: 'letter letter-k', d: 'M126.5,39.6l-5.4-9.5l-3.2,3.9v5.6h-2.9V20.4h2.9V30l7.9-9.7h3.6l-6.2,7.6l6.9,11.7H126.5z', __source: {
          fileName: _jsxFileName$m,
          lineNumber: 16
        },
        __self: _this$m
      }),
      React__default.createElement('polygon', { className: 'letter letter-e', points: '142.9,23.1 152.3,23.1 152.3,20.5 140,20.5 140,20.5 140,39.7 142.6,39.7 152.3,39.7 152.3,37.1 142.9,37.1 142.9,31.4 151.4,31.4 151.4,28.8 142.9,28.8 142.9,28.7', __source: {
          fileName: _jsxFileName$m,
          lineNumber: 17
        },
        __self: _this$m
      }),
      React__default.createElement('polygon', { className: 'letter letter-t', points: '162.3,20.4 162.3,23.1 167.7,23.1 167.7,39.7 170.5,39.7 170.5,23.1 175.8,23.1 175.8,20.4', __source: {
          fileName: _jsxFileName$m,
          lineNumber: 19
        },
        __self: _this$m
      }),
      React__default.createElement('path', { className: 'letter letter-s', d: 'M191.6,39.8c-2.9,0-5-0.7-6.8-2.6l2-1.9c1.4,1.4,3,1.8,4.9,1.8c2.5,0,4-1.1,4-3c0-0.8-0.2-1.5-0.8-2 c-0.5-0.4-1-0.6-2.1-0.8l-2.3-0.4c-1.4-0.1-2.6-0.7-3.6-1.6c-1-0.9-1.4-2.1-1.4-3.7c0-3.3,2.4-5.6,6.4-5.6c2.6,0,4.3,0.6,6,2.2 l-1.9,1.8c-1.2-1.1-2.6-1.5-4.2-1.5c-2.3,0-3.5,1.3-3.5,3c0,0.7,0.2,1.3,0.7,1.8c0.6,0.5,1.4,0.8,2.2,0.9l2.2,0.3 c1.8,0.3,2.8,0.7,3.6,1.4c1,0.9,1.6,2.3,1.6,4C198.5,37.7,195.6,39.8,191.6,39.8z', __source: {
          fileName: _jsxFileName$m,
          lineNumber: 20
        },
        __self: _this$m
      }),
      React__default.createElement('path', { className: 'letter letter-o', d: 'M234.3,37.7c-2.8,2.8-7.3,2.8-10.1,0c-1.9-1.9-1.9-4-1.9-7.7s0-5.8,1.9-7.7c2.8-2.8,7.3-2.8,10.1,0 c1.9,1.9,1.8,4,1.8,7.7S236.2,35.8,234.3,37.7z M232.1,24c-1.6-1.6-4.1-1.6-5.7,0l0,0c-1,1-1.1,2.1-1.1,6s0.2,5,1.1,6 c1.6,1.6,4.1,1.6,5.7,0l0,0c1-1,1.1-2.1,1.1-6S233,25.1,232.1,24z', __source: {
          fileName: _jsxFileName$m,
          lineNumber: 24
        },
        __self: _this$m
      }),
      React__default.createElement('polygon', { className: 'letter letter-f', points: '250.3,31.4 258.8,31.4 258.8,28.7 250.3,28.7 250.3,23.1 259.7,23.1 259.7,20.4 247.4,20.4 247.4,39.7 250.3,39.7', __source: {
          fileName: _jsxFileName$m,
          lineNumber: 27
        },
        __self: _this$m
      }),
      React__default.createElement('path', { className: 'letter letter-a', d: 'M296.6,39.7V30c0-3.7,0-5.8-1.8-7.7c-2.8-2.8-7.3-2.8-10.1,0c-1.9,1.9-1.9,4-1.9,7.7v9.7h2.9V34h8v5.7 C293.6,39.7,296.6,39.7,296.6,39.7z M285.6,31.4V30c0-3.9,0.2-5,1.1-6c1.6-1.6,4.2-1.6,5.7,0l0,0c1,1,1.1,2.1,1.1,6v1.4H285.6z', __source: {
          fileName: _jsxFileName$m,
          lineNumber: 29
        },
        __self: _this$m
      }),
      React__default.createElement('path', { className: 'letter letter-w', d: 'M322.5,39.7H320l-3.9-13.5l-3.9,13.5h-2.6l-5-19.3h3.1l3.4,13.7l3.9-13.7h2.4l3.9,13.7l3.4-13.7h3.1L322.5,39.7 z', __source: {
          fileName: _jsxFileName$m,
          lineNumber: 31
        },
        __self: _this$m
      }),
      React__default.createElement('polygon', { className: 'letter letter-e', points: '340.6,23.1 350,23.1 350,20.4 337.7,20.4 337.7,20.5 337.7,39.7 340.3,39.7 350,39.7 350,37 340.6,37 340.6,31.4 349.1,31.4 349.1,28.7 340.6,28.7 340.6,28.7', __source: {
          fileName: _jsxFileName$m,
          lineNumber: 33
        },
        __self: _this$m
      }),
      React__default.createElement('path', { className: 'letter letter-s', d: 'M366.4,39.8c-2.9,0-5-0.7-6.8-2.6l2-1.9c1.4,1.4,3,1.8,4.9,1.8c2.5,0,4-1.1,4-3c0-0.8-0.2-1.5-0.8-2 c-0.5-0.4-1-0.6-2.1-0.8l-2.3-0.3c-1.4-0.1-2.6-0.7-3.6-1.6c-1-0.9-1.4-2.1-1.4-3.7c0-3.4,2.4-5.6,6.4-5.6c2.6,0,4.3,0.6,6,2.2 l-1.9,1.8c-1.2-1.1-2.6-1.5-4.2-1.5c-2.3,0-3.5,1.3-3.5,3c0,0.7,0.2,1.3,0.7,1.8c0.6,0.5,1.4,0.8,2.2,0.9l2.2,0.3 c1.8,0.3,2.8,0.7,3.6,1.4c1,0.9,1.6,2.3,1.6,4C373.3,37.7,370.5,39.8,366.4,39.8z', __source: {
          fileName: _jsxFileName$m,
          lineNumber: 35
        },
        __self: _this$m
      }),
      React__default.createElement('path', { className: 'letter letter-o', d: 'M395.7,37.8c-1.4,1.4-3.2,2.1-5.1,2.1c-1.9,0-3.7-0.7-5.1-2c-1.9-1.9-1.9-4-1.9-7.7s0-5.8,1.9-7.7 c1.3-1.4,3.2-2.1,5.1-2.1c1.9,0,3.8,0.7,5.1,2c1.9,1.9,1.8,4,1.8,7.7S397.6,35.9,395.7,37.8z M393.5,24.1c-1.6-1.6-4.2-1.6-5.7,0 l0,0c-1,1-1.1,2.1-1.1,6s0.2,5,1.1,6c1.6,1.6,4.1,1.6,5.7,0l0,0c1-1,1.1-2.1,1.1-6S394.4,25.1,393.5,24.1z', __source: {
          fileName: _jsxFileName$m,
          lineNumber: 39
        },
        __self: _this$m
      }),
      React__default.createElement('path', { className: 'letter letter-m', d: 'M422.8,39.7V26.8l-4.4,9.4h-2.2l-4.6-9.4v12.9h-2.9V20.4h2.9l5.6,12l5.5-12h2.9v19.2L422.8,39.7L422.8,39.7z', __source: {
          fileName: _jsxFileName$m,
          lineNumber: 42
        },
        __self: _this$m
      }),
      React__default.createElement('polygon', { className: 'letter letter-e', points: '440.5,23.1 449.9,23.1 449.9,20.4 437.6,20.4 437.6,20.5 437.6,39.7 440.2,39.7 449.9,39.7 449.9,37 440.5,37 440.5,31.4 449,31.4 449,28.7 440.5,28.7 440.5,28.7', __source: {
          fileName: _jsxFileName$m,
          lineNumber: 43
        },
        __self: _this$m
      })
    );
  };

  var pulse$1 = styled.keyframes(_templateObject$u);

  var animated$3 = styled.css(_templateObject2$a, pulse$1);

  var BaseLogo = styled__default(UnstyledBaseLogo)(_templateObject3$8, function (props) {
    return props.width;
  }, function (props) {
    return props.animated ? animated$3 : '';
  });

  BaseLogo.propTypes = {
    width: PropTypes.string

    /** @component */
  };

  var _templateObject$v = _taggedTemplateLiteral$v(['\n  fill: ', ';\n'], ['\n  fill: ', ';\n']);

  function _taggedTemplateLiteral$v(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var GrayLogo = styled__default(BaseLogo)(_templateObject$v, function (props) {
    return props.theme.colors.gray[4];
  });

  GrayLogo.propTypes = {
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        gray: PropTypes.array
      })
    }),
    width: PropTypes.string

    /** @component */
  };
  // Wrapping the component in a styled tag so that we can refference it in other
  // other styled components. See:
  // https://www.styled-components.com/docs/advanced#caveat

  var _templateObject$w = _taggedTemplateLiteral$w(['\n  fill: ', ';\n'], ['\n  fill: ', ';\n']);

  function _taggedTemplateLiteral$w(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var Logo = styled__default(BaseLogo)(_templateObject$w, function (props) {
    return props.theme.colors.rocketBlue;
  });

  Logo.propTypes = {
    theme: PropTypes.shape({
      color: PropTypes.shape({
        rocketBlue: PropTypes.string
      })
    }),
    width: PropTypes.string

    /** @component */
  };
  // Wrapping the component in a styled tag so that we can refference it in other
  // other styled components. See:
  // https://www.styled-components.com/docs/advanced#caveat

  var _templateObject$x = _taggedTemplateLiteral$x(['\n  fill: ', ';\n'], ['\n  fill: ', ';\n']);

  function _taggedTemplateLiteral$x(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var NavyLogo = styled__default(BaseLogo)(_templateObject$x, function (props) {
    return props.theme.colors.navy;
  });

  NavyLogo.propTypes = {
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        navy: PropTypes.string
      })
    }),
    width: PropTypes.string

    /** @component */
  };
  // Wrapping the component in a styled tag so that we can refference it in other
  // other styled components. See:
  // https://www.styled-components.com/docs/advanced#caveat

  var _templateObject$y = _taggedTemplateLiteral$y(['\n  fill: ', ';\n'], ['\n  fill: ', ';\n']);

  function _taggedTemplateLiteral$y(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var WhiteLogo = styled__default(BaseLogo)(_templateObject$y, function (props) {
    return props.theme.colors.white;
  });

  WhiteLogo.propTypes = {
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        white: PropTypes.string
      })
    }),
    width: PropTypes.string

    /** @component */
  };
  // Wrapping the component in a styled tag so that we can refference it in other
  // other styled components. See:
  // https://www.styled-components.com/docs/advanced#caveat

  var _jsxFileName$n = '/Users/jrusso/Documents/ROA/mirage/src/core/icons/Spinner/Spinner.base.js',
      _this$n = undefined;

  var _templateObject$z = _taggedTemplateLiteral$z(['\n0% {\n  opacity: 1.0;\n}\n100% {\n  opacity: 0.0;\n}\n'], ['\n0% {\n  opacity: 1.0;\n}\n100% {\n  opacity: 0.0;\n}\n']),
      _templateObject2$b = _taggedTemplateLiteral$z(['\n  width: ', ';\n  height: ', ';\n  rect {\n    animation-name: ', ';\n    animation-duration: 1.2s;\n    animation-iteration-count: infinite;\n    transform-origin: 50% 50%;\n    transform-box: view-box;\n  }\n  g {\n    &:nth-child(1) rect {\n      animation-delay: -1.0799999999999998s;\n    }\n    &:nth-child(2) rect {\n      animation-delay: -0.96s;\n    }\n    &:nth-child(3) rect {\n      animation-delay: -0.8400000000000001s;\n    }\n    &:nth-child(4) rect {\n      animation-delay: -0.72s;\n    }\n    &:nth-child(5) rect {\n      animation-delay: -0.6s;\n    }\n    &:nth-child(6) rect {\n      animation-delay: -0.48s;\n    }\n    &:nth-child(7) rect {\n      animation-delay: -0.36s;\n    }\n    &:nth-child(8) rect {\n      animation-delay: -0.24s;\n    }\n    &:nth-child(9) rect {\n      animation-delay: -0.12s;\n    }\n    &:nth-child(10) rect {\n      animation-delay: 0s;\n    }\n  }\n'], ['\n  width: ', ';\n  height: ', ';\n  rect {\n    animation-name: ', ';\n    animation-duration: 1.2s;\n    animation-iteration-count: infinite;\n    transform-origin: 50% 50%;\n    transform-box: view-box;\n  }\n  g {\n    &:nth-child(1) rect {\n      animation-delay: -1.0799999999999998s;\n    }\n    &:nth-child(2) rect {\n      animation-delay: -0.96s;\n    }\n    &:nth-child(3) rect {\n      animation-delay: -0.8400000000000001s;\n    }\n    &:nth-child(4) rect {\n      animation-delay: -0.72s;\n    }\n    &:nth-child(5) rect {\n      animation-delay: -0.6s;\n    }\n    &:nth-child(6) rect {\n      animation-delay: -0.48s;\n    }\n    &:nth-child(7) rect {\n      animation-delay: -0.36s;\n    }\n    &:nth-child(8) rect {\n      animation-delay: -0.24s;\n    }\n    &:nth-child(9) rect {\n      animation-delay: -0.12s;\n    }\n    &:nth-child(10) rect {\n      animation-delay: 0s;\n    }\n  }\n']);

  function _taggedTemplateLiteral$z(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var animation$2 = styled.keyframes(_templateObject$z);

  var SpinnerSVG = function SpinnerSVG(_ref) {
    var className = _ref.className;

    return React__default.createElement(
      'svg',
      { className: className, viewBox: '0 0 100 100', preserveAspectRatio: 'xMidYMid', xmlns: 'http://www.w3.org/2000/svg', version: '1.1', __source: {
          fileName: _jsxFileName$n,
          lineNumber: 16
        },
        __self: _this$n
      },
      React__default.createElement(
        'g',
        { transform: 'rotate(0 50 50)', __source: {
            fileName: _jsxFileName$n,
            lineNumber: 17
          },
          __self: _this$n
        },
        React__default.createElement('rect', { x: '46.5', y: '16', rx: '1.86', ry: '0.64', width: '7', height: '18', __source: {
            fileName: _jsxFileName$n,
            lineNumber: 18
          },
          __self: _this$n
        })
      ),
      React__default.createElement(
        'g',
        { transform: 'rotate(36 50 50)', __source: {
            fileName: _jsxFileName$n,
            lineNumber: 20
          },
          __self: _this$n
        },
        React__default.createElement('rect', { x: '46.5', y: '16', rx: '1.86', ry: '0.64', width: '7', height: '18', __source: {
            fileName: _jsxFileName$n,
            lineNumber: 21
          },
          __self: _this$n
        })
      ),
      React__default.createElement(
        'g',
        { transform: 'rotate(72 50 50)', __source: {
            fileName: _jsxFileName$n,
            lineNumber: 23
          },
          __self: _this$n
        },
        React__default.createElement('rect', { x: '46.5', y: '16', rx: '1.86', ry: '0.64', width: '7', height: '18', __source: {
            fileName: _jsxFileName$n,
            lineNumber: 24
          },
          __self: _this$n
        })
      ),
      React__default.createElement(
        'g',
        { transform: 'rotate(108 50 50)', __source: {
            fileName: _jsxFileName$n,
            lineNumber: 26
          },
          __self: _this$n
        },
        React__default.createElement('rect', { x: '46.5', y: '16', rx: '1.86', ry: '0.64', width: '7', height: '18', __source: {
            fileName: _jsxFileName$n,
            lineNumber: 27
          },
          __self: _this$n
        })
      ),
      React__default.createElement(
        'g',
        { transform: 'rotate(144 50 50)', __source: {
            fileName: _jsxFileName$n,
            lineNumber: 29
          },
          __self: _this$n
        },
        React__default.createElement('rect', { x: '46.5', y: '16', rx: '1.86', ry: '0.64', width: '7', height: '18', __source: {
            fileName: _jsxFileName$n,
            lineNumber: 30
          },
          __self: _this$n
        })
      ),
      React__default.createElement(
        'g',
        { transform: 'rotate(180 50 50)', __source: {
            fileName: _jsxFileName$n,
            lineNumber: 32
          },
          __self: _this$n
        },
        React__default.createElement('rect', { x: '46.5', y: '16', rx: '1.86', ry: '0.64', width: '7', height: '18', __source: {
            fileName: _jsxFileName$n,
            lineNumber: 33
          },
          __self: _this$n
        })
      ),
      React__default.createElement(
        'g',
        { transform: 'rotate(216 50 50)', __source: {
            fileName: _jsxFileName$n,
            lineNumber: 35
          },
          __self: _this$n
        },
        React__default.createElement('rect', { x: '46.5', y: '16', rx: '1.86', ry: '0.64', width: '7', height: '18', __source: {
            fileName: _jsxFileName$n,
            lineNumber: 36
          },
          __self: _this$n
        })
      ),
      React__default.createElement(
        'g',
        { transform: 'rotate(252 50 50)', __source: {
            fileName: _jsxFileName$n,
            lineNumber: 38
          },
          __self: _this$n
        },
        React__default.createElement('rect', { x: '46.5', y: '16', rx: '1.86', ry: '0.64', width: '7', height: '18', __source: {
            fileName: _jsxFileName$n,
            lineNumber: 39
          },
          __self: _this$n
        })
      ),
      React__default.createElement(
        'g',
        { transform: 'rotate(288 50 50)', __source: {
            fileName: _jsxFileName$n,
            lineNumber: 41
          },
          __self: _this$n
        },
        React__default.createElement('rect', { x: '46.5', y: '16', rx: '1.86', ry: '0.64', width: '7', height: '18', __source: {
            fileName: _jsxFileName$n,
            lineNumber: 42
          },
          __self: _this$n
        })
      ),
      React__default.createElement(
        'g',
        { transform: 'rotate(324 50 50)', __source: {
            fileName: _jsxFileName$n,
            lineNumber: 44
          },
          __self: _this$n
        },
        React__default.createElement('rect', { x: '46.5', y: '16', rx: '1.86', ry: '0.64', width: '7', height: '18', __source: {
            fileName: _jsxFileName$n,
            lineNumber: 45
          },
          __self: _this$n
        })
      )
    );
  };

  var Spinner = styled__default(SpinnerSVG)(_templateObject2$b, function (props) {
    return props.size;
  }, function (props) {
    return props.size;
  }, animation$2);

  Spinner.propTypes = {
    size: PropTypes.string,
    theme: PropTypes.shape({})
  };

  Spinner.defaultProps = {
    size: '80px'

    /** @component */
  };

  var _templateObject$A = _taggedTemplateLiteral$A(['\n  rect {\n    fill: ', ';\n  }\n'], ['\n  rect {\n    fill: ', ';\n  }\n']);

  function _taggedTemplateLiteral$A(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var BlueSpinner = styled__default(Spinner)(_templateObject$A, function (props) {
    return props.theme.colors.rocketBlue;
  });

  BlueSpinner.propTypes = {
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        rocketBlue: PropTypes.string
      })
    })

    /** @component */
  };

  var _templateObject$B = _taggedTemplateLiteral$B(['\n  rect {\n    fill: ', ';\n  }\n'], ['\n  rect {\n    fill: ', ';\n  }\n']);

  function _taggedTemplateLiteral$B(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var GraySpinner = styled__default(Spinner)(_templateObject$B, function (props) {
    return props.theme.colors.loading;
  });

  GraySpinner.propTypes = {
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        loading: PropTypes.string
      })
    })

    /** @component */
  };

  var _templateObject$C = _taggedTemplateLiteral$C(['\n  rect {\n    fill: ', ';\n  }\n'], ['\n  rect {\n    fill: ', ';\n  }\n']);

  function _taggedTemplateLiteral$C(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var NavySpinner = styled__default(Spinner)(_templateObject$C, function (props) {
    return props.theme.colors.navy;
  });

  NavySpinner.propTypes = {
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        navy: PropTypes.string
      })
    })

    /** @component */
  };

  var _templateObject$D = _taggedTemplateLiteral$D(['\n  rect {\n    fill: ', ';\n  }\n'], ['\n  rect {\n    fill: ', ';\n  }\n']);

  function _taggedTemplateLiteral$D(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var WhiteSpinner = styled__default(Spinner)(_templateObject$D, function (props) {
    return props.theme.colors.white;
  });

  WhiteSpinner.propTypes = {
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        white: PropTypes.string
      })
    })

    /** @component */
  };

  //Icons

  var _jsxFileName$o = '/Users/jrusso/Documents/ROA/mirage/src/core/image/backgroundImage.js';

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _templateObject$E = _taggedTemplateLiteral$E(['\n  position: relative;\n  width: 100%;\n  > div {\n    background-image: url(', ');\n    background-size: contain;\n    background-repeat: no-repeat;\n    padding-top: ', '%;\n  }\n  > article {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n'], ['\n  position: relative;\n  width: 100%;\n  > div {\n    background-image: url(', ');\n    background-size: contain;\n    background-repeat: no-repeat;\n    padding-top: ', '%;\n  }\n  > article {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n']);

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  function _taggedTemplateLiteral$E(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var StyledBackgroundImage = styled__default.section(_templateObject$E, function (props) {
    return props.src;
  }, function (props) {
    return props.defaultPaddingTop;
  });

  var BackgroundImage = function (_React$Component) {
    _inherits(BackgroundImage, _React$Component);

    function BackgroundImage(props) {
      _classCallCheck(this, BackgroundImage);

      var _this = _possibleConstructorReturn(this, (BackgroundImage.__proto__ || Object.getPrototypeOf(BackgroundImage)).call(this, props));

      _this.setResponsiveBackground = function () {
        var _this$props = _this.props,
            width = _this$props.size.width,
            src = _this$props.src,
            inSources = _this$props.sources;

        var sources = Object.assign({}, inSources, { 0: src });
        var currentSrc = _this.state.currentSrc;

        if (sources) {
          var newSrc = sources[Object.keys(sources).sort(function (keyA, keyB) {
            return keyA - keyB;
          }).reverse().find(function (key) {
            return key < width;
          })];
          if (currentSrc !== newSrc) {
            var image = new Image();
            image.src = newSrc;
            image.onload = function () {
              var defaultPaddingTop = image.height !== 0 && image.width !== 0 ? image.height / image.width * 100 : 0;
              _this.setState({
                currentSrc: newSrc,
                defaultPaddingTop: defaultPaddingTop
              });
            };
          }
        }
      };

      _this.state = {
        currentSrc: undefined,
        defaultPaddingTop: undefined
      };
      return _this;
    }

    _createClass(BackgroundImage, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.setResponsiveBackground();
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        this.setResponsiveBackground();
      }
    }, {
      key: 'render',
      value: function render() {
        var children = this.props.children;
        var _state = this.state,
            currentSrc = _state.currentSrc,
            defaultPaddingTop = _state.defaultPaddingTop;

        return React__default.createElement(
          StyledBackgroundImage,
          Object.assign({}, this.props, { src: currentSrc, defaultPaddingTop: defaultPaddingTop, __source: {
              fileName: _jsxFileName$o,
              lineNumber: 72
            },
            __self: this
          }),
          React__default.createElement('div', {
            __source: {
              fileName: _jsxFileName$o,
              lineNumber: 73
            },
            __self: this
          }),
          React__default.createElement(
            'article',
            {
              __source: {
                fileName: _jsxFileName$o,
                lineNumber: 74
              },
              __self: this
            },
            children
          )
        );
      }
    }]);

    return BackgroundImage;
  }(React__default.Component);

  BackgroundImage.propTypes = {
    src: PropTypes.string,
    sizes: PropTypes.object,
    srcSet: PropTypes.oneOfType([function (props, propName, componentName) {
      if (props[propName] && !props['sizes']) {
        console.warn('You have provided ' + propName + ', but not defined the sizes prop, this will cause your InlineImages for be sized to 100vw if a `width` css property is not set.');
      }
    }, PropTypes.object])

    /** @component */
  };var backgroundImage = reactSizeme.withSize()(BackgroundImage);

  function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var Sizes = function Sizes(inSizes) {
    var _this = this;

    _classCallCheck$1(this, Sizes);

    this.toString = function () {
      var output = '';
      for (var breakpoint in _this.sizes) {
        var width = _this.sizes[breakpoint];
        if (breakpoint !== 'default') {
          output = '' + output + breakpoint + ' ' + width + ',\n';
        } else {
          output = output + ' ' + width;
        }
      }
      if (Object.keys(_this.sizes).includes('default')) {
        return output;
      } else {
        return output.slice(0, -2);
      }
    };

    this.sizes = inSizes;
  };

  function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var SourceSet = function SourceSet(sources) {
    var _this = this;

    _classCallCheck$2(this, SourceSet);

    this.toString = function () {
      var output = "";
      for (var width in _this.sources) {
        output = "" + output + _this.sources[width] + " " + width + ",\n";
      }
      return output.slice(0, -2);
    };

    this.sources = sources;
  };

  var _jsxFileName$p = '/Users/jrusso/Documents/ROA/mirage/src/core/image/inlineImage.js',
      _this$o = undefined;

  function _objectWithoutProperties$2(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  var InlineImage = function InlineImage(_ref) {
    var alt = _ref.alt,
        src = _ref.src,
        inSizes = _ref.sizes,
        inSources = _ref.srcSet,
        props = _objectWithoutProperties$2(_ref, ['alt', 'src', 'sizes', 'srcSet']);

    var srcSet = undefined;
    if (inSources) {
      srcSet = new SourceSet(inSources).toString();
    }
    var sizesStr = undefined;
    if (inSizes) {
      sizesStr = new Sizes(inSizes).toString();
    }
    return React__default.createElement('img', Object.assign({
      alt: alt,
      src: src,
      srcSet: srcSet,
      sizes: sizesStr
    }, props, {
      __source: {
        fileName: _jsxFileName$p,
        lineNumber: 17
      },
      __self: _this$o
    }));
  };

  InlineImage.defaultProps = {
    alt: ''
  };

  InlineImage.propTypes = {
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    sizes: PropTypes.object,
    srcSet: PropTypes.oneOfType([function (props, propName, componentName) {
      if (props[propName] && !props['sizes']) {
        console.warn('You have provided ' + propName + ', but not defined the sizes prop, this will cause your InlineImages for be sized to 100vw if a `width` css property is not set.');
      }
    }, PropTypes.object])

    /** @component */
  };

  var _templateObject$F = _taggedTemplateLiteral$F(['\n  margin: 0;\n\n  ', '\n  letter-spacing: 1.29;\n  text-transform: ', ';\n\n  color: ', ';\n\n  font-family: ', ';\n  font-size: ', ';\n  font-style: italic;\n  font-weight: 500;\n  line-height: 1.29;\n'], ['\n  margin: 0;\n\n  ', '\n  letter-spacing: 1.29;\n  text-transform: ', ';\n\n  color: ', ';\n\n  font-family: ', ';\n  font-size: ', ';\n  font-style: italic;\n  font-weight: 500;\n  line-height: 1.29;\n']);

  function _taggedTemplateLiteral$F(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var Caption = styled__default.span(_templateObject$F, function (props) {
    return props.center ? 'text-align: center;' : '';
  }, function (props) {
    return props.uppercase ? 'uppercase' : 'inherit';
  }, function (props) {
    return props.theme.colors.navy;
  }, function (props) {
    return props.theme.fonts.primaryFont;
  }, function (props) {
    return props.fontSize;
  });

  Caption.propTypes = {
    theme: PropTypes.shape({
      fonts: PropTypes.shape({
        primaryFont: PropTypes.string
      }),
      colors: PropTypes.shape({
        navy: PropTypes.string
      })
    })
  };

  Caption.defaultProps = {
    fontSize: '1.4rem'

    /** @component */
  };

  var _templateObject$G = _taggedTemplateLiteral$G(['\n  margin: 0;\n\n  ', '\n  letter-spacing: .1rem;\n  text-transform: ', ';\n\n  color: ', ';\n\n  font-family: ', ';\n  font-size: ', ';\n  font-weight: 500;\n  line-height:1.0476190476190477;\n'], ['\n  margin: 0;\n\n  ', '\n  letter-spacing: .1rem;\n  text-transform: ', ';\n\n  color: ', ';\n\n  font-family: ', ';\n  font-size: ', ';\n  font-weight: 500;\n  line-height:1.0476190476190477;\n']);

  function _taggedTemplateLiteral$G(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  /**
   * Main title component
   */
  var H1 = styled__default.h1(_templateObject$G, function (props) {
    return props.center ? 'text-align: center;' : '';
  }, function (props) {
    return props.lowercase ? 'inherit' : 'uppercase';
  }, function (props) {
    return props.theme.colors.navy;
  }, function (props) {
    return props.theme.fonts.headerFont;
  }, function (props) {
    return props.fontSize;
  });

  H1.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]),
    theme: PropTypes.shape({
      fonts: PropTypes.shape({
        headerFont: PropTypes.string
      }),
      colors: PropTypes.shape({
        navy: PropTypes.string
      })
    }),
    lowercase: PropTypes.bool
  };

  H1.defaultProps = {
    fontSize: '4.2rem'

    /** @component */
  };

  var _templateObject$H = _taggedTemplateLiteral$H(['\n    margin: 0;\n\n    ', '\n    letter-spacing: .05rem;\n    text-transform: ', ';\n\n    color: ', ';\n\n    font-family: ', ';\n    font-size: ', ';\n    font-weight: 500;\n    line-height: 1.0625;\n'], ['\n    margin: 0;\n\n    ', '\n    letter-spacing: .05rem;\n    text-transform: ', ';\n\n    color: ', ';\n\n    font-family: ', ';\n    font-size: ', ';\n    font-weight: 500;\n    line-height: 1.0625;\n']);

  function _taggedTemplateLiteral$H(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  /** @component */
  var H2 = styled__default.h2(_templateObject$H, function (props) {
    return props.center ? 'text-align: center;' : '';
  }, function (props) {
    return props.lowercase ? 'inherit' : 'uppercase';
  }, function (props) {
    return props.theme.colors.navy;
  }, function (props) {
    return props.theme.fonts.headerFont;
  }, function (props) {
    return props.fontSize;
  });
  H2.propTypes = {
    center: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]),
    theme: PropTypes.shape({
      fonts: PropTypes.shape({
        headerFont: PropTypes.string
      }),
      colors: PropTypes.shape({
        navy: PropTypes.string
      })
    }),
    lowercase: PropTypes.bool
  };

  H2.defaultProps = {
    fontSize: '3.2rem'

    /** @component */
  };

  var _templateObject$I = _taggedTemplateLiteral$I(['\n  letter-spacing: .05rem;\n  text-transform: ', ';\n\n  color: ', ';\n\n  font-family: ', ';\n  font-size: ', ';\n  font-weight: 500;\n  line-height: 1.0833333333333333;\n'], ['\n  letter-spacing: .05rem;\n  text-transform: ', ';\n\n  color: ', ';\n\n  font-family: ', ';\n  font-size: ', ';\n  font-weight: 500;\n  line-height: 1.0833333333333333;\n']);

  function _taggedTemplateLiteral$I(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var H3 = styled__default.h3(_templateObject$I, function (props) {
    return props.lowercase ? 'inherit' : 'uppercase';
  }, function (props) {
    return props.theme.colors.navy;
  }, function (props) {
    return props.theme.fonts.headerFont;
  }, function (props) {
    return props.fontSize;
  });

  H3.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]),
    theme: PropTypes.shape({
      fonts: PropTypes.shape({
        headerFont: PropTypes.string
      }),
      colors: PropTypes.shape({
        navy: PropTypes.string
      })
    }),
    lowercase: PropTypes.bool
  };

  H3.defaultProps = {
    fontSize: '2.4rem'

    /** @component */
  };

  var _templateObject$J = _taggedTemplateLiteral$J(['\n  letter-spacing: 0.5px;\n\n  color: ', ';\n\n  font-family: ', ';\n  font-size: ', ';\n  font-weight: 500;\n  font-style: italic;\n  line-height: 1;\n'], ['\n  letter-spacing: 0.5px;\n\n  color: ', ';\n\n  font-family: ', ';\n  font-size: ', ';\n  font-weight: 500;\n  font-style: italic;\n  line-height: 1;\n']);

  function _taggedTemplateLiteral$J(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var H4 = styled__default.h4(_templateObject$J, function (props) {
    return props.theme.colors.navy;
  }, function (props) {
    return props.theme.fonts.primaryFont;
  }, function (props) {
    return props.fontSize;
  });

  H4.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]),
    theme: PropTypes.shape({
      fonts: PropTypes.shape({
        primaryFont: PropTypes.string
      }),
      colors: PropTypes.shape({
        navy: PropTypes.string
      })
    })
  };

  H4.defaultProps = {
    fontSize: '1.8rem'

    /** @component */
  };

  var _templateObject$K = _taggedTemplateLiteral$K(['\n  letter-spacing: 0.5px;\n\n  color: ', ';\n\n  font-family: ', ';\n  font-size: ', ';\n  font-weight: 500;\n  font-style: italic;\n  line-height: 1;\n  letter-spacing: .075rem;\n'], ['\n  letter-spacing: 0.5px;\n\n  color: ', ';\n\n  font-family: ', ';\n  font-size: ', ';\n  font-weight: 500;\n  font-style: italic;\n  line-height: 1;\n  letter-spacing: .075rem;\n']);

  function _taggedTemplateLiteral$K(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var H5 = styled__default.h5(_templateObject$K, function (props) {
    return props.theme.colors.navy;
  }, function (props) {
    return props.theme.fonts.primaryFont;
  }, function (props) {
    return props.fontSize;
  });

  H5.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]),
    theme: PropTypes.shape({
      fonts: PropTypes.shape({
        primaryFont: PropTypes.string
      }),
      colors: PropTypes.shape({
        navy: PropTypes.string
      })
    })
  };

  H5.defaultProps = {
    fontSize: '1.6rem'

    /** @component */
  };

  var _templateObject$L = _taggedTemplateLiteral$L(['\n  letter-spacing: .075rem;\n\n  color: ', ';\n\n  font-family: ', ';\n  font-size: ', ';\n  font-weight: 500;\n  font-style: italic;\n  line-height: 1;\n'], ['\n  letter-spacing: .075rem;\n\n  color: ', ';\n\n  font-family: ', ';\n  font-size: ', ';\n  font-weight: 500;\n  font-style: italic;\n  line-height: 1;\n']);

  function _taggedTemplateLiteral$L(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var H6 = styled__default.h6(_templateObject$L, function (props) {
    return props.theme.colors.navy;
  }, function (props) {
    return props.theme.fonts.primaryFont;
  }, function (props) {
    return props.fontSize;
  });

  H6.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]),
    theme: PropTypes.shape({
      fonts: PropTypes.shape({
        primaryFont: PropTypes.string
      }),
      colors: PropTypes.shape({
        navy: PropTypes.string
      })
    })
  };

  H6.defaultProps = {
    fontSize: '1.4rem'

    /** @component */
  };

  var _jsxFileName$q = '/Users/jrusso/Documents/ROA/mirage/src/core/typography/Label.js',
      _this$p = undefined;

  var _templateObject$M = _taggedTemplateLiteral$M(['\n  text-align: ', ';\n  margin-bottom: 0;\n  letter-spacing: ', ';\n  text-transform: ', ';\n\n\n  font-family: ', ';\n  font-size: ', ';\n  font-weight: ', ';\n'], ['\n  text-align: ', ';\n  margin-bottom: 0;\n  letter-spacing: ', ';\n  text-transform: ', ';\n\n\n  font-family: ', ';\n  font-size: ', ';\n  font-weight: ', ';\n']),
      _templateObject2$c = _taggedTemplateLiteral$M(['\n  ', '\n\n  color: ', '\n'], ['\n  ', '\n\n  color: ', '\n']);

  function _taggedTemplateLiteral$M(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var styles = styled.css(_templateObject$M, function (props) {
    return props.alignRight ? 'right' : 'left';
  }, function (props) {
    return props.letterSpacing;
  }, function (props) {
    return props.lowercase ? 'inherit' : 'uppercase';
  }, function (props) {
    return props.theme.fonts.primaryFont;
  }, function (props) {
    return props.fontSize;
  }, function (props) {
    return props.fontWeight;
  });

  var Label = styled__default.label(_templateObject2$c, styles, function (props) {
    return props.theme.colors.navy;
  });

  var LowercaseLabel = function LowercaseLabel(_ref) {
    var className = _ref.className,
        children = _ref.children;

    return React__default.createElement(
      Label,
      {
        className: className,
        fontSize: '2rem',
        letterSpacing: 'normal',
        fontWeight: 'normal',
        lowercase: true, __source: {
          fileName: _jsxFileName$q,
          lineNumber: 26
        },
        __self: _this$p
      },
      children
    );
  };

  Label.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
    theme: PropTypes.shape({
      fonts: PropTypes.shape({
        primaryFont: PropTypes.string
      }),
      colors: PropTypes.shape({
        navy: PropTypes.string
      })
    }),
    lowercase: PropTypes.bool
  };

  Label.defaultProps = {
    letterSpacing: '.1rem',
    fontSize: '1.4rem',
    fontWeight: '500'

    /** @component */
  };

  var _templateObject$N = _taggedTemplateLiteral$N(['\n  ', '\n  ', '\n  ', '\n  white-space: pre;\n'], ['\n  ', '\n  ', '\n  ', '\n  white-space: pre;\n']);

  function _taggedTemplateLiteral$N(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var MarkedText = styled__default.span(_templateObject$N, function (props) {
    return props.underline && 'text-decoration: underline;';
  }, function (props) {
    return props.bold && 'font-weight: bold;';
  }, function (props) {
    return props.italic && 'font-style: italic;';
  });

  MarkedText.propTypes = {
    bold: PropTypes.bool,
    italic: PropTypes.bool,
    underline: PropTypes.bool

    /** @component */
  };

  var _templateObject$O = _taggedTemplateLiteral$O(['\n  text-align: left;\n  letter-spacing: normal;\n  margin: 0;\n\n  color: ', ';\n\n  font-family: ', ';\n  font-size: ', ';\n  line-height: normal;\n'], ['\n  text-align: left;\n  letter-spacing: normal;\n  margin: 0;\n\n  color: ', ';\n\n  font-family: ', ';\n  font-size: ', ';\n  line-height: normal;\n']);

  function _taggedTemplateLiteral$O(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var P = styled__default.p(_templateObject$O, function (props) {
    return props.theme.colors.navy;
  }, function (props) {
    return props.theme.fonts.primaryFont;
  }, function (props) {
    return props.fontSize;
  });

  P.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    theme: PropTypes.shape({
      fonts: PropTypes.shape({
        primaryFont: PropTypes.string
      }),
      colors: PropTypes.shape({
        navy: PropTypes.string
      })
    })
  };

  P.defaultProps = {
    fontSize: '1.6rem'

    /** @component */
  };

  var _templateObject$P = _taggedTemplateLiteral$P(['\n  text-align: left;\n  letter-spacing: normal;\n\n  color: ', ';\n\n  font-family: ', ';\n  font-size: ', ';\n  line-height: 1.2083333333333333;\n'], ['\n  text-align: left;\n  letter-spacing: normal;\n\n  color: ', ';\n\n  font-family: ', ';\n  font-size: ', ';\n  line-height: 1.2083333333333333;\n']);

  function _taggedTemplateLiteral$P(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var Serif = styled__default.span(_templateObject$P, function (props) {
    return props.theme.colors.navy;
  }, function (props) {
    return props.theme.fonts.secondaryFont;
  }, function (props) {
    return props.fontSize;
  });

  Serif.propTypes = {
    children: PropTypes.string,
    theme: PropTypes.shape({
      fonts: PropTypes.shape({
        secondaryFont: PropTypes.string
      }),
      colors: PropTypes.shape({
        navy: PropTypes.string
      })
    })
  };

  Serif.defaultProps = {
    fontSize: '2.4rem'

    /** @component */
  };

  var _jsxFileName$r = '/Users/jrusso/Documents/ROA/mirage/src/core/typography/Hr.base.js',
      _this$q = undefined;

  var _templateObject$Q = _taggedTemplateLiteral$Q(['\n  height: .1rem;\n  width: ', ';\n  border: none;\n  margin: 1rem 0;\n'], ['\n  height: .1rem;\n  width: ', ';\n  border: none;\n  margin: 1rem 0;\n']);

  function _taggedTemplateLiteral$Q(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var UnstyledHr = function UnstyledHr(_ref) {
    var className = _ref.className;

    return React__default.createElement('hr', { className: className, __source: {
        fileName: _jsxFileName$r,
        lineNumber: 7
      },
      __self: _this$q
    });
  };

  var BaseHr = styled__default(UnstyledHr)(_templateObject$Q, function (props) {
    return props.width;
  });

  BaseHr.propTypes = {
    width: PropTypes.string.isRequired
  };

  BaseHr.defaultProps = {
    width: '100%'

    /** @component */
  };

  var _templateObject$R = _taggedTemplateLiteral$R(['\n  background-color: ', ';\n'], ['\n  background-color: ', ';\n']);

  function _taggedTemplateLiteral$R(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var BlueHr = styled__default(BaseHr)(_templateObject$R, function (props) {
    return props.theme.colors.rocketBlue;
  });

  BlueHr.propTypes = {
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        rocketBlue: PropTypes.string
      })
    })

    /** @component */
  };

  var _templateObject$S = _taggedTemplateLiteral$S(['\n  background-color: ', ';\n'], ['\n  background-color: ', ';\n']);

  function _taggedTemplateLiteral$S(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var Hr = styled__default(BaseHr)(_templateObject$S, function (props) {
    return props.theme.colors.gray[4];
  });

  Hr.propTypes = {
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        gray: PropTypes.array
      })
    })

    /** @component */
  };

  var _templateObject$T = _taggedTemplateLiteral$T(['\n  background-color: ', ';\n'], ['\n  background-color: ', ';\n']);

  function _taggedTemplateLiteral$T(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var NavyHr = styled__default(BaseHr)(_templateObject$T, function (props) {
    return props.theme.colors.navy;
  });

  NavyHr.propTypes = {
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        navy: PropTypes.string
      })
    })

    /** @component */
  };

  var _templateObject$U = _taggedTemplateLiteral$U(['\n  background-color: ', ';\n'], ['\n  background-color: ', ';\n']);

  function _taggedTemplateLiteral$U(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var WhiteHr = styled__default(BaseHr)(_templateObject$U, function (props) {
    return props.theme.colors.white;
  });

  WhiteHr.propTypes = {
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        white: PropTypes.string
      })
    })

    /** @component */
  };

  var _templateObject$V = _taggedTemplateLiteral$V(['\n  width: 180px;\n  height: 180px;\n  border-radius: 10px;\n  background-color: ', ';\n  border: 1px solid #333;\n'], ['\n  width: 180px;\n  height: 180px;\n  border-radius: 10px;\n  background-color: ', ';\n  border: 1px solid #333;\n']);

  function _taggedTemplateLiteral$V(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  /** @component */
  styled__default.div(_templateObject$V, function (props) {
    return colors$1[props.color];
  });

  var brandColors = {
    rocketBlue: '#0073D1',
    rocketBlueHover: '#0073EB',
    navy: '#00003C',
    yellow: '#F0FF02',
    yellowHover: '#D8E320',
    lightBlue0: '#EEFCFF',
    lightBlue1: '#BCE1F7',
    lightBlue2: '#76C2F3',
    lightBlue: ['#EEFCFF', '#BCE1F7', '#76C2F3'],
    electricBlue: '#080CF1',
    lightPink: '#FBDDE4',
    pink: '#FEACBE',
    white: '#FFFFFF'
  };

  var supportingColors = {
    black: '#000000',
    gray0: '#F3F3F3',
    gray1: '#F5F5F5',
    gray2: '#F8F8F8',
    gray3: '#E6E6E6',
    gray4: '#D5D5D5',
    gray5: '#CFCFCF',
    gray: ['#F3F3F3', '#F5F5F5', '#F8F8F8', '#E6E6E6', '#D5D5D5', '#CFCFCF'],
    red: '#FF511C',
    loading: '#BFBFBF'
  };

  var colors$1 = Object.assign({}, brandColors, supportingColors);

  var _templateObject$W = _taggedTemplateLiteral$W(['\n    @media (min-width: ', 'em) {\n      ', '\n    }\n  '], ['\n    @media (min-width: ', 'em) {\n      ', '\n    }\n  ']);

  function _taggedTemplateLiteral$W(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var sizes = {
    phone: 320,
    phoneMax: 414,
    tablet: 768,
    tabletMax: 960,
    laptop: 1280,
    desktop: 1440
  };

  var breakpoints = {
    landscape: '(orientation: landscape)',
    portrait: '(orientation: portrait)'
  };

  Object.keys(sizes).forEach(function (label) {
    breakpoints['below' + label.charAt(0).toUpperCase() + label.substr(1)] = '(max-device-width: ' + sizes[label] + 'px)';
    breakpoints['above' + label.charAt(0).toUpperCase() + label.substr(1)] = '(min-device-width: ' + sizes[label] + 'px)';
  });

  var media = Object.keys(sizes).reduce(function (accumulator, label) {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    var remSize = sizes[label] / 10;
    accumulator[label] = function () {
      return styled.css(_templateObject$W, remSize, styled.css.apply(undefined, arguments));
    };
    return accumulator;
  }, {});

  var _templateObject$X = _taggedTemplateLiteral$X(['\n@font-face {\n  font-family: \'ff-din-web\';\n  font-weight: 400;\n\n  src: url(\'https://res.cloudinary.com/roa-canon/raw/upload/v1481915056/web/fonts/DINOT.otf\');\n}\n\n@font-face {\n  font-family: \'ff-din-web\';\n  font-weight: 400;\n  font-style: italic;\n\n  src: url(\'https://res.cloudinary.com/roa-canon/raw/upload/v1481915056/web/fonts/DINOT-Italic.otf\');\n}\n\n@font-face {\n  font-family: \'ff-din-web\';\n  font-weight: 500;\n\n  src: url(\'https://res.cloudinary.com/roa-canon/raw/upload/v1481917384/web/fonts/DINOT-Medium.otf\');\n}\n\n\n@font-face {\n  font-family: \'ff-din-web\';\n  font-weight: 500;\n  font-style: italic;\n\n  src: url(\'https://res.cloudinary.com/roa-canon/raw/upload/v1481917385/web/fonts/DINOT-MediumItalic.otf\');\n}\n\n@font-face {\n  font-family: \'ff-din-web\';\n  font-weight: 800;\n\n  src: url(\'https://res.cloudinary.com/roa-canon/raw/upload/v1481915056/web/fonts/DINOT-Bold.otf\');\n}\n\n@font-face {\n  font-family: \'ff-din-web\';\n  font-weight: 800;\n  font-style: italic;\n\n  src: url(\'https://res.cloudinary.com/roa-canon/raw/upload/v1481915056/web/fonts/DINOT-BoldItalic.otf\');\n}\n\n@font-face {\n  font-family: \'din-cond\';\n  font-weight: 400;\n\n  src: url(\'https://res.cloudinary.com/roa-canon/raw/upload/v1481917384/web/fonts/DINOT-CondMedium.otf\');\n}\n'], ['\n@font-face {\n  font-family: \'ff-din-web\';\n  font-weight: 400;\n\n  src: url(\'https://res.cloudinary.com/roa-canon/raw/upload/v1481915056/web/fonts/DINOT.otf\');\n}\n\n@font-face {\n  font-family: \'ff-din-web\';\n  font-weight: 400;\n  font-style: italic;\n\n  src: url(\'https://res.cloudinary.com/roa-canon/raw/upload/v1481915056/web/fonts/DINOT-Italic.otf\');\n}\n\n@font-face {\n  font-family: \'ff-din-web\';\n  font-weight: 500;\n\n  src: url(\'https://res.cloudinary.com/roa-canon/raw/upload/v1481917384/web/fonts/DINOT-Medium.otf\');\n}\n\n\n@font-face {\n  font-family: \'ff-din-web\';\n  font-weight: 500;\n  font-style: italic;\n\n  src: url(\'https://res.cloudinary.com/roa-canon/raw/upload/v1481917385/web/fonts/DINOT-MediumItalic.otf\');\n}\n\n@font-face {\n  font-family: \'ff-din-web\';\n  font-weight: 800;\n\n  src: url(\'https://res.cloudinary.com/roa-canon/raw/upload/v1481915056/web/fonts/DINOT-Bold.otf\');\n}\n\n@font-face {\n  font-family: \'ff-din-web\';\n  font-weight: 800;\n  font-style: italic;\n\n  src: url(\'https://res.cloudinary.com/roa-canon/raw/upload/v1481915056/web/fonts/DINOT-BoldItalic.otf\');\n}\n\n@font-face {\n  font-family: \'din-cond\';\n  font-weight: 400;\n\n  src: url(\'https://res.cloudinary.com/roa-canon/raw/upload/v1481917384/web/fonts/DINOT-CondMedium.otf\');\n}\n']);

  function _taggedTemplateLiteral$X(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  /**
   * Global Fonts
  **/
  styled.injectGlobal(_templateObject$X);

  var fontFamilies = {
    dinCondensed: '"din-cond", "din-condensed-web", Arial, sans-serif',
    dinRegular: '"ff-din-web", Helvetica, Arial, sans-serif',
    caslon: '"adobe-caslon-pro", Helvetica, Arial, serif'
  };

  var fontFamilies$1 = {
    headerFont: fontFamilies.dinCondensed,
    primaryFont: fontFamilies.dinRegular,
    secondaryFont: fontFamilies.caslon
  };

  var gridSettings = {
    columns: {
      mobile: 4,
      tablet: 12,
      desktop: 12
    },
    margins: {
      mobile: '3%',
      tablet: '7%',
      desktop: '7%'
    },
    gutter: 2
  };

  var _templateObject$Y = _taggedTemplateLiteral$Y(['\n  html {\n    font-size: 10px;\n  }\n'], ['\n  html {\n    font-size: 10px;\n  }\n']);

  function _taggedTemplateLiteral$Y(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var base = styled.injectGlobal(_templateObject$Y);

  var theme = {
    breakpoints: breakpoints,
    colors: colors$1,
    fonts: fontFamilies$1,
    grid: gridSettings,
    fixedPosition: 'relative',
    media: media,
    base: base
  };

  var _jsxFileName$s = '/Users/jrusso/Documents/ROA/mirage/src/core/theme/index.js';

  var _createClass$1 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var ROATheme = function (_Component) {
    _inherits$1(ROATheme, _Component);

    function ROATheme() {
      _classCallCheck$3(this, ROATheme);

      return _possibleConstructorReturn$1(this, (ROATheme.__proto__ || Object.getPrototypeOf(ROATheme)).apply(this, arguments));
    }

    _createClass$1(ROATheme, [{
      key: 'render',
      value: function render() {
        return React__default.createElement(
          styled.ThemeProvider,
          Object.assign({ theme: theme }, this.props, {
            __source: {
              fileName: _jsxFileName$s,
              lineNumber: 9
            },
            __self: this
          }),
          this.props.children
        );
      }
    }]);

    return ROATheme;
  }(React.Component);


  ROATheme.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]).isRequired
  };

  var _jsxFileName$t = '/Users/jrusso/Documents/ROA/mirage/src/core/video/sources.base.js';

  function _classCallCheck$4(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var Sources = function Sources(inSources) {
    var _this = this;

    _classCallCheck$4(this, Sources);

    this.createSourceElement = function (source) {
      var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (typeof source === 'string') {
        var acceptedFormats = ['webm', 'ogv', 'mp4', 'flv'];
        var test = /\.([0-9a-z]{1,5})$/;
        var result = test.exec(source);
        var format = result[1];
        if (!acceptedFormats.includes(format)) {
          console.warn('An invalid file extension was provided for ' + source);
        }
        if (format === 'ogv') {
          format = 'ogg';
        }
        return React__default.createElement('source', { src: source, type: 'video/' + format, key: key, __source: {
            fileName: _jsxFileName$t,
            lineNumber: 20
          },
          __self: _this
        });
      } else {
        console.warn('A string was not provided as a source for ' + source);
      }
    };

    this.render = function () {
      var output = [];
      if (Array.isArray(_this.sources)) {
        output = _this.sources.map(function (source, index) {
          return _this.createSourceElement(source, index);
        });
      } else {
        output = [_this.createSourceElement(_this.sources)];
      }
      return output;
    };

    this.sources = inSources;
  };

  var _jsxFileName$u = '/Users/jrusso/Documents/ROA/mirage/src/core/video/video.js',
      _this$r = undefined;

  function _objectWithoutProperties$3(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  var Video = function Video(_ref) {
    var children = _ref.children,
        inSources = _ref.sources,
        props = _objectWithoutProperties$3(_ref, ['children', 'sources']);

    var sources = [];
    if (inSources) {
      sources = new Sources(inSources).render();
    }
    return React__default.createElement(
      'video',
      Object.assign({}, props, {
        __source: {
          fileName: _jsxFileName$u,
          lineNumber: 11
        },
        __self: _this$r
      }),
      sources.map(function (source, key) {
        return source;
      }),
      children && children
    );
  };

  Video.propTypes = {
    sources: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
  };

  Video.defaultProps = {
    autoPlay: true,
    playsInline: true,
    loop: true,
    muted: true

    /** @component */
  };

  var _jsxFileName$v = '/Users/jrusso/Documents/ROA/mirage/src/components/address/DefaultAddress.js',
      _this$s = undefined;

  var _templateObject$Z = _taggedTemplateLiteral$Z(['\n  ', ' {\n    display: inline-block;\n    width: 100%;\n    box-sizing: border-box;\n    &:first-of-type {\n      padding-right: 7rem;\n      ', '\n    }\n  }\n'], ['\n  ', ' {\n    display: inline-block;\n    width: 100%;\n    box-sizing: border-box;\n    &:first-of-type {\n      padding-right: 7rem;\n      ', '\n    }\n  }\n']),
      _templateObject2$d = _taggedTemplateLiteral$Z(['\n        padding-right: 5rem;\n      '], ['\n        padding-right: 5rem;\n      ']);

  function _taggedTemplateLiteral$Z(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var BaseDefaultAddress = function BaseDefaultAddress(_ref) {
    var _ref$address = _ref.address,
        first_name = _ref$address.first_name,
        last_name = _ref$address.last_name,
        address1 = _ref$address.address1,
        address2 = _ref$address.address2,
        city = _ref$address.city,
        state = _ref$address.state,
        zipcode = _ref$address.zipcode,
        className = _ref.className;

    return React__default.createElement(
      'section',
      { className: className, __source: {
          fileName: _jsxFileName$v,
          lineNumber: 20
        },
        __self: _this$s
      },
      React__default.createElement(
        LowercaseLabel,
        {
          __source: {
            fileName: _jsxFileName$v,
            lineNumber: 21
          },
          __self: _this$s
        },
        first_name,
        ' ',
        last_name
      ),
      React__default.createElement(
        LowercaseLabel,
        {
          __source: {
            fileName: _jsxFileName$v,
            lineNumber: 22
          },
          __self: _this$s
        },
        address1
      ),
      address2 && React__default.createElement(
        LowercaseLabel,
        {
          __source: {
            fileName: _jsxFileName$v,
            lineNumber: 23
          },
          __self: _this$s
        },
        address2
      ),
      React__default.createElement(
        LowercaseLabel,
        {
          __source: {
            fileName: _jsxFileName$v,
            lineNumber: 24
          },
          __self: _this$s
        },
        city,
        ', ',
        state,
        ' ',
        zipcode
      )
    );
  };

  var DefaultAddress = styled__default(BaseDefaultAddress)(_templateObject$Z, Label, function (props) {
    return props.theme.media.tablet(_templateObject2$d);
  });
  DefaultAddress.propTypes = {
    address: PropTypes.shape({
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      address1: PropTypes.string.isRequired,
      address2: PropTypes.string,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired
    })

    /** @component */
  };

  var defaultProps = {
    "header": "WHAT AWESOME PARENTS (LIKE YOU!) ARE SAYING",
    "quotes": ["“These are real clothes to LIVE and PLAY in! My son is full of personality and wears Rockets of Awesome to reflect that.”—Andrea", "“My spunky daughter loves to be an original and love that we've found a brand that can help her define her unique sense of self!”—Maddie", "“My son loves your stuff more than any of his other clothes, and digs through his drawers to find them! I’m not sure if it’s the super-softness or the graphics, but thank you!”—Courtney", "“It’s great to see my kids feel so confident that what they’re wearing expresses who they are as individuals.”—Robin"]
  };

  var _jsxFileName$w = '/Users/jrusso/Documents/ROA/mirage/src/components/customerQuotes/customerQuotes.js';

  var _createClass$2 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _templateObject$_ = _taggedTemplateLiteral$_(['\n  ', '\n  ', ', ', ' {\n    text-align: center;\n  }\n  ', ' {\n    color: ', ';\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n'], ['\n  ', '\n  ', ', ', ' {\n    text-align: center;\n  }\n  ', ' {\n    color: ', ';\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n']);

  function _taggedTemplateLiteral$_(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _classCallCheck$5(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$2(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var BaseCustomerQuotes = function (_React$Component) {
    _inherits$2(BaseCustomerQuotes, _React$Component);

    function BaseCustomerQuotes(props) {
      _classCallCheck$5(this, BaseCustomerQuotes);

      var _this = _possibleConstructorReturn$2(this, (BaseCustomerQuotes.__proto__ || Object.getPrototypeOf(BaseCustomerQuotes)).call(this, props));

      _this.quoteTimer = function () {
        _this.timer = setInterval(function () {
          var index = _this.state.index;
          var quotes = _this.props.quotes;

          if (index === quotes.length - 1) {
            _this.setState({
              index: 0,
              quote: quotes[0]
            });
          } else {
            _this.setState({
              index: index + 1,
              quote: quotes[index + 1]
            });
          }
        }, 5000);
      };

      _this.state = {
        index: 0,
        quote: undefined
      };
      return _this;
    }

    _createClass$2(BaseCustomerQuotes, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var quotes = this.props.quotes;

        this.setState({ quote: quotes[0] });
        this.quoteTimer();
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        clearInterval(this.timer);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            className = _props.className,
            header = _props.header;
        var _state = this.state,
            index = _state.index,
            quote = _state.quote;

        return React__default.createElement(
          'section',
          { className: className, __source: {
              fileName: _jsxFileName$w,
              lineNumber: 38
            },
            __self: this
          },
          React__default.createElement(
            FlexCol,
            { mobile: { width: 4 }, desktop: { width: 12 }, __source: {
                fileName: _jsxFileName$w,
                lineNumber: 39
              },
              __self: this
            },
            React__default.createElement(
              H1,
              {
                __source: {
                  fileName: _jsxFileName$w,
                  lineNumber: 40
                },
                __self: this
              },
              header
            )
          ),
          React__default.createElement(
            FlexCol,
            { mobile: { width: 4 }, desktop: { width: 6, span: 3 }, __source: {
                fileName: _jsxFileName$w,
                lineNumber: 42
              },
              __self: this
            },
            React__default.createElement(
              FadeInOut,
              { animate: !!index, __source: {
                  fileName: _jsxFileName$w,
                  lineNumber: 43
                },
                __self: this
              },
              React__default.createElement(
                H3,
                { lowercase: true, __source: {
                    fileName: _jsxFileName$w,
                    lineNumber: 43
                  },
                  __self: this
                },
                quote
              )
            )
          )
        );
      }
    }]);

    return BaseCustomerQuotes;
  }(React__default.Component);

  var CustomerQuotes$$1 = styled__default(BaseCustomerQuotes)(_templateObject$_, FlexRow, H1, H3, H3, function (props) {
    return props.theme.colors.rocketBlue;
  });

  CustomerQuotes$$1.defaultProps = Object.assign({}, defaultProps, {
    padding: true,
    constrained: true

    /** @component */
  });

  var _jsxFileName$x = '/Users/jrusso/Documents/ROA/mirage/src/components/inputs/Buttons/Button/Button.base.js',
      _this$t = undefined;

  var _templateObject$10 = _taggedTemplateLiteral$10(['\n  width: ', ';\n'], ['\n  width: ', ';\n']),
      _templateObject2$e = _taggedTemplateLiteral$10(['\n  cursor: pointer;\n  > * {\n    cursor: pointer;\n  }\n'], ['\n  cursor: pointer;\n  > * {\n    cursor: pointer;\n  }\n']),
      _templateObject3$9 = _taggedTemplateLiteral$10(['\n  cursor: wait;\n  > * {\n    cursor: wait;\n  }\n'], ['\n  cursor: wait;\n  > * {\n    cursor: wait;\n  }\n']),
      _templateObject4$3 = _taggedTemplateLiteral$10(['\n  cursor: not-allowed;\n  > * {\n    cursor: not-allowed;\n  }\n'], ['\n  cursor: not-allowed;\n  > * {\n    cursor: not-allowed;\n  }\n']),
      _templateObject5$2 = _taggedTemplateLiteral$10(['\n  ', '\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n']),
      _templateObject6$2 = _taggedTemplateLiteral$10(['\n  box-sizing: border-box;\n  height: 50px;\n  ', '\n  padding: 0 01.5rem;\n\n  text-align: center;\n\n  letter-spacing: 1px;\n  ', '\n\n  border-radius: .2rem;\n\n  font-family: ', ';\n  font-size: 1.4rem;\n  font-weight: 500;\n\n  transition:\n    background-color 0.25s ease-in,\n    border-color 0.25s ease-in,\n    color 0.25s ease-in;\n\n  ', ' {\n    display: inline-block;\n  }\n\n  :hover {\n    ', '\n  }\n\n  :focus {\n    outline: 0;\n  },\n\n  :active {\n    border-style: solid;\n    transform: translateX(.2rem);\n  }\n  > span {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    > * {\n      vertical-align: middle;\n    }\n  }\n'], ['\n  box-sizing: border-box;\n  height: 50px;\n  ', '\n  padding: 0 01.5rem;\n\n  text-align: center;\n\n  letter-spacing: 1px;\n  ', '\n\n  border-radius: .2rem;\n\n  font-family: ', ';\n  font-size: 1.4rem;\n  font-weight: 500;\n\n  transition:\n    background-color 0.25s ease-in,\n    border-color 0.25s ease-in,\n    color 0.25s ease-in;\n\n  ', ' {\n    display: inline-block;\n  }\n\n  :hover {\n    ', '\n  }\n\n  :focus {\n    outline: 0;\n  },\n\n  :active {\n    border-style: solid;\n    transform: translateX(.2rem);\n  }\n  > span {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    > * {\n      vertical-align: middle;\n    }\n  }\n']);

  function _taggedTemplateLiteral$10(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _objectWithoutProperties$4(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  var CustomButton = function CustomButton(_ref) {
    var Checkmark = _ref.checkmark,
        children = _ref.children,
        loading = _ref.loading,
        selected = _ref.selected,
        showCheckmark = _ref.showCheckmark,
        Spinner = _ref.spinner,
        props = _objectWithoutProperties$4(_ref, ['checkmark', 'children', 'loading', 'selected', 'showCheckmark', 'spinner']);

    delete props.width;
    delete props.sentanceCase;
    return React__default.createElement(
      'button',
      Object.assign({}, props, {
        __source: {
          fileName: _jsxFileName$x,
          lineNumber: 17
        },
        __self: _this$t
      }),
      React__default.createElement(
        'span',
        {
          __source: {
            fileName: _jsxFileName$x,
            lineNumber: 18
          },
          __self: _this$t
        },
        selected && showCheckmark && Checkmark && React__default.createElement(Checkmark, {
          __source: {
            fileName: _jsxFileName$x,
            lineNumber: 19
          },
          __self: _this$t
        }),
        !loading && children,
        loading && React__default.createElement(Spinner, { size: '4rem', __source: {
            fileName: _jsxFileName$x,
            lineNumber: 21
          },
          __self: _this$t
        })
      )
    );
  };

  var setWidth = styled.css(_templateObject$10, function (props) {
    return props.width;
  });

  var pointerCursor = styled.css(_templateObject2$e);

  var waitCursor = styled.css(_templateObject3$9);

  var notAllowedCursor = styled.css(_templateObject4$3);

  var setCursor = styled.css(_templateObject5$2, function (props) {
    return !props.loading && !props.disabled && pointerCursor;
  }, function (props) {
    return props.loading && waitCursor;
  }, function (props) {
    return props.disabled && notAllowedCursor;
  });

  var BaseButton = styled__default(CustomButton)(_templateObject6$2, function (props) {
    return props.width && setWidth;
  }, function (props) {
    return props.sentanceCase ? 'text-transform: inherit;' : 'text-transform: uppercase;';
  }, function (props) {
    return props.theme.fonts.primaryFont;
  }, function (props) {
    return props.spinner;
  }, function (props) {
    return setCursor;
  });

  var buttonPropCheck = function buttonPropCheck(props, propName, componentName) {
    if (props.disabled && props.loading) {
      return new Error('You have both the disabled and loading props set in ' + componentName + ', please only set one or neither of these props at a time.');
    }
    return null;
  };

  BaseButton.propTypes = {
    buttonPropCheck: buttonPropCheck,
    checkmark: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
    sentanceCase: PropTypes.bool,
    spinner: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
    width: PropTypes.string
  };

  var _templateObject$11 = _taggedTemplateLiteral$11(['\n  color: ', ';\n  border-color: ', ';\n  &:hover {\n    color: ', ';\n    border-color: ', ';\n  }\n'], ['\n  color: ', ';\n  border-color: ', ';\n  &:hover {\n    color: ', ';\n    border-color: ', ';\n  }\n']),
      _templateObject2$f = _taggedTemplateLiteral$11(['\n  color: ', ';\n  border-color: ', ';\n'], ['\n  color: ', ';\n  border-color: ', ';\n']),
      _templateObject3$a = _taggedTemplateLiteral$11(['\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n  ', '\n']),
      _templateObject4$4 = _taggedTemplateLiteral$11(['\n  background-color: rgba(255, 255, 255, 0);\n  ', '\n'], ['\n  background-color: rgba(255, 255, 255, 0);\n  ', '\n']);

  function _taggedTemplateLiteral$11(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var defaultStyle = styled.css(_templateObject$11, function (props) {
    return props.theme.colors.rocketBlue;
  }, function (props) {
    return props.theme.colors.rocketBlue;
  }, function (props) {
    return props.theme.colors.rocketBlueHover;
  }, function (props) {
    return props.theme.colors.rocketBlueHover;
  });
  var disabledOrLoading = styled.css(_templateObject2$f, function (props) {
    return props.theme.colors.loading;
  }, function (props) {
    return props.theme.colors.loading;
  });
  var selected = styled.css(_templateObject2$f, function (props) {
    return props.theme.colors.navy;
  }, function (props) {
    return props.theme.colors.navy;
  });

  var colorButton = styled.css(_templateObject3$a, function (props) {
    return !props.selected && !props.disabled && !props.loading && defaultStyle;
  }, function (props) {
    return props.selected && selected;
  }, function (props) {
    return props.disabled && disabledOrLoading;
  }, function (props) {
    return props.loading && disabledOrLoading;
  });

  var BlueBorderButton = styled__default(BaseButton)(_templateObject4$4, function (props) {
    return colorButton;
  });

  BlueBorderButton.propTypes = {
    checkmark: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
    spinner: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        white: PropTypes.string
      })
    })
  };

  BlueBorderButton.defaultProps = {
    checkmark: NavyCheckmark,
    spinner: GraySpinner

    /** @component */
  };

  var _templateObject$12 = _taggedTemplateLiteral$12(['\n  background-color: ', ';\n  &:hover {\n    background-color: ', ';\n  }\n'], ['\n  background-color: ', ';\n  &:hover {\n    background-color: ', ';\n  }\n']),
      _templateObject2$g = _taggedTemplateLiteral$12(['\n  background-color: ', ';\n'], ['\n  background-color: ', ';\n']),
      _templateObject3$b = _taggedTemplateLiteral$12(['\n  background-color: ', '\n'], ['\n  background-color: ', '\n']),
      _templateObject4$5 = _taggedTemplateLiteral$12(['\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n  ', '\n']),
      _templateObject5$3 = _taggedTemplateLiteral$12(['\n  color: ', ';\n  border-color: transparent;\n\n  ', '\n'], ['\n  color: ', ';\n  border-color: transparent;\n\n  ', '\n']);

  function _taggedTemplateLiteral$12(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var defaultStyle$1 = styled.css(_templateObject$12, function (props) {
    return props.theme.colors.rocketBlue;
  }, function (props) {
    return props.theme.colors.rocketBlueHover;
  });
  var disabledOrLoading$1 = styled.css(_templateObject2$g, function (props) {
    return props.theme.colors.loading;
  });
  var selected$1 = styled.css(_templateObject3$b, function (props) {
    return props.theme.colors.navy;
  });

  var backgroundColor = styled.css(_templateObject4$5, function (props) {
    return !props.selected && !props.disabled && !props.loading && defaultStyle$1;
  }, function (props) {
    return props.selected && selected$1;
  }, function (props) {
    return props.disabled && disabledOrLoading$1;
  }, function (props) {
    return props.loading && disabledOrLoading$1;
  });

  var Button = styled__default(BaseButton)(_templateObject5$3, function (props) {
    return props.theme.colors.white;
  }, function (props) {
    return backgroundColor;
  });

  Button.propTypes = {
    checkmark: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
    spinner: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        rocketBlue: PropTypes.string,
        white: PropTypes.string
      })
    })
  };

  Button.defaultProps = {
    checkmark: WhiteCheckmark,
    spinner: WhiteSpinner

    /** @component */
  };

  var _templateObject$13 = _taggedTemplateLiteral$13(['\n  color: ', ';\n  border-color: ', ';\n  &:hover {\n    background-color: rgba(255, 255, 255, 0.1);\n  }\n'], ['\n  color: ', ';\n  border-color: ', ';\n  &:hover {\n    background-color: rgba(255, 255, 255, 0.1);\n  }\n']),
      _templateObject2$h = _taggedTemplateLiteral$13(['\n  color: ', ';\n  border-color: ', ';\n'], ['\n  color: ', ';\n  border-color: ', ';\n']),
      _templateObject3$c = _taggedTemplateLiteral$13(['\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n  ', '\n']),
      _templateObject4$6 = _taggedTemplateLiteral$13(['\n  background-color: rgba(255, 255, 255, 0);\n  ', '\n'], ['\n  background-color: rgba(255, 255, 255, 0);\n  ', '\n']);

  function _taggedTemplateLiteral$13(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var defaultStyle$2 = styled.css(_templateObject$13, function (props) {
    return props.theme.colors.white;
  }, function (props) {
    return props.theme.colors.white;
  });

  var disabledOrLoading$2 = styled.css(_templateObject2$h, function (props) {
    return props.theme.colors.loading;
  }, function (props) {
    return props.theme.colors.loading;
  });

  var selected$2 = styled.css(_templateObject2$h, function (props) {
    return props.theme.colors.navy;
  }, function (props) {
    return props.theme.colors.navy;
  });

  var colorButton$1 = styled.css(_templateObject3$c, function (props) {
    return !props.selected && !props.disabled && !props.loading && defaultStyle$2;
  }, function (props) {
    return props.selected && selected$2;
  }, function (props) {
    return props.disabled && disabledOrLoading$2;
  }, function (props) {
    return props.loading && disabledOrLoading$2;
  });

  var WhiteBorderButton = styled__default(BaseButton)(_templateObject4$6, function (props) {
    return colorButton$1;
  });

  WhiteBorderButton.propTypes = {
    checkmark: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
    spinner: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        white: PropTypes.string
      })
    })
  };

  WhiteBorderButton.defaultProps = {
    checkmark: NavyCheckmark,
    spinner: GraySpinner

    /** @component */
  };

  var _templateObject$14 = _taggedTemplateLiteral$14(['\n  color: ', ';\n  border-color: transparent;\n  background-color: ', ';\n  &:hover {\n    background-color: ', ';\n  }\n'], ['\n  color: ', ';\n  border-color: transparent;\n  background-color: ', ';\n  &:hover {\n    background-color: ', ';\n  }\n']);

  function _taggedTemplateLiteral$14(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var YellowButton = styled__default(BaseButton)(_templateObject$14, function (props) {
    return props.theme.colors.navy;
  }, function (props) {
    return props.theme.colors.yellow;
  }, function (props) {
    return props.theme.colors.yellowHover;
  });

  YellowButton.propTypes = {
    checkmark: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
    spinner: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        navy: PropTypes.string,
        yellow: PropTypes.string
      })
    })
  };

  YellowButton.defaultProps = {
    checkmark: NavyCheckmark,
    spinner: NavySpinner

    /** @component */
  };

  var _jsxFileName$y = '/Users/jrusso/Documents/ROA/mirage/src/components/inputs/Buttons/ImageButton/ImageButton.base.js',
      _this$u = undefined;

  var _templateObject$15 = _taggedTemplateLiteral$15(['\n  ', ';\n'], ['\n  ', ';\n']),
      _templateObject2$i = _taggedTemplateLiteral$15(['\n  position: relative;\n  display: flex;\n  ', '\n  overflow: hidden;\n\n  > button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    box-sizing: border-box;\n    height: 30px;\n    ', '\n    padding: 0 1.5rem;\n\n    text-align: center;\n\n    letter-spacing: .1rem;\n    ', '\n\n    font-family: ', ';\n    font-size: 1.4rem;\n    font-weight: 500;\n    border: none;\n\n    .arrow {\n      margin-left: 1.2rem;\n    }\n  }\n\n  > .borderBottom {\n    display: block;\n    height: .2rem;\n    width: 100%;\n    transform: translateX(-100%);\n    transition transform 0.25s ease-in-out;\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    z-index: 1;\n  }\n\n  :hover {\n    > button {\n      cursor: pointer;\n    }\n    > .borderBottom {\n      transform: translateX(0);\n      cursor: pointer;\n    }\n  }\n'], ['\n  position: relative;\n  display: flex;\n  ', '\n  overflow: hidden;\n\n  > button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    box-sizing: border-box;\n    height: 30px;\n    ', '\n    padding: 0 1.5rem;\n\n    text-align: center;\n\n    letter-spacing: .1rem;\n    ', '\n\n    font-family: ', ';\n    font-size: 1.4rem;\n    font-weight: 500;\n    border: none;\n\n    .arrow {\n      margin-left: 1.2rem;\n    }\n  }\n\n  > .borderBottom {\n    display: block;\n    height: .2rem;\n    width: 100%;\n    transform: translateX(-100%);\n    transition transform 0.25s ease-in-out;\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    z-index: 1;\n  }\n\n  :hover {\n    > button {\n      cursor: pointer;\n    }\n    > .borderBottom {\n      transform: translateX(0);\n      cursor: pointer;\n    }\n  }\n']);

  function _taggedTemplateLiteral$15(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _objectWithoutProperties$5(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  var CustomButton$1 = function CustomButton(_ref) {
    var arrow = _ref.arrow,
        className = _ref.className,
        children = _ref.children,
        props = _objectWithoutProperties$5(_ref, ['arrow', 'className', 'children']);

    return React__default.createElement(
      'div',
      { className: className, __source: {
          fileName: _jsxFileName$y,
          lineNumber: 7
        },
        __self: _this$u
      },
      React__default.createElement(
        'button',
        Object.assign({}, props, {
          __source: {
            fileName: _jsxFileName$y,
            lineNumber: 8
          },
          __self: _this$u
        }),
        children,
        arrow && React__default.createElement(
          'span',
          { className: 'arrow', __source: {
              fileName: _jsxFileName$y,
              lineNumber: 10
            },
            __self: _this$u
          },
          '\u2192'
        )
      ),
      React__default.createElement('span', { className: 'borderBottom', __source: {
          fileName: _jsxFileName$y,
          lineNumber: 12
        },
        __self: _this$u
      })
    );
  };

  var setWidth$1 = styled.css(_templateObject$15, function (props) {
    return 'width: ' + props.width;
  });

  var BaseImageButton = styled__default(CustomButton$1)(_templateObject2$i, function (props) {
    return setWidth$1;
  }, function (props) {
    return setWidth$1;
  }, function (props) {
    return props.sentanceCase ? 'text-transform: inherit;' : 'text-transform: uppercase;';
  }, function (props) {
    return props.theme.fonts.primaryFont;
  });

  BaseImageButton.propTypes = {
    arrow: PropTypes.bool,
    sentanceCase: PropTypes.bool,
    width: PropTypes.string
  };

  BaseImageButton.defaultProps = {
    width: '35rem'

    /** @component */
  };

  var _templateObject$16 = _taggedTemplateLiteral$16(['\n  > button {\n    background-color: ', ';\n    color: ', ';\n  }\n  > .borderBottom {\n    background-color: ', ';\n  }\n'], ['\n  > button {\n    background-color: ', ';\n    color: ', ';\n  }\n  > .borderBottom {\n    background-color: ', ';\n  }\n']);

  function _taggedTemplateLiteral$16(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var ImageButtonWhite = styled__default(BaseImageButton)(_templateObject$16, function (props) {
    return props.theme.colors.white;
  }, function (props) {
    return props.theme.colors.rocketBlue;
  }, function (props) {
    return props.theme.colors.rocketBlue;
  });

  ImageButtonWhite.propTypes = {
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        rocketBlue: PropTypes.string,
        white: PropTypes.string
      })
    })

    /** @component */
  };

  var _templateObject$17 = _taggedTemplateLiteral$17(['\n  > button {\n    background-color: ', ';\n    color: ', ';\n  }\n  > .borderBottom {\n    background-color: ', ';\n  }\n'], ['\n  > button {\n    background-color: ', ';\n    color: ', ';\n  }\n  > .borderBottom {\n    background-color: ', ';\n  }\n']);

  function _taggedTemplateLiteral$17(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var ImageButtonBlue = styled__default(BaseImageButton)(_templateObject$17, function (props) {
    return props.theme.colors.rocketBlue;
  }, function (props) {
    return props.theme.colors.white;
  }, function (props) {
    return props.theme.colors.white;
  });

  ImageButtonBlue.propTypes = {
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        rocketBlue: PropTypes.string,
        white: PropTypes.string
      })
    })

    /** @component */
  };

  var _templateObject$18 = _taggedTemplateLiteral$18(['\n  > button {\n    background-color: ', ';\n    color: ', ';\n  }\n  > .borderBottom {\n    background-color: ', ';\n  }\n'], ['\n  > button {\n    background-color: ', ';\n    color: ', ';\n  }\n  > .borderBottom {\n    background-color: ', ';\n  }\n']);

  function _taggedTemplateLiteral$18(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var ImageButtonBlack = styled__default(BaseImageButton)(_templateObject$18, function (props) {
    return props.theme.colors.black;
  }, function (props) {
    return props.theme.colors.white;
  }, function (props) {
    return props.theme.colors.yellow;
  });

  ImageButtonBlack.propTypes = {
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        black: PropTypes.string,
        yellow: PropTypes.string,
        white: PropTypes.string
      })
    })

    /** @component */
  };

  var _jsxFileName$z = '/Users/jrusso/Documents/ROA/mirage/src/components/inputs/Checkbox/Check.base.js',
      _this$v = undefined;

  var _templateObject$19 = _taggedTemplateLiteral$19(['\n  from {\n    stroke-dashoffset: 200;\n  }\n  to {\n    stroke-dashoffset: 0;\n  }\n'], ['\n  from {\n    stroke-dashoffset: 200;\n  }\n  to {\n    stroke-dashoffset: 0;\n  }\n']),
      _templateObject2$j = _taggedTemplateLiteral$19(['\n  animation: ', ' 0.25s linear forwards;\n\n  stroke: ', ';\n  stroke-dasharray: 200;\n  stroke-dashoffset: 0;\n'], ['\n  animation: ', ' 0.25s linear forwards;\n\n  stroke: ', ';\n  stroke-dasharray: 200;\n  stroke-dashoffset: 0;\n']),
      _templateObject3$d = _taggedTemplateLiteral$19(['\n  ', '\n  fill: none;\n  stroke-width: 20;\n  stroke-linecap: round;\n  stroke: ', ';\n'], ['\n  ', '\n  fill: none;\n  stroke-width: 20;\n  stroke-linecap: round;\n  stroke: ', ';\n']);

  function _taggedTemplateLiteral$19(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var BaseCheck = function BaseCheck(_ref) {
    var className = _ref.className;

    return React__default.createElement('polyline', { className: className, points: '38.75 98.75 77.75 134.75 151.25 55.25', __source: {
        fileName: _jsxFileName$z,
        lineNumber: 7
      },
      __self: _this$v
    });
  };

  var dash = styled.keyframes(_templateObject$19);

  var checked = styled.css(_templateObject2$j, dash, function (props) {
    return props.theme.colors.white;
  });

  var Check = styled__default(BaseCheck)(_templateObject3$d, function (props) {
    return props.checked && checked;
  }, function (props) {
    return props.theme.colors.white;
  });

  Check.propTypes = {
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        white: PropTypes.string
      })
    })
  };

  var _jsxFileName$A = '/Users/jrusso/Documents/ROA/mirage/src/components/inputs/Checkbox/Rect.base.js',
      _this$w = undefined;

  var _templateObject$1a = _taggedTemplateLiteral$1a(['\n  from {\n    fill: rgba(0,115,209, 1.0);\n  }\n  to {\n    fill: rgba(255, 255, 255, 0);\n  }\n'], ['\n  from {\n    fill: rgba(0,115,209, 1.0);\n  }\n  to {\n    fill: rgba(255, 255, 255, 0);\n  }\n']),
      _templateObject2$k = _taggedTemplateLiteral$1a(['\n  from {\n    fill: rgba(255, 255, 255, 0);\n  }\n  to {\n    fill: rgba(0,115,209, 1.0);\n  }\n'], ['\n  from {\n    fill: rgba(255, 255, 255, 0);\n  }\n  to {\n    fill: rgba(0,115,209, 1.0);\n  }\n']),
      _templateObject3$e = _taggedTemplateLiteral$1a(['\n  animation: ', ' 0.25s linear forwards;\n\n  fill: stroke: ', ';\n'], ['\n  animation: ', ' 0.25s linear forwards;\n\n  fill: stroke: ', ';\n']),
      _templateObject4$7 = _taggedTemplateLiteral$1a(['\n  animation: ', ' 0.25s linear forwards;\n\n  stroke: transparent;\n  stroke-width: 10;\n  stroke-linecap: round;\n  stroke-dashoffset: 200;\n  fill: none;\n'], ['\n  animation: ', ' 0.25s linear forwards;\n\n  stroke: transparent;\n  stroke-width: 10;\n  stroke-linecap: round;\n  stroke-dashoffset: 200;\n  fill: none;\n']),
      _templateObject5$4 = _taggedTemplateLiteral$1a(['\n  ', '\n\n  stroke: ', ';\n  stroke-width: 20;\n  stroke-linecap: round;\n'], ['\n  ', '\n\n  stroke: ', ';\n  stroke-width: 20;\n  stroke-linecap: round;\n']);

  function _taggedTemplateLiteral$1a(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var fillOut = styled.keyframes(_templateObject$1a);

  var fillIn = styled.keyframes(_templateObject2$k);

  var checked$1 = styled.css(_templateObject3$e, fillIn, function (props) {
    return props.theme.colors.rocketBlue;
  });

  var unchecked = styled.css(_templateObject4$7, fillOut);

  var Rect = function Rect(_ref) {
    var className = _ref.className;

    return React__default.createElement('rect', { className: className, x: '2.5', y: '2.5', width: '185', height: '185', rx: '10', ry: '10', __source: {
        fileName: _jsxFileName$A,
        lineNumber: 41
      },
      __self: _this$w
    });
  };

  var StyledRect = styled__default(Rect)(_templateObject5$4, function (props) {
    return props.checked ? checked$1 : unchecked;
  }, function (props) {
    return props.theme.colors.rocketBlue;
  });

  StyledRect.propTypes = {
    checked: PropTypes.bool,
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        rocketBlue: PropTypes.string
      })
    })
  };

  var _jsxFileName$B = '/Users/jrusso/Documents/ROA/mirage/src/components/inputs/Checkbox/CheckboxSVG.base.js',
      _this$x = undefined;

  var _templateObject$1b = _taggedTemplateLiteral$1b(['\n  width: 2.5rem;\n  height: 2.5rem;\n  margin-right: .9rem;\n'], ['\n  width: 2.5rem;\n  height: 2.5rem;\n  margin-right: .9rem;\n']);

  function _taggedTemplateLiteral$1b(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _objectWithoutProperties$6(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  var CheckboxSVG = function CheckboxSVG(_ref) {
    var className = _ref.className,
        props = _objectWithoutProperties$6(_ref, ['className']);

    return React__default.createElement(
      'svg',
      { className: className, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 190 190', __source: {
          fileName: _jsxFileName$B,
          lineNumber: 10
        },
        __self: _this$x
      },
      React__default.createElement(StyledRect, Object.assign({}, props, {
        __source: {
          fileName: _jsxFileName$B,
          lineNumber: 11
        },
        __self: _this$x
      })),
      React__default.createElement(Check, Object.assign({}, props, {
        __source: {
          fileName: _jsxFileName$B,
          lineNumber: 12
        },
        __self: _this$x
      }))
    );
  };

  var StyledCheckboxSVG = styled__default(CheckboxSVG)(_templateObject$1b);

  StyledCheckboxSVG.propTypes = {
    checked: PropTypes.bool
  };

  StyledCheckboxSVG.defaultProps = {
    checked: false
  };

  var _jsxFileName$C = '/Users/jrusso/Documents/ROA/mirage/src/components/inputs/Checkbox/Checkbox.js';

  var _createClass$3 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _templateObject$1c = _taggedTemplateLiteral$1c(['\n  display: flex;\n  align-items: center;\n  font-size: 1.6rem;\n  font-weight: 400;\n\n  input {\n    width: 0;\n    height: 0;\n\n    opacity: 0;\n  }\n\n  input:focused + ', ' {\n    stroke-width: 40;\n  }\n'], ['\n  display: flex;\n  align-items: center;\n  font-size: 1.6rem;\n  font-weight: 400;\n\n  input {\n    width: 0;\n    height: 0;\n\n    opacity: 0;\n  }\n\n  input:focused + ', ' {\n    stroke-width: 40;\n  }\n']);

  function _taggedTemplateLiteral$1c(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _objectWithoutProperties$7(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _classCallCheck$6(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$3(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$3(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var CheckboxBase = function (_React$Component) {
    _inherits$3(CheckboxBase, _React$Component);

    function CheckboxBase() {
      _classCallCheck$6(this, CheckboxBase);

      return _possibleConstructorReturn$3(this, (CheckboxBase.__proto__ || Object.getPrototypeOf(CheckboxBase)).apply(this, arguments));
    }

    _createClass$3(CheckboxBase, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            className = _props.className,
            input = _props.input,
            label = _props.label,
            props = _objectWithoutProperties$7(_props, ['className', 'input', 'label']);

        var checked = input.value;
        return React__default.createElement(
          Label,
          Object.assign({}, props, { lowercase: true, className: className, __source: {
              fileName: _jsxFileName$C,
              lineNumber: 14
            },
            __self: this
          }),
          React__default.createElement('input', Object.assign({
            type: 'checkbox'
          }, input, {
            checked: checked,
            __source: {
              fileName: _jsxFileName$C,
              lineNumber: 15
            },
            __self: this
          })),
          React__default.createElement(StyledCheckboxSVG, Object.assign({}, props, { checked: checked, __source: {
              fileName: _jsxFileName$C,
              lineNumber: 20
            },
            __self: this
          })),
          label
        );
      }
    }]);

    return CheckboxBase;
  }(React__default.Component);

  CheckboxBase.propTypes = {
    className: PropTypes.string,
    input: PropTypes.shape({
      value: PropTypes.bool
    }).isRequired,
    label: PropTypes.string
  };

  CheckboxBase.defaultProps = {
    input: {
      value: false
    }
  };

  var Checkbox = styled__default(CheckboxBase)(_templateObject$1c, StyledRect);

  Checkbox.propTypes = {
    className: PropTypes.string,
    input: PropTypes.object.isRequired,
    label: PropTypes.string,
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        rocketBlue: PropTypes.string,
        white: PropTypes.string
      })
    })

    /** @component */
  };

  var _jsxFileName$D = '/Users/jrusso/Documents/ROA/mirage/src/components/inputs/SizeRadio.js',
      _this$y = undefined;

  var _templateObject$1d = _taggedTemplateLiteral$1d(['\n  color: ', ';\n  border: 1px solid ', ';\n  background-color: ', ';\n'], ['\n  color: ', ';\n  border: 1px solid ', ';\n  background-color: ', ';\n']),
      _templateObject2$l = _taggedTemplateLiteral$1d(['\n  position: relative;\n  > input {\n    position: absolute;\n\n    width: 0;\n    height: 0;\n\n    opacity: 0;\n  }\n  > label {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    width: 64px;\n    height: 64px;\n\n    cursor: pointer;\n    transition-timing-function: ease-in-out;\n    transition-duration: 0.25s;\n    transition-property: background-color, border-color, color;\n    text-align: center;\n    letter-spacing: normal;\n\n    color: ', ';\n    border: 1px solid ', ';\n    border-radius: 50%;\n    background-color: ', ';\n\n    font-family: ', ';\n    font-size: 16px;\n    font-weight: 500;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n  }\n\n  > input:checked + label {\n    ', '\n  }\n'], ['\n  position: relative;\n  > input {\n    position: absolute;\n\n    width: 0;\n    height: 0;\n\n    opacity: 0;\n  }\n  > label {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    width: 64px;\n    height: 64px;\n\n    cursor: pointer;\n    transition-timing-function: ease-in-out;\n    transition-duration: 0.25s;\n    transition-property: background-color, border-color, color;\n    text-align: center;\n    letter-spacing: normal;\n\n    color: ', ';\n    border: 1px solid ', ';\n    border-radius: 50%;\n    background-color: ', ';\n\n    font-family: ', ';\n    font-size: 16px;\n    font-weight: 500;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n  }\n\n  > input:checked + label {\n    ', '\n  }\n']);

  function _taggedTemplateLiteral$1d(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _objectWithoutProperties$8(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  var BaseSizeRadio = function BaseSizeRadio(_ref) {
    var children = _ref.children,
        className = _ref.className,
        input = _ref.input,
        props = _objectWithoutProperties$8(_ref, ['children', 'className', 'input']);

    return React__default.createElement(
      'div',
      { className: className, __source: {
          fileName: _jsxFileName$D,
          lineNumber: 7
        },
        __self: _this$y
      },
      React__default.createElement('input', Object.assign({ id: input.value, type: 'radio' }, input, {
        __source: {
          fileName: _jsxFileName$D,
          lineNumber: 8
        },
        __self: _this$y
      })),
      React__default.createElement(
        'label',
        { htmlFor: input.value, __source: {
            fileName: _jsxFileName$D,
            lineNumber: 9
          },
          __self: _this$y
        },
        children
      )
    );
  };

  var checked$2 = styled.css(_templateObject$1d, function (props) {
    return props.theme.colors.white;
  }, function (props) {
    return props.theme.colors.rocketBlue;
  }, function (props) {
    return props.theme.colors.rocketBlue;
  });

  var SizeRadio = styled__default(BaseSizeRadio)(_templateObject2$l, function (props) {
    return props.theme.colors.navy;
  }, function (props) {
    return props.theme.colors.gray[5];
  }, function (props) {
    return props.theme.colors.gray[0];
  }, function (props) {
    return props.theme.fonts.primaryFont;
  }, function (props) {
    return checked$2;
  });

  SizeRadio.propTypes = {
    children: PropTypes.string,
    input: PropTypes.object,
    theme: PropTypes.shape({
      fonts: PropTypes.shape({
        primaryFont: PropTypes.string.isRequired
      }),
      colors: PropTypes.shape({
        navy: PropTypes.string.isRequired,
        rocketBlue: PropTypes.string.isRequired,
        white: PropTypes.string.isRequired,
        gray: PropTypes.array.isRequired
      })
    })

    /** @component */
  };

  var _templateObject$1e = _taggedTemplateLiteral$1e(['\ntransition: color 0.25s ease-in-out, border-bottom-color 0.25s ease-in-out;\n\ntext-decoration: none;\ntext-transform: ', ';\n\nborder-bottom: 0.2rem solid;\nborder-bottom-color: transparent;\n\nfont-family: ', ';\nfont-size: 1.4rem;\nfont-weight: 500;\n&:hover {\n  text-decoration: none;\n\n  pointer: cursor;\n}\n'], ['\ntransition: color 0.25s ease-in-out, border-bottom-color 0.25s ease-in-out;\n\ntext-decoration: none;\ntext-transform: ', ';\n\nborder-bottom: 0.2rem solid;\nborder-bottom-color: transparent;\n\nfont-family: ', ';\nfont-size: 1.4rem;\nfont-weight: 500;\n&:hover {\n  text-decoration: none;\n\n  pointer: cursor;\n}\n']),
      _templateObject2$m = _taggedTemplateLiteral$1e(['\n  ', '\n'], ['\n  ', '\n']);

  function _taggedTemplateLiteral$1e(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var baseLinkStyles = styled.css(_templateObject$1e, function (props) {
    return props.uppercase ? 'uppercase' : 'initial';
  }, function (props) {
    return props.theme.fonts.primaryFont;
  });

  var BaseLink = styled__default.a(_templateObject2$m, function (props) {
    return baseLinkStyles;
  });

  BaseLink.propTypes = {
    theme: PropTypes.shape({
      fonts: PropTypes.shape({
        primaryFont: PropTypes.string
      })
    }),
    uppercase: PropTypes.bool.isRequired
  };

  BaseLink.defaultProps = {
    uppercase: false

    /** @component */
  };

  var _templateObject$1f = _taggedTemplateLiteral$1f(['\n  color:  ', ';\n  &:active, &:focus, &:hover, &:visited {\n    color: ', ';\n    ', '\n  }\n'], ['\n  color:  ', ';\n  &:active, &:focus, &:hover, &:visited {\n    color: ', ';\n    ', '\n  }\n']);

  function _taggedTemplateLiteral$1f(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var Link = styled__default(BaseLink)(_templateObject$1f, function (props) {
    return props.theme.colors.rocketBlue;
  }, function (props) {
    return props.theme.colors.navy;
  }, function (props) {
    return props.underline ? 'border-bottom-color: ' + props.theme.colors.navy + ';' : '';
  });

  Link.propTypes = {
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        rocketBlue: PropTypes.string
      })
    }),
    underline: PropTypes.bool.isRequired
  };

  Link.defaultProps = {
    underline: true
    /** @component */
  };

  var _templateObject$1g = _taggedTemplateLiteral$1g(['\n  color:  ', ';\n  &:active, &:focus, &:hover, &:visited {\n    color: ', ';\n    ', '\n  }\n'], ['\n  color:  ', ';\n  &:active, &:focus, &:hover, &:visited {\n    color: ', ';\n    ', '\n  }\n']);

  function _taggedTemplateLiteral$1g(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var NavyLink = styled__default(BaseLink)(_templateObject$1g, function (props) {
    return props.theme.colors.navy;
  }, function (props) {
    return props.theme.colors.navy;
  }, function (props) {
    return props.underline ? 'border-bottom-color: ' + props.theme.colors.navy + ';' : '';
  });

  NavyLink.propTypes = {
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        navy: PropTypes.string
      })
    }),
    underline: PropTypes.bool.isRequired
  };

  NavyLink.defaultProps = {
    underline: true

    /** @component */
  };

  var _templateObject$1h = _taggedTemplateLiteral$1h(['\n  color:  ', ';\n  &:active, &:focus, &:hover, &:visited {\n    color: ', ';\n    ', '\n  }\n'], ['\n  color:  ', ';\n  &:active, &:focus, &:hover, &:visited {\n    color: ', ';\n    ', '\n  }\n']);

  function _taggedTemplateLiteral$1h(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var WhiteLink = styled__default(BaseLink)(_templateObject$1h, function (props) {
    return props.theme.colors.white;
  }, function (props) {
    return props.theme.colors.white;
  }, function (props) {
    return props.underline ? 'border-bottom-color: ' + props.theme.colors.white + ';' : '';
  });

  WhiteLink.propTypes = {
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        white: PropTypes.string
      })
    }),
    underline: PropTypes.bool.isRequired
  };

  WhiteLink.defaultProps = {
    underline: true

    /** @component */
  };

  var _jsxFileName$E = '/Users/jrusso/Documents/ROA/mirage/src/components/payment/DefaultPayment.js',
      _this$z = undefined;

  var _templateObject$1i = _taggedTemplateLiteral$1i(['\n  display: flex;\n  align-items: flex-start;\n  ', ' {\n    display: inline-block;\n    width: 2.5rem;\n    margin-top: .6rem;\n    margin-right: 1rem;\n    flex: 0 0 auto;\n  }\n  > aside {\n    display: inline-block;\n  }\n  ', ' {\n    display: inline-block;\n    box-sizing: border-box;\n    width: 100%;\n    &:first-of-type {\n      padding-right: 7rem;\n      ', '\n    }\n  }\n'], ['\n  display: flex;\n  align-items: flex-start;\n  ', ' {\n    display: inline-block;\n    width: 2.5rem;\n    margin-top: .6rem;\n    margin-right: 1rem;\n    flex: 0 0 auto;\n  }\n  > aside {\n    display: inline-block;\n  }\n  ', ' {\n    display: inline-block;\n    box-sizing: border-box;\n    width: 100%;\n    &:first-of-type {\n      padding-right: 7rem;\n      ', '\n    }\n  }\n']),
      _templateObject2$n = _taggedTemplateLiteral$1i(['\n        padding-right: 5rem;\n      '], ['\n        padding-right: 5rem;\n      ']);

  function _taggedTemplateLiteral$1i(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var prettyBrand = function prettyBrand(brand) {
    return '' + brand.charAt(0).toUpperCase() + brand.slice(1);
  };
  var cardData = function cardData(brand, last_4_digits) {
    return prettyBrand(brand) + ' ending in ****' + last_4_digits;
  };

  var BaseDefaultPayment = function BaseDefaultPayment(_ref) {
    var _ref$card = _ref.card,
        brand = _ref$card.brand,
        exp_month = _ref$card.exp_month,
        exp_year = _ref$card.exp_year,
        last_4_digits = _ref$card.last_4_digits,
        className = _ref.className;

    return React__default.createElement(
      'section',
      { className: className, __source: {
          fileName: _jsxFileName$E,
          lineNumber: 23
        },
        __self: _this$z
      },
      React__default.createElement(CardIcon, { brand: brand, __source: {
          fileName: _jsxFileName$E,
          lineNumber: 24
        },
        __self: _this$z
      }),
      React__default.createElement(
        'aside',
        {
          __source: {
            fileName: _jsxFileName$E,
            lineNumber: 25
          },
          __self: _this$z
        },
        React__default.createElement(
          LowercaseLabel,
          {
            __source: {
              fileName: _jsxFileName$E,
              lineNumber: 26
            },
            __self: _this$z
          },
          cardData(brand, last_4_digits)
        ),
        React__default.createElement(
          LowercaseLabel,
          {
            __source: {
              fileName: _jsxFileName$E,
              lineNumber: 27
            },
            __self: _this$z
          },
          'expires ',
          exp_month,
          '/',
          exp_year
        )
      )
    );
  };

  var DefaultPayment = styled__default(BaseDefaultPayment)(_templateObject$1i, CardIcon, Label, function (props) {
    return props.theme.media.tablet(_templateObject2$n);
  });

  DefaultPayment.propTypes = {
    card: PropTypes.shape({
      brand: PropTypes.string,
      exp_month: PropTypes.string,
      exp_year: PropTypes.string,
      last_4_digits: PropTypes.string
    }).isRequired

    /** @component */
  };

  var _templateObject$1j = _taggedTemplateLiteral$1j(['\n  padding: 2.0rem 1.5rem;\n  background-color: ', ';\n'], ['\n  padding: 2.0rem 1.5rem;\n  background-color: ', ';\n']);

  function _taggedTemplateLiteral$1j(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var InformationalSection = styled__default.section(_templateObject$1j, function (props) {
    return props.theme.colors.lightBlue[0];
  });

  InformationalSection.propTypes = {
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        lightBlue: PropTypes.array
      })
    })

    /** @component */
  };

  var _jsxFileName$F = '/Users/jrusso/Documents/ROA/mirage/src/components/social-media/instagram.js';

  var _createClass$4 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _templateObject$1k = _taggedTemplateLiteral$1k(['\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  > a {\n    width: 50%;\n    max-width: 17rem;\n    padding: 1rem;\n    box-sizing: border-box;\n    img {\n      width: 100%;\n      max-width: 15rem;\n    }\n  }\n'], ['\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  > a {\n    width: 50%;\n    max-width: 17rem;\n    padding: 1rem;\n    box-sizing: border-box;\n    img {\n      width: 100%;\n      max-width: 15rem;\n    }\n  }\n']);

  function _taggedTemplateLiteral$1k(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _classCallCheck$7(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$4(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$4(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _process$env = process.env,
      REACT_APP_INSTAGRAM_ACCESS_TOKEN = _process$env.REACT_APP_INSTAGRAM_ACCESS_TOKEN,
      REACT_APP_INSTAGRAM_CLIENT_ID = _process$env.REACT_APP_INSTAGRAM_CLIENT_ID,
      REACT_APP_INSTAGRAM_USER_ID = _process$env.REACT_APP_INSTAGRAM_USER_ID;

  var BaseInstagram = function (_React$Component) {
    _inherits$4(BaseInstagram, _React$Component);

    function BaseInstagram(props) {
      _classCallCheck$7(this, BaseInstagram);

      var _this = _possibleConstructorReturn$4(this, (BaseInstagram.__proto__ || Object.getPrototypeOf(BaseInstagram)).call(this, props));

      _this.setInstagramRef = function (element) {
        _this.instagramRef = element;
      };

      _this.instagramRef = null;
      return _this;
    }

    _createClass$4(BaseInstagram, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var limit = this.props.limit;

        this.feed = new Instafeed({
          get: 'user',
          target: this.instagramRef,
          clientId: REACT_APP_INSTAGRAM_CLIENT_ID,
          userId: REACT_APP_INSTAGRAM_USER_ID,
          accessToken: REACT_APP_INSTAGRAM_ACCESS_TOKEN,
          limit: limit
        }).run();
      }
    }, {
      key: 'render',
      value: function render() {
        var className = this.props.className;

        return React__default.createElement('section', { className: className, ref: this.setInstagramRef, __source: {
            fileName: _jsxFileName$F,
            lineNumber: 33
          },
          __self: this
        });
      }
    }]);

    return BaseInstagram;
  }(React__default.Component);

  var Instagram = styled__default(BaseInstagram)(_templateObject$1k);

  Instagram.propTypes = {
    limit: PropTypes.number
  };

  Instagram.defaultProps = {
    limit: 4

    /** @component */
  };

  var _jsxFileName$G = '/Users/jrusso/Documents/ROA/mirage/src/components/video/backgroundVideo.js',
      _this$A = undefined;

  var _templateObject$1l = _taggedTemplateLiteral$1l(['\n  position: relative;\n  > video {\n    width: 100%;\n  }\n  > article {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n'], ['\n  position: relative;\n  > video {\n    width: 100%;\n  }\n  > article {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n']);

  function _taggedTemplateLiteral$1l(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _objectWithoutProperties$9(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  var BaseBackgroundVideo = function BaseBackgroundVideo(_ref) {
    var className = _ref.className,
        children = _ref.children,
        sources = _ref.sources,
        props = _objectWithoutProperties$9(_ref, ['className', 'children', 'sources']);

    return React__default.createElement(
      'section',
      Object.assign({ className: className }, props, {
        __source: {
          fileName: _jsxFileName$G,
          lineNumber: 8
        },
        __self: _this$A
      }),
      React__default.createElement(Video, { sources: sources, __source: {
          fileName: _jsxFileName$G,
          lineNumber: 9
        },
        __self: _this$A
      }),
      React__default.createElement(
        'article',
        {
          __source: {
            fileName: _jsxFileName$G,
            lineNumber: 10
          },
          __self: _this$A
        },
        children
      )
    );
  };

  var BackgroundVideo = styled__default(BaseBackgroundVideo)(_templateObject$1l);

  BackgroundVideo.propTypes = {
    sources: PropTypes.oneOfType([PropTypes.array, PropTypes.string])

    /** @component */
  };

  var defaultProps$1 = {
    "header": "We believe in simplifying the lives of parents and celebrating real life with kids.",
    "sections": [{
      "title": "KIDS ARE AWESOME",
      "body": "And we want to celebrate them! Quirks, preferences and all—with clothes that express who they are as individuals."
    }, {
      "title": "PARENTS ARE SUPERHEROES",
      "body": "We’ll make your life easier, so you can get back to being the best snack-schlepper, soccer-practice-chauffeur..."
    }, {
      "title": "SHOPPING SHOULD BE EASY",
      "body": "You shouldn’t have to go to a million sites and stores to find awesome clothes you AND your kids will love."
    }],
    "footer": "BECAUSE IT’S MORE FUN WHEN EVERYONE WINS!"
  };

  var _jsxFileName$H = '/Users/jrusso/Documents/ROA/mirage/src/components/aboutUs/aboutUs.js',
      _this$B = undefined;

  var _templateObject$1m = _taggedTemplateLiteral$1m(['\n  ', '\n  ', ', ', ' {\n    text-align: center;\n    text-transform: uppercase;\n  }\n  ', ' {\n    margin: 0 auto;\n    margin-bottom: 40px;\n  }\n  ', ' {\n    color: ', ';\n    margin-top: 20px;\n    margin-bottom: 20px;\n  }\n  ', ' {\n    text-align: center;\n    line-height: 2;\n  }\n  .flexDiv {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    margin-bottom: 60px;\n  }\n'], ['\n  ', '\n  ', ', ', ' {\n    text-align: center;\n    text-transform: uppercase;\n  }\n  ', ' {\n    margin: 0 auto;\n    margin-bottom: 40px;\n  }\n  ', ' {\n    color: ', ';\n    margin-top: 20px;\n    margin-bottom: 20px;\n  }\n  ', ' {\n    text-align: center;\n    line-height: 2;\n  }\n  .flexDiv {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    margin-bottom: 60px;\n  }\n']);

  function _taggedTemplateLiteral$1m(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _objectWithoutProperties$a(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  var BaseAboutUs = function BaseAboutUs(_ref) {
    var className = _ref.className,
        header = _ref.header,
        sections = _ref.sections,
        footer = _ref.footer,
        props = _objectWithoutProperties$a(_ref, ['className', 'header', 'sections', 'footer']);

    return React__default.createElement(
      'section',
      { className: className, __source: {
          fileName: _jsxFileName$H,
          lineNumber: 15
        },
        __self: _this$B
      },
      React__default.createElement(
        FlexCol,
        { mobile: { width: 4 }, desktop: { width: 8, span: 2 }, __source: {
            fileName: _jsxFileName$H,
            lineNumber: 16
          },
          __self: _this$B
        },
        React__default.createElement(
          H1,
          {
            __source: {
              fileName: _jsxFileName$H,
              lineNumber: 17
            },
            __self: _this$B
          },
          header
        )
      ),
      React__default.createElement(
        FlexCol,
        { mobile: { width: 4 }, desktop: { width: 10, span: 1 }, __source: {
            fileName: _jsxFileName$H,
            lineNumber: 19
          },
          __self: _this$B
        },
        React__default.createElement(
          'div',
          { className: 'flexDiv', __source: {
              fileName: _jsxFileName$H,
              lineNumber: 20
            },
            __self: _this$B
          },
          sections.map(function (section, i) {
            return React__default.createElement(
              FlexCol,
              { mobile: { width: 4 }, desktop: { width: 4 }, key: 'about-us-' + i, __source: {
                  fileName: _jsxFileName$H,
                  lineNumber: 24
                },
                __self: _this$B
              },
              React__default.createElement(
                'div',
                {
                  __source: {
                    fileName: _jsxFileName$H,
                    lineNumber: 25
                  },
                  __self: _this$B
                },
                React__default.createElement(
                  H2,
                  {
                    __source: {
                      fileName: _jsxFileName$H,
                      lineNumber: 26
                    },
                    __self: _this$B
                  },
                  section.title
                ),
                React__default.createElement(
                  P,
                  {
                    __source: {
                      fileName: _jsxFileName$H,
                      lineNumber: 27
                    },
                    __self: _this$B
                  },
                  section.body
                )
              )
            );
          })
        )
      ),
      React__default.createElement(
        FlexCol,
        { mobile: { width: 4 }, desktop: { width: 12 }, __source: {
            fileName: _jsxFileName$H,
            lineNumber: 35
          },
          __self: _this$B
        },
        React__default.createElement(
          H2,
          {
            __source: {
              fileName: _jsxFileName$H,
              lineNumber: 36
            },
            __self: _this$B
          },
          footer
        )
      )
    );
  };

  var AboutUs$$1 = styled__default(BaseAboutUs)(_templateObject$1m, FlexRow, H1, H2, H1, H2, function (props) {
    return props.theme.colors.rocketBlue;
  }, P);

  AboutUs$$1.defaultProps = Object.assign({}, defaultProps$1, {
    padding: true,
    constrained: true

    /** @component */
  });

  var _jsxFileName$I = '/Users/jrusso/Documents/ROA/mirage/src/modules/complete-account/Guarantee.js',
      _this$C = undefined;

  var _templateObject$1n = _taggedTemplateLiteral$1n(['\n  header {\n    display: flex;\n    align-items: center;\n  }\n  ', ' {\n    margin-right: 10px;\n  }\n  section > *{\n    margin-top: 10px;\n    margin-bottom: 0;\n  }\n'], ['\n  header {\n    display: flex;\n    align-items: center;\n  }\n  ', ' {\n    margin-right: 10px;\n  }\n  section > *{\n    margin-top: 10px;\n    margin-bottom: 0;\n  }\n']);

  function _taggedTemplateLiteral$1n(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var UnstyledGuarantee = function UnstyledGuarantee(_ref) {
    var className = _ref.className,
        children = _ref.children;

    return React__default.createElement(
      InformationalSection,
      { className: className, __source: {
          fileName: _jsxFileName$I,
          lineNumber: 11
        },
        __self: _this$C
      },
      React__default.createElement(
        'header',
        {
          __source: {
            fileName: _jsxFileName$I,
            lineNumber: 12
          },
          __self: _this$C
        },
        React__default.createElement(GuaranteeIcon, { animated: true, __source: {
            fileName: _jsxFileName$I,
            lineNumber: 13
          },
          __self: _this$C
        }),
        React__default.createElement(
          Label,
          {
            __source: {
              fileName: _jsxFileName$I,
              lineNumber: 14
            },
            __self: _this$C
          },
          'FIRST BOX GUARANTEE'
        )
      ),
      React__default.createElement(
        'section',
        {
          __source: {
            fileName: _jsxFileName$I,
            lineNumber: 16
          },
          __self: _this$C
        },
        children
      )
    );
  };

  var Guarantee = styled__default(UnstyledGuarantee)(_templateObject$1n, GuaranteeIcon);

  Guarantee.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object])

    /** @component */
  };

  var defaultProps$2 = {
    "title": "Find us @rocketsofawesome",
    "content": "Follow us on Instagram for parent hacks, outfit tips, and the stuff we’re just super obsessed with right now. Plus, check out #ROAINTHEWILD to see how real kids are sporting their favorite styles IRL."
  };

  var _jsxFileName$J = '/Users/jrusso/Documents/ROA/mirage/src/modules/social-media/instagramRegion.js',
      _this$D = undefined;

  var _templateObject$1o = _taggedTemplateLiteral$1o(['\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  > * {\n    flex: 1 1 100%;\n    display: flex;\n    justify-content: center;\n  }\n  ', ', ', ' {\n    margin-bottom: 2rem;\n    text-align: center;\n  }\n'], ['\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  > * {\n    flex: 1 1 100%;\n    display: flex;\n    justify-content: center;\n  }\n  ', ', ', ' {\n    margin-bottom: 2rem;\n    text-align: center;\n  }\n']);

  function _taggedTemplateLiteral$1o(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var BaseInstagramRegion = function BaseInstagramRegion(_ref) {
    var className = _ref.className,
        content = _ref.content,
        title = _ref.title;

    return React__default.createElement(
      'section',
      { className: className, __source: {
          fileName: _jsxFileName$J,
          lineNumber: 9
        },
        __self: _this$D
      },
      React__default.createElement(
        H1,
        {
          __source: {
            fileName: _jsxFileName$J,
            lineNumber: 10
          },
          __self: _this$D
        },
        title
      ),
      React__default.createElement(
        P,
        {
          __source: {
            fileName: _jsxFileName$J,
            lineNumber: 11
          },
          __self: _this$D
        },
        content
      ),
      React__default.createElement(Instagram, {
        __source: {
          fileName: _jsxFileName$J,
          lineNumber: 12
        },
        __self: _this$D
      })
    );
  };

  var InstagramRegion$$1 = styled__default(BaseInstagramRegion)(_templateObject$1o, H1, P);

  InstagramRegion$$1.propTypes = {
    className: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
    title: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string])
  };

  InstagramRegion$$1.defaultProps = Object.assign({}, defaultProps$2);

  var _jsxFileName$K = '/Users/jrusso/Documents/ROA/mirage/src/modules/complete-account/SubscriptionShipping.js',
      _this$E = undefined;

  var _templateObject$1p = _taggedTemplateLiteral$1p(['\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n  margin-bottom: 3rem;\n  ', '\n  min-height: 8rem;\n  ', ' {\n    margin-right: 1.5rem;\n    flex: 0 0 5rem;\n    ', '\n  }\n  aside {\n    ', ':first-of-type {\n      font-weight: 500;\n    }\n  }\n'], ['\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n  margin-bottom: 3rem;\n  ', '\n  min-height: 8rem;\n  ', ' {\n    margin-right: 1.5rem;\n    flex: 0 0 5rem;\n    ', '\n  }\n  aside {\n    ', ':first-of-type {\n      font-weight: 500;\n    }\n  }\n']),
      _templateObject2$o = _taggedTemplateLiteral$1p(['\n    padding: 0;\n    min-height: 8rem;\n  '], ['\n    padding: 0;\n    min-height: 8rem;\n  ']),
      _templateObject3$f = _taggedTemplateLiteral$1p(['\n      flex: 0 0 7rem;\n      align-self: flex-end;\n    '], ['\n      flex: 0 0 7rem;\n      align-self: flex-end;\n    ']);

  function _taggedTemplateLiteral$1p(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var UnstyledSubscriptionShipping = function UnstyledSubscriptionShipping(_ref) {
    var className = _ref.className;

    return React__default.createElement(
      InformationalSection,
      { className: className, __source: {
          fileName: _jsxFileName$K,
          lineNumber: 11
        },
        __self: _this$E
      },
      React__default.createElement(MailboxIcon, { animate: true, __source: {
          fileName: _jsxFileName$K,
          lineNumber: 12
        },
        __self: _this$E
      }),
      React__default.createElement(
        'aside',
        {
          __source: {
            fileName: _jsxFileName$K,
            lineNumber: 13
          },
          __self: _this$E
        },
        React__default.createElement(
          P,
          {
            __source: {
              fileName: _jsxFileName$K,
              lineNumber: 14
            },
            __self: _this$E
          },
          'Seasonal Shipments'
        ),
        React__default.createElement(
          P,
          {
            __source: {
              fileName: _jsxFileName$K,
              lineNumber: 15
            },
            __self: _this$E
          },
          'A box every 3 months. So easy. Simple to cancel anytime.'
        )
      )
    );
  };

  var SubscriptionShipping = styled__default(UnstyledSubscriptionShipping)(_templateObject$1p, function (props) {
    return props.theme.media.tablet(_templateObject2$o);
  }, MailboxIcon, function (props) {
    return props.theme.media.tablet(_templateObject3$f);
  }, P);

  SubscriptionShipping.propTypes = {
    theme: PropTypes.shape({
      media: PropTypes.shape({
        tablet: PropTypes.func
      })
    })

    /** @component */
  };

  var _jsxFileName$L = '/Users/jrusso/Documents/ROA/mirage/src/modules/page.js',
      _this$F = undefined;

  var Page = function Page(_ref) {
    var children = _ref.children,
        url = _ref.url;

    return React__default.createElement(
      'main',
      { 'data-cms-url': url, __source: {
          fileName: _jsxFileName$L,
          lineNumber: 6
        },
        __self: _this$F
      },
      children
    );
  };

  Page.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string])
  };

  var _templateObject$1q = _taggedTemplateLiteral$1q(['\n  border-radius: 0.3rem;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  padding-left: 2rem;\n  padding-right: 2rem;\n  ', '\n  background-color: ', ';\n  position: relative;\n  box-sizing: border-box;\n\n  > ', ' {\n    ', '\n    position: absolute;\n    top: 1rem;\n    line-height: 2rem;\n    vertical-align: text-bottom;\n    ', '\n    right: 2rem;\n  }\n\n  main {\n    margin-top: 4rem;\n  }\n\n  ', ', ', ' {\n    ', '\n  }\n'], ['\n  border-radius: 0.3rem;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  padding-left: 2rem;\n  padding-right: 2rem;\n  ', '\n  background-color: ', ';\n  position: relative;\n  box-sizing: border-box;\n\n  > ', ' {\n    ', '\n    position: absolute;\n    top: 1rem;\n    line-height: 2rem;\n    vertical-align: text-bottom;\n    ', '\n    right: 2rem;\n  }\n\n  main {\n    margin-top: 4rem;\n  }\n\n  ', ', ', ' {\n    ', '\n  }\n']),
      _templateObject2$p = _taggedTemplateLiteral$1q(['\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n  '], ['\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n  ']),
      _templateObject3$g = _taggedTemplateLiteral$1q(['\n      top: 1.5rem;\n    '], ['\n      top: 1.5rem;\n    ']),
      _templateObject4$8 = _taggedTemplateLiteral$1q(['\n      margin: 0 2rem;\n    '], ['\n      margin: 0 2rem;\n    ']);

  function _taggedTemplateLiteral$1q(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  var DefaultSection = styled__default.section(_templateObject$1q, function (props) {
    return props.theme.media.tablet(_templateObject2$p);
  }, function (props) {
    return props.theme.colors.gray[2];
  }, Link, styles, function (props) {
    return props.theme.media.tablet(_templateObject3$g);
  }, DefaultAddress, DefaultPayment, function (props) {
    return props.theme.media.tablet(_templateObject4$8);
  });

  DefaultSection.propTypes = {
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        gray: PropTypes.array
      })
    })

    /** @component */
  };

  //Complete Account

  var _jsxFileName$M = '/Users/jrusso/Documents/ROA/mirage/src/renderer.js',
      _this$G = undefined;

  var COMPONENT_RENDER_MAP = {
    Core: {
      BackgroundImage: function BackgroundImage(item) {
        return React__default.createElement(
          backgroundImage,
          Object.assign({}, item.props, {
            __source: {
              fileName: _jsxFileName$M,
              lineNumber: 13
            },
            __self: _this$G
          }),
          item.children.map(function (child) {
            return Renderer({ item: child });
          })
        );
      },
      Caption: function Caption$$1(item) {
        return React__default.createElement(
          Caption,
          Object.assign({}, item.props, {
            __source: {
              fileName: _jsxFileName$M,
              lineNumber: 19
            },
            __self: _this$G
          }),
          item.children
        );
      },
      H1: function H1$$1(item) {
        return React__default.createElement(
          H1,
          Object.assign({}, item.props, {
            __source: {
              fileName: _jsxFileName$M,
              lineNumber: 23
            },
            __self: _this$G
          }),
          item.children
        );
      },
      H2: function H2$$1(item) {
        return React__default.createElement(
          H2,
          Object.assign({}, item.props, {
            __source: {
              fileName: _jsxFileName$M,
              lineNumber: 27
            },
            __self: _this$G
          }),
          item.children
        );
      },
      H3: function H3$$1(item) {
        return React__default.createElement(
          H3,
          Object.assign({}, item.props, {
            __source: {
              fileName: _jsxFileName$M,
              lineNumber: 31
            },
            __self: _this$G
          }),
          item.children
        );
      },
      H4: function H4$$1(item) {
        return React__default.createElement(
          H4,
          Object.assign({}, item.props, {
            __source: {
              fileName: _jsxFileName$M,
              lineNumber: 35
            },
            __self: _this$G
          }),
          item.children
        );
      },
      H5: function H5$$1(item) {
        return React__default.createElement(
          H5,
          Object.assign({}, item.props, {
            __source: {
              fileName: _jsxFileName$M,
              lineNumber: 39
            },
            __self: _this$G
          }),
          item.children
        );
      },
      H6: function H6$$1(item) {
        return React__default.createElement(
          H6,
          Object.assign({}, item.props, {
            __source: {
              fileName: _jsxFileName$M,
              lineNumber: 43
            },
            __self: _this$G
          }),
          item.children
        );
      },
      Label: function Label$$1(item) {
        return React__default.createElement(
          Label,
          Object.assign({}, item.props, {
            __source: {
              fileName: _jsxFileName$M,
              lineNumber: 47
            },
            __self: _this$G
          }),
          item.children
        );
      },
      P: function P$$1(item) {
        return React__default.createElement(
          P,
          Object.assign({}, item.props, {
            __source: {
              fileName: _jsxFileName$M,
              lineNumber: 51
            },
            __self: _this$G
          }),
          item.children
        );
      },
      Grid: function Grid$$1(item) {
        return React__default.createElement(
          Grid,
          {
            __source: {
              fileName: _jsxFileName$M,
              lineNumber: 55
            },
            __self: _this$G
          },
          item.children.map(function (child) {
            return Renderer({ item: child });
          })
        );
      },
      Logo: function Logo$$1() {
        return React__default.createElement(Logo, {
          __source: {
            fileName: _jsxFileName$M,
            lineNumber: 58
          },
          __self: _this$G
        });
      },
      Sizer: function Sizer$$1(item) {
        return React__default.createElement(
          Sizer,
          Object.assign({}, item.props, {
            __source: {
              fileName: _jsxFileName$M,
              lineNumber: 60
            },
            __self: _this$G
          }),
          item.children.map(function (child) {
            return Renderer({ item: child });
          })
        );
      }
    },
    Components: {
      InformationalSection: function InformationalSection$$1(item) {
        return React__default.createElement(
          InformationalSection,
          {
            __source: {
              fileName: _jsxFileName$M,
              lineNumber: 66
            },
            __self: _this$G
          },
          item.children.map(function (child) {
            return Renderer({ item: child });
          })
        );
      },
      BackgroundVideo: function BackgroundVideo$$1(item) {
        return React__default.createElement(
          BackgroundVideo,
          Object.assign({}, item.props, {
            __source: {
              fileName: _jsxFileName$M,
              lineNumber: 70
            },
            __self: _this$G
          }),
          item.children.map(function (child) {
            return Renderer({ item: child });
          })
        );
      }
    },
    Modules: {
      Page: function Page$$1(item) {
        return React__default.createElement(
          Page,
          {
            __source: {
              fileName: _jsxFileName$M,
              lineNumber: 76
            },
            __self: _this$G
          },
          item.children.map(function (child) {
            return Renderer({ item: child });
          })
        );
      }
    }
  };

  var Renderer = function Renderer(_ref) {
    var item = _ref.item;

    try {
      return COMPONENT_RENDER_MAP[item.sys.type][item.sys.component](item.data);
    } catch (err) {
      console.warn('It appears that you are tying to render an element that doesn\'t exist in the COMPONENT_RENDER_MAP');
    }
  };

  Renderer.propTypes = {
    item: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object])
  };

  /**
   * Core:
  **/
  /**
   * Pages:
  **/

  exports.Renderer = Renderer;
  exports.FadeInOut = FadeInOut;
  exports.Grid = Grid;
  exports.Sizer = Sizer;
  exports.FlexRow = FlexRow;
  exports.FlexCol = FlexCol;
  exports.BagIcon = BagIcon;
  exports.CardIcon = CardIcon;
  exports.Chevron = Chevron;
  exports.GuaranteeIcon = GuaranteeIcon;
  exports.MailboxIcon = MailboxIcon;
  exports.Ruler = Ruler;
  exports.XIcon = XIcon;
  exports.AIcon = AIcon$1;
  exports.GrayAIcon = GrayAIcon;
  exports.NavyAIcon = NavyAIcon;
  exports.WhiteAIcon = WhiteAIcon;
  exports.BlueCheckmark = BlueCheckmark;
  exports.GrayCheckmark = GrayCheckmark;
  exports.NavyCheckmark = NavyCheckmark;
  exports.WhiteCheckmark = WhiteCheckmark;
  exports.CircleChevron = CircleChevron;
  exports.YellowCircleChevron = YellowCircleChevron;
  exports.BlueHamburger = BlueHamburger;
  exports.GrayHamburger = GrayHamburger;
  exports.Hamburger = Hamburger;
  exports.NavyHamburger = NavyHamburger;
  exports.GrayLogo = GrayLogo;
  exports.Logo = Logo;
  exports.NavyLogo = NavyLogo;
  exports.WhiteLogo = WhiteLogo;
  exports.BlueSpinner = BlueSpinner;
  exports.GraySpinner = GraySpinner;
  exports.NavySpinner = NavySpinner;
  exports.WhiteSpinner = WhiteSpinner;
  exports.BackgroundImage = backgroundImage;
  exports.InlineImage = InlineImage;
  exports.Caption = Caption;
  exports.H1 = H1;
  exports.H2 = H2;
  exports.H3 = H3;
  exports.H4 = H4;
  exports.H5 = H5;
  exports.H6 = H6;
  exports.Label = Label;
  exports.MarkedText = MarkedText;
  exports.P = P;
  exports.Serif = Serif;
  exports.BlueHr = BlueHr;
  exports.Hr = Hr;
  exports.NavyHr = NavyHr;
  exports.WhiteHr = WhiteHr;
  exports.theme = theme;
  exports.ROATheme = ROATheme;
  exports.Video = Video;
  exports.DefaultAddress = DefaultAddress;
  exports.CustomerQuotes = CustomerQuotes$$1;
  exports.DefaultPayment = DefaultPayment;
  exports.Checkbox = Checkbox;
  exports.SizeRadio = SizeRadio;
  exports.BlueBorderButton = BlueBorderButton;
  exports.Button = Button;
  exports.WhiteBorderButton = WhiteBorderButton;
  exports.YellowButton = YellowButton;
  exports.ImageButtonWhite = ImageButtonWhite;
  exports.ImageButtonBlue = ImageButtonBlue;
  exports.ImageButtonBlack = ImageButtonBlack;
  exports.Link = Link;
  exports.NavyLink = NavyLink;
  exports.WhiteLink = WhiteLink;
  exports.InformationalSection = InformationalSection;
  exports.Instagram = Instagram;
  exports.BackgroundVideo = BackgroundVideo;
  exports.AboutUs = AboutUs$$1;
  exports.Guarantee = Guarantee;
  exports.SubscriptionShipping = SubscriptionShipping;
  exports.Page = Page;
  exports.DefaultSection = DefaultSection;
  exports.InstagramRegion = InstagramRegion$$1;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
