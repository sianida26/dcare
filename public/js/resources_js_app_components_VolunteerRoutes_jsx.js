(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_app_components_VolunteerRoutes_jsx"],{

/***/ "./resources/js/app/components/VolunteerRoutes.jsx":
/*!*********************************************************!*\
  !*** ./resources/js/app/components/VolunteerRoutes.jsx ***!
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
/* harmony import */ var _routes_volunteer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes/volunteer */ "./resources/js/app/routes/volunteer.js");
/* harmony import */ var _pages_NotFound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/NotFound */ "./resources/js/app/pages/NotFound.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

 // import AdminConfigProvider from '../providers/AdminConfigProvider'






function AdminRoutes() {
  var _useAuth = (0,_providers_AuthProvider__WEBPACK_IMPORTED_MODULE_1__.useAuth)(),
      auth = _useAuth.auth;

  return auth.role !== 'volunteer' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Redirect, {
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
    children: [_routes_volunteer__WEBPACK_IMPORTED_MODULE_2__.default.map(function (route, i) {
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

/***/ "./resources/js/app/pages/volunteer/DashboardVolunteer.jsx":
/*!*****************************************************************!*\
  !*** ./resources/js/app/pages/volunteer/DashboardVolunteer.jsx ***!
  \*****************************************************************/
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
    className: "w-full flex flex-col relative",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_HeaderLanding__WEBPACK_IMPORTED_MODULE_1__.default, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("main", {
      className: "pt-12 px-4 md:px-8 lg:px-16 flex flex-col",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
        className: "text-2xl md:text-3xl text-center md:text-left font-bold text-primary mt-12",
        children: "Beranda Volunteer"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-8 self-stretch place-items-center",
        children: DASHBOARD_MENUS.map(function (x) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
            className: "flex flex-col gap-2 items-center text-center border-red-400 h-36",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "flex items-center justify-center w-20 h-20 rounded-full",
              style: {
                boxShadow: '0px 0px 12px 2px rgba(0, 0, 0, 0.25)'
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                className: "bi bi-".concat(x.icon, " text-4xl")
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "font-semibold",
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
      className: "absolute bottom-0 h-48 object-contain right-0"
    })]
  });
}

/***/ }),

/***/ "./resources/js/app/routes/volunteer.js":
/*!**********************************************!*\
  !*** ./resources/js/app/routes/volunteer.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pages_public_LandingPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/public/LandingPage */ "./resources/js/app/pages/public/LandingPage.jsx");
/* harmony import */ var _pages_Logout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/Logout */ "./resources/js/app/pages/Logout.jsx");
/* harmony import */ var _pages_volunteer_DashboardVolunteer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/volunteer/DashboardVolunteer */ "./resources/js/app/pages/volunteer/DashboardVolunteer.jsx");



var routes = [{
  path: '/',
  component: _pages_public_LandingPage__WEBPACK_IMPORTED_MODULE_0__.default
}, {
  path: '/logout',
  component: _pages_Logout__WEBPACK_IMPORTED_MODULE_1__.default
}, {
  path: '/dashboard',
  component: _pages_volunteer_DashboardVolunteer__WEBPACK_IMPORTED_MODULE_2__.default
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