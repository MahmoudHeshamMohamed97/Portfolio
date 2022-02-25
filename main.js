(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/Z40":
/*!***********************************************************!*\
  !*** ./src/app/Components/notfound/notfound.component.ts ***!
  \***********************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NotfoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotfoundComponent.ɵfac = function NotfoundComponent_Factory(t) { return new (t || NotfoundComponent)(); };
NotfoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotfoundComponent, selectors: [["app-notfound"]], decls: 2, vars: 0, template: function NotfoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "notfound works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3Rmb3VuZC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Never say never\Portfolio\src\main.ts */"zUnb");


/***/ }),

/***/ "0zBU":
/*!***************************************************!*\
  !*** ./src/app/Components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 11, vars: 0, consts: [[1, "main", "vh-100", "overflow-hidden"], [1, "container"], [1, "row"], [1, "col-md-5", "pt-5"], [1, "middle", "pt-5", "mt-5"], ["routerLink", "/about", "id", "hello", 1, "fw-bolder", "mt-5", "text-white"], ["routerLink", "/works", "id", "iam", 1, "fw-bolder"], ["routerLink", "/contact", "id", "name", 1, "fw-bolder"], [1, "col-md-7"], [1, "imgContent"], ["src", "assets/images/myProfile.png", "alt", "profile picture", 1, "w-100"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["h2[_ngcontent-%COMP%]{\r\n  font-size: 90px;\r\n  color: red;\r\n  transition: 0.5s all;\r\n  position: relative;\r\n  left: 0;\r\n  cursor: pointer;\r\n  z-index: 99;\r\n}\r\nh2[_ngcontent-%COMP%]:hover{\r\n  left: 70px;\r\n}\r\n\r\n#hello[_ngcontent-%COMP%]::after{\r\n  content: \"Hello.\";\r\n  transition: 0.5s all;\r\n}\r\n#iam[_ngcontent-%COMP%]::after{\r\n  content: \"I am.\";\r\n  transition: 0.5s all;\r\n}\r\n#name[_ngcontent-%COMP%]::after{\r\n  content: \"Mahmoud.\";\r\n  transition: 0.5s all;\r\n}\r\n\r\n#hello[_ngcontent-%COMP%]:hover::after{\r\n  content: \"About.\";\r\n}\r\n#iam[_ngcontent-%COMP%]:hover::after{\r\n  content: \"Work.\";\r\n}\r\n#name[_ngcontent-%COMP%]:hover::after{\r\n  content: \"Contact.\";\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsZUFBZTtFQUNmLFdBQVc7QUFDYjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0EsMENBQTBDO0FBQzFDO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0QjtBQUNBLHVDQUF1QztBQUN2QztFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDJ7XHJcbiAgZm9udC1zaXplOiA5MHB4O1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgdHJhbnNpdGlvbjogMC41cyBhbGw7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHotaW5kZXg6IDk5O1xyXG59XHJcbmgyOmhvdmVye1xyXG4gIGxlZnQ6IDcwcHg7XHJcbn1cclxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xyXG4jaGVsbG86OmFmdGVye1xyXG4gIGNvbnRlbnQ6IFwiSGVsbG8uXCI7XHJcbiAgdHJhbnNpdGlvbjogMC41cyBhbGw7XHJcbn1cclxuI2lhbTo6YWZ0ZXJ7XHJcbiAgY29udGVudDogXCJJIGFtLlwiO1xyXG4gIHRyYW5zaXRpb246IDAuNXMgYWxsO1xyXG59XHJcbiNuYW1lOjphZnRlcntcclxuICBjb250ZW50OiBcIk1haG1vdWQuXCI7XHJcbiAgdHJhbnNpdGlvbjogMC41cyBhbGw7XHJcbn1cclxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xyXG4jaGVsbG86aG92ZXI6OmFmdGVye1xyXG4gIGNvbnRlbnQ6IFwiQWJvdXQuXCI7XHJcbn1cclxuI2lhbTpob3Zlcjo6YWZ0ZXJ7XHJcbiAgY29udGVudDogXCJXb3JrLlwiO1xyXG59XHJcbiNuYW1lOmhvdmVyOjphZnRlcntcclxuICBjb250ZW50OiBcIkNvbnRhY3QuXCI7XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "1ngR":
/*!*********************************************************!*\
  !*** ./src/app/Components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
    copy() {
        navigator.clipboard.writeText("mahmoud.hesham693@gmail.com").then(this.showClipboard);
    }
    showClipboard() {
        let elem = document.querySelector('.clipboard');
        elem.style.top = '80%';
        setTimeout(() => { elem.style.top = '110%'; }, 2500);
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 27, vars: 0, consts: [["routerLink", "/home", 1, "parentTop", "position-fixed", "top-0", "end-0", "text-white", "pt-5", "pe-5"], [1, "topLeft"], [1, "container", "text-white", "vh-100", "d-flex", "align-items-center"], [1, "aboutMe", "ps-5"], [1, "h1", "fw-bolder"], [1, "pb-5", "d-flex", "text-white", "justify-content-center"], [1, "w-50", "py-5"], [1, "mb-5", "h1"], [1, "h6"], [1, "mt-4", "h6"], [1, "info", "mail", "mt-4"], [1, "text-decoration-none", "h6", "mt-4", 2, "cursor", "pointer", 3, "click"], [1, "info", "mt-4"], ["href", "https://www.linkedin.com/in/mahmoud-hesham-048a8b122/", "target", "_blank", 1, "text-decoration-none", "h6", "mt-4"], ["href", "https://www.facebook.com/mahmoud.hesham.9847", "target", "_blank", 1, "text-decoration-none", "h6", "mt-4"], [1, "clipboard"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " I design & build ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " UI websites. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " I'm seeking out opportunities to collaborate with companies / agencies / individuals and freelancing jobs. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Feel free to reach out through any platforms bellow: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactComponent_Template_a_click_17_listener() { return ctx.copy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " LinkedIn ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Facebook ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Copied to clipboard..");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["h2[_ngcontent-%COMP%]:not(.topLeft){\r\n  font-size: 90px;\r\n}\r\n.info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  color: red;\r\n  position: relative;\r\n  left: 0;\r\n  transition: 0.5s all;\r\n  font-weight: bolder;\r\n}\r\n.info[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{\r\n  left: 70px;\r\n}\r\n.mail[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::after{\r\n  content: \"mahmoud.hesham693@gmail.com\";\r\n  transition: 0.5s all;\r\n}\r\n.mail[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]::after{\r\n  content: \"Copy to clipboard\";\r\n}\r\n.clipboard[_ngcontent-%COMP%]{\r\n  border-radius: 7px;\r\n  padding: 10px 25px;\r\n  background-color: rgb(160, 145, 145);\r\n  font-weight: bold;\r\n  position: fixed;\r\n  top: 110%;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  transition: 0.5s all;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0Usc0NBQXNDO0VBQ3RDLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFNBQVM7RUFDVCxTQUFTO0VBQ1QsMkJBQTJCO0VBQzNCLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMjpub3QoLnRvcExlZnQpe1xyXG4gIGZvbnQtc2l6ZTogOTBweDtcclxufVxyXG4uaW5mbyBhe1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdHJhbnNpdGlvbjogMC41cyBhbGw7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG4uaW5mbzpob3ZlciBhe1xyXG4gIGxlZnQ6IDcwcHg7XHJcbn1cclxuLm1haWwgYTo6YWZ0ZXJ7XHJcbiAgY29udGVudDogXCJtYWhtb3VkLmhlc2hhbTY5M0BnbWFpbC5jb21cIjtcclxuICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcclxufVxyXG4ubWFpbDpob3ZlciBhOjphZnRlcntcclxuICBjb250ZW50OiBcIkNvcHkgdG8gY2xpcGJvYXJkXCI7XHJcbn1cclxuLmNsaXBib2FyZHtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgcGFkZGluZzogMTBweCAyNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjAsIDE0NSwgMTQ1KTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAxMTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgdHJhbnNpdGlvbjogMC41cyBhbGw7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "8Q47":
/*!*****************************************************!*\
  !*** ./src/app/Components/works/works.component.ts ***!
  \*****************************************************/
/*! exports provided: WorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksComponent", function() { return WorksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Services_my_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/my-service.service */ "IlOd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function WorksComponent_div_4_span_11_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", tag_r3, ", ");
} }
function WorksComponent_div_4_span_11_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r3);
} }
function WorksComponent_div_4_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WorksComponent_div_4_span_11_span_1_Template, 2, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WorksComponent_div_4_span_11_ng_template_2_Template, 2, 1, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r4 = ctx.index;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const proj_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r4 <= proj_r1.tags.length - 2)("ngIfElse", _r6);
} }
function WorksComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Tags: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, WorksComponent_div_4_span_11_Template, 4, 2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const proj_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", proj_r1.imgPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", proj_r1.name + " screenshot");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](proj_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](proj_r1.overview);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", proj_r1.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", proj_r1.liveLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class WorksComponent {
    constructor(_MyServiceService) {
        this._MyServiceService = _MyServiceService;
    }
    ngOnInit() {
        this.getAllProj();
    }
    getAllProj() {
        this._MyServiceService.getAllProjects().subscribe((res) => {
            this.myProjects = res.projects;
        });
    }
}
WorksComponent.ɵfac = function WorksComponent_Factory(t) { return new (t || WorksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_my_service_service__WEBPACK_IMPORTED_MODULE_1__["MyServiceService"])); };
WorksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorksComponent, selectors: [["app-works"]], decls: 5, vars: 1, consts: [["routerLink", "/home", 1, "parentTop", "position-fixed", "top-0", "end-0", "text-white", "pt-5", "pe-5"], [1, "topLeft"], [1, "container", "py-5"], [1, "row", "gy-3"], ["class", "col-md-6", 4, "ngFor", "ngForOf"], [1, "col-md-6"], [1, "project", "text-white", "p-3"], [1, "myImgae", "position-relative"], [1, "w-100", 3, "src", "alt"], [1, "layer", "overflow-hidden", "position-absolute", "p-3", "top-0", "start-0", "end-0", "bottom-0"], [1, "mb-4"], [1, "h6"], [4, "ngFor", "ngForOf"], ["target", "_blank", 1, "text-decoration-none", 3, "href"], [1, "position-absolute", "link", "p-3"], [1, "fa-solid", "fa-link", "text-danger"], [4, "ngIf", "ngIfElse"], ["lastElem", ""]], template: function WorksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WorksComponent_div_4_Template, 15, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.myProjects);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".layer[_ngcontent-%COMP%]{\r\n  \r\n  background-color: rgba(156, 28, 28, 0.5);\r\n  opacity: 0;\r\n  transition: 1s all;\r\n}\r\n.link[_ngcontent-%COMP%]{\r\n  \r\n  background-color: white;\r\n  transition: 1s 3s all;\r\n  top: 110%;\r\n  right: 110%;\r\n}\r\n.layer[_ngcontent-%COMP%]{\r\n  font-weight: bolder;\r\n}\r\n.layer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  left: 110%;\r\n  transition: 1s 1s all;\r\n}\r\n.layer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  top: 110%;\r\n  transition: 1s 2s all;\r\n}\r\n.layer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]::after{\r\n  content: \"\";\r\n  width: 80%;\r\n  height: 3px;\r\n  background-color: white;\r\n  position: absolute;\r\n  top: 105%;\r\n  left: 0;\r\n}\r\n.myImgae[_ngcontent-%COMP%]:hover   .layer[_ngcontent-%COMP%]{\r\n  opacity: 1;\r\n}\r\n.myImgae[_ngcontent-%COMP%]:hover   .layer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n  left: 0;\r\n}\r\n.myImgae[_ngcontent-%COMP%]:hover   .layer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  top: 0;\r\n}\r\n.myImgae[_ngcontent-%COMP%]:hover   .link[_ngcontent-%COMP%]{\r\n  top: 0;\r\n  right: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnREFBZ0Q7RUFDaEQsd0NBQXdDO0VBQ3hDLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHNDQUFzQztFQUN0Qyx1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxXQUFXO0FBQ2I7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0FBQ1Q7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsT0FBTztBQUNUO0FBQ0E7RUFDRSxNQUFNO0FBQ1I7QUFDQTtFQUNFLE1BQU07RUFDTixRQUFRO0FBQ1YiLCJmaWxlIjoid29ya3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYXllcntcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwMSwgMTE3LCAyMTEsIDAuNSk7ICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTYsIDI4LCAyOCwgMC41KTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IDFzIGFsbDtcclxufVxyXG4ubGlua3tcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAsIDMsIDQ5KTsgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiAxcyAzcyBhbGw7XHJcbiAgdG9wOiAxMTAlO1xyXG4gIHJpZ2h0OiAxMTAlO1xyXG59XHJcbi5sYXllcntcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbi5sYXllciBoM3tcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogMTEwJTtcclxuICB0cmFuc2l0aW9uOiAxcyAxcyBhbGw7XHJcbn1cclxuLmxheWVyIHB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMTEwJTtcclxuICB0cmFuc2l0aW9uOiAxcyAycyBhbGw7XHJcbn1cclxuLmxheWVyIGgzOjphZnRlcntcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTA1JTtcclxuICBsZWZ0OiAwO1xyXG59XHJcbi5teUltZ2FlOmhvdmVyIC5sYXllcntcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbi5teUltZ2FlOmhvdmVyIC5sYXllciBoM3tcclxuICBsZWZ0OiAwO1xyXG59XHJcbi5teUltZ2FlOmhvdmVyIC5sYXllciBwe1xyXG4gIHRvcDogMDtcclxufVxyXG4ubXlJbWdhZTpob3ZlciAubGlua3tcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuIl19 */"] });


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

/***/ "IlOd":
/*!************************************************!*\
  !*** ./src/app/Services/my-service.service.ts ***!
  \************************************************/
/*! exports provided: MyServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyServiceService", function() { return MyServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class MyServiceService {
    // showOrNot = new BehaviorSubject(true);
    constructor(_HttpClient) {
        this._HttpClient = _HttpClient;
    }
    getAllProjects() {
        return this._HttpClient.get('assets/JSON_Folder/projects.json');
    }
}
MyServiceService.ɵfac = function MyServiceService_Factory(t) { return new (t || MyServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
MyServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MyServiceService, factory: MyServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sttr":
/*!*****************************************************!*\
  !*** ./src/app/Components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AboutComponent {
    constructor() { }
    ngOnInit() {
        this.getNumberOfYears();
    }
    getNumberOfYears() {
        let d = new Date();
        this.yearsOfExperience = d.getFullYear() - 2020;
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 35, vars: 0, consts: [["routerLink", "/home", 1, "parentTop", "position-fixed", "top-0", "end-0", "text-white", "pt-5", "pe-5"], [1, "topLeft"], [1, "container", "text-white", "vh-100", "d-flex", "align-items-center"], [1, "aboutMe", "ps-5"], [1, "h1", "fw-bolder"], [1, "vh-100", "py-4"], [1, "h-100", "d-flex", "justify-content-end"], ["src", "assets/images/wideProf.jpg", "alt", "image", 1, "img-fluid"], [1, "py-5", "mt-5", "d-flex", "text-white", "justify-content-center"], [1, "w-50", "pt-5", "mt-5"], [1, "mb-5", "h1"], [1, "h6"], [1, "mt-4", "h6"], ["href", "https://www.facebook.com/Routelearning/", "target", "_blank", 1, "text-primary", "text-decoration-none"], [1, "resume", "mt-4"], ["href", "assets/files/Mahmoud_Hesham.pdf", 1, "text-decoration-none", "h6", "mt-4"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " I design & build ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " UI websites. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "aside", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Hi, I'm Mahmoud Hesham. I'm an ambitious and talented Front End Developer who always seeking challenging opportunities where i can fully use my skills. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " I have a Bachelor's degree in Information Systems from Faculty of computer and information science Ain Shams University in 2018. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " I have graduated from Information Technology Institute (ITI) 3 Months and gained many Experience ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " A self learner who is commited with deadlines. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " I have worked on many Projects in windows applications using C# and on many Websites using (HTML5, CSS3, JS, Bootstrap, JQuery, SCSS and Angular) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " I'm working now as a Front End Mentor in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Route");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Academy which is a big place that learned me more and still. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " You can read more about my biography, experience, skills, education and much more in PDF attached bellow: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "My Resume (PDF)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n  font-size: 90px;\r\n}\r\n.resume[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  color: red;\r\n  position: relative;\r\n  left: 0;\r\n  transition: 0.5s all;\r\n}\r\n.resume[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{\r\n  left: 70px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIGgye1xyXG4gIGZvbnQtc2l6ZTogOTBweDtcclxufVxyXG4ucmVzdW1lIGF7XHJcbiAgY29sb3I6IHJlZDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogMDtcclxuICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcclxufVxyXG4ucmVzdW1lOmhvdmVyIGF7XHJcbiAgbGVmdDogNzBweDtcclxufVxyXG4iXX0= */"] });


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


class AppComponent {
    constructor() {
        this.title = 'Portfolio';
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _Components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/home/home.component */ "0zBU");
/* harmony import */ var _Components_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/about/about.component */ "Sttr");
/* harmony import */ var _Components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/contact/contact.component */ "1ngR");
/* harmony import */ var _Components_works_works_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/works/works.component */ "8Q47");
/* harmony import */ var _Components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/notfound/notfound.component */ "/Z40");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _Components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        _Components_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
        _Components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"],
        _Components_works_works_component__WEBPACK_IMPORTED_MODULE_6__["WorksComponent"],
        _Components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_7__["NotfoundComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Components_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/about/about.component */ "Sttr");
/* harmony import */ var _Components_contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/contact/contact.component */ "1ngR");
/* harmony import */ var _Components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/home/home.component */ "0zBU");
/* harmony import */ var _Components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/notfound/notfound.component */ "/Z40");
/* harmony import */ var _Components_works_works_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/works/works.component */ "8Q47");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _Components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'about', component: _Components_about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"] },
    { path: 'contact', component: _Components_contact_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"] },
    { path: 'works', component: _Components_works_works_component__WEBPACK_IMPORTED_MODULE_5__["WorksComponent"] },
    { path: '**', component: _Components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_4__["NotfoundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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