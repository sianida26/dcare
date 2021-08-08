(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_app_components_DeveloperRoutes_jsx"],{

/***/ "./resources/js/app/components/DeveloperRoutes.jsx":
/*!*********************************************************!*\
  !*** ./resources/js/app/components/DeveloperRoutes.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AdminRoutes)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _providers_AuthProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../providers/AuthProvider */ "./resources/js/app/providers/AuthProvider.jsx");
/* harmony import */ var _routes_developer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes/developer */ "./resources/js/app/routes/developer.js");
/* harmony import */ var _pages_NotFound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/NotFound */ "./resources/js/app/pages/NotFound.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

 // import AdminConfigProvider from '../providers/AdminConfigProvider'






function AdminRoutes() {
  var _useAuth = (0,_providers_AuthProvider__WEBPACK_IMPORTED_MODULE_1__.useAuth)(),
      auth = _useAuth.auth;

  return auth.role !== 'developer' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Redirect, {
    to: {
      pathname: "/login",
      state: {
        from: location
      }
    }
  }) :
  /*#__PURE__*/
  // <AdminConfigProvider>
  (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Switch, {
    children: [_routes_developer__WEBPACK_IMPORTED_MODULE_2__.default.map(function (route, i) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
        path: route.path,
        exact: !route.isNotExact,
        component: route.component
      }, i);
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Redirect, {
      path: "/login",
      to: "/"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_pages_NotFound__WEBPACK_IMPORTED_MODULE_3__.default, {})
    })]
  }) // </AdminConfigProvider>
  ;
}

/***/ }),

/***/ "./resources/js/app/pages/Logout.jsx":
/*!*******************************************!*\
  !*** ./resources/js/app/pages/Logout.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Logout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _providers_AuthProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../providers/AuthProvider */ "./resources/js/app/providers/AuthProvider.jsx");
/* harmony import */ var _utils_DB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/DB */ "./resources/js/app/utils/DB.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


 // import axios from '../utils/oooperator'



function Logout() {
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useHistory)();

  var _useAuth = (0,_providers_AuthProvider__WEBPACK_IMPORTED_MODULE_1__.useAuth)(),
      auth = _useAuth.auth,
      setAuthState = _useAuth.setAuthState,
      axios = _useAuth.axios;

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    axios({
      method: 'get',
      url: '/logout'
    });
    var authObject = {
      name: '',
      role: undefined,
      username: '',
      token: ''
    };
    setAuthState(authObject);
    _utils_DB__WEBPACK_IMPORTED_MODULE_2__.default.auth.put({
      key: 'auth_token',
      value: authObject.token
    });
    _utils_DB__WEBPACK_IMPORTED_MODULE_2__.default.auth.put({
      key: 'name',
      value: authObject.name
    });
    _utils_DB__WEBPACK_IMPORTED_MODULE_2__.default.auth.put({
      key: 'username',
      value: authObject.username
    });
    _utils_DB__WEBPACK_IMPORTED_MODULE_2__.default.auth.put({
      key: 'role',
      value: authObject.role
    });
    history.replace('/');
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {});
}

/***/ }),

/***/ "./resources/js/app/routes/developer.js":
/*!**********************************************!*\
  !*** ./resources/js/app/routes/developer.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pages_Logout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/Logout */ "./resources/js/app/pages/Logout.jsx");
/* harmony import */ var _pages_public_LandingPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/public/LandingPage */ "./resources/js/app/pages/public/LandingPage.jsx");


var routes = [{
  path: '/',
  component: _pages_public_LandingPage__WEBPACK_IMPORTED_MODULE_1__.default
}, {
  path: '/logout',
  component: _pages_Logout__WEBPACK_IMPORTED_MODULE_0__.default
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

/***/ })

}]);