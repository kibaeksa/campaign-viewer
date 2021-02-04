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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/About.tsx");
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

/***/ "./pages/About.tsx":
/*!*************************!*\
  !*** ./pages/About.tsx ***!
  \*************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\work_files\\campaign-viewer\\front\\pages\\About.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];




 // import { downloadFileRequestAction } from '../reducers/post';

const About = () => {
  const {
    content,
    device,
    brand
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.post);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])(); // const downloadFile = useCallback((e) =>{
  //   e.preventDefault();
  //   dispatch(downloadFileRequestAction('guide.txt'));
  // },[])

  return __jsx("div", {
    className: "about",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "about-head",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, "\uCEA0\uD398\uC778 \uBDF0\uC5B4 \uC784\uC2DC \uBA54\uB274\uC5BC"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }), __jsx("ul", {
    className: "about-ul",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, "1. \uC785\uB825\uCE78\uC740 \uCEA0\uD398\uC778 \uBA85\uB9CC \uC785\uB825\uD569\uB2C8\uB2E4."), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, "2. \uCEA0\uD398\uC778 \uBA85\uC740 \uB300\uC18C\uBB38\uC790\uAC00 \uC2E4\uC81C URL\uACFC \uC77C\uCE58\uD574\uC57C \uD569\uB2C8\uB2E4."), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, "3. PC\uC5D0\uC11C MOBILE \uC804\uD658\uC2DC, \uBE0C\uB79C\uB4DC \uD074\uB9AD \uBCC0\uACBD => \uB514\uBC14\uC774\uC2A4 \uBCC0\uACBD => \uAC80\uC0C9 \uC21C\uC73C\uB85C \uD569\uB2C8\uB2E4."), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, "4. 2021\uB144 \uCEA0\uD398\uC778\uB9CC \uAC80\uC0C9 \uAC00\uB2A5 \uD569\uB2C8\uB2E4.")), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "about-head",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, "\uAE30\uC220 \uC2A4\uD0DD"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, "- \uD504\uB860\uD2B8\uC5D4\uB4DC"), __jsx("ul", {
    className: "about-ul",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, "\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, "\uD0C0\uC785\uC2A4\uD06C\uB9BD\uD2B8"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, "\uB125\uC2A4\uD2B8JS"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, "\uB9AC\uB355\uC2A4"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, "\uB9AC\uB355\uC2A4\uC0AC\uAC00"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, "SCSS")), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, "- \uBC31\uC5D4\uB4DC"), __jsx("ul", {
    className: "about-ul",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, "\uB178\uB4DCJS"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, "\uC775\uC2A4\uD504\uB808\uC2A4"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, "\uC2DC\uD004\uB77C\uC774\uC988")), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, "- DB \uBC0F \uBC30\uD3EC\uD234"), __jsx("ul", {
    className: "about-ul",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, "MySQL(clearDB)"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, "HEROKU")));
};

const getStaticProps = _store_configureStore__WEBPACK_IMPORTED_MODULE_3__["default"].getStaticProps(async context => {
  // const state = context.store.getState();
  // if( state.post.content ) {
  // context.store.dispatch(checkAdidasWebRequestAction('web', 'adidas'));
  // }
  // const isServer: boolean = !!context.req;
  // const cookie = isServer ? context.req.headers.cookie : '';
  // console.log(isServer,'여기여기');
  // if ( context.req && cookie ) axios.defaults.headers.Cookie = cookie;
  context.store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_2__["END"]);
  await context.store.sagaTask.toPromise();
  return {
    props: {
      pathname: '/About'
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (About);

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9BYm91dC50c3giLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvcG9zdC9hY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3Bvc3QvcmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9wb3N0LnRzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiJdLCJuYW1lcyI6WyJiYWNrVXJsIiwiQWJvdXQiLCJjb250ZW50IiwiZGV2aWNlIiwiYnJhbmQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicG9zdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJnZXRTdGF0aWNQcm9wcyIsIndyYXBwZXIiLCJjb250ZXh0Iiwic3RvcmUiLCJFTkQiLCJzYWdhVGFzayIsInRvUHJvbWlzZSIsInByb3BzIiwicGF0aG5hbWUiLCJyb290UmVkdWNlciIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJjb21iaW5lUmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsIkFERF9DQU1QQUlHTl9SRVFVRVNUIiwiQUREX0NBTVBBSUdOX1NVQ0NFU1MiLCJBRERfQ0FNUEFJR05fRkFJTFVSRSIsIlJFTU9WRV9DQU1QQUlHTl9SRVFVRVNUIiwiUkVNT1ZFX0NBTVBBSUdOX1NVQ0NFU1MiLCJSRU1PVkVfQ0FNUEFJR05fRkFJTFVSRSIsIlJFTkRFUl9DQU1QQUlHTl9SRVFVRVNUIiwiUkVOREVSX0NBTVBBSUdOX1NVQ0NFU1MiLCJSRU5ERVJfQ0FNUEFJR05fRkFJTFVSRSIsIlNFQVJDSF9DQU1QQUlHTl9SRVFVRVNUIiwiU0VBUkNIX0NBTVBBSUdOX1NVQ0NFU1MiLCJTRUFSQ0hfQ0FNUEFJR05fRkFJTFVSRSIsIkNIRUNLX0JSQU5EX1JFUVVFU1QiLCJDSEVDS19CUkFORF9TVUNDRVNTIiwiQ0hFQ0tfQlJBTkRfRkFJTFVSRSIsIkxPQURfREFUQV9SRVFVRVNUIiwiTE9BRF9EQVRBX1NVQ0NFU1MiLCJMT0FEX0RBVEFfRkFJTFVSRSIsIlNFVF9IT1ZFUiIsIlNFVF9UT0dHTEUiLCJET1dOTE9BRF9GSUxFX1JFUVVFU1QiLCJET1dOTE9BRF9GSUxFX1NVQ0NFU1MiLCJET1dOTE9BRF9GSUxFX0ZBSUxVUkUiLCJhZGRDYW1wYWlnblJlcXVlc3RBY3Rpb24iLCJjYW1wYWlnbiIsImRhdGEiLCJhZGRDYW1wYWlnblN1Y2Nlc3NBY3Rpb24iLCJhZGRDYW1wYWlnbkZhaWx1cmVBY3Rpb24iLCJyZW1vdmVDYW1wYWlnblJlcXVlc3RBY3Rpb24iLCJsaXN0SWQiLCJyZW1vdmVDYW1wYWlnblN1Y2Nlc3NBY3Rpb24iLCJyZW1vdmVDYW1wYWlnbkZhaWx1cmVBY3Rpb24iLCJsb2FkRGF0YVJlcXVlc3RBY3Rpb24iLCJsb2FkRGF0YVN1Y2Nlc3NBY3Rpb24iLCJsb2FkRGF0YUZhaWx1cmVBY3Rpb24iLCJjaGVja0JyYW5kUmVxdWVzdEFjdGlvbiIsImNoZWNrQnJhbmRTdWNjZXNzQWN0aW9uIiwiY2hlY2tCcmFuZEZhaWx1cmVBY3Rpb24iLCJyZW5kZXJDYW1wYWlnblJlcXVlc3RBY3Rpb24iLCJ5ZWFyIiwicmVuZGVyQ2FtcGFpZ25TdWNjZXNzQWN0aW9uIiwicmVuZGVyQ2FtcGFpZ25GYWlsdXJlQWN0aW9uIiwic2VhcmNoQ2FtcGFpZ25SZXF1ZXN0QWN0aW9uIiwic2VhcmNoQ2FtcGFpZ25TdWNjZXNzQWN0aW9uIiwic2VhcmNoQ2FtcGFpZ25GYWlsdXJlQWN0aW9uIiwic2V0SG92ZXJBY3Rpb24iLCJob3ZlciIsInNldFRvZ2dsZUFjdGlvbiIsInRvZ2dsZSIsImRvd25sb2FkRmlsZVJlcXVlc3RBY3Rpb24iLCJkb3dubG9hZEZpbGVTdWNjZXNzQWN0aW9uIiwiZG93bmxvYWRGaWxlRmFpbHVyZUFjdGlvbiIsImZpbGVOYW1lIiwiaW5pdGlhbFN0YXRlIiwibGlzdCIsImtleXdvcmQiLCJsaXN0RGVsZXRlZCIsImlzQWRkaW5nRGF0YSIsImlzTG9hZGluZ0RhdGEiLCJsb2FkaW5nRGF0YUVycm9yUmVhc29uIiwiYWRkaW5nRGF0YUVycm9yUmVhc29uIiwic3VjY2Vzc1NlbmRpbmdGaWxlTmFtZSIsInByb2R1Y2UiLCJkcmFmdCIsImluZGV4IiwiZmluZEluZGV4IiwidiIsImlkIiwic3BsaWNlIiwic2VhcmNoIiwiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJ3aXRoQ3JlZGVudGlhbHMiLCJyb290U2FnYSIsImFsbCIsImZvcmsiLCJhZGRBZGlkYXNXZWJBUEkiLCJwb3N0RGF0YSIsImFkZEFkaWRhc1dlYiIsInJlc3VsdCIsImNhbGwiLCJwdXQiLCJlIiwiZXJyb3IiLCJ3YXRjaEFkZEFkaWRhc1dlYiIsInRha2VMYXRlc3QiLCJyZW1vdmVDYW1wYWlnbkFQSSIsImRlbGV0ZSIsInJlbW92ZUNhbXBhaWduIiwid2F0Y2hSZW1vdmVOYW1lIiwibG9hZERhdGFBUEkiLCJsb2FkRGF0YSIsIndhdGNoTG9hZERhdGEiLCJyZW5kZXJDYW1wYWlnbkFQSSIsInJlbmRlckNhbXBhaWduIiwid2F0Y2hSZW5kZXJDYW1wYWlnbiIsInNlYXJjaENhbXBhaWduQVBJIiwiZ2V0IiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2VhcmNoQ2FtcGFpZ24iLCJ3YXRjaHNlYXJjaENhbXBhaWduIiwiZG93bmxvYWRGaWxlQVBJIiwiZmlsZV9uYW1lIiwiZG93bmxvYWRGaWxlIiwid2F0Y2hEb3dubG9hZEZpbGUiLCJwb3N0U2FnYSIsImNvbmZpZ3VyZVN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsImNyZWF0ZVN0b3JlIiwicmVkdWNlciIsInJ1biIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQU8sTUFBTUEsT0FBTyxHQUFHLFFBQXdDLFNBQXhDLEdBQXlGLHVCQUF6RyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQVA7QUFHQTtBQUVBO0FBQ0E7Q0FFQTs7QUFFQSxNQUFNQyxLQUE4QixHQUFHLE1BQU07QUFDekMsUUFBTTtBQUFFQyxXQUFGO0FBQVdDLFVBQVg7QUFBbUJDO0FBQW5CLE1BQTZCQywrREFBVyxDQUFFQyxLQUFELElBQXNCQSxLQUFLLENBQUNDLElBQTdCLENBQTlDO0FBQ0EsUUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEIsQ0FIeUMsQ0FJekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FDSTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUVBSkYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFNRTtBQUFJLGFBQVMsRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1HQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2SUFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaU1BSEYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRGQUpGLENBTkYsRUFZRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkYsRUFhRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYkYsRUFjRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEYsRUFlRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZkYsRUFnQkU7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQWhCRixFQWlCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakJGLEVBa0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFsQkYsRUFtQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3Q0FuQkYsRUFvQkU7QUFBSSxhQUFTLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0Q0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNENBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUhGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFKRixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBTEYsRUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsQ0FwQkYsRUE0QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTVCRixFQTZCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQTdCRixFQThCRTtBQUFJLGFBQVMsRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBSEYsQ0E5QkYsRUFtQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW5DRixFQW9DRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQXBDRixFQXFDRTtBQUFJLGFBQVMsRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLENBckNGLENBREo7QUE0Q0gsQ0FyREQ7O0FBd0RPLE1BQU1DLGNBQThCLEdBQUdDLDZEQUFPLENBQUNELGNBQVIsQ0FBd0IsTUFBT0UsT0FBUCxJQUFvQjtBQUV0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0FBLFNBQU8sQ0FBQ0MsS0FBUixDQUFjUCxRQUFkLENBQXdCUSw4Q0FBeEI7QUFDQSxRQUFPRixPQUFPLENBQUNDLEtBQVQsQ0FBNkJFLFFBQTdCLENBQXNDQyxTQUF0QyxFQUFOO0FBQ0EsU0FBTztBQUFFQyxTQUFLLEVBQUU7QUFDWkMsY0FBUSxFQUFFO0FBREU7QUFBVCxHQUFQO0FBR0gsQ0FoQjZDLENBQXZDO0FBa0JRbkIsb0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDcEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7QUFPQSxNQUFNb0IsV0FBVyxHQUFHLENBQUVmLEtBQUYsRUFBZ0JnQixNQUFoQixLQUE4QztBQUNoRSxVQUFTQSxNQUFNLENBQUNDLElBQWhCO0FBQ0UsU0FBS0MsMERBQUw7QUFDRUMsYUFBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUFzQkosTUFBdEI7QUFDQSxhQUFPQSxNQUFNLENBQUNLLE9BQWQ7O0FBQ0Y7QUFBUztBQUNQLGNBQU1DLGNBQWMsR0FBR0MsNkRBQWUsQ0FFbkM7QUFDRHRCLHFFQUFJQTtBQURILFNBRm1DLENBQXRDO0FBS0EsZUFBT3FCLGNBQWMsQ0FBRXRCLEtBQUYsRUFBU2dCLE1BQVQsQ0FBckI7QUFDRDtBQVhIO0FBYUQsQ0FkRDs7QUFnQmVELDBFQUFmLEU7Ozs7Ozs7Ozs7OztBQzFCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTVMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBRUEsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBRUEsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBRUEsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBRUEsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBRUEsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBRUEsTUFBTUMsU0FBUyxHQUFHLFdBQWxCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHLFlBQW5CO0FBRUEsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBSUEsTUFBTUMsd0JBQXdCLEdBQUtDLFFBQUYsS0FBeUI7QUFDN0QvQixNQUFJLEVBQUVPLG9CQUR1RDtBQUU3RHlCLE1BQUksRUFBRTtBQUNGRDtBQURFO0FBRnVELENBQXpCLENBQWpDO0FBTUEsTUFBTUUsd0JBQXdCLEdBQUtELElBQUYsS0FBcUI7QUFDekRoQyxNQUFJLEVBQUVRLG9CQURtRDtBQUV6RHdCO0FBRnlELENBQXJCLENBQWpDO0FBSUEsTUFBTUUsd0JBQXdCLEdBQUcsT0FBTztBQUMzQ2xDLE1BQUksRUFBRVM7QUFEcUMsQ0FBUCxDQUFqQztBQUlBLE1BQU0wQiwyQkFBMkIsR0FBS0MsTUFBRixLQUF1QjtBQUM5RHBDLE1BQUksRUFBRVUsdUJBRHdEO0FBRTlEc0IsTUFBSSxFQUFFSTtBQUZ3RCxDQUF2QixDQUFwQztBQUlBLE1BQU1DLDJCQUEyQixHQUFLTCxJQUFGLEtBQXFCO0FBQzVEaEMsTUFBSSxFQUFFVyx1QkFEc0Q7QUFFNURxQjtBQUY0RCxDQUFyQixDQUFwQztBQUlBLE1BQU1NLDJCQUEyQixHQUFHLE9BQU87QUFDOUN0QyxNQUFJLEVBQUVZO0FBRHdDLENBQVAsQ0FBcEM7QUFJQSxNQUFNMkIscUJBQXFCLEdBQUcsT0FBTztBQUN4Q3ZDLE1BQUksRUFBRXNCO0FBRGtDLENBQVAsQ0FBOUI7QUFHQSxNQUFNa0IscUJBQXFCLEdBQUtSLElBQUYsS0FBa0I7QUFDbkRoQyxNQUFJLEVBQUV1QixpQkFENkM7QUFFbkRTO0FBRm1ELENBQWxCLENBQTlCO0FBSUEsTUFBTVMscUJBQXFCLEdBQUcsT0FBTztBQUN4Q3pDLE1BQUksRUFBRXdCO0FBRGtDLENBQVAsQ0FBOUI7QUFNQSxNQUFNa0IsdUJBQXVCLEdBQUcsQ0FBRTlELE1BQUYsRUFBbUJDLEtBQW5CLE1BQXdDO0FBQzNFbUIsTUFBSSxFQUFFbUIsbUJBRHFFO0FBRTNFYSxNQUFJLEVBQUU7QUFDRnBELFVBREU7QUFFRkM7QUFGRTtBQUZxRSxDQUF4QyxDQUFoQztBQU9BLE1BQU04RCx1QkFBdUIsR0FBRyxPQUFPO0FBQzFDM0MsTUFBSSxFQUFFb0I7QUFEb0MsQ0FBUCxDQUFoQztBQUdBLE1BQU13Qix1QkFBdUIsR0FBRyxPQUFPO0FBQzFDNUMsTUFBSSxFQUFFcUI7QUFEb0MsQ0FBUCxDQUFoQztBQUlBLE1BQU13QiwyQkFBMkIsR0FBRyxDQUFFakUsTUFBRixFQUFtQkMsS0FBbkIsRUFBbUNrRCxRQUFuQyxFQUFzRGUsSUFBdEQsTUFBMEU7QUFDakg5QyxNQUFJLEVBQUVhLHVCQUQyRztBQUVqSG1CLE1BQUksRUFBRTtBQUNGcEQsVUFERTtBQUVGQyxTQUZFO0FBR0ZrRCxZQUhFO0FBSUZlO0FBSkU7QUFGMkcsQ0FBMUUsQ0FBcEM7QUFTQSxNQUFNQywyQkFBMkIsR0FBS2YsSUFBRixLQUFxQjtBQUM1RGhDLE1BQUksRUFBRWMsdUJBRHNEO0FBRTVEa0I7QUFGNEQsQ0FBckIsQ0FBcEM7QUFJQSxNQUFNZ0IsMkJBQTJCLEdBQUcsT0FBTztBQUM5Q2hELE1BQUksRUFBRWU7QUFEd0MsQ0FBUCxDQUFwQztBQUlBLE1BQU1rQywyQkFBMkIsR0FBS2pCLElBQUYsS0FBbUI7QUFDMURoQyxNQUFJLEVBQUVnQix1QkFEb0Q7QUFFMURnQjtBQUYwRCxDQUFuQixDQUFwQztBQUlBLE1BQU1rQiwyQkFBMkIsR0FBS2xCLElBQUYsS0FBdUI7QUFDOURoQyxNQUFJLEVBQUVpQix1QkFEd0Q7QUFFOURlO0FBRjhELENBQXZCLENBQXBDO0FBSUEsTUFBTW1CLDJCQUEyQixHQUFHLE9BQU87QUFDOUNuRCxNQUFJLEVBQUVrQjtBQUR3QyxDQUFQLENBQXBDO0FBSUEsTUFBTWtDLGNBQWMsR0FBS0MsS0FBRixLQUFzQjtBQUNoRHJELE1BQUksRUFBRXlCLFNBRDBDO0FBRWhETyxNQUFJLEVBQUU7QUFDRnFCO0FBREU7QUFGMEMsQ0FBdEIsQ0FBdkI7QUFNQSxNQUFNQyxlQUFlLEdBQUtDLE1BQUYsS0FBd0I7QUFDbkR2RCxNQUFJLEVBQUUwQixVQUQ2QztBQUVuRE0sTUFBSSxFQUFFO0FBQ0Z1QjtBQURFO0FBRjZDLENBQXhCLENBQXhCO0FBT0EsTUFBTUMseUJBQXlCLEdBQUt4QixJQUFGLEtBQXFCO0FBQzFEaEMsTUFBSSxFQUFFMkIscUJBRG9EO0FBRTFESztBQUYwRCxDQUFyQixDQUFsQztBQUlBLE1BQU15Qix5QkFBeUIsR0FBS3pCLElBQUYsS0FBcUI7QUFDMURoQyxNQUFJLEVBQUU0QixxQkFEb0Q7QUFFMURJO0FBRjBELENBQXJCLENBQWxDO0FBSUEsTUFBTTBCLHlCQUF5QixHQUFLQyxRQUFGLEtBQXlCO0FBQzlEM0QsTUFBSSxFQUFFNkI7QUFEd0QsQ0FBekIsQ0FBbEMsQzs7Ozs7Ozs7Ozs7O0FDeElQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBd0JPLE1BQU0rQixZQUF1QixHQUFHO0FBQ25DakYsU0FBTyxFQUFDLEVBRDJCO0FBRW5DQyxRQUFNLEVBQUUsS0FGMkI7QUFHbkNDLE9BQUssRUFBRSxRQUg0QjtBQUluQ2tELFVBQVEsRUFBRSxJQUp5QjtBQUtuQzhCLE1BQUksRUFBRSxFQUw2QjtBQU1uQ0MsU0FBTyxFQUFDLEVBTjJCO0FBT25DQyxhQUFXLEVBQUUsS0FQc0I7QUFRbkNDLGNBQVksRUFBRSxLQVJxQjtBQVNuQ0MsZUFBYSxFQUFFLEtBVG9CO0FBVW5DQyx3QkFBc0IsRUFBRSxJQVZXO0FBV25DQyx1QkFBcUIsRUFBRSxJQVhZO0FBWW5DZCxPQUFLLEVBQUUsSUFaNEI7QUFhbkNFLFFBQU0sRUFBRSxJQWIyQjtBQWNuQ2Esd0JBQXNCLEVBQUU7QUFkVyxDQUFoQztBQWlCUSxnRUFBRXJGLEtBQWdCLEdBQUc2RSxZQUFyQixFQUFtQzdELE1BQW5DLEtBQXNFO0FBQ25GLFNBQU9zRSw0Q0FBTyxDQUFHdEYsS0FBSCxFQUFXdUYsS0FBRCxJQUFXO0FBQy9CLFlBQVN2RSxNQUFNLENBQUNDLElBQWhCO0FBRUUsV0FBS08sNkRBQUw7QUFBMkI7QUFDdkIrRCxlQUFLLENBQUNOLFlBQU4sR0FBcUIsSUFBckI7QUFDQU0sZUFBSyxDQUFDSCxxQkFBTixHQUE4QixJQUE5QjtBQUNBO0FBQ0g7O0FBQ0QsV0FBSzNELDZEQUFMO0FBQTJCO0FBQ3ZCO0FBQ0g7O0FBQ0QsV0FBS0MsNkRBQUw7QUFBMkI7QUFDdkI7QUFDSDs7QUFDRCxXQUFLQyxnRUFBTDtBQUE4QjtBQUMxQjtBQUNIOztBQUNELFdBQUtDLGdFQUFMO0FBQThCO0FBQzFCLGdCQUFNNEQsS0FBSyxHQUFHRCxLQUFLLENBQUNULElBQU4sQ0FBV1csU0FBWCxDQUFxQkMsQ0FBQyxJQUFJQSxDQUFDLENBQUNDLEVBQUYsS0FBUzNFLE1BQU0sQ0FBQ2lDLElBQTFDLENBQWQ7QUFDQXNDLGVBQUssQ0FBQ1QsSUFBTixDQUFXYyxNQUFYLENBQWtCSixLQUFsQixFQUF5QixDQUF6QjtBQUNBRCxlQUFLLENBQUNQLFdBQU4sR0FBb0IsSUFBcEI7QUFDQTtBQUNIOztBQUNELFdBQUtuRCxnRUFBTDtBQUE4QjtBQUMxQjtBQUNIOztBQUNELFdBQUtPLDREQUFMO0FBQTBCO0FBQ3RCbUQsZUFBSyxDQUFDMUYsTUFBTixHQUFlbUIsTUFBTSxDQUFDaUMsSUFBUCxDQUFZcEQsTUFBM0I7QUFDQTBGLGVBQUssQ0FBQ3pGLEtBQU4sR0FBY2tCLE1BQU0sQ0FBQ2lDLElBQVAsQ0FBWW5ELEtBQTFCO0FBQ0F5RixlQUFLLENBQUN2QyxRQUFOLEdBQWlCLEVBQWpCO0FBQ0F1QyxlQUFLLENBQUMzRixPQUFOLEdBQWdCLEVBQWhCO0FBQ0E7QUFDSDs7QUFDRCxXQUFLa0MsZ0VBQUw7QUFBOEI7QUFDMUJ5RCxlQUFLLENBQUNOLFlBQU4sR0FBcUIsSUFBckI7QUFDQU0sZUFBSyxDQUFDSCxxQkFBTixHQUE4QixJQUE5QjtBQUNBRyxlQUFLLENBQUMxRixNQUFOLEdBQWVtQixNQUFNLENBQUNpQyxJQUFQLENBQVlwRCxNQUEzQjtBQUNBMEYsZUFBSyxDQUFDekYsS0FBTixHQUFja0IsTUFBTSxDQUFDaUMsSUFBUCxDQUFZbkQsS0FBMUI7QUFDQTtBQUNIOztBQUNELFdBQUtpQyxnRUFBTDtBQUE4QjtBQUMxQndELGVBQUssQ0FBQzNGLE9BQU4sR0FBZ0JvQixNQUFNLENBQUNpQyxJQUF2QjtBQUNBc0MsZUFBSyxDQUFDTixZQUFOLEdBQXFCLEtBQXJCO0FBQ0FNLGVBQUssQ0FBQ3ZDLFFBQU4sR0FBaUIsRUFBakI7QUFDQTtBQUNIOztBQUNELFdBQUtoQixnRUFBTDtBQUE4QjtBQUMxQnVELGVBQUssQ0FBQ0gscUJBQU4sR0FBOEIsSUFBOUI7QUFDQTtBQUNIOztBQUNELFdBQUtuRCxnRUFBTDtBQUE4QjtBQUMxQnNELGVBQUssQ0FBQ1IsT0FBTixHQUFnQi9ELE1BQU0sQ0FBQ2lDLElBQVAsQ0FBWTRDLE1BQTVCO0FBQ0E7QUFDSDs7QUFDRCxXQUFLM0QsZ0VBQUw7QUFBOEI7QUFDMUJxRCxlQUFLLENBQUNULElBQU4sR0FBYTlELE1BQU0sQ0FBQ2lDLElBQXBCO0FBQ0E7QUFDSDs7QUFDRCxXQUFLZCxnRUFBTDtBQUE4QjtBQUMxQjtBQUNIOztBQUNELFdBQUtJLDBEQUFMO0FBQXdCO0FBQ3BCZ0QsZUFBSyxDQUFDTCxhQUFOLEdBQXNCLElBQXRCO0FBQ0FLLGVBQUssQ0FBQ0osc0JBQU4sR0FBK0IsSUFBL0I7QUFDQTtBQUNIOztBQUNELFdBQUszQywwREFBTDtBQUF3QjtBQUNwQitDLGVBQUssQ0FBQ1QsSUFBTixHQUFhOUQsTUFBTSxDQUFDaUMsSUFBcEI7QUFDQXNDLGVBQUssQ0FBQ0wsYUFBTixHQUFzQixLQUF0QjtBQUNBO0FBQ0g7O0FBQ0QsV0FBS3pDLDBEQUFMO0FBQXdCO0FBQ3BCOEMsZUFBSyxDQUFDSixzQkFBTixHQUErQixJQUEvQjtBQUNBO0FBQ0g7O0FBQ0QsV0FBS3pDLGtEQUFMO0FBQWdCO0FBQ1o2QyxlQUFLLENBQUNqQixLQUFOLEdBQWN0RCxNQUFNLENBQUNpQyxJQUFQLENBQVlxQixLQUExQjtBQUNBO0FBQ0g7O0FBQ0QsV0FBSzNCLG1EQUFMO0FBQWlCO0FBQ2I0QyxlQUFLLENBQUNmLE1BQU4sR0FBZXhELE1BQU0sQ0FBQ2lDLElBQVAsQ0FBWXVCLE1BQTNCO0FBQ0E7QUFDSDs7QUFDRCxXQUFLNUIsOERBQUw7QUFBNEI7QUFDeEIyQyxlQUFLLENBQUNGLHNCQUFOLEdBQStCckUsTUFBTSxDQUFDaUMsSUFBdEM7QUFDQTtBQUNIOztBQUNELFdBQUtKLDhEQUFMO0FBQTRCO0FBQ3hCO0FBQ0g7O0FBQ0QsV0FBS0MsOERBQUw7QUFBNEI7QUFDeEI7QUFDSDs7QUFDRDtBQUFTO0FBQ0w7QUFDSDtBQTlGSDtBQWdHSCxHQWpHYSxDQUFkO0FBa0dELENBbkdELEU7Ozs7Ozs7Ozs7OztBQzNDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0NBR0E7O0FBRUFnRCw0Q0FBSyxDQUFDQyxRQUFOLENBQWVDLE9BQWYsR0FBeUJ0RyxzREFBekI7QUFDQW9HLDRDQUFLLENBQUNDLFFBQU4sQ0FBZUUsZUFBZixHQUFpQyxJQUFqQztBQUVlLFVBQVVDLFFBQVYsR0FBcUI7QUFDbEMsUUFBTUMsOERBQUcsQ0FBQyxDQUNSQywrREFBSSxDQUFDbkcsNkNBQUQsQ0FESSxDQUFELENBQVQ7QUFHRCxDOzs7Ozs7Ozs7Ozs7QUNkRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUE0QkEsU0FBU29HLGVBQVQsQ0FBMEJDLFFBQTFCLEVBQXFDO0FBQ2pDLFNBQU9SLDRDQUFLLENBQUM3RixJQUFOLENBQVcsbUJBQVgsRUFBZ0NxRyxRQUFoQyxFQUEwQztBQUM3Q0wsbUJBQWUsRUFBRTtBQUQ0QixHQUExQyxDQUFQO0FBR0g7O0FBQ0QsVUFBVU0sWUFBVixDQUF3QnZGLE1BQXhCLEVBQThFO0FBQzFFLE1BQUk7QUFDQSxVQUFNd0YsTUFBTSxHQUFHLE1BQU1DLCtEQUFJLENBQUNKLGVBQUQsRUFBa0JyRixNQUFNLENBQUNpQyxJQUF6QixDQUF6QjtBQUNBLFVBQU15RCw4REFBRyxDQUFDO0FBQ056RixVQUFJLEVBQUVRLDJFQURBO0FBRU53QixVQUFJLEVBQUV1RCxNQUFNLENBQUN2RDtBQUZQLEtBQUQsQ0FBVDtBQUlILEdBTkQsQ0FNRSxPQUFPMEQsQ0FBUCxFQUFVO0FBQ1IsVUFBTUQsOERBQUcsQ0FBQztBQUNOekYsVUFBSSxFQUFFUywyRUFEQTtBQUVOa0YsV0FBSyxFQUFFRDtBQUZELEtBQUQsQ0FBVDtBQUlIO0FBQ0o7O0FBQ0QsVUFBVUUsaUJBQVYsR0FBOEI7QUFDMUIsUUFBTUMscUVBQVUsQ0FBQ3RGLDJFQUFELEVBQXVCK0UsWUFBdkIsQ0FBaEI7QUFDSDs7QUFDRCxTQUFTUSxpQkFBVCxDQUE0QlQsUUFBNUIsRUFBdUM7QUFDbkMsU0FBT1IsNENBQUssQ0FBQ2tCLE1BQU4sQ0FBYyxTQUFRVixRQUFTLEVBQS9CLEVBQWtDO0FBQ3JDTCxtQkFBZSxFQUFFO0FBRG9CLEdBQWxDLENBQVA7QUFHSDs7QUFDRCxVQUFVZ0IsY0FBVixDQUEwQmpHLE1BQTFCLEVBQW1GO0FBQy9FLE1BQUk7QUFDQSxVQUFNd0YsTUFBTSxHQUFHLE1BQU1DLCtEQUFJLENBQUNNLGlCQUFELEVBQW9CL0YsTUFBTSxDQUFDaUMsSUFBM0IsQ0FBekI7QUFDQSxVQUFNeUQsOERBQUcsQ0FBQztBQUNOekYsVUFBSSxFQUFFVyw4RUFEQTtBQUVOcUIsVUFBSSxFQUFFdUQsTUFBTSxDQUFDdkQ7QUFGUCxLQUFELENBQVQ7QUFJSCxHQU5ELENBTUUsT0FBTzBELENBQVAsRUFBVTtBQUNSLFVBQU1ELDhEQUFHLENBQUM7QUFDTnpGLFVBQUksRUFBRVksOEVBREE7QUFFTitFLFdBQUssRUFBRUQ7QUFGRCxLQUFELENBQVQ7QUFJSDtBQUNKOztBQUNELFVBQVVPLGVBQVYsR0FBNEI7QUFDeEIsUUFBTUoscUVBQVUsQ0FBQ25GLDhFQUFELEVBQTBCc0YsY0FBMUIsQ0FBaEI7QUFDSDs7QUFDRCxTQUFTRSxXQUFULEdBQXVCO0FBQ25CLFNBQU9yQiw0Q0FBSyxDQUFDN0YsSUFBTixDQUFXLFlBQVgsRUFBeUI7QUFDNUJnRyxtQkFBZSxFQUFFO0FBRFcsR0FBekIsQ0FBUDtBQUdIOztBQUNELFVBQVVtQixRQUFWLENBQW9CcEcsTUFBcEIsRUFBdUU7QUFDbkUsTUFBSTtBQUNBLFVBQU13RixNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ1UsV0FBRCxDQUF6QjtBQUNBLFVBQU1ULDhEQUFHLENBQUM7QUFDTnpGLFVBQUksRUFBRXVCLHdFQURBO0FBRU5TLFVBQUksRUFBRXVELE1BQU0sQ0FBQ3ZEO0FBRlAsS0FBRCxDQUFUO0FBSUgsR0FORCxDQU1FLE9BQU8wRCxDQUFQLEVBQVU7QUFDUixVQUFNRCw4REFBRyxDQUFDO0FBQ056RixVQUFJLEVBQUV3Qix3RUFEQTtBQUVObUUsV0FBSyxFQUFFRDtBQUZELEtBQUQsQ0FBVDtBQUlIO0FBQ0o7O0FBQ0QsVUFBVVUsYUFBVixHQUEwQjtBQUN0QixRQUFNUCxxRUFBVSxDQUFDdkUsd0VBQUQsRUFBb0I2RSxRQUFwQixDQUFoQjtBQUNIOztBQUNELFNBQVNFLGlCQUFULENBQTRCaEIsUUFBNUIsRUFBdUM7QUFDbkMsU0FBT1IsNENBQUssQ0FBQzdGLElBQU4sQ0FBVyxnQkFBWCxFQUE2QnFHLFFBQTdCLEVBQXVDO0FBQzFDTCxtQkFBZSxFQUFFO0FBRHlCLEdBQXZDLENBQVA7QUFHSDs7QUFDRCxVQUFVc0IsY0FBVixDQUEwQnZHLE1BQTFCLEVBQW1GO0FBQy9FLE1BQUk7QUFDQSxVQUFNd0YsTUFBTSxHQUFHLE1BQU1DLCtEQUFJLENBQUNhLGlCQUFELEVBQW9CdEcsTUFBTSxDQUFDaUMsSUFBM0IsQ0FBekI7QUFDQSxVQUFNeUQsOERBQUcsQ0FBQztBQUNOekYsVUFBSSxFQUFFYyw4RUFEQTtBQUVOa0IsVUFBSSxFQUFFdUQsTUFBTSxDQUFDdkQ7QUFGUCxLQUFELENBQVQ7QUFJSCxHQU5ELENBTUUsT0FBTzBELENBQVAsRUFBVTtBQUNSLFVBQU1ELDhEQUFHLENBQUM7QUFDTnpGLFVBQUksRUFBRWUsOEVBREE7QUFFTjRFLFdBQUssRUFBRUQ7QUFGRCxLQUFELENBQVQ7QUFJSDtBQUNKOztBQUNELFVBQVVhLG1CQUFWLEdBQWdDO0FBQzVCLFFBQU1WLHFFQUFVLENBQUNoRiw4RUFBRCxFQUEwQnlGLGNBQTFCLENBQWhCO0FBQ0g7O0FBQ0QsU0FBU0UsaUJBQVQsQ0FBNEI1QixNQUE1QixFQUFxQztBQUNqQyxTQUFPQyw0Q0FBSyxDQUFDNEIsR0FBTixDQUFXLGdCQUFlQyxrQkFBa0IsQ0FBQzlCLE1BQUQsQ0FBUyxFQUFyRCxDQUFQO0FBQ0g7O0FBQ0QsVUFBVStCLGNBQVYsQ0FBMEI1RyxNQUExQixFQUFtRjtBQUMvRSxNQUFJO0FBQ0EsVUFBTXdGLE1BQU0sR0FBRyxNQUFNQywrREFBSSxDQUFDZ0IsaUJBQUQsRUFBb0J6RyxNQUFNLENBQUNpQyxJQUEzQixDQUF6QjtBQUNBLFVBQU15RCw4REFBRyxDQUFDO0FBQ056RixVQUFJLEVBQUVpQiw4RUFEQTtBQUVOZSxVQUFJLEVBQUV1RCxNQUFNLENBQUN2RDtBQUZQLEtBQUQsQ0FBVDtBQUlILEdBTkQsQ0FNRSxPQUFPMEQsQ0FBUCxFQUFVO0FBQ1IsVUFBTUQsOERBQUcsQ0FBQztBQUNOekYsVUFBSSxFQUFFa0IsOEVBREE7QUFFTnlFLFdBQUssRUFBRUQ7QUFGRCxLQUFELENBQVQ7QUFJSDtBQUNKOztBQUNELFVBQVVrQixtQkFBVixHQUFnQztBQUM1QixRQUFNZixxRUFBVSxDQUFDN0UsOEVBQUQsRUFBMEIyRixjQUExQixDQUFoQjtBQUNIOztBQUNELFNBQVNFLGVBQVQsQ0FBMEJDLFNBQTFCLEVBQXNDO0FBQ2xDLFNBQU9qQyw0Q0FBSyxDQUFDNEIsR0FBTixDQUFXLGtCQUFpQkMsa0JBQWtCLENBQUNJLFNBQUQsQ0FBWSxFQUExRCxDQUFQO0FBQ0g7O0FBQ0QsVUFBVUMsWUFBVixDQUF3QmhILE1BQXhCLEVBQStFO0FBQzNFLE1BQUk7QUFDQSxVQUFNd0YsTUFBTSxHQUFHLE1BQU1DLCtEQUFJLENBQUNxQixlQUFELEVBQWtCOUcsTUFBTSxDQUFDaUMsSUFBekIsQ0FBekI7QUFDQSxVQUFNeUQsOERBQUcsQ0FBQztBQUNOekYsVUFBSSxFQUFFNEIsNEVBREE7QUFFTkksVUFBSSxFQUFFdUQsTUFBTSxDQUFDdkQ7QUFGUCxLQUFELENBQVQ7QUFJSCxHQU5ELENBTUUsT0FBTzBELENBQVAsRUFBVTtBQUNSLFVBQU1ELDhEQUFHLENBQUM7QUFDTnpGLFVBQUksRUFBRTZCLDRFQURBO0FBRU44RCxXQUFLLEVBQUVEO0FBRkQsS0FBRCxDQUFUO0FBSUg7QUFDSjs7QUFDRCxVQUFVc0IsaUJBQVYsR0FBOEI7QUFDMUIsUUFBTW5CLHFFQUFVLENBQUNsRSw0RUFBRCxFQUF3Qm9GLFlBQXhCLENBQWhCO0FBQ0g7O0FBQ2MsVUFBVUUsUUFBVixHQUFxQjtBQUNoQyxRQUFNL0IsOERBQUcsQ0FBQyxDQUNOQywrREFBSSxDQUFDUyxpQkFBRCxDQURFLEVBRU5ULCtEQUFJLENBQUNpQixhQUFELENBRkUsRUFHTmpCLCtEQUFJLENBQUNvQixtQkFBRCxDQUhFLEVBSU5wQiwrREFBSSxDQUFDeUIsbUJBQUQsQ0FKRSxFQUtOekIsK0RBQUksQ0FBQ2MsZUFBRCxDQUxFLEVBTU5kLCtEQUFJLENBQUM2QixpQkFBRCxDQU5FLENBQUQsQ0FBVDtBQVFILEM7Ozs7Ozs7Ozs7OztBQ3ZLRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUUsY0FBb0MsR0FBSzNILE9BQUYsSUFBd0I7QUFDbkUsUUFBTTRILGNBQWMsR0FBR0MsaURBQW9CLEVBQTNDO0FBQ0EsUUFBTUMsV0FBVyxHQUFHLENBQUNGO0FBQWdCO0FBQWpCLEdBQXBCO0FBQ0EsUUFBTUcsUUFBUSxHQUFHLFFBQ2JDLFNBRGEsR0FFYkMsb0ZBQW1CLENBQUNDLDZEQUFlLENBQUMsR0FBR0osV0FBSixDQUFoQixDQUZ2QjtBQUdBLFFBQU03SCxLQUFLLEdBQUdrSSx5REFBVyxDQUFDQyxpREFBRCxFQUFVTCxRQUFWLENBQXpCO0FBQ0M5SCxPQUFELENBQXFCRSxRQUFyQixHQUFnQ3lILGNBQWMsQ0FBQ1MsR0FBZixDQUFtQjNDLDhDQUFuQixDQUFoQyxDQVBtRSxDQVFuRTs7QUFDQSxTQUFPekYsS0FBUDtBQUNELENBVkQ7O0FBWUEsTUFBTUYsT0FBTyxHQUFHdUksd0VBQWEsQ0FBQ1gsY0FBRCxFQUFpQjtBQUM1Q1ksT0FBSztBQUR1QyxDQUFqQixDQUE3QjtBQUlleEksc0VBQWYsRTs7Ozs7Ozs7Ozs7QUNuQ0Esa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvQWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL0Fib3V0LnRzeFwiKTtcbiIsImV4cG9ydCBjb25zdCBiYWNrVXJsID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/ICdodHRwczovL2NhbXBhaWduLXZpZXdlci1zZXJ2ZXIuaGVyb2t1YXBwLmNvbScgOiAnaHR0cDovL2xvY2FsaG9zdDozMDY1JzsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gJy4uL3JlZHVjZXJzJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgeyBFTkQgfSBmcm9tICdyZWR1eC1zYWdhJztcclxuaW1wb3J0IHdyYXBwZXIsIHsgU2FnYVN0b3JlIH0gZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbi8vIGltcG9ydCB7IGRvd25sb2FkRmlsZVJlcXVlc3RBY3Rpb24gfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuXHJcbmNvbnN0IEFib3V0OiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgY29udGVudCwgZGV2aWNlLCBicmFuZCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICAvLyBjb25zdCBkb3dubG9hZEZpbGUgPSB1c2VDYWxsYmFjaygoZSkgPT57XHJcbiAgICAvLyAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vICAgZGlzcGF0Y2goZG93bmxvYWRGaWxlUmVxdWVzdEFjdGlvbignZ3VpZGUudHh0JykpO1xyXG4gICAgLy8gfSxbXSlcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0XCI+XHJcbiAgICAgICAgICB7LyogPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXtkb3dubG9hZEZpbGV9PlxyXG4gICAgICAgICAgICDqsIDsnbTrk5wg7YyM7J28IOuLpOyatOuhnOuTnFxyXG4gICAgICAgICAgPC9hPiAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtaGVhZFwiPuy6oO2OmOyduCDrt7DslrQg7J6E7IucIOuplOuJtOyWvDwvZGl2PlxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJhYm91dC11bFwiPlxyXG4gICAgICAgICAgICA8bGk+MS4g7J6F66Cl7Lm47J2AIOy6oO2OmOyduCDrqoXrp4wg7J6F66Cl7ZWp64uI64ukLjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT4yLiDsuqDtjpjsnbgg66qF7J2AIOuMgOyGjOusuOyekOqwgCDsi6TsoJwgVVJM6rO8IOydvOy5mO2VtOyVvCDtlanri4jri6QuPC9saT5cclxuICAgICAgICAgICAgPGxpPjMuIFBD7JeQ7IScIE1PQklMRSDsoITtmZjsi5wsIOu4jOuenOuTnCDtgbTrpq0g67OA6rK9ID0mZ3Q7IOuUlOuwlOydtOyKpCDrs4Dqsr0gPSZndDsg6rKA7IOJIOyInOycvOuhnCDtlanri4jri6QuPC9saT5cclxuICAgICAgICAgICAgPGxpPjQuIDIwMjHrhYQg7Lqg7Y6Y7J2466eMIOqygOyDiSDqsIDriqUg7ZWp64uI64ukLjwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtaGVhZFwiPuq4sOyIoCDsiqTtg508L2Rpdj5cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgPGRpdj4tIO2UhOuhoO2KuOyXlOuTnDwvZGl2PlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImFib3V0LXVsXCI+XHJcbiAgICAgICAgICAgIDxsaT7snpDrsJTsiqTtgazrpr3tirg8L2xpPlxyXG4gICAgICAgICAgICA8bGk+7YOA7J6F7Iqk7YGs66a97Yq4PC9saT5cclxuICAgICAgICAgICAgPGxpPuuEpeyKpO2KuEpTPC9saT5cclxuICAgICAgICAgICAgPGxpPuumrOuNleyKpDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT7rpqzrjZXsiqTsgqzqsIA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+U0NTUzwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIDxkaXY+LSDrsLHsl5Trk5w8L2Rpdj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJhYm91dC11bFwiPlxyXG4gICAgICAgICAgICA8bGk+64W465OcSlM8L2xpPlxyXG4gICAgICAgICAgICA8bGk+7J217Iqk7ZSE66CI7IqkPC9saT5cclxuICAgICAgICAgICAgPGxpPuyLnO2AhOudvOydtOymiDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIDxkaXY+LSBEQiDrsI8g67Cw7Y+s7Yi0PC9kaXY+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYWJvdXQtdWxcIj5cclxuICAgICAgICAgICAgPGxpPk15U1FMKGNsZWFyREIpPC9saT5cclxuICAgICAgICAgICAgPGxpPkhFUk9LVTwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gd3JhcHBlci5nZXRTdGF0aWNQcm9wcyggYXN5bmMoIGNvbnRleHQgKSA9PiB7XHJcblxyXG4gICAgLy8gY29uc3Qgc3RhdGUgPSBjb250ZXh0LnN0b3JlLmdldFN0YXRlKCk7XHJcbiAgICAvLyBpZiggc3RhdGUucG9zdC5jb250ZW50ICkge1xyXG4gICAgLy8gY29udGV4dC5zdG9yZS5kaXNwYXRjaChjaGVja0FkaWRhc1dlYlJlcXVlc3RBY3Rpb24oJ3dlYicsICdhZGlkYXMnKSk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBjb25zdCBpc1NlcnZlcjogYm9vbGVhbiA9ICEhY29udGV4dC5yZXE7XHJcbiAgICAvLyBjb25zdCBjb29raWUgPSBpc1NlcnZlciA/IGNvbnRleHQucmVxLmhlYWRlcnMuY29va2llIDogJyc7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhpc1NlcnZlciwn7Jes6riw7Jes6riwJyk7XHJcbiAgICBcclxuICAgIC8vIGlmICggY29udGV4dC5yZXEgJiYgY29va2llICkgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSBjb29raWU7XHJcbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKCBFTkQgKTtcclxuICAgIGF3YWl0IChjb250ZXh0LnN0b3JlIGFzIFNhZ2FTdG9yZSkuc2FnYVRhc2sudG9Qcm9taXNlKCk7XHJcbiAgICByZXR1cm4geyBwcm9wczoge1xyXG4gICAgICAgIHBhdGhuYW1lOiAnL0Fib3V0JyxcclxuICAgIH0gfTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dDsiLCJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgQW55QWN0aW9uLCBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcblxyXG5pbXBvcnQgcG9zdCBmcm9tICcuL3Bvc3QvcmVkdWNlcic7XHJcbmltcG9ydCB7IFBvc3RTdGF0ZSB9IGZyb20gJy4vcG9zdCc7XHJcblxyXG5leHBvcnQgdHlwZSBTdGF0ZSA9IHtcclxuICBwb3N0OiBQb3N0U3RhdGU7XHJcbn07XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9ICggc3RhdGU6IFN0YXRlLCBhY3Rpb246IEFueUFjdGlvbiApOiBTdGF0ZSA9PiB7XHJcbiAgc3dpdGNoICggYWN0aW9uLnR5cGUgKSB7XHJcbiAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgIGNvbnNvbGUubG9nKCdIWURSQVRFJyxhY3Rpb24pO1xyXG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIGNvbnN0IGNvbWJpbmVSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzPHtcclxuICAgICAgICBwb3N0OiBQb3N0U3RhdGUsXHJcbiAgICAgIH0+KHtcclxuICAgICAgICBwb3N0LFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGNvbWJpbmVSZWR1Y2VyKCBzdGF0ZSwgYWN0aW9uICk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHJvb3RSZWR1Y2VyPjtcclxuIiwiZXhwb3J0IGNvbnN0IEFERF9DQU1QQUlHTl9SRVFVRVNUID0gJ0FERF9DQU1QQUlHTl9SRVFVRVNUJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEFERF9DQU1QQUlHTl9TVUNDRVNTID0gJ0FERF9DQU1QQUlHTl9TVUNDRVNTJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEFERF9DQU1QQUlHTl9GQUlMVVJFID0gJ0FERF9DQU1QQUlHTl9GQUlMVVJFJyBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfQ0FNUEFJR05fUkVRVUVTVCA9ICdSRU1PVkVfQ0FNUEFJR05fUkVRVUVTVCcgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfQ0FNUEFJR05fU1VDQ0VTUyA9ICdSRU1PVkVfQ0FNUEFJR05fU1VDQ0VTUycgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfQ0FNUEFJR05fRkFJTFVSRSA9ICdSRU1PVkVfQ0FNUEFJR05fRkFJTFVSRScgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgUkVOREVSX0NBTVBBSUdOX1JFUVVFU1QgPSAnUkVOREVSX0NBTVBBSUdOX1JFUVVFU1QnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgUkVOREVSX0NBTVBBSUdOX1NVQ0NFU1MgPSAnUkVOREVSX0NBTVBBSUdOX1NVQ0NFU1MnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgUkVOREVSX0NBTVBBSUdOX0ZBSUxVUkUgPSAnUkVOREVSX0NBTVBBSUdOX0ZBSUxVUkUnIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9DQU1QQUlHTl9SRVFVRVNUID0gJ1NFQVJDSF9DQU1QQUlHTl9SRVFVRVNUJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9DQU1QQUlHTl9TVUNDRVNTID0gJ1NFQVJDSF9DQU1QQUlHTl9TVUNDRVNTJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9DQU1QQUlHTl9GQUlMVVJFID0gJ1NFQVJDSF9DQU1QQUlHTl9GQUlMVVJFJyBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBDSEVDS19CUkFORF9SRVFVRVNUID0gJ0NIRUNLX0JSQU5EX1JFUVVFU1QnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQ0hFQ0tfQlJBTkRfU1VDQ0VTUyA9ICdDSEVDS19CUkFORF9TVUNDRVNTJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IENIRUNLX0JSQU5EX0ZBSUxVUkUgPSAnQ0hFQ0tfQlJBTkRfRkFJTFVSRScgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9EQVRBX1JFUVVFU1QgPSAnTE9BRF9EQVRBX1JFUVVFU1QnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9BRF9EQVRBX1NVQ0NFU1MgPSAnTE9BRF9EQVRBX1NVQ0NFU1MnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9BRF9EQVRBX0ZBSUxVUkUgPSAnTE9BRF9EQVRBX0ZBSUxVUkUnIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNFVF9IT1ZFUiA9ICdTRVRfSE9WRVInIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgU0VUX1RPR0dMRSA9ICdTRVRfVE9HR0xFJyBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBET1dOTE9BRF9GSUxFX1JFUVVFU1QgPSAnRE9XTkxPQURfRklMRV9SRVFVRVNUJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IERPV05MT0FEX0ZJTEVfU1VDQ0VTUyA9ICdET1dOTE9BRF9GSUxFX1NVQ0NFU1MnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgRE9XTkxPQURfRklMRV9GQUlMVVJFID0gJ0RPV05MT0FEX0ZJTEVfRkFJTFVSRScgYXMgY29uc3Q7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDYW1wYWlnblJlcXVlc3RBY3Rpb24gPSAoIGNhbXBhaWduOiBzdHJpbmcgKSA9PiAoe1xyXG4gICAgdHlwZTogQUREX0NBTVBBSUdOX1JFUVVFU1QsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgY2FtcGFpZ25cclxuICAgIH0sXHJcbn0pXHJcbmV4cG9ydCBjb25zdCBhZGRDYW1wYWlnblN1Y2Nlc3NBY3Rpb24gPSAoIGRhdGE6IG9iamVjdCApID0+ICh7XHJcbiAgICB0eXBlOiBBRERfQ0FNUEFJR05fU1VDQ0VTUyxcclxuICAgIGRhdGFcclxufSlcclxuZXhwb3J0IGNvbnN0IGFkZENhbXBhaWduRmFpbHVyZUFjdGlvbiA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiBBRERfQ0FNUEFJR05fRkFJTFVSRSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVDYW1wYWlnblJlcXVlc3RBY3Rpb24gPSAoIGxpc3RJZDogb2JqZWN0ICkgPT4gKHtcclxuICAgIHR5cGU6IFJFTU9WRV9DQU1QQUlHTl9SRVFVRVNULFxyXG4gICAgZGF0YTogbGlzdElkXHJcbn0pXHJcbmV4cG9ydCBjb25zdCByZW1vdmVDYW1wYWlnblN1Y2Nlc3NBY3Rpb24gPSAoIGRhdGE6IG51bWJlciApID0+ICh7XHJcbiAgICB0eXBlOiBSRU1PVkVfQ0FNUEFJR05fU1VDQ0VTUyxcclxuICAgIGRhdGFcclxufSlcclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNhbXBhaWduRmFpbHVyZUFjdGlvbiA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiBSRU1PVkVfQ0FNUEFJR05fRkFJTFVSRSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkRGF0YVJlcXVlc3RBY3Rpb24gPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogTE9BRF9EQVRBX1JFUVVFU1QsXHJcbn0pXHJcbmV4cG9ydCBjb25zdCBsb2FkRGF0YVN1Y2Nlc3NBY3Rpb24gPSAoIGRhdGE6IGFueSApID0+ICh7XHJcbiAgICB0eXBlOiBMT0FEX0RBVEFfU1VDQ0VTUyxcclxuICAgIGRhdGFcclxufSlcclxuZXhwb3J0IGNvbnN0IGxvYWREYXRhRmFpbHVyZUFjdGlvbiA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiBMT0FEX0RBVEFfRkFJTFVSRSxcclxufSlcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGNoZWNrQnJhbmRSZXF1ZXN0QWN0aW9uID0gKCBkZXZpY2U/OiBzdHJpbmcsIGJyYW5kPzogc3RyaW5nICkgPT4gKHtcclxuICAgIHR5cGU6IENIRUNLX0JSQU5EX1JFUVVFU1QsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgZGV2aWNlLFxyXG4gICAgICAgIGJyYW5kXHJcbiAgICB9XHJcbn0pXHJcbmV4cG9ydCBjb25zdCBjaGVja0JyYW5kU3VjY2Vzc0FjdGlvbiA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiBDSEVDS19CUkFORF9TVUNDRVNTLFxyXG59KVxyXG5leHBvcnQgY29uc3QgY2hlY2tCcmFuZEZhaWx1cmVBY3Rpb24gPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogQ0hFQ0tfQlJBTkRfRkFJTFVSRSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJDYW1wYWlnblJlcXVlc3RBY3Rpb24gPSAoIGRldmljZT86IHN0cmluZywgYnJhbmQ/OiBzdHJpbmcsIGNhbXBhaWduPzogc3RyaW5nLCB5ZWFyPzogc3RyaW5nICkgPT4gKHtcclxuICAgIHR5cGU6IFJFTkRFUl9DQU1QQUlHTl9SRVFVRVNULFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGRldmljZSxcclxuICAgICAgICBicmFuZCxcclxuICAgICAgICBjYW1wYWlnbixcclxuICAgICAgICB5ZWFyLFxyXG4gICAgfSxcclxufSlcclxuZXhwb3J0IGNvbnN0IHJlbmRlckNhbXBhaWduU3VjY2Vzc0FjdGlvbiA9ICggZGF0YTogb2JqZWN0ICkgPT4gKHtcclxuICAgIHR5cGU6IFJFTkRFUl9DQU1QQUlHTl9TVUNDRVNTLFxyXG4gICAgZGF0YVxyXG59KVxyXG5leHBvcnQgY29uc3QgcmVuZGVyQ2FtcGFpZ25GYWlsdXJlQWN0aW9uID0gKCkgPT4gKHtcclxuICAgIHR5cGU6IFJFTkRFUl9DQU1QQUlHTl9GQUlMVVJFLFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHNlYXJjaENhbXBhaWduUmVxdWVzdEFjdGlvbiA9ICggZGF0YT86IGFueSApID0+ICh7XHJcbiAgICB0eXBlOiBTRUFSQ0hfQ0FNUEFJR05fUkVRVUVTVCxcclxuICAgIGRhdGFcclxufSlcclxuZXhwb3J0IGNvbnN0IHNlYXJjaENhbXBhaWduU3VjY2Vzc0FjdGlvbiA9ICggZGF0YTogb2JqZWN0W10gKSA9PiAoe1xyXG4gICAgdHlwZTogU0VBUkNIX0NBTVBBSUdOX1NVQ0NFU1MsXHJcbiAgICBkYXRhXHJcbn0pXHJcbmV4cG9ydCBjb25zdCBzZWFyY2hDYW1wYWlnbkZhaWx1cmVBY3Rpb24gPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogU0VBUkNIX0NBTVBBSUdOX0ZBSUxVUkUsXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3Qgc2V0SG92ZXJBY3Rpb24gPSAoIGhvdmVyOiBzdHJpbmcgKSA9PiAoe1xyXG4gICAgdHlwZTogU0VUX0hPVkVSLFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGhvdmVyXHJcbiAgICB9XHJcbn0pXHJcbmV4cG9ydCBjb25zdCBzZXRUb2dnbGVBY3Rpb24gPSAoIHRvZ2dsZTogYm9vbGVhbiApID0+ICh7XHJcbiAgICB0eXBlOiBTRVRfVE9HR0xFLFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIHRvZ2dsZVxyXG4gICAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IGRvd25sb2FkRmlsZVJlcXVlc3RBY3Rpb24gPSAoIGRhdGE6IHN0cmluZyApID0+ICh7XHJcbiAgICB0eXBlOiBET1dOTE9BRF9GSUxFX1JFUVVFU1QsXHJcbiAgICBkYXRhXHJcbn0pXHJcbmV4cG9ydCBjb25zdCBkb3dubG9hZEZpbGVTdWNjZXNzQWN0aW9uID0gKCBkYXRhOiBzdHJpbmcgKSA9PiAoe1xyXG4gICAgdHlwZTogRE9XTkxPQURfRklMRV9TVUNDRVNTLFxyXG4gICAgZGF0YVxyXG59KVxyXG5leHBvcnQgY29uc3QgZG93bmxvYWRGaWxlRmFpbHVyZUFjdGlvbiA9ICggZmlsZU5hbWU6IHN0cmluZyApID0+ICh7XHJcbiAgICB0eXBlOiBET1dOTE9BRF9GSUxFX0ZBSUxVUkUsXHJcbn0pIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5pbXBvcnQgeyBQb3N0U3RhdGUsIFBvc3RBY3Rpb24gfSBmcm9tICcuL3R5cGVzJztcclxuaW1wb3J0IHsgXHJcbiAgICBBRERfQ0FNUEFJR05fUkVRVUVTVCwgXHJcbiAgICBBRERfQ0FNUEFJR05fU1VDQ0VTUywgXHJcbiAgICBBRERfQ0FNUEFJR05fRkFJTFVSRSxcclxuICAgIFJFTU9WRV9DQU1QQUlHTl9SRVFVRVNULFxyXG4gICAgUkVNT1ZFX0NBTVBBSUdOX1NVQ0NFU1MsXHJcbiAgICBSRU1PVkVfQ0FNUEFJR05fRkFJTFVSRSxcclxuICAgIFJFTkRFUl9DQU1QQUlHTl9SRVFVRVNULFxyXG4gICAgUkVOREVSX0NBTVBBSUdOX1NVQ0NFU1MsXHJcbiAgICBSRU5ERVJfQ0FNUEFJR05fRkFJTFVSRSxcclxuICAgIFNFQVJDSF9DQU1QQUlHTl9SRVFVRVNULFxyXG4gICAgU0VBUkNIX0NBTVBBSUdOX1NVQ0NFU1MsXHJcbiAgICBTRUFSQ0hfQ0FNUEFJR05fRkFJTFVSRSxcclxuICAgIExPQURfREFUQV9SRVFVRVNULFxyXG4gICAgTE9BRF9EQVRBX1NVQ0NFU1MsXHJcbiAgICBMT0FEX0RBVEFfRkFJTFVSRSxcclxuICAgIENIRUNLX0JSQU5EX1JFUVVFU1QsXHJcbiAgICBTRVRfSE9WRVIsXHJcbiAgICBTRVRfVE9HR0xFLFxyXG4gICAgRE9XTkxPQURfRklMRV9SRVFVRVNULFxyXG4gICAgRE9XTkxPQURfRklMRV9TVUNDRVNTLFxyXG4gICAgRE9XTkxPQURfRklMRV9GQUlMVVJFLFxyXG59IGZyb20gJy4vYWN0aW9ucyc7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBQb3N0U3RhdGUgPSB7XHJcbiAgICBjb250ZW50OicnLFxyXG4gICAgZGV2aWNlOiAnd2ViJyxcclxuICAgIGJyYW5kOiAnYWRpZGFzJyxcclxuICAgIGNhbXBhaWduOiBudWxsLFxyXG4gICAgbGlzdDogW10sXHJcbiAgICBrZXl3b3JkOicnLFxyXG4gICAgbGlzdERlbGV0ZWQ6IGZhbHNlLFxyXG4gICAgaXNBZGRpbmdEYXRhOiBmYWxzZSxcclxuICAgIGlzTG9hZGluZ0RhdGE6IGZhbHNlLFxyXG4gICAgbG9hZGluZ0RhdGFFcnJvclJlYXNvbjogbnVsbCxcclxuICAgIGFkZGluZ0RhdGFFcnJvclJlYXNvbjogbnVsbCxcclxuICAgIGhvdmVyOiAnMDEnLFxyXG4gICAgdG9nZ2xlOiB0cnVlLFxyXG4gICAgc3VjY2Vzc1NlbmRpbmdGaWxlTmFtZTogJycsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICggc3RhdGU6IFBvc3RTdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBQb3N0QWN0aW9uICk6IFBvc3RTdGF0ZSA9PiB7XHJcbiAgcmV0dXJuIHByb2R1Y2UgKCBzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAoIGFjdGlvbi50eXBlICkge1xyXG5cclxuICAgICAgICBjYXNlIEFERF9DQU1QQUlHTl9SRVFVRVNUOiB7XHJcbiAgICAgICAgICAgIGRyYWZ0LmlzQWRkaW5nRGF0YSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZGluZ0RhdGFFcnJvclJlYXNvbiA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIEFERF9DQU1QQUlHTl9TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIEFERF9DQU1QQUlHTl9GQUlMVVJFOiB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFJFTU9WRV9DQU1QQUlHTl9SRVFVRVNUOiB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFJFTU9WRV9DQU1QQUlHTl9TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gZHJhZnQubGlzdC5maW5kSW5kZXgodiA9PiB2LmlkID09PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgIGRyYWZ0Lmxpc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgZHJhZnQubGlzdERlbGV0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBSRU1PVkVfQ0FNUEFJR05fRkFJTFVSRToge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBDSEVDS19CUkFORF9SRVFVRVNUOiB7XHJcbiAgICAgICAgICAgIGRyYWZ0LmRldmljZSA9IGFjdGlvbi5kYXRhLmRldmljZTtcclxuICAgICAgICAgICAgZHJhZnQuYnJhbmQgPSBhY3Rpb24uZGF0YS5icmFuZDtcclxuICAgICAgICAgICAgZHJhZnQuY2FtcGFpZ24gPSAnJztcclxuICAgICAgICAgICAgZHJhZnQuY29udGVudCA9ICcnO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBSRU5ERVJfQ0FNUEFJR05fUkVRVUVTVDoge1xyXG4gICAgICAgICAgICBkcmFmdC5pc0FkZGluZ0RhdGEgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5hZGRpbmdEYXRhRXJyb3JSZWFzb24gPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5kZXZpY2UgPSBhY3Rpb24uZGF0YS5kZXZpY2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmJyYW5kID0gYWN0aW9uLmRhdGEuYnJhbmQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFJFTkRFUl9DQU1QQUlHTl9TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgIGRyYWZ0LmNvbnRlbnQgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgZHJhZnQuaXNBZGRpbmdEYXRhID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmNhbXBhaWduID0gJyc7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFJFTkRFUl9DQU1QQUlHTl9GQUlMVVJFOiB7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZGluZ0RhdGFFcnJvclJlYXNvbiA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFNFQVJDSF9DQU1QQUlHTl9SRVFVRVNUOiB7XHJcbiAgICAgICAgICAgIGRyYWZ0LmtleXdvcmQgPSBhY3Rpb24uZGF0YS5zZWFyY2g7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFNFQVJDSF9DQU1QQUlHTl9TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgIGRyYWZ0Lmxpc3QgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgU0VBUkNIX0NBTVBBSUdOX0ZBSUxVUkU6IHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9BRF9EQVRBX1JFUVVFU1Q6IHtcclxuICAgICAgICAgICAgZHJhZnQuaXNMb2FkaW5nRGF0YSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRpbmdEYXRhRXJyb3JSZWFzb24gPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0FEX0RBVEFfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICBkcmFmdC5saXN0ID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgIGRyYWZ0LmlzTG9hZGluZ0RhdGEgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9BRF9EQVRBX0ZBSUxVUkU6IHtcclxuICAgICAgICAgICAgZHJhZnQubG9hZGluZ0RhdGFFcnJvclJlYXNvbiA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFNFVF9IT1ZFUjoge1xyXG4gICAgICAgICAgICBkcmFmdC5ob3ZlciA9IGFjdGlvbi5kYXRhLmhvdmVyO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBTRVRfVE9HR0xFOiB7XHJcbiAgICAgICAgICAgIGRyYWZ0LnRvZ2dsZSA9IGFjdGlvbi5kYXRhLnRvZ2dsZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgRE9XTkxPQURfRklMRV9SRVFVRVNUOiB7XHJcbiAgICAgICAgICAgIGRyYWZ0LnN1Y2Nlc3NTZW5kaW5nRmlsZU5hbWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgRE9XTkxPQURfRklMRV9TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIERPV05MT0FEX0ZJTEVfRkFJTFVSRToge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9KTtcclxufTsiLCJpbXBvcnQgeyBhbGwsIGZvcmsgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgcG9zdCBmcm9tICcuL3Bvc3QnO1xyXG5pbXBvcnQgeyBiYWNrVXJsIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZyc7XHJcblxyXG4vLyBheGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzA2NS9hcGknO1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IGJhY2tVcmw7XHJcbmF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IHRydWU7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIGZvcmsocG9zdCksXHJcbiAgXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYWxsLCBmb3JrLCB0YWtlTGF0ZXN0LCBwdXQsIGNhbGwsIHRocm90dGxlLCB0YWtlRXZlcnkgfSAgZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtcclxuICAgIEFERF9DQU1QQUlHTl9SRVFVRVNULCAvLyDsuqDtjpjsnbgg7J2066aEIERC7JeQ7IScIOyggOyepVxyXG4gICAgQUREX0NBTVBBSUdOX1NVQ0NFU1MsIFxyXG4gICAgQUREX0NBTVBBSUdOX0ZBSUxVUkUsIFxyXG4gICAgUkVNT1ZFX0NBTVBBSUdOX1JFUVVFU1QsIC8vIOy6oO2OmOyduCDsnbTrpoQgRELsl5DshJwg7IKt7KCcXHJcbiAgICBSRU1PVkVfQ0FNUEFJR05fU1VDQ0VTUyxcclxuICAgIFJFTU9WRV9DQU1QQUlHTl9GQUlMVVJFLFxyXG4gICAgTE9BRF9EQVRBX1JFUVVFU1QsIC8vIOy5tOuTnCDrjbDsnbTthLAg66Gc65OcXHJcbiAgICBMT0FEX0RBVEFfU1VDQ0VTUywgXHJcbiAgICBMT0FEX0RBVEFfRkFJTFVSRSxcclxuICAgIFJFTkRFUl9DQU1QQUlHTl9SRVFVRVNULCAvLyDsuqDtjpjsnbgg642w7J207YSwIOy2nOugpVxyXG4gICAgUkVOREVSX0NBTVBBSUdOX1NVQ0NFU1MsXHJcbiAgICBSRU5ERVJfQ0FNUEFJR05fRkFJTFVSRSxcclxuICAgIFNFQVJDSF9DQU1QQUlHTl9SRVFVRVNULCAvLyDsubTrk5wg642w7J207YSwIOyDieyduFxyXG4gICAgU0VBUkNIX0NBTVBBSUdOX1NVQ0NFU1MsXHJcbiAgICBTRUFSQ0hfQ0FNUEFJR05fRkFJTFVSRSxcclxuICAgIERPV05MT0FEX0ZJTEVfUkVRVUVTVCwgLy8g64uk7Jq066Gc65OcIO2MjOydvFxyXG4gICAgRE9XTkxPQURfRklMRV9TVUNDRVNTLFxyXG4gICAgRE9XTkxPQURfRklMRV9GQUlMVVJFLFxyXG4gICAgLy8g7JWh7IWYIOyDneyEsSDtlajsiJhcclxuICAgIGFkZENhbXBhaWduUmVxdWVzdEFjdGlvbixcclxuICAgIGxvYWREYXRhUmVxdWVzdEFjdGlvbixcclxuICAgIHJlbmRlckNhbXBhaWduUmVxdWVzdEFjdGlvbixcclxuICAgIHNlYXJjaENhbXBhaWduUmVxdWVzdEFjdGlvbixcclxuICAgIHJlbW92ZUNhbXBhaWduUmVxdWVzdEFjdGlvbixcclxuICAgIGRvd25sb2FkRmlsZVJlcXVlc3RBY3Rpb24sXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdC9hY3Rpb25zJztcclxuXHJcbmZ1bmN0aW9uIGFkZEFkaWRhc1dlYkFQSSggcG9zdERhdGEgKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QvYWRkY2FtcGFpZ24nLCBwb3N0RGF0YSwge1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgIH0pXHJcbn1cclxuZnVuY3Rpb24qIGFkZEFkaWRhc1dlYiggYWN0aW9uOiBSZXR1cm5UeXBlPHR5cGVvZiBhZGRDYW1wYWlnblJlcXVlc3RBY3Rpb24+ICkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZEFkaWRhc1dlYkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9DQU1QQUlHTl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9DQU1QQUlHTl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiogd2F0Y2hBZGRBZGlkYXNXZWIoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DQU1QQUlHTl9SRVFVRVNULCBhZGRBZGlkYXNXZWIpO1xyXG59XHJcbmZ1bmN0aW9uIHJlbW92ZUNhbXBhaWduQVBJKCBwb3N0RGF0YSApIHtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7cG9zdERhdGF9YCwge1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgIH0pXHJcbn1cclxuZnVuY3Rpb24qIHJlbW92ZUNhbXBhaWduKCBhY3Rpb246IFJldHVyblR5cGU8dHlwZW9mIHJlbW92ZUNhbXBhaWduUmVxdWVzdEFjdGlvbj4gKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlQ2FtcGFpZ25BUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfQ0FNUEFJR05fU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfQ0FNUEFJR05fRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlTmFtZSgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX0NBTVBBSUdOX1JFUVVFU1QsIHJlbW92ZUNhbXBhaWduKTtcclxufVxyXG5mdW5jdGlvbiBsb2FkRGF0YUFQSSgpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdC9saXN0Jywge1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgIH0pXHJcbn1cclxuZnVuY3Rpb24qIGxvYWREYXRhKCBhY3Rpb246IFJldHVyblR5cGU8dHlwZW9mIGxvYWREYXRhUmVxdWVzdEFjdGlvbj4gKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZERhdGFBUEkpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfREFUQV9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfREFUQV9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkRGF0YSgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9EQVRBX1JFUVVFU1QsIGxvYWREYXRhKTtcclxufVxyXG5mdW5jdGlvbiByZW5kZXJDYW1wYWlnbkFQSSggcG9zdERhdGEgKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QvY2FtcGFpZ24nLCBwb3N0RGF0YSwge1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgIH0pXHJcbn1cclxuZnVuY3Rpb24qIHJlbmRlckNhbXBhaWduKCBhY3Rpb246IFJldHVyblR5cGU8dHlwZW9mIHJlbmRlckNhbXBhaWduUmVxdWVzdEFjdGlvbj4gKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVuZGVyQ2FtcGFpZ25BUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU5ERVJfQ0FNUEFJR05fU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU5ERVJfQ0FNUEFJR05fRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUmVuZGVyQ2FtcGFpZ24oKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFJFTkRFUl9DQU1QQUlHTl9SRVFVRVNULCByZW5kZXJDYW1wYWlnbik7XHJcbn1cclxuZnVuY3Rpb24gc2VhcmNoQ2FtcGFpZ25BUEkoIHNlYXJjaCApIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYC9wb3N0L3NlYXJjaC8ke2VuY29kZVVSSUNvbXBvbmVudChzZWFyY2gpfWApXHJcbn1cclxuZnVuY3Rpb24qIHNlYXJjaENhbXBhaWduKCBhY3Rpb246IFJldHVyblR5cGU8dHlwZW9mIHNlYXJjaENhbXBhaWduUmVxdWVzdEFjdGlvbj4gKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2VhcmNoQ2FtcGFpZ25BUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBTRUFSQ0hfQ0FNUEFJR05fU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBTRUFSQ0hfQ0FNUEFJR05fRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoc2VhcmNoQ2FtcGFpZ24oKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFNFQVJDSF9DQU1QQUlHTl9SRVFVRVNULCBzZWFyY2hDYW1wYWlnbik7XHJcbn1cclxuZnVuY3Rpb24gZG93bmxvYWRGaWxlQVBJKCBmaWxlX25hbWUgKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAvcG9zdC9kb3dubG9hZC8ke2VuY29kZVVSSUNvbXBvbmVudChmaWxlX25hbWUpfWApXHJcbn1cclxuZnVuY3Rpb24qIGRvd25sb2FkRmlsZSggYWN0aW9uOiBSZXR1cm5UeXBlPHR5cGVvZiBkb3dubG9hZEZpbGVSZXF1ZXN0QWN0aW9uPiApIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChkb3dubG9hZEZpbGVBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBET1dOTE9BRF9GSUxFX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogRE9XTkxPQURfRklMRV9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiogd2F0Y2hEb3dubG9hZEZpbGUoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KERPV05MT0FEX0ZJTEVfUkVRVUVTVCwgZG93bmxvYWRGaWxlKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRBZGlkYXNXZWIpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkRGF0YSksXHJcbiAgICAgICAgZm9yayh3YXRjaFJlbmRlckNhbXBhaWduKSxcclxuICAgICAgICBmb3JrKHdhdGNoc2VhcmNoQ2FtcGFpZ24pLFxyXG4gICAgICAgIGZvcmsod2F0Y2hSZW1vdmVOYW1lKSxcclxuICAgICAgICBmb3JrKHdhdGNoRG93bmxvYWRGaWxlKSxcclxuICAgIF0pO1xyXG59IiwiaW1wb3J0IHsgQ29udGV4dCwgY3JlYXRlV3JhcHBlciwgTWFrZVN0b3JlIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSwgY29tcG9zZSwgU3RvcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUsIHsgVGFzayB9IGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5pbXBvcnQgcmVkdWNlciwgeyBSb290U3RhdGUgfSBmcm9tICcuLi9yZWR1Y2Vycyc7XHJcbmltcG9ydCByb290U2FnYSBmcm9tICcuLi9zYWdhcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNhZ2FTdG9yZSBleHRlbmRzIFN0b3JlIHtcclxuICBzYWdhVGFzazogVGFzaztcclxuICBlcnI6IHtcclxuICAgIHN0YXR1c0NvZGU6IEVycm9yO1xyXG4gIH07XHJcbn1cclxuXHJcbi8vIGNvbnN0IGxvZ2dlck1pZGRsZXdhcmUgPSAoeyBkaXNwYXRjaCwgZ2V0U3RhdGUgfSkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcclxuLy8gICBjb25zb2xlLmxvZyhhY3Rpb24pO1xyXG4vLyAgIHJldHVybiBuZXh0KGFjdGlvbik7XHJcbi8vIH07XHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZTogTWFrZVN0b3JlPFJvb3RTdGF0ZT4gPSAoIGNvbnRleHQ6IENvbnRleHQgKSA9PiB7XHJcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlLCAvKiBsb2dnZXJNaWRkbGV3YXJlICovXTtcclxuICBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpO1xyXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xyXG4gIChzdG9yZSBhcyBTYWdhU3RvcmUpLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuICAvLyAoIHN0b3JlIGFzIFNhZ2FTdG9yZSApLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge1xyXG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==