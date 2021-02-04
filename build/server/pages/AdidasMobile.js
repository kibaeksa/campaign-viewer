module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/AdidasMobile.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! exports provided: backUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backUrl", function() { return backUrl; });
const backUrl = false ? undefined : 'http://localhost:3065';

/***/ }),

/***/ "./pages/AdidasMobile.tsx":
/*!********************************!*\
  !*** ./pages/AdidasMobile.tsx ***!
  \********************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.ts");
/* harmony import */ var _reducers_post_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/post/actions */ "./reducers/post/actions.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! . */ "./pages/index.tsx");
var _jsxFileName = "D:\\work_files\\campaign-viewer\\front\\pages\\AdidasMobile.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];








const AdidasMobile = () => {
  const {
    content,
    device,
    brand
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.post);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (content) {
      Object(___WEBPACK_IMPORTED_MODULE_5__["parsingStatic"])(device, brand, content);
      dispatch(Object(_reducers_post_actions__WEBPACK_IMPORTED_MODULE_4__["loadDataRequestAction"])());
    }
  }, [device, brand, content]);

  function htmls() {
    if (content) {
      return {
        __html: content.pn
      };
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, content ? __jsx("div", {
    dangerouslySetInnerHTML: htmls(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 24
    }
  }) : __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 68
    }
  }, "\uC544\uB514\uB2E4\uC2A4 \uBAA8\uBC14\uC77C", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 81
    }
  }), "\uBAA8\uBC14\uC77C \uBAA8\uB4DC\uC5D0\uC11C \uBCF4\uC2DC\uB294\uAC83\uC744 \uAD8C\uC7A5 \uB4DC\uB9BD\uB2C8\uB2E4."));
};

const getServerSideProps = _store_configureStore__WEBPACK_IMPORTED_MODULE_3__["default"].getServerSideProps(async context => {
  context.store.dispatch(Object(_reducers_post_actions__WEBPACK_IMPORTED_MODULE_4__["checkBrandRequestAction"])('mobile', 'adidas'));
  context.store.dispatch(Object(_reducers_post_actions__WEBPACK_IMPORTED_MODULE_4__["setHoverAction"])('02'));
  context.store.dispatch(Object(_reducers_post_actions__WEBPACK_IMPORTED_MODULE_4__["loadDataRequestAction"])());
  context.store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_2__["END"]);
  await context.store.sagaTask.toPromise();
  return {
    props: {
      pathname: '/AdidasMobile'
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (AdidasMobile);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: configs, parsingStatic, getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configs", function() { return configs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parsingStatic", function() { return parsingStatic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.ts");
/* harmony import */ var _reducers_post_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/post/actions */ "./reducers/post/actions.ts");
var _jsxFileName = "D:\\work_files\\campaign-viewer\\front\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];






const configs = false ? undefined : 'http://localhost:3060';
function parsingStatic(device, brand, content) {
  // 정적 데이터 주소경로 변경
  const imgs = document.querySelectorAll('.content-frame img');
  const videos = document.querySelectorAll('.content-frame video');

  const Parser = elem => {
    elem.forEach(function (val, index) {
      // image
      if (elem[index].nodeName == "IMG") {
        const original = elem[index].src;
        const splitOriginal = original.split(configs, 2);

        if (device == "web") {
          if (elem[index].src.indexOf('https://kibaeksa.github.io/adidasWeb/front/')) {
            elem[index].src = 'https://kibaeksa.github.io/adidasWeb/front/' + splitOriginal[1];
          } else {
            // console.log(original);
            elem[index].src = original;
          }
        } else {
          if (elem[index].src.indexOf('https://kibaeksa.github.io/adidasMobile/mobile/')) {
            elem[index].src = 'https://kibaeksa.github.io/adidasMobile/mobile/' + splitOriginal[1];
          } else {
            elem[index].src = original;
          }
        }
      } // video


      if (elem[index].nodeName == "VIDEO") {
        const original = elem[index].poster;
        const splitOriginal = original.split(configs, 2);

        if (device == "web") {
          if (elem[index].poster.indexOf('https://kibaeksa.github.io/adidasWeb/front/')) {
            elem[index].poster = 'https://kibaeksa.github.io/adidasWeb/front/' + splitOriginal[1];
          } else {
            elem[index].poster = original;
          }
        } else {
          if (elem[index].poster.indexOf('https://kibaeksa.github.io/adidasMobile/mobile/')) {
            elem[index].poster = 'https://kibaeksa.github.io/adidasMobile/mobile/' + splitOriginal[1];
          } else {
            elem[index].poster = original;
          }
        }
      }
    });
  };

  new Parser(imgs);
  new Parser(videos); // JS, CSS 추가하는 인클루드 객체

  const Include = {
    getArray: function (files) {
      const array = new Array();
      const item = files.split(',');
      item.forEach(function (fileName, index) {
        fileName = fileName.replace(/^\s/, '').replace(/\s$/, '');
        array.push(fileName);
      });
      return array;
    },
    JS: function (files) {
      this.getArray(files).forEach(function (fileName, index) {
        let JS = document.createElement('script');
        JS.type = 'text/javascript';
        JS.src = '/js/' + fileName + '.js';
        JS.classList.add('putScriptClass');
        document.getElementsByTagName('head')[0].appendChild(JS);
      });
    },
    CSS: function (files) {
      this.getArray(files).forEach(function (fileName, index) {
        let CSS = document.createElement('link');
        CSS.rel = 'stylesheet';
        CSS.type = 'text/css';
        CSS.classList.add('putCssClass');
        CSS.href = '/css/' + fileName + '.css';
        CSS.media = 'screen';
        document.getElementsByTagName('head')[0].appendChild(CSS);
      });
    }
  }; // 인클루드 동적 삽입

  if (device == "web") {
    const scripts = document.getElementsByTagName('head')[0].getElementsByTagName('script');

    for (var i = 0; i < scripts.length; i++) {
      if (scripts[i].classList.contains("putScriptClass")) {
        scripts[i].remove();
      }
    }

    const css = document.getElementsByTagName('head')[0].getElementsByTagName('link');

    for (var i = 0; i < css.length; i++) {
      if (css[i].classList.contains("putCssClass")) {
        css[i].remove();
      }
    }

    if (brand == "adidas") {
      Include.JS('modalPopup.min, adidas');
      Include.CSS('slick, adidas_r, reset');
    }

    if (brand == "reebok") {
      Include.JS('modalPopup.min, common');
      Include.CSS('slick, reebok, reset, common');
    }
  }

  if (device == "mobile") {
    const scripts = document.getElementsByTagName('head')[0].getElementsByTagName('script');

    for (var i = 0; i < scripts.length; i++) {
      if (scripts[i].classList.contains("putScriptClass")) {
        scripts[i].remove();
      }
    }

    const css = document.getElementsByTagName('head')[0].getElementsByTagName('link');

    for (var i = 0; i < css.length; i++) {
      if (css[i].classList.contains("putCssClass")) {
        css[i].remove();
      }
    }

    if (brand == "adidas") {
      Include.JS('modalPopup.min, adidas');
      Include.CSS('slick, style, fonts, style_reebok');
    }

    if (brand == "reebok") {
      Include.JS('modalPopup.min');
      Include.CSS('slick, style, fonts, reebok_m, style_rm, common_rm');
    }
  } // Axios 통신으로 렌더링 후 배경스타일 관련 데이터 리로드: backend에서 가공 후 response.


  if (device == "web" && brand == "adidas") {
    // 캠페인 내부 스크립트
    if (content.script) {
      const scriptLength = document.querySelectorAll('#container_r script').length;
      document.querySelectorAll('#container_r script')[scriptLength - 1].remove();
      const JS = document.createElement('script');
      document.querySelectorAll('#container_r script')[scriptLength - 2].after(JS);
      document.querySelectorAll('#container_r script')[scriptLength - 1].append(content.script);
    } // 캠페인 내부 스타일


    if (content.bg) {
      const bgLength = document.querySelectorAll('#container_r style').length;
      document.querySelectorAll('#container_r style')[bgLength - 1].remove();
      const STYLE = document.createElement('style');
      document.querySelector('#container_r div').prepend(STYLE);
      document.querySelectorAll('#container_r style')[0].append(content.bg);
    }
  }

  if (device == "mobile" && brand == "adidas") {
    if (content.script) {
      const scriptLength = document.querySelectorAll('#container script').length;
      document.querySelectorAll('#container script')[scriptLength - 1].remove();
      const JS = document.createElement('script');
      document.querySelectorAll('#container script')[scriptLength - 2].after(JS);
      document.querySelectorAll('#container script')[scriptLength - 1].append(content.script);
    }

    if (content.bg) {
      const bgLength = document.querySelectorAll('#container style').length;
      document.querySelectorAll('#container style')[bgLength - 1].remove();
      const STYLE = document.createElement('style');
      document.querySelector('#container div').prepend(STYLE);
      document.querySelectorAll('#container style')[0].append(content.bg);
    }
  }

  if (device == "web" && brand == "reebok") {
    if (content.script) {
      const scriptLength = document.querySelectorAll('#contents_wrap script').length;
      document.querySelectorAll('#contents_wrap script')[scriptLength - 1].remove();
      const JS = document.createElement('script');
      document.querySelectorAll('#contents_wrap script')[scriptLength - 2].after(JS);
      document.querySelectorAll('#contents_wrap script')[scriptLength - 1].append(content.script);
    }

    if (content.bg) {
      const bgLength = document.querySelectorAll('#contents_wrap style').length;
      document.querySelectorAll('#contents_wrap style')[bgLength - 1].remove();
      const STYLE = document.createElement('style');
      document.querySelector('#contents_wrap div').append(STYLE);
      document.querySelectorAll('#contents_wrap style')[0].append(content.bg);
    }
  }

  if (device == "mobile" && brand == "reebok") {
    if (content.script) {
      const scriptLength = document.querySelectorAll('#contents script').length;
      document.querySelectorAll('#contents script')[scriptLength - 1].remove();
      const JS = document.createElement('script');
      document.querySelectorAll('#contents script')[scriptLength - 2].after(JS);
      document.querySelectorAll('#contents script')[scriptLength - 1].append(content.script);
    }

    if (content.bg) {
      const bgLength = document.querySelectorAll('#contents style').length;
      document.querySelectorAll('#contents style')[bgLength - 1].remove();
      const STYLE = document.createElement('style');
      document.querySelector('#contents div').prepend(STYLE);
      document.querySelectorAll('#contents style')[0].append(content.bg);
    }
  }
}

const Home = () => {
  const {
    content,
    device,
    brand
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.post);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (content) {
      parsingStatic(device, brand, content);
      dispatch(Object(_reducers_post_actions__WEBPACK_IMPORTED_MODULE_4__["loadDataRequestAction"])());
    }
  }, [device, brand, content]);

  function htmls() {
    if (content) {
      return {
        __html: content.pn
      };
    }
  }

  ;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, content ? __jsx("div", {
    dangerouslySetInnerHTML: htmls(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 24
    }
  }) : __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 70
    }
  }, "\uC544\uB514\uB2E4\uC2A4 \uC6F9"));
};

const getServerSideProps = _store_configureStore__WEBPACK_IMPORTED_MODULE_3__["default"].getServerSideProps(async context => {
  context.store.dispatch(Object(_reducers_post_actions__WEBPACK_IMPORTED_MODULE_4__["checkBrandRequestAction"])('web', 'adidas'));
  context.store.dispatch(Object(_reducers_post_actions__WEBPACK_IMPORTED_MODULE_4__["setHoverAction"])('01'));
  context.store.dispatch(Object(_reducers_post_actions__WEBPACK_IMPORTED_MODULE_4__["loadDataRequestAction"])()); // const state = context.store.getState();
  // if( state.post.content ) {
  // }
  // const isServer: boolean = !!context.req;
  // const cookie = isServer ? context.req.headers.cookie : '';
  // console.log(isServer,'여기여기');
  // if ( context.req && cookie ) axios.defaults.headers.Cookie = cookie;

  context.store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_2__["END"]);
  await context.store.sagaTask.toPromise();
  return {
    props: {
      pathname: '/'
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./reducers/index.ts":
/*!***************************!*\
  !*** ./reducers/index.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post/reducer */ "./reducers/post/reducer.ts");




const rootReducer = (state, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
      console.log('HYDRATE', action);
      return action.payload;

    default:
      {
        const combineReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
          post: _post_reducer__WEBPACK_IMPORTED_MODULE_2__["default"]
        });
        return combineReducer(state, action);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post/actions.ts":
/*!**********************************!*\
  !*** ./reducers/post/actions.ts ***!
  \**********************************/
/*! exports provided: ADD_CAMPAIGN_REQUEST, ADD_CAMPAIGN_SUCCESS, ADD_CAMPAIGN_FAILURE, REMOVE_CAMPAIGN_REQUEST, REMOVE_CAMPAIGN_SUCCESS, REMOVE_CAMPAIGN_FAILURE, RENDER_CAMPAIGN_REQUEST, RENDER_CAMPAIGN_SUCCESS, RENDER_CAMPAIGN_FAILURE, SEARCH_CAMPAIGN_REQUEST, SEARCH_CAMPAIGN_SUCCESS, SEARCH_CAMPAIGN_FAILURE, CHECK_BRAND_REQUEST, CHECK_BRAND_SUCCESS, CHECK_BRAND_FAILURE, LOAD_DATA_REQUEST, LOAD_DATA_SUCCESS, LOAD_DATA_FAILURE, SET_HOVER, SET_TOGGLE, DOWNLOAD_FILE_REQUEST, DOWNLOAD_FILE_SUCCESS, DOWNLOAD_FILE_FAILURE, addCampaignRequestAction, addCampaignSuccessAction, addCampaignFailureAction, removeCampaignRequestAction, removeCampaignSuccessAction, removeCampaignFailureAction, loadDataRequestAction, loadDataSuccessAction, loadDataFailureAction, checkBrandRequestAction, checkBrandSuccessAction, checkBrandFailureAction, renderCampaignRequestAction, renderCampaignSuccessAction, renderCampaignFailureAction, searchCampaignRequestAction, searchCampaignSuccessAction, searchCampaignFailureAction, setHoverAction, setToggleAction, downloadFileRequestAction, downloadFileSuccessAction, downloadFileFailureAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CAMPAIGN_REQUEST", function() { return ADD_CAMPAIGN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CAMPAIGN_SUCCESS", function() { return ADD_CAMPAIGN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CAMPAIGN_FAILURE", function() { return ADD_CAMPAIGN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_CAMPAIGN_REQUEST", function() { return REMOVE_CAMPAIGN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_CAMPAIGN_SUCCESS", function() { return REMOVE_CAMPAIGN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_CAMPAIGN_FAILURE", function() { return REMOVE_CAMPAIGN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RENDER_CAMPAIGN_REQUEST", function() { return RENDER_CAMPAIGN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RENDER_CAMPAIGN_SUCCESS", function() { return RENDER_CAMPAIGN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RENDER_CAMPAIGN_FAILURE", function() { return RENDER_CAMPAIGN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_CAMPAIGN_REQUEST", function() { return SEARCH_CAMPAIGN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_CAMPAIGN_SUCCESS", function() { return SEARCH_CAMPAIGN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_CAMPAIGN_FAILURE", function() { return SEARCH_CAMPAIGN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_BRAND_REQUEST", function() { return CHECK_BRAND_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_BRAND_SUCCESS", function() { return CHECK_BRAND_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_BRAND_FAILURE", function() { return CHECK_BRAND_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_DATA_REQUEST", function() { return LOAD_DATA_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_DATA_SUCCESS", function() { return LOAD_DATA_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_DATA_FAILURE", function() { return LOAD_DATA_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_HOVER", function() { return SET_HOVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TOGGLE", function() { return SET_TOGGLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOWNLOAD_FILE_REQUEST", function() { return DOWNLOAD_FILE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOWNLOAD_FILE_SUCCESS", function() { return DOWNLOAD_FILE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOWNLOAD_FILE_FAILURE", function() { return DOWNLOAD_FILE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCampaignRequestAction", function() { return addCampaignRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCampaignSuccessAction", function() { return addCampaignSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCampaignFailureAction", function() { return addCampaignFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCampaignRequestAction", function() { return removeCampaignRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCampaignSuccessAction", function() { return removeCampaignSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCampaignFailureAction", function() { return removeCampaignFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDataRequestAction", function() { return loadDataRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDataSuccessAction", function() { return loadDataSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDataFailureAction", function() { return loadDataFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkBrandRequestAction", function() { return checkBrandRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkBrandSuccessAction", function() { return checkBrandSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkBrandFailureAction", function() { return checkBrandFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderCampaignRequestAction", function() { return renderCampaignRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderCampaignSuccessAction", function() { return renderCampaignSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderCampaignFailureAction", function() { return renderCampaignFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchCampaignRequestAction", function() { return searchCampaignRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchCampaignSuccessAction", function() { return searchCampaignSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchCampaignFailureAction", function() { return searchCampaignFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHoverAction", function() { return setHoverAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setToggleAction", function() { return setToggleAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadFileRequestAction", function() { return downloadFileRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadFileSuccessAction", function() { return downloadFileSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadFileFailureAction", function() { return downloadFileFailureAction; });
const ADD_CAMPAIGN_REQUEST = 'ADD_CAMPAIGN_REQUEST';
const ADD_CAMPAIGN_SUCCESS = 'ADD_CAMPAIGN_SUCCESS';
const ADD_CAMPAIGN_FAILURE = 'ADD_CAMPAIGN_FAILURE';
const REMOVE_CAMPAIGN_REQUEST = 'REMOVE_CAMPAIGN_REQUEST';
const REMOVE_CAMPAIGN_SUCCESS = 'REMOVE_CAMPAIGN_SUCCESS';
const REMOVE_CAMPAIGN_FAILURE = 'REMOVE_CAMPAIGN_FAILURE';
const RENDER_CAMPAIGN_REQUEST = 'RENDER_CAMPAIGN_REQUEST';
const RENDER_CAMPAIGN_SUCCESS = 'RENDER_CAMPAIGN_SUCCESS';
const RENDER_CAMPAIGN_FAILURE = 'RENDER_CAMPAIGN_FAILURE';
const SEARCH_CAMPAIGN_REQUEST = 'SEARCH_CAMPAIGN_REQUEST';
const SEARCH_CAMPAIGN_SUCCESS = 'SEARCH_CAMPAIGN_SUCCESS';
const SEARCH_CAMPAIGN_FAILURE = 'SEARCH_CAMPAIGN_FAILURE';
const CHECK_BRAND_REQUEST = 'CHECK_BRAND_REQUEST';
const CHECK_BRAND_SUCCESS = 'CHECK_BRAND_SUCCESS';
const CHECK_BRAND_FAILURE = 'CHECK_BRAND_FAILURE';
const LOAD_DATA_REQUEST = 'LOAD_DATA_REQUEST';
const LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS';
const LOAD_DATA_FAILURE = 'LOAD_DATA_FAILURE';
const SET_HOVER = 'SET_HOVER';
const SET_TOGGLE = 'SET_TOGGLE';
const DOWNLOAD_FILE_REQUEST = 'DOWNLOAD_FILE_REQUEST';
const DOWNLOAD_FILE_SUCCESS = 'DOWNLOAD_FILE_SUCCESS';
const DOWNLOAD_FILE_FAILURE = 'DOWNLOAD_FILE_FAILURE';
const addCampaignRequestAction = campaign => ({
  type: ADD_CAMPAIGN_REQUEST,
  data: {
    campaign
  }
});
const addCampaignSuccessAction = data => ({
  type: ADD_CAMPAIGN_SUCCESS,
  data
});
const addCampaignFailureAction = () => ({
  type: ADD_CAMPAIGN_FAILURE
});
const removeCampaignRequestAction = listId => ({
  type: REMOVE_CAMPAIGN_REQUEST,
  data: listId
});
const removeCampaignSuccessAction = data => ({
  type: REMOVE_CAMPAIGN_SUCCESS,
  data
});
const removeCampaignFailureAction = () => ({
  type: REMOVE_CAMPAIGN_FAILURE
});
const loadDataRequestAction = () => ({
  type: LOAD_DATA_REQUEST
});
const loadDataSuccessAction = data => ({
  type: LOAD_DATA_SUCCESS,
  data
});
const loadDataFailureAction = () => ({
  type: LOAD_DATA_FAILURE
});
const checkBrandRequestAction = (device, brand) => ({
  type: CHECK_BRAND_REQUEST,
  data: {
    device,
    brand
  }
});
const checkBrandSuccessAction = () => ({
  type: CHECK_BRAND_SUCCESS
});
const checkBrandFailureAction = () => ({
  type: CHECK_BRAND_FAILURE
});
const renderCampaignRequestAction = (device, brand, campaign, year) => ({
  type: RENDER_CAMPAIGN_REQUEST,
  data: {
    device,
    brand,
    campaign,
    year
  }
});
const renderCampaignSuccessAction = data => ({
  type: RENDER_CAMPAIGN_SUCCESS,
  data
});
const renderCampaignFailureAction = () => ({
  type: RENDER_CAMPAIGN_FAILURE
});
const searchCampaignRequestAction = data => ({
  type: SEARCH_CAMPAIGN_REQUEST,
  data
});
const searchCampaignSuccessAction = data => ({
  type: SEARCH_CAMPAIGN_SUCCESS,
  data
});
const searchCampaignFailureAction = () => ({
  type: SEARCH_CAMPAIGN_FAILURE
});
const setHoverAction = hover => ({
  type: SET_HOVER,
  data: {
    hover
  }
});
const setToggleAction = toggle => ({
  type: SET_TOGGLE,
  data: {
    toggle
  }
});
const downloadFileRequestAction = data => ({
  type: DOWNLOAD_FILE_REQUEST,
  data
});
const downloadFileSuccessAction = data => ({
  type: DOWNLOAD_FILE_SUCCESS,
  data
});
const downloadFileFailureAction = fileName => ({
  type: DOWNLOAD_FILE_FAILURE
});

/***/ }),

/***/ "./reducers/post/reducer.ts":
/*!**********************************!*\
  !*** ./reducers/post/reducer.ts ***!
  \**********************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./reducers/post/actions.ts");


const initialState = {
  content: '',
  device: 'web',
  brand: 'adidas',
  campaign: null,
  list: [],
  keyword: '',
  listDeleted: false,
  isAddingData: false,
  isLoadingData: false,
  loadingDataErrorReason: null,
  addingDataErrorReason: null,
  hover: '01',
  toggle: true,
  successSendingFileName: ''
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      case _actions__WEBPACK_IMPORTED_MODULE_1__["ADD_CAMPAIGN_REQUEST"]:
        {
          draft.isAddingData = true;
          draft.addingDataErrorReason = null;
          break;
        }

      case _actions__WEBPACK_IMPORTED_MODULE_1__["ADD_CAMPAIGN_SUCCESS"]:
        {
          break;
        }

      case _actions__WEBPACK_IMPORTED_MODULE_1__["ADD_CAMPAIGN_FAILURE"]:
        {
          break;
        }

      case _actions__WEBPACK_IMPORTED_MODULE_1__["REMOVE_CAMPAIGN_REQUEST"]:
        {
          break;
        }

      case _actions__WEBPACK_IMPORTED_MODULE_1__["REMOVE_CAMPAIGN_SUCCESS"]:
        {
          const index = draft.list.findIndex(v => v.id === action.data);
          draft.list.splice(index, 1);
          draft.listDeleted = true;
          break;
        }

      case _actions__WEBPACK_IMPORTED_MODULE_1__["REMOVE_CAMPAIGN_FAILURE"]:
        {
          break;
        }

      case _actions__WEBPACK_IMPORTED_MODULE_1__["CHECK_BRAND_REQUEST"]:
        {
          draft.device = action.data.device;
          draft.brand = action.data.brand;
          draft.campaign = '';
          draft.content = '';
          break;
        }

      case _actions__WEBPACK_IMPORTED_MODULE_1__["RENDER_CAMPAIGN_REQUEST"]:
        {
          draft.isAddingData = true;
          draft.addingDataErrorReason = null;
          draft.device = action.data.device;
          draft.brand = action.data.brand;
          break;
        }

      case _actions__WEBPACK_IMPORTED_MODULE_1__["RENDER_CAMPAIGN_SUCCESS"]:
        {
          draft.content = action.data;
          draft.isAddingData = false;
          draft.campaign = '';
          break;
        }

      case _actions__WEBPACK_IMPORTED_MODULE_1__["RENDER_CAMPAIGN_FAILURE"]:
        {
          draft.addingDataErrorReason = true;
          break;
        }

      case _actions__WEBPACK_IMPORTED_MODULE_1__["SEARCH_CAMPAIGN_REQUEST"]:
        {
          draft.keyword = action.data.search;
          break;
        }

      case _actions__WEBPACK_IMPORTED_MODULE_1__["SEARCH_CAMPAIGN_SUCCESS"]:
        {
          draft.list = action.data;
          break;
        }

      case _actions__WEBPACK_IMPORTED_MODULE_1__["SEARCH_CAMPAIGN_FAILURE"]:
        {
          break;
        }

      case _actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_DATA_REQUEST"]:
        {
          draft.isLoadingData = true;
          draft.loadingDataErrorReason = null;
          break;
        }

      case _actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_DATA_SUCCESS"]:
        {
          draft.list = action.data;
          draft.isLoadingData = false;
          break;
        }

      case _actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_DATA_FAILURE"]:
        {
          draft.loadingDataErrorReason = true;
          break;
        }

      case _actions__WEBPACK_IMPORTED_MODULE_1__["SET_HOVER"]:
        {
          draft.hover = action.data.hover;
          break;
        }

      case _actions__WEBPACK_IMPORTED_MODULE_1__["SET_TOGGLE"]:
        {
          draft.toggle = action.data.toggle;
          break;
        }

      case _actions__WEBPACK_IMPORTED_MODULE_1__["DOWNLOAD_FILE_REQUEST"]:
        {
          draft.successSendingFileName = action.data;
          break;
        }

      case _actions__WEBPACK_IMPORTED_MODULE_1__["DOWNLOAD_FILE_SUCCESS"]:
        {
          break;
        }

      case _actions__WEBPACK_IMPORTED_MODULE_1__["DOWNLOAD_FILE_FAILURE"]:
        {
          break;
        }

      default:
        {
          break;
        }
    }
  });
});

/***/ }),

/***/ "./sagas/index.ts":
/*!************************!*\
  !*** ./sagas/index.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./sagas/post.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/config */ "./config/config.js");



 // axios.defaults.baseURL = 'http://localhost:3065/api';

axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = _config_config__WEBPACK_IMPORTED_MODULE_3__["backUrl"];
axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.withCredentials = true;
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_2__["default"])]);
}

/***/ }),

/***/ "./sagas/post.ts":
/*!***********************!*\
  !*** ./sagas/post.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_post_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post/actions */ "./reducers/post/actions.ts");




function addAdidasWebAPI(postData) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/post/addcampaign', postData, {
    withCredentials: true
  });
}

function* addAdidasWeb(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addAdidasWebAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post_actions__WEBPACK_IMPORTED_MODULE_2__["ADD_CAMPAIGN_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post_actions__WEBPACK_IMPORTED_MODULE_2__["ADD_CAMPAIGN_FAILURE"],
      error: e
    });
  }
}

function* watchAddAdidasWeb() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post_actions__WEBPACK_IMPORTED_MODULE_2__["ADD_CAMPAIGN_REQUEST"], addAdidasWeb);
}

function removeCampaignAPI(postData) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/post/${postData}`, {
    withCredentials: true
  });
}

function* removeCampaign(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removeCampaignAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post_actions__WEBPACK_IMPORTED_MODULE_2__["REMOVE_CAMPAIGN_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post_actions__WEBPACK_IMPORTED_MODULE_2__["REMOVE_CAMPAIGN_FAILURE"],
      error: e
    });
  }
}

function* watchRemoveName() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post_actions__WEBPACK_IMPORTED_MODULE_2__["REMOVE_CAMPAIGN_REQUEST"], removeCampaign);
}

function loadDataAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/post/list', {
    withCredentials: true
  });
}

function* loadData(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadDataAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post_actions__WEBPACK_IMPORTED_MODULE_2__["LOAD_DATA_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post_actions__WEBPACK_IMPORTED_MODULE_2__["LOAD_DATA_FAILURE"],
      error: e
    });
  }
}

function* watchLoadData() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post_actions__WEBPACK_IMPORTED_MODULE_2__["LOAD_DATA_REQUEST"], loadData);
}

function renderCampaignAPI(postData) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/post/campaign', postData, {
    withCredentials: true
  });
}

function* renderCampaign(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(renderCampaignAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post_actions__WEBPACK_IMPORTED_MODULE_2__["RENDER_CAMPAIGN_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post_actions__WEBPACK_IMPORTED_MODULE_2__["RENDER_CAMPAIGN_FAILURE"],
      error: e
    });
  }
}

function* watchRenderCampaign() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post_actions__WEBPACK_IMPORTED_MODULE_2__["RENDER_CAMPAIGN_REQUEST"], renderCampaign);
}

function searchCampaignAPI(search) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/post/search/${encodeURIComponent(search)}`);
}

function* searchCampaign(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(searchCampaignAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post_actions__WEBPACK_IMPORTED_MODULE_2__["SEARCH_CAMPAIGN_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post_actions__WEBPACK_IMPORTED_MODULE_2__["SEARCH_CAMPAIGN_FAILURE"],
      error: e
    });
  }
}

function* watchsearchCampaign() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post_actions__WEBPACK_IMPORTED_MODULE_2__["SEARCH_CAMPAIGN_REQUEST"], searchCampaign);
}

function downloadFileAPI(file_name) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/post/download/${encodeURIComponent(file_name)}`);
}

function* downloadFile(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(downloadFileAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post_actions__WEBPACK_IMPORTED_MODULE_2__["DOWNLOAD_FILE_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post_actions__WEBPACK_IMPORTED_MODULE_2__["DOWNLOAD_FILE_FAILURE"],
      error: e
    });
  }
}

function* watchDownloadFile() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post_actions__WEBPACK_IMPORTED_MODULE_2__["DOWNLOAD_FILE_REQUEST"], downloadFile);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddAdidasWeb), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadData), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRenderCampaign), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchsearchCampaign), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemoveName), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchDownloadFile)]);
}

/***/ }),

/***/ "./store/configureStore.ts":
/*!*********************************!*\
  !*** ./store/configureStore.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./reducers/index.ts");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.ts");







// const loggerMiddleware = ({ dispatch, getState }) => (next) => (action) => {
//   console.log(action);
//   return next(action);
// };
const configureStore = context => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()();
  const middlewares = [sagaMiddleware
  /* loggerMiddleware */
  ];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]); // ( store as SagaStore ).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9BZGlkYXNNb2JpbGUudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0L2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvcG9zdC9yZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3NhZ2FzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NhZ2FzL3Bvc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvY29uZmlndXJlU3RvcmUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiJdLCJuYW1lcyI6WyJiYWNrVXJsIiwiQWRpZGFzTW9iaWxlIiwiY29udGVudCIsImRldmljZSIsImJyYW5kIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRWZmZWN0IiwicGFyc2luZ1N0YXRpYyIsImxvYWREYXRhUmVxdWVzdEFjdGlvbiIsImh0bWxzIiwiX19odG1sIiwicG4iLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJ3cmFwcGVyIiwiY29udGV4dCIsInN0b3JlIiwiY2hlY2tCcmFuZFJlcXVlc3RBY3Rpb24iLCJzZXRIb3ZlckFjdGlvbiIsIkVORCIsInNhZ2FUYXNrIiwidG9Qcm9taXNlIiwicHJvcHMiLCJwYXRobmFtZSIsImNvbmZpZ3MiLCJpbWdzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwidmlkZW9zIiwiUGFyc2VyIiwiZWxlbSIsImZvckVhY2giLCJ2YWwiLCJpbmRleCIsIm5vZGVOYW1lIiwib3JpZ2luYWwiLCJzcmMiLCJzcGxpdE9yaWdpbmFsIiwic3BsaXQiLCJpbmRleE9mIiwicG9zdGVyIiwiSW5jbHVkZSIsImdldEFycmF5IiwiZmlsZXMiLCJhcnJheSIsIkFycmF5IiwiaXRlbSIsImZpbGVOYW1lIiwicmVwbGFjZSIsInB1c2giLCJKUyIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiY2xhc3NMaXN0IiwiYWRkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJhcHBlbmRDaGlsZCIsIkNTUyIsInJlbCIsImhyZWYiLCJtZWRpYSIsInNjcmlwdHMiLCJpIiwibGVuZ3RoIiwiY29udGFpbnMiLCJyZW1vdmUiLCJjc3MiLCJzY3JpcHQiLCJzY3JpcHRMZW5ndGgiLCJhZnRlciIsImFwcGVuZCIsImJnIiwiYmdMZW5ndGgiLCJTVFlMRSIsInF1ZXJ5U2VsZWN0b3IiLCJwcmVwZW5kIiwiSG9tZSIsInJvb3RSZWR1Y2VyIiwiYWN0aW9uIiwiSFlEUkFURSIsImNvbnNvbGUiLCJsb2ciLCJwYXlsb2FkIiwiY29tYmluZVJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJBRERfQ0FNUEFJR05fUkVRVUVTVCIsIkFERF9DQU1QQUlHTl9TVUNDRVNTIiwiQUREX0NBTVBBSUdOX0ZBSUxVUkUiLCJSRU1PVkVfQ0FNUEFJR05fUkVRVUVTVCIsIlJFTU9WRV9DQU1QQUlHTl9TVUNDRVNTIiwiUkVNT1ZFX0NBTVBBSUdOX0ZBSUxVUkUiLCJSRU5ERVJfQ0FNUEFJR05fUkVRVUVTVCIsIlJFTkRFUl9DQU1QQUlHTl9TVUNDRVNTIiwiUkVOREVSX0NBTVBBSUdOX0ZBSUxVUkUiLCJTRUFSQ0hfQ0FNUEFJR05fUkVRVUVTVCIsIlNFQVJDSF9DQU1QQUlHTl9TVUNDRVNTIiwiU0VBUkNIX0NBTVBBSUdOX0ZBSUxVUkUiLCJDSEVDS19CUkFORF9SRVFVRVNUIiwiQ0hFQ0tfQlJBTkRfU1VDQ0VTUyIsIkNIRUNLX0JSQU5EX0ZBSUxVUkUiLCJMT0FEX0RBVEFfUkVRVUVTVCIsIkxPQURfREFUQV9TVUNDRVNTIiwiTE9BRF9EQVRBX0ZBSUxVUkUiLCJTRVRfSE9WRVIiLCJTRVRfVE9HR0xFIiwiRE9XTkxPQURfRklMRV9SRVFVRVNUIiwiRE9XTkxPQURfRklMRV9TVUNDRVNTIiwiRE9XTkxPQURfRklMRV9GQUlMVVJFIiwiYWRkQ2FtcGFpZ25SZXF1ZXN0QWN0aW9uIiwiY2FtcGFpZ24iLCJkYXRhIiwiYWRkQ2FtcGFpZ25TdWNjZXNzQWN0aW9uIiwiYWRkQ2FtcGFpZ25GYWlsdXJlQWN0aW9uIiwicmVtb3ZlQ2FtcGFpZ25SZXF1ZXN0QWN0aW9uIiwibGlzdElkIiwicmVtb3ZlQ2FtcGFpZ25TdWNjZXNzQWN0aW9uIiwicmVtb3ZlQ2FtcGFpZ25GYWlsdXJlQWN0aW9uIiwibG9hZERhdGFTdWNjZXNzQWN0aW9uIiwibG9hZERhdGFGYWlsdXJlQWN0aW9uIiwiY2hlY2tCcmFuZFN1Y2Nlc3NBY3Rpb24iLCJjaGVja0JyYW5kRmFpbHVyZUFjdGlvbiIsInJlbmRlckNhbXBhaWduUmVxdWVzdEFjdGlvbiIsInllYXIiLCJyZW5kZXJDYW1wYWlnblN1Y2Nlc3NBY3Rpb24iLCJyZW5kZXJDYW1wYWlnbkZhaWx1cmVBY3Rpb24iLCJzZWFyY2hDYW1wYWlnblJlcXVlc3RBY3Rpb24iLCJzZWFyY2hDYW1wYWlnblN1Y2Nlc3NBY3Rpb24iLCJzZWFyY2hDYW1wYWlnbkZhaWx1cmVBY3Rpb24iLCJob3ZlciIsInNldFRvZ2dsZUFjdGlvbiIsInRvZ2dsZSIsImRvd25sb2FkRmlsZVJlcXVlc3RBY3Rpb24iLCJkb3dubG9hZEZpbGVTdWNjZXNzQWN0aW9uIiwiZG93bmxvYWRGaWxlRmFpbHVyZUFjdGlvbiIsImluaXRpYWxTdGF0ZSIsImxpc3QiLCJrZXl3b3JkIiwibGlzdERlbGV0ZWQiLCJpc0FkZGluZ0RhdGEiLCJpc0xvYWRpbmdEYXRhIiwibG9hZGluZ0RhdGFFcnJvclJlYXNvbiIsImFkZGluZ0RhdGFFcnJvclJlYXNvbiIsInN1Y2Nlc3NTZW5kaW5nRmlsZU5hbWUiLCJwcm9kdWNlIiwiZHJhZnQiLCJmaW5kSW5kZXgiLCJ2IiwiaWQiLCJzcGxpY2UiLCJzZWFyY2giLCJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsIndpdGhDcmVkZW50aWFscyIsInJvb3RTYWdhIiwiYWxsIiwiZm9yayIsImFkZEFkaWRhc1dlYkFQSSIsInBvc3REYXRhIiwiYWRkQWRpZGFzV2ViIiwicmVzdWx0IiwiY2FsbCIsInB1dCIsImUiLCJlcnJvciIsIndhdGNoQWRkQWRpZGFzV2ViIiwidGFrZUxhdGVzdCIsInJlbW92ZUNhbXBhaWduQVBJIiwiZGVsZXRlIiwicmVtb3ZlQ2FtcGFpZ24iLCJ3YXRjaFJlbW92ZU5hbWUiLCJsb2FkRGF0YUFQSSIsImxvYWREYXRhIiwid2F0Y2hMb2FkRGF0YSIsInJlbmRlckNhbXBhaWduQVBJIiwicmVuZGVyQ2FtcGFpZ24iLCJ3YXRjaFJlbmRlckNhbXBhaWduIiwic2VhcmNoQ2FtcGFpZ25BUEkiLCJnZXQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzZWFyY2hDYW1wYWlnbiIsIndhdGNoc2VhcmNoQ2FtcGFpZ24iLCJkb3dubG9hZEZpbGVBUEkiLCJmaWxlX25hbWUiLCJkb3dubG9hZEZpbGUiLCJ3YXRjaERvd25sb2FkRmlsZSIsInBvc3RTYWdhIiwiY29uZmlndXJlU3RvcmUiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwiY3JlYXRlU3RvcmUiLCJyZWR1Y2VyIiwicnVuIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBTyxNQUFNQSxPQUFPLEdBQUcsUUFBd0MsU0FBeEMsR0FBeUYsdUJBQXpHLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBUDtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxNQUFNQyxZQUFxQyxHQUFHLE1BQU07QUFDaEQsUUFBTTtBQUFFQyxXQUFGO0FBQVdDLFVBQVg7QUFBbUJDO0FBQW5CLE1BQTZCQywrREFBVyxDQUFFQyxLQUFELElBQXNCQSxLQUFLLENBQUNDLElBQTdCLENBQTlDO0FBQ0EsUUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUVBQyx5REFB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SixXQUFKLENBQWhCLENBRnZCO0FBR0EsUUFBTTlLLEtBQUssR0FBR21MLHlEQUFXLENBQUNDLGlEQUFELEVBQVVMLFFBQVYsQ0FBekI7QUFDQy9LLE9BQUQsQ0FBcUJJLFFBQXJCLEdBQWdDd0ssY0FBYyxDQUFDUyxHQUFmLENBQW1CM0MsOENBQW5CLENBQWhDLENBUG1FLENBUW5FOztBQUNBLFNBQU8xSSxLQUFQO0FBQ0QsQ0FWRDs7QUFZQSxNQUFNRixPQUFPLEdBQUd3TCx3RUFBYSxDQUFDWCxjQUFELEVBQWlCO0FBQzVDWSxPQUFLO0FBRHVDLENBQWpCLENBQTdCO0FBSWV6TCxzRUFBZixFOzs7Ozs7Ozs7OztBQ25DQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9BZGlkYXNNb2JpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL0FkaWRhc01vYmlsZS50c3hcIik7XG4iLCJleHBvcnQgY29uc3QgYmFja1VybCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyAnaHR0cHM6Ly9jYW1wYWlnbi12aWV3ZXItc2VydmVyLmhlcm9rdWFwcC5jb20nIDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzA2NSc7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gJy4uL3JlZHVjZXJzJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHsgRU5EIH0gZnJvbSAncmVkdXgtc2FnYSc7XHJcbmltcG9ydCB3cmFwcGVyLCB7IFNhZ2FTdG9yZSB9IGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuaW1wb3J0IHsgY2hlY2tCcmFuZFJlcXVlc3RBY3Rpb24sIGxvYWREYXRhUmVxdWVzdEFjdGlvbiwgc2V0SG92ZXJBY3Rpb24gfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0L2FjdGlvbnMnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHBhcnNpbmdTdGF0aWMgfSBmcm9tICcuJztcclxuXHJcbmNvbnN0IEFkaWRhc01vYmlsZTogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGNvbnRlbnQsIGRldmljZSwgYnJhbmQgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZiggY29udGVudCApIHtcclxuICAgICAgICAgICAgcGFyc2luZ1N0YXRpYyhkZXZpY2UsIGJyYW5kLCBjb250ZW50KTtcclxuICAgICAgICAgICAgZGlzcGF0Y2gobG9hZERhdGFSZXF1ZXN0QWN0aW9uKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sW2RldmljZSwgYnJhbmQsIGNvbnRlbnRdKVxyXG5cclxuICAgIGZ1bmN0aW9uIGh0bWxzICgpIHtcclxuICAgICAgICBpZiggY29udGVudCApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgX19odG1sOiBjb250ZW50LnBuIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtjb250ZW50ID8gPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17aHRtbHMoKX0gLz4gOiA8ZGl2PuyVhOuUlOuLpOyKpCDrqqjrsJTsnbw8YnIvPuuqqOuwlOydvCDrqqjrk5zsl5DshJwg67O07Iuc64qU6rKD7J2EIOq2jOyepSDrk5zrpr3ri4jri6QuPC9kaXY+fVxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyggYXN5bmMoIGNvbnRleHQgKSA9PiB7XHJcbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKGNoZWNrQnJhbmRSZXF1ZXN0QWN0aW9uKCdtb2JpbGUnLCAnYWRpZGFzJykpO1xyXG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaChzZXRIb3ZlckFjdGlvbignMDInKSk7XHJcbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKGxvYWREYXRhUmVxdWVzdEFjdGlvbigpKTtcclxuICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goIEVORCApO1xyXG4gICAgYXdhaXQgKGNvbnRleHQuc3RvcmUgYXMgU2FnYVN0b3JlKS5zYWdhVGFzay50b1Byb21pc2UoKTtcclxuICAgIHJldHVybiB7IFxyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lOiAnL0FkaWRhc01vYmlsZScsXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRpZGFzTW9iaWxlOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tICcuLi9yZWR1Y2Vycyc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCB7IEVORCB9IGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5pbXBvcnQgd3JhcHBlciwgeyBTYWdhU3RvcmUgfSBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcbmltcG9ydCB7IGNoZWNrQnJhbmRSZXF1ZXN0QWN0aW9uLCBsb2FkRGF0YVJlcXVlc3RBY3Rpb24sIHNldEhvdmVyQWN0aW9uIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdC9hY3Rpb25zJztcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWdzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/ICdjYW1wYWlnbi12aWV3ZXIuaGVyb2t1YXBwLmNvbScgOiAnaHR0cDovL2xvY2FsaG9zdDozMDYwJztcclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNpbmdTdGF0aWMoZGV2aWNlLCBicmFuZCwgY29udGVudCkge1xyXG4gICAgLy8g7KCV7KCBIOuNsOydtO2EsCDso7zshozqsr3roZwg67OA6rK9XHJcbiAgICBjb25zdCBpbWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRlbnQtZnJhbWUgaW1nJyk7XHJcbiAgICBjb25zdCB2aWRlb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGVudC1mcmFtZSB2aWRlbycpO1xyXG4gICAgY29uc3QgUGFyc2VyID0gKCBlbGVtICkgPT4ge1xyXG4gICAgICAgIGVsZW0uZm9yRWFjaCggZnVuY3Rpb24gKCB2YWwsIGluZGV4ICl7XHJcbiAgICAgICAgICAgIC8vIGltYWdlXHJcbiAgICAgICAgICAgIGlmKCBlbGVtWyBpbmRleCBdLm5vZGVOYW1lID09IFwiSU1HXCIgKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbCA9IGVsZW1bIGluZGV4IF0uc3JjO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BsaXRPcmlnaW5hbCA9IG9yaWdpbmFsLnNwbGl0KGNvbmZpZ3MsIDIpO1xyXG4gICAgICAgICAgICAgICAgaWYoIGRldmljZSA9PSBcIndlYlwiICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCBlbGVtWyBpbmRleCBdLnNyYy5pbmRleE9mKCdodHRwczovL2tpYmFla3NhLmdpdGh1Yi5pby9hZGlkYXNXZWIvZnJvbnQvJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbVsgaW5kZXggXS5zcmMgPSAnaHR0cHM6Ly9raWJhZWtzYS5naXRodWIuaW8vYWRpZGFzV2ViL2Zyb250LycgKyBzcGxpdE9yaWdpbmFsWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9yaWdpbmFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbVsgaW5kZXggXS5zcmMgPSBvcmlnaW5hbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCBlbGVtWyBpbmRleCBdLnNyYy5pbmRleE9mKCdodHRwczovL2tpYmFla3NhLmdpdGh1Yi5pby9hZGlkYXNNb2JpbGUvbW9iaWxlLycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1bIGluZGV4IF0uc3JjID0gJ2h0dHBzOi8va2liYWVrc2EuZ2l0aHViLmlvL2FkaWRhc01vYmlsZS9tb2JpbGUvJyArIHNwbGl0T3JpZ2luYWxbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbVsgaW5kZXggXS5zcmMgPSBvcmlnaW5hbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gdmlkZW9cclxuICAgICAgICAgICAgaWYoIGVsZW1bIGluZGV4IF0ubm9kZU5hbWUgPT0gXCJWSURFT1wiICkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWwgPSBlbGVtWyBpbmRleCBdLnBvc3RlcjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNwbGl0T3JpZ2luYWwgPSBvcmlnaW5hbC5zcGxpdChjb25maWdzLCAyKTtcclxuICAgICAgICAgICAgICAgIGlmICggZGV2aWNlID09IFwid2ViXCIgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIGVsZW1bIGluZGV4IF0ucG9zdGVyLmluZGV4T2YoJ2h0dHBzOi8va2liYWVrc2EuZ2l0aHViLmlvL2FkaWRhc1dlYi9mcm9udC8nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtWyBpbmRleCBdLnBvc3RlciA9ICdodHRwczovL2tpYmFla3NhLmdpdGh1Yi5pby9hZGlkYXNXZWIvZnJvbnQvJyArIHNwbGl0T3JpZ2luYWxbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbVsgaW5kZXggXS5wb3N0ZXIgPSBvcmlnaW5hbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCBlbGVtWyBpbmRleCBdLnBvc3Rlci5pbmRleE9mKCdodHRwczovL2tpYmFla3NhLmdpdGh1Yi5pby9hZGlkYXNNb2JpbGUvbW9iaWxlLycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1bIGluZGV4IF0ucG9zdGVyID0gJ2h0dHBzOi8va2liYWVrc2EuZ2l0aHViLmlvL2FkaWRhc01vYmlsZS9tb2JpbGUvJyArIHNwbGl0T3JpZ2luYWxbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbVsgaW5kZXggXS5wb3N0ZXIgPSBvcmlnaW5hbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSAgICAgICAgICAgIFxyXG4gICAgbmV3IFBhcnNlciggaW1ncyApO1xyXG4gICAgbmV3IFBhcnNlciggdmlkZW9zICk7XHJcblxyXG4gICAgLy8gSlMsIENTUyDstpTqsIDtlZjripQg7J247YG066Oo65OcIOqwneyytFxyXG4gICAgY29uc3QgSW5jbHVkZSA9IHtcclxuICAgICAgICBnZXRBcnJheTogZnVuY3Rpb24gKCBmaWxlcyApe1xyXG4gICAgICAgICAgICBjb25zdCBhcnJheSA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gZmlsZXMuc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgaXRlbS5mb3JFYWNoKGZ1bmN0aW9uICggZmlsZU5hbWUsIGluZGV4ICl7XHJcbiAgICAgICAgICAgICAgICBmaWxlTmFtZSA9IGZpbGVOYW1lLnJlcGxhY2UoL15cXHMvLCAnJykucmVwbGFjZSgvXFxzJC8sICcnKTtcclxuICAgICAgICAgICAgICAgIGFycmF5LnB1c2goZmlsZU5hbWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgSlM6IGZ1bmN0aW9uICggZmlsZXMgKXtcclxuICAgICAgICAgICAgdGhpcy5nZXRBcnJheSggZmlsZXMgKS5mb3JFYWNoKGZ1bmN0aW9uICggZmlsZU5hbWUsIGluZGV4ICl7XHJcbiAgICAgICAgICAgICAgICBsZXQgSlMgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgICAgICAgICAgICBKUy50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XHJcbiAgICAgICAgICAgICAgICBKUy5zcmMgID0gJy9qcy8nICsgZmlsZU5hbWUgKyAnLmpzJztcclxuICAgICAgICAgICAgICAgIEpTLmNsYXNzTGlzdC5hZGQoJ3B1dFNjcmlwdENsYXNzJyk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKEpTKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBDU1M6IGZ1bmN0aW9uICggZmlsZXMgKXtcclxuICAgICAgICAgICAgdGhpcy5nZXRBcnJheShmaWxlcykuZm9yRWFjaChmdW5jdGlvbiAoIGZpbGVOYW1lLCBpbmRleCApe1xyXG4gICAgICAgICAgICAgICAgbGV0IENTUyAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xyXG4gICAgICAgICAgICAgICAgQ1NTLnJlbCAgID0gJ3N0eWxlc2hlZXQnO1xyXG4gICAgICAgICAgICAgICAgQ1NTLnR5cGUgID0gJ3RleHQvY3NzJztcclxuICAgICAgICAgICAgICAgIENTUy5jbGFzc0xpc3QuYWRkKCdwdXRDc3NDbGFzcycpO1xyXG4gICAgICAgICAgICAgICAgQ1NTLmhyZWYgID0gJy9jc3MvJyArIGZpbGVOYW1lICsgJy5jc3MnO1xyXG4gICAgICAgICAgICAgICAgQ1NTLm1lZGlhID0gJ3NjcmVlbic7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKCBDU1MgKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgLy8g7J247YG066Oo65OcIOuPmeyggSDsgr3snoVcclxuICAgIGlmKCBkZXZpY2UgPT0gXCJ3ZWJcIiApIHtcclxuICAgICAgICBjb25zdCBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0Jyk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChzY3JpcHRzW2ldLmNsYXNzTGlzdC5jb250YWlucyhcInB1dFNjcmlwdENsYXNzXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBzY3JpcHRzW2ldLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9ICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY3NzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbGluaycpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY3NzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChjc3NbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwicHV0Q3NzQ2xhc3NcIikpIHtcclxuICAgICAgICAgICAgICAgIGNzc1tpXS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCBicmFuZCA9PSBcImFkaWRhc1wiICkge1xyXG4gICAgICAgICAgICBJbmNsdWRlLkpTKCdtb2RhbFBvcHVwLm1pbiwgYWRpZGFzJyk7XHJcbiAgICAgICAgICAgIEluY2x1ZGUuQ1NTKCdzbGljaywgYWRpZGFzX3IsIHJlc2V0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCBicmFuZCA9PSBcInJlZWJva1wiICl7XHJcbiAgICAgICAgICAgIEluY2x1ZGUuSlMoJ21vZGFsUG9wdXAubWluLCBjb21tb24nKTtcclxuICAgICAgICAgICAgSW5jbHVkZS5DU1MoJ3NsaWNrLCByZWVib2ssIHJlc2V0LCBjb21tb24nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiggZGV2aWNlID09IFwibW9iaWxlXCIgKSB7XHJcbiAgICAgICAgY29uc3Qgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoc2NyaXB0c1tpXS5jbGFzc0xpc3QuY29udGFpbnMoXCJwdXRTY3JpcHRDbGFzc1wiKSkge1xyXG4gICAgICAgICAgICAgICAgc2NyaXB0c1tpXS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2xpbmsnKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNzcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoY3NzW2ldLmNsYXNzTGlzdC5jb250YWlucyhcInB1dENzc0NsYXNzXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBjc3NbaV0ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiggYnJhbmQgPT0gXCJhZGlkYXNcIiApIHtcclxuICAgICAgICAgICAgSW5jbHVkZS5KUygnbW9kYWxQb3B1cC5taW4sIGFkaWRhcycpO1xyXG4gICAgICAgICAgICBJbmNsdWRlLkNTUygnc2xpY2ssIHN0eWxlLCBmb250cywgc3R5bGVfcmVlYm9rJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCBicmFuZCA9PSBcInJlZWJva1wiICl7XHJcbiAgICAgICAgICAgIEluY2x1ZGUuSlMoJ21vZGFsUG9wdXAubWluJyk7XHJcbiAgICAgICAgICAgIEluY2x1ZGUuQ1NTKCdzbGljaywgc3R5bGUsIGZvbnRzLCByZWVib2tfbSwgc3R5bGVfcm0sIGNvbW1vbl9ybScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBBeGlvcyDthrXsi6DsnLzroZwg66CM642U66eBIO2bhCDrsLDqsr3siqTtg4Dsnbwg6rSA66CoIOuNsOydtO2EsCDrpqzroZzrk5w6IGJhY2tlbmTsl5DshJwg6rCA6rO1IO2bhCByZXNwb25zZS5cclxuICAgIGlmKCBkZXZpY2UgPT0gXCJ3ZWJcIiAmJiBicmFuZCA9PSBcImFkaWRhc1wiICkge1xyXG4gICAgICAgIC8vIOy6oO2OmOyduCDrgrTrtoAg7Iqk7YGs66a97Yq4XHJcbiAgICAgICAgaWYoIGNvbnRlbnQuc2NyaXB0ICkge1xyXG4gICAgICAgICAgICBjb25zdCBzY3JpcHRMZW5ndGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY29udGFpbmVyX3Igc2NyaXB0JykubGVuZ3RoO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY29udGFpbmVyX3Igc2NyaXB0Jylbc2NyaXB0TGVuZ3RoLTFdLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBKUyAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NvbnRhaW5lcl9yIHNjcmlwdCcpW3NjcmlwdExlbmd0aC0yXS5hZnRlcihKUyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjb250YWluZXJfciBzY3JpcHQnKVtzY3JpcHRMZW5ndGgtMV0uYXBwZW5kKGNvbnRlbnQuc2NyaXB0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g7Lqg7Y6Y7J24IOuCtOu2gCDsiqTtg4DsnbxcclxuICAgICAgICBpZiggY29udGVudC5iZyApIHtcclxuICAgICAgICAgICAgY29uc3QgYmdMZW5ndGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY29udGFpbmVyX3Igc3R5bGUnKS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjb250YWluZXJfciBzdHlsZScpW2JnTGVuZ3RoLTFdLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBTVFlMRSAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyX3IgZGl2JykucHJlcGVuZChTVFlMRSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjb250YWluZXJfciBzdHlsZScpWzBdLmFwcGVuZChjb250ZW50LmJnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiggZGV2aWNlID09IFwibW9iaWxlXCIgJiYgYnJhbmQgPT0gXCJhZGlkYXNcIiApIHtcclxuICAgICAgICBpZiggY29udGVudC5zY3JpcHQgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjcmlwdExlbmd0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjb250YWluZXIgc2NyaXB0JykubGVuZ3RoO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY29udGFpbmVyIHNjcmlwdCcpW3NjcmlwdExlbmd0aC0xXS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgY29uc3QgSlMgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjb250YWluZXIgc2NyaXB0Jylbc2NyaXB0TGVuZ3RoLTJdLmFmdGVyKEpTKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NvbnRhaW5lciBzY3JpcHQnKVtzY3JpcHRMZW5ndGgtMV0uYXBwZW5kKGNvbnRlbnQuc2NyaXB0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIGNvbnRlbnQuYmcgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJnTGVuZ3RoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NvbnRhaW5lciBzdHlsZScpLmxlbmd0aDtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NvbnRhaW5lciBzdHlsZScpW2JnTGVuZ3RoLTFdLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBTVFlMRSAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyIGRpdicpLnByZXBlbmQoU1RZTEUpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY29udGFpbmVyIHN0eWxlJylbMF0uYXBwZW5kKGNvbnRlbnQuYmcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmKCBkZXZpY2UgPT0gXCJ3ZWJcIiAmJiBicmFuZCA9PSBcInJlZWJva1wiICkge1xyXG4gICAgICAgIGlmKCBjb250ZW50LnNjcmlwdCApIHtcclxuICAgICAgICAgICAgY29uc3Qgc2NyaXB0TGVuZ3RoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NvbnRlbnRzX3dyYXAgc2NyaXB0JykubGVuZ3RoO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY29udGVudHNfd3JhcCBzY3JpcHQnKVtzY3JpcHRMZW5ndGgtMV0ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IEpTICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY29udGVudHNfd3JhcCBzY3JpcHQnKVtzY3JpcHRMZW5ndGgtMl0uYWZ0ZXIoSlMpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY29udGVudHNfd3JhcCBzY3JpcHQnKVtzY3JpcHRMZW5ndGgtMV0uYXBwZW5kKGNvbnRlbnQuc2NyaXB0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIGNvbnRlbnQuYmcgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJnTGVuZ3RoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NvbnRlbnRzX3dyYXAgc3R5bGUnKS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjb250ZW50c193cmFwIHN0eWxlJylbYmdMZW5ndGgtMV0ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IFNUWUxFICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50c193cmFwIGRpdicpLmFwcGVuZChTVFlMRSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjb250ZW50c193cmFwIHN0eWxlJylbMF0uYXBwZW5kKGNvbnRlbnQuYmcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmKCBkZXZpY2UgPT0gXCJtb2JpbGVcIiAmJiBicmFuZCA9PSBcInJlZWJva1wiICkge1xyXG4gICAgICAgIGlmKCBjb250ZW50LnNjcmlwdCApIHtcclxuICAgICAgICAgICAgY29uc3Qgc2NyaXB0TGVuZ3RoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NvbnRlbnRzIHNjcmlwdCcpLmxlbmd0aDtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NvbnRlbnRzIHNjcmlwdCcpW3NjcmlwdExlbmd0aC0xXS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgY29uc3QgSlMgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjb250ZW50cyBzY3JpcHQnKVtzY3JpcHRMZW5ndGgtMl0uYWZ0ZXIoSlMpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY29udGVudHMgc2NyaXB0Jylbc2NyaXB0TGVuZ3RoLTFdLmFwcGVuZChjb250ZW50LnNjcmlwdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCBjb250ZW50LmJnICkge1xyXG4gICAgICAgICAgICBjb25zdCBiZ0xlbmd0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjb250ZW50cyBzdHlsZScpLmxlbmd0aDtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NvbnRlbnRzIHN0eWxlJylbYmdMZW5ndGgtMV0ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IFNUWUxFICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50cyBkaXYnKS5wcmVwZW5kKFNUWUxFKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NvbnRlbnRzIHN0eWxlJylbMF0uYXBwZW5kKGNvbnRlbnQuYmcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgSG9tZTogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGNvbnRlbnQsIGRldmljZSwgYnJhbmQgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZiggY29udGVudCApIHtcclxuICAgICAgICAgICAgcGFyc2luZ1N0YXRpYyhkZXZpY2UsIGJyYW5kLCBjb250ZW50KTtcclxuICAgICAgICAgICAgZGlzcGF0Y2gobG9hZERhdGFSZXF1ZXN0QWN0aW9uKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtkZXZpY2UsIGJyYW5kLCBjb250ZW50XSk7XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGh0bWxzICgpIHtcclxuICAgICAgICBpZiggY29udGVudCApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgX19odG1sOiBjb250ZW50LnBuIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7Y29udGVudCA/IDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyBodG1scygpIH0gLz4gOiA8ZGl2PuyVhOuUlOuLpOyKpCDsm7k8L2Rpdj59XHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IHdyYXBwZXIuZ2V0U2VydmVyU2lkZVByb3BzKCBhc3luYyggY29udGV4dCApID0+IHtcclxuICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goY2hlY2tCcmFuZFJlcXVlc3RBY3Rpb24oJ3dlYicsICdhZGlkYXMnKSk7XHJcbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHNldEhvdmVyQWN0aW9uKCcwMScpKTtcclxuICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2gobG9hZERhdGFSZXF1ZXN0QWN0aW9uKCkpO1xyXG4gICAgLy8gY29uc3Qgc3RhdGUgPSBjb250ZXh0LnN0b3JlLmdldFN0YXRlKCk7XHJcbiAgICAvLyBpZiggc3RhdGUucG9zdC5jb250ZW50ICkge1xyXG4gICAgLy8gfVxyXG4gICAgLy8gY29uc3QgaXNTZXJ2ZXI6IGJvb2xlYW4gPSAhIWNvbnRleHQucmVxO1xyXG4gICAgLy8gY29uc3QgY29va2llID0gaXNTZXJ2ZXIgPyBjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZSA6ICcnO1xyXG4gICAgLy8gY29uc29sZS5sb2coaXNTZXJ2ZXIsJ+yXrOq4sOyXrOq4sCcpO1xyXG4gICAgLy8gaWYgKCBjb250ZXh0LnJlcSAmJiBjb29raWUgKSBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9IGNvb2tpZTtcclxuICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goIEVORCApO1xyXG4gICAgYXdhaXQgKGNvbnRleHQuc3RvcmUgYXMgU2FnYVN0b3JlKS5zYWdhVGFzay50b1Byb21pc2UoKTtcclxuICAgIHJldHVybiB7IFxyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lOiAnLycsXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyIsImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgeyBBbnlBY3Rpb24sIGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbmltcG9ydCBwb3N0IGZyb20gJy4vcG9zdC9yZWR1Y2VyJztcclxuaW1wb3J0IHsgUG9zdFN0YXRlIH0gZnJvbSAnLi9wb3N0JztcclxuXHJcbmV4cG9ydCB0eXBlIFN0YXRlID0ge1xyXG4gIHBvc3Q6IFBvc3RTdGF0ZTtcclxufTtcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gKCBzdGF0ZTogU3RhdGUsIGFjdGlvbjogQW55QWN0aW9uICk6IFN0YXRlID0+IHtcclxuICBzd2l0Y2ggKCBhY3Rpb24udHlwZSApIHtcclxuICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgY29uc29sZS5sb2coJ0hZRFJBVEUnLGFjdGlvbik7XHJcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgY29uc3QgY29tYmluZVJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnM8e1xyXG4gICAgICAgIHBvc3Q6IFBvc3RTdGF0ZSxcclxuICAgICAgfT4oe1xyXG4gICAgICAgIHBvc3QsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gY29tYmluZVJlZHVjZXIoIHN0YXRlLCBhY3Rpb24gKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygcm9vdFJlZHVjZXI+O1xyXG4iLCJleHBvcnQgY29uc3QgQUREX0NBTVBBSUdOX1JFUVVFU1QgPSAnQUREX0NBTVBBSUdOX1JFUVVFU1QnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQUREX0NBTVBBSUdOX1NVQ0NFU1MgPSAnQUREX0NBTVBBSUdOX1NVQ0NFU1MnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQUREX0NBTVBBSUdOX0ZBSUxVUkUgPSAnQUREX0NBTVBBSUdOX0ZBSUxVUkUnIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9DQU1QQUlHTl9SRVFVRVNUID0gJ1JFTU9WRV9DQU1QQUlHTl9SRVFVRVNUJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9DQU1QQUlHTl9TVUNDRVNTID0gJ1JFTU9WRV9DQU1QQUlHTl9TVUNDRVNTJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9DQU1QQUlHTl9GQUlMVVJFID0gJ1JFTU9WRV9DQU1QQUlHTl9GQUlMVVJFJyBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBSRU5ERVJfQ0FNUEFJR05fUkVRVUVTVCA9ICdSRU5ERVJfQ0FNUEFJR05fUkVRVUVTVCcgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBSRU5ERVJfQ0FNUEFJR05fU1VDQ0VTUyA9ICdSRU5ERVJfQ0FNUEFJR05fU1VDQ0VTUycgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBSRU5ERVJfQ0FNUEFJR05fRkFJTFVSRSA9ICdSRU5ERVJfQ0FNUEFJR05fRkFJTFVSRScgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgU0VBUkNIX0NBTVBBSUdOX1JFUVVFU1QgPSAnU0VBUkNIX0NBTVBBSUdOX1JFUVVFU1QnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgU0VBUkNIX0NBTVBBSUdOX1NVQ0NFU1MgPSAnU0VBUkNIX0NBTVBBSUdOX1NVQ0NFU1MnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgU0VBUkNIX0NBTVBBSUdOX0ZBSUxVUkUgPSAnU0VBUkNIX0NBTVBBSUdOX0ZBSUxVUkUnIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IENIRUNLX0JSQU5EX1JFUVVFU1QgPSAnQ0hFQ0tfQlJBTkRfUkVRVUVTVCcgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBDSEVDS19CUkFORF9TVUNDRVNTID0gJ0NIRUNLX0JSQU5EX1NVQ0NFU1MnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQ0hFQ0tfQlJBTkRfRkFJTFVSRSA9ICdDSEVDS19CUkFORF9GQUlMVVJFJyBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0RBVEFfUkVRVUVTVCA9ICdMT0FEX0RBVEFfUkVRVUVTVCcgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0RBVEFfU1VDQ0VTUyA9ICdMT0FEX0RBVEFfU1VDQ0VTUycgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0RBVEFfRkFJTFVSRSA9ICdMT0FEX0RBVEFfRkFJTFVSRScgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgU0VUX0hPVkVSID0gJ1NFVF9IT1ZFUicgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBTRVRfVE9HR0xFID0gJ1NFVF9UT0dHTEUnIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IERPV05MT0FEX0ZJTEVfUkVRVUVTVCA9ICdET1dOTE9BRF9GSUxFX1JFUVVFU1QnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgRE9XTkxPQURfRklMRV9TVUNDRVNTID0gJ0RPV05MT0FEX0ZJTEVfU1VDQ0VTUycgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBET1dOTE9BRF9GSUxFX0ZBSUxVUkUgPSAnRE9XTkxPQURfRklMRV9GQUlMVVJFJyBhcyBjb25zdDtcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENhbXBhaWduUmVxdWVzdEFjdGlvbiA9ICggY2FtcGFpZ246IHN0cmluZyApID0+ICh7XHJcbiAgICB0eXBlOiBBRERfQ0FNUEFJR05fUkVRVUVTVCxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBjYW1wYWlnblxyXG4gICAgfSxcclxufSlcclxuZXhwb3J0IGNvbnN0IGFkZENhbXBhaWduU3VjY2Vzc0FjdGlvbiA9ICggZGF0YTogb2JqZWN0ICkgPT4gKHtcclxuICAgIHR5cGU6IEFERF9DQU1QQUlHTl9TVUNDRVNTLFxyXG4gICAgZGF0YVxyXG59KVxyXG5leHBvcnQgY29uc3QgYWRkQ2FtcGFpZ25GYWlsdXJlQWN0aW9uID0gKCkgPT4gKHtcclxuICAgIHR5cGU6IEFERF9DQU1QQUlHTl9GQUlMVVJFLFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNhbXBhaWduUmVxdWVzdEFjdGlvbiA9ICggbGlzdElkOiBvYmplY3QgKSA9PiAoe1xyXG4gICAgdHlwZTogUkVNT1ZFX0NBTVBBSUdOX1JFUVVFU1QsXHJcbiAgICBkYXRhOiBsaXN0SWRcclxufSlcclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNhbXBhaWduU3VjY2Vzc0FjdGlvbiA9ICggZGF0YTogbnVtYmVyICkgPT4gKHtcclxuICAgIHR5cGU6IFJFTU9WRV9DQU1QQUlHTl9TVUNDRVNTLFxyXG4gICAgZGF0YVxyXG59KVxyXG5leHBvcnQgY29uc3QgcmVtb3ZlQ2FtcGFpZ25GYWlsdXJlQWN0aW9uID0gKCkgPT4gKHtcclxuICAgIHR5cGU6IFJFTU9WRV9DQU1QQUlHTl9GQUlMVVJFLFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWREYXRhUmVxdWVzdEFjdGlvbiA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiBMT0FEX0RBVEFfUkVRVUVTVCxcclxufSlcclxuZXhwb3J0IGNvbnN0IGxvYWREYXRhU3VjY2Vzc0FjdGlvbiA9ICggZGF0YTogYW55ICkgPT4gKHtcclxuICAgIHR5cGU6IExPQURfREFUQV9TVUNDRVNTLFxyXG4gICAgZGF0YVxyXG59KVxyXG5leHBvcnQgY29uc3QgbG9hZERhdGFGYWlsdXJlQWN0aW9uID0gKCkgPT4gKHtcclxuICAgIHR5cGU6IExPQURfREFUQV9GQUlMVVJFLFxyXG59KVxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgY2hlY2tCcmFuZFJlcXVlc3RBY3Rpb24gPSAoIGRldmljZT86IHN0cmluZywgYnJhbmQ/OiBzdHJpbmcgKSA9PiAoe1xyXG4gICAgdHlwZTogQ0hFQ0tfQlJBTkRfUkVRVUVTVCxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBkZXZpY2UsXHJcbiAgICAgICAgYnJhbmRcclxuICAgIH1cclxufSlcclxuZXhwb3J0IGNvbnN0IGNoZWNrQnJhbmRTdWNjZXNzQWN0aW9uID0gKCkgPT4gKHtcclxuICAgIHR5cGU6IENIRUNLX0JSQU5EX1NVQ0NFU1MsXHJcbn0pXHJcbmV4cG9ydCBjb25zdCBjaGVja0JyYW5kRmFpbHVyZUFjdGlvbiA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiBDSEVDS19CUkFORF9GQUlMVVJFLFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlckNhbXBhaWduUmVxdWVzdEFjdGlvbiA9ICggZGV2aWNlPzogc3RyaW5nLCBicmFuZD86IHN0cmluZywgY2FtcGFpZ24/OiBzdHJpbmcsIHllYXI/OiBzdHJpbmcgKSA9PiAoe1xyXG4gICAgdHlwZTogUkVOREVSX0NBTVBBSUdOX1JFUVVFU1QsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgZGV2aWNlLFxyXG4gICAgICAgIGJyYW5kLFxyXG4gICAgICAgIGNhbXBhaWduLFxyXG4gICAgICAgIHllYXIsXHJcbiAgICB9LFxyXG59KVxyXG5leHBvcnQgY29uc3QgcmVuZGVyQ2FtcGFpZ25TdWNjZXNzQWN0aW9uID0gKCBkYXRhOiBvYmplY3QgKSA9PiAoe1xyXG4gICAgdHlwZTogUkVOREVSX0NBTVBBSUdOX1NVQ0NFU1MsXHJcbiAgICBkYXRhXHJcbn0pXHJcbmV4cG9ydCBjb25zdCByZW5kZXJDYW1wYWlnbkZhaWx1cmVBY3Rpb24gPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogUkVOREVSX0NBTVBBSUdOX0ZBSUxVUkUsXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3Qgc2VhcmNoQ2FtcGFpZ25SZXF1ZXN0QWN0aW9uID0gKCBkYXRhPzogYW55ICkgPT4gKHtcclxuICAgIHR5cGU6IFNFQVJDSF9DQU1QQUlHTl9SRVFVRVNULFxyXG4gICAgZGF0YVxyXG59KVxyXG5leHBvcnQgY29uc3Qgc2VhcmNoQ2FtcGFpZ25TdWNjZXNzQWN0aW9uID0gKCBkYXRhOiBvYmplY3RbXSApID0+ICh7XHJcbiAgICB0eXBlOiBTRUFSQ0hfQ0FNUEFJR05fU1VDQ0VTUyxcclxuICAgIGRhdGFcclxufSlcclxuZXhwb3J0IGNvbnN0IHNlYXJjaENhbXBhaWduRmFpbHVyZUFjdGlvbiA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiBTRUFSQ0hfQ0FNUEFJR05fRkFJTFVSRSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRIb3ZlckFjdGlvbiA9ICggaG92ZXI6IHN0cmluZyApID0+ICh7XHJcbiAgICB0eXBlOiBTRVRfSE9WRVIsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgaG92ZXJcclxuICAgIH1cclxufSlcclxuZXhwb3J0IGNvbnN0IHNldFRvZ2dsZUFjdGlvbiA9ICggdG9nZ2xlOiBib29sZWFuICkgPT4gKHtcclxuICAgIHR5cGU6IFNFVF9UT0dHTEUsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgdG9nZ2xlXHJcbiAgICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgZG93bmxvYWRGaWxlUmVxdWVzdEFjdGlvbiA9ICggZGF0YTogc3RyaW5nICkgPT4gKHtcclxuICAgIHR5cGU6IERPV05MT0FEX0ZJTEVfUkVRVUVTVCxcclxuICAgIGRhdGFcclxufSlcclxuZXhwb3J0IGNvbnN0IGRvd25sb2FkRmlsZVN1Y2Nlc3NBY3Rpb24gPSAoIGRhdGE6IHN0cmluZyApID0+ICh7XHJcbiAgICB0eXBlOiBET1dOTE9BRF9GSUxFX1NVQ0NFU1MsXHJcbiAgICBkYXRhXHJcbn0pXHJcbmV4cG9ydCBjb25zdCBkb3dubG9hZEZpbGVGYWlsdXJlQWN0aW9uID0gKCBmaWxlTmFtZTogc3RyaW5nICkgPT4gKHtcclxuICAgIHR5cGU6IERPV05MT0FEX0ZJTEVfRkFJTFVSRSxcclxufSkiLCJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcbmltcG9ydCB7IFBvc3RTdGF0ZSwgUG9zdEFjdGlvbiB9IGZyb20gJy4vdHlwZXMnO1xyXG5pbXBvcnQgeyBcclxuICAgIEFERF9DQU1QQUlHTl9SRVFVRVNULCBcclxuICAgIEFERF9DQU1QQUlHTl9TVUNDRVNTLCBcclxuICAgIEFERF9DQU1QQUlHTl9GQUlMVVJFLFxyXG4gICAgUkVNT1ZFX0NBTVBBSUdOX1JFUVVFU1QsXHJcbiAgICBSRU1PVkVfQ0FNUEFJR05fU1VDQ0VTUyxcclxuICAgIFJFTU9WRV9DQU1QQUlHTl9GQUlMVVJFLFxyXG4gICAgUkVOREVSX0NBTVBBSUdOX1JFUVVFU1QsXHJcbiAgICBSRU5ERVJfQ0FNUEFJR05fU1VDQ0VTUyxcclxuICAgIFJFTkRFUl9DQU1QQUlHTl9GQUlMVVJFLFxyXG4gICAgU0VBUkNIX0NBTVBBSUdOX1JFUVVFU1QsXHJcbiAgICBTRUFSQ0hfQ0FNUEFJR05fU1VDQ0VTUyxcclxuICAgIFNFQVJDSF9DQU1QQUlHTl9GQUlMVVJFLFxyXG4gICAgTE9BRF9EQVRBX1JFUVVFU1QsXHJcbiAgICBMT0FEX0RBVEFfU1VDQ0VTUyxcclxuICAgIExPQURfREFUQV9GQUlMVVJFLFxyXG4gICAgQ0hFQ0tfQlJBTkRfUkVRVUVTVCxcclxuICAgIFNFVF9IT1ZFUixcclxuICAgIFNFVF9UT0dHTEUsXHJcbiAgICBET1dOTE9BRF9GSUxFX1JFUVVFU1QsXHJcbiAgICBET1dOTE9BRF9GSUxFX1NVQ0NFU1MsXHJcbiAgICBET1dOTE9BRF9GSUxFX0ZBSUxVUkUsXHJcbn0gZnJvbSAnLi9hY3Rpb25zJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFBvc3RTdGF0ZSA9IHtcclxuICAgIGNvbnRlbnQ6JycsXHJcbiAgICBkZXZpY2U6ICd3ZWInLFxyXG4gICAgYnJhbmQ6ICdhZGlkYXMnLFxyXG4gICAgY2FtcGFpZ246IG51bGwsXHJcbiAgICBsaXN0OiBbXSxcclxuICAgIGtleXdvcmQ6JycsXHJcbiAgICBsaXN0RGVsZXRlZDogZmFsc2UsXHJcbiAgICBpc0FkZGluZ0RhdGE6IGZhbHNlLFxyXG4gICAgaXNMb2FkaW5nRGF0YTogZmFsc2UsXHJcbiAgICBsb2FkaW5nRGF0YUVycm9yUmVhc29uOiBudWxsLFxyXG4gICAgYWRkaW5nRGF0YUVycm9yUmVhc29uOiBudWxsLFxyXG4gICAgaG92ZXI6ICcwMScsXHJcbiAgICB0b2dnbGU6IHRydWUsXHJcbiAgICBzdWNjZXNzU2VuZGluZ0ZpbGVOYW1lOiAnJyxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCBzdGF0ZTogUG9zdFN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IFBvc3RBY3Rpb24gKTogUG9zdFN0YXRlID0+IHtcclxuICByZXR1cm4gcHJvZHVjZSAoIHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgICAgc3dpdGNoICggYWN0aW9uLnR5cGUgKSB7XHJcblxyXG4gICAgICAgIGNhc2UgQUREX0NBTVBBSUdOX1JFUVVFU1Q6IHtcclxuICAgICAgICAgICAgZHJhZnQuaXNBZGRpbmdEYXRhID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuYWRkaW5nRGF0YUVycm9yUmVhc29uID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQUREX0NBTVBBSUdOX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQUREX0NBTVBBSUdOX0ZBSUxVUkU6IHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgUkVNT1ZFX0NBTVBBSUdOX1JFUVVFU1Q6IHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgUkVNT1ZFX0NBTVBBSUdOX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBkcmFmdC5saXN0LmZpbmRJbmRleCh2ID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgZHJhZnQubGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICBkcmFmdC5saXN0RGVsZXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFJFTU9WRV9DQU1QQUlHTl9GQUlMVVJFOiB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIENIRUNLX0JSQU5EX1JFUVVFU1Q6IHtcclxuICAgICAgICAgICAgZHJhZnQuZGV2aWNlID0gYWN0aW9uLmRhdGEuZGV2aWNlO1xyXG4gICAgICAgICAgICBkcmFmdC5icmFuZCA9IGFjdGlvbi5kYXRhLmJyYW5kO1xyXG4gICAgICAgICAgICBkcmFmdC5jYW1wYWlnbiA9ICcnO1xyXG4gICAgICAgICAgICBkcmFmdC5jb250ZW50ID0gJyc7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFJFTkRFUl9DQU1QQUlHTl9SRVFVRVNUOiB7XHJcbiAgICAgICAgICAgIGRyYWZ0LmlzQWRkaW5nRGF0YSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZGluZ0RhdGFFcnJvclJlYXNvbiA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LmRldmljZSA9IGFjdGlvbi5kYXRhLmRldmljZTtcclxuICAgICAgICAgICAgZHJhZnQuYnJhbmQgPSBhY3Rpb24uZGF0YS5icmFuZDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgUkVOREVSX0NBTVBBSUdOX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgZHJhZnQuY29udGVudCA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICBkcmFmdC5pc0FkZGluZ0RhdGEgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuY2FtcGFpZ24gPSAnJztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgUkVOREVSX0NBTVBBSUdOX0ZBSUxVUkU6IHtcclxuICAgICAgICAgICAgZHJhZnQuYWRkaW5nRGF0YUVycm9yUmVhc29uID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgU0VBUkNIX0NBTVBBSUdOX1JFUVVFU1Q6IHtcclxuICAgICAgICAgICAgZHJhZnQua2V5d29yZCA9IGFjdGlvbi5kYXRhLnNlYXJjaDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgU0VBUkNIX0NBTVBBSUdOX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgZHJhZnQubGlzdCA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBTRUFSQ0hfQ0FNUEFJR05fRkFJTFVSRToge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0FEX0RBVEFfUkVRVUVTVDoge1xyXG4gICAgICAgICAgICBkcmFmdC5pc0xvYWRpbmdEYXRhID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZGluZ0RhdGFFcnJvclJlYXNvbiA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIExPQURfREFUQV9TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgIGRyYWZ0Lmxpc3QgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgZHJhZnQuaXNMb2FkaW5nRGF0YSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0FEX0RBVEFfRkFJTFVSRToge1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkaW5nRGF0YUVycm9yUmVhc29uID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgU0VUX0hPVkVSOiB7XHJcbiAgICAgICAgICAgIGRyYWZ0LmhvdmVyID0gYWN0aW9uLmRhdGEuaG92ZXI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFNFVF9UT0dHTEU6IHtcclxuICAgICAgICAgICAgZHJhZnQudG9nZ2xlID0gYWN0aW9uLmRhdGEudG9nZ2xlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBET1dOTE9BRF9GSUxFX1JFUVVFU1Q6IHtcclxuICAgICAgICAgICAgZHJhZnQuc3VjY2Vzc1NlbmRpbmdGaWxlTmFtZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBET1dOTE9BRF9GSUxFX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgRE9XTkxPQURfRklMRV9GQUlMVVJFOiB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIH0pO1xyXG59OyIsImltcG9ydCB7IGFsbCwgZm9yayB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBwb3N0IGZyb20gJy4vcG9zdCc7XHJcbmltcG9ydCB7IGJhY2tVcmwgfSBmcm9tICcuLi9jb25maWcvY29uZmlnJztcclxuXHJcbi8vIGF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDY1L2FwaSc7XHJcblxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gYmFja1VybDtcclxuYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgZm9yayhwb3N0KSxcclxuICBdKTtcclxufVxyXG4iLCJpbXBvcnQgeyBhbGwsIGZvcmssIHRha2VMYXRlc3QsIHB1dCwgY2FsbCwgdGhyb3R0bGUsIHRha2VFdmVyeSB9ICBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge1xyXG4gICAgQUREX0NBTVBBSUdOX1JFUVVFU1QsIC8vIOy6oO2OmOyduCDsnbTrpoQgRELsl5DshJwg7KCA7J6lXHJcbiAgICBBRERfQ0FNUEFJR05fU1VDQ0VTUywgXHJcbiAgICBBRERfQ0FNUEFJR05fRkFJTFVSRSwgXHJcbiAgICBSRU1PVkVfQ0FNUEFJR05fUkVRVUVTVCwgLy8g7Lqg7Y6Y7J24IOydtOumhCBEQuyXkOyEnCDsgq3soJxcclxuICAgIFJFTU9WRV9DQU1QQUlHTl9TVUNDRVNTLFxyXG4gICAgUkVNT1ZFX0NBTVBBSUdOX0ZBSUxVUkUsXHJcbiAgICBMT0FEX0RBVEFfUkVRVUVTVCwgLy8g7Lm065OcIOuNsOydtO2EsCDroZzrk5xcclxuICAgIExPQURfREFUQV9TVUNDRVNTLCBcclxuICAgIExPQURfREFUQV9GQUlMVVJFLFxyXG4gICAgUkVOREVSX0NBTVBBSUdOX1JFUVVFU1QsIC8vIOy6oO2OmOyduCDrjbDsnbTthLAg7Lac66ClXHJcbiAgICBSRU5ERVJfQ0FNUEFJR05fU1VDQ0VTUyxcclxuICAgIFJFTkRFUl9DQU1QQUlHTl9GQUlMVVJFLFxyXG4gICAgU0VBUkNIX0NBTVBBSUdOX1JFUVVFU1QsIC8vIOy5tOuTnCDrjbDsnbTthLAg7IOJ7J24XHJcbiAgICBTRUFSQ0hfQ0FNUEFJR05fU1VDQ0VTUyxcclxuICAgIFNFQVJDSF9DQU1QQUlHTl9GQUlMVVJFLFxyXG4gICAgRE9XTkxPQURfRklMRV9SRVFVRVNULCAvLyDri6TsmrTroZzrk5wg7YyM7J28XHJcbiAgICBET1dOTE9BRF9GSUxFX1NVQ0NFU1MsXHJcbiAgICBET1dOTE9BRF9GSUxFX0ZBSUxVUkUsXHJcbiAgICAvLyDslaHshZgg7IOd7ISxIO2VqOyImFxyXG4gICAgYWRkQ2FtcGFpZ25SZXF1ZXN0QWN0aW9uLFxyXG4gICAgbG9hZERhdGFSZXF1ZXN0QWN0aW9uLFxyXG4gICAgcmVuZGVyQ2FtcGFpZ25SZXF1ZXN0QWN0aW9uLFxyXG4gICAgc2VhcmNoQ2FtcGFpZ25SZXF1ZXN0QWN0aW9uLFxyXG4gICAgcmVtb3ZlQ2FtcGFpZ25SZXF1ZXN0QWN0aW9uLFxyXG4gICAgZG93bmxvYWRGaWxlUmVxdWVzdEFjdGlvbixcclxufSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0L2FjdGlvbnMnO1xyXG5cclxuZnVuY3Rpb24gYWRkQWRpZGFzV2ViQVBJKCBwb3N0RGF0YSApIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdC9hZGRjYW1wYWlnbicsIHBvc3REYXRhLCB7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgfSlcclxufVxyXG5mdW5jdGlvbiogYWRkQWRpZGFzV2ViKCBhY3Rpb246IFJldHVyblR5cGU8dHlwZW9mIGFkZENhbXBhaWduUmVxdWVzdEFjdGlvbj4gKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkQWRpZGFzV2ViQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0NBTVBBSUdOX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0NBTVBBSUdOX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEFkZEFkaWRhc1dlYigpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoQUREX0NBTVBBSUdOX1JFUVVFU1QsIGFkZEFkaWRhc1dlYik7XHJcbn1cclxuZnVuY3Rpb24gcmVtb3ZlQ2FtcGFpZ25BUEkoIHBvc3REYXRhICkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtwb3N0RGF0YX1gLCB7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgfSlcclxufVxyXG5mdW5jdGlvbiogcmVtb3ZlQ2FtcGFpZ24oIGFjdGlvbjogUmV0dXJuVHlwZTx0eXBlb2YgcmVtb3ZlQ2FtcGFpZ25SZXF1ZXN0QWN0aW9uPiApIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVDYW1wYWlnbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9DQU1QQUlHTl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9DQU1QQUlHTl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVOYW1lKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfQ0FNUEFJR05fUkVRVUVTVCwgcmVtb3ZlQ2FtcGFpZ24pO1xyXG59XHJcbmZ1bmN0aW9uIGxvYWREYXRhQVBJKCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9wb3N0L2xpc3QnLCB7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgfSlcclxufVxyXG5mdW5jdGlvbiogbG9hZERhdGEoIGFjdGlvbjogUmV0dXJuVHlwZTx0eXBlb2YgbG9hZERhdGFSZXF1ZXN0QWN0aW9uPiApIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkRGF0YUFQSSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9EQVRBX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9EQVRBX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWREYXRhKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0RBVEFfUkVRVUVTVCwgbG9hZERhdGEpO1xyXG59XHJcbmZ1bmN0aW9uIHJlbmRlckNhbXBhaWduQVBJKCBwb3N0RGF0YSApIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdC9jYW1wYWlnbicsIHBvc3REYXRhLCB7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgfSlcclxufVxyXG5mdW5jdGlvbiogcmVuZGVyQ2FtcGFpZ24oIGFjdGlvbjogUmV0dXJuVHlwZTx0eXBlb2YgcmVuZGVyQ2FtcGFpZ25SZXF1ZXN0QWN0aW9uPiApIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW5kZXJDYW1wYWlnbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTkRFUl9DQU1QQUlHTl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTkRFUl9DQU1QQUlHTl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiogd2F0Y2hSZW5kZXJDYW1wYWlnbigpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoUkVOREVSX0NBTVBBSUdOX1JFUVVFU1QsIHJlbmRlckNhbXBhaWduKTtcclxufVxyXG5mdW5jdGlvbiBzZWFyY2hDYW1wYWlnbkFQSSggc2VhcmNoICkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3Qvc2VhcmNoLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHNlYXJjaCl9YClcclxufVxyXG5mdW5jdGlvbiogc2VhcmNoQ2FtcGFpZ24oIGFjdGlvbjogUmV0dXJuVHlwZTx0eXBlb2Ygc2VhcmNoQ2FtcGFpZ25SZXF1ZXN0QWN0aW9uPiApIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzZWFyY2hDYW1wYWlnbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNFQVJDSF9DQU1QQUlHTl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNFQVJDSF9DQU1QQUlHTl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiogd2F0Y2hzZWFyY2hDYW1wYWlnbigpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoU0VBUkNIX0NBTVBBSUdOX1JFUVVFU1QsIHNlYXJjaENhbXBhaWduKTtcclxufVxyXG5mdW5jdGlvbiBkb3dubG9hZEZpbGVBUEkoIGZpbGVfbmFtZSApIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYC9wb3N0L2Rvd25sb2FkLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGZpbGVfbmFtZSl9YClcclxufVxyXG5mdW5jdGlvbiogZG93bmxvYWRGaWxlKCBhY3Rpb246IFJldHVyblR5cGU8dHlwZW9mIGRvd25sb2FkRmlsZVJlcXVlc3RBY3Rpb24+ICkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGRvd25sb2FkRmlsZUFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IERPV05MT0FEX0ZJTEVfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBET1dOTE9BRF9GSUxFX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaERvd25sb2FkRmlsZSgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoRE9XTkxPQURfRklMRV9SRVFVRVNULCBkb3dubG9hZEZpbGUpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZEFkaWRhc1dlYiksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWREYXRhKSxcclxuICAgICAgICBmb3JrKHdhdGNoUmVuZGVyQ2FtcGFpZ24pLFxyXG4gICAgICAgIGZvcmsod2F0Y2hzZWFyY2hDYW1wYWlnbiksXHJcbiAgICAgICAgZm9yayh3YXRjaFJlbW92ZU5hbWUpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hEb3dubG9hZEZpbGUpLFxyXG4gICAgXSk7XHJcbn0iLCJpbXBvcnQgeyBDb250ZXh0LCBjcmVhdGVXcmFwcGVyLCBNYWtlU3RvcmUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlLCBjb21wb3NlLCBTdG9yZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSwgeyBUYXNrIH0gZnJvbSAncmVkdXgtc2FnYSc7XHJcbmltcG9ydCByZWR1Y2VyLCB7IFJvb3RTdGF0ZSB9IGZyb20gJy4uL3JlZHVjZXJzJztcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3NhZ2FzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2FnYVN0b3JlIGV4dGVuZHMgU3RvcmUge1xyXG4gIHNhZ2FUYXNrOiBUYXNrO1xyXG4gIGVycjoge1xyXG4gICAgc3RhdHVzQ29kZTogRXJyb3I7XHJcbiAgfTtcclxufVxyXG5cclxuLy8gY29uc3QgbG9nZ2VyTWlkZGxld2FyZSA9ICh7IGRpc3BhdGNoLCBnZXRTdGF0ZSB9KSA9PiAobmV4dCkgPT4gKGFjdGlvbikgPT4ge1xyXG4vLyAgIGNvbnNvbGUubG9nKGFjdGlvbik7XHJcbi8vICAgcmV0dXJuIG5leHQoYWN0aW9uKTtcclxuLy8gfTtcclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlOiBNYWtlU3RvcmU8Um9vdFN0YXRlPiA9ICggY29udGV4dDogQ29udGV4dCApID0+IHtcclxuICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcbiAgY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmUsIC8qIGxvZ2dlck1pZGRsZXdhcmUgKi9dO1xyXG4gIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xyXG4gICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSk7XHJcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XHJcbiAgKHN0b3JlIGFzIFNhZ2FTdG9yZSkuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG4gIC8vICggc3RvcmUgYXMgU2FnYVN0b3JlICkuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG4gIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7XHJcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9