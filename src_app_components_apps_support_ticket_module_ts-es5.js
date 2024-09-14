(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_components_apps_support_ticket_module_ts"], {
    /***/
    59353:
    /*!******************************************************************!*\
      !*** ./src/app/components/apps/support/ticket-routing.module.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TicketRoutingModule": function TicketRoutingModule() {
          return (
            /* binding */
            _TicketRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ticket_ticket_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ticket/ticket.component */
      52722);
      /* harmony import */


      var _view_ticket_view_ticket_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./view_ticket/view_ticket.component */
      45346);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        children: [{
          path: 'create_ticket',
          component: _ticket_ticket_component__WEBPACK_IMPORTED_MODULE_0__.TicketComponent
        }, {
          path: 'view_ticket',
          component: _view_ticket_view_ticket_component__WEBPACK_IMPORTED_MODULE_1__.ViewTicketComponent
        }]
      }];

      var _TicketRoutingModule = /*#__PURE__*/_createClass(function _TicketRoutingModule() {
        _classCallCheck(this, _TicketRoutingModule);
      });

      _TicketRoutingModule.ɵfac = function TicketRoutingModule_Factory(t) {
        return new (t || _TicketRoutingModule)();
      };

      _TicketRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _TicketRoutingModule
      });
      _TicketRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_TicketRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    82801:
    /*!**********************************************************!*\
      !*** ./src/app/components/apps/support/ticket.module.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TicketModule": function TicketModule() {
          return (
            /* binding */
            _TicketModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../shared/shared.module */
      44466);
      /* harmony import */


      var _ticket_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ticket-routing.module */
      59353);
      /* harmony import */


      var _ticket_ticket_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ticket/ticket.component */
      52722);
      /* harmony import */


      var _view_ticket_view_ticket_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./view_ticket/view_ticket.component */
      45346);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _TicketModule = /*#__PURE__*/_createClass(function _TicketModule() {
        _classCallCheck(this, _TicketModule);
      });

      _TicketModule.ɵfac = function TicketModule_Factory(t) {
        return new (t || _TicketModule)();
      };

      _TicketModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _TicketModule
      });
      _TicketModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _ticket_routing_module__WEBPACK_IMPORTED_MODULE_1__.TicketRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_TicketModule, {
          declarations: [_ticket_ticket_component__WEBPACK_IMPORTED_MODULE_2__.TicketComponent, _view_ticket_view_ticket_component__WEBPACK_IMPORTED_MODULE_3__.ViewTicketComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _ticket_routing_module__WEBPACK_IMPORTED_MODULE_1__.TicketRoutingModule]
        });
      })();
      /***/

    },

    /***/
    52722:
    /*!********************************************************************!*\
      !*** ./src/app/components/apps/support/ticket/ticket.component.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TicketComponent": function TicketComponent() {
          return (
            /* binding */
            _TicketComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../shared/components/breadcrumb/breadcrumb.component */
      41299);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      var _c0 = function _c0() {
        return ["Ticket "];
      };

      var _TicketComponent = /*#__PURE__*/function () {
        function _TicketComponent() {
          _classCallCheck(this, _TicketComponent);
        }

        return _createClass(_TicketComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
      }();

      _TicketComponent.ɵfac = function TicketComponent_Factory(t) {
        return new (t || _TicketComponent)();
      };

      _TicketComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _TicketComponent,
        selectors: [["app-ticket"]],
        decls: 32,
        vars: 4,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-body"], [1, "form", "theme-form"], [1, "col"], [1, "form-group"], [1, "form-control", "digits"], ["id", "exampleFormControlTextarea4", "rows", "3", 1, "form-control"], [1, "form-group", "mb-0"], ["href", "#", 1, "btn", "mr-3", 2, "background-color", "#f7b018"]],
        template: function TicketComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-breadcrumb", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Priority");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "select", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Low");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Medium");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "High");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Urgent");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Message");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "textarea", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "New Ticket")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0))("active_item", "New Ticket");
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aWNrZXQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    45346:
    /*!******************************************************************************!*\
      !*** ./src/app/components/apps/support/view_ticket/view_ticket.component.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ViewTicketComponent": function ViewTicketComponent() {
          return (
            /* binding */
            _ViewTicketComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../shared/components/breadcrumb/breadcrumb.component */
      41299);

      var _c0 = function _c0() {
        return ["View Ticket"];
      };

      var _ViewTicketComponent = /*#__PURE__*/function () {
        function _ViewTicketComponent() {
          _classCallCheck(this, _ViewTicketComponent);
        }

        return _createClass(_ViewTicketComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
      }();

      _ViewTicketComponent.ɵfac = function ViewTicketComponent_Factory(t) {
        return new (t || _ViewTicketComponent)();
      };

      _ViewTicketComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _ViewTicketComponent,
        selectors: [["app-view-ticket"]],
        decls: 28,
        vars: 4,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-body"], ["id", "patchOrderTable", 1, "table", "table-bordered"], ["href", "#", 1, "btn", "btn-primary"]],
        template: function ViewTicketComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-breadcrumb", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "table", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Priority");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Hight");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Pending");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "View");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "View Ticket")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0))("active_item", "View Ticket");
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3X3RpY2tldC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_components_apps_support_ticket_module_ts-es5.js.map