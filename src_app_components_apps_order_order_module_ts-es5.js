(function () {
  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_components_apps_order_order_module_ts"], {
    /***/
    87362:
    /*!*******************************************************************************************!*\
      !*** ./src/app/components/apps/order/new_digitizing_order/create-digitizing.component.ts ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CreateDigitizingComponent": function CreateDigitizingComponent() {
          return (
            /* binding */
            _CreateDigitizingComponent
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
        return ["Apps", "Digitizing "];
      };

      var _CreateDigitizingComponent = /*#__PURE__*/function () {
        function _CreateDigitizingComponent() {
          _classCallCheck(this, _CreateDigitizingComponent);
        }

        return _createClass(_CreateDigitizingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
      }();

      _CreateDigitizingComponent.ɵfac = function CreateDigitizingComponent_Factory(t) {
        return new (t || _CreateDigitizingComponent)();
      };

      _CreateDigitizingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _CreateDigitizingComponent,
        selectors: [["app-create-digitizing"]],
        decls: 92,
        vars: 4,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-body"], [1, "form", "theme-form"], [1, "col"], [1, "form-group"], ["type", "text", "placeholder", "Project name *", 1, "form-control"], ["type", "text", "placeholder", "Name client or company name", 1, "form-control"], [1, "col-sm-4"], ["type", "text", "placeholder", "Enter project Rate", 1, "form-control"], [1, "form-control", "digits"], ["type", "text", "data-language", "en", 1, "datepicker-here", "form-control"], ["id", "exampleFormControlTextarea4", "rows", "3", 1, "form-control"], ["id", "singleFileUpload", 1, "dropzone", "digits"], [1, "dz-message", "needsclick"], [1, "icon-cloud-up"], [1, "form-group", "mb-0"], ["href", "#", 1, "btn", "btn-success", "mr-3"], ["href", "#", 1, "btn", "btn-danger"]],
        template: function CreateDigitizingComponent_Template(rf, ctx) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Project Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Client name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Project Rate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Project Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "select", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Hourly");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Fix price");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Priority");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "select", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Low");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Medium");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "High");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Urgent");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Project Size");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "select", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Small");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Medium");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Big");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Starting date");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Ending date");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Enter some Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "textarea", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Upload project file");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "form", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Drop files here or click to upload.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Cancel");

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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "New Digitizing Order")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0))("active_item", "New Order");
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtZGlnaXRpemluZy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    14868:
    /*!*********************************************************************************!*\
      !*** ./src/app/components/apps/order/new_patch_order/create-patch.component.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CreatePatchComponent": function CreatePatchComponent() {
          return (
            /* binding */
            _CreatePatchComponent
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
        return ["Apps", "Patch"];
      };

      var _CreatePatchComponent = /*#__PURE__*/function () {
        function _CreatePatchComponent() {
          _classCallCheck(this, _CreatePatchComponent);
        }

        return _createClass(_CreatePatchComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
      }();

      _CreatePatchComponent.ɵfac = function CreatePatchComponent_Factory(t) {
        return new (t || _CreatePatchComponent)();
      };

      _CreatePatchComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _CreatePatchComponent,
        selectors: [["app-create-patch"]],
        decls: 92,
        vars: 4,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-body"], [1, "form", "theme-form"], [1, "col"], [1, "form-group"], ["type", "text", "placeholder", "Project name *", 1, "form-control"], ["type", "text", "placeholder", "Name client or company name", 1, "form-control"], [1, "col-sm-4"], ["type", "text", "placeholder", "Enter project Rate", 1, "form-control"], [1, "form-control", "digits"], ["type", "text", "data-language", "en", 1, "datepicker-here", "form-control"], ["id", "exampleFormControlTextarea4", "rows", "3", 1, "form-control"], ["id", "singleFileUpload", 1, "dropzone", "digits"], [1, "dz-message", "needsclick"], [1, "icon-cloud-up"], [1, "form-group", "mb-0"], ["href", "#", 1, "btn", "btn-success", "mr-3"], ["href", "#", 1, "btn", "btn-danger"]],
        template: function CreatePatchComponent_Template(rf, ctx) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Project Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Client name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Project Rate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Project Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "select", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Hourly");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Fix price");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Priority");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "select", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Low");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Medium");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "High");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Urgent");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Project Size");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "select", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Small");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Medium");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Big");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Starting date");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Ending date");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Enter some Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "textarea", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Upload project file");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "form", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Drop files here or click to upload.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Cancel");

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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "New Patch Order")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0))("active_item", "New Patch Order");
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtcGF0Y2guY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    13634:
    /*!***********************************************************************************!*\
      !*** ./src/app/components/apps/order/new_vendor_order/create-vendor.component.ts ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CreateVendorComponent": function CreateVendorComponent() {
          return (
            /* binding */
            _CreateVendorComponent
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
        return ["Apps", "Vendor"];
      };

      var _CreateVendorComponent = /*#__PURE__*/function () {
        function _CreateVendorComponent() {
          _classCallCheck(this, _CreateVendorComponent);
        }

        return _createClass(_CreateVendorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
      }();

      _CreateVendorComponent.ɵfac = function CreateVendorComponent_Factory(t) {
        return new (t || _CreateVendorComponent)();
      };

      _CreateVendorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _CreateVendorComponent,
        selectors: [["app-create-vendor"]],
        decls: 92,
        vars: 4,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-body"], [1, "form", "theme-form"], [1, "col"], [1, "form-group"], ["type", "text", "placeholder", "Project name *", 1, "form-control"], ["type", "text", "placeholder", "Name client or company name", 1, "form-control"], [1, "col-sm-4"], ["type", "text", "placeholder", "Enter project Rate", 1, "form-control"], [1, "form-control", "digits"], ["type", "text", "data-language", "en", 1, "datepicker-here", "form-control"], ["id", "exampleFormControlTextarea4", "rows", "3", 1, "form-control"], ["id", "singleFileUpload", 1, "dropzone", "digits"], [1, "dz-message", "needsclick"], [1, "icon-cloud-up"], [1, "form-group", "mb-0"], ["href", "#", 1, "btn", "btn-success", "mr-3"], ["href", "#", 1, "btn", "btn-danger"]],
        template: function CreateVendorComponent_Template(rf, ctx) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Project Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Client name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Project Rate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Project Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "select", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Hourly");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Fix price");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Priority");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "select", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Low");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Medium");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "High");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Urgent");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Project Size");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "select", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Small");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Medium");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Big");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Starting date");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Ending date");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Enter some Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "textarea", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Upload project file");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "form", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Drop files here or click to upload.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Cancel");

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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "New Vendor Order")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0))("active_item", "New Vendor Order");
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtdmVuZG9yLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    2093:
    /*!***************************************************************!*\
      !*** ./src/app/components/apps/order/order-routing.module.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProjectRoutingModule": function ProjectRoutingModule() {
          return (
            /* binding */
            _ProjectRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _new_digitizing_order_create_digitizing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./new_digitizing_order/create-digitizing.component */
      87362);
      /* harmony import */


      var _new_vendor_order_create_vendor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./new_vendor_order/create-vendor.component */
      13634);
      /* harmony import */


      var _new_patch_order_create_patch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./new_patch_order/create-patch.component */
      14868);
      /* harmony import */


      var _view_digitizing_order_view_digitizing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./view_digitizing_order/view-digitizing.component */
      27413);
      /* harmony import */


      var _view_patch_order_view_patch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./view_patch_order/view-patch.component */
      43960);
      /* harmony import */


      var _view_vendor_order_view_vendor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./view_vendor_order/view-vendor.component */
      97405);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        children: [{
          path: 'create_digitizing_order',
          component: _new_digitizing_order_create_digitizing_component__WEBPACK_IMPORTED_MODULE_0__.CreateDigitizingComponent
        }, {
          path: 'create_vendor_order',
          component: _new_vendor_order_create_vendor_component__WEBPACK_IMPORTED_MODULE_1__.CreateVendorComponent
        }, {
          path: 'create_patch_order',
          component: _new_patch_order_create_patch_component__WEBPACK_IMPORTED_MODULE_2__.CreatePatchComponent
        }, {
          path: 'view_digitizing_order',
          component: _view_digitizing_order_view_digitizing_component__WEBPACK_IMPORTED_MODULE_3__.ViewDigitizingComponent
        }, {
          path: 'view_vendor_order',
          component: _view_vendor_order_view_vendor_component__WEBPACK_IMPORTED_MODULE_5__.ViewVendorComponent
        }, {
          path: 'view_patch_order',
          component: _view_patch_order_view_patch_component__WEBPACK_IMPORTED_MODULE_4__.ViewPatchComponent
        }]
      }];

      var _ProjectRoutingModule = /*#__PURE__*/_createClass(function _ProjectRoutingModule() {
        _classCallCheck(this, _ProjectRoutingModule);
      });

      _ProjectRoutingModule.ɵfac = function ProjectRoutingModule_Factory(t) {
        return new (t || _ProjectRoutingModule)();
      };

      _ProjectRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: _ProjectRoutingModule
      });
      _ProjectRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](_ProjectRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    53383:
    /*!*******************************************************!*\
      !*** ./src/app/components/apps/order/order.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProjectModule": function ProjectModule() {
          return (
            /* binding */
            _ProjectModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../shared/shared.module */
      44466);
      /* harmony import */


      var _order_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./order-routing.module */
      2093);
      /* harmony import */


      var _new_digitizing_order_create_digitizing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./new_digitizing_order/create-digitizing.component */
      87362);
      /* harmony import */


      var _new_vendor_order_create_vendor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./new_vendor_order/create-vendor.component */
      13634);
      /* harmony import */


      var _new_patch_order_create_patch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./new_patch_order/create-patch.component */
      14868);
      /* harmony import */


      var _view_digitizing_order_view_digitizing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./view_digitizing_order/view-digitizing.component */
      27413);
      /* harmony import */


      var _view_patch_order_view_patch_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./view_patch_order/view-patch.component */
      43960);
      /* harmony import */


      var _view_vendor_order_view_vendor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./view_vendor_order/view-vendor.component */
      97405);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ProjectModule = /*#__PURE__*/_createClass(function _ProjectModule() {
        _classCallCheck(this, _ProjectModule);
      });

      _ProjectModule.ɵfac = function ProjectModule_Factory(t) {
        return new (t || _ProjectModule)();
      };

      _ProjectModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: _ProjectModule
      });
      _ProjectModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _order_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProjectRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](_ProjectModule, {
          declarations: [_new_digitizing_order_create_digitizing_component__WEBPACK_IMPORTED_MODULE_2__.CreateDigitizingComponent, _new_vendor_order_create_vendor_component__WEBPACK_IMPORTED_MODULE_3__.CreateVendorComponent, _new_patch_order_create_patch_component__WEBPACK_IMPORTED_MODULE_4__.CreatePatchComponent, _view_patch_order_view_patch_component__WEBPACK_IMPORTED_MODULE_6__.ViewPatchComponent, _view_vendor_order_view_vendor_component__WEBPACK_IMPORTED_MODULE_7__.ViewVendorComponent, _view_digitizing_order_view_digitizing_component__WEBPACK_IMPORTED_MODULE_5__.ViewDigitizingComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _order_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProjectRoutingModule]
        });
      })();
      /***/

    },

    /***/
    27413:
    /*!******************************************************************************************!*\
      !*** ./src/app/components/apps/order/view_digitizing_order/view-digitizing.component.ts ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ViewDigitizingComponent": function ViewDigitizingComponent() {
          return (
            /* binding */
            _ViewDigitizingComponent
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
        return ["View Digitizing"];
      };

      var _ViewDigitizingComponent = /*#__PURE__*/function () {
        function _ViewDigitizingComponent() {
          _classCallCheck(this, _ViewDigitizingComponent);
        }

        return _createClass(_ViewDigitizingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
      }();

      _ViewDigitizingComponent.ɵfac = function ViewDigitizingComponent_Factory(t) {
        return new (t || _ViewDigitizingComponent)();
      };

      _ViewDigitizingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _ViewDigitizingComponent,
        selectors: [["app-view-digitizing"]],
        decls: 56,
        vars: 4,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-body"], ["id", "patchOrderTable", 1, "table", "table-bordered"], ["href", "#", 1, "btn", "btn-primary"]],
        template: function ViewDigitizingComponent_Template(rf, ctx) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "John");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Doe");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "john@example.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "View");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Jane");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Smith");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "jane@example.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "View");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Michael");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Jordan");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "mjordan@example.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "View");

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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "View Digitizing Order")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0))("active_item", "View Digitizing Order");
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWRpZ2l0aXppbmcuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    43960:
    /*!********************************************************************************!*\
      !*** ./src/app/components/apps/order/view_patch_order/view-patch.component.ts ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ViewPatchComponent": function ViewPatchComponent() {
          return (
            /* binding */
            _ViewPatchComponent
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
        return ["View Patch"];
      };

      var _ViewPatchComponent = /*#__PURE__*/function () {
        function _ViewPatchComponent() {
          _classCallCheck(this, _ViewPatchComponent);
        }

        return _createClass(_ViewPatchComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
      }();

      _ViewPatchComponent.ɵfac = function ViewPatchComponent_Factory(t) {
        return new (t || _ViewPatchComponent)();
      };

      _ViewPatchComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _ViewPatchComponent,
        selectors: [["app-view-patch"]],
        decls: 56,
        vars: 4,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-body"], ["id", "patchOrderTable", 1, "table", "table-bordered"], ["href", "#", 1, "btn", "btn-primary"]],
        template: function ViewPatchComponent_Template(rf, ctx) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "John");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Doe");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "john@example.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "View");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Jane");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Smith");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "jane@example.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "View");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Michael");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Jordan");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "mjordan@example.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "View");

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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "View Patch Order")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0))("active_item", "View Patch Order");
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXBhdGNoLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    97405:
    /*!**********************************************************************************!*\
      !*** ./src/app/components/apps/order/view_vendor_order/view-vendor.component.ts ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ViewVendorComponent": function ViewVendorComponent() {
          return (
            /* binding */
            _ViewVendorComponent
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
        return ["View Vendor"];
      };

      var _ViewVendorComponent = /*#__PURE__*/function () {
        function _ViewVendorComponent() {
          _classCallCheck(this, _ViewVendorComponent);
        }

        return _createClass(_ViewVendorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
      }();

      _ViewVendorComponent.ɵfac = function ViewVendorComponent_Factory(t) {
        return new (t || _ViewVendorComponent)();
      };

      _ViewVendorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _ViewVendorComponent,
        selectors: [["app-view-vendor"]],
        decls: 56,
        vars: 4,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-body"], ["id", "patchOrderTable", 1, "table", "table-bordered"], ["href", "#", 1, "btn", "btn-primary"]],
        template: function ViewVendorComponent_Template(rf, ctx) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "John");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Doe");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "john@example.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "View");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Jane");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Smith");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "jane@example.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "View");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Michael");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Jordan");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "mjordan@example.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "View");

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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "View Vendor Order")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0))("active_item", "View Patch Order");
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXZlbmRvci5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_components_apps_order_order_module_ts-es5.js.map