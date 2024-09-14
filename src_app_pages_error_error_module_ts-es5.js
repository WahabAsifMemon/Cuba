(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_pages_error_error_module_ts"], {
    /***/
    4727:
    /*!*****************************************************!*\
      !*** ./src/app/pages/error/error-routing.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ErrorRoutingModule": function ErrorRoutingModule() {
          return (
            /* binding */
            _ErrorRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _error400_error400_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./error400/error400.component */
      21184);
      /* harmony import */


      var _error401_error401_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./error401/error401.component */
      69136);
      /* harmony import */


      var _error403_error403_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./error403/error403.component */
      41172);
      /* harmony import */


      var _error404_error404_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./error404/error404.component */
      1202);
      /* harmony import */


      var _error500_error500_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./error500/error500.component */
      79836);
      /* harmony import */


      var _error503_error503_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./error503/error503.component */
      85820);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        children: [{
          path: 'error-400',
          component: _error400_error400_component__WEBPACK_IMPORTED_MODULE_0__.Error400Component
        }, {
          path: 'error-401',
          component: _error401_error401_component__WEBPACK_IMPORTED_MODULE_1__.Error401Component
        }, {
          path: 'error-403',
          component: _error403_error403_component__WEBPACK_IMPORTED_MODULE_2__.Error403Component
        }, {
          path: 'error-404',
          component: _error404_error404_component__WEBPACK_IMPORTED_MODULE_3__.Error404Component
        }, {
          path: 'error-500',
          component: _error500_error500_component__WEBPACK_IMPORTED_MODULE_4__.Error500Component
        }, {
          path: 'error-503',
          component: _error503_error503_component__WEBPACK_IMPORTED_MODULE_5__.Error503Component
        }]
      }];

      var _ErrorRoutingModule = /*#__PURE__*/_createClass(function _ErrorRoutingModule() {
        _classCallCheck(this, _ErrorRoutingModule);
      });

      _ErrorRoutingModule.ɵfac = function ErrorRoutingModule_Factory(t) {
        return new (t || _ErrorRoutingModule)();
      };

      _ErrorRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: _ErrorRoutingModule
      });
      _ErrorRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](_ErrorRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    5204:
    /*!*********************************************!*\
      !*** ./src/app/pages/error/error.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ErrorModule": function ErrorModule() {
          return (
            /* binding */
            _ErrorModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _error_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./error-routing.module */
      4727);
      /* harmony import */


      var _error400_error400_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./error400/error400.component */
      21184);
      /* harmony import */


      var _error401_error401_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./error401/error401.component */
      69136);
      /* harmony import */


      var _error403_error403_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./error403/error403.component */
      41172);
      /* harmony import */


      var _error404_error404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./error404/error404.component */
      1202);
      /* harmony import */


      var _error500_error500_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./error500/error500.component */
      79836);
      /* harmony import */


      var _error503_error503_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./error503/error503.component */
      85820);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ErrorModule = /*#__PURE__*/_createClass(function _ErrorModule() {
        _classCallCheck(this, _ErrorModule);
      });

      _ErrorModule.ɵfac = function ErrorModule_Factory(t) {
        return new (t || _ErrorModule)();
      };

      _ErrorModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: _ErrorModule
      });
      _ErrorModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _error_routing_module__WEBPACK_IMPORTED_MODULE_0__.ErrorRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](_ErrorModule, {
          declarations: [_error400_error400_component__WEBPACK_IMPORTED_MODULE_1__.Error400Component, _error401_error401_component__WEBPACK_IMPORTED_MODULE_2__.Error401Component, _error403_error403_component__WEBPACK_IMPORTED_MODULE_3__.Error403Component, _error404_error404_component__WEBPACK_IMPORTED_MODULE_4__.Error404Component, _error500_error500_component__WEBPACK_IMPORTED_MODULE_5__.Error500Component, _error503_error503_component__WEBPACK_IMPORTED_MODULE_6__.Error503Component],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _error_routing_module__WEBPACK_IMPORTED_MODULE_0__.ErrorRoutingModule]
        });
      })();
      /***/

    },

    /***/
    21184:
    /*!************************************************************!*\
      !*** ./src/app/pages/error/error400/error400.component.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Error400Component": function Error400Component() {
          return (
            /* binding */
            _Error400Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _Error400Component = /*#__PURE__*/function () {
        function _Error400Component() {
          _classCallCheck(this, _Error400Component);
        }

        return _createClass(_Error400Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
      }();

      _Error400Component.ɵfac = function Error400Component_Factory(t) {
        return new (t || _Error400Component)();
      };

      _Error400Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _Error400Component,
        selectors: [["app-error400"]],
        decls: 12,
        vars: 0,
        consts: [[1, "error-wrapper"], [1, "container"], ["src", "assets/images/other-images/sad.png", "alt", "", 1, "img-100"], [1, "error-heading"], [1, "headline", "font-info"], [1, "col-md-8", "offset-md-2"], [1, "sub-content"], ["routerLink", "", 1, "btn", "btn-info-gradien", "btn-lg"]],
        template: function Error400Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "400");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "BACK TO HOME PAGE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvcjQwMC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    69136:
    /*!************************************************************!*\
      !*** ./src/app/pages/error/error401/error401.component.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Error401Component": function Error401Component() {
          return (
            /* binding */
            _Error401Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _Error401Component = /*#__PURE__*/function () {
        function _Error401Component() {
          _classCallCheck(this, _Error401Component);
        }

        return _createClass(_Error401Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
      }();

      _Error401Component.ɵfac = function Error401Component_Factory(t) {
        return new (t || _Error401Component)();
      };

      _Error401Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _Error401Component,
        selectors: [["app-error401"]],
        decls: 12,
        vars: 0,
        consts: [[1, "error-wrapper"], [1, "container"], ["src", "assets/images/other-images/sad.png", "alt", "", 1, "img-100"], [1, "error-heading"], [1, "headline", "font-warning"], [1, "col-md-8", "offset-md-2"], [1, "sub-content"], ["routerLink", "", 1, "btn", "btn-warning-gradien", "btn-lg"]],
        template: function Error401Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "401");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "BACK TO HOME PAGE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvcjQwMS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    41172:
    /*!************************************************************!*\
      !*** ./src/app/pages/error/error403/error403.component.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Error403Component": function Error403Component() {
          return (
            /* binding */
            _Error403Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _Error403Component = /*#__PURE__*/function () {
        function _Error403Component() {
          _classCallCheck(this, _Error403Component);
        }

        return _createClass(_Error403Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
      }();

      _Error403Component.ɵfac = function Error403Component_Factory(t) {
        return new (t || _Error403Component)();
      };

      _Error403Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _Error403Component,
        selectors: [["app-error403"]],
        decls: 12,
        vars: 0,
        consts: [[1, "error-wrapper"], [1, "container"], ["src", "assets/images/other-images/sad.png", "alt", "", 1, "img-100"], [1, "error-heading"], [1, "headline", "font-success"], [1, "col-md-8", "offset-md-2"], [1, "sub-content"], ["routerLink", "", 1, "btn", "btn-success-gradien", "btn-lg"]],
        template: function Error403Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "403");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "BACK TO HOME PAGE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvcjQwMy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    1202:
    /*!************************************************************!*\
      !*** ./src/app/pages/error/error404/error404.component.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Error404Component": function Error404Component() {
          return (
            /* binding */
            _Error404Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _Error404Component = /*#__PURE__*/function () {
        function _Error404Component() {
          _classCallCheck(this, _Error404Component);
        }

        return _createClass(_Error404Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
      }();

      _Error404Component.ɵfac = function Error404Component_Factory(t) {
        return new (t || _Error404Component)();
      };

      _Error404Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _Error404Component,
        selectors: [["app-error404"]],
        decls: 12,
        vars: 0,
        consts: [[1, "error-wrapper"], [1, "container"], ["src", "assets/images/other-images/sad.png", "alt", "", 1, "img-100"], [1, "error-heading"], [1, "headline", "font-danger"], [1, "col-md-8", "offset-md-2"], [1, "sub-content"], ["routerLink", "", 1, "btn", "btn-danger-gradien", "btn-lg"]],
        template: function Error404Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "404");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "BACK TO HOME PAGE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvcjQwNC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    79836:
    /*!************************************************************!*\
      !*** ./src/app/pages/error/error500/error500.component.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Error500Component": function Error500Component() {
          return (
            /* binding */
            _Error500Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _Error500Component = /*#__PURE__*/function () {
        function _Error500Component() {
          _classCallCheck(this, _Error500Component);
        }

        return _createClass(_Error500Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
      }();

      _Error500Component.ɵfac = function Error500Component_Factory(t) {
        return new (t || _Error500Component)();
      };

      _Error500Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _Error500Component,
        selectors: [["app-error500"]],
        decls: 12,
        vars: 0,
        consts: [[1, "error-wrapper"], [1, "container"], ["src", "assets/images/other-images/sad.png", "alt", "", 1, "img-100"], [1, "error-heading"], [1, "headline", "font-primary"], [1, "col-md-8", "offset-md-2"], [1, "sub-content"], ["routerLink", "", 1, "btn", "btn-primary-gradien", "btn-lg"]],
        template: function Error500Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "500");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "BACK TO HOME PAGE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvcjUwMC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    85820:
    /*!************************************************************!*\
      !*** ./src/app/pages/error/error503/error503.component.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Error503Component": function Error503Component() {
          return (
            /* binding */
            _Error503Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _Error503Component = /*#__PURE__*/function () {
        function _Error503Component() {
          _classCallCheck(this, _Error503Component);
        }

        return _createClass(_Error503Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
      }();

      _Error503Component.ɵfac = function Error503Component_Factory(t) {
        return new (t || _Error503Component)();
      };

      _Error503Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _Error503Component,
        selectors: [["app-error503"]],
        decls: 12,
        vars: 0,
        consts: [[1, "error-wrapper"], [1, "container"], ["src", "assets/images/other-images/sad.png", "alt", "", 1, "img-100"], [1, "error-heading"], [1, "headline", "font-secondary"], [1, "col-md-8", "offset-md-2"], [1, "sub-content"], ["routerLink", "", 1, "btn", "btn-secondary-gradien", "btn-lg"]],
        template: function Error503Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "503");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "BACK TO HOME PAGE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvcjUwMy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_error_error_module_ts-es5.js.map