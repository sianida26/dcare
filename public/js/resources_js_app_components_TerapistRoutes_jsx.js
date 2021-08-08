(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_app_components_TerapistRoutes_jsx"],{

/***/ "./resources/js/app/components/TerapistRoutes.jsx":
/*!********************************************************!*\
  !*** ./resources/js/app/components/TerapistRoutes.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AdminRoutes)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _providers_AuthProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../providers/AuthProvider */ "./resources/js/app/providers/AuthProvider.jsx");
/* harmony import */ var _routes_terapist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes/terapist */ "./resources/js/app/routes/terapist.js");
/* harmony import */ var _pages_NotFound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/NotFound */ "./resources/js/app/pages/NotFound.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

 // import AdminConfigProvider from '../providers/AdminConfigProvider'






function AdminRoutes() {
  var _useAuth = (0,_providers_AuthProvider__WEBPACK_IMPORTED_MODULE_1__.useAuth)(),
      auth = _useAuth.auth;

  return auth.role !== 'terapist' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Redirect, {
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
    children: [_routes_terapist__WEBPACK_IMPORTED_MODULE_2__.default.map(function (route, i) {
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

/***/ "./resources/js/app/pages/terapis/DashboardTerapis.jsx":
/*!*************************************************************!*\
  !*** ./resources/js/app/pages/terapis/DashboardTerapis.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DashboardTerapist)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_HeaderLanding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/HeaderLanding */ "./resources/js/app/components/HeaderLanding.jsx");
/* harmony import */ var _assets_images_qna_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/qna.png */ "./resources/js/app/assets/images/qna.png");
/* harmony import */ var _assets_images_event_terdekat_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/event_terdekat.png */ "./resources/js/app/assets/images/event_terdekat.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var DASHBOARD_MENUS = [{
  icon: 'calendar-check',
  caption: 'Agenda Konsultasi'
}, {
  icon: 'envelope-open',
  //todo ganti
  caption: 'Inbox'
}, {
  icon: 'card-text',
  caption: 'Kurikulum'
}, {
  icon: 'person',
  caption: 'Akun Saya' //todo hapus

}];
function DashboardTerapist() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "tw-w-full tw-flex tw-flex-col tw-relative",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_HeaderLanding__WEBPACK_IMPORTED_MODULE_1__.default, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("main", {
      className: "tw-pt-12 tw-px-4 md:tw-px-8 lg:tw-px-16 tw-flex tw-flex-col",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
        className: "tw-text-2xl md:tw-text-3xl tw-text-center md:tw-text-left tw-font-bold tw-text-primary tw-mt-12",
        children: "Beranda Terapis"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "tw-w-full tw-grid tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-5 tw-gap-5 tw-mt-8 tw-self-stretch tw-place-items-center",
        children: DASHBOARD_MENUS.map(function (x) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
            className: "tw-flex tw-flex-col tw-gap-2 tw-items-center tw-text-center tw-border-red-400 tw-h-36",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "tw-flex tw-items-center tw-justify-center tw-w-20 tw-h-20 tw-rounded-full",
              style: {
                boxShadow: '0px 0px 12px 2px rgba(0, 0, 0, 0.25)'
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                className: "bi bi-".concat(x.icon, " tw-text-4xl")
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "tw-font-semibold",
              children: x.caption
            })]
          });
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
        src: _assets_images_qna_png__WEBPACK_IMPORTED_MODULE_2__.default,
        style: {
          height: '24rem',
          objectFit: 'contain',
          alignSelf: 'start'
        }
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
      src: _assets_images_event_terdekat_png__WEBPACK_IMPORTED_MODULE_3__.default,
      className: "tw-absolute tw-bottom-0 tw-h-48 tw-object-contain tw-right-0"
    })]
  });
}

/***/ }),

/***/ "./resources/js/app/routes/terapist.js":
/*!*********************************************!*\
  !*** ./resources/js/app/routes/terapist.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pages_Logout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/Logout */ "./resources/js/app/pages/Logout.jsx");
/* harmony import */ var _pages_public_LandingPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/public/LandingPage */ "./resources/js/app/pages/public/LandingPage.jsx");
/* harmony import */ var _pages_terapis_DashboardTerapis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/terapis/DashboardTerapis */ "./resources/js/app/pages/terapis/DashboardTerapis.jsx");



var routes = [{
  path: '/',
  component: _pages_public_LandingPage__WEBPACK_IMPORTED_MODULE_1__.default
}, {
  path: '/dashboard',
  component: _pages_terapis_DashboardTerapis__WEBPACK_IMPORTED_MODULE_2__.default
}, {
  path: '/logout',
  component: _pages_Logout__WEBPACK_IMPORTED_MODULE_0__.default
}, {
  path: '/terapis/daftar',
  component: RegisterTerapist
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

/***/ }),

/***/ "./resources/js/app/assets/images/event_terdekat.png":
/*!***********************************************************!*\
  !*** ./resources/js/app/assets/images/event_terdekat.png ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/event_terdekat.png?9b105bd413eb85800fcb834fe0accb9e");

/***/ }),

/***/ "./resources/js/app/assets/images/qna.png":
/*!************************************************!*\
  !*** ./resources/js/app/assets/images/qna.png ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/qna.png?ed4d7528c1e8e7efe2aa3437cef6ac15");

/***/ })

}]);