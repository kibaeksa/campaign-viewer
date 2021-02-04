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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvcG9zdC9hY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3Bvc3QvcmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9wb3N0LnRzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiXSwibmFtZXMiOlsiYmFja1VybCIsImNvbmZpZ3MiLCJwYXJzaW5nU3RhdGljIiwiZGV2aWNlIiwiYnJhbmQiLCJjb250ZW50IiwiaW1ncyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInZpZGVvcyIsIlBhcnNlciIsImVsZW0iLCJmb3JFYWNoIiwidmFsIiwiaW5kZXgiLCJub2RlTmFtZSIsIm9yaWdpbmFsIiwic3JjIiwic3BsaXRPcmlnaW5hbCIsInNwbGl0IiwiaW5kZXhPZiIsInBvc3RlciIsIkluY2x1ZGUiLCJnZXRBcnJheSIsImZpbGVzIiwiYXJyYXkiLCJBcnJheSIsIml0ZW0iLCJmaWxlTmFtZSIsInJlcGxhY2UiLCJwdXNoIiwiSlMiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImNsYXNzTGlzdCIsImFkZCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiYXBwZW5kQ2hpbGQiLCJDU1MiLCJyZWwiLCJocmVmIiwibWVkaWEiLCJzY3JpcHRzIiwiaSIsImxlbmd0aCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiY3NzIiwic2NyaXB0Iiwic2NyaXB0TGVuZ3RoIiwiYWZ0ZXIiLCJhcHBlbmQiLCJiZyIsImJnTGVuZ3RoIiwiU1RZTEUiLCJxdWVyeVNlbGVjdG9yIiwicHJlcGVuZCIsIkhvbWUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicG9zdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJsb2FkRGF0YVJlcXVlc3RBY3Rpb24iLCJodG1scyIsIl9faHRtbCIsInBuIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwid3JhcHBlciIsImNvbnRleHQiLCJzdG9yZSIsImNoZWNrQnJhbmRSZXF1ZXN0QWN0aW9uIiwic2V0SG92ZXJBY3Rpb24iLCJFTkQiLCJzYWdhVGFzayIsInRvUHJvbWlzZSIsInByb3BzIiwicGF0aG5hbWUiLCJyb290UmVkdWNlciIsImFjdGlvbiIsIkhZRFJBVEUiLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsImNvbWJpbmVSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiQUREX0NBTVBBSUdOX1JFUVVFU1QiLCJBRERfQ0FNUEFJR05fU1VDQ0VTUyIsIkFERF9DQU1QQUlHTl9GQUlMVVJFIiwiUkVNT1ZFX0NBTVBBSUdOX1JFUVVFU1QiLCJSRU1PVkVfQ0FNUEFJR05fU1VDQ0VTUyIsIlJFTU9WRV9DQU1QQUlHTl9GQUlMVVJFIiwiUkVOREVSX0NBTVBBSUdOX1JFUVVFU1QiLCJSRU5ERVJfQ0FNUEFJR05fU1VDQ0VTUyIsIlJFTkRFUl9DQU1QQUlHTl9GQUlMVVJFIiwiU0VBUkNIX0NBTVBBSUdOX1JFUVVFU1QiLCJTRUFSQ0hfQ0FNUEFJR05fU1VDQ0VTUyIsIlNFQVJDSF9DQU1QQUlHTl9GQUlMVVJFIiwiQ0hFQ0tfQlJBTkRfUkVRVUVTVCIsIkNIRUNLX0JSQU5EX1NVQ0NFU1MiLCJDSEVDS19CUkFORF9GQUlMVVJFIiwiTE9BRF9EQVRBX1JFUVVFU1QiLCJMT0FEX0RBVEFfU1VDQ0VTUyIsIkxPQURfREFUQV9GQUlMVVJFIiwiU0VUX0hPVkVSIiwiU0VUX1RPR0dMRSIsIkRPV05MT0FEX0ZJTEVfUkVRVUVTVCIsIkRPV05MT0FEX0ZJTEVfU1VDQ0VTUyIsIkRPV05MT0FEX0ZJTEVfRkFJTFVSRSIsImFkZENhbXBhaWduUmVxdWVzdEFjdGlvbiIsImNhbXBhaWduIiwiZGF0YSIsImFkZENhbXBhaWduU3VjY2Vzc0FjdGlvbiIsImFkZENhbXBhaWduRmFpbHVyZUFjdGlvbiIsInJlbW92ZUNhbXBhaWduUmVxdWVzdEFjdGlvbiIsImxpc3RJZCIsInJlbW92ZUNhbXBhaWduU3VjY2Vzc0FjdGlvbiIsInJlbW92ZUNhbXBhaWduRmFpbHVyZUFjdGlvbiIsImxvYWREYXRhU3VjY2Vzc0FjdGlvbiIsImxvYWREYXRhRmFpbHVyZUFjdGlvbiIsImNoZWNrQnJhbmRTdWNjZXNzQWN0aW9uIiwiY2hlY2tCcmFuZEZhaWx1cmVBY3Rpb24iLCJyZW5kZXJDYW1wYWlnblJlcXVlc3RBY3Rpb24iLCJ5ZWFyIiwicmVuZGVyQ2FtcGFpZ25TdWNjZXNzQWN0aW9uIiwicmVuZGVyQ2FtcGFpZ25GYWlsdXJlQWN0aW9uIiwic2VhcmNoQ2FtcGFpZ25SZXF1ZXN0QWN0aW9uIiwic2VhcmNoQ2FtcGFpZ25TdWNjZXNzQWN0aW9uIiwic2VhcmNoQ2FtcGFpZ25GYWlsdXJlQWN0aW9uIiwiaG92ZXIiLCJzZXRUb2dnbGVBY3Rpb24iLCJ0b2dnbGUiLCJkb3dubG9hZEZpbGVSZXF1ZXN0QWN0aW9uIiwiZG93bmxvYWRGaWxlU3VjY2Vzc0FjdGlvbiIsImRvd25sb2FkRmlsZUZhaWx1cmVBY3Rpb24iLCJpbml0aWFsU3RhdGUiLCJsaXN0Iiwia2V5d29yZCIsImxpc3REZWxldGVkIiwiaXNBZGRpbmdEYXRhIiwiaXNMb2FkaW5nRGF0YSIsImxvYWRpbmdEYXRhRXJyb3JSZWFzb24iLCJhZGRpbmdEYXRhRXJyb3JSZWFzb24iLCJzdWNjZXNzU2VuZGluZ0ZpbGVOYW1lIiwicHJvZHVjZSIsImRyYWZ0IiwiZmluZEluZGV4IiwidiIsImlkIiwic3BsaWNlIiwic2VhcmNoIiwiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJ3aXRoQ3JlZGVudGlhbHMiLCJyb290U2FnYSIsImFsbCIsImZvcmsiLCJhZGRBZGlkYXNXZWJBUEkiLCJwb3N0RGF0YSIsImFkZEFkaWRhc1dlYiIsInJlc3VsdCIsImNhbGwiLCJwdXQiLCJlIiwiZXJyb3IiLCJ3YXRjaEFkZEFkaWRhc1dlYiIsInRha2VMYXRlc3QiLCJyZW1vdmVDYW1wYWlnbkFQSSIsImRlbGV0ZSIsInJlbW92ZUNhbXBhaWduIiwid2F0Y2hSZW1vdmVOYW1lIiwibG9hZERhdGFBUEkiLCJsb2FkRGF0YSIsIndhdGNoTG9hZERhdGEiLCJyZW5kZXJDYW1wYWlnbkFQSSIsInJlbmRlckNhbXBhaWduIiwid2F0Y2hSZW5kZXJDYW1wYWlnbiIsInNlYXJjaENhbXBhaWduQVBJIiwiZ2V0IiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2VhcmNoQ2FtcGFpZ24iLCJ3YXRjaHNlYXJjaENhbXBhaWduIiwiZG93bmxvYWRGaWxlQVBJIiwiZmlsZV9uYW1lIiwiZG93bmxvYWRGaWxlIiwid2F0Y2hEb3dubG9hZEZpbGUiLCJwb3N0U2FnYSIsImNvbmZpZ3VyZVN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsImNyZWF0ZVN0b3JlIiwicmVkdWNlciIsInJ1biIsImNyZWF0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Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsImV4cG9ydCBjb25zdCBiYWNrVXJsID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/ICdodHRwczovL2NhbXBhaWduLXZpZXdlci1zZXJ2ZXIuaGVyb2t1YXBwLmNvbScgOiAnaHR0cDovL2xvY2FsaG9zdDozMDY1JzsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSAnLi4vcmVkdWNlcnMnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgeyBFTkQgfSBmcm9tICdyZWR1eC1zYWdhJztcclxuaW1wb3J0IHdyYXBwZXIsIHsgU2FnYVN0b3JlIH0gZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG5pbXBvcnQgeyBjaGVja0JyYW5kUmVxdWVzdEFjdGlvbiwgbG9hZERhdGFSZXF1ZXN0QWN0aW9uLCBzZXRIb3ZlckFjdGlvbiB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QvYWN0aW9ucyc7XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlncyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyAnY2FtcGFpZ24tdmlld2VyLmhlcm9rdWFwcC5jb20nIDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzA2MCc7XHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzaW5nU3RhdGljKGRldmljZSwgYnJhbmQsIGNvbnRlbnQpIHtcclxuICAgIC8vIOygleyggSDrjbDsnbTthLAg7KO87IaM6rK966GcIOuzgOqyvVxyXG4gICAgY29uc3QgaW1ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250ZW50LWZyYW1lIGltZycpO1xyXG4gICAgY29uc3QgdmlkZW9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRlbnQtZnJhbWUgdmlkZW8nKTtcclxuICAgIGNvbnN0IFBhcnNlciA9ICggZWxlbSApID0+IHtcclxuICAgICAgICBlbGVtLmZvckVhY2goIGZ1bmN0aW9uICggdmFsLCBpbmRleCApe1xyXG4gICAgICAgICAgICAvLyBpbWFnZVxyXG4gICAgICAgICAgICBpZiggZWxlbVsgaW5kZXggXS5ub2RlTmFtZSA9PSBcIklNR1wiICkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWwgPSBlbGVtWyBpbmRleCBdLnNyYztcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNwbGl0T3JpZ2luYWwgPSBvcmlnaW5hbC5zcGxpdChjb25maWdzLCAyKTtcclxuICAgICAgICAgICAgICAgIGlmKCBkZXZpY2UgPT0gXCJ3ZWJcIiApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiggZWxlbVsgaW5kZXggXS5zcmMuaW5kZXhPZignaHR0cHM6Ly9raWJhZWtzYS5naXRodWIuaW8vYWRpZGFzV2ViL2Zyb250LycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1bIGluZGV4IF0uc3JjID0gJ2h0dHBzOi8va2liYWVrc2EuZ2l0aHViLmlvL2FkaWRhc1dlYi9mcm9udC8nICsgc3BsaXRPcmlnaW5hbFsxXTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvcmlnaW5hbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1bIGluZGV4IF0uc3JjID0gb3JpZ2luYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiggZWxlbVsgaW5kZXggXS5zcmMuaW5kZXhPZignaHR0cHM6Ly9raWJhZWtzYS5naXRodWIuaW8vYWRpZGFzTW9iaWxlL21vYmlsZS8nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtWyBpbmRleCBdLnNyYyA9ICdodHRwczovL2tpYmFla3NhLmdpdGh1Yi5pby9hZGlkYXNNb2JpbGUvbW9iaWxlLycgKyBzcGxpdE9yaWdpbmFsWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1bIGluZGV4IF0uc3JjID0gb3JpZ2luYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHZpZGVvXHJcbiAgICAgICAgICAgIGlmKCBlbGVtWyBpbmRleCBdLm5vZGVOYW1lID09IFwiVklERU9cIiApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsID0gZWxlbVsgaW5kZXggXS5wb3N0ZXI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcGxpdE9yaWdpbmFsID0gb3JpZ2luYWwuc3BsaXQoY29uZmlncywgMik7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGRldmljZSA9PSBcIndlYlwiICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCBlbGVtWyBpbmRleCBdLnBvc3Rlci5pbmRleE9mKCdodHRwczovL2tpYmFla3NhLmdpdGh1Yi5pby9hZGlkYXNXZWIvZnJvbnQvJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbVsgaW5kZXggXS5wb3N0ZXIgPSAnaHR0cHM6Ly9raWJhZWtzYS5naXRodWIuaW8vYWRpZGFzV2ViL2Zyb250LycgKyBzcGxpdE9yaWdpbmFsWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1bIGluZGV4IF0ucG9zdGVyID0gb3JpZ2luYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiggZWxlbVsgaW5kZXggXS5wb3N0ZXIuaW5kZXhPZignaHR0cHM6Ly9raWJhZWtzYS5naXRodWIuaW8vYWRpZGFzTW9iaWxlL21vYmlsZS8nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtWyBpbmRleCBdLnBvc3RlciA9ICdodHRwczovL2tpYmFla3NhLmdpdGh1Yi5pby9hZGlkYXNNb2JpbGUvbW9iaWxlLycgKyBzcGxpdE9yaWdpbmFsWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1bIGluZGV4IF0ucG9zdGVyID0gb3JpZ2luYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0gICAgICAgICAgICBcclxuICAgIG5ldyBQYXJzZXIoIGltZ3MgKTtcclxuICAgIG5ldyBQYXJzZXIoIHZpZGVvcyApO1xyXG5cclxuICAgIC8vIEpTLCBDU1Mg7LaU6rCA7ZWY64qUIOyduO2BtOujqOuTnCDqsJ3ssrRcclxuICAgIGNvbnN0IEluY2x1ZGUgPSB7XHJcbiAgICAgICAgZ2V0QXJyYXk6IGZ1bmN0aW9uICggZmlsZXMgKXtcclxuICAgICAgICAgICAgY29uc3QgYXJyYXkgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGZpbGVzLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgIGl0ZW0uZm9yRWFjaChmdW5jdGlvbiAoIGZpbGVOYW1lLCBpbmRleCApe1xyXG4gICAgICAgICAgICAgICAgZmlsZU5hbWUgPSBmaWxlTmFtZS5yZXBsYWNlKC9eXFxzLywgJycpLnJlcGxhY2UoL1xccyQvLCAnJyk7XHJcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKGZpbGVOYW1lKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBhcnJheTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIEpTOiBmdW5jdGlvbiAoIGZpbGVzICl7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0QXJyYXkoIGZpbGVzICkuZm9yRWFjaChmdW5jdGlvbiAoIGZpbGVOYW1lLCBpbmRleCApe1xyXG4gICAgICAgICAgICAgICAgbGV0IEpTICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICAgICAgICAgICAgSlMudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xyXG4gICAgICAgICAgICAgICAgSlMuc3JjICA9ICcvanMvJyArIGZpbGVOYW1lICsgJy5qcyc7XHJcbiAgICAgICAgICAgICAgICBKUy5jbGFzc0xpc3QuYWRkKCdwdXRTY3JpcHRDbGFzcycpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChKUyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgQ1NTOiBmdW5jdGlvbiAoIGZpbGVzICl7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0QXJyYXkoZmlsZXMpLmZvckVhY2goZnVuY3Rpb24gKCBmaWxlTmFtZSwgaW5kZXggKXtcclxuICAgICAgICAgICAgICAgIGxldCBDU1MgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcclxuICAgICAgICAgICAgICAgIENTUy5yZWwgICA9ICdzdHlsZXNoZWV0JztcclxuICAgICAgICAgICAgICAgIENTUy50eXBlICA9ICd0ZXh0L2Nzcyc7XHJcbiAgICAgICAgICAgICAgICBDU1MuY2xhc3NMaXN0LmFkZCgncHV0Q3NzQ2xhc3MnKTtcclxuICAgICAgICAgICAgICAgIENTUy5ocmVmICA9ICcvY3NzLycgKyBmaWxlTmFtZSArICcuY3NzJztcclxuICAgICAgICAgICAgICAgIENTUy5tZWRpYSA9ICdzY3JlZW4nO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZCggQ1NTICk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuICAgIC8vIOyduO2BtOujqOuTnCDrj5nsoIEg7IK97J6FXHJcbiAgICBpZiggZGV2aWNlID09IFwid2ViXCIgKSB7XHJcbiAgICAgICAgY29uc3Qgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoc2NyaXB0c1tpXS5jbGFzc0xpc3QuY29udGFpbnMoXCJwdXRTY3JpcHRDbGFzc1wiKSkge1xyXG4gICAgICAgICAgICAgICAgc2NyaXB0c1tpXS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2xpbmsnKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNzcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoY3NzW2ldLmNsYXNzTGlzdC5jb250YWlucyhcInB1dENzc0NsYXNzXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBjc3NbaV0ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiggYnJhbmQgPT0gXCJhZGlkYXNcIiApIHtcclxuICAgICAgICAgICAgSW5jbHVkZS5KUygnbW9kYWxQb3B1cC5taW4sIGFkaWRhcycpO1xyXG4gICAgICAgICAgICBJbmNsdWRlLkNTUygnc2xpY2ssIGFkaWRhc19yLCByZXNldCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiggYnJhbmQgPT0gXCJyZWVib2tcIiApe1xyXG4gICAgICAgICAgICBJbmNsdWRlLkpTKCdtb2RhbFBvcHVwLm1pbiwgY29tbW9uJyk7XHJcbiAgICAgICAgICAgIEluY2x1ZGUuQ1NTKCdzbGljaywgcmVlYm9rLCByZXNldCwgY29tbW9uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYoIGRldmljZSA9PSBcIm1vYmlsZVwiICkge1xyXG4gICAgICAgIGNvbnN0IHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHNjcmlwdHNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwicHV0U2NyaXB0Q2xhc3NcIikpIHtcclxuICAgICAgICAgICAgICAgIHNjcmlwdHNbaV0ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsaW5rJyk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjc3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGNzc1tpXS5jbGFzc0xpc3QuY29udGFpbnMoXCJwdXRDc3NDbGFzc1wiKSkge1xyXG4gICAgICAgICAgICAgICAgY3NzW2ldLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9ICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIGJyYW5kID09IFwiYWRpZGFzXCIgKSB7XHJcbiAgICAgICAgICAgIEluY2x1ZGUuSlMoJ21vZGFsUG9wdXAubWluLCBhZGlkYXMnKTtcclxuICAgICAgICAgICAgSW5jbHVkZS5DU1MoJ3NsaWNrLCBzdHlsZSwgZm9udHMsIHN0eWxlX3JlZWJvaycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiggYnJhbmQgPT0gXCJyZWVib2tcIiApe1xyXG4gICAgICAgICAgICBJbmNsdWRlLkpTKCdtb2RhbFBvcHVwLm1pbicpO1xyXG4gICAgICAgICAgICBJbmNsdWRlLkNTUygnc2xpY2ssIHN0eWxlLCBmb250cywgcmVlYm9rX20sIHN0eWxlX3JtLCBjb21tb25fcm0nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXhpb3Mg7Ya17Iug7Jy866GcIOugjOuNlOungSDtm4Qg67Cw6rK97Iqk7YOA7J28IOq0gOugqCDrjbDsnbTthLAg66as66Gc65OcOiBiYWNrZW5k7JeQ7IScIOqwgOqztSDtm4QgcmVzcG9uc2UuXHJcbiAgICBpZiggZGV2aWNlID09IFwid2ViXCIgJiYgYnJhbmQgPT0gXCJhZGlkYXNcIiApIHtcclxuICAgICAgICAvLyDsuqDtjpjsnbgg64K067aAIOyKpO2BrOumve2KuFxyXG4gICAgICAgIGlmKCBjb250ZW50LnNjcmlwdCApIHtcclxuICAgICAgICAgICAgY29uc3Qgc2NyaXB0TGVuZ3RoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NvbnRhaW5lcl9yIHNjcmlwdCcpLmxlbmd0aDtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NvbnRhaW5lcl9yIHNjcmlwdCcpW3NjcmlwdExlbmd0aC0xXS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgY29uc3QgSlMgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjb250YWluZXJfciBzY3JpcHQnKVtzY3JpcHRMZW5ndGgtMl0uYWZ0ZXIoSlMpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY29udGFpbmVyX3Igc2NyaXB0Jylbc2NyaXB0TGVuZ3RoLTFdLmFwcGVuZChjb250ZW50LnNjcmlwdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOy6oO2OmOyduCDrgrTrtoAg7Iqk7YOA7J28XHJcbiAgICAgICAgaWYoIGNvbnRlbnQuYmcgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJnTGVuZ3RoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NvbnRhaW5lcl9yIHN0eWxlJykubGVuZ3RoO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY29udGFpbmVyX3Igc3R5bGUnKVtiZ0xlbmd0aC0xXS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgY29uc3QgU1RZTEUgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcl9yIGRpdicpLnByZXBlbmQoU1RZTEUpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY29udGFpbmVyX3Igc3R5bGUnKVswXS5hcHBlbmQoY29udGVudC5iZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYoIGRldmljZSA9PSBcIm1vYmlsZVwiICYmIGJyYW5kID09IFwiYWRpZGFzXCIgKSB7XHJcbiAgICAgICAgaWYoIGNvbnRlbnQuc2NyaXB0ICkge1xyXG4gICAgICAgICAgICBjb25zdCBzY3JpcHRMZW5ndGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY29udGFpbmVyIHNjcmlwdCcpLmxlbmd0aDtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NvbnRhaW5lciBzY3JpcHQnKVtzY3JpcHRMZW5ndGgtMV0ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IEpTICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY29udGFpbmVyIHNjcmlwdCcpW3NjcmlwdExlbmd0aC0yXS5hZnRlcihKUyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjb250YWluZXIgc2NyaXB0Jylbc2NyaXB0TGVuZ3RoLTFdLmFwcGVuZChjb250ZW50LnNjcmlwdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCBjb250ZW50LmJnICkge1xyXG4gICAgICAgICAgICBjb25zdCBiZ0xlbmd0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjb250YWluZXIgc3R5bGUnKS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjb250YWluZXIgc3R5bGUnKVtiZ0xlbmd0aC0xXS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgY29uc3QgU1RZTEUgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lciBkaXYnKS5wcmVwZW5kKFNUWUxFKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NvbnRhaW5lciBzdHlsZScpWzBdLmFwcGVuZChjb250ZW50LmJnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiggZGV2aWNlID09IFwid2ViXCIgJiYgYnJhbmQgPT0gXCJyZWVib2tcIiApIHtcclxuICAgICAgICBpZiggY29udGVudC5zY3JpcHQgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjcmlwdExlbmd0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjb250ZW50c193cmFwIHNjcmlwdCcpLmxlbmd0aDtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NvbnRlbnRzX3dyYXAgc2NyaXB0Jylbc2NyaXB0TGVuZ3RoLTFdLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBKUyAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NvbnRlbnRzX3dyYXAgc2NyaXB0Jylbc2NyaXB0TGVuZ3RoLTJdLmFmdGVyKEpTKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NvbnRlbnRzX3dyYXAgc2NyaXB0Jylbc2NyaXB0TGVuZ3RoLTFdLmFwcGVuZChjb250ZW50LnNjcmlwdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCBjb250ZW50LmJnICkge1xyXG4gICAgICAgICAgICBjb25zdCBiZ0xlbmd0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjb250ZW50c193cmFwIHN0eWxlJykubGVuZ3RoO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY29udGVudHNfd3JhcCBzdHlsZScpW2JnTGVuZ3RoLTFdLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBTVFlMRSAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudHNfd3JhcCBkaXYnKS5hcHBlbmQoU1RZTEUpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY29udGVudHNfd3JhcCBzdHlsZScpWzBdLmFwcGVuZChjb250ZW50LmJnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiggZGV2aWNlID09IFwibW9iaWxlXCIgJiYgYnJhbmQgPT0gXCJyZWVib2tcIiApIHtcclxuICAgICAgICBpZiggY29udGVudC5zY3JpcHQgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjcmlwdExlbmd0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjb250ZW50cyBzY3JpcHQnKS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjb250ZW50cyBzY3JpcHQnKVtzY3JpcHRMZW5ndGgtMV0ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IEpTICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY29udGVudHMgc2NyaXB0Jylbc2NyaXB0TGVuZ3RoLTJdLmFmdGVyKEpTKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NvbnRlbnRzIHNjcmlwdCcpW3NjcmlwdExlbmd0aC0xXS5hcHBlbmQoY29udGVudC5zY3JpcHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiggY29udGVudC5iZyApIHtcclxuICAgICAgICAgICAgY29uc3QgYmdMZW5ndGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY29udGVudHMgc3R5bGUnKS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjb250ZW50cyBzdHlsZScpW2JnTGVuZ3RoLTFdLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBTVFlMRSAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudHMgZGl2JykucHJlcGVuZChTVFlMRSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjb250ZW50cyBzdHlsZScpWzBdLmFwcGVuZChjb250ZW50LmJnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IEhvbWU6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBjb250ZW50LCBkZXZpY2UsIGJyYW5kIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYoIGNvbnRlbnQgKSB7XHJcbiAgICAgICAgICAgIHBhcnNpbmdTdGF0aWMoZGV2aWNlLCBicmFuZCwgY29udGVudCk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGxvYWREYXRhUmVxdWVzdEFjdGlvbigpKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbZGV2aWNlLCBicmFuZCwgY29udGVudF0pO1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBodG1scyAoKSB7XHJcbiAgICAgICAgaWYoIGNvbnRlbnQgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IF9faHRtbDogY29udGVudC5wbiB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge2NvbnRlbnQgPyA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgaHRtbHMoKSB9IC8+IDogPGRpdj7slYTrlJTri6TsiqQg7Ju5PC9kaXY+fVxyXG5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyggYXN5bmMoIGNvbnRleHQgKSA9PiB7XHJcbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKGNoZWNrQnJhbmRSZXF1ZXN0QWN0aW9uKCd3ZWInLCAnYWRpZGFzJykpO1xyXG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaChzZXRIb3ZlckFjdGlvbignMDEnKSk7XHJcbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKGxvYWREYXRhUmVxdWVzdEFjdGlvbigpKTtcclxuICAgIC8vIGNvbnN0IHN0YXRlID0gY29udGV4dC5zdG9yZS5nZXRTdGF0ZSgpO1xyXG4gICAgLy8gaWYoIHN0YXRlLnBvc3QuY29udGVudCApIHtcclxuICAgIC8vIH1cclxuICAgIC8vIGNvbnN0IGlzU2VydmVyOiBib29sZWFuID0gISFjb250ZXh0LnJlcTtcclxuICAgIC8vIGNvbnN0IGNvb2tpZSA9IGlzU2VydmVyID8gY29udGV4dC5yZXEuaGVhZGVycy5jb29raWUgOiAnJztcclxuICAgIC8vIGNvbnNvbGUubG9nKGlzU2VydmVyLCfsl6zquLDsl6zquLAnKTtcclxuICAgIC8vIGlmICggY29udGV4dC5yZXEgJiYgY29va2llICkgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSBjb29raWU7XHJcbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKCBFTkQgKTtcclxuICAgIGF3YWl0IChjb250ZXh0LnN0b3JlIGFzIFNhZ2FTdG9yZSkuc2FnYVRhc2sudG9Qcm9taXNlKCk7XHJcbiAgICByZXR1cm4geyBcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBwYXRobmFtZTogJy8nLFxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiLCJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgQW55QWN0aW9uLCBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcblxyXG5pbXBvcnQgcG9zdCBmcm9tICcuL3Bvc3QvcmVkdWNlcic7XHJcbmltcG9ydCB7IFBvc3RTdGF0ZSB9IGZyb20gJy4vcG9zdCc7XHJcblxyXG5leHBvcnQgdHlwZSBTdGF0ZSA9IHtcclxuICBwb3N0OiBQb3N0U3RhdGU7XHJcbn07XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9ICggc3RhdGU6IFN0YXRlLCBhY3Rpb246IEFueUFjdGlvbiApOiBTdGF0ZSA9PiB7XHJcbiAgc3dpdGNoICggYWN0aW9uLnR5cGUgKSB7XHJcbiAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgIGNvbnNvbGUubG9nKCdIWURSQVRFJyxhY3Rpb24pO1xyXG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIGNvbnN0IGNvbWJpbmVSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzPHtcclxuICAgICAgICBwb3N0OiBQb3N0U3RhdGUsXHJcbiAgICAgIH0+KHtcclxuICAgICAgICBwb3N0LFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGNvbWJpbmVSZWR1Y2VyKCBzdGF0ZSwgYWN0aW9uICk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHJvb3RSZWR1Y2VyPjtcclxuIiwiZXhwb3J0IGNvbnN0IEFERF9DQU1QQUlHTl9SRVFVRVNUID0gJ0FERF9DQU1QQUlHTl9SRVFVRVNUJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEFERF9DQU1QQUlHTl9TVUNDRVNTID0gJ0FERF9DQU1QQUlHTl9TVUNDRVNTJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEFERF9DQU1QQUlHTl9GQUlMVVJFID0gJ0FERF9DQU1QQUlHTl9GQUlMVVJFJyBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfQ0FNUEFJR05fUkVRVUVTVCA9ICdSRU1PVkVfQ0FNUEFJR05fUkVRVUVTVCcgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfQ0FNUEFJR05fU1VDQ0VTUyA9ICdSRU1PVkVfQ0FNUEFJR05fU1VDQ0VTUycgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfQ0FNUEFJR05fRkFJTFVSRSA9ICdSRU1PVkVfQ0FNUEFJR05fRkFJTFVSRScgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgUkVOREVSX0NBTVBBSUdOX1JFUVVFU1QgPSAnUkVOREVSX0NBTVBBSUdOX1JFUVVFU1QnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgUkVOREVSX0NBTVBBSUdOX1NVQ0NFU1MgPSAnUkVOREVSX0NBTVBBSUdOX1NVQ0NFU1MnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgUkVOREVSX0NBTVBBSUdOX0ZBSUxVUkUgPSAnUkVOREVSX0NBTVBBSUdOX0ZBSUxVUkUnIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9DQU1QQUlHTl9SRVFVRVNUID0gJ1NFQVJDSF9DQU1QQUlHTl9SRVFVRVNUJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9DQU1QQUlHTl9TVUNDRVNTID0gJ1NFQVJDSF9DQU1QQUlHTl9TVUNDRVNTJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9DQU1QQUlHTl9GQUlMVVJFID0gJ1NFQVJDSF9DQU1QQUlHTl9GQUlMVVJFJyBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBDSEVDS19CUkFORF9SRVFVRVNUID0gJ0NIRUNLX0JSQU5EX1JFUVVFU1QnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQ0hFQ0tfQlJBTkRfU1VDQ0VTUyA9ICdDSEVDS19CUkFORF9TVUNDRVNTJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IENIRUNLX0JSQU5EX0ZBSUxVUkUgPSAnQ0hFQ0tfQlJBTkRfRkFJTFVSRScgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9EQVRBX1JFUVVFU1QgPSAnTE9BRF9EQVRBX1JFUVVFU1QnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9BRF9EQVRBX1NVQ0NFU1MgPSAnTE9BRF9EQVRBX1NVQ0NFU1MnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9BRF9EQVRBX0ZBSUxVUkUgPSAnTE9BRF9EQVRBX0ZBSUxVUkUnIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNFVF9IT1ZFUiA9ICdTRVRfSE9WRVInIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgU0VUX1RPR0dMRSA9ICdTRVRfVE9HR0xFJyBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBET1dOTE9BRF9GSUxFX1JFUVVFU1QgPSAnRE9XTkxPQURfRklMRV9SRVFVRVNUJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IERPV05MT0FEX0ZJTEVfU1VDQ0VTUyA9ICdET1dOTE9BRF9GSUxFX1NVQ0NFU1MnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgRE9XTkxPQURfRklMRV9GQUlMVVJFID0gJ0RPV05MT0FEX0ZJTEVfRkFJTFVSRScgYXMgY29uc3Q7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDYW1wYWlnblJlcXVlc3RBY3Rpb24gPSAoIGNhbXBhaWduOiBzdHJpbmcgKSA9PiAoe1xyXG4gICAgdHlwZTogQUREX0NBTVBBSUdOX1JFUVVFU1QsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgY2FtcGFpZ25cclxuICAgIH0sXHJcbn0pXHJcbmV4cG9ydCBjb25zdCBhZGRDYW1wYWlnblN1Y2Nlc3NBY3Rpb24gPSAoIGRhdGE6IG9iamVjdCApID0+ICh7XHJcbiAgICB0eXBlOiBBRERfQ0FNUEFJR05fU1VDQ0VTUyxcclxuICAgIGRhdGFcclxufSlcclxuZXhwb3J0IGNvbnN0IGFkZENhbXBhaWduRmFpbHVyZUFjdGlvbiA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiBBRERfQ0FNUEFJR05fRkFJTFVSRSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVDYW1wYWlnblJlcXVlc3RBY3Rpb24gPSAoIGxpc3RJZDogb2JqZWN0ICkgPT4gKHtcclxuICAgIHR5cGU6IFJFTU9WRV9DQU1QQUlHTl9SRVFVRVNULFxyXG4gICAgZGF0YTogbGlzdElkXHJcbn0pXHJcbmV4cG9ydCBjb25zdCByZW1vdmVDYW1wYWlnblN1Y2Nlc3NBY3Rpb24gPSAoIGRhdGE6IG51bWJlciApID0+ICh7XHJcbiAgICB0eXBlOiBSRU1PVkVfQ0FNUEFJR05fU1VDQ0VTUyxcclxuICAgIGRhdGFcclxufSlcclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNhbXBhaWduRmFpbHVyZUFjdGlvbiA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiBSRU1PVkVfQ0FNUEFJR05fRkFJTFVSRSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkRGF0YVJlcXVlc3RBY3Rpb24gPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogTE9BRF9EQVRBX1JFUVVFU1QsXHJcbn0pXHJcbmV4cG9ydCBjb25zdCBsb2FkRGF0YVN1Y2Nlc3NBY3Rpb24gPSAoIGRhdGE6IGFueSApID0+ICh7XHJcbiAgICB0eXBlOiBMT0FEX0RBVEFfU1VDQ0VTUyxcclxuICAgIGRhdGFcclxufSlcclxuZXhwb3J0IGNvbnN0IGxvYWREYXRhRmFpbHVyZUFjdGlvbiA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiBMT0FEX0RBVEFfRkFJTFVSRSxcclxufSlcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGNoZWNrQnJhbmRSZXF1ZXN0QWN0aW9uID0gKCBkZXZpY2U/OiBzdHJpbmcsIGJyYW5kPzogc3RyaW5nICkgPT4gKHtcclxuICAgIHR5cGU6IENIRUNLX0JSQU5EX1JFUVVFU1QsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgZGV2aWNlLFxyXG4gICAgICAgIGJyYW5kXHJcbiAgICB9XHJcbn0pXHJcbmV4cG9ydCBjb25zdCBjaGVja0JyYW5kU3VjY2Vzc0FjdGlvbiA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiBDSEVDS19CUkFORF9TVUNDRVNTLFxyXG59KVxyXG5leHBvcnQgY29uc3QgY2hlY2tCcmFuZEZhaWx1cmVBY3Rpb24gPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogQ0hFQ0tfQlJBTkRfRkFJTFVSRSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJDYW1wYWlnblJlcXVlc3RBY3Rpb24gPSAoIGRldmljZT86IHN0cmluZywgYnJhbmQ/OiBzdHJpbmcsIGNhbXBhaWduPzogc3RyaW5nLCB5ZWFyPzogc3RyaW5nICkgPT4gKHtcclxuICAgIHR5cGU6IFJFTkRFUl9DQU1QQUlHTl9SRVFVRVNULFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGRldmljZSxcclxuICAgICAgICBicmFuZCxcclxuICAgICAgICBjYW1wYWlnbixcclxuICAgICAgICB5ZWFyLFxyXG4gICAgfSxcclxufSlcclxuZXhwb3J0IGNvbnN0IHJlbmRlckNhbXBhaWduU3VjY2Vzc0FjdGlvbiA9ICggZGF0YTogb2JqZWN0ICkgPT4gKHtcclxuICAgIHR5cGU6IFJFTkRFUl9DQU1QQUlHTl9TVUNDRVNTLFxyXG4gICAgZGF0YVxyXG59KVxyXG5leHBvcnQgY29uc3QgcmVuZGVyQ2FtcGFpZ25GYWlsdXJlQWN0aW9uID0gKCkgPT4gKHtcclxuICAgIHR5cGU6IFJFTkRFUl9DQU1QQUlHTl9GQUlMVVJFLFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHNlYXJjaENhbXBhaWduUmVxdWVzdEFjdGlvbiA9ICggZGF0YT86IGFueSApID0+ICh7XHJcbiAgICB0eXBlOiBTRUFSQ0hfQ0FNUEFJR05fUkVRVUVTVCxcclxuICAgIGRhdGFcclxufSlcclxuZXhwb3J0IGNvbnN0IHNlYXJjaENhbXBhaWduU3VjY2Vzc0FjdGlvbiA9ICggZGF0YTogb2JqZWN0W10gKSA9PiAoe1xyXG4gICAgdHlwZTogU0VBUkNIX0NBTVBBSUdOX1NVQ0NFU1MsXHJcbiAgICBkYXRhXHJcbn0pXHJcbmV4cG9ydCBjb25zdCBzZWFyY2hDYW1wYWlnbkZhaWx1cmVBY3Rpb24gPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogU0VBUkNIX0NBTVBBSUdOX0ZBSUxVUkUsXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3Qgc2V0SG92ZXJBY3Rpb24gPSAoIGhvdmVyOiBzdHJpbmcgKSA9PiAoe1xyXG4gICAgdHlwZTogU0VUX0hPVkVSLFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGhvdmVyXHJcbiAgICB9XHJcbn0pXHJcbmV4cG9ydCBjb25zdCBzZXRUb2dnbGVBY3Rpb24gPSAoIHRvZ2dsZTogYm9vbGVhbiApID0+ICh7XHJcbiAgICB0eXBlOiBTRVRfVE9HR0xFLFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIHRvZ2dsZVxyXG4gICAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IGRvd25sb2FkRmlsZVJlcXVlc3RBY3Rpb24gPSAoIGRhdGE6IHN0cmluZyApID0+ICh7XHJcbiAgICB0eXBlOiBET1dOTE9BRF9GSUxFX1JFUVVFU1QsXHJcbiAgICBkYXRhXHJcbn0pXHJcbmV4cG9ydCBjb25zdCBkb3dubG9hZEZpbGVTdWNjZXNzQWN0aW9uID0gKCBkYXRhOiBzdHJpbmcgKSA9PiAoe1xyXG4gICAgdHlwZTogRE9XTkxPQURfRklMRV9TVUNDRVNTLFxyXG4gICAgZGF0YVxyXG59KVxyXG5leHBvcnQgY29uc3QgZG93bmxvYWRGaWxlRmFpbHVyZUFjdGlvbiA9ICggZmlsZU5hbWU6IHN0cmluZyApID0+ICh7XHJcbiAgICB0eXBlOiBET1dOTE9BRF9GSUxFX0ZBSUxVUkUsXHJcbn0pIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5pbXBvcnQgeyBQb3N0U3RhdGUsIFBvc3RBY3Rpb24gfSBmcm9tICcuL3R5cGVzJztcclxuaW1wb3J0IHsgXHJcbiAgICBBRERfQ0FNUEFJR05fUkVRVUVTVCwgXHJcbiAgICBBRERfQ0FNUEFJR05fU1VDQ0VTUywgXHJcbiAgICBBRERfQ0FNUEFJR05fRkFJTFVSRSxcclxuICAgIFJFTU9WRV9DQU1QQUlHTl9SRVFVRVNULFxyXG4gICAgUkVNT1ZFX0NBTVBBSUdOX1NVQ0NFU1MsXHJcbiAgICBSRU1PVkVfQ0FNUEFJR05fRkFJTFVSRSxcclxuICAgIFJFTkRFUl9DQU1QQUlHTl9SRVFVRVNULFxyXG4gICAgUkVOREVSX0NBTVBBSUdOX1NVQ0NFU1MsXHJcbiAgICBSRU5ERVJfQ0FNUEFJR05fRkFJTFVSRSxcclxuICAgIFNFQVJDSF9DQU1QQUlHTl9SRVFVRVNULFxyXG4gICAgU0VBUkNIX0NBTVBBSUdOX1NVQ0NFU1MsXHJcbiAgICBTRUFSQ0hfQ0FNUEFJR05fRkFJTFVSRSxcclxuICAgIExPQURfREFUQV9SRVFVRVNULFxyXG4gICAgTE9BRF9EQVRBX1NVQ0NFU1MsXHJcbiAgICBMT0FEX0RBVEFfRkFJTFVSRSxcclxuICAgIENIRUNLX0JSQU5EX1JFUVVFU1QsXHJcbiAgICBTRVRfSE9WRVIsXHJcbiAgICBTRVRfVE9HR0xFLFxyXG4gICAgRE9XTkxPQURfRklMRV9SRVFVRVNULFxyXG4gICAgRE9XTkxPQURfRklMRV9TVUNDRVNTLFxyXG4gICAgRE9XTkxPQURfRklMRV9GQUlMVVJFLFxyXG59IGZyb20gJy4vYWN0aW9ucyc7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBQb3N0U3RhdGUgPSB7XHJcbiAgICBjb250ZW50OicnLFxyXG4gICAgZGV2aWNlOiAnd2ViJyxcclxuICAgIGJyYW5kOiAnYWRpZGFzJyxcclxuICAgIGNhbXBhaWduOiBudWxsLFxyXG4gICAgbGlzdDogW10sXHJcbiAgICBrZXl3b3JkOicnLFxyXG4gICAgbGlzdERlbGV0ZWQ6IGZhbHNlLFxyXG4gICAgaXNBZGRpbmdEYXRhOiBmYWxzZSxcclxuICAgIGlzTG9hZGluZ0RhdGE6IGZhbHNlLFxyXG4gICAgbG9hZGluZ0RhdGFFcnJvclJlYXNvbjogbnVsbCxcclxuICAgIGFkZGluZ0RhdGFFcnJvclJlYXNvbjogbnVsbCxcclxuICAgIGhvdmVyOiAnMDEnLFxyXG4gICAgdG9nZ2xlOiB0cnVlLFxyXG4gICAgc3VjY2Vzc1NlbmRpbmdGaWxlTmFtZTogJycsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICggc3RhdGU6IFBvc3RTdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBQb3N0QWN0aW9uICk6IFBvc3RTdGF0ZSA9PiB7XHJcbiAgcmV0dXJuIHByb2R1Y2UgKCBzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAoIGFjdGlvbi50eXBlICkge1xyXG5cclxuICAgICAgICBjYXNlIEFERF9DQU1QQUlHTl9SRVFVRVNUOiB7XHJcbiAgICAgICAgICAgIGRyYWZ0LmlzQWRkaW5nRGF0YSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZGluZ0RhdGFFcnJvclJlYXNvbiA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIEFERF9DQU1QQUlHTl9TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIEFERF9DQU1QQUlHTl9GQUlMVVJFOiB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFJFTU9WRV9DQU1QQUlHTl9SRVFVRVNUOiB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFJFTU9WRV9DQU1QQUlHTl9TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gZHJhZnQubGlzdC5maW5kSW5kZXgodiA9PiB2LmlkID09PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgIGRyYWZ0Lmxpc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgZHJhZnQubGlzdERlbGV0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBSRU1PVkVfQ0FNUEFJR05fRkFJTFVSRToge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBDSEVDS19CUkFORF9SRVFVRVNUOiB7XHJcbiAgICAgICAgICAgIGRyYWZ0LmRldmljZSA9IGFjdGlvbi5kYXRhLmRldmljZTtcclxuICAgICAgICAgICAgZHJhZnQuYnJhbmQgPSBhY3Rpb24uZGF0YS5icmFuZDtcclxuICAgICAgICAgICAgZHJhZnQuY2FtcGFpZ24gPSAnJztcclxuICAgICAgICAgICAgZHJhZnQuY29udGVudCA9ICcnO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBSRU5ERVJfQ0FNUEFJR05fUkVRVUVTVDoge1xyXG4gICAgICAgICAgICBkcmFmdC5pc0FkZGluZ0RhdGEgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5hZGRpbmdEYXRhRXJyb3JSZWFzb24gPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5kZXZpY2UgPSBhY3Rpb24uZGF0YS5kZXZpY2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmJyYW5kID0gYWN0aW9uLmRhdGEuYnJhbmQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFJFTkRFUl9DQU1QQUlHTl9TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgIGRyYWZ0LmNvbnRlbnQgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgZHJhZnQuaXNBZGRpbmdEYXRhID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmNhbXBhaWduID0gJyc7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFJFTkRFUl9DQU1QQUlHTl9GQUlMVVJFOiB7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZGluZ0RhdGFFcnJvclJlYXNvbiA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFNFQVJDSF9DQU1QQUlHTl9SRVFVRVNUOiB7XHJcbiAgICAgICAgICAgIGRyYWZ0LmtleXdvcmQgPSBhY3Rpb24uZGF0YS5zZWFyY2g7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFNFQVJDSF9DQU1QQUlHTl9TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgIGRyYWZ0Lmxpc3QgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgU0VBUkNIX0NBTVBBSUdOX0ZBSUxVUkU6IHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9BRF9EQVRBX1JFUVVFU1Q6IHtcclxuICAgICAgICAgICAgZHJhZnQuaXNMb2FkaW5nRGF0YSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRpbmdEYXRhRXJyb3JSZWFzb24gPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0FEX0RBVEFfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICBkcmFmdC5saXN0ID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgIGRyYWZ0LmlzTG9hZGluZ0RhdGEgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9BRF9EQVRBX0ZBSUxVUkU6IHtcclxuICAgICAgICAgICAgZHJhZnQubG9hZGluZ0RhdGFFcnJvclJlYXNvbiA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFNFVF9IT1ZFUjoge1xyXG4gICAgICAgICAgICBkcmFmdC5ob3ZlciA9IGFjdGlvbi5kYXRhLmhvdmVyO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBTRVRfVE9HR0xFOiB7XHJcbiAgICAgICAgICAgIGRyYWZ0LnRvZ2dsZSA9IGFjdGlvbi5kYXRhLnRvZ2dsZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgRE9XTkxPQURfRklMRV9SRVFVRVNUOiB7XHJcbiAgICAgICAgICAgIGRyYWZ0LnN1Y2Nlc3NTZW5kaW5nRmlsZU5hbWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgRE9XTkxPQURfRklMRV9TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIERPV05MT0FEX0ZJTEVfRkFJTFVSRToge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9KTtcclxufTsiLCJpbXBvcnQgeyBhbGwsIGZvcmsgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgcG9zdCBmcm9tICcuL3Bvc3QnO1xyXG5pbXBvcnQgeyBiYWNrVXJsIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZyc7XHJcblxyXG4vLyBheGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzA2NS9hcGknO1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IGJhY2tVcmw7XHJcbmF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IHRydWU7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIGZvcmsocG9zdCksXHJcbiAgXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYWxsLCBmb3JrLCB0YWtlTGF0ZXN0LCBwdXQsIGNhbGwsIHRocm90dGxlLCB0YWtlRXZlcnkgfSAgZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtcclxuICAgIEFERF9DQU1QQUlHTl9SRVFVRVNULCAvLyDsuqDtjpjsnbgg7J2066aEIERC7JeQ7IScIOyggOyepVxyXG4gICAgQUREX0NBTVBBSUdOX1NVQ0NFU1MsIFxyXG4gICAgQUREX0NBTVBBSUdOX0ZBSUxVUkUsIFxyXG4gICAgUkVNT1ZFX0NBTVBBSUdOX1JFUVVFU1QsIC8vIOy6oO2OmOyduCDsnbTrpoQgRELsl5DshJwg7IKt7KCcXHJcbiAgICBSRU1PVkVfQ0FNUEFJR05fU1VDQ0VTUyxcclxuICAgIFJFTU9WRV9DQU1QQUlHTl9GQUlMVVJFLFxyXG4gICAgTE9BRF9EQVRBX1JFUVVFU1QsIC8vIOy5tOuTnCDrjbDsnbTthLAg66Gc65OcXHJcbiAgICBMT0FEX0RBVEFfU1VDQ0VTUywgXHJcbiAgICBMT0FEX0RBVEFfRkFJTFVSRSxcclxuICAgIFJFTkRFUl9DQU1QQUlHTl9SRVFVRVNULCAvLyDsuqDtjpjsnbgg642w7J207YSwIOy2nOugpVxyXG4gICAgUkVOREVSX0NBTVBBSUdOX1NVQ0NFU1MsXHJcbiAgICBSRU5ERVJfQ0FNUEFJR05fRkFJTFVSRSxcclxuICAgIFNFQVJDSF9DQU1QQUlHTl9SRVFVRVNULCAvLyDsubTrk5wg642w7J207YSwIOyDieyduFxyXG4gICAgU0VBUkNIX0NBTVBBSUdOX1NVQ0NFU1MsXHJcbiAgICBTRUFSQ0hfQ0FNUEFJR05fRkFJTFVSRSxcclxuICAgIERPV05MT0FEX0ZJTEVfUkVRVUVTVCwgLy8g64uk7Jq066Gc65OcIO2MjOydvFxyXG4gICAgRE9XTkxPQURfRklMRV9TVUNDRVNTLFxyXG4gICAgRE9XTkxPQURfRklMRV9GQUlMVVJFLFxyXG4gICAgLy8g7JWh7IWYIOyDneyEsSDtlajsiJhcclxuICAgIGFkZENhbXBhaWduUmVxdWVzdEFjdGlvbixcclxuICAgIGxvYWREYXRhUmVxdWVzdEFjdGlvbixcclxuICAgIHJlbmRlckNhbXBhaWduUmVxdWVzdEFjdGlvbixcclxuICAgIHNlYXJjaENhbXBhaWduUmVxdWVzdEFjdGlvbixcclxuICAgIHJlbW92ZUNhbXBhaWduUmVxdWVzdEFjdGlvbixcclxuICAgIGRvd25sb2FkRmlsZVJlcXVlc3RBY3Rpb24sXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdC9hY3Rpb25zJztcclxuXHJcbmZ1bmN0aW9uIGFkZEFkaWRhc1dlYkFQSSggcG9zdERhdGEgKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QvYWRkY2FtcGFpZ24nLCBwb3N0RGF0YSwge1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgIH0pXHJcbn1cclxuZnVuY3Rpb24qIGFkZEFkaWRhc1dlYiggYWN0aW9uOiBSZXR1cm5UeXBlPHR5cGVvZiBhZGRDYW1wYWlnblJlcXVlc3RBY3Rpb24+ICkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZEFkaWRhc1dlYkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9DQU1QQUlHTl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9DQU1QQUlHTl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiogd2F0Y2hBZGRBZGlkYXNXZWIoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DQU1QQUlHTl9SRVFVRVNULCBhZGRBZGlkYXNXZWIpO1xyXG59XHJcbmZ1bmN0aW9uIHJlbW92ZUNhbXBhaWduQVBJKCBwb3N0RGF0YSApIHtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7cG9zdERhdGF9YCwge1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgIH0pXHJcbn1cclxuZnVuY3Rpb24qIHJlbW92ZUNhbXBhaWduKCBhY3Rpb246IFJldHVyblR5cGU8dHlwZW9mIHJlbW92ZUNhbXBhaWduUmVxdWVzdEFjdGlvbj4gKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlQ2FtcGFpZ25BUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfQ0FNUEFJR05fU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfQ0FNUEFJR05fRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlTmFtZSgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX0NBTVBBSUdOX1JFUVVFU1QsIHJlbW92ZUNhbXBhaWduKTtcclxufVxyXG5mdW5jdGlvbiBsb2FkRGF0YUFQSSgpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdC9saXN0Jywge1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgIH0pXHJcbn1cclxuZnVuY3Rpb24qIGxvYWREYXRhKCBhY3Rpb246IFJldHVyblR5cGU8dHlwZW9mIGxvYWREYXRhUmVxdWVzdEFjdGlvbj4gKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZERhdGFBUEkpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfREFUQV9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfREFUQV9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkRGF0YSgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9EQVRBX1JFUVVFU1QsIGxvYWREYXRhKTtcclxufVxyXG5mdW5jdGlvbiByZW5kZXJDYW1wYWlnbkFQSSggcG9zdERhdGEgKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QvY2FtcGFpZ24nLCBwb3N0RGF0YSwge1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgIH0pXHJcbn1cclxuZnVuY3Rpb24qIHJlbmRlckNhbXBhaWduKCBhY3Rpb246IFJldHVyblR5cGU8dHlwZW9mIHJlbmRlckNhbXBhaWduUmVxdWVzdEFjdGlvbj4gKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVuZGVyQ2FtcGFpZ25BUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU5ERVJfQ0FNUEFJR05fU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU5ERVJfQ0FNUEFJR05fRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUmVuZGVyQ2FtcGFpZ24oKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFJFTkRFUl9DQU1QQUlHTl9SRVFVRVNULCByZW5kZXJDYW1wYWlnbik7XHJcbn1cclxuZnVuY3Rpb24gc2VhcmNoQ2FtcGFpZ25BUEkoIHNlYXJjaCApIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYC9wb3N0L3NlYXJjaC8ke2VuY29kZVVSSUNvbXBvbmVudChzZWFyY2gpfWApXHJcbn1cclxuZnVuY3Rpb24qIHNlYXJjaENhbXBhaWduKCBhY3Rpb246IFJldHVyblR5cGU8dHlwZW9mIHNlYXJjaENhbXBhaWduUmVxdWVzdEFjdGlvbj4gKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2VhcmNoQ2FtcGFpZ25BUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBTRUFSQ0hfQ0FNUEFJR05fU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBTRUFSQ0hfQ0FNUEFJR05fRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoc2VhcmNoQ2FtcGFpZ24oKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFNFQVJDSF9DQU1QQUlHTl9SRVFVRVNULCBzZWFyY2hDYW1wYWlnbik7XHJcbn1cclxuZnVuY3Rpb24gZG93bmxvYWRGaWxlQVBJKCBmaWxlX25hbWUgKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAvcG9zdC9kb3dubG9hZC8ke2VuY29kZVVSSUNvbXBvbmVudChmaWxlX25hbWUpfWApXHJcbn1cclxuZnVuY3Rpb24qIGRvd25sb2FkRmlsZSggYWN0aW9uOiBSZXR1cm5UeXBlPHR5cGVvZiBkb3dubG9hZEZpbGVSZXF1ZXN0QWN0aW9uPiApIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChkb3dubG9hZEZpbGVBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBET1dOTE9BRF9GSUxFX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogRE9XTkxPQURfRklMRV9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiogd2F0Y2hEb3dubG9hZEZpbGUoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KERPV05MT0FEX0ZJTEVfUkVRVUVTVCwgZG93bmxvYWRGaWxlKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRBZGlkYXNXZWIpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkRGF0YSksXHJcbiAgICAgICAgZm9yayh3YXRjaFJlbmRlckNhbXBhaWduKSxcclxuICAgICAgICBmb3JrKHdhdGNoc2VhcmNoQ2FtcGFpZ24pLFxyXG4gICAgICAgIGZvcmsod2F0Y2hSZW1vdmVOYW1lKSxcclxuICAgICAgICBmb3JrKHdhdGNoRG93bmxvYWRGaWxlKSxcclxuICAgIF0pO1xyXG59IiwiaW1wb3J0IHsgQ29udGV4dCwgY3JlYXRlV3JhcHBlciwgTWFrZVN0b3JlIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSwgY29tcG9zZSwgU3RvcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUsIHsgVGFzayB9IGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5pbXBvcnQgcmVkdWNlciwgeyBSb290U3RhdGUgfSBmcm9tICcuLi9yZWR1Y2Vycyc7XHJcbmltcG9ydCByb290U2FnYSBmcm9tICcuLi9zYWdhcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNhZ2FTdG9yZSBleHRlbmRzIFN0b3JlIHtcclxuICBzYWdhVGFzazogVGFzaztcclxuICBlcnI6IHtcclxuICAgIHN0YXR1c0NvZGU6IEVycm9yO1xyXG4gIH07XHJcbn1cclxuXHJcbi8vIGNvbnN0IGxvZ2dlck1pZGRsZXdhcmUgPSAoeyBkaXNwYXRjaCwgZ2V0U3RhdGUgfSkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcclxuLy8gICBjb25zb2xlLmxvZyhhY3Rpb24pO1xyXG4vLyAgIHJldHVybiBuZXh0KGFjdGlvbik7XHJcbi8vIH07XHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZTogTWFrZVN0b3JlPFJvb3RTdGF0ZT4gPSAoIGNvbnRleHQ6IENvbnRleHQgKSA9PiB7XHJcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlLCAvKiBsb2dnZXJNaWRkbGV3YXJlICovXTtcclxuICBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpO1xyXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xyXG4gIChzdG9yZSBhcyBTYWdhU3RvcmUpLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuICAvLyAoIHN0b3JlIGFzIFNhZ2FTdG9yZSApLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge1xyXG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==