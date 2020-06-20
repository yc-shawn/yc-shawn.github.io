(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: RootComponent, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootComponent", function() { return RootComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portfolio/portfolio.module */ "./src/app/portfolio/portfolio.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");









class RootComponent {
}
RootComponent.ɵfac = function RootComponent_Factory(t) { return new (t || RootComponent)(); };
RootComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RootComponent, selectors: [["yc-root"]], decls: 1, vars: 0, template: function RootComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RootComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'yc-root',
                template: `<router-outlet></router-outlet>`
            }]
    }], null, null); })();
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [RootComponent] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                {
                    path: '',
                    loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./home/home.module */ "./src/app/home/home.module.ts")).then(m => m.HomeModule),
                },
                {
                    path: 'portfolio',
                    loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./portfolio/portfolio.module */ "./src/app/portfolio/portfolio.module.ts")).then(m => m.PortfolioModule),
                },
            ], {
                useHash: true,
            }),
            _home_home_module__WEBPACK_IMPORTED_MODULE_3__["HomeModule"],
            _portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_4__["PortfolioModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [RootComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_3__["HomeModule"],
        _portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_4__["PortfolioModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [RootComponent],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                        {
                            path: '',
                            loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./home/home.module */ "./src/app/home/home.module.ts")).then(m => m.HomeModule),
                        },
                        {
                            path: 'portfolio',
                            loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./portfolio/portfolio.module */ "./src/app/portfolio/portfolio.module.ts")).then(m => m.PortfolioModule),
                        },
                    ], {
                        useHash: true,
                    }),
                    _home_home_module__WEBPACK_IMPORTED_MODULE_3__["HomeModule"],
                    _portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_4__["PortfolioModule"],
                ],
                providers: [],
                bootstrap: [RootComponent]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/home/home-aboutme/home-aboutme.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/home-aboutme/home-aboutme.component.ts ***!
  \*************************************************************/
/*! exports provided: HomeAboutmeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeAboutmeComponent", function() { return HomeAboutmeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function HomeAboutmeComponent_div_35_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span");
} }
const _c0 = function () { return [1, 2, 3, 4, 5]; };
function HomeAboutmeComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeAboutmeComponent_div_35_span_4_Template, 1, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("yc-aboutme__skill-icon yc-aboutme__skill-icon-" + ctx_r0.levels[skill_r1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
} }
class HomeAboutmeComponent {
    constructor() {
        this.skills = [
            'Java',
            'Javascript',
            'Typescript',
            'NodeJS',
            'React/Redux',
            'Ember',
            'Angular',
            'Bootstrap',
            'Jquery',
            'CSS/SASS/SCSS',
            'AWS',
            'MongoDB'
        ];
        this.levels = {
            'Java': 5,
            'Python': 4,
            'C#': 3,
            'Swift': 4,
            'C++': 3,
            'HTML': 5,
            'CSS/SASS/SCSS': 5,
            'Javascript': 5,
            'Typescript': 4,
            'Jquery': 4,
            'NodeJS': 4,
            'React/Redux': 4,
            'SQL/NoSQL': 3,
            'Ember': 4,
            'Angular': 4,
            'Bootstrap': 4,
            'AWS': 3,
            'MongoDB': 3
        };
    }
    ngOnInit() {
    }
}
HomeAboutmeComponent.ɵfac = function HomeAboutmeComponent_Factory(t) { return new (t || HomeAboutmeComponent)(); };
HomeAboutmeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeAboutmeComponent, selectors: [["yc-home-aboutme"]], decls: 59, vars: 1, consts: [["id", "about_me", 1, "yc-section-title"], [1, "yc-aboutme__image"], ["src", "/assets/images/my-portrait.jpg", "alt", "", 1, "face-img"], [1, "yc-aboutme__icon"], ["aria-hidden", "true", 1, "fas", "fa-code"], ["aria-hidden", "true", 1, "fas", "fa-camera-retro"], ["aria-hidden", "true", 1, "far", "fa-clock"], ["aria-hidden", "true", 1, "fas", "fa-pencil-ruler"], [1, "yc-aboutme__intro"], ["href", "https://www.linkedin.com", "target", "_blank"], ["aria-hidden", "true", 1, "fab", "fa-linkedin"], [1, "yc-aboutme__skills"], ["class", "yc-aboutme__skill", 4, "ngFor", "ngForOf"], [1, "yc-aboutme__resume"], ["href", "assets/documents/Yuxiang_Chen_Resume_2020.pdf", "target", "_blank"], [1, "yc-aboutme__others"], [1, "row", "yc-aboutme__gallery"], [1, "col-md-4"], ["src", "assets/images/my-golden-gate-bridge.jpg", "alt", "my-golden-gate-bridge"], [1, "gallery-text"], ["src", "assets/images/suzy.jpg", "alt", "suzy"], ["src", "assets/images/my-creative.jpg", "alt", "creative photo"], [1, "yc-aboutme__skill"], [4, "ngFor", "ngForOf"]], template: function HomeAboutmeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ABOUT ME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Hi, I'm ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Yuxiang Chen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, ", people also call me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Shawn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, ", I'm a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Software Engineer(Front-end) at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Linked");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "I'm strong in design and integration problem-solving. Expert in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Java, Javascript/Typescript, NodeJS, EmberJS, AngularJS/Angular, ReactJS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, ". Skilled in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Front-end Developing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, ". Highly adaptable in quickly changing technical environments with very strong organizational and analytical skills.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, HomeAboutmeComponent_div_35_Template, 5, 6, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "section", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "SEE MY RESUME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "I");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "'m also a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Traveller & Photographer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Pets Lover");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Funny Person");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["[_nghost-%COMP%]   .yc-aboutme__image[_ngcontent-%COMP%] {\n  max-width: 780px;\n  display: flex;\n  margin: 0 auto;\n  align-items: center;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   .yc-aboutme__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 225px;\n  height: 225px;\n  border-radius: 50%;\n  order: 3;\n}\n[_nghost-%COMP%]   .yc-aboutme__image[_ngcontent-%COMP%]   .yc-aboutme__icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  opacity: 0.6;\n  background-color: lightgrey;\n  color: darkgrey;\n  border-radius: 50%;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   .yc-aboutme__image[_ngcontent-%COMP%]   .yc-aboutme__icon[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%], [_nghost-%COMP%]   .yc-aboutme__image[_ngcontent-%COMP%]   .yc-aboutme__icon[_ngcontent-%COMP%]   .far[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #222;\n}\n[_nghost-%COMP%]   .yc-aboutme__image[_ngcontent-%COMP%]   .yc-aboutme__icon[_ngcontent-%COMP%]:nth-of-type(1) {\n  order: 1;\n}\n[_nghost-%COMP%]   .yc-aboutme__image[_ngcontent-%COMP%]   .yc-aboutme__icon[_ngcontent-%COMP%]:nth-of-type(2) {\n  order: 2;\n}\n[_nghost-%COMP%]   .yc-aboutme__image[_ngcontent-%COMP%]   .yc-aboutme__icon[_ngcontent-%COMP%]:nth-of-type(3) {\n  order: 4;\n}\n[_nghost-%COMP%]   .yc-aboutme__image[_ngcontent-%COMP%]   .yc-aboutme__icon[_ngcontent-%COMP%]:nth-of-type(4) {\n  order: 5;\n}\n@media screen and (max-width: 650px) {\n  [_nghost-%COMP%]   .yc-aboutme__image[_ngcontent-%COMP%] {\n    display: block;\n    text-align: center;\n  }\n  [_nghost-%COMP%]   .yc-aboutme__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: block;\n    margin: 0 auto 30px auto;\n  }\n  [_nghost-%COMP%]   .yc-aboutme__image[_ngcontent-%COMP%]   .yc-aboutme__icon[_ngcontent-%COMP%] {\n    margin: 5px;\n  }\n}\n[_nghost-%COMP%]   .yc-aboutme__intro[_ngcontent-%COMP%] {\n  max-width: 620px;\n  padding: 0 15px;\n  margin: 50px auto;\n  font-size: 20px;\n  text-align: center;\n  font-weight: 300;\n}\n[_nghost-%COMP%]   .yc-aboutme__intro[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n}\n[_nghost-%COMP%]   .yc-aboutme__intro[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]    > .fa-linkedin[_ngcontent-%COMP%] {\n  color: #0074d9;\n  font-size: 22px;\n  margin-left: 2px;\n  text-decoration: inherit;\n  -webkit-text-decoration-color: black;\n          text-decoration-color: black;\n}\n[_nghost-%COMP%]   .yc-aboutme__skills[_ngcontent-%COMP%] {\n  max-width: 740px;\n  margin: 100px auto;\n  color: #999;\n  overflow: auto;\n}\n[_nghost-%COMP%]   .yc-aboutme__skills[_ngcontent-%COMP%]   .yc-aboutme__skill[_ngcontent-%COMP%] {\n  width: 23%;\n  padding-left: 10%;\n  float: left;\n}\n[_nghost-%COMP%]   .yc-aboutme__skills[_ngcontent-%COMP%]   .yc-aboutme__skill[_ngcontent-%COMP%]   .yc-aboutme__skill-icon-1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(n+2) {\n  background-color: lightgrey;\n}\n[_nghost-%COMP%]   .yc-aboutme__skills[_ngcontent-%COMP%]   .yc-aboutme__skill[_ngcontent-%COMP%]   .yc-aboutme__skill-icon-2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(n+3) {\n  background-color: lightgrey;\n}\n[_nghost-%COMP%]   .yc-aboutme__skills[_ngcontent-%COMP%]   .yc-aboutme__skill[_ngcontent-%COMP%]   .yc-aboutme__skill-icon-3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(n+4) {\n  background-color: lightgrey;\n}\n[_nghost-%COMP%]   .yc-aboutme__skills[_ngcontent-%COMP%]   .yc-aboutme__skill[_ngcontent-%COMP%]   .yc-aboutme__skill-icon-4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(n+5) {\n  background-color: lightgrey;\n}\n[_nghost-%COMP%]   .yc-aboutme__skills[_ngcontent-%COMP%]   .yc-aboutme__skill[_ngcontent-%COMP%]   .yc-aboutme__skill-icon-5[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(n+6) {\n  background-color: lightgrey;\n}\n[_nghost-%COMP%]   .yc-aboutme__skills[_ngcontent-%COMP%]   .yc-aboutme__skill[_ngcontent-%COMP%]   .yc-aboutme__skill-icon[_ngcontent-%COMP%] {\n  margin: 2px 0 30px;\n}\n[_nghost-%COMP%]   .yc-aboutme__skills[_ngcontent-%COMP%]   .yc-aboutme__skill[_ngcontent-%COMP%]   .yc-aboutme__skill-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  display: inline-block;\n  background-color: black;\n  margin-right: 5px;\n  border-radius: 50%;\n}\n[_nghost-%COMP%]   .yc-aboutme__skills[_ngcontent-%COMP%]   .yc-aboutme__skill[_ngcontent-%COMP%]   .yc-aboutme__skill-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n  width: 10px;\n  height: 10px;\n  content: \"\";\n  display: block;\n  background: #fff;\n  border-radius: 50%;\n  margin: 2px;\n}\n@media screen and (max-width: 541px) {\n  [_nghost-%COMP%]   .yc-aboutme__skills[_ngcontent-%COMP%] {\n    margin-left: 25px;\n  }\n  [_nghost-%COMP%]   .yc-aboutme__skills[_ngcontent-%COMP%]   .yc-aboutme__skill[_ngcontent-%COMP%] {\n    width: 45%;\n    padding-left: 5%;\n  }\n}\n[_nghost-%COMP%]   .yc-aboutme__resume[_ngcontent-%COMP%] {\n  max-width: 300px;\n  margin: 0 auto 0 auto;\n  padding: 10px 0 70px 0;\n  text-align: center;\n}\n[_nghost-%COMP%]   .yc-aboutme__resume[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 20px;\n  color: black;\n  background-color: white;\n  padding: 0.6em 0.6em;\n  border: black solid 4px;\n}\n[_nghost-%COMP%]   .yc-aboutme__resume[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  color: white;\n  background-color: black;\n}\n[_nghost-%COMP%]   .yc-aboutme__others[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  font-family: \"Palatino Linotype\", \"Book Antiqua\", Palatino, serif;\n}\n[_nghost-%COMP%]   .yc-aboutme__others[_ngcontent-%COMP%]    > b[_ngcontent-%COMP%] {\n  color: #e1c184;\n  font-size: 36px;\n}\n[_nghost-%COMP%]   .yc-aboutme__gallery[_ngcontent-%COMP%] {\n  margin: 0;\n}\n[_nghost-%COMP%]   .yc-aboutme__gallery[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%] {\n  padding: 0;\n  position: relative;\n}\n[_nghost-%COMP%]   .yc-aboutme__gallery[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%]:hover   .gallery-text[_ngcontent-%COMP%] {\n  display: block;\n  background-color: rgba(100, 100, 100, 0.6);\n}\n[_nghost-%COMP%]   .yc-aboutme__gallery[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%]:hover   .gallery-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  -webkit-animation: ease-show-up 0.3s 0s ease forwards;\n          animation: ease-show-up 0.3s 0s ease forwards;\n}\n@-webkit-keyframes ease-show-up {\n  from {\n    transform: translate(-50%, 0%);\n  }\n  to {\n    transform: translate(-50%, -50%);\n  }\n}\n@keyframes ease-show-up {\n  from {\n    transform: translate(-50%, 0%);\n  }\n  to {\n    transform: translate(-50%, -50%);\n  }\n}\n[_nghost-%COMP%]   .yc-aboutme__gallery[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .yc-aboutme__gallery[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%]   .gallery-text[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: none;\n}\n[_nghost-%COMP%]   .yc-aboutme__gallery[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%]   .gallery-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  font-size: 28px;\n  color: white;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLWFib3V0bWUvRDpcXF9zaGF3blxcd3NcXHljLXNoYXduLmdpdGh1Yi5pby9zcmNcXGFwcFxcaG9tZVxcaG9tZS1hYm91dG1lXFxob21lLWFib3V0bWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS1hYm91dG1lL2hvbWUtYWJvdXRtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDQUo7QURDSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDQ047QURDSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ047QURBTTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDRVI7QURBTTtFQUNFLFFBQUE7QUNFUjtBREFNO0VBQ0UsUUFBQTtBQ0VSO0FEQU07RUFDRSxRQUFBO0FDRVI7QURBTTtFQUNFLFFBQUE7QUNFUjtBRENJO0VBdkNGO0lBd0NJLGNBQUE7SUFDQSxrQkFBQTtFQ0VKO0VEREk7SUFDRSxjQUFBO0lBQ0Esd0JBQUE7RUNHTjtFRERJO0lBQ0UsV0FBQTtFQ0dOO0FBQ0Y7QURBRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNFSjtBRERJO0VBQ0UsWUFBQTtBQ0dOO0FERk07RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0FDSVI7QURBRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0VKO0FEREk7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDR047QUREUTtFQUNFLDJCQUFBO0FDR1Y7QURKUTtFQUNFLDJCQUFBO0FDTVY7QURQUTtFQUNFLDJCQUFBO0FDU1Y7QURWUTtFQUNFLDJCQUFBO0FDWVY7QURiUTtFQUNFLDJCQUFBO0FDZVY7QURaTTtFQUNFLGtCQUFBO0FDY1I7QURiUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNlVjtBRGRVO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDZ0JaO0FEWEk7RUFuQ0Y7SUFvQ0ksaUJBQUE7RUNjSjtFRGJJO0lBQ0UsVUFBQTtJQUNBLGdCQUFBO0VDZU47QUFDRjtBRFpFO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNjSjtBRGJJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtBQ2VOO0FEZE07RUFDRSxZQUFBO0VBQ0EsdUJBQUE7QUNnQlI7QURaRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlFQUFBO0FDY0o7QURiSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDZU47QURaRTtFQUNFLFNBQUE7QUNjSjtBRGJJO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FDZU47QURkTTtFQUNFLGNBQUE7RUFDQSwwQ0FBQTtBQ2dCUjtBRGZRO0VBU0UscURBQUE7VUFBQSw2Q0FBQTtBQ1NWO0FEakJVO0VBQ0U7SUFDRSw4QkFBQTtFQ21CWjtFRGpCVTtJQUNFLGdDQUFBO0VDbUJaO0FBQ0Y7QUR6QlU7RUFDRTtJQUNFLDhCQUFBO0VDbUJaO0VEakJVO0lBQ0UsZ0NBQUE7RUNtQlo7QUFDRjtBRGRNO0VBQ0UsV0FBQTtBQ2dCUjtBRGRNO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQ2dCUjtBRGZRO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNpQlYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUtYWJvdXRtZS9ob21lLWFib3V0bWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLnljLWFib3V0bWVfX2ltYWdlIHtcclxuICAgIG1heC13aWR0aDogNzgwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDIyNXB4O1xyXG4gICAgICBoZWlnaHQ6IDIyNXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIG9yZGVyOiAzO1xyXG4gICAgfVxyXG4gICAgLnljLWFib3V0bWVfX2ljb24ge1xyXG4gICAgICB3aWR0aDogNjBweDtcclxuICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgICAgY29sb3I6IGRhcmtncmV5O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgLmZhcywgLmZhciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgICB9XHJcbiAgICAgICY6bnRoLW9mLXR5cGUoMSkge1xyXG4gICAgICAgIG9yZGVyOiAxO1xyXG4gICAgICB9XHJcbiAgICAgICY6bnRoLW9mLXR5cGUoMikge1xyXG4gICAgICAgIG9yZGVyOiAyO1xyXG4gICAgICB9XHJcbiAgICAgICY6bnRoLW9mLXR5cGUoMykge1xyXG4gICAgICAgIG9yZGVyOiA0O1xyXG4gICAgICB9XHJcbiAgICAgICY6bnRoLW9mLXR5cGUoNCkge1xyXG4gICAgICAgIG9yZGVyOiA1O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDMwcHggYXV0bztcclxuICAgICAgfVxyXG4gICAgICAueWMtYWJvdXRtZV9faWNvbiB7XHJcbiAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnljLWFib3V0bWVfX2ludHJvIHtcclxuICAgIG1heC13aWR0aDogNjIwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICBtYXJnaW46IDUwcHggYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBhIHtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICA+IC5mYS1saW5rZWRpbiB7XHJcbiAgICAgICAgY29sb3I6ICMwMDc0ZDk7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogYmxhY2s7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnljLWFib3V0bWVfX3NraWxscyB7XHJcbiAgICBtYXgtd2lkdGg6IDc0MHB4O1xyXG4gICAgbWFyZ2luOiAxMDBweCBhdXRvO1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIC55Yy1hYm91dG1lX19za2lsbCB7XHJcbiAgICAgIHdpZHRoOiAyMyU7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCA1IHtcclxuICAgICAgICAueWMtYWJvdXRtZV9fc2tpbGwtaWNvbi0jeyRpfSBzcGFuOm50aC1jaGlsZChuKyN7JGkrMX0pIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgICAgICB9ICBcclxuICAgICAgfVxyXG4gICAgICAueWMtYWJvdXRtZV9fc2tpbGwtaWNvbiB7XHJcbiAgICAgICAgbWFyZ2luOiAycHggMCAzMHB4O1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgd2lkdGg6IDE0cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gICBcclxuICAgIH1cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU0MXB4KSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgICAueWMtYWJvdXRtZV9fc2tpbGwge1xyXG4gICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAueWMtYWJvdXRtZV9fcmVzdW1lIHtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0byAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4IDAgNzBweCAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgPiBhIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgcGFkZGluZzogMC42ZW0gMC42ZW07XHJcbiAgICAgIGJvcmRlcjogYmxhY2sgc29saWQgNHB4O1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnljLWFib3V0bWVfX290aGVycyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUGFsYXRpbm8gTGlub3R5cGVcIiwgXCJCb29rIEFudGlxdWFcIiwgUGFsYXRpbm8sIHNlcmlmO1xyXG4gICAgPiBiIHtcclxuICAgICAgY29sb3I6ICNlMWMxODQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIH1cclxuICB9XHJcbiAgLnljLWFib3V0bWVfX2dhbGxlcnkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgLmNvbC1tZC00IHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAmOmhvdmVyIC5nYWxsZXJ5LXRleHQge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAwLCAxMDAsIDEwMCwgMC42KTtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIEBrZXlmcmFtZXMgZWFzZS1zaG93LXVwIHtcclxuICAgICAgICAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTAlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0byB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGFuaW1hdGlvbjogZWFzZS1zaG93LXVwIDAuM3MgMHMgZWFzZSBmb3J3YXJkcztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgICAuZ2FsbGVyeS10ZXh0IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiOmhvc3QgLnljLWFib3V0bWVfX2ltYWdlIHtcbiAgbWF4LXdpZHRoOiA3ODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbjpob3N0IC55Yy1hYm91dG1lX19pbWFnZSBpbWcge1xuICB3aWR0aDogMjI1cHg7XG4gIGhlaWdodDogMjI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3JkZXI6IDM7XG59XG46aG9zdCAueWMtYWJvdXRtZV9faW1hZ2UgLnljLWFib3V0bWVfX2ljb24ge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBvcGFjaXR5OiAwLjY7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbiAgY29sb3I6IGRhcmtncmV5O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjpob3N0IC55Yy1hYm91dG1lX19pbWFnZSAueWMtYWJvdXRtZV9faWNvbiAuZmFzLCA6aG9zdCAueWMtYWJvdXRtZV9faW1hZ2UgLnljLWFib3V0bWVfX2ljb24gLmZhciB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICMyMjI7XG59XG46aG9zdCAueWMtYWJvdXRtZV9faW1hZ2UgLnljLWFib3V0bWVfX2ljb246bnRoLW9mLXR5cGUoMSkge1xuICBvcmRlcjogMTtcbn1cbjpob3N0IC55Yy1hYm91dG1lX19pbWFnZSAueWMtYWJvdXRtZV9faWNvbjpudGgtb2YtdHlwZSgyKSB7XG4gIG9yZGVyOiAyO1xufVxuOmhvc3QgLnljLWFib3V0bWVfX2ltYWdlIC55Yy1hYm91dG1lX19pY29uOm50aC1vZi10eXBlKDMpIHtcbiAgb3JkZXI6IDQ7XG59XG46aG9zdCAueWMtYWJvdXRtZV9faW1hZ2UgLnljLWFib3V0bWVfX2ljb246bnRoLW9mLXR5cGUoNCkge1xuICBvcmRlcjogNTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XG4gIDpob3N0IC55Yy1hYm91dG1lX19pbWFnZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIDpob3N0IC55Yy1hYm91dG1lX19pbWFnZSBpbWcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMCBhdXRvIDMwcHggYXV0bztcbiAgfVxuICA6aG9zdCAueWMtYWJvdXRtZV9faW1hZ2UgLnljLWFib3V0bWVfX2ljb24ge1xuICAgIG1hcmdpbjogNXB4O1xuICB9XG59XG46aG9zdCAueWMtYWJvdXRtZV9faW50cm8ge1xuICBtYXgtd2lkdGg6IDYyMHB4O1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbjpob3N0IC55Yy1hYm91dG1lX19pbnRybyBhIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuOmhvc3QgLnljLWFib3V0bWVfX2ludHJvIGEgPiAuZmEtbGlua2VkaW4ge1xuICBjb2xvcjogIzAwNzRkOTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogYmxhY2s7XG59XG46aG9zdCAueWMtYWJvdXRtZV9fc2tpbGxzIHtcbiAgbWF4LXdpZHRoOiA3NDBweDtcbiAgbWFyZ2luOiAxMDBweCBhdXRvO1xuICBjb2xvcjogIzk5OTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG46aG9zdCAueWMtYWJvdXRtZV9fc2tpbGxzIC55Yy1hYm91dG1lX19za2lsbCB7XG4gIHdpZHRoOiAyMyU7XG4gIHBhZGRpbmctbGVmdDogMTAlO1xuICBmbG9hdDogbGVmdDtcbn1cbjpob3N0IC55Yy1hYm91dG1lX19za2lsbHMgLnljLWFib3V0bWVfX3NraWxsIC55Yy1hYm91dG1lX19za2lsbC1pY29uLTEgc3BhbjpudGgtY2hpbGQobisyKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbn1cbjpob3N0IC55Yy1hYm91dG1lX19za2lsbHMgLnljLWFib3V0bWVfX3NraWxsIC55Yy1hYm91dG1lX19za2lsbC1pY29uLTIgc3BhbjpudGgtY2hpbGQobiszKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbn1cbjpob3N0IC55Yy1hYm91dG1lX19za2lsbHMgLnljLWFib3V0bWVfX3NraWxsIC55Yy1hYm91dG1lX19za2lsbC1pY29uLTMgc3BhbjpudGgtY2hpbGQobis0KSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbn1cbjpob3N0IC55Yy1hYm91dG1lX19za2lsbHMgLnljLWFib3V0bWVfX3NraWxsIC55Yy1hYm91dG1lX19za2lsbC1pY29uLTQgc3BhbjpudGgtY2hpbGQobis1KSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbn1cbjpob3N0IC55Yy1hYm91dG1lX19za2lsbHMgLnljLWFib3V0bWVfX3NraWxsIC55Yy1hYm91dG1lX19za2lsbC1pY29uLTUgc3BhbjpudGgtY2hpbGQobis2KSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbn1cbjpob3N0IC55Yy1hYm91dG1lX19za2lsbHMgLnljLWFib3V0bWVfX3NraWxsIC55Yy1hYm91dG1lX19za2lsbC1pY29uIHtcbiAgbWFyZ2luOiAycHggMCAzMHB4O1xufVxuOmhvc3QgLnljLWFib3V0bWVfX3NraWxscyAueWMtYWJvdXRtZV9fc2tpbGwgLnljLWFib3V0bWVfX3NraWxsLWljb24gc3BhbiB7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG46aG9zdCAueWMtYWJvdXRtZV9fc2tpbGxzIC55Yy1hYm91dG1lX19za2lsbCAueWMtYWJvdXRtZV9fc2tpbGwtaWNvbiBzcGFuOmFmdGVyIHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiAycHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NDFweCkge1xuICA6aG9zdCAueWMtYWJvdXRtZV9fc2tpbGxzIHtcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcbiAgfVxuICA6aG9zdCAueWMtYWJvdXRtZV9fc2tpbGxzIC55Yy1hYm91dG1lX19za2lsbCB7XG4gICAgd2lkdGg6IDQ1JTtcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuICB9XG59XG46aG9zdCAueWMtYWJvdXRtZV9fcmVzdW1lIHtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xuICBwYWRkaW5nOiAxMHB4IDAgNzBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCAueWMtYWJvdXRtZV9fcmVzdW1lID4gYSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuNmVtIDAuNmVtO1xuICBib3JkZXI6IGJsYWNrIHNvbGlkIDRweDtcbn1cbjpob3N0IC55Yy1hYm91dG1lX19yZXN1bWUgPiBhOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbjpob3N0IC55Yy1hYm91dG1lX19vdGhlcnMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBhbGF0aW5vIExpbm90eXBlXCIsIFwiQm9vayBBbnRpcXVhXCIsIFBhbGF0aW5vLCBzZXJpZjtcbn1cbjpob3N0IC55Yy1hYm91dG1lX19vdGhlcnMgPiBiIHtcbiAgY29sb3I6ICNlMWMxODQ7XG4gIGZvbnQtc2l6ZTogMzZweDtcbn1cbjpob3N0IC55Yy1hYm91dG1lX19nYWxsZXJ5IHtcbiAgbWFyZ2luOiAwO1xufVxuOmhvc3QgLnljLWFib3V0bWVfX2dhbGxlcnkgLmNvbC1tZC00IHtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuOmhvc3QgLnljLWFib3V0bWVfX2dhbGxlcnkgLmNvbC1tZC00OmhvdmVyIC5nYWxsZXJ5LXRleHQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDAsIDEwMCwgMTAwLCAwLjYpO1xufVxuOmhvc3QgLnljLWFib3V0bWVfX2dhbGxlcnkgLmNvbC1tZC00OmhvdmVyIC5nYWxsZXJ5LXRleHQgc3BhbiB7XG4gIGFuaW1hdGlvbjogZWFzZS1zaG93LXVwIDAuM3MgMHMgZWFzZSBmb3J3YXJkcztcbn1cbkBrZXlmcmFtZXMgZWFzZS1zaG93LXVwIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgfVxufVxuOmhvc3QgLnljLWFib3V0bWVfX2dhbGxlcnkgLmNvbC1tZC00IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgLnljLWFib3V0bWVfX2dhbGxlcnkgLmNvbC1tZC00IC5nYWxsZXJ5LXRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogbm9uZTtcbn1cbjpob3N0IC55Yy1hYm91dG1lX19nYWxsZXJ5IC5jb2wtbWQtNCAuZ2FsbGVyeS10ZXh0IHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeAboutmeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'yc-home-aboutme',
                templateUrl: './home-aboutme.component.html',
                styleUrls: ['./home-aboutme.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/home-comments/home-comments.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/home/home-comments/home-comments.component.ts ***!
  \***************************************************************/
/*! exports provided: HomeCommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeCommentsComponent", function() { return HomeCommentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HomeCommentsComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeCommentsComponent.ɵfac = function HomeCommentsComponent_Factory(t) { return new (t || HomeCommentsComponent)(); };
HomeCommentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeCommentsComponent, selectors: [["yc-home-comments"]], decls: 2, vars: 0, consts: [["id", "comments", 1, "yc-section-title"]], template: function HomeCommentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "COMMENTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS1jb21tZW50cy9ob21lLWNvbW1lbnRzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeCommentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'yc-home-comments',
                templateUrl: './home-comments.component.html',
                styleUrls: ['./home-comments.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/home-contact/home-contact.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/home-contact/home-contact.component.ts ***!
  \*************************************************************/
/*! exports provided: HomeContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeContactComponent", function() { return HomeContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");








class HomeContactComponent {
    constructor(_http) {
        this._http = _http;
        this.id = 'contact';
        this.contact = {
            name: null,
            _replyto: null,
            message: null,
        };
    }
    ngOnInit() {
    }
    onSubmit() {
        console.log('Submit!', this.contact);
        if (this.contact.name && this.contact._replyto) {
            this._http
                .post('https://formspree.io/ychen248@buffalo.edu', this.contact)
                .subscribe();
        }
    }
}
HomeContactComponent.ɵfac = function HomeContactComponent_Factory(t) { return new (t || HomeContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
HomeContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeContactComponent, selectors: [["yc-home-contact"]], hostVars: 1, hostBindings: function HomeContactComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);
    } }, decls: 20, vars: 3, consts: [[1, "yc-contact__form"], [1, "yc-contact__form-content"], ["appearance", "standard", 1, "yc-contact__form-field"], ["matInput", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "rows", "4", 3, "ngModel", "ngModelChange"], [1, "yc-contact__form-actions"], ["mat-raised-button", "", "color", "primary", 1, "yc-contact__form-submit", 3, "click"]], template: function HomeContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Your name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeContactComponent_Template_input_ngModelChange_8_listener($event) { return ctx.contact.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeContactComponent_Template_input_ngModelChange_12_listener($event) { return ctx.contact._replyto = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "textarea", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeContactComponent_Template_textarea_ngModelChange_16_listener($event) { return ctx.contact.message = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-actions", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeContactComponent_Template_button_click_18_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contact.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contact._replyto);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contact.message);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  background-image: url(\"/assets/images/road_sit_right_16_8.jpg\");\n  background-size: cover;\n  background-position: center center;\n  width: 100%;\n  height: 0;\n  padding-top: 50%;\n  position: relative;\n}\n@media screen and (max-width: 992px) {\n  [_nghost-%COMP%] {\n    height: auto;\n    padding: 20px 0;\n  }\n}\n[_nghost-%COMP%]   .yc-contact__form[_ngcontent-%COMP%] {\n  width: 30%;\n  position: absolute;\n  top: 50%;\n  left: 20%;\n  transform: translateY(-50%);\n  padding: 15px;\n  margin: 0;\n}\n[_nghost-%COMP%]   .yc-contact__form[_ngcontent-%COMP%]   .yc-contact__form-content[_ngcontent-%COMP%], [_nghost-%COMP%]   .yc-contact__form[_ngcontent-%COMP%]   .yc-contact__form-actions[_ngcontent-%COMP%] {\n  margin: 0 16px;\n}\n[_nghost-%COMP%]   .yc-contact__form[_ngcontent-%COMP%]   .yc-contact__form-field[_ngcontent-%COMP%], [_nghost-%COMP%]   .yc-contact__form[_ngcontent-%COMP%]   .yc-contact__form-submit[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media screen and (max-width: 992px) {\n  [_nghost-%COMP%]   .yc-contact__form[_ngcontent-%COMP%] {\n    position: static;\n    transform: none;\n    width: 45%;\n    margin: 0 20px;\n  }\n}\n@media screen and (max-width: 768px) {\n  [_nghost-%COMP%]   .yc-contact__form[_ngcontent-%COMP%] {\n    opacity: 0.9;\n    width: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLWNvbnRhY3QvRDpcXF9zaGF3blxcd3NcXHljLXNoYXduLmdpdGh1Yi5pby9zcmNcXGFwcFxcaG9tZVxcaG9tZS1jb250YWN0XFxob21lLWNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS1jb250YWN0L2hvbWUtY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSwrREFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDRjtBREFFO0VBVEY7SUFVSSxZQUFBO0lBQ0EsZUFBQTtFQ0dGO0FBQ0Y7QURERTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQ0dKO0FERkk7O0VBRUUsY0FBQTtBQ0lOO0FERkk7O0VBRUUsV0FBQTtBQ0lOO0FERkk7RUFoQkY7SUFpQkksZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsVUFBQTtJQUNBLGNBQUE7RUNLSjtBQUNGO0FESkk7RUF0QkY7SUF1QkksWUFBQTtJQUNBLFdBQUE7RUNPSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLWNvbnRhY3QvaG9tZS1jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvcm9hZF9zaXRfcmlnaHRfMTZfOC5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHBhZGRpbmctdG9wOiA1MCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgfVxyXG5cclxuICAueWMtY29udGFjdF9fZm9ybSB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiAyMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgLnljLWNvbnRhY3RfX2Zvcm0tY29udGVudCxcclxuICAgIC55Yy1jb250YWN0X19mb3JtLWFjdGlvbnMge1xyXG4gICAgICBtYXJnaW46IDAgMTZweDtcclxuICAgIH1cclxuICAgIC55Yy1jb250YWN0X19mb3JtLWZpZWxkLFxyXG4gICAgLnljLWNvbnRhY3RfX2Zvcm0tc3VibWl0IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgICB3aWR0aDogYXV0bztcclxuICAgIH1cclxuICB9XHJcbn1cclxuICBcclxuICAiLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9yb2FkX3NpdF9yaWdodF8xNl84LmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMDtcbiAgcGFkZGluZy10b3A6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgOmhvc3Qge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG4gIH1cbn1cbjpob3N0IC55Yy1jb250YWN0X19mb3JtIHtcbiAgd2lkdGg6IDMwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMjAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogMDtcbn1cbjpob3N0IC55Yy1jb250YWN0X19mb3JtIC55Yy1jb250YWN0X19mb3JtLWNvbnRlbnQsXG46aG9zdCAueWMtY29udGFjdF9fZm9ybSAueWMtY29udGFjdF9fZm9ybS1hY3Rpb25zIHtcbiAgbWFyZ2luOiAwIDE2cHg7XG59XG46aG9zdCAueWMtY29udGFjdF9fZm9ybSAueWMtY29udGFjdF9fZm9ybS1maWVsZCxcbjpob3N0IC55Yy1jb250YWN0X19mb3JtIC55Yy1jb250YWN0X19mb3JtLXN1Ym1pdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgOmhvc3QgLnljLWNvbnRhY3RfX2Zvcm0ge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICAgIHdpZHRoOiA0NSU7XG4gICAgbWFyZ2luOiAwIDIwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIDpob3N0IC55Yy1jb250YWN0X19mb3JtIHtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'yc-home-contact',
                templateUrl: './home-contact.component.html',
                styleUrls: ['./home-contact.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['id']
        }] }); })();


/***/ }),

/***/ "./src/app/home/home-footer/home-footer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/home-footer/home-footer.component.ts ***!
  \***********************************************************/
/*! exports provided: HomeFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeFooterComponent", function() { return HomeFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HomeFooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeFooterComponent.ɵfac = function HomeFooterComponent_Factory(t) { return new (t || HomeFooterComponent)(); };
HomeFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeFooterComponent, selectors: [["yc-home-footer"]], decls: 17, vars: 0, consts: [[1, "yc-footer__social"], ["href", "https://www.linkedin.com/in/yc-shawn", "target", "_blank"], ["aria-hidden", "true", 1, "fab", "fa-linkedin"], ["href", "https://www.facebook.com/shawnloatrchen", "target", "_blank"], ["aria-hidden", "true", 1, "fab", "fa-facebook-square"], ["href", "https://www.instagram.com/shawnloatr/", "target", "_blank"], ["aria-hidden", "true", 1, "fab", "fa-instagram"], ["href", "https://www.youtube.com/channel/UCQLEPbkEmwz4mABAV-kzQTQ", "target", "_blank"], ["aria-hidden", "true", 1, "fab", "fa-youtube-square"], ["href", "https://github.com/yc-shawn", "target", "_blank"], ["aria-hidden", "true", 1, "fab", "fa-github"], [1, "yc-footer__contact"], [1, "yc-footer__copyright"]], template: function HomeFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ychshawn@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Sunnyvale, CA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u00A9 2017-2020 Yuxiang Chen all rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  padding: 40px 0 20px 0;\n  background-color: #26262a;\n  color: white;\n}\n[_nghost-%COMP%]   .yc-footer__social[_ngcontent-%COMP%] {\n  max-width: 400px;\n  margin: 0px auto;\n  padding: 0 10px;\n  display: flex;\n  justify-content: space-around;\n}\n[_nghost-%COMP%]   .yc-footer__social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  line-height: 50px;\n  height: 45px;\n}\n[_nghost-%COMP%]   .yc-footer__social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transform: scale(1.25);\n}\n[_nghost-%COMP%]   .yc-footer__social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%] {\n  font-size: 35px;\n  color: white;\n}\n[_nghost-%COMP%]   .yc-footer__contact[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 20px;\n}\n[_nghost-%COMP%]   .yc-footer__copyright[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLWZvb3Rlci9EOlxcX3NoYXduXFx3c1xceWMtc2hhd24uZ2l0aHViLmlvL3NyY1xcYXBwXFxob21lXFxob21lLWZvb3RlclxcaG9tZS1mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS1mb290ZXIvaG9tZS1mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNDRjtBREFFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUNFSjtBRERJO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDR047QURGTTtFQUNFLHNCQUFBO0FDSVI7QURGTTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDSVI7QURBRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQ0VKO0FEQUU7RUFDRSxrQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLWZvb3Rlci9ob21lLWZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiA0MHB4IDAgMjBweCAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MmE7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIC55Yy1mb290ZXJfX3NvY2lhbCB7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGEge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMjUpXHJcbiAgICAgIH1cclxuICAgICAgLmZhYiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAueWMtZm9vdGVyX19jb250YWN0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICB9XHJcbiAgLnljLWZvb3Rlcl9fY29weXJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiA0MHB4IDAgMjBweCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjJhO1xuICBjb2xvcjogd2hpdGU7XG59XG46aG9zdCAueWMtZm9vdGVyX19zb2NpYWwge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuOmhvc3QgLnljLWZvb3Rlcl9fc29jaWFsIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuOmhvc3QgLnljLWZvb3Rlcl9fc29jaWFsIGE6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMjUpO1xufVxuOmhvc3QgLnljLWZvb3Rlcl9fc29jaWFsIGEgLmZhYiB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuOmhvc3QgLnljLWZvb3Rlcl9fY29udGFjdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAyMHB4O1xufVxuOmhvc3QgLnljLWZvb3Rlcl9fY29weXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'yc-home-footer',
                templateUrl: './home-footer.component.html',
                styleUrls: ['./home-footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/home-header/home-header.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/home-header/home-header.component.ts ***!
  \***********************************************************/
/*! exports provided: HomeHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeHeaderComponent", function() { return HomeHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HomeHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeHeaderComponent.ɵfac = function HomeHeaderComponent_Factory(t) { return new (t || HomeHeaderComponent)(); };
HomeHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeHeaderComponent, selectors: [["yc-home-header"]], decls: 6, vars: 0, consts: [[1, "yc-header__logo"], [1, "yc-header__intro"], [1, "yc-header__intro-name"], [1, "yc-header__intro-title"]], template: function HomeHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "YUXIANG CHEN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "SOFTWARE / FRONTEND / ENGINEER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(\"/assets/images/beach-with-surfing-board.jpg\") center center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 95vh;\n  position: relative;\n  text-align: center;\n  overflow: hidden;\n  background-attachment: fixed;\n}\n[_nghost-%COMP%]   .yc-header__intro[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n}\n[_nghost-%COMP%]   .yc-header__intro[_ngcontent-%COMP%]   .yc-header__intro-name[_ngcontent-%COMP%] {\n  font-size: 72px;\n  letter-spacing: 0.05em;\n  padding: 0.5em 0.2em;\n  border: white solid 10px;\n  white-space: nowrap;\n}\n[_nghost-%COMP%]   .yc-header__intro[_ngcontent-%COMP%]   .yc-header__intro-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  color: white;\n  line-height: 1;\n  white-space: nowrap;\n}\n[_nghost-%COMP%]   .yc-header__logo[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 40px;\n  position: absolute;\n  top: 20px;\n  left: 30px;\n  background: url(\"/assets/images/logo.png\") center center;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n@media screen and (max-width: 650px) {\n  [_nghost-%COMP%]   .yc-header__intro[_ngcontent-%COMP%]   .yc-header__intro-name[_ngcontent-%COMP%] {\n    font-size: 32px;\n    border-width: 5px;\n  }\n  [_nghost-%COMP%]   .yc-header__intro[_ngcontent-%COMP%]   .yc-header__intro-title[_ngcontent-%COMP%] {\n    font-weight: 500;\n    font-size: 13px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLWhlYWRlci9EOlxcX3NoYXduXFx3c1xceWMtc2hhd24uZ2l0aHViLmlvL3NyY1xcYXBwXFxob21lXFxob21lLWhlYWRlclxcaG9tZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS1oZWFkZXIvaG9tZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EscUlBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQ0NGO0FEQ0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0FDQ0o7QURDSTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBQ0NOO0FERUk7RUFDRSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0FOO0FESUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSx3REFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QUNGSjtBREtFO0VBRUk7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUNKTjtFRE1JO0lBQ0UsZ0JBQUE7SUFDQSxlQUFBO0VDSk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS1oZWFkZXIvaG9tZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMC41KSApLCB1cmwoXCIvYXNzZXRzL2ltYWdlcy9iZWFjaC13aXRoLXN1cmZpbmctYm9hcmQuanBnXCIpIGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogOTV2aDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuXHJcbiAgLnljLWhlYWRlcl9faW50cm8ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAueWMtaGVhZGVyX19pbnRyby1uYW1lIHtcclxuICAgICAgZm9udC1zaXplOiA3MnB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xyXG4gICAgICBwYWRkaW5nOiAwLjVlbSAwLjJlbTtcclxuICAgICAgYm9yZGVyOiB3aGl0ZSBzb2xpZCAxMHB4O1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgfVxyXG5cclxuICAgIC55Yy1oZWFkZXJfX2ludHJvLXRpdGxlIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC55Yy1oZWFkZXJfX2xvZ28ge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICBsZWZ0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmdcIikgY2VudGVyIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgLnljLWhlYWRlcl9faW50cm8ge1xyXG4gICAgICAueWMtaGVhZGVyX19pbnRyby1uYW1lIHtcclxuICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiA1cHg7XHJcbiAgICAgIH1cclxuICAgICAgLnljLWhlYWRlcl9faW50cm8tdGl0bGUge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDAuNSkpLCB1cmwoXCIvYXNzZXRzL2ltYWdlcy9iZWFjaC13aXRoLXN1cmZpbmctYm9hcmQuanBnXCIpIGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDk1dmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xufVxuOmhvc3QgLnljLWhlYWRlcl9faW50cm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjb2xvcjogd2hpdGU7XG59XG46aG9zdCAueWMtaGVhZGVyX19pbnRybyAueWMtaGVhZGVyX19pbnRyby1uYW1lIHtcbiAgZm9udC1zaXplOiA3MnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICBwYWRkaW5nOiAwLjVlbSAwLjJlbTtcbiAgYm9yZGVyOiB3aGl0ZSBzb2xpZCAxMHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuOmhvc3QgLnljLWhlYWRlcl9faW50cm8gLnljLWhlYWRlcl9faW50cm8tdGl0bGUge1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICBjb2xvcjogd2hpdGU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuOmhvc3QgLnljLWhlYWRlcl9fbG9nbyB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiAzMHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9sb2dvLnBuZ1wiKSBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xuICA6aG9zdCAueWMtaGVhZGVyX19pbnRybyAueWMtaGVhZGVyX19pbnRyby1uYW1lIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XG4gIH1cbiAgOmhvc3QgLnljLWhlYWRlcl9faW50cm8gLnljLWhlYWRlcl9faW50cm8tdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'yc-home-header',
                templateUrl: './home-header.component.html',
                styleUrls: ['./home-header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/home-nav/home-nav.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/home-nav/home-nav.component.ts ***!
  \*****************************************************/
/*! exports provided: HomeNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeNavComponent", function() { return HomeNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class HomeNavComponent {
    constructor(_router) {
        this._router = _router;
    }
    ngOnInit() {
    }
    onScrollTo(tag) {
        const tagElement = jquery__WEBPACK_IMPORTED_MODULE_1__(`#${tag}`);
        if (tagElement) {
            jquery__WEBPACK_IMPORTED_MODULE_1__('yc-home').animate({
                scrollTop: tagElement.offset().top
            }, 300, () => {
                // this._router.navigate([], {
                //   queryParams: { tag },
                //   queryParamsHandling: 'merge',
                //   replaceUrl: true,
                // });
            });
        }
    }
}
HomeNavComponent.ɵfac = function HomeNavComponent_Factory(t) { return new (t || HomeNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HomeNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeNavComponent, selectors: [["yc-home-nav"]], hostVars: 2, hostBindings: function HomeNavComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("yc-home-nav--menu-open", ctx.isMenuOpen);
    } }, inputs: { isMenuOpen: "isMenuOpen" }, decls: 6, vars: 0, consts: [[3, "click"]], template: function HomeNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeNavComponent_Template_a_click_0_listener() { return ctx.onScrollTo("about_me"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ABOUT ME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeNavComponent_Template_a_click_2_listener() { return ctx.onScrollTo("portfolio"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "PORTFOLIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeNavComponent_Template_a_click_4_listener() { return ctx.onScrollTo("contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "CONTACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  display: flex;\n  top: 30px;\n  right: 30px;\n  z-index: 1;\n}\n[_nghost-%COMP%]    > a[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-block;\n  margin-left: 20px;\n  color: rgba(255, 255, 255, 0.9);\n  font-weight: 700;\n  font-size: 14px;\n}\n[_nghost-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  color: rgba(255, 255, 255, 0.65) \"\";\n}\n@media screen and (max-width: 650px) {\n  [_nghost-%COMP%] {\n    position: fixed;\n    height: 100vh;\n    flex-direction: column;\n    top: 0;\n    right: -150px;\n    width: 150px;\n    background: #333;\n    padding: 30px 0;\n    transition: right 0.3s ease-in-out;\n  }\n  [_nghost-%COMP%]    > a[_ngcontent-%COMP%] {\n    padding: 10px 8px;\n  }\n  .yc-home-nav--menu-open[_nghost-%COMP%] {\n    right: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLW5hdi9EOlxcX3NoYXduXFx3c1xceWMtc2hhd24uZ2l0aHViLmlvL3NyY1xcYXBwXFxob21lXFxob21lLW5hdlxcaG9tZS1uYXYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS1uYXYvaG9tZS1uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNDRjtBREFFO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0VKO0FEREk7RUFDRSxtQ0FBQTtBQ0dOO0FEQ0U7RUFsQkY7SUFtQkksZUFBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtJQUNBLE1BQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGtDQUFBO0VDRUY7RURERTtJQUNFLGlCQUFBO0VDR0o7RURBRTtJQUNFLFFBQUE7RUNFSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLW5hdi9ob21lLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB0b3A6IDMwcHg7XHJcbiAgcmlnaHQ6IDMwcHg7XHJcbiAgei1pbmRleDogMTtcclxuICA+IGEge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY1KScnXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogLTE1MHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzMzMztcclxuICAgIHBhZGRpbmcgOiAzMHB4IDA7XHJcbiAgICB0cmFuc2l0aW9uOiByaWdodCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgPiBhIHtcclxuICAgICAgcGFkZGluZzogMTBweCA4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi55Yy1ob21lLW5hdi0tbWVudS1vcGVuIHtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiOmhvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRvcDogMzBweDtcbiAgcmlnaHQ6IDMwcHg7XG4gIHotaW5kZXg6IDE7XG59XG46aG9zdCA+IGEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbjpob3N0ID4gYTpob3ZlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjUpIFwiXCI7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xuICA6aG9zdCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IC0xNTBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgYmFja2dyb3VuZDogIzMzMztcbiAgICBwYWRkaW5nOiAzMHB4IDA7XG4gICAgdHJhbnNpdGlvbjogcmlnaHQgMC4zcyBlYXNlLWluLW91dDtcbiAgfVxuICA6aG9zdCA+IGEge1xuICAgIHBhZGRpbmc6IDEwcHggOHB4O1xuICB9XG4gIDpob3N0LnljLWhvbWUtbmF2LS1tZW51LW9wZW4ge1xuICAgIHJpZ2h0OiAwO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'yc-home-nav',
                templateUrl: './home-nav.component.html',
                styleUrls: ['./home-nav.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { isMenuOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.yc-home-nav--menu-open']
        }] }); })();


/***/ }),

/***/ "./src/app/home/home-portfolio/home-portfolio.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home/home-portfolio/home-portfolio.component.ts ***!
  \*****************************************************************/
/*! exports provided: HomePortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePortfolioComponent", function() { return HomePortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function HomePortfolioComponent_ng_container_3_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a", 5);
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("yc-portfolio__project yc-portfolio__project-", project_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", project_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HomePortfolioComponent_ng_container_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePortfolioComponent_ng_container_3_ng_template_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onProject(project_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("yc-portfolio__project yc-portfolio__project-", project_r1.id, "");
} }
function HomePortfolioComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomePortfolioComponent_ng_container_3_a_1_Template, 1, 4, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomePortfolioComponent_ng_container_3_ng_template_2_Template, 1, 3, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r1.external)("ngIfElse", _r3);
} }
class HomePortfolioComponent {
    constructor(_router, _activatedRoute) {
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this.projects = [
            {
                id: 'linkedin',
                external: false,
            },
            {
                id: 'plateiq',
                external: false,
            },
            {
                id: 'lilitofu',
                external: false,
            },
            {
                id: 'chatapp',
                external: true,
                link: 'https://yc-shawn.github.io/real-time-chat/',
            },
            {
                id: 'craigslist',
                external: true,
                link: 'https://yc-shawn.github.io/craigslist-housing',
            },
            {
                id: 'shoppingcart',
                external: true,
                link: 'https://yc-shawn.herokuapp.com/shoppingcart',
            },
            {
                id: 'spotify',
                external: true,
                link: 'https://yc-shawn.github.io/spotify',
            },
            {
                id: 'youtube',
                external: false,
            },
            {
                id: 'signature',
                external: false,
            },
        ];
    }
    ngAfterViewInit() {
        const { tag } = this._activatedRoute.snapshot.queryParams;
        if (tag === 'portfolio') {
            setTimeout(() => {
                this._scrollToPortfolio();
            });
        }
    }
    onProject(project) {
        this._scrollToPortfolio(300, () => {
            this._router.navigateByUrl(`portfolio/${project.id}`);
        });
    }
    _scrollToPortfolio(duration = 0, callback) {
        $('yc-home').animate({
            scrollTop: $(`#portfolio`).offset().top + $('yc-home')[0].scrollTop
        }, duration, () => {
            if (callback) {
                callback();
            }
        });
    }
}
HomePortfolioComponent.ɵfac = function HomePortfolioComponent_Factory(t) { return new (t || HomePortfolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
HomePortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePortfolioComponent, selectors: [["yc-home-portfolio"]], decls: 4, vars: 1, consts: [["id", "portfolio", 1, "yc-section-title"], [1, "yc-portfolio__projects"], [4, "ngFor", "ngForOf"], [3, "href", "class", 4, "ngIf", "ngIfElse"], ["internalLink", ""], [3, "href"], [3, "click"]], template: function HomePortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "PORTFOLIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomePortfolioComponent_ng_container_3_Template, 4, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  background-color: #f5f5f5;\n  padding-bottom: 100px;\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%] {\n  max-width: 960px;\n  margin: 0 auto;\n  overflow: auto;\n  display: flex;\n  flex-wrap: wrap;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%] {\n  display: block;\n  width: 33.33333%;\n  float: left;\n  position: relative;\n  padding-top: 18.7%;\n  overflow: hidden;\n  background-position: center center;\n  background-size: cover;\n  box-shadow: 2px 2px 8px 0px darkgrey;\n  perspective: 300px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  z-index: 1;\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(1) {\n  transform-origin: left top;\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(2) {\n  transform-origin: center top;\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(3) {\n  transform-origin: right top;\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(4) {\n  transform-origin: left center;\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(5) {\n  transform-origin: center center;\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(6) {\n  transform-origin: right center;\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(7) {\n  transform-origin: left bottom;\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(8) {\n  transform-origin: center bottom;\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(9) {\n  transform-origin: right bottom;\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project.yc-portfolio__project-linkedin[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  background-image: url(/assets/images/projects/linkedin-cover.png);\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project.yc-portfolio__project-plateiq[_ngcontent-%COMP%] {\n  background-color: #17364f;\n  background-image: url(/assets/images/projects/plateiq-cover.jpeg);\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project.yc-portfolio__project-lilitofu[_ngcontent-%COMP%] {\n  background-color: #0fb8bd;\n  background-image: url(/assets/images/projects/lilitofu-cover.jpeg);\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project.yc-portfolio__project-chatapp[_ngcontent-%COMP%] {\n  background-color: #8bc174;\n  background-image: url(/assets/images/projects/chatapp-cover.jpg);\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project.yc-portfolio__project-craigslist[_ngcontent-%COMP%] {\n  background-color: #fe88ae;\n  background-image: url(/assets/images/projects/craigslist-cover.png);\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project.yc-portfolio__project-shoppingcart[_ngcontent-%COMP%] {\n  background-color: #e32240;\n  background-image: url(/assets/images/projects/shoppingcart-cover.png);\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project.yc-portfolio__project-spotify[_ngcontent-%COMP%] {\n  background-color: #515151;\n  background-image: url(/assets/images/projects/spotifyplaylist-cover.jpg);\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project.yc-portfolio__project-youtube[_ngcontent-%COMP%] {\n  background-color: #3895c7;\n  background-image: url(/assets/images/projects/youtube-cover.jpeg);\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project.yc-portfolio__project-signature[_ngcontent-%COMP%] {\n  background-color: #15565d;\n  background-image: url(/assets/images/projects/signature-cover.jpeg);\n}\n@media (max-width: 840px) {\n  [_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%] {\n    width: 50%;\n    padding-top: 28.125%;\n  }\n  [_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(1) {\n    transform-origin: left top;\n  }\n  [_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(2) {\n    transform-origin: right top;\n  }\n  [_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(3) {\n    transform-origin: left center;\n  }\n  [_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(4) {\n    transform-origin: right center;\n  }\n  [_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(5) {\n    transform-origin: left center;\n  }\n  [_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(6) {\n    transform-origin: right center;\n  }\n  [_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(7) {\n    transform-origin: left center;\n  }\n  [_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(8) {\n    transform-origin: right bottom;\n  }\n  [_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(9) {\n    transform-origin: left bottom;\n  }\n}\n@media screen and (max-width: 540px) {\n  [_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-top: 56.25%;\n  }\n  [_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(1) {\n    transform-origin: center top;\n  }\n  [_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(2) {\n    transform-origin: center center;\n  }\n  [_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(3) {\n    transform-origin: center center;\n  }\n  [_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(4) {\n    transform-origin: center center;\n  }\n  [_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(5) {\n    transform-origin: center center;\n  }\n  [_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(6) {\n    transform-origin: center center;\n  }\n  [_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(7) {\n    transform-origin: center center;\n  }\n  [_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(8) {\n    transform-origin: center center;\n  }\n  [_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(9) {\n    transform-origin: center bottom;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLXBvcnRmb2xpby9EOlxcX3NoYXduXFx3c1xceWMtc2hhd24uZ2l0aHViLmlvL3NyY1xcYXBwXFxob21lXFxob21lLXBvcnRmb2xpb1xcaG9tZS1wb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS1wb3J0Zm9saW8vaG9tZS1wb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQ0NGO0FEQ0U7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQUk7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRU47QURETTtFQUNFLHNCQUFBO0VBQ0EsVUFBQTtBQ0dSO0FEWVE7RUFDRSwwQkFBQTtBQ1ZWO0FEU1E7RUFDRSw0QkFBQTtBQ1BWO0FETVE7RUFDRSwyQkFBQTtBQ0pWO0FER1E7RUFDRSw2QkFBQTtBQ0RWO0FEQVE7RUFDRSwrQkFBQTtBQ0VWO0FESFE7RUFDRSw4QkFBQTtBQ0tWO0FETlE7RUFDRSw2QkFBQTtBQ1FWO0FEVFE7RUFDRSwrQkFBQTtBQ1dWO0FEWlE7RUFDRSw4QkFBQTtBQ2NWO0FEWE07RUFDRSx5QkFBQTtFQUNBLGlFQUFBO0FDYVI7QURYTTtFQUNFLHlCQUFBO0VBQ0EsaUVBQUE7QUNhUjtBRFhNO0VBQ0UseUJBQUE7RUFDQSxrRUFBQTtBQ2FSO0FEWE07RUFDRSx5QkFBQTtFQUNBLGdFQUFBO0FDYVI7QURYTTtFQUNFLHlCQUFBO0VBQ0EsbUVBQUE7QUNhUjtBRFhNO0VBQ0UseUJBQUE7RUFDQSxxRUFBQTtBQ2FSO0FEWE07RUFDRSx5QkFBQTtFQUNBLHdFQUFBO0FDYVI7QURYTTtFQUNFLHlCQUFBO0VBQ0EsaUVBQUE7QUNhUjtBRFhNO0VBQ0UseUJBQUE7RUFDQSxtRUFBQTtBQ2FSO0FEWE07RUFyRUY7SUFzRUksVUFBQTtJQUNBLG9CQUFBO0VDY047RURBUTtJQUNFLDBCQUFBO0VDRVY7RURIUTtJQUNFLDJCQUFBO0VDS1Y7RUROUTtJQUNFLDZCQUFBO0VDUVY7RURUUTtJQUNFLDhCQUFBO0VDV1Y7RURaUTtJQUNFLDZCQUFBO0VDY1Y7RURmUTtJQUNFLDhCQUFBO0VDaUJWO0VEbEJRO0lBQ0UsNkJBQUE7RUNvQlY7RURyQlE7SUFDRSw4QkFBQTtFQ3VCVjtFRHhCUTtJQUNFLDZCQUFBO0VDMEJWO0FBQ0Y7QUR2Qk07RUExRkY7SUEyRkksV0FBQTtJQUNBLG1CQUFBO0VDMEJOO0VEakJRO0lBQ0UsNEJBQUE7RUNtQlY7RURwQlE7SUFDRSwrQkFBQTtFQ3NCVjtFRHZCUTtJQUNFLCtCQUFBO0VDeUJWO0VEMUJRO0lBQ0UsK0JBQUE7RUM0QlY7RUQ3QlE7SUFDRSwrQkFBQTtFQytCVjtFRGhDUTtJQUNFLCtCQUFBO0VDa0NWO0VEbkNRO0lBQ0UsK0JBQUE7RUNxQ1Y7RUR0Q1E7SUFDRSwrQkFBQTtFQ3dDVjtFRHpDUTtJQUNFLCtCQUFBO0VDMkNWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUtcG9ydGZvbGlvL2hvbWUtcG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG5cclxuICAueWMtcG9ydGZvbGlvX19wcm9qZWN0cyB7XHJcbiAgICBtYXgtd2lkdGg6IDk2MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLnljLXBvcnRmb2xpb19fcHJvamVjdCB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogMzMuMzMzMzMlO1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBwYWRkaW5nLXRvcDogMTguNyU7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIGJveC1zaGFkb3c6IDJweCAycHggOHB4IDBweCBkYXJrZ3JleTtcclxuICAgICAgcGVyc3BlY3RpdmU6IDMwMHB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgfVxyXG4gICAgICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDkge1xyXG4gICAgICAgICR4OiBjZW50ZXI7XHJcbiAgICAgICAgJHk6IGNlbnRlcjtcclxuICAgICAgICBAaWYgJGkgJSAzID09IDEge1xyXG4gICAgICAgICAgJHg6IGxlZnQ7XHJcbiAgICAgICAgfSBAZWxzZSBpZiAkaSAlIDMgPT0gMCB7XHJcbiAgICAgICAgICAkeDogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBpZiAkaSA+PSAxIGFuZCAgJGkgPD0gMyB7XHJcbiAgICAgICAgICAkeTogdG9wO1xyXG4gICAgICAgIH0gQGVsc2UgaWYgJGkgPj0gNyBhbmQgJGkgPD0gOSB7XHJcbiAgICAgICAgICAkeTogYm90dG9tO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOm50aC1vZi10eXBlKCN7JGl9KSB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAkeCAkeTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJi55Yy1wb3J0Zm9saW9fX3Byb2plY3QtbGlua2VkaW4ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL3Byb2plY3RzL2xpbmtlZGluLWNvdmVyLnBuZyk7XHJcbiAgICAgIH1cclxuICAgICAgJi55Yy1wb3J0Zm9saW9fX3Byb2plY3QtcGxhdGVpcSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE3MzY0ZjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvcHJvamVjdHMvcGxhdGVpcS1jb3Zlci5qcGVnKTtcclxuICAgICAgfVxyXG4gICAgICAmLnljLXBvcnRmb2xpb19fcHJvamVjdC1saWxpdG9mdSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBmYjhiZDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvcHJvamVjdHMvbGlsaXRvZnUtY292ZXIuanBlZyk7XHJcbiAgICAgIH1cclxuICAgICAgJi55Yy1wb3J0Zm9saW9fX3Byb2plY3QtY2hhdGFwcCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzhiYzE3NDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvcHJvamVjdHMvY2hhdGFwcC1jb3Zlci5qcGcpO1xyXG4gICAgICB9XHJcbiAgICAgICYueWMtcG9ydGZvbGlvX19wcm9qZWN0LWNyYWlnc2xpc3Qge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZTg4YWU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL3Byb2plY3RzL2NyYWlnc2xpc3QtY292ZXIucG5nKTtcclxuICAgICAgfVxyXG4gICAgICAmLnljLXBvcnRmb2xpb19fcHJvamVjdC1zaG9wcGluZ2NhcnQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMzIyNDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL3Byb2plY3RzL3Nob3BwaW5nY2FydC1jb3Zlci5wbmcpO1xyXG4gICAgICB9XHJcbiAgICAgICYueWMtcG9ydGZvbGlvX19wcm9qZWN0LXNwb3RpZnkge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1MTUxNTE7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL3Byb2plY3RzL3Nwb3RpZnlwbGF5bGlzdC1jb3Zlci5qcGcpO1xyXG4gICAgICB9XHJcbiAgICAgICYueWMtcG9ydGZvbGlvX19wcm9qZWN0LXlvdXR1YmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzODk1Yzc7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL3Byb2plY3RzL3lvdXR1YmUtY292ZXIuanBlZyk7XHJcbiAgICAgIH1cclxuICAgICAgJi55Yy1wb3J0Zm9saW9fX3Byb2plY3Qtc2lnbmF0dXJlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTU1NjVkO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy9zaWduYXR1cmUtY292ZXIuanBlZyk7XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ODQwcHgpIHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyOC4xMjUlO1xyXG4gICAgICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggOSB7XHJcbiAgICAgICAgICAkeDogY2VudGVyO1xyXG4gICAgICAgICAgJHk6IGNlbnRlcjtcclxuICAgICAgICAgIEBpZiAkaSAlIDIgPT0gMSB7XHJcbiAgICAgICAgICAgICR4OiBsZWZ0O1xyXG4gICAgICAgICAgfSBAZWxzZSBpZiAkaSAlIDIgPT0gMCB7XHJcbiAgICAgICAgICAgICR4OiByaWdodDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBpZiAkaSA+PSAxIGFuZCAgJGkgPD0gMiB7XHJcbiAgICAgICAgICAgICR5OiB0b3A7XHJcbiAgICAgICAgICB9ICBAZWxzZSBpZiAkaSA+PSA4IGFuZCAkaSA8PSA5IHtcclxuICAgICAgICAgICAgJHk6IGJvdHRvbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICY6bnRoLW9mLXR5cGUoI3skaX0pIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogJHggJHk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTQwcHgpIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNTYuMjUlO1xyXG4gICAgICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggOSB7XHJcbiAgICAgICAgICAkeTogY2VudGVyO1xyXG4gICAgICAgICAgQGlmICRpID09IDEge1xyXG4gICAgICAgICAgICAkeTogdG9wO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQGlmICRpID09IDkge1xyXG4gICAgICAgICAgICAkeTogYm90dG9tO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJjpudGgtb2YtdHlwZSgjeyRpfSkge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgJHk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xufVxuOmhvc3QgLnljLXBvcnRmb2xpb19fcHJvamVjdHMge1xuICBtYXgtd2lkdGg6IDk2MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjpob3N0IC55Yy1wb3J0Zm9saW9fX3Byb2plY3RzIC55Yy1wb3J0Zm9saW9fX3Byb2plY3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDMzLjMzMzMzJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy10b3A6IDE4LjclO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3gtc2hhZG93OiAycHggMnB4IDhweCAwcHggZGFya2dyZXk7XG4gIHBlcnNwZWN0aXZlOiAzMDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgLnljLXBvcnRmb2xpb19fcHJvamVjdHMgLnljLXBvcnRmb2xpb19fcHJvamVjdDpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIHotaW5kZXg6IDE7XG59XG46aG9zdCAueWMtcG9ydGZvbGlvX19wcm9qZWN0cyAueWMtcG9ydGZvbGlvX19wcm9qZWN0Om50aC1vZi10eXBlKDEpIHtcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XG59XG46aG9zdCAueWMtcG9ydGZvbGlvX19wcm9qZWN0cyAueWMtcG9ydGZvbGlvX19wcm9qZWN0Om50aC1vZi10eXBlKDIpIHtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIHRvcDtcbn1cbjpob3N0IC55Yy1wb3J0Zm9saW9fX3Byb2plY3RzIC55Yy1wb3J0Zm9saW9fX3Byb2plY3Q6bnRoLW9mLXR5cGUoMykge1xuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCB0b3A7XG59XG46aG9zdCAueWMtcG9ydGZvbGlvX19wcm9qZWN0cyAueWMtcG9ydGZvbGlvX19wcm9qZWN0Om50aC1vZi10eXBlKDQpIHtcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XG59XG46aG9zdCAueWMtcG9ydGZvbGlvX19wcm9qZWN0cyAueWMtcG9ydGZvbGlvX19wcm9qZWN0Om50aC1vZi10eXBlKDUpIHtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbn1cbjpob3N0IC55Yy1wb3J0Zm9saW9fX3Byb2plY3RzIC55Yy1wb3J0Zm9saW9fX3Byb2plY3Q6bnRoLW9mLXR5cGUoNikge1xuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBjZW50ZXI7XG59XG46aG9zdCAueWMtcG9ydGZvbGlvX19wcm9qZWN0cyAueWMtcG9ydGZvbGlvX19wcm9qZWN0Om50aC1vZi10eXBlKDcpIHtcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XG59XG46aG9zdCAueWMtcG9ydGZvbGlvX19wcm9qZWN0cyAueWMtcG9ydGZvbGlvX19wcm9qZWN0Om50aC1vZi10eXBlKDgpIHtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcbn1cbjpob3N0IC55Yy1wb3J0Zm9saW9fX3Byb2plY3RzIC55Yy1wb3J0Zm9saW9fX3Byb2plY3Q6bnRoLW9mLXR5cGUoOSkge1xuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XG59XG46aG9zdCAueWMtcG9ydGZvbGlvX19wcm9qZWN0cyAueWMtcG9ydGZvbGlvX19wcm9qZWN0LnljLXBvcnRmb2xpb19fcHJvamVjdC1saW5rZWRpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy9saW5rZWRpbi1jb3Zlci5wbmcpO1xufVxuOmhvc3QgLnljLXBvcnRmb2xpb19fcHJvamVjdHMgLnljLXBvcnRmb2xpb19fcHJvamVjdC55Yy1wb3J0Zm9saW9fX3Byb2plY3QtcGxhdGVpcSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzM2NGY7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy9wbGF0ZWlxLWNvdmVyLmpwZWcpO1xufVxuOmhvc3QgLnljLXBvcnRmb2xpb19fcHJvamVjdHMgLnljLXBvcnRmb2xpb19fcHJvamVjdC55Yy1wb3J0Zm9saW9fX3Byb2plY3QtbGlsaXRvZnUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGZiOGJkO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvcHJvamVjdHMvbGlsaXRvZnUtY292ZXIuanBlZyk7XG59XG46aG9zdCAueWMtcG9ydGZvbGlvX19wcm9qZWN0cyAueWMtcG9ydGZvbGlvX19wcm9qZWN0LnljLXBvcnRmb2xpb19fcHJvamVjdC1jaGF0YXBwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhiYzE3NDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL3Byb2plY3RzL2NoYXRhcHAtY292ZXIuanBnKTtcbn1cbjpob3N0IC55Yy1wb3J0Zm9saW9fX3Byb2plY3RzIC55Yy1wb3J0Zm9saW9fX3Byb2plY3QueWMtcG9ydGZvbGlvX19wcm9qZWN0LWNyYWlnc2xpc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmU4OGFlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvcHJvamVjdHMvY3JhaWdzbGlzdC1jb3Zlci5wbmcpO1xufVxuOmhvc3QgLnljLXBvcnRmb2xpb19fcHJvamVjdHMgLnljLXBvcnRmb2xpb19fcHJvamVjdC55Yy1wb3J0Zm9saW9fX3Byb2plY3Qtc2hvcHBpbmdjYXJ0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzMjI0MDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL3Byb2plY3RzL3Nob3BwaW5nY2FydC1jb3Zlci5wbmcpO1xufVxuOmhvc3QgLnljLXBvcnRmb2xpb19fcHJvamVjdHMgLnljLXBvcnRmb2xpb19fcHJvamVjdC55Yy1wb3J0Zm9saW9fX3Byb2plY3Qtc3BvdGlmeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MTUxNTE7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy9zcG90aWZ5cGxheWxpc3QtY292ZXIuanBnKTtcbn1cbjpob3N0IC55Yy1wb3J0Zm9saW9fX3Byb2plY3RzIC55Yy1wb3J0Zm9saW9fX3Byb2plY3QueWMtcG9ydGZvbGlvX19wcm9qZWN0LXlvdXR1YmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg5NWM3O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvcHJvamVjdHMveW91dHViZS1jb3Zlci5qcGVnKTtcbn1cbjpob3N0IC55Yy1wb3J0Zm9saW9fX3Byb2plY3RzIC55Yy1wb3J0Zm9saW9fX3Byb2plY3QueWMtcG9ydGZvbGlvX19wcm9qZWN0LXNpZ25hdHVyZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTU2NWQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy9zaWduYXR1cmUtY292ZXIuanBlZyk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogODQwcHgpIHtcbiAgOmhvc3QgLnljLXBvcnRmb2xpb19fcHJvamVjdHMgLnljLXBvcnRmb2xpb19fcHJvamVjdCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBwYWRkaW5nLXRvcDogMjguMTI1JTtcbiAgfVxuICA6aG9zdCAueWMtcG9ydGZvbGlvX19wcm9qZWN0cyAueWMtcG9ydGZvbGlvX19wcm9qZWN0Om50aC1vZi10eXBlKDEpIHtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcbiAgfVxuICA6aG9zdCAueWMtcG9ydGZvbGlvX19wcm9qZWN0cyAueWMtcG9ydGZvbGlvX19wcm9qZWN0Om50aC1vZi10eXBlKDIpIHtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCB0b3A7XG4gIH1cbiAgOmhvc3QgLnljLXBvcnRmb2xpb19fcHJvamVjdHMgLnljLXBvcnRmb2xpb19fcHJvamVjdDpudGgtb2YtdHlwZSgzKSB7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XG4gIH1cbiAgOmhvc3QgLnljLXBvcnRmb2xpb19fcHJvamVjdHMgLnljLXBvcnRmb2xpb19fcHJvamVjdDpudGgtb2YtdHlwZSg0KSB7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgY2VudGVyO1xuICB9XG4gIDpob3N0IC55Yy1wb3J0Zm9saW9fX3Byb2plY3RzIC55Yy1wb3J0Zm9saW9fX3Byb2plY3Q6bnRoLW9mLXR5cGUoNSkge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xuICB9XG4gIDpob3N0IC55Yy1wb3J0Zm9saW9fX3Byb2plY3RzIC55Yy1wb3J0Zm9saW9fX3Byb2plY3Q6bnRoLW9mLXR5cGUoNikge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGNlbnRlcjtcbiAgfVxuICA6aG9zdCAueWMtcG9ydGZvbGlvX19wcm9qZWN0cyAueWMtcG9ydGZvbGlvX19wcm9qZWN0Om50aC1vZi10eXBlKDcpIHtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcbiAgfVxuICA6aG9zdCAueWMtcG9ydGZvbGlvX19wcm9qZWN0cyAueWMtcG9ydGZvbGlvX19wcm9qZWN0Om50aC1vZi10eXBlKDgpIHtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XG4gIH1cbiAgOmhvc3QgLnljLXBvcnRmb2xpb19fcHJvamVjdHMgLnljLXBvcnRmb2xpb19fcHJvamVjdDpudGgtb2YtdHlwZSg5KSB7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU0MHB4KSB7XG4gIDpob3N0IC55Yy1wb3J0Zm9saW9fX3Byb2plY3RzIC55Yy1wb3J0Zm9saW9fX3Byb2plY3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiA1Ni4yNSU7XG4gIH1cbiAgOmhvc3QgLnljLXBvcnRmb2xpb19fcHJvamVjdHMgLnljLXBvcnRmb2xpb19fcHJvamVjdDpudGgtb2YtdHlwZSgxKSB7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIHRvcDtcbiAgfVxuICA6aG9zdCAueWMtcG9ydGZvbGlvX19wcm9qZWN0cyAueWMtcG9ydGZvbGlvX19wcm9qZWN0Om50aC1vZi10eXBlKDIpIHtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICB9XG4gIDpob3N0IC55Yy1wb3J0Zm9saW9fX3Byb2plY3RzIC55Yy1wb3J0Zm9saW9fX3Byb2plY3Q6bnRoLW9mLXR5cGUoMykge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gIH1cbiAgOmhvc3QgLnljLXBvcnRmb2xpb19fcHJvamVjdHMgLnljLXBvcnRmb2xpb19fcHJvamVjdDpudGgtb2YtdHlwZSg0KSB7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgfVxuICA6aG9zdCAueWMtcG9ydGZvbGlvX19wcm9qZWN0cyAueWMtcG9ydGZvbGlvX19wcm9qZWN0Om50aC1vZi10eXBlKDUpIHtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICB9XG4gIDpob3N0IC55Yy1wb3J0Zm9saW9fX3Byb2plY3RzIC55Yy1wb3J0Zm9saW9fX3Byb2plY3Q6bnRoLW9mLXR5cGUoNikge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gIH1cbiAgOmhvc3QgLnljLXBvcnRmb2xpb19fcHJvamVjdHMgLnljLXBvcnRmb2xpb19fcHJvamVjdDpudGgtb2YtdHlwZSg3KSB7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgfVxuICA6aG9zdCAueWMtcG9ydGZvbGlvX19wcm9qZWN0cyAueWMtcG9ydGZvbGlvX19wcm9qZWN0Om50aC1vZi10eXBlKDgpIHtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICB9XG4gIDpob3N0IC55Yy1wb3J0Zm9saW9fX3Byb2plY3RzIC55Yy1wb3J0Zm9saW9fX3Byb2plY3Q6bnRoLW9mLXR5cGUoOSkge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePortfolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'yc-home-portfolio',
                templateUrl: './home-portfolio.component.html',
                styleUrls: ['./home-portfolio.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home/home.component.ts");
/* harmony import */ var _home_header_home_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home-header/home-header.component */ "./src/app/home/home-header/home-header.component.ts");
/* harmony import */ var _home_aboutme_home_aboutme_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home-aboutme/home-aboutme.component */ "./src/app/home/home-aboutme/home-aboutme.component.ts");
/* harmony import */ var _home_portfolio_home_portfolio_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home-portfolio/home-portfolio.component */ "./src/app/home/home-portfolio/home-portfolio.component.ts");
/* harmony import */ var _home_comments_home_comments_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home-comments/home-comments.component */ "./src/app/home/home-comments/home-comments.component.ts");
/* harmony import */ var _home_footer_home_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home-footer/home-footer.component */ "./src/app/home/home-footer/home-footer.component.ts");
/* harmony import */ var _home_nav_home_nav_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home-nav/home-nav.component */ "./src/app/home/home-nav/home-nav.component.ts");
/* harmony import */ var _home_contact_home_contact_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home-contact/home-contact.component */ "./src/app/home/home-contact/home-contact.component.ts");



















const MaterialModules = [
    _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
];
class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            MaterialModules,
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"] }]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _home_header_home_header_component__WEBPACK_IMPORTED_MODULE_10__["HomeHeaderComponent"], _home_aboutme_home_aboutme_component__WEBPACK_IMPORTED_MODULE_11__["HomeAboutmeComponent"], _home_portfolio_home_portfolio_component__WEBPACK_IMPORTED_MODULE_12__["HomePortfolioComponent"], _home_comments_home_comments_component__WEBPACK_IMPORTED_MODULE_13__["HomeCommentsComponent"], _home_footer_home_footer_component__WEBPACK_IMPORTED_MODULE_14__["HomeFooterComponent"], _home_nav_home_nav_component__WEBPACK_IMPORTED_MODULE_15__["HomeNavComponent"], _home_contact_home_contact_component__WEBPACK_IMPORTED_MODULE_16__["HomeContactComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _home_header_home_header_component__WEBPACK_IMPORTED_MODULE_10__["HomeHeaderComponent"], _home_aboutme_home_aboutme_component__WEBPACK_IMPORTED_MODULE_11__["HomeAboutmeComponent"], _home_portfolio_home_portfolio_component__WEBPACK_IMPORTED_MODULE_12__["HomePortfolioComponent"], _home_comments_home_comments_component__WEBPACK_IMPORTED_MODULE_13__["HomeCommentsComponent"], _home_footer_home_footer_component__WEBPACK_IMPORTED_MODULE_14__["HomeFooterComponent"], _home_nav_home_nav_component__WEBPACK_IMPORTED_MODULE_15__["HomeNavComponent"], _home_contact_home_contact_component__WEBPACK_IMPORTED_MODULE_16__["HomeContactComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    MaterialModules,
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"] }]),
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/home/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _home_nav_home_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home-nav/home-nav.component */ "./src/app/home/home-nav/home-nav.component.ts");
/* harmony import */ var _home_header_home_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home-header/home-header.component */ "./src/app/home/home-header/home-header.component.ts");
/* harmony import */ var _home_aboutme_home_aboutme_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../home-aboutme/home-aboutme.component */ "./src/app/home/home-aboutme/home-aboutme.component.ts");
/* harmony import */ var _home_portfolio_home_portfolio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../home-portfolio/home-portfolio.component */ "./src/app/home/home-portfolio/home-portfolio.component.ts");
/* harmony import */ var _home_contact_home_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../home-contact/home-contact.component */ "./src/app/home/home-contact/home-contact.component.ts");
/* harmony import */ var _home_footer_home_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../home-footer/home-footer.component */ "./src/app/home/home-footer/home-footer.component.ts");










function HomeComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.scrollTop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor(_element) {
        this._element = _element;
        this.isMenuOpen = false;
    }
    onScroll({ target }) {
        if (target.scrollTop > 200) {
            this.showScrollTop = true;
        }
        else {
            this.showScrollTop = false;
        }
    }
    ;
    ngOnInit() { }
    /**
     * Toogle side menu in small screen
     */
    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }
    scrollTop() {
        jquery__WEBPACK_IMPORTED_MODULE_1__("yc-home").animate({ scrollTop: 0 }, 300);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["yc-home"]], hostVars: 2, hostBindings: function HomeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HomeComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("yc-home--menu-open", ctx.isMenuOpen);
    } }, decls: 9, vars: 2, consts: [[1, "yc-home__toggle", 3, "click"], [1, "fas", "fa-bars"], ["class", "yc-home__scroll-top", 3, "click", 4, "ngIf"], [3, "isMenuOpen"], [1, "yc-home__scroll-top", 3, "click"], [1, "fas", "fa-arrow-up"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_0_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_button_2_Template, 2, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "yc-home-nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "yc-home-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "yc-home-aboutme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "yc-home-portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "yc-home-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "yc-home-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showScrollTop);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isMenuOpen", ctx.isMenuOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _home_nav_home_nav_component__WEBPACK_IMPORTED_MODULE_3__["HomeNavComponent"], _home_header_home_header_component__WEBPACK_IMPORTED_MODULE_4__["HomeHeaderComponent"], _home_aboutme_home_aboutme_component__WEBPACK_IMPORTED_MODULE_5__["HomeAboutmeComponent"], _home_portfolio_home_portfolio_component__WEBPACK_IMPORTED_MODULE_6__["HomePortfolioComponent"], _home_contact_home_contact_component__WEBPACK_IMPORTED_MODULE_7__["HomeContactComponent"], _home_footer_home_footer_component__WEBPACK_IMPORTED_MODULE_8__["HomeFooterComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  transition: right 0.3s ease-in-out;\n  position: relative;\n  right: 0;\n  height: 100vh;\n  overflow-y: scroll;\n}\n[_nghost-%COMP%]   .yc-home__toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  top: 10px;\n  right: 10px;\n  z-index: 10;\n  background: transparent;\n  border: 1px solid white;\n  border-radius: 4px;\n  font-size: 32px;\n  padding: 0px 10px;\n  transition: right 0.3s ease-in-out;\n  display: none;\n}\n[_nghost-%COMP%]   .yc-home__scroll-top[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n  position: fixed;\n  right: 20px;\n  bottom: 20px;\n  border-radius: 50%;\n  z-index: 1;\n  border: 1px solid #d5d5d5;\n  background-color: #f0f0f0;\n  opacity: 0.7;\n}\n[_nghost-%COMP%]   .yc-home__scroll-top[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n@media screen and (max-width: 650px) {\n  [_nghost-%COMP%]   .yc-home__toggle[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  .yc-home--menu-open[_nghost-%COMP%] {\n    right: 150px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lL0Q6XFxfc2hhd25cXHdzXFx5Yy1zaGF3bi5naXRodWIuaW8vc3JjXFxhcHBcXGhvbWVcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURDRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsYUFBQTtBQ0NKO0FERUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDQUo7QURDSTtFQUNFLFVBQUE7QUNDTjtBREdFO0VBQ0U7SUFDRSxxQkFBQTtFQ0RKO0VESUU7SUFDRSxZQUFBO0VDRko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRyYW5zaXRpb246IHJpZ2h0IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG5cclxuICAueWMtaG9tZV9fdG9nZ2xlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiByaWdodCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC55Yy1ob21lX19zY3JvbGwtdG9wIHtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICBib3R0b206IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q1ZDVkNTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICAueWMtaG9tZV9fdG9nZ2xlIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgICYueWMtaG9tZS0tbWVudS1vcGVuIHtcclxuICAgICAgcmlnaHQ6IDE1MHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiByaWdodCAwLjNzIGVhc2UtaW4tb3V0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG46aG9zdCAueWMtaG9tZV9fdG9nZ2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIHotaW5kZXg6IDEwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgdHJhbnNpdGlvbjogcmlnaHQgMC4zcyBlYXNlLWluLW91dDtcbiAgZGlzcGxheTogbm9uZTtcbn1cbjpob3N0IC55Yy1ob21lX19zY3JvbGwtdG9wIHtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMjBweDtcbiAgYm90dG9tOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNWQ1ZDU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gIG9wYWNpdHk6IDAuNztcbn1cbjpob3N0IC55Yy1ob21lX19zY3JvbGwtdG9wOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XG4gIDpob3N0IC55Yy1ob21lX190b2dnbGUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICA6aG9zdC55Yy1ob21lLS1tZW51LW9wZW4ge1xuICAgIHJpZ2h0OiAxNTBweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'yc-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { isMenuOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.yc-home--menu-open']
        }], onScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/portfolio/portfolio-lilitofu/portfolio-lilitofu.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/portfolio/portfolio-lilitofu/portfolio-lilitofu.component.ts ***!
  \******************************************************************************/
/*! exports provided: PortfolioLilitofuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioLilitofuComponent", function() { return PortfolioLilitofuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PortfolioLilitofuComponent {
    constructor() { }
    ngOnInit() {
    }
}
PortfolioLilitofuComponent.ɵfac = function PortfolioLilitofuComponent_Factory(t) { return new (t || PortfolioLilitofuComponent)(); };
PortfolioLilitofuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioLilitofuComponent, selectors: [["yc-portfolio-lilitofu"]], decls: 26, vars: 0, consts: [[1, "yc-portfolio-lilitofu__demo", "mb-3"], ["src", "/assets/images/projects/lilitofu-home.png", 1, "lilitofu-img-home"], ["src", "/assets/images/projects/lilitofu-story.png", 1, "lilitofu-img-story"], [1, "text-center"], [1, "text-center", "mb-3"], ["href", "https://www.lilitofu.com/", "target", "_blank"], ["src", "assets/images/projects/lilitofu-team.jpg", 1, "yc-portfolio-lilitofu__team"]], template: function PortfolioLilitofuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Front-end Developer intern at Lilitofu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "April 2017 - June 2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Develop user-facing features for everything that users see and touch on website including content, layout, and interaction using a combination of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Nodejs, React/Redux, ES6, SCSS, Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Collaborate closely with other team members and stakeholders to ensure the technical feasibility of UI/UX designs and bring the designer\u2019s concept to life, also assure script is validated before submitting to back-end");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Build reusable code and libraries for future use, remove redundant code.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Optimize application for maximum speed and scalability");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Change overall styling to make webpage responsive for any screen size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Lilitofu Website Link: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "click here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 6);
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 10px 15px 30px 15px;\n}\n[_nghost-%COMP%]   .yc-portfolio-lilitofu__demo[_ngcontent-%COMP%] {\n  position: relative;\n  height: 0;\n  padding: 30%;\n}\n[_nghost-%COMP%]   .yc-portfolio-lilitofu__demo[_ngcontent-%COMP%]   .lilitofu-img-home[_ngcontent-%COMP%], [_nghost-%COMP%]   .yc-portfolio-lilitofu__demo[_ngcontent-%COMP%]   .lilitofu-img-story[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 70%;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;\n}\n[_nghost-%COMP%]   .yc-portfolio-lilitofu__demo[_ngcontent-%COMP%]   .lilitofu-img-home[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n}\n[_nghost-%COMP%]   .yc-portfolio-lilitofu__demo[_ngcontent-%COMP%]   .lilitofu-img-story[_ngcontent-%COMP%] {\n  bottom: 0;\n  right: 0;\n}\n[_nghost-%COMP%]   .yc-portfolio-lilitofu__team[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby1saWxpdG9mdS9EOlxcX3NoYXduXFx3c1xceWMtc2hhd24uZ2l0aHViLmlvL3NyY1xcYXBwXFxwb3J0Zm9saW9cXHBvcnRmb2xpby1saWxpdG9mdVxccG9ydGZvbGlvLWxpbGl0b2Z1LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wb3J0Zm9saW8vcG9ydGZvbGlvLWxpbGl0b2Z1L3BvcnRmb2xpby1saWxpdG9mdS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtBQ0NGO0FEQ0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FDQ0o7QURBSTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDJFQUFBO0FDRU47QURBSTtFQUNFLE1BQUE7RUFDQSxPQUFBO0FDRU47QURBSTtFQUNFLFNBQUE7RUFDQSxRQUFBO0FDRU47QURFRTtFQUNFLFdBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby9wb3J0Zm9saW8tbGlsaXRvZnUvcG9ydGZvbGlvLWxpbGl0b2Z1LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1heC13aWR0aDogOTYwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMTBweCAxNXB4IDMwcHggMTVweDtcclxuXHJcbiAgLnljLXBvcnRmb2xpby1saWxpdG9mdV9fZGVtbyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nOiAzMCU7XHJcbiAgICAubGlsaXRvZnUtaW1nLWhvbWUsIC5saWxpdG9mdS1pbWctc3Rvcnkge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4xKSBpbnNldDtcclxuICAgIH1cclxuICAgIC5saWxpdG9mdS1pbWctaG9tZSB7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgIH1cclxuICAgIC5saWxpdG9mdS1pbWctc3Rvcnkge1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnljLXBvcnRmb2xpby1saWxpdG9mdV9fdGVhbSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9ICBcclxufSIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogOTYwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAxMHB4IDE1cHggMzBweCAxNXB4O1xufVxuOmhvc3QgLnljLXBvcnRmb2xpby1saWxpdG9mdV9fZGVtbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAwO1xuICBwYWRkaW5nOiAzMCU7XG59XG46aG9zdCAueWMtcG9ydGZvbGlvLWxpbGl0b2Z1X19kZW1vIC5saWxpdG9mdS1pbWctaG9tZSwgOmhvc3QgLnljLXBvcnRmb2xpby1saWxpdG9mdV9fZGVtbyAubGlsaXRvZnUtaW1nLXN0b3J5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNzAlO1xuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDAgNDBweCByZ2JhKDAsIDAsIDAsIDAuMSkgaW5zZXQ7XG59XG46aG9zdCAueWMtcG9ydGZvbGlvLWxpbGl0b2Z1X19kZW1vIC5saWxpdG9mdS1pbWctaG9tZSB7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cbjpob3N0IC55Yy1wb3J0Zm9saW8tbGlsaXRvZnVfX2RlbW8gLmxpbGl0b2Z1LWltZy1zdG9yeSB7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59XG46aG9zdCAueWMtcG9ydGZvbGlvLWxpbGl0b2Z1X190ZWFtIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioLilitofuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'yc-portfolio-lilitofu',
                templateUrl: './portfolio-lilitofu.component.html',
                styleUrls: ['./portfolio-lilitofu.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/portfolio/portfolio-linkedin/portfolio-linkedin.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/portfolio/portfolio-linkedin/portfolio-linkedin.component.ts ***!
  \******************************************************************************/
/*! exports provided: PortfolioLinkedinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioLinkedinComponent", function() { return PortfolioLinkedinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PortfolioLinkedinComponent {
    constructor() { }
    ngOnInit() {
    }
}
PortfolioLinkedinComponent.ɵfac = function PortfolioLinkedinComponent_Factory(t) { return new (t || PortfolioLinkedinComponent)(); };
PortfolioLinkedinComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioLinkedinComponent, selectors: [["yc-portfolio-linkedin"]], decls: 23, vars: 0, consts: [["src", "assets/images/projects/linkedin-ads.png", 1, "yc-portfolio-linkedin__ads-image"], [1, "text-center"], [1, "text-center", "mb-2"], [1, "text-center", "mb-3"]], template: function PortfolioLinkedinComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Software Engineer at Linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "LinkedIn Marketing Solution (LMS) Ads Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "December 2018 - Present");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Developed lead generation form in campaign manager desktop web application which increased LinkedIn advertisement revenue by 30%.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Built an internal image-editing software library adopted by various products such as Carousel image editing, which demonstrated the ability to increase user adoption rate by 25%.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Implemented various optimization algorithms to improve the site speed of campaign manager desktop web app by 40%.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Collaborated with visual/interaction designers, other engineers, and product managers to launch new products, iterate on existing features, and build a world-class user experience.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Developed features:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Lead generation form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Carousel ad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 10px 15px 30px 15px;\n}\n[_nghost-%COMP%]   .yc-portfolio-linkedin__ads-image[_ngcontent-%COMP%] {\n  margin: 0 auto 20px auto;\n  display: block;\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby1saW5rZWRpbi9EOlxcX3NoYXduXFx3c1xceWMtc2hhd24uZ2l0aHViLmlvL3NyY1xcYXBwXFxwb3J0Zm9saW9cXHBvcnRmb2xpby1saW5rZWRpblxccG9ydGZvbGlvLWxpbmtlZGluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wb3J0Zm9saW8vcG9ydGZvbGlvLWxpbmtlZGluL3BvcnRmb2xpby1saW5rZWRpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtBQ0NGO0FEQ0U7RUFDRSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wb3J0Zm9saW8vcG9ydGZvbGlvLWxpbmtlZGluL3BvcnRmb2xpby1saW5rZWRpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXgtd2lkdGg6IDk2MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweCAzMHB4IDE1cHg7XHJcblxyXG4gIC55Yy1wb3J0Zm9saW8tbGlua2VkaW5fX2Fkcy1pbWFnZSB7XHJcbiAgICBtYXJnaW46IDAgYXV0byAyMHB4IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiA5NjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDEwcHggMTVweCAzMHB4IDE1cHg7XG59XG46aG9zdCAueWMtcG9ydGZvbGlvLWxpbmtlZGluX19hZHMtaW1hZ2Uge1xuICBtYXJnaW46IDAgYXV0byAyMHB4IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioLinkedinComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'yc-portfolio-linkedin',
                templateUrl: './portfolio-linkedin.component.html',
                styleUrls: ['./portfolio-linkedin.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/portfolio/portfolio-plateiq/portfolio-plateiq.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/portfolio/portfolio-plateiq/portfolio-plateiq.component.ts ***!
  \****************************************************************************/
/*! exports provided: PortfolioPlateiqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioPlateiqComponent", function() { return PortfolioPlateiqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PortfolioPlateiqComponent {
    constructor() { }
    ngOnInit() {
    }
}
PortfolioPlateiqComponent.ɵfac = function PortfolioPlateiqComponent_Factory(t) { return new (t || PortfolioPlateiqComponent)(); };
PortfolioPlateiqComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioPlateiqComponent, selectors: [["yc-portfolio-plateiq"]], decls: 38, vars: 0, consts: [[1, "yc-portfolio-plateiq__demo"], ["src", "assets/images/projects/macbook-frame-sm.png", 1, "yc-portfolio-plateiq__demo-frame"], ["src", "assets/images/projects/plateiq-hotlist-gif.gif", 1, "yc-portfolio-plateiq__demo-gif"], [1, "text-center"], [1, "text-center", "mb-3"], [1, "text-left"], [1, "text-left", "pl-3"], ["href", "https://www.plateiq.com/", "target", "_blank"]], template: function PortfolioPlateiqComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Software Engineer at Plate IQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "July 2017 - November 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Wrote maintainable, scalable, responsive, and cross-browser code use Angularjs, React/Redux, HTML, Javascript, SCSS.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Built reusable internal front-end component library and used across all the product.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Collaborated with creative and development teams on the execution of ideas and projects.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Updated and streamlined existing code to improve site performance.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, ": Invoice Processing & Management Software (core product)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Translate designs to front-end code, closely worked with back-end developers to optimize existing web technology and create the best possible user experience.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, ": Marketing Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Maintained and updated company\u2019s homepage with Search Engine Optimization (SEO), improved ranks and increased awareness in search engine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, ": Data Entry Tool");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Design and code up a web application to manually digitized the invoice, reduce the processing time from 4min to 30seconds each invoice compare with the old tool.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Plate IQ Homepage: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "click here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 10px 15px 30px 15px;\n}\n[_nghost-%COMP%]   .yc-portfolio-plateiq__demo[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 640px;\n  margin: 0 auto;\n}\n[_nghost-%COMP%]   .yc-portfolio-plateiq__demo[_ngcontent-%COMP%]   .yc-portfolio-plateiq__demo-frame[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .yc-portfolio-plateiq__demo[_ngcontent-%COMP%]   .yc-portfolio-plateiq__demo-gif[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6%;\n  left: 12.7%;\n  width: 74.8%;\n  height: 72%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby1wbGF0ZWlxL0Q6XFxfc2hhd25cXHdzXFx5Yy1zaGF3bi5naXRodWIuaW8vc3JjXFxhcHBcXHBvcnRmb2xpb1xccG9ydGZvbGlvLXBsYXRlaXFcXHBvcnRmb2xpby1wbGF0ZWlxLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wb3J0Zm9saW8vcG9ydGZvbGlvLXBsYXRlaXEvcG9ydGZvbGlvLXBsYXRlaXEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7QUNDRjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNDSjtBREFJO0VBQ0UsV0FBQTtBQ0VOO0FEQUk7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNFTiIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby9wb3J0Zm9saW8tcGxhdGVpcS9wb3J0Zm9saW8tcGxhdGVpcS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXgtd2lkdGg6IDk2MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweCAzMHB4IDE1cHg7XHJcblxyXG4gIC55Yy1wb3J0Zm9saW8tcGxhdGVpcV9fZGVtb3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1heC13aWR0aDogNjQwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIC55Yy1wb3J0Zm9saW8tcGxhdGVpcV9fZGVtby1mcmFtZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLnljLXBvcnRmb2xpby1wbGF0ZWlxX19kZW1vLWdpZiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA2JTtcclxuICAgICAgbGVmdDogMTIuNyU7XHJcbiAgICAgIHdpZHRoOiA3NC44JTtcclxuICAgICAgaGVpZ2h0OiA3MiU7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiA5NjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDEwcHggMTVweCAzMHB4IDE1cHg7XG59XG46aG9zdCAueWMtcG9ydGZvbGlvLXBsYXRlaXFfX2RlbW8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogNjQwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuOmhvc3QgLnljLXBvcnRmb2xpby1wbGF0ZWlxX19kZW1vIC55Yy1wb3J0Zm9saW8tcGxhdGVpcV9fZGVtby1mcmFtZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgLnljLXBvcnRmb2xpby1wbGF0ZWlxX19kZW1vIC55Yy1wb3J0Zm9saW8tcGxhdGVpcV9fZGVtby1naWYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNiU7XG4gIGxlZnQ6IDEyLjclO1xuICB3aWR0aDogNzQuOCU7XG4gIGhlaWdodDogNzIlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioPlateiqComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'yc-portfolio-plateiq',
                templateUrl: './portfolio-plateiq.component.html',
                styleUrls: ['./portfolio-plateiq.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/portfolio/portfolio-signature/portfolio-signature.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/portfolio/portfolio-signature/portfolio-signature.component.ts ***!
  \********************************************************************************/
/*! exports provided: PortfolioSignatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioSignatureComponent", function() { return PortfolioSignatureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PortfolioSignatureComponent {
    constructor() { }
    ngOnInit() {
    }
}
PortfolioSignatureComponent.ɵfac = function PortfolioSignatureComponent_Factory(t) { return new (t || PortfolioSignatureComponent)(); };
PortfolioSignatureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioSignatureComponent, selectors: [["yc-portfolio-signature"]], decls: 34, vars: 0, consts: [["src", "/assets/images/projects/ubhacking.png", 1, "yc-portfolio-signature__ubhacking-logo"], [1, "text-center"], [1, "text-center", "mb-3"], ["href", "https://www.fideliscare.org/", "target", "_blank"], ["href", "https://github.com/yc-shawn/signature-sign-in-system"], ["src", "/assets/images/projects/ubhacking-working.jpg", 1, "yc-portfolio-signature__image"], ["src", "/assets/images/projects/SignatureSignIn.png_thumb.jpg", 1, "yc-portfolio-signature__image"]], template: function PortfolioSignatureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Signature Sign In System");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Team Member: Yuxiang Chen, Fei Chen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Award: Best Healthcare Hack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sponsored by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Fidelis Care");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Use signature as verification to login personal account, implemented by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Utilize ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Java Swing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " toolkit to design front end user interface.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Implement feature-based classification algorithm to recognize the login signature compare with the user account database with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "91%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " accuracy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Github link ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Click here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 6);
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 10px 15px 30px 15px;\n}\n[_nghost-%COMP%]   .yc-portfolio-signature__ubhacking-logo[_ngcontent-%COMP%] {\n  width: 30%;\n  margin: 20px 35%;\n}\n[_nghost-%COMP%]   .yc-portfolio-signature__image[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby1zaWduYXR1cmUvRDpcXF9zaGF3blxcd3NcXHljLXNoYXduLmdpdGh1Yi5pby9zcmNcXGFwcFxccG9ydGZvbGlvXFxwb3J0Zm9saW8tc2lnbmF0dXJlXFxwb3J0Zm9saW8tc2lnbmF0dXJlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wb3J0Zm9saW8vcG9ydGZvbGlvLXNpZ25hdHVyZS9wb3J0Zm9saW8tc2lnbmF0dXJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0FDQ0Y7QURDRTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQ0NKO0FERUU7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby9wb3J0Zm9saW8tc2lnbmF0dXJlL3BvcnRmb2xpby1zaWduYXR1cmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWF4LXdpZHRoOiA5NjBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAxMHB4IDE1cHggMzBweCAxNXB4O1xyXG5cclxuICAueWMtcG9ydGZvbGlvLXNpZ25hdHVyZV9fdWJoYWNraW5nLWxvZ28ge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbjogMjBweCAzNSU7XHJcbiAgfVxyXG5cclxuICAueWMtcG9ydGZvbGlvLXNpZ25hdHVyZV9faW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIH1cclxufSIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogOTYwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAxMHB4IDE1cHggMzBweCAxNXB4O1xufVxuOmhvc3QgLnljLXBvcnRmb2xpby1zaWduYXR1cmVfX3ViaGFja2luZy1sb2dvIHtcbiAgd2lkdGg6IDMwJTtcbiAgbWFyZ2luOiAyMHB4IDM1JTtcbn1cbjpob3N0IC55Yy1wb3J0Zm9saW8tc2lnbmF0dXJlX19pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioSignatureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'yc-portfolio-signature',
                templateUrl: './portfolio-signature.component.html',
                styleUrls: ['./portfolio-signature.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/portfolio/portfolio-youtube/portfolio-youtube.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/portfolio/portfolio-youtube/portfolio-youtube.component.ts ***!
  \****************************************************************************/
/*! exports provided: PortfolioYoutubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioYoutubeComponent", function() { return PortfolioYoutubeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PortfolioYoutubeComponent {
    constructor() { }
    ngOnInit() {
    }
}
PortfolioYoutubeComponent.ɵfac = function PortfolioYoutubeComponent_Factory(t) { return new (t || PortfolioYoutubeComponent)(); };
PortfolioYoutubeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioYoutubeComponent, selectors: [["yc-portfolio-youtube"]], decls: 41, vars: 0, consts: [["src", "/assets/images/projects/youtube-channel.png", "alt", "youtube-logo", 1, "yc-portfolio-youtube__image"], ["href", "http://www.youtube.com/channel/UCQLEPbkEmwz4mABAV-kzQTQ?sub_confirmation=1", 1, "yc-portfolio-youtube__subscribe"], ["src", "/assets/images/projects/youtube-subscribe.png"], ["src", "/assets/images/projects/ROS_tutorial_cover.png", "alt", "ros-cover", 1, "yc-portfolio-youtube__image"], [1, "yc-portfolio-youtube__ros-playlist"], ["src", "https://www.youtube.com/embed/videoseries?list=PLk51HrKSBQ8-jTgD0qgRp1vmQeVSJ5SQC", "frameborder", "0", "allowfullscreen", ""]], template: function PortfolioYoutubeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "I started to upload videos to my youtube channel at Nov 2016, now I have over ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "1,800");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " subscribers and more than ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "300,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " views in my Robot Operating System (ROS) kinetic tutorial series");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Please come to my channel and subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Robot Operating System Kinetic Tutorial Series");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Recording video to teach viewers how to install and use Robot Operating System (ROS) to implement some awesome robotics algorithms, and it currently have 8 videos in the playlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Introduction and preparation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Install and configure ROS environment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Navigating ROS filesystem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Create and build ROS package");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "ROS topic, nodes, messages P1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "ROS topic, nodes, messages P2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Publisher & Subscriber P1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Publisher & Subscriber P2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Publisher & Subscriber P3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Controller implementation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "iframe", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 10px 15px 30px 15px;\n}\n[_nghost-%COMP%]   .yc-portfolio-youtube__image[_ngcontent-%COMP%] {\n  width: 60%;\n  margin: 20px 20%;\n}\n[_nghost-%COMP%]   .yc-portfolio-youtube__subscribe[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 200px;\n  margin: 20px auto;\n}\n[_nghost-%COMP%]   .yc-portfolio-youtube__subscribe[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 200px;\n  margin: 20px auto;\n}\n[_nghost-%COMP%]   .yc-portfolio-youtube__ros-playlist[_ngcontent-%COMP%] {\n  display: block;\n  width: 80%;\n  height: 0;\n  position: relative;\n  margin: 20px auto;\n  padding-bottom: 45%;\n}\n[_nghost-%COMP%]   .yc-portfolio-youtube__ros-playlist[_ngcontent-%COMP%]    > iframe[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby15b3V0dWJlL0Q6XFxfc2hhd25cXHdzXFx5Yy1zaGF3bi5naXRodWIuaW8vc3JjXFxhcHBcXHBvcnRmb2xpb1xccG9ydGZvbGlvLXlvdXR1YmVcXHBvcnRmb2xpby15b3V0dWJlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wb3J0Zm9saW8vcG9ydGZvbGlvLXlvdXR1YmUvcG9ydGZvbGlvLXlvdXR1YmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7QUNDRjtBRENFO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FDQ0o7QURFRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQUo7QURDSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ047QURHRTtFQUNFLGNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0RKO0FERUk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUNBTiIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby9wb3J0Zm9saW8teW91dHViZS9wb3J0Zm9saW8teW91dHViZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXgtd2lkdGg6IDk2MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweCAzMHB4IDE1cHg7XHJcblxyXG4gIC55Yy1wb3J0Zm9saW8teW91dHViZV9faW1hZ2Uge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbjogMjBweCAyMCU7XHJcbiAgfVxyXG5cclxuICAueWMtcG9ydGZvbGlvLXlvdXR1YmVfX3N1YnNjcmliZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgID4gaW1nIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnljLXBvcnRmb2xpby15b3V0dWJlX19yb3MtcGxheWxpc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNDUlO1xyXG4gICAgPiBpZnJhbWUge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgIH1cclxuICB9XHJcbn0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDk2MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMTBweCAxNXB4IDMwcHggMTVweDtcbn1cbjpob3N0IC55Yy1wb3J0Zm9saW8teW91dHViZV9faW1hZ2Uge1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW46IDIwcHggMjAlO1xufVxuOmhvc3QgLnljLXBvcnRmb2xpby15b3V0dWJlX19zdWJzY3JpYmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG59XG46aG9zdCAueWMtcG9ydGZvbGlvLXlvdXR1YmVfX3N1YnNjcmliZSA+IGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IDIwcHggYXV0bztcbn1cbjpob3N0IC55Yy1wb3J0Zm9saW8teW91dHViZV9fcm9zLXBsYXlsaXN0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDQ1JTtcbn1cbjpob3N0IC55Yy1wb3J0Zm9saW8teW91dHViZV9fcm9zLXBsYXlsaXN0ID4gaWZyYW1lIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioYoutubeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'yc-portfolio-youtube',
                templateUrl: './portfolio-youtube.component.html',
                styleUrls: ['./portfolio-youtube.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/portfolio/portfolio.module.ts":
/*!***********************************************!*\
  !*** ./src/app/portfolio/portfolio.module.ts ***!
  \***********************************************/
/*! exports provided: PortfolioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioModule", function() { return PortfolioModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio/portfolio.component.ts");
/* harmony import */ var _portfolio_linkedin_portfolio_linkedin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portfolio-linkedin/portfolio-linkedin.component */ "./src/app/portfolio/portfolio-linkedin/portfolio-linkedin.component.ts");
/* harmony import */ var _portfolio_plateiq_portfolio_plateiq_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./portfolio-plateiq/portfolio-plateiq.component */ "./src/app/portfolio/portfolio-plateiq/portfolio-plateiq.component.ts");
/* harmony import */ var _portfolio_lilitofu_portfolio_lilitofu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./portfolio-lilitofu/portfolio-lilitofu.component */ "./src/app/portfolio/portfolio-lilitofu/portfolio-lilitofu.component.ts");
/* harmony import */ var _portfolio_youtube_portfolio_youtube_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./portfolio-youtube/portfolio-youtube.component */ "./src/app/portfolio/portfolio-youtube/portfolio-youtube.component.ts");
/* harmony import */ var _portfolio_signature_portfolio_signature_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./portfolio-signature/portfolio-signature.component */ "./src/app/portfolio/portfolio-signature/portfolio-signature.component.ts");











class PortfolioModule {
}
PortfolioModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PortfolioModule });
PortfolioModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PortfolioModule_Factory(t) { return new (t || PortfolioModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: ':portfolioId', component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_3__["PortfolioComponent"] },
            ]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PortfolioModule, { declarations: [_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_3__["PortfolioComponent"],
        _portfolio_linkedin_portfolio_linkedin_component__WEBPACK_IMPORTED_MODULE_4__["PortfolioLinkedinComponent"],
        _portfolio_plateiq_portfolio_plateiq_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioPlateiqComponent"],
        _portfolio_lilitofu_portfolio_lilitofu_component__WEBPACK_IMPORTED_MODULE_6__["PortfolioLilitofuComponent"],
        _portfolio_youtube_portfolio_youtube_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioYoutubeComponent"],
        _portfolio_signature_portfolio_signature_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioSignatureComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_3__["PortfolioComponent"],
                    _portfolio_linkedin_portfolio_linkedin_component__WEBPACK_IMPORTED_MODULE_4__["PortfolioLinkedinComponent"],
                    _portfolio_plateiq_portfolio_plateiq_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioPlateiqComponent"],
                    _portfolio_lilitofu_portfolio_lilitofu_component__WEBPACK_IMPORTED_MODULE_6__["PortfolioLilitofuComponent"],
                    _portfolio_youtube_portfolio_youtube_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioYoutubeComponent"],
                    _portfolio_signature_portfolio_signature_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioSignatureComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                        { path: ':portfolioId', component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_3__["PortfolioComponent"] },
                    ]),
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/portfolio/portfolio/portfolio.component.ts":
/*!************************************************************!*\
  !*** ./src/app/portfolio/portfolio/portfolio.component.ts ***!
  \************************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _portfolio_linkedin_portfolio_linkedin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../portfolio-linkedin/portfolio-linkedin.component */ "./src/app/portfolio/portfolio-linkedin/portfolio-linkedin.component.ts");
/* harmony import */ var _portfolio_plateiq_portfolio_plateiq_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../portfolio-plateiq/portfolio-plateiq.component */ "./src/app/portfolio/portfolio-plateiq/portfolio-plateiq.component.ts");
/* harmony import */ var _portfolio_lilitofu_portfolio_lilitofu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../portfolio-lilitofu/portfolio-lilitofu.component */ "./src/app/portfolio/portfolio-lilitofu/portfolio-lilitofu.component.ts");
/* harmony import */ var _portfolio_youtube_portfolio_youtube_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../portfolio-youtube/portfolio-youtube.component */ "./src/app/portfolio/portfolio-youtube/portfolio-youtube.component.ts");
/* harmony import */ var _portfolio_signature_portfolio_signature_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../portfolio-signature/portfolio-signature.component */ "./src/app/portfolio/portfolio-signature/portfolio-signature.component.ts");









function PortfolioComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a");
} if (rf & 2) {
    const project_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("yc-portfolio__project yc-portfolio__project-", project_r6.id, "");
} }
function PortfolioComponent_yc_portfolio_linkedin_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "yc-portfolio-linkedin");
} }
function PortfolioComponent_yc_portfolio_plateiq_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "yc-portfolio-plateiq");
} }
function PortfolioComponent_yc_portfolio_lilitofu_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "yc-portfolio-lilitofu");
} }
function PortfolioComponent_yc_portfolio_youtube_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "yc-portfolio-youtube");
} }
function PortfolioComponent_yc_portfolio_signature_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "yc-portfolio-signature");
} }
class PortfolioComponent {
    constructor(_activatedRoute, _router) {
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this.projects = [
            {
                id: 'linkedin',
                external: false,
            },
            {
                id: 'plateiq',
                external: false,
            },
            {
                id: 'lilitofu',
                external: false,
            },
            {
                id: 'chatapp',
                external: true,
                link: 'https://yc-shawn.github.io/real-time-chat/',
            },
            {
                id: 'craigslist',
                external: true,
                link: 'https://yc-shawn.github.io/craigslist-housing',
            },
            {
                id: 'shoppingcart',
                external: true,
                link: 'https://yc-shawn.herokuapp.com/shoppingcart',
            },
            {
                id: 'spotify',
                external: true,
                link: 'https://yc-shawn.github.io/spotify',
            },
            {
                id: 'youtube',
                external: false,
            },
            {
                id: 'signature',
                external: false,
            },
        ];
        this.showPortfolioDetails = false;
        this.portfolioId = this._activatedRoute.snapshot.params.portfolioId;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.showPortfolioDetails = true;
        });
    }
    onBack() {
        this.showPortfolioDetails = false;
        setTimeout(() => {
            this._router.navigateByUrl('/?tag=portfolio');
        }, 301);
    }
}
PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) { return new (t || PortfolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioComponent, selectors: [["yc-portfolio"]], decls: 14, vars: 9, consts: [["id", "portfolio", 1, "yc-section-title"], [1, "yc-portfolio-container"], [1, "yc-portfolio__projects"], [3, "class", 4, "ngFor", "ngForOf"], [1, "yc-portfolio__detail-container", 3, "ngSwitch"], [1, "yc-portfolio__return-container"], [3, "click"], [1, "fas", "fa-chevron-left"], [4, "ngSwitchCase"]], template: function PortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "PORTFOLIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PortfolioComponent_a_4_Template, 1, 3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioComponent_Template_button_click_7_listener() { return ctx.onBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PortfolioComponent_yc_portfolio_linkedin_9_Template, 1, 0, "yc-portfolio-linkedin", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PortfolioComponent_yc_portfolio_plateiq_10_Template, 1, 0, "yc-portfolio-plateiq", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PortfolioComponent_yc_portfolio_lilitofu_11_Template, 1, 0, "yc-portfolio-lilitofu", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PortfolioComponent_yc_portfolio_youtube_12_Template, 1, 0, "yc-portfolio-youtube", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PortfolioComponent_yc_portfolio_signature_13_Template, 1, 0, "yc-portfolio-signature", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("yc-portfolio-detail-shown", ctx.showPortfolioDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.portfolioId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "plateiq");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "lilitofu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "youtube");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "signature");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _portfolio_linkedin_portfolio_linkedin_component__WEBPACK_IMPORTED_MODULE_3__["PortfolioLinkedinComponent"], _portfolio_plateiq_portfolio_plateiq_component__WEBPACK_IMPORTED_MODULE_4__["PortfolioPlateiqComponent"], _portfolio_lilitofu_portfolio_lilitofu_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioLilitofuComponent"], _portfolio_youtube_portfolio_youtube_component__WEBPACK_IMPORTED_MODULE_6__["PortfolioYoutubeComponent"], _portfolio_signature_portfolio_signature_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioSignatureComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  background-color: #f5f5f5;\n  padding-bottom: 100px;\n  height: 100vh;\n  overflow-y: scroll;\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%] {\n  max-width: 960px;\n  margin: 0 auto;\n  overflow: auto;\n  display: flex;\n  flex-wrap: wrap;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 100vw;\n  transform: translateX(-50%);\n  transition: all 0.3s ease-in-out;\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%] {\n  display: block;\n  width: 33.33333%;\n  float: left;\n  position: relative;\n  padding-top: 18.7%;\n  overflow: hidden;\n  background-position: center center;\n  background-size: cover;\n  box-shadow: 2px 2px 8px 0px darkgrey;\n  perspective: 300px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project.yc-portfolio__project-linkedin[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  background-image: url(/assets/images/projects/linkedin-cover.png);\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project.yc-portfolio__project-plateiq[_ngcontent-%COMP%] {\n  background-color: #17364f;\n  background-image: url(/assets/images/projects/plateiq-cover.jpeg);\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project.yc-portfolio__project-lilitofu[_ngcontent-%COMP%] {\n  background-color: #0fb8bd;\n  background-image: url(/assets/images/projects/lilitofu-cover.jpeg);\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project.yc-portfolio__project-chatapp[_ngcontent-%COMP%] {\n  background-color: #8bc174;\n  background-image: url(/assets/images/projects/chatapp-cover.jpg);\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project.yc-portfolio__project-craigslist[_ngcontent-%COMP%] {\n  background-color: #fe88ae;\n  background-image: url(/assets/images/projects/craigslist-cover.png);\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project.yc-portfolio__project-shoppingcart[_ngcontent-%COMP%] {\n  background-color: #e32240;\n  background-image: url(/assets/images/projects/shoppingcart-cover.png);\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project.yc-portfolio__project-spotify[_ngcontent-%COMP%] {\n  background-color: #515151;\n  background-image: url(/assets/images/projects/spotifyplaylist-cover.jpg);\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project.yc-portfolio__project-youtube[_ngcontent-%COMP%] {\n  background-color: #3895c7;\n  background-image: url(/assets/images/projects/youtube-cover.jpeg);\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project.yc-portfolio__project-signature[_ngcontent-%COMP%] {\n  background-color: #15565d;\n  background-image: url(/assets/images/projects/signature-cover.jpeg);\n}\n@media (max-width: 840px) {\n  [_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%] {\n    width: 50%;\n    padding-top: 28.125%;\n  }\n}\n@media screen and (max-width: 540px) {\n  [_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-top: 56.25%;\n  }\n}\n[_nghost-%COMP%]   .yc-portfolio__detail-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 100%;\n  width: 100%;\n  transform: translateX(0);\n  transition: all 0.3s ease-in-out;\n}\n[_nghost-%COMP%]   .yc-portfolio__detail-container[_ngcontent-%COMP%]   .yc-portfolio__return-container[_ngcontent-%COMP%] {\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 0 0 10px 10px;\n}\n[_nghost-%COMP%]   .yc-portfolio__detail-container[_ngcontent-%COMP%]   .yc-portfolio__return-container[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  background: white;\n  border: 2px solid #999;\n  color: #999;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n}\n[_nghost-%COMP%]   .yc-portfolio__detail-container[_ngcontent-%COMP%]   .yc-portfolio__return-container[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:hover {\n  border-color: #333;\n  color: #333;\n}\n[_nghost-%COMP%]   .yc-portfolio-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n[_nghost-%COMP%]   .yc-portfolio-container.yc-portfolio-detail-shown[_ngcontent-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%] {\n  left: -100%;\n}\n[_nghost-%COMP%]   .yc-portfolio-container.yc-portfolio-detail-shown[_ngcontent-%COMP%]   .yc-portfolio__detail-container[_ngcontent-%COMP%] {\n  left: 50%;\n  transform: translateX(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby9EOlxcX3NoYXduXFx3c1xceWMtc2hhd24uZ2l0aHViLmlvL3NyY1xcYXBwXFxwb3J0Zm9saW9cXHBvcnRmb2xpb1xccG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wb3J0Zm9saW8vcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURDRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGdDQUFBO0FDQ0o7QURBSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNFTjtBRERNO0VBQ0UseUJBQUE7RUFDQSxpRUFBQTtBQ0dSO0FERE07RUFDRSx5QkFBQTtFQUNBLGlFQUFBO0FDR1I7QURETTtFQUNFLHlCQUFBO0VBQ0Esa0VBQUE7QUNHUjtBRERNO0VBQ0UseUJBQUE7RUFDQSxnRUFBQTtBQ0dSO0FERE07RUFDRSx5QkFBQTtFQUNBLG1FQUFBO0FDR1I7QURETTtFQUNFLHlCQUFBO0VBQ0EscUVBQUE7QUNHUjtBRERNO0VBQ0UseUJBQUE7RUFDQSx3RUFBQTtBQ0dSO0FERE07RUFDRSx5QkFBQTtFQUNBLGlFQUFBO0FDR1I7QURETTtFQUNFLHlCQUFBO0VBQ0EsbUVBQUE7QUNHUjtBRERNO0VBaERGO0lBaURJLFVBQUE7SUFDQSxvQkFBQTtFQ0lOO0FBQ0Y7QURITTtFQXBERjtJQXFESSxXQUFBO0lBQ0EsbUJBQUE7RUNNTjtBQUNGO0FERkU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0EsZ0NBQUE7QUNJSjtBREZJO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBYUEsc0JBQUE7QUNSTjtBREpNO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDTVI7QURMUTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQ09WO0FEQUU7RUFDRSxrQkFBQTtBQ0VKO0FEQ007RUFDRSxXQUFBO0FDQ1I7QURDTTtFQUNFLFNBQUE7RUFDQSwyQkFBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcblxyXG4gIC55Yy1wb3J0Zm9saW9fX3Byb2plY3RzIHtcclxuICAgIG1heC13aWR0aDogOTYwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIC55Yy1wb3J0Zm9saW9fX3Byb2plY3Qge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDMzLjMzMzMzJTtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgcGFkZGluZy10b3A6IDE4LjclO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICBib3gtc2hhZG93OiAycHggMnB4IDhweCAwcHggZGFya2dyZXk7XHJcbiAgICAgIHBlcnNwZWN0aXZlOiAzMDBweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAmLnljLXBvcnRmb2xpb19fcHJvamVjdC1saW5rZWRpbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvcHJvamVjdHMvbGlua2VkaW4tY292ZXIucG5nKTtcclxuICAgICAgfVxyXG4gICAgICAmLnljLXBvcnRmb2xpb19fcHJvamVjdC1wbGF0ZWlxIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTczNjRmO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy9wbGF0ZWlxLWNvdmVyLmpwZWcpO1xyXG4gICAgICB9XHJcbiAgICAgICYueWMtcG9ydGZvbGlvX19wcm9qZWN0LWxpbGl0b2Z1IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGZiOGJkO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy9saWxpdG9mdS1jb3Zlci5qcGVnKTtcclxuICAgICAgfVxyXG4gICAgICAmLnljLXBvcnRmb2xpb19fcHJvamVjdC1jaGF0YXBwIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGJjMTc0O1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy9jaGF0YXBwLWNvdmVyLmpwZyk7XHJcbiAgICAgIH1cclxuICAgICAgJi55Yy1wb3J0Zm9saW9fX3Byb2plY3QtY3JhaWdzbGlzdCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlODhhZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvcHJvamVjdHMvY3JhaWdzbGlzdC1jb3Zlci5wbmcpO1xyXG4gICAgICB9XHJcbiAgICAgICYueWMtcG9ydGZvbGlvX19wcm9qZWN0LXNob3BwaW5nY2FydCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UzMjI0MDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvcHJvamVjdHMvc2hvcHBpbmdjYXJ0LWNvdmVyLnBuZyk7XHJcbiAgICAgIH1cclxuICAgICAgJi55Yy1wb3J0Zm9saW9fX3Byb2plY3Qtc3BvdGlmeSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzUxNTE1MTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvcHJvamVjdHMvc3BvdGlmeXBsYXlsaXN0LWNvdmVyLmpwZyk7XHJcbiAgICAgIH1cclxuICAgICAgJi55Yy1wb3J0Zm9saW9fX3Byb2plY3QteW91dHViZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4OTVjNztcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvcHJvamVjdHMveW91dHViZS1jb3Zlci5qcGVnKTtcclxuICAgICAgfVxyXG4gICAgICAmLnljLXBvcnRmb2xpb19fcHJvamVjdC1zaWduYXR1cmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTU2NWQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL3Byb2plY3RzL3NpZ25hdHVyZS1jb3Zlci5qcGVnKTtcclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDo4NDBweCkge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDI4LjEyNSU7XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NDBweCkge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1Ni4yNSU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC55Yy1wb3J0Zm9saW9fX2RldGFpbC1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgLnljLXBvcnRmb2xpb19fcmV0dXJuLWNvbnRhaW5lciB7XHJcbiAgICAgIG1heC13aWR0aDogOTYwcHg7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICA+IGJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzk5OTtcclxuICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHBhZGRpbmc6IDAgMCAxMHB4IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAueWMtcG9ydGZvbGlvLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgJi55Yy1wb3J0Zm9saW8tZGV0YWlsLXNob3duIHtcclxuICAgICAgLnljLXBvcnRmb2xpb19fcHJvamVjdHMge1xyXG4gICAgICAgIGxlZnQ6IC0xMDAlO1xyXG4gICAgICB9XHJcbiAgICAgIC55Yy1wb3J0Zm9saW9fX2RldGFpbC1jb250YWluZXIge1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbjpob3N0IC55Yy1wb3J0Zm9saW9fX3Byb2plY3RzIHtcbiAgbWF4LXdpZHRoOiA5NjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG92ZXJmbG93OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiAxMDB2dztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbjpob3N0IC55Yy1wb3J0Zm9saW9fX3Byb2plY3RzIC55Yy1wb3J0Zm9saW9fX3Byb2plY3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDMzLjMzMzMzJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy10b3A6IDE4LjclO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3gtc2hhZG93OiAycHggMnB4IDhweCAwcHggZGFya2dyZXk7XG4gIHBlcnNwZWN0aXZlOiAzMDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgLnljLXBvcnRmb2xpb19fcHJvamVjdHMgLnljLXBvcnRmb2xpb19fcHJvamVjdC55Yy1wb3J0Zm9saW9fX3Byb2plY3QtbGlua2VkaW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvcHJvamVjdHMvbGlua2VkaW4tY292ZXIucG5nKTtcbn1cbjpob3N0IC55Yy1wb3J0Zm9saW9fX3Byb2plY3RzIC55Yy1wb3J0Zm9saW9fX3Byb2plY3QueWMtcG9ydGZvbGlvX19wcm9qZWN0LXBsYXRlaXEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTczNjRmO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvcHJvamVjdHMvcGxhdGVpcS1jb3Zlci5qcGVnKTtcbn1cbjpob3N0IC55Yy1wb3J0Zm9saW9fX3Byb2plY3RzIC55Yy1wb3J0Zm9saW9fX3Byb2plY3QueWMtcG9ydGZvbGlvX19wcm9qZWN0LWxpbGl0b2Z1IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmYjhiZDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL3Byb2plY3RzL2xpbGl0b2Z1LWNvdmVyLmpwZWcpO1xufVxuOmhvc3QgLnljLXBvcnRmb2xpb19fcHJvamVjdHMgLnljLXBvcnRmb2xpb19fcHJvamVjdC55Yy1wb3J0Zm9saW9fX3Byb2plY3QtY2hhdGFwcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4YmMxNzQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy9jaGF0YXBwLWNvdmVyLmpwZyk7XG59XG46aG9zdCAueWMtcG9ydGZvbGlvX19wcm9qZWN0cyAueWMtcG9ydGZvbGlvX19wcm9qZWN0LnljLXBvcnRmb2xpb19fcHJvamVjdC1jcmFpZ3NsaXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlODhhZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL3Byb2plY3RzL2NyYWlnc2xpc3QtY292ZXIucG5nKTtcbn1cbjpob3N0IC55Yy1wb3J0Zm9saW9fX3Byb2plY3RzIC55Yy1wb3J0Zm9saW9fX3Byb2plY3QueWMtcG9ydGZvbGlvX19wcm9qZWN0LXNob3BwaW5nY2FydCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMzIyNDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy9zaG9wcGluZ2NhcnQtY292ZXIucG5nKTtcbn1cbjpob3N0IC55Yy1wb3J0Zm9saW9fX3Byb2plY3RzIC55Yy1wb3J0Zm9saW9fX3Byb2plY3QueWMtcG9ydGZvbGlvX19wcm9qZWN0LXNwb3RpZnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTE1MTUxO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvcHJvamVjdHMvc3BvdGlmeXBsYXlsaXN0LWNvdmVyLmpwZyk7XG59XG46aG9zdCAueWMtcG9ydGZvbGlvX19wcm9qZWN0cyAueWMtcG9ydGZvbGlvX19wcm9qZWN0LnljLXBvcnRmb2xpb19fcHJvamVjdC15b3V0dWJlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4OTVjNztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL3Byb2plY3RzL3lvdXR1YmUtY292ZXIuanBlZyk7XG59XG46aG9zdCAueWMtcG9ydGZvbGlvX19wcm9qZWN0cyAueWMtcG9ydGZvbGlvX19wcm9qZWN0LnljLXBvcnRmb2xpb19fcHJvamVjdC1zaWduYXR1cmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTU1NjVkO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvcHJvamVjdHMvc2lnbmF0dXJlLWNvdmVyLmpwZWcpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDg0MHB4KSB7XG4gIDpob3N0IC55Yy1wb3J0Zm9saW9fX3Byb2plY3RzIC55Yy1wb3J0Zm9saW9fX3Byb2plY3Qge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcGFkZGluZy10b3A6IDI4LjEyNSU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU0MHB4KSB7XG4gIDpob3N0IC55Yy1wb3J0Zm9saW9fX3Byb2plY3RzIC55Yy1wb3J0Zm9saW9fX3Byb2plY3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiA1Ni4yNSU7XG4gIH1cbn1cbjpob3N0IC55Yy1wb3J0Zm9saW9fX2RldGFpbC1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG46aG9zdCAueWMtcG9ydGZvbGlvX19kZXRhaWwtY29udGFpbmVyIC55Yy1wb3J0Zm9saW9fX3JldHVybi1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDk2MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCAwIDEwcHggMTBweDtcbn1cbjpob3N0IC55Yy1wb3J0Zm9saW9fX2RldGFpbC1jb250YWluZXIgLnljLXBvcnRmb2xpb19fcmV0dXJuLWNvbnRhaW5lciA+IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjOTk5O1xuICBjb2xvcjogIzk5OTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuOmhvc3QgLnljLXBvcnRmb2xpb19fZGV0YWlsLWNvbnRhaW5lciAueWMtcG9ydGZvbGlvX19yZXR1cm4tY29udGFpbmVyID4gYnV0dG9uOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjMzMzO1xuICBjb2xvcjogIzMzMztcbn1cbjpob3N0IC55Yy1wb3J0Zm9saW8tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuOmhvc3QgLnljLXBvcnRmb2xpby1jb250YWluZXIueWMtcG9ydGZvbGlvLWRldGFpbC1zaG93biAueWMtcG9ydGZvbGlvX19wcm9qZWN0cyB7XG4gIGxlZnQ6IC0xMDAlO1xufVxuOmhvc3QgLnljLXBvcnRmb2xpby1jb250YWluZXIueWMtcG9ydGZvbGlvLWRldGFpbC1zaG93biAueWMtcG9ydGZvbGlvX19kZXRhaWwtY29udGFpbmVyIHtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'yc-portfolio',
                templateUrl: './portfolio.component.html',
                styleUrls: ['./portfolio.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\_shawn\ws\yc-shawn.github.io\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map