(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\Karza\Theme\materialpro-angular\package\karza frontEnd\src\main.ts */"zUnb");


/***/ }),

/***/ "0e3Z":
/*!*****************************************************************************!*\
  !*** ./src/app/layouts/full/vertical-sidebar/vertical-sidebar.component.ts ***!
  \*****************************************************************************/
/*! exports provided: VerticalAppSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalAppSidebarComponent", function() { return VerticalAppSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/menu-items/menu-items */ "ADQ8");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _shared_accordion_accordion_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/accordion/accordion.directive */ "C0NU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_accordion_accordionlink_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/accordion/accordionlink.directive */ "JNRg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_accordion_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/accordion/accordionanchor.directive */ "xXHC");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");

















function VerticalAppSidebarComponent_mat_list_item_26_a_1_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const badge_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("label label-", badge_r10.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](badge_r10.value);
} }
const _c0 = function (a1) { return ["/", a1]; };
function VerticalAppSidebarComponent_mat_list_item_26_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, VerticalAppSidebarComponent_mat_list_item_26_a_1_span_7_Template, 2, 4, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuitem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, menuitem_r2.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuitem_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, menuitem_r2.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", menuitem_r2.badge);
} }
function VerticalAppSidebarComponent_mat_list_item_26_a_2_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const badge_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("label label-", badge_r13.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](badge_r13.value);
} }
function VerticalAppSidebarComponent_mat_list_item_26_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, VerticalAppSidebarComponent_mat_list_item_26_a_2_span_7_Template, 2, 4, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuitem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", menuitem_r2.state, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuitem_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, menuitem_r2.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", menuitem_r2.badge);
} }
function VerticalAppSidebarComponent_mat_list_item_26_a_3_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const badge_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("label label-", badge_r16.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](badge_r16.value);
} }
function VerticalAppSidebarComponent_mat_list_item_26_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, VerticalAppSidebarComponent_mat_list_item_26_a_3_span_7_Template, 2, 4, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuitem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", menuitem_r2.state, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuitem_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, menuitem_r2.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", menuitem_r2.badge);
} }
function VerticalAppSidebarComponent_mat_list_item_26_a_4_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const badge_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("label label-", badge_r19.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](badge_r19.value);
} }
function VerticalAppSidebarComponent_mat_list_item_26_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, VerticalAppSidebarComponent_mat_list_item_26_a_4_span_7_Template, 2, 4, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "keyboard_arrow_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuitem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuitem_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, menuitem_r2.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", menuitem_r2.badge);
} }
const _c1 = function (a1, a2) { return ["/", a1, a2]; };
function VerticalAppSidebarComponent_mat_list_item_26_mat_nav_list_5_mat_list_item_1_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerticalAppSidebarComponent_mat_list_item_26_mat_nav_list_5_mat_list_item_1_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const i_r25 = ctx_r29.childitem; const j_r24 = ctx_r29.index; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return (ctx_r27.itemSelect[i_r25] = j_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const childitem_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const menuitem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c1, menuitem_r2.state, childitem_r23.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, childitem_r23.name));
} }
function VerticalAppSidebarComponent_mat_list_item_26_mat_nav_list_5_mat_list_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VerticalAppSidebarComponent_mat_list_item_26_mat_nav_list_5_mat_list_item_1_a_1_Template, 3, 7, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const childitem_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", childitem_r23.type === "link");
} }
function VerticalAppSidebarComponent_mat_list_item_26_mat_nav_list_5_mat_list_item_2_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerticalAppSidebarComponent_mat_list_item_26_mat_nav_list_5_mat_list_item_2_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const i_r34 = ctx_r39.childitem; const j_r33 = ctx_r39.index; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return (ctx_r37.itemSelect[i_r34] = j_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "keyboard_arrow_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const j_r33 = ctx_r40.index;
    const i_r34 = ctx_r40.childitem;
    const childitem_r32 = ctx_r40.$implicit;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", j_r33 == ctx_r35.itemSelect[i_r34] ? "selected" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, childitem_r32.name));
} }
const _c2 = function (a1, a2, a3) { return ["/", a1, a2, a3]; };
function VerticalAppSidebarComponent_mat_list_item_26_mat_nav_list_5_mat_list_item_2_mat_nav_list_2_mat_list_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const child_r42 = ctx.$implicit;
    const childitem_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const menuitem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c2, menuitem_r2.state, childitem_r32.state, child_r42.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, child_r42.name));
} }
function VerticalAppSidebarComponent_mat_list_item_26_mat_nav_list_5_mat_list_item_2_mat_nav_list_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VerticalAppSidebarComponent_mat_list_item_26_mat_nav_list_5_mat_list_item_2_mat_nav_list_2_mat_list_item_1_Template, 4, 8, "mat-list-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const childitem_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", childitem_r32.subchildren);
} }
function VerticalAppSidebarComponent_mat_list_item_26_mat_nav_list_5_mat_list_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VerticalAppSidebarComponent_mat_list_item_26_mat_nav_list_5_mat_list_item_2_a_1_Template, 7, 4, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VerticalAppSidebarComponent_mat_list_item_26_mat_nav_list_5_mat_list_item_2_mat_nav_list_2_Template, 2, 1, "mat-nav-list", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const childitem_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", childitem_r32.type === "subchild");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", childitem_r32.type === "subchild");
} }
function VerticalAppSidebarComponent_mat_list_item_26_mat_nav_list_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VerticalAppSidebarComponent_mat_list_item_26_mat_nav_list_5_mat_list_item_1_Template, 2, 1, "mat-list-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VerticalAppSidebarComponent_mat_list_item_26_mat_nav_list_5_mat_list_item_2_Template, 3, 2, "mat-list-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuitem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", menuitem_r2.children);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", menuitem_r2.children);
} }
function VerticalAppSidebarComponent_mat_list_item_26_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuitem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, menuitem_r2.name));
} }
function VerticalAppSidebarComponent_mat_list_item_26_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerticalAppSidebarComponent_mat_list_item_26_Template_mat_list_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.scrollToTop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VerticalAppSidebarComponent_mat_list_item_26_a_1_Template, 8, 8, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VerticalAppSidebarComponent_mat_list_item_26_a_2_Template, 8, 6, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VerticalAppSidebarComponent_mat_list_item_26_a_3_Template, 8, 6, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VerticalAppSidebarComponent_mat_list_item_26_a_4_Template, 10, 5, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VerticalAppSidebarComponent_mat_list_item_26_mat_nav_list_5_Template, 3, 2, "mat-nav-list", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, VerticalAppSidebarComponent_mat_list_item_26_div_6_Template, 4, 3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuitem_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("group", menuitem_r2.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuitem_r2.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuitem_r2.type === "extLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuitem_r2.type === "extTabLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuitem_r2.type === "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuitem_r2.type === "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuitem_r2.type === "saperator");
} }
class VerticalAppSidebarComponent {
    constructor(changeDetectorRef, media, menuItems) {
        this.menuItems = menuItems;
        this.config = {};
        this.status = true;
        this.itemSelect = [];
        this.parentIndex = 0;
        this.childIndex = 0;
        this.mobileQuery = media.matchMedia('(min-width: 768px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        // tslint:disable-next-line: deprecation
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    setClickedRow(i, j) {
        this.parentIndex = i;
        this.childIndex = j;
    }
    subclickEvent() {
        this.status = true;
    }
    scrollToTop() {
        var _a;
        (_a = document.querySelector('.page-wrapper')) === null || _a === void 0 ? void 0 : _a.scroll({
            top: 0,
            left: 0
        });
    }
    ngOnDestroy() {
        // tslint:disable-next-line: deprecation
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
VerticalAppSidebarComponent.ɵfac = function VerticalAppSidebarComponent_Factory(t) { return new (t || VerticalAppSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__["MenuItems"])); };
VerticalAppSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VerticalAppSidebarComponent, selectors: [["app-vertical-sidebar"]], decls: 27, vars: 2, consts: [[1, "user-profile", 2, "background", "url(assets/images/background/user-info.jpg) no-repeat"], [1, "profile-img"], ["src", "assets/images/users/profile.png", "alt", "user"], [1, "profile-text"], [1, "", 3, "matMenuTriggerFor"], [1, "ti-angle-down", "font-12", "m-l-5"], [1, "mymegamenu"], ["sdprofile", "matMenu"], ["mat-menu-item", ""], ["appAccordion", ""], ["appAccordionLink", "", "routerLinkActive", "selected", 3, "group", "click", 4, "ngFor", "ngForOf"], ["appAccordionLink", "", "routerLinkActive", "selected", 3, "group", "click"], ["class", "", "appAccordionToggle", "", 3, "routerLink", 4, "ngIf"], ["class", "", "appAccordionToggle", "", 3, "href", 4, "ngIf"], ["class", "", "appAccordionToggle", "", "target", "_blank", 3, "href", 4, "ngIf"], ["class", "", "appAccordionToggle", "", "href", "javascript:;", 4, "ngIf"], ["class", "sub-item", 4, "ngIf"], ["class", "saperator text-muted", 4, "ngIf"], ["appAccordionToggle", "", 1, "", 3, "routerLink"], ["fxFlex", ""], [3, "class", 4, "ngFor", "ngForOf"], ["appAccordionToggle", "", 1, "", 3, "href"], ["appAccordionToggle", "", "target", "_blank", 1, "", 3, "href"], ["appAccordionToggle", "", "href", "javascript:;", 1, ""], [1, "dd-icon"], [1, "sub-item"], ["routerLinkActive", "selected", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["routerLinkActive", "selected"], ["class", "relative", "routerLinkActive", "selected", 3, "routerLink", "click", 4, "ngIf"], ["routerLinkActive", "selected", 1, "relative", 3, "routerLink", "click"], ["class", "", "href", "javascript: void(0);", 3, "ngClass", "click", 4, "ngIf"], ["class", "child-sub-item", 4, "ngIf"], ["href", "javascript: void(0);", 1, "", 3, "ngClass", "click"], [1, "child-sub-item"], ["routerLinkActive", "selected", 3, "routerLink"], [1, "saperator", "text-muted"]], template: function VerticalAppSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Markarn Doe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-menu", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "account_box");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "notifications_off");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Disable notifications ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Sign Out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-nav-list", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, VerticalAppSidebarComponent_mat_list_item_26_Template, 7, 7, "mat-list-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems.getMenuitem());
    } }, directives: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatNavList"], _shared_accordion_accordion_directive__WEBPACK_IMPORTED_MODULE_6__["AccordionDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListItem"], _shared_accordion_accordionlink_directive__WEBPACK_IMPORTED_MODULE_8__["AccordionLinkDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _shared_accordion_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_10__["AccordionAnchorDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__["DefaultClassDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VerticalAppSidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vertical-sidebar',
                templateUrl: './vertical-sidebar.component.html',
                styleUrls: []
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"] }, { type: _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__["MenuItems"] }]; }, null); })();


/***/ }),

/***/ "4KEl":
/*!**********************************************!*\
  !*** ./src/app/apps/mailbox/mailbox-data.ts ***!
  \**********************************************/
/*! exports provided: mailboxList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mailboxList", function() { return mailboxList; });
const mailboxList = [
    {
        MailId: "bb428c03-1bc6-4f3d-9d5e-268ec44eebc3",
        fromId: "899d0e31-b71e-4d95-a8a0-6a8bceb314bd",
        Subject: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        date: new Date('1-15-2020'),
        Message: "1.The phrase Lorem ipsum dolor sit amet consectetuer appears in Microsoft Word online Help. This phrase has the appearance of an intelligent Latin idiom. Actually, it is nonsense.",
        readStatus: false,
        seen: false,
        mailbox: 'Inbox',
        filter: ['Star'],
        label: ['Account', 'Personal']
    },
    {
        MailId: "a19bf9fc-e877-49e7-a75a-b089a2c35f18",
        fromId: "3782c174-1f2c-4dc4-b75d-0bedf400e023",
        Subject: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        date: new Date('1-10-2020'),
        Message: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
        readStatus: false,
        seen: false,
        mailbox: 'Inbox',
        filter: ['Important'],
        label: []
    },
    {
        MailId: "910d7e0a-f3b0-47a7-bb53-9036ed717298",
        fromId: "eef93cb1-7766-4413-a5cf-ecbf71fa3674",
        Subject: 'consectetuer adipiscing elit.',
        date: new Date('11-25-2018'),
        Message: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
        readStatus: false,
        seen: false,
        mailbox: 'Inbox',
        filter: [],
        label: ['Invoice']
    },
    {
        MailId: "c79cb60a-baf8-4349-b9c3-88d567b965a2",
        fromId: "899d0e31-b71e-4d95-a8a0-6a8bceb314bd",
        Subject: 'Aenean commodo ligula eget dolor. Aenean massa.',
        date: new Date('11-15-2019'),
        Message: "The phrase Lorem ipsum dolor sit amet consectetuer appears. This phrase has the appearance of an intelligent Latin idiom. Actually, it is nonsense.",
        readStatus: false,
        seen: false,
        mailbox: 'Inbox',
        filter: [],
        label: ['Personal']
    },
    {
        MailId: "910d7e0a-f3b0-47a7-bb53-9036ed717298",
        fromId: 'a41c6c4a-9cb1-45d1-8c6f-091044ba51ff',
        Subject: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa.',
        date: new Date('02-15-2019'),
        Message: "The phrase Lorem ipsum dolor sit amet consectetuer appears in Microsoft Word online Help. This phrase has the appearance of an intelligent Latin idiom. Actually, it is nonsense.",
        readStatus: false,
        seen: false,
        mailbox: 'Sent',
        filter: ['Star', 'Important'],
        label: []
    },
    {
        MailId: "35bddac1-1046-4c96-a1ac-ffd75def7f5a",
        fromId: "a41c6c4a-9cb1-45d1-8c6f-091044ba51ff",
        Subject: 'Lorem ipsum dolor sit amet,Aenean commodo ligula eget dolor. Aenean massa.',
        date: new Date('03-15-2019'),
        Message: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
        readStatus: false,
        seen: false,
        mailbox: 'Inbox',
        filter: [],
        label: []
    },
    {
        MailId: "0c914dfd-be0d-4d46-b963-47bcb064154f",
        fromId: "3782c174-1f2c-4dc4-b75d-0bedf400e023",
        Subject: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa.',
        date: new Date('03-30-2019'),
        Message: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
        readStatus: false,
        seen: false,
        mailbox: 'Draft',
        filter: [],
        label: ['Work']
    },
    {
        MailId: "11538c3a-f2a7-4a7c-a237-4e61aa96423b",
        fromId: 'a41c6c4a-9cb1-45d1-8c6f-091044ba51ff',
        Subject: 'Lorem ipsum dolor sit amet,Aenean commodo ligula eget dolor. Aenean massa.',
        date: new Date('11-15-2019'),
        Message: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
        readStatus: false,
        seen: false,
        mailbox: 'Inbox',
        filter: [],
        label: ['Personal', 'Invoice']
    },
    {
        MailId: "0f0a5482-8e4f-42a0-b3bb-1f96bc04d85a",
        fromId: 'a41c6c4a-9cb1-45d1-8c6f-091044ba51ff',
        Subject: 'Aenean commodo ligula eget dolor,Aenean commodo ligula eget dolor. Aenean massa.',
        date: new Date('11-15-2019'),
        Message: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
        readStatus: false,
        seen: false,
        mailbox: 'Inbox',
        filter: [],
        label: ['Account']
    },
    {
        MailId: "2b0e4083-00e4-48fd-9cb3-05434767ca66",
        fromId: '36a1ead7-57a0-4275-8a21-956194ab7cdf',
        Subject: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
        date: new Date('5-20-2018'),
        Message: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
        readStatus: false,
        seen: false,
        mailbox: 'Sent',
        filter: [],
        label: ['Work']
    },
    {
        MailId: "bf7ab76b-c076-4992-a580-13b1859cd395",
        fromId: "eef93cb1-7766-4413-a5cf-ecbf71fa3674",
        Subject: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa.',
        date: new Date('11-11-2018'),
        Message: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa..",
        readStatus: false,
        seen: false,
        mailbox: 'Sent',
        filter: [],
        label: ['Payment']
    },
];


/***/ }),

/***/ "8kSd":
/*!**********************************************!*\
  !*** ./src/app/apps/mailbox/mail.service.ts ***!
  \**********************************************/
/*! exports provided: mailGlobalVariable, mailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mailGlobalVariable", function() { return mailGlobalVariable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mailService", function() { return mailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _mailbox_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mailbox-data */ "4KEl");



// tslint:disable-next-line: class-name
class mailGlobalVariable {
    constructor() {
        this.page = 1;
        this.pageSize = 5;
        this.collectionSize = 0;
        this.topLable = '';
        this.mailList = [];
        this.selectedMail = null;
        this.selectedUser = null;
        this.users = [];
        this.inboxList = [];
        this.sentList = [];
        this.draftList = [];
        this.spamList = [];
        this.trashList = [];
        this.isShow = false;
        this.addClass = true;
        this.inboxCount = 0;
        this.spamCount = 0;
        this.draftCount = 0;
        this.replyShow = false;
        this.type = '';
    }
    global() {
        this.inboxCount = this.inboxList.filter(inbox => inbox.mailbox === 'Inbox' &&
            inbox.seen === false).length;
        this.spamCount = this.spamList.length;
        this.draftCount = this.draftList.length;
    }
}
mailGlobalVariable.ɵfac = function mailGlobalVariable_Factory(t) { return new (t || mailGlobalVariable)(); };
mailGlobalVariable.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: mailGlobalVariable, factory: mailGlobalVariable.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](mailGlobalVariable, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();
// tslint:disable-next-line: class-name
class mailService {
    getInbox() {
        return _mailbox_data__WEBPACK_IMPORTED_MODULE_1__["mailboxList"].filter(mail => mail.mailbox === 'Inbox');
    }
    getSent() {
        return _mailbox_data__WEBPACK_IMPORTED_MODULE_1__["mailboxList"].filter(mail => mail.mailbox === 'Sent');
    }
    getDraft() {
        return _mailbox_data__WEBPACK_IMPORTED_MODULE_1__["mailboxList"].filter(mail => mail.mailbox === 'Draft');
    }
    getSpam() {
        return _mailbox_data__WEBPACK_IMPORTED_MODULE_1__["mailboxList"].filter(mail => mail.mailbox === 'Spam');
    }
    getTrash() {
        return _mailbox_data__WEBPACK_IMPORTED_MODULE_1__["mailboxList"].filter(mail => mail.mailbox === 'Trash');
    }
}
mailService.ɵfac = function mailService_Factory(t) { return new (t || mailService)(); };
mailService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: mailService, factory: mailService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](mailService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "ADQ8":
/*!*************************************************!*\
  !*** ./src/app/shared/menu-items/menu-items.ts ***!
  \*************************************************/
/*! exports provided: MenuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItems", function() { return MenuItems; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const MENUITEMS = [
    {
        state: '',
        name: 'Personal',
        type: 'saperator',
        icon: 'av_timer'
    },
    // {
    //     state: 'dashboards',
    //     name: 'Dashboards',
    //     type: 'sub',
    //     icon: 'av_timer',
    //     children: [
    //         { state: 'dashboard1', name: 'Dashboard 1', type: 'link' },
    //         { state: 'dashboard2', name: 'Dashboard 2', type: 'link' }
    //     ]
    // },
    {
        state: 'client',
        name: 'Clients',
        type: 'sub',
        icon: 'people_outline',
        children: [
            // { state: 'all-clients', name: 'All Clients', type: 'link' },
            { state: 'existing-client-registration', name: 'Existing Client Information', type: 'link' },
            { state: 'client-registration', name: 'New Client Registration', type: 'link' },
        ]
    },
    {
        state: 'credits',
        name: 'Credits',
        type: 'sub',
        icon: 'attach_money',
        children: [
            { state: 'all-credits', name: 'All Credits', type: 'link' },
            { state: 'credit-recovery', name: 'Credit Recovery', type: 'link' },
        ]
    },
];
class MenuItems {
    getMenuitem() {
        return MENUITEMS;
    }
}
MenuItems.ɵfac = function MenuItems_Factory(t) { return new (t || MenuItems)(); };
MenuItems.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MenuItems, factory: MenuItems.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuItems, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "C0NU":
/*!*********************************************************!*\
  !*** ./src/app/shared/accordion/accordion.directive.ts ***!
  \*********************************************************/
/*! exports provided: AccordionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionDirective", function() { return AccordionDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "fjAU");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__);





class AccordionDirective {
    constructor(router) {
        this.router = router;
        this.navlinks = [];
        setTimeout(() => this.checkOpenLinks());
    }
    closeOtherLinks(selectedLink) {
        this.navlinks.forEach((link) => {
            if (link !== selectedLink) {
                link.selected = false;
            }
        });
    }
    addLink(link) {
        this.navlinks.push(link);
    }
    removeGroup(link) {
        const index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    }
    checkOpenLinks() {
        this.navlinks.forEach((link) => {
            if (link.group) {
                const routeUrl = this.router.url;
                const currentUrl = routeUrl.split('/');
                if (currentUrl.indexOf(link.group) > 0) {
                    link.selected = true;
                    this.closeOtherLinks(link);
                }
            }
        });
    }
    ngAfterContentChecked() {
    }
}
AccordionDirective.ɵfac = function AccordionDirective_Factory(t) { return new (t || AccordionDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AccordionDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AccordionDirective, selectors: [["", "appAccordion", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appAccordion]'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "JNRg":
/*!*************************************************************!*\
  !*** ./src/app/shared/accordion/accordionlink.directive.ts ***!
  \*************************************************************/
/*! exports provided: AccordionLinkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionLinkDirective", function() { return AccordionLinkDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordion.directive */ "C0NU");




class AccordionLinkDirective {
    constructor(nav) {
        this._selected = false;
        this.nav = nav;
    }
    get selected() {
        return this._selected;
    }
    set selected(value) {
        this._selected = value;
        if (value) {
            this.nav.closeOtherLinks(this);
        }
    }
    ngOnInit() {
        this.nav.addLink(this);
    }
    ngOnDestroy() {
        this.nav.removeGroup(this);
    }
    toggle() {
        this.selected = !this.selected;
    }
}
AccordionLinkDirective.ɵfac = function AccordionLinkDirective_Factory(t) { return new (t || AccordionLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_accordion_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionDirective"])); };
AccordionLinkDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AccordionLinkDirective, selectors: [["", "appAccordionLink", ""]], hostVars: 2, hostBindings: function AccordionLinkDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx.selected);
    } }, inputs: { group: "group", selected: "selected" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionLinkDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appAccordionLink]'
            }]
    }], function () { return [{ type: _accordion_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_accordion_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionDirective"]]
            }] }]; }, { group: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.selected']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "MOmx":
/*!**************************************************!*\
  !*** ./src/app/layouts/blank/blank.component.ts ***!
  \**************************************************/
/*! exports provided: AppBlankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBlankComponent", function() { return AppBlankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppBlankComponent {
}
AppBlankComponent.ɵfac = function AppBlankComponent_Factory(t) { return new (t || AppBlankComponent)(); };
AppBlankComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppBlankComponent, selectors: [["app-blank"]], decls: 2, vars: 0, template: function AppBlankComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContainer"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppBlankComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blank',
                templateUrl: './blank.component.html',
                styleUrls: []
            }]
    }], null, null); })();


/***/ }),

/***/ "MwDm":
/*!*******************************************!*\
  !*** ./src/app/shared/accordion/index.ts ***!
  \*******************************************/
/*! exports provided: AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordionanchor.directive */ "xXHC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionAnchorDirective", function() { return _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__["AccordionAnchorDirective"]; });

/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordionlink.directive */ "JNRg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionLinkDirective", function() { return _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"]; });

/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion.directive */ "C0NU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionDirective", function() { return _accordion_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"]; });






/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _menu_items_menu_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-items/menu-items */ "ADQ8");
/* harmony import */ var _menu_items_horizontal_menu_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-items/horizontal-menu-items */ "sF2t");
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accordion */ "MwDm");





class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_1__["MenuItems"], _menu_items_horizontal_menu_items__WEBPACK_IMPORTED_MODULE_2__["HorizontalMenuItems"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionAnchorDirective"],
        _accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionLinkDirective"],
        _accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionDirective"]], exports: [_accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionAnchorDirective"],
        _accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionLinkDirective"],
        _accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionAnchorDirective"],
                    _accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionLinkDirective"],
                    _accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionDirective"]
                ],
                exports: [
                    _accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionAnchorDirective"],
                    _accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionLinkDirective"],
                    _accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionDirective"]
                ],
                providers: [_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_1__["MenuItems"], _menu_items_horizontal_menu_items__WEBPACK_IMPORTED_MODULE_2__["HorizontalMenuItems"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "RxpE":
/*!************************************************!*\
  !*** ./src/app/layouts/full/full.component.ts ***!
  \************************************************/
/*! exports provided: FullComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullComponent", function() { return FullComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/menu-items/menu-items */ "ADQ8");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "dlfs");
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../shared/spinner.component */ "oj/z");
/* harmony import */ var _vertical_header_vertical_header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./vertical-header/vertical-header.component */ "WpXa");
/* harmony import */ var _horizontal_header_horizontal_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./horizontal-header/horizontal-header.component */ "faCg");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "bFKe");
/* harmony import */ var _vertical_sidebar_vertical_sidebar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./vertical-sidebar/vertical-sidebar.component */ "0e3Z");
/* harmony import */ var _horizontal_sidebar_horizontal_sidebar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./horizontal-sidebar/horizontal-sidebar.component */ "c9JY");




























function FullComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-vertical-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FullComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-horizontal-header");
} }
function FullComponent_perfect_scrollbar_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "perfect-scrollbar", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-vertical-sidebar", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", ctx_r4.config);
} }
function FullComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-horizontal-sidebar");
} }
function FullComponent_mat_list_item_40_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-slide-toggle", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function FullComponent_mat_list_item_40_Template_mat_slide_toggle_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.horizontal = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Horizontal Layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r8.horizontal);
} }
function FullComponent_mat_list_item_47_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-slide-toggle", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function FullComponent_mat_list_item_47_Template_mat_slide_toggle_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.minisidebar = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Mini Sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r9.minisidebar);
} }
const _c0 = function (a0, a1, a2, a3, a4, a5, a6) { return { "minisidebar": a0, "boxed": a1, "danger": a2, "blue": a3, "green": a4, "dark": a5, "horizontal": a6 }; };
const _c1 = function (a0) { return { "show-search": a0 }; };
const _c2 = function (a0) { return { "minisidebar": a0 }; };
/** @title Responsive sidenav */
class FullComponent {
    constructor(router, changeDetectorRef, media, menuItems) {
        this.router = router;
        this.menuItems = menuItems;
        this.dir = 'ltr';
        this.green = false;
        this.blue = false;
        this.dark = false;
        this.minisidebar = false;
        this.boxed = false;
        this.danger = false;
        this.showHide = false;
        this.horizontal = false;
        this.url = '';
        this.sidebarOpened = false;
        this.status = false;
        this.showSearch = false;
        this.config = {};
        this.mobileQuery = media.matchMedia('(min-width: 1023px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        // tslint:disable-next-line: deprecation
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    clickEvent() {
        this.status = !this.status;
    }
    ngOnDestroy() {
        // tslint:disable-next-line: deprecation
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
FullComponent.ɵfac = function FullComponent_Factory(t) { return new (t || FullComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["MediaMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_3__["MenuItems"])); };
FullComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FullComponent, selectors: [["app-full-layout"]], decls: 68, vars: 33, consts: [[1, "main-container", 3, "dir", "ngClass"], ["color", "primary", 1, "topbar", "telative"], [1, "w-100", "fix-width-for-horizontal"], [1, "navbar-header"], ["href", "/", 1, "navbar-brand"], ["src", "assets/images/logo-icon.png", "alt", "homepage", 1, "dark-logo"], ["src", "assets/images/logo-light-icon.png", "alt", "homepage", 1, "light-logo"], ["fxShow", "false", "fxShow.gt-xs", ""], ["src", "assets/images/logo-text.png", "alt", "homepage", 1, "dark-logo"], ["src", "assets/images/logo-light-text.png", "alt", "homepage", 1, "light-logo"], ["mat-icon-button", "", "value", "sidebarclosed", 1, "sidebar-toggle", 3, "click"], ["mat-icon-button", "", 1, "srh-btn", 3, "click"], [1, "app-search", 3, "ngClass"], ["type", "text", "placeholder", "Search & enter", 1, "form-control"], [1, "cl-srh-btn", 3, "click"], [1, "ti-close"], ["fxFlex", ""], [4, "ngIf", "ngIfElse"], ["horizontalheader", ""], ["mat-icon-button", "", 1, "ml-xs", "overflow-visible", 3, "click"], [1, "example-sidenav-container", 3, "ngClass"], ["id", "snav", "fixedTopGap", "0", 1, "pl-xs", 3, "mode", "opened", "disableClose", "open", "close"], ["snav", ""], ["class", "scbar", 3, "config", 4, "ngIf", "ngIfElse"], ["horizontalsidebar", ""], ["position", "end", "mode", "over", "opened", "false", 1, "chat-panel"], ["end", ""], [1, "scroll"], ["mat-subheader", "", 1, "text-uppercase", "font-weight-bold"], [4, "ngIf"], ["color", "warn", 3, "change"], ["color", "warn", 3, "ngModel", "ngModelChange"], ["color", "warn", 1, "text-danger", 3, "ngModel", "ngModelChange", "change"], ["color", "warn", 1, "text-megna", 3, "ngModel", "ngModelChange", "change"], ["color", "warn", 1, "text-info", 3, "ngModel", "ngModelChange", "change"], ["color", "warn", 3, "ngModel", "ngModelChange", "change"], [1, "page-wrapper", 3, "ngClass"], [1, "page-content"], [1, "scbar", 3, "config"], [1, "app-sidebar"], [3, "ngModel", "ngModelChange"]], template: function FullComponent_Template(rf, ctx) { if (rf & 1) {
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FullComponent_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](30); return _r3.toggle() && ctx.clickEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FullComponent_Template_button_click_14_listener() { return ctx.showSearch = !ctx.showSearch; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FullComponent_Template_a_click_19_listener() { return ctx.showSearch = !ctx.showSearch; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, FullComponent_div_22_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, FullComponent_ng_template_23_Template, 1, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FullComponent_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](35); return _r7.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "mat-sidenav-container", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "mat-sidenav", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("open", function FullComponent_Template_mat_sidenav_open_29_listener() { return ctx.sidebarOpened = true; })("close", function FullComponent_Template_mat_sidenav_close_29_listener() { return ctx.sidebarOpened = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, FullComponent_perfect_scrollbar_31_Template, 2, 1, "perfect-scrollbar", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, FullComponent_ng_template_32_Template, 1, 0, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "mat-sidenav", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "h3", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, FullComponent_mat_list_item_40_Template, 3, 1, "mat-list-item", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "mat-slide-toggle", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function FullComponent_Template_mat_slide_toggle_change_42_listener() { return ctx.dir = ctx.dir == "rtl" ? "ltr" : "rtl"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "RTL");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "mat-slide-toggle", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function FullComponent_Template_mat_slide_toggle_ngModelChange_45_listener($event) { return ctx.boxed = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Boxed Layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, FullComponent_mat_list_item_47_Template, 3, 1, "mat-list-item", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "h3", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "mat-checkbox", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function FullComponent_Template_mat_checkbox_ngModelChange_52_listener($event) { return ctx.danger = $event; })("change", function FullComponent_Template_mat_checkbox_change_52_listener() { return ctx.green = ctx.blue = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Red ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "mat-checkbox", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function FullComponent_Template_mat_checkbox_ngModelChange_55_listener($event) { return ctx.green = $event; })("change", function FullComponent_Template_mat_checkbox_change_55_listener() { return ctx.danger = ctx.blue = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Teal Green");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "mat-checkbox", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function FullComponent_Template_mat_checkbox_ngModelChange_58_listener($event) { return ctx.blue = $event; })("change", function FullComponent_Template_mat_checkbox_change_58_listener() { return ctx.green = ctx.danger = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Blue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "mat-checkbox", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function FullComponent_Template_mat_checkbox_ngModelChange_61_listener($event) { return ctx.dark = $event; })("change", function FullComponent_Template_mat_checkbox_change_61_listener() { return ctx.green = ctx.blue = ctx.danger = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "mat-sidenav-content", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "app-breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "app-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](24);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dir", ctx.dir)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction7"](21, _c0, ctx.minisidebar, ctx.boxed, ctx.danger, ctx.blue, ctx.green, ctx.dark, ctx.horizontal));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](29, _c1, ctx.showSearch));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.horizontal)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("margin-top", ctx.mobileQuery.matches ? 0 : 0, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](31, _c2, ctx.minisidebar));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mode", ctx.mobileQuery.matches ? "side" : "over")("opened", ctx.mobileQuery.matches)("disableClose", ctx.mobileQuery.matches);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.horizontal)("ngIfElse", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.minisidebar);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.boxed);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.horizontal);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.danger);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.green);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.blue);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.dark);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.status ? "minitoggle" : "");
    } }, directives: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Dir"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultClassDirective"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultShowHideDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListSubheaderCssMatStyler"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListItem"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDivider"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckbox"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavContent"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__["AppBreadcrumbComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shared_spinner_component__WEBPACK_IMPORTED_MODULE_18__["SpinnerComponent"], _vertical_header_vertical_header_component__WEBPACK_IMPORTED_MODULE_19__["VerticalAppHeaderComponent"], _horizontal_header_horizontal_header_component__WEBPACK_IMPORTED_MODULE_20__["HorizontalAppHeaderComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_21__["PerfectScrollbarComponent"], _vertical_sidebar_vertical_sidebar_component__WEBPACK_IMPORTED_MODULE_22__["VerticalAppSidebarComponent"], _horizontal_sidebar_horizontal_sidebar_component__WEBPACK_IMPORTED_MODULE_23__["HorizontalAppSidebarComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FullComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-full-layout',
                templateUrl: 'full.component.html',
                styleUrls: []
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["MediaMatcher"] }, { type: _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_3__["MenuItems"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/spinner.component */ "oj/z");




class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shared_spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "WpXa":
/*!***************************************************************************!*\
  !*** ./src/app/layouts/full/vertical-header/vertical-header.component.ts ***!
  \***************************************************************************/
/*! exports provided: VerticalAppHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalAppHeaderComponent", function() { return VerticalAppHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "bFKe");











function VerticalAppHeaderComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerticalAppHeaderComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const lang_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.changeLanguage(lang_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lang_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("flag-icon flag-icon-", lang_r7.icon, " m-r-10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lang_r7.language);
} }
function VerticalAppHeaderComponent_a_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("round ", notification_r10.round, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](notification_r10.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notification_r10.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notification_r10.subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notification_r10.time);
} }
function VerticalAppHeaderComponent_a_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mymessage_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", mymessage_r11.useravatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("profile-status ", mymessage_r11.status, " pull-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mymessage_r11.from);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mymessage_r11.subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mymessage_r11.time);
} }
class VerticalAppHeaderComponent {
    constructor(translate, router) {
        this.translate = translate;
        this.router = router;
        this.config = {};
        // This is for Notifications
        this.notifications = [
            {
                round: 'round-danger',
                icon: 'ti-link',
                title: 'Launch Admin',
                subject: 'Just see the my new admin!',
                time: '9:30 AM'
            },
            {
                round: 'round-success',
                icon: 'ti-calendar',
                title: 'Event today',
                subject: 'Just a reminder that you have event',
                time: '9:10 AM'
            },
            {
                round: 'round-info',
                icon: 'ti-settings',
                title: 'Settings',
                subject: 'You can customize this template as you want',
                time: '9:08 AM'
            },
            {
                round: 'round-primary',
                icon: 'ti-user',
                title: 'Pavan kumar',
                subject: 'Just see the my admin!',
                time: '9:00 AM'
            }
        ];
        // This is for Mymessages
        this.mymessages = [
            {
                useravatar: 'assets/images/users/1.jpg',
                status: 'online',
                from: 'Pavan kumar',
                subject: 'Just see the my admin!',
                time: '9:30 AM'
            },
            {
                useravatar: 'assets/images/users/2.jpg',
                status: 'busy',
                from: 'Sonu Nigam',
                subject: 'I have sung a song! See you at',
                time: '9:10 AM'
            },
            {
                useravatar: 'assets/images/users/2.jpg',
                status: 'away',
                from: 'Arijit Sinh',
                subject: 'I am a singer!',
                time: '9:08 AM'
            },
            {
                useravatar: 'assets/images/users/4.jpg',
                status: 'offline',
                from: 'Pavan kumar',
                subject: 'Just see the my admin!',
                time: '9:00 AM'
            }
        ];
        this.selectedLanguage = {
            language: 'English',
            code: 'en',
            type: 'US',
            icon: 'us'
        };
        this.languages = [{
                language: 'English',
                code: 'en',
                type: 'US',
                icon: 'us'
            },
            {
                language: 'Español',
                code: 'es',
                icon: 'es'
            },
            {
                language: 'Français',
                code: 'fr',
                icon: 'fr'
            },
            {
                language: 'German',
                code: 'de',
                icon: 'de'
            }];
        translate.setDefaultLang('en');
    }
    changeLanguage(lang) {
        this.translate.use(lang.code);
        this.selectedLanguage = lang;
    }
    signOut() {
        console.log("signout");
        this.router.navigateByUrl('/authentication/login');
    }
}
VerticalAppHeaderComponent.ɵfac = function VerticalAppHeaderComponent_Factory(t) { return new (t || VerticalAppHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
VerticalAppHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VerticalAppHeaderComponent, selectors: [["app-vertical-header"]], decls: 59, vars: 12, consts: [["mat-icon-button", "", 1, "m-r-5", 3, "matMenuTriggerFor"], [1, "mymegamenu"], ["flags", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], [1, "notify"], [1, "heartbit"], [1, "point"], ["notification", "matMenu"], [1, "mailbox"], [1, "drop-title"], [1, "message-center"], [3, "config"], ["href", "#", 4, "ngFor", "ngForOf"], [1, "mymessage"], ["message", "matMenu"], ["src", "assets/images/users/1.jpg", "alt", "user", 1, "profile-pic"], ["profile", "matMenu"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click"], ["href", "#"], [1, "mail-content"], [1, "mail-desc"], [1, "time"], [1, "user-img"], ["alt", "user", "width", "40", 1, "img-circle", 3, "src"]], template: function VerticalAppHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-menu", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VerticalAppHeaderComponent_button_4_Template, 4, 4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-menu", 1, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "perfect-scrollbar", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, VerticalAppHeaderComponent_a_21_Template, 10, 9, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-menu", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "You have 4 new Mymessages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "perfect-scrollbar", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, VerticalAppHeaderComponent_a_38_Template, 11, 7, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-menu", 1, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "account_box");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "notifications_off");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Disable notifications ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerticalAppHeaderComponent_Template_button_click_55_listener() { return ctx.signOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Sign Out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("flag-icon flag-icon-", ctx.selectedLanguage.icon, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.languages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notifications);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mymessages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r6);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["_MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarComponent"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuItem"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VerticalAppHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vertical-header',
                templateUrl: './vertical-header.component.html',
                styleUrls: []
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layouts/full/full.component */ "RxpE");
/* harmony import */ var _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layouts/blank/blank.component */ "MOmx");
/* harmony import */ var _layouts_full_vertical_header_vertical_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layouts/full/vertical-header/vertical-header.component */ "WpXa");
/* harmony import */ var _layouts_full_vertical_sidebar_vertical_sidebar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layouts/full/vertical-sidebar/vertical-sidebar.component */ "0e3Z");
/* harmony import */ var _layouts_full_horizontal_header_horizontal_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layouts/full/horizontal-header/horizontal-header.component */ "faCg");
/* harmony import */ var _layouts_full_horizontal_sidebar_horizontal_sidebar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layouts/full/horizontal-sidebar/horizontal-sidebar.component */ "c9JY");
/* harmony import */ var _layouts_full_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layouts/full/breadcrumb/breadcrumb.component */ "dlfs");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _demo_material_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./demo-material-module */ "onrN");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-multiselect-dropdown */ "Egam");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "bFKe");
/* harmony import */ var _apps_mailbox_mail_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./apps/mailbox/mail.service */ "8kSd");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/spinner.component */ "oj/z");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! angular-feather */ "8mtn");
/* harmony import */ var angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! angular-feather/icons */ "q7zL");

































function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_24__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelSpeed: 2,
    wheelPropagation: true
};
// Select some icons (use an object, not an array)
const icons = {
    Camera: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Camera"], Heart: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Heart"], Github: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Github"], Activity: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Activity"], Airplay: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Airplay"], AlertCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["AlertCircle"], AlertOctagon: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["AlertOctagon"], AlertTriangle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["AlertTriangle"], AlignCenter: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["AlignCenter"], AlignJustify: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["AlignJustify"], AlignLeft: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["AlignLeft"], AlignRight: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["AlignRight"], Anchor: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Anchor"], Aperture: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Aperture"], Archive: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Archive"], ArrowDown: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["ArrowDown"], ArrowDownCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["ArrowDownCircle"], ArrowDownLeft: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["ArrowDownLeft"], ArrowDownRight: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["ArrowDownRight"], ArrowLeftCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["ArrowLeftCircle"], ArrowLeft: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["ArrowLeft"], ArrowRight: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["ArrowRight"], ArrowRightCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["ArrowRightCircle"], ArrowUp: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["ArrowUp"], ArrowUpCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["ArrowUpCircle"], ArrowUpLeft: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["ArrowUpLeft"], ArrowUpRight: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["ArrowUpRight"], AtSign: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["AtSign"], Award: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Award"], BarChart2: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["BarChart2"], BarChart: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["BarChart"], BatteryCharging: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["BatteryCharging"], Battery: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Battery"], BellOff: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["BellOff"], Bell: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Bell"], Bluetooth: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Bluetooth"], Bold: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Bold"], BookOpen: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["BookOpen"], Book: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Book"], Bookmark: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Bookmark"], Box: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Box"], Briefcase: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Briefcase"], Calendar: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Calendar"], CameraOff: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["CameraOff"], Cast: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Cast"], CheckCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["CheckCircle"], CheckSquare: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["CheckSquare"], Check: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Check"], ChevronDown: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["ChevronDown"], ChevronLeft: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["ChevronLeft"], ChevronRight: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["ChevronRight"], ChevronUp: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["ChevronUp"], ChevronsDown: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["ChevronsDown"], ChevronsLeft: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["ChevronsLeft"], ChevronsRight: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["ChevronsRight"], ChevronsUp: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["ChevronsUp"], Chrome: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Chrome"], Circle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Circle"], Clipboard: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Clipboard"], Clock: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Clock"], CloudDrizzle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["CloudDrizzle"], CloudLightning: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["CloudLightning"], CloudOff: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["CloudOff"], CloudRain: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["CloudRain"], Cloud: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Cloud"], CloudSnow: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["CloudSnow"], Code: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Code"], Codepen: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Codepen"], Codesandbox: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Codesandbox"], Coffee: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Coffee"], Columns: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Columns"], Command: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Command"], Compass: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Compass"], Copy: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Copy"], CornerDownLeft: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["CornerDownLeft"], CornerDownRight: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["CornerDownRight"], CornerLeftDown: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["CornerLeftDown"], CornerLeftUp: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["CornerLeftUp"], CornerRightDown: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["CornerRightDown"], CornerRightUp: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["CornerRightUp"], CornerUpLeft: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["CornerUpLeft"], CornerUpRight: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["CornerUpRight"], Cpu: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Cpu"], CreditCard: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["CreditCard"], Crop: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Crop"], Crosshair: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Crosshair"], Database: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Database"], Delete: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Delete"], Disc: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Disc"], DollarSign: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["DollarSign"], DownloadCloud: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["DownloadCloud"], Download: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Download"], Droplet: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Droplet"], Edit: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Edit"], Edit2: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Edit2"], Edit3: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Edit3"], ExternalLink: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["ExternalLink"], EyeOff: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["EyeOff"], Eye: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Eye"], Facebook: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Facebook"], FastForward: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["FastForward"], Feather: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Feather"], Figma: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Figma"], FileMinus: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["FileMinus"], FilePlus: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["FilePlus"], FileText: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["FileText"], File: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["File"], Film: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Film"], Filter: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Filter"], Flag: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Flag"], Folder: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Folder"], FolderMinus: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["FolderMinus"], FolderPlus: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["FolderPlus"], Framer: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Framer"], Frown: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Frown"], Gift: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Gift"], GitBranch: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["GitBranch"], GitCommit: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["GitCommit"], GitMerge: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["GitMerge"], GitPullRequest: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["GitPullRequest"], Gitlab: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Gitlab"], Globe: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Globe"], Grid: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Grid"], HardDrive: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["HardDrive"], Hash: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Hash"], Headphones: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Headphones"], HelpCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["HelpCircle"], Hexagon: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Hexagon"], Home: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Home"], MoreHorizontal: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["MoreHorizontal"], Image: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Image"], Inbox: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Inbox"], Info: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Info"], Instagram: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Instagram"], Italic: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Italic"], Key: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Key"], Layers: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Layers"], Layout: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Layout"], LifeBuoy: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["LifeBuoy"], Link: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Link"], Link2: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Link2"], Linkedin: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Linkedin"], List: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["List"], Loader: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Loader"], Lock: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Lock"], LogIn: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["LogIn"], LogOut: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["LogOut"], Mail: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Mail"], MapPin: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["MapPin"], Map: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Map"], Maximize: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Maximize"], Maximize2: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Maximize2"], Meh: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Meh"], Menu: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Menu"], MessageCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["MessageCircle"], MessageSquare: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["MessageSquare"], Mic: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Mic"], MicOff: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["MicOff"], Minimize: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Minimize"], Minimize2: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Minimize2"], MinusCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["MinusCircle"], MinusSquare: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["MinusSquare"], Minus: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Minus"], Monitor: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Monitor"], Moon: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Moon"], MoreVertical: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["MoreVertical"], MousePointer: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["MousePointer"], Move: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Move"], Music: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Music"], Navigation: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Navigation"], Navigation2: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Navigation2"], Octagon: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Octagon"], Package: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Package"], Paperclip: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Paperclip"], PauseCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["PauseCircle"], Pause: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Pause"], PenTool: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["PenTool"], Percent: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Percent"], PhoneCall: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["PhoneCall"], PhoneForwarded: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["PhoneForwarded"], PhoneIncoming: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["PhoneIncoming"], PhoneMissed: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["PhoneMissed"], Phone: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Phone"], PhoneOff: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["PhoneOff"], PhoneOutgoing: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["PhoneOutgoing"], PieChart: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["PieChart"], Play: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Play"], PlayCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["PlayCircle"], Plus: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Plus"], PlusCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["PlusCircle"], PlusSquare: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["PlusSquare"], Pocket: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Pocket"], Power: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Power"], Printer: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Printer"], Radio: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Radio"], RefreshCcw: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["RefreshCcw"], RefreshCw: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["RefreshCw"], Repeat: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Repeat"], Rewind: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Rewind"], RotateCcw: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["RotateCcw"], RotateCw: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["RotateCw"], Rss: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Rss"], Save: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Save"], Scissors: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Scissors"], Search: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Search"], Send: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Send"], Server: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Server"], Settings: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Settings"], Share: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Share"], Share2: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Share2"], Shield: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Shield"], ShieldOff: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["ShieldOff"], ShoppingBag: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["ShoppingBag"], ShoppingCart: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["ShoppingCart"], Shuffle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Shuffle"], Sidebar: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Sidebar"], SkipBack: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["SkipBack"], SkipForward: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["SkipForward"], Slack: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Slack"], Slash: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Slash"], Sliders: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Sliders"], Smartphone: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Smartphone"], Smile: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Smile"], Speaker: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Speaker"], Square: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Square"], Star: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Star"], StopCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["StopCircle"], Sun: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Sun"], Sunrise: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Sunrise"], Sunset: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Sunset"], Tablet: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Tablet"], Tag: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Tag"], Target: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Target"], Terminal: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Terminal"], Thermometer: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Thermometer"], ThumbsDown: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["ThumbsDown"], ThumbsUp: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["ThumbsUp"], ToggleLeft: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["ToggleLeft"], ToggleRight: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["ToggleRight"], Tool: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Tool"], Trash: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Trash"], Trash2: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Trash2"], Trello: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Trello"], TrendingDown: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["TrendingDown"], TrendingUp: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["TrendingUp"], Triangle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Triangle"], Truck: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Truck"], Tv: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Tv"], Twitch: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Twitch"], Twitter: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Twitter"], Type: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Type"], Umbrella: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Umbrella"], Underline: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Underline"], Unlock: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Unlock"], Upload: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Upload"], UploadCloud: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["UploadCloud"], User: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["User"], UserCheck: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["UserCheck"], UserMinus: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["UserMinus"], UserPlus: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["UserPlus"], UserX: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["UserX"], Users: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Users"], Video: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Video"], VideoOff: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["VideoOff"], Voicemail: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Voicemail"], Volume: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Volume"], Volume1: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Volume1"], Volume2: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Volume2"], VolumeX: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["VolumeX"], Watch: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Watch"], Wifi: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Wifi"], WifiOff: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["WifiOff"], Wind: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Wind"], XCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["XCircle"], XOctagon: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["XOctagon"], XSquare: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["XSquare"], X: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["X"], Youtube: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Youtube"], Zap: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["Zap"], ZapOff: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["ZapOff"], ZoomIn: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["ZoomIn"], ZoomOut: angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__["ZoomOut"]
};
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__["PERFECT_SCROLLBAR_CONFIG"],
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }, _apps_mailbox_mail_service__WEBPACK_IMPORTED_MODULE_20__["mailService"], _apps_mailbox_mail_service__WEBPACK_IMPORTED_MODULE_20__["mailGlobalVariable"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
            _demo_material_module__WEBPACK_IMPORTED_MODULE_17__["DemoMaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__["PerfectScrollbarModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_21__["SharedModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_18__["NgMultiSelectDropDownModule"].forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_6__["AppRoutes"], { relativeLinkResolution: 'legacy' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            angular_feather__WEBPACK_IMPORTED_MODULE_25__["FeatherModule"].pick(icons),
            angular_feather__WEBPACK_IMPORTED_MODULE_25__["FeatherModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_9__["FullComponent"],
        _layouts_full_vertical_header_vertical_header_component__WEBPACK_IMPORTED_MODULE_11__["VerticalAppHeaderComponent"],
        _shared_spinner_component__WEBPACK_IMPORTED_MODULE_22__["SpinnerComponent"],
        _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_10__["AppBlankComponent"],
        _layouts_full_vertical_sidebar_vertical_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["VerticalAppSidebarComponent"],
        _layouts_full_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_15__["AppBreadcrumbComponent"],
        _layouts_full_horizontal_header_horizontal_header_component__WEBPACK_IMPORTED_MODULE_13__["HorizontalAppHeaderComponent"],
        _layouts_full_horizontal_sidebar_horizontal_sidebar_component__WEBPACK_IMPORTED_MODULE_14__["HorizontalAppSidebarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
        _demo_material_module__WEBPACK_IMPORTED_MODULE_17__["DemoMaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__["PerfectScrollbarModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_21__["SharedModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_18__["NgMultiSelectDropDownModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], angular_feather__WEBPACK_IMPORTED_MODULE_25__["FeatherModule"], angular_feather__WEBPACK_IMPORTED_MODULE_25__["FeatherModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_9__["FullComponent"],
                    _layouts_full_vertical_header_vertical_header_component__WEBPACK_IMPORTED_MODULE_11__["VerticalAppHeaderComponent"],
                    _shared_spinner_component__WEBPACK_IMPORTED_MODULE_22__["SpinnerComponent"],
                    _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_10__["AppBlankComponent"],
                    _layouts_full_vertical_sidebar_vertical_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["VerticalAppSidebarComponent"],
                    _layouts_full_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_15__["AppBreadcrumbComponent"],
                    _layouts_full_horizontal_header_horizontal_header_component__WEBPACK_IMPORTED_MODULE_13__["HorizontalAppHeaderComponent"],
                    _layouts_full_horizontal_sidebar_horizontal_sidebar_component__WEBPACK_IMPORTED_MODULE_14__["HorizontalAppSidebarComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                    _demo_material_module__WEBPACK_IMPORTED_MODULE_17__["DemoMaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__["PerfectScrollbarModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_21__["SharedModule"],
                    ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_18__["NgMultiSelectDropDownModule"].forRoot(),
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_6__["AppRoutes"], { relativeLinkResolution: 'legacy' }),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    angular_feather__WEBPACK_IMPORTED_MODULE_25__["FeatherModule"].pick(icons),
                    angular_feather__WEBPACK_IMPORTED_MODULE_25__["FeatherModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__["TranslateLoader"],
                            useFactory: HttpLoaderFactory,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                        }
                    })
                ],
                providers: [
                    {
                        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__["PERFECT_SCROLLBAR_CONFIG"],
                        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                    }, _apps_mailbox_mail_service__WEBPACK_IMPORTED_MODULE_20__["mailService"], _apps_mailbox_mail_service__WEBPACK_IMPORTED_MODULE_20__["mailGlobalVariable"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/full/full.component */ "RxpE");
/* harmony import */ var _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/blank/blank.component */ "MOmx");


const AppRoutes = [
    {
        path: '',
        component: _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__["FullComponent"],
        children: [
            {
                path: '',
                redirectTo: '/authentication/login',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                redirectTo: '/dashboards/dashboard1',
                pathMatch: 'full'
            },
            {
                path: 'dashboards',
                loadChildren: () => Promise.all(/*! import() | dashboards-dashboards-module */[__webpack_require__.e("default~charts-chartslib-module~dashboards-dashboards-module~forms-forms-module"), __webpack_require__.e("default~charts-chartslib-module~dashboards-dashboards-module"), __webpack_require__.e("default~apps-apps-module~dashboards-dashboards-module"), __webpack_require__.e("dashboards-dashboards-module")]).then(__webpack_require__.bind(null, /*! ./dashboards/dashboards.module */ "BNDV")).then(m => m.DashboardsModule)
            },
            {
                path: 'client',
                loadChildren: () => Promise.all(/*! import() | client-client-module */[__webpack_require__.e("default~apps-apps-module~client-client-module~credits-credits-module~forms-forms-module"), __webpack_require__.e("default~authentication-authentication-module~client-client-module~forms-forms-module"), __webpack_require__.e("client-client-module")]).then(__webpack_require__.bind(null, /*! ./client/client.module */ "kk3Z")).then(m => m.ClientModule)
            },
            {
                path: 'credits',
                loadChildren: () => Promise.all(/*! import() | credits-credits-module */[__webpack_require__.e("default~apps-apps-module~client-client-module~credits-credits-module~forms-forms-module"), __webpack_require__.e("credits-credits-module")]).then(__webpack_require__.bind(null, /*! ./credits/credits.module */ "RsW7")).then(m => m.CreditsModule)
            },
            {
                path: 'material',
                loadChildren: () => __webpack_require__.e(/*! import() | material-component-material-module */ "material-component-material-module").then(__webpack_require__.bind(null, /*! ./material-component/material.module */ "76PZ")).then(m => m.MaterialComponentsModule)
            },
            {
                path: 'apps',
                loadChildren: () => Promise.all(/*! import() | apps-apps-module */[__webpack_require__.e("default~apps-apps-module~client-client-module~credits-credits-module~forms-forms-module"), __webpack_require__.e("default~apps-apps-module~dashboards-dashboards-module"), __webpack_require__.e("apps-apps-module")]).then(__webpack_require__.bind(null, /*! ./apps/apps.module */ "IYw8")).then(m => m.AppsModule)
            },
            {
                path: 'forms',
                loadChildren: () => Promise.all(/*! import() | forms-forms-module */[__webpack_require__.e("default~apps-apps-module~client-client-module~credits-credits-module~forms-forms-module"), __webpack_require__.e("default~charts-chartslib-module~dashboards-dashboards-module~forms-forms-module"), __webpack_require__.e("default~authentication-authentication-module~client-client-module~forms-forms-module"), __webpack_require__.e("forms-forms-module")]).then(__webpack_require__.bind(null, /*! ./forms/forms.module */ "9Nm5")).then(m => m.FormModule)
            },
            {
                path: 'tables',
                loadChildren: () => __webpack_require__.e(/*! import() | tables-tables-module */ "tables-tables-module").then(__webpack_require__.bind(null, /*! ./tables/tables.module */ "w7GV")).then(m => m.TablesModule)
            },
            {
                path: 'tree',
                loadChildren: () => __webpack_require__.e(/*! import() | tree-tree-module */ "tree-tree-module").then(__webpack_require__.bind(null, /*! ./tree/tree.module */ "nW25")).then(m => m.TreeModule)
            },
            {
                path: 'datatables',
                loadChildren: () => Promise.all(/*! import() | datatables-datatables-module */[__webpack_require__.e("default~datatables-datatables-module~pages-pages-module"), __webpack_require__.e("datatables-datatables-module")]).then(__webpack_require__.bind(null, /*! ./datatables/datatables.module */ "Im+f")).then(m => m.DataTablesModule)
            },
            {
                path: 'pages',
                loadChildren: () => Promise.all(/*! import() | pages-pages-module */[__webpack_require__.e("default~datatables-datatables-module~pages-pages-module"), __webpack_require__.e("pages-pages-module")]).then(__webpack_require__.bind(null, /*! ./pages/pages.module */ "dgmN")).then(m => m.PagesModule)
            },
            {
                path: 'widgets',
                loadChildren: () => __webpack_require__.e(/*! import() | widgets-widgets-module */ "widgets-widgets-module").then(__webpack_require__.bind(null, /*! ./widgets/widgets.module */ "3QYm")).then(m => m.WidgetsModule)
            },
            {
                path: 'charts',
                loadChildren: () => Promise.all(/*! import() | charts-chartslib-module */[__webpack_require__.e("default~charts-chartslib-module~dashboards-dashboards-module~forms-forms-module"), __webpack_require__.e("default~charts-chartslib-module~dashboards-dashboards-module"), __webpack_require__.e("charts-chartslib-module")]).then(__webpack_require__.bind(null, /*! ./charts/chartslib.module */ "tGi7")).then(m => m.ChartslibModule)
            },
            {
                path: 'multi',
                loadChildren: () => __webpack_require__.e(/*! import() | multi-dropdown-multi-dd-module */ "multi-dropdown-multi-dd-module").then(__webpack_require__.bind(null, /*! ./multi-dropdown/multi-dd.module */ "epjg")).then(m => m.MultiModule)
            }
        ]
    },
    {
        path: '',
        component: _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_1__["AppBlankComponent"],
        children: [
            {
                path: 'authentication',
                loadChildren: () => Promise.all(/*! import() | authentication-authentication-module */[__webpack_require__.e("default~authentication-authentication-module~client-client-module~forms-forms-module"), __webpack_require__.e("authentication-authentication-module")]).then(__webpack_require__.bind(null, /*! ./authentication/authentication.module */ "OpKh")).then(m => m.AuthenticationModule)
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'authentication/404'
    }
];


/***/ }),

/***/ "c9JY":
/*!*********************************************************************************!*\
  !*** ./src/app/layouts/full/horizontal-sidebar/horizontal-sidebar.component.ts ***!
  \*********************************************************************************/
/*! exports provided: HorizontalAppSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalAppSidebarComponent", function() { return HorizontalAppSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _shared_menu_items_horizontal_menu_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/menu-items/horizontal-menu-items */ "sF2t");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _shared_accordion_accordion_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/accordion/accordion.directive */ "C0NU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_accordion_accordionlink_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/accordion/accordionlink.directive */ "JNRg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_accordion_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/accordion/accordionanchor.directive */ "xXHC");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");















function HorizontalAppSidebarComponent_mat_list_item_1_a_1_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const badge_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("label label-", badge_r9.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](badge_r9.value);
} }
const _c0 = function (a1) { return ["/", a1]; };
function HorizontalAppSidebarComponent_mat_list_item_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HorizontalAppSidebarComponent_mat_list_item_1_a_1_span_7_Template, 2, 4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuitem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, menuitem_r1.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuitem_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, menuitem_r1.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", menuitem_r1.badge);
} }
function HorizontalAppSidebarComponent_mat_list_item_1_a_2_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const badge_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("label label-", badge_r12.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](badge_r12.value);
} }
function HorizontalAppSidebarComponent_mat_list_item_1_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HorizontalAppSidebarComponent_mat_list_item_1_a_2_span_7_Template, 2, 4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuitem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", menuitem_r1.state, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuitem_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, menuitem_r1.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", menuitem_r1.badge);
} }
function HorizontalAppSidebarComponent_mat_list_item_1_a_3_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const badge_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("label label-", badge_r15.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](badge_r15.value);
} }
function HorizontalAppSidebarComponent_mat_list_item_1_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HorizontalAppSidebarComponent_mat_list_item_1_a_3_span_7_Template, 2, 4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuitem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", menuitem_r1.state, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuitem_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, menuitem_r1.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", menuitem_r1.badge);
} }
function HorizontalAppSidebarComponent_mat_list_item_1_a_4_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const badge_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("label label-", badge_r18.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](badge_r18.value);
} }
function HorizontalAppSidebarComponent_mat_list_item_1_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HorizontalAppSidebarComponent_mat_list_item_1_a_4_span_7_Template, 2, 4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "keyboard_arrow_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuitem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuitem_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, menuitem_r1.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", menuitem_r1.badge);
} }
const _c1 = function (a1, a2) { return ["/", a1, a2]; };
function HorizontalAppSidebarComponent_mat_list_item_1_mat_nav_list_5_mat_list_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const childitem_r21 = ctx.$implicit;
    const menuitem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c1, menuitem_r1.state, childitem_r21.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, childitem_r21.name));
} }
function HorizontalAppSidebarComponent_mat_list_item_1_mat_nav_list_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HorizontalAppSidebarComponent_mat_list_item_1_mat_nav_list_5_mat_list_item_1_Template, 4, 7, "mat-list-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuitem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", menuitem_r1.children);
} }
function HorizontalAppSidebarComponent_mat_list_item_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuitem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, menuitem_r1.name));
} }
function HorizontalAppSidebarComponent_mat_list_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HorizontalAppSidebarComponent_mat_list_item_1_a_1_Template, 8, 8, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HorizontalAppSidebarComponent_mat_list_item_1_a_2_Template, 8, 6, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HorizontalAppSidebarComponent_mat_list_item_1_a_3_Template, 8, 6, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HorizontalAppSidebarComponent_mat_list_item_1_a_4_Template, 10, 5, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HorizontalAppSidebarComponent_mat_list_item_1_mat_nav_list_5_Template, 2, 1, "mat-nav-list", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HorizontalAppSidebarComponent_mat_list_item_1_div_6_Template, 4, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuitem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("group", menuitem_r1.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuitem_r1.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuitem_r1.type === "extLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuitem_r1.type === "extTabLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuitem_r1.type === "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuitem_r1.type === "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuitem_r1.type === "saperator");
} }
class HorizontalAppSidebarComponent {
    constructor(changeDetectorRef, media, menuItems) {
        this.menuItems = menuItems;
        this.config = {};
        this.mobileQuery = media.matchMedia('(min-width: 1024px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
HorizontalAppSidebarComponent.ɵfac = function HorizontalAppSidebarComponent_Factory(t) { return new (t || HorizontalAppSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_menu_items_horizontal_menu_items__WEBPACK_IMPORTED_MODULE_2__["HorizontalMenuItems"])); };
HorizontalAppSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HorizontalAppSidebarComponent, selectors: [["app-horizontal-sidebar"]], decls: 2, vars: 1, consts: [["appAccordion", ""], ["appAccordionLink", "", "routerLinkActive", "selected", 3, "group", 4, "ngFor", "ngForOf"], ["appAccordionLink", "", "routerLinkActive", "selected", 3, "group"], ["class", "", "appAccordionToggle", "", 3, "routerLink", 4, "ngIf"], ["class", "", "appAccordionToggle", "", 3, "href", 4, "ngIf"], ["class", "", "appAccordionToggle", "", "target", "_blank", 3, "href", 4, "ngIf"], ["class", "", "appAccordionToggle", "", "href", "javascript:;", 4, "ngIf"], ["class", "sub-item", 4, "ngIf"], ["class", "saperator text-muted", 4, "ngIf"], ["appAccordionToggle", "", 1, "", 3, "routerLink"], ["fxFlex", ""], [3, "class", 4, "ngFor", "ngForOf"], ["appAccordionToggle", "", 1, "", 3, "href"], ["appAccordionToggle", "", "target", "_blank", 1, "", 3, "href"], ["appAccordionToggle", "", "href", "javascript:;", 1, ""], [1, "dd-icon"], [1, "sub-item"], ["routerLinkActive", "selected", 4, "ngFor", "ngForOf"], ["routerLinkActive", "selected"], ["routerLinkActive", "selected", 1, "relative", 3, "routerLink"], [1, "saperator", "text-muted"]], template: function HorizontalAppSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HorizontalAppSidebarComponent_mat_list_item_1_Template, 7, 7, "mat-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems.getMenuitem());
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatNavList"], _shared_accordion_accordion_directive__WEBPACK_IMPORTED_MODULE_4__["AccordionDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListItem"], _shared_accordion_accordionlink_directive__WEBPACK_IMPORTED_MODULE_6__["AccordionLinkDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _shared_accordion_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_8__["AccordionAnchorDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HorizontalAppSidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-horizontal-sidebar',
                templateUrl: './horizontal-sidebar.component.html',
                styleUrls: []
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"] }, { type: _shared_menu_items_horizontal_menu_items__WEBPACK_IMPORTED_MODULE_2__["HorizontalMenuItems"] }]; }, null); })();


/***/ }),

/***/ "dlfs":
/*!*****************************************************************!*\
  !*** ./src/app/layouts/full/breadcrumb/breadcrumb.component.ts ***!
  \*****************************************************************/
/*! exports provided: AppBreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBreadcrumbComponent", function() { return AppBreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");









function AppBreadcrumbComponent_ng_template_8_li_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const url_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", url_r1.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", url_r1.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](url_r1.title);
} }
function AppBreadcrumbComponent_ng_template_8_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const url_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](url_r1.title);
} }
function AppBreadcrumbComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppBreadcrumbComponent_ng_template_8_li_0_Template, 3, 3, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppBreadcrumbComponent_ng_template_8_li_1_Template, 2, 1, "li", 9);
} if (rf & 2) {
    const last_r2 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !last_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", last_r2);
} }
class AppBreadcrumbComponent {
    constructor(router, activatedRoute, titleService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        // @Input() layout;
        this.pageInfo = Object.create(null);
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => this.activatedRoute))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(route => {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(route => route.outlet === 'primary'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(route => route.data))
            .subscribe(event => {
            this.titleService.setTitle(event['title']);
            this.pageInfo = event;
        });
    }
    ngOnInit() { }
}
AppBreadcrumbComponent.ɵfac = function AppBreadcrumbComponent_Factory(t) { return new (t || AppBreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
AppBreadcrumbComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppBreadcrumbComponent, selectors: [["app-breadcrumb"]], decls: 9, vars: 2, consts: [[1, "page-breadcrumb", "p-t-20", "p-b-20", "p-l-30", "p-r-30"], ["fxLayout", "row wrap"], ["fxFlex.gt-sm", "60", "fxFlex.gt-xs", "60", "fxFlex", "100", 1, "align-self-center"], [1, "page-title", "text-themecolor", "m-0"], ["fxFlex.gt-sm", "40", "fxFlex.gt-xs", "40", "fxFlex", "100", 1, "align-self-center"], [1, "breadcrumb", "d-flex", "align-items-center", "float-right", "float-sm-left"], [1, "list-style-none", "d-flex", "align-items-center"], ["ngFor", "", 3, "ngForOf"], ["class", "breadcrumb-item", 3, "routerLink", 4, "ngIf"], ["class", "breadcrumb-item active", 4, "ngIf"], [1, "breadcrumb-item", 3, "routerLink"], [3, "routerLink"], [1, "breadcrumb-item", "active"]], template: function AppBreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppBreadcrumbComponent_ng_template_8_Template, 2, 2, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pageInfo == null ? null : ctx.pageInfo.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pageInfo == null ? null : ctx.pageInfo.urls);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppBreadcrumbComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-breadcrumb',
                templateUrl: './breadcrumb.component.html',
                styleUrls: []
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


/***/ }),

/***/ "faCg":
/*!*******************************************************************************!*\
  !*** ./src/app/layouts/full/horizontal-header/horizontal-header.component.ts ***!
  \*******************************************************************************/
/*! exports provided: HorizontalAppHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalAppHeaderComponent", function() { return HorizontalAppHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "bFKe");











function HorizontalAppHeaderComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalAppHeaderComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const lang_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.changeLanguage(lang_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lang_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("flag-icon flag-icon-", lang_r7.icon, " m-r-10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lang_r7.language);
} }
function HorizontalAppHeaderComponent_a_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("round ", notification_r10.round, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](notification_r10.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notification_r10.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notification_r10.subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notification_r10.time);
} }
function HorizontalAppHeaderComponent_a_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mymessage_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", mymessage_r11.useravatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("profile-status ", mymessage_r11.status, " pull-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mymessage_r11.from);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mymessage_r11.subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mymessage_r11.time);
} }
class HorizontalAppHeaderComponent {
    constructor(translate, router) {
        this.translate = translate;
        this.router = router;
        this.config = {};
        // This is for Notifications
        this.notifications = [
            {
                round: 'round-danger',
                icon: 'ti-link',
                title: 'Luanch Admin',
                subject: 'Just see the my new admin!',
                time: '9:30 AM'
            },
            {
                round: 'round-success',
                icon: 'ti-calendar',
                title: 'Event today',
                subject: 'Just a reminder that you have event',
                time: '9:10 AM'
            },
            {
                round: 'round-info',
                icon: 'ti-settings',
                title: 'Settings',
                subject: 'You can customize this template as you want',
                time: '9:08 AM'
            },
            {
                round: 'round-primary',
                icon: 'ti-user',
                title: 'Pavan kumar',
                subject: 'Just see the my admin!',
                time: '9:00 AM'
            }
        ];
        // This is for Mymessages
        this.mymessages = [
            {
                useravatar: 'assets/images/users/1.jpg',
                status: 'online',
                from: 'Pavan kumar',
                subject: 'Just see the my admin!',
                time: '9:30 AM'
            },
            {
                useravatar: 'assets/images/users/2.jpg',
                status: 'busy',
                from: 'Sonu Nigam',
                subject: 'I have sung a song! See you at',
                time: '9:10 AM'
            },
            {
                useravatar: 'assets/images/users/2.jpg',
                status: 'away',
                from: 'Arijit Sinh',
                subject: 'I am a singer!',
                time: '9:08 AM'
            },
            {
                useravatar: 'assets/images/users/4.jpg',
                status: 'offline',
                from: 'Pavan kumar',
                subject: 'Just see the my admin!',
                time: '9:00 AM'
            }
        ];
        this.selectedLanguage = {
            language: 'English',
            code: 'en',
            type: 'US',
            icon: 'us'
        };
        this.languages = [{
                language: 'English',
                code: 'en',
                type: 'US',
                icon: 'us'
            },
            {
                language: 'Español',
                code: 'es',
                icon: 'es'
            },
            {
                language: 'Français',
                code: 'fr',
                icon: 'fr'
            },
            {
                language: 'German',
                code: 'de',
                icon: 'de'
            }];
        translate.setDefaultLang('en');
    }
    changeLanguage(lang) {
        this.translate.use(lang.code);
        this.selectedLanguage = lang;
    }
    signOut() {
        console.log("signout");
        this.router.navigateByUrl('/authentication/login');
    }
}
HorizontalAppHeaderComponent.ɵfac = function HorizontalAppHeaderComponent_Factory(t) { return new (t || HorizontalAppHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HorizontalAppHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HorizontalAppHeaderComponent, selectors: [["app-horizontal-header"]], decls: 59, vars: 12, consts: [["mat-icon-button", "", 1, "m-r-5", 3, "matMenuTriggerFor"], [1, "mymegamenu"], ["flags", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], [1, "notify"], [1, "heartbit"], [1, "point"], ["notification", "matMenu"], [1, "mailbox"], [1, "drop-title"], [1, "message-center"], [3, "config"], ["href", "#", 4, "ngFor", "ngForOf"], [1, "mymessage"], ["message", "matMenu"], ["src", "assets/images/users/1.jpg", "alt", "user", 1, "profile-pic"], ["profile", "matMenu"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click"], ["href", "#"], [1, "mail-content"], [1, "mail-desc"], [1, "time"], [1, "user-img"], ["alt", "user", "width", "40", 1, "img-circle", 3, "src"]], template: function HorizontalAppHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-menu", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HorizontalAppHeaderComponent_button_4_Template, 4, 4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-menu", 1, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "perfect-scrollbar", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, HorizontalAppHeaderComponent_a_21_Template, 10, 9, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-menu", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "You have 4 new Mymessages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "perfect-scrollbar", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, HorizontalAppHeaderComponent_a_38_Template, 11, 7, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-menu", 1, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "account_box");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "notifications_off");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Disable notifications ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalAppHeaderComponent_Template_button_click_55_listener() { return ctx.signOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Sign Out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("flag-icon flag-icon-", ctx.selectedLanguage.icon, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.languages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notifications);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mymessages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r6);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["_MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarComponent"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuItem"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HorizontalAppHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-horizontal-header',
                templateUrl: './horizontal-header.component.html',
                styleUrls: []
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "oj/z":
/*!*********************************************!*\
  !*** ./src/app/shared/spinner.component.ts ***!
  \*********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");






function SpinnerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SpinnerComponent {
    constructor(router, document) {
        this.router = router;
        this.document = document;
        this.isSpinnerVisible = true;
        this.backgroundColor = 'rgba(0, 115, 170, 0.69)';
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                this.isSpinnerVisible = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"] ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
                this.isSpinnerVisible = false;
            }
        }, () => {
            this.isSpinnerVisible = false;
        });
    }
    ngOnDestroy() {
        this.isSpinnerVisible = false;
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])); };
SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["app-spinner"]], inputs: { backgroundColor: "backgroundColor" }, decls: 1, vars: 1, consts: [["class", "preloader", 4, "ngIf"], [1, "preloader"], [1, "spinner"], [1, "double-bounce1"], [1, "double-bounce2"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpinnerComponent_div_0_Template, 4, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSpinnerVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-spinner',
                template: `<div class="preloader" *ngIf="isSpinnerVisible">
        <div class="spinner">
          <div class="double-bounce1"></div>
          <div class="double-bounce2"></div>
        </div>
    </div>`,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }]; }, { backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "onrN":
/*!*****************************************!*\
  !*** ./src/app/demo-material-module.ts ***!
  \*****************************************/
/*! exports provided: DemoMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function() { return DemoMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/cdk/table */ "f6nW");
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/cdk/accordion */ "N/qJ");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/cdk/observers */ "GU7r");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */











































/**
 * NgModule that includes all Material modules that are required to serve the demo-app.
 */
class DemoMaterialModule {
}
DemoMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DemoMaterialModule });
DemoMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DemoMaterialModule_Factory(t) { return new (t || DemoMaterialModule)(); }, imports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_33__["MatBottomSheetModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatTableModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_31__["MatBadgeModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__["MatSlideToggleModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__["MatSliderModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__["MatSortModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__["MatStepperModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__["MatTooltipModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatNativeDateModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_34__["CdkTableModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_36__["A11yModule"],
        _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_37__["BidiModule"],
        _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_35__["CdkAccordionModule"],
        _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_40__["ObserversModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_38__["OverlayModule"],
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_39__["PlatformModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__["PortalModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DemoMaterialModule, { exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_33__["MatBottomSheetModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatTableModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_31__["MatBadgeModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__["MatSlideToggleModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__["MatSliderModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__["MatSortModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__["MatStepperModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__["MatTooltipModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatNativeDateModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_34__["CdkTableModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_36__["A11yModule"],
        _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_37__["BidiModule"],
        _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_35__["CdkAccordionModule"],
        _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_40__["ObserversModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_38__["OverlayModule"],
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_39__["PlatformModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__["PortalModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemoMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_33__["MatBottomSheetModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatTableModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_31__["MatBadgeModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__["MatSlideToggleModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__["MatSliderModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__["MatSortModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__["MatStepperModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__["MatTooltipModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatNativeDateModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_34__["CdkTableModule"],
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_36__["A11yModule"],
                    _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_37__["BidiModule"],
                    _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_35__["CdkAccordionModule"],
                    _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_40__["ObserversModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_38__["OverlayModule"],
                    _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_39__["PlatformModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__["PortalModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "sF2t":
/*!************************************************************!*\
  !*** ./src/app/shared/menu-items/horizontal-menu-items.ts ***!
  \************************************************************/
/*! exports provided: HorizontalMenuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalMenuItems", function() { return HorizontalMenuItems; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const MENUITEMS = [
    {
        state: '',
        name: 'Personal',
        type: 'saperator',
        icon: 'av_timer'
    },
    // {
    //     state: 'dashboards',
    //     name: 'Dashboards',
    //     type: 'sub',
    //     icon: 'av_timer',
    //     children: [
    //         { state: 'dashboard1', name: 'Dashboard 1', type: 'link' },
    //         { state: 'dashboard2', name: 'Dashboard 2', type: 'link' }
    //     ]
    // },
    {
        state: 'client',
        name: 'Clients',
        type: 'sub',
        icon: 'people_outline',
        children: [
            // { state: 'all-clients', name: 'All Clients', type: 'link' },
            { state: 'existing-client-registration', name: 'Existing Client Information', type: 'link' },
            { state: 'client-registration', name: 'New Client Registration', type: 'link' },
        ]
    },
    {
        state: 'credits',
        name: 'Credits',
        type: 'sub',
        icon: 'attach_money',
        children: [
            { state: 'all-credits', name: 'All Credits', type: 'link' },
            { state: 'credit-recovery', name: 'Credit Recovery', type: 'link' },
        ]
    },
    {
        state: 'apps',
        name: 'Apps',
        type: 'sub',
        icon: 'apps',
        children: [
            { state: 'calendar', name: 'Calendar', type: 'link' },
            { state: 'mailbox', name: 'Mailbox', type: 'link' },
            { state: 'messages', name: 'Mail', type: 'link' },
            { state: 'chat', name: 'Chat', type: 'link' },
            { state: 'taskboard', name: 'Taskboard', type: 'link' },
            { state: 'notes', name: 'Notes', type: 'link' },
            { state: 'employeelist', name: 'Employees', type: 'link' },
            { state: 'courses', name: 'Courses', type: 'link' },
            { state: 'contact', name: 'Contact', type: 'link' },
            { state: 'ticketlist', name: 'Ticket List', type: 'link' },
            { state: 'ticketdetails', name: 'Ticket Details', type: 'link' },
            { state: 'invoice', name: 'Invoice', type: 'link' },
            { state: 'todo', name: 'Todo', type: 'link' },
        ]
    },
    {
        state: 'material',
        name: 'Ui',
        type: 'sub',
        icon: 'bubble_chart',
        badge: [{ type: 'red', value: '17' }],
        children: [
            { state: 'badge', name: 'Badge', type: 'link' },
            { state: 'button', name: 'Buttons', type: 'link' },
            { state: 'cards', name: 'Cards', type: 'link' },
            { state: 'grid', name: 'Grid List', type: 'link' },
            { state: 'lists', name: 'Lists', type: 'link' },
            { state: 'menu', name: 'Menu', type: 'link' },
            { state: 'tabs', name: 'Tabs', type: 'link' },
            { state: 'stepper', name: 'Stepper', type: 'link' },
            { state: 'ripples', name: 'Ripples', type: 'link' },
            { state: 'expansion', name: 'Expansion Panel', type: 'link' },
            { state: 'chips', name: 'Chips', type: 'link' },
            { state: 'toolbar', name: 'Toolbar', type: 'link' },
            { state: 'progress-snipper', name: 'Progress snipper', type: 'link' },
            { state: 'progress', name: 'Progress Bar', type: 'link' },
            { state: 'dialog', name: 'Dialog', type: 'link' },
            { state: 'tooltip', name: 'Tooltip', type: 'link' },
            { state: 'snackbar', name: 'Snackbar', type: 'link' },
            { state: 'slider', name: 'Slider', type: 'link' },
            { state: 'slide-toggle', name: 'Slide Toggle', type: 'link' }
        ]
    },
    {
        state: '',
        name: 'Forms, Table & Widgets',
        type: 'saperator',
        icon: 'av_timer'
    },
    {
        state: 'forms',
        name: 'Forms',
        type: 'sub',
        icon: 'insert_drive_file',
        children: [
            { state: 'form-layout', name: 'Form-Layout', type: 'link' },
            { state: 'autocomplete', name: 'Autocomplete', type: 'link' },
            { state: 'checkbox', name: 'Checkbox', type: 'link' },
            { state: 'radiobutton', name: 'Radio Button', type: 'link' },
            { state: 'datepicker', name: 'Datepicker', type: 'link' },
            { state: 'select', name: 'Select', type: 'link' },
            { state: 'formfield', name: 'Form Field', type: 'link' },
            { state: 'input', name: 'Inputs', type: 'link' },
            { state: 'tree', name: 'Tree', type: 'link' },
            { state: 'editor', name: 'Editor', type: 'link' },
            { state: 'form-validation', name: 'Form Validation', type: 'link' },
            { state: 'wizard', name: 'Wizard', type: 'link' },
            { state: 'paginator', name: 'Paginator', type: 'link' },
            { state: 'shortheader', name: 'Short Header', type: 'link' },
            { state: 'multiselect', name: 'Multiselect', type: 'link' }
        ]
    },
    {
        state: 'tables',
        name: 'Tables',
        type: 'sub',
        icon: 'web',
        children: [
            { state: 'basictable', name: 'Basic Table', type: 'link' },
            { state: 'filterable', name: 'Filterable Table', type: 'link' },
            { state: 'pagination', name: 'Pagination Table', type: 'link' },
            { state: 'sortable', name: 'Sortable Table', type: 'link' },
            { state: 'mix', name: 'Mix Table', type: 'link' },
            { state: 'dynamic-table', name: 'Dynamic Table', type: 'link' },
            { state: 'expand-table', name: 'Expand Table', type: 'link' },
            { state: 'footerrow-table', name: 'Footer row Table', type: 'link' },
            { state: 'multiple-header-footer', name: 'Multiple Header Footer', type: 'link' },
            { state: 'http-table', name: 'HTTP Table', type: 'link' },
            { state: 'row-context-table', name: 'Row Context Table', type: 'link' },
            { state: 'selection-table', name: 'Selection Table', type: 'link' },
            { state: 'sticky-column-table', name: 'Sticky Column Table', type: 'link' },
            { state: 'sticky-footer-table', name: 'Sticky Footer Table', type: 'link' }
        ]
    },
    {
        state: 'datatables',
        name: 'Data Tables',
        type: 'sub',
        icon: 'border_all',
        children: [
            { state: 'basicdatatable', name: 'Basic Data Table', type: 'link' },
            { state: 'filter', name: 'Filterable', type: 'link' },
            { state: 'editing', name: 'Editing', type: 'link' },
            { state: 'materialtable', name: 'Material Table', type: 'link' }
        ]
    },
    // {
    //     state: 'widgets',
    //     name: 'Widgets',
    //     type: 'link',
    //     icon: 'widgets'
    // },
    {
        state: '',
        name: 'Extra Component',
        type: 'saperator',
        icon: 'av_timer'
    },
    // {
    //     state: 'authentication',
    //     name: 'Auth',
    //     type: 'sub',
    //     icon: 'perm_contact_calendar',
    //     children: [
    //         { state: 'login', name: 'Login', type: 'link' },
    //         { state: 'register', name: 'Register', type: 'link' },
    //         { state: 'forgot', name: 'Forgot', type: 'link' },
    //         { state: 'lockscreen', name: 'Lockscreen', type: 'link' },
    //         { state: '404', name: 'Error', type: 'link' }
    //     ]
    // },
    // {
    //     state: 'charts',
    //     name: 'Charts',
    //     type: 'sub',
    //     icon: 'insert_chart',
    //     children: [
    //         { state: 'chartjs', name: 'Chart Js', type: 'link' },
    //         { state: 'chartistjs', name: 'Chartist Js', type: 'link' },
    //         { state: 'ngxchart', name: 'Ngx Charts', type: 'link' }
    //     ]
    // },
    {
        state: 'pages',
        name: 'Pages',
        type: 'sub',
        icon: 'content_copy',
        children: [
            { state: 'icons', name: 'Material Icons', type: 'link' },
            { state: 'timeline', name: 'Timeline', type: 'link' },
            { state: 'invoice', name: 'Invoice', type: 'link' },
            // { state: 'pricing', name: 'Pricing', type: 'link' },
            { state: 'helper', name: 'Helper Classes', type: 'link' }
        ]
    }
];
class HorizontalMenuItems {
    getMenuitem() {
        return MENUITEMS;
    }
}
HorizontalMenuItems.ɵfac = function HorizontalMenuItems_Factory(t) { return new (t || HorizontalMenuItems)(); };
HorizontalMenuItems.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HorizontalMenuItems, factory: HorizontalMenuItems.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HorizontalMenuItems, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "xXHC":
/*!***************************************************************!*\
  !*** ./src/app/shared/accordion/accordionanchor.directive.ts ***!
  \***************************************************************/
/*! exports provided: AccordionAnchorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionAnchorDirective", function() { return AccordionAnchorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordionlink.directive */ "JNRg");




class AccordionAnchorDirective {
    constructor(navlink) {
        this.navlink = navlink;
    }
    onClick(e) {
        this.navlink.toggle();
    }
}
AccordionAnchorDirective.ɵfac = function AccordionAnchorDirective_Factory(t) { return new (t || AccordionAnchorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"])); };
AccordionAnchorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AccordionAnchorDirective, selectors: [["", "appAccordionToggle", ""]], hostBindings: function AccordionAnchorDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccordionAnchorDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionAnchorDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appAccordionToggle]'
            }]
    }], function () { return [{ type: _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"]]
            }] }]; }, { onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map