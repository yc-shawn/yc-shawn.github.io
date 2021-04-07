(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/runner/work/yc-shawn.github.io/yc-shawn.github.io/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0kCP":
    /*!*****************************************************************!*\
      !*** ./src/app/home/home-portfolio/home-portfolio.component.ts ***!
      \*****************************************************************/

    /*! exports provided: HomePortfolioComponent */

    /***/
    function kCP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePortfolioComponent", function () {
        return HomePortfolioComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function HomePortfolioComponent_ng_container_3_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a", 5);
        }

        if (rf & 2) {
          var project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("yc-portfolio__project yc-portfolio__project-", project_r1.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", project_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function HomePortfolioComponent_ng_container_3_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePortfolioComponent_ng_container_3_ng_template_2_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.onProject(project_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("yc-portfolio__project yc-portfolio__project-", project_r1.id, "");
        }
      }

      function HomePortfolioComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomePortfolioComponent_ng_container_3_a_1_Template, 1, 4, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomePortfolioComponent_ng_container_3_ng_template_2_Template, 1, 3, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var project_r1 = ctx.$implicit;

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r1.external)("ngIfElse", _r3);
        }
      }

      var HomePortfolioComponent = /*#__PURE__*/function () {
        function HomePortfolioComponent(_router, _activatedRoute) {
          _classCallCheck(this, HomePortfolioComponent);

          this._router = _router;
          this._activatedRoute = _activatedRoute;
          this.projects = [{
            id: 'linkedin',
            external: false
          }, {
            id: 'plateiq',
            external: false
          }, {
            id: 'lilitofu',
            external: false
          }, {
            id: 'chatapp',
            external: true,
            link: 'https://yc-shawn.github.io/real-time-chat/'
          }, {
            id: 'craigslist',
            external: true,
            link: 'https://yc-shawn.github.io/craigslist-housing'
          }, {
            id: 'shoppingcart',
            external: true,
            link: 'https://yc-shawn.herokuapp.com/shoppingcart'
          }, {
            id: 'spotify',
            external: true,
            link: 'https://yc-shawn.github.io/spotify'
          }, {
            id: 'youtube',
            external: false
          }, {
            id: 'signature',
            external: false
          }];
        }

        _createClass(HomePortfolioComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            var tag = this._activatedRoute.snapshot.queryParams.tag;

            if (tag === 'portfolio') {
              setTimeout(function () {
                _this._scrollToPortfolio();
              });
            }
          }
        }, {
          key: "onProject",
          value: function onProject(project) {
            var _this2 = this;

            this._scrollToPortfolio(300, function () {
              _this2._router.navigateByUrl("portfolio/".concat(project.id));
            });
          }
        }, {
          key: "_scrollToPortfolio",
          value: function _scrollToPortfolio() {
            var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var callback = arguments.length > 1 ? arguments[1] : undefined;
            $('yc-home').animate({
              scrollTop: $("#portfolio").offset().top + $('yc-home')[0].scrollTop + 1
            }, duration, function () {
              if (callback) {
                callback();
              }
            });
          }
        }]);

        return HomePortfolioComponent;
      }();

      HomePortfolioComponent.ɵfac = function HomePortfolioComponent_Factory(t) {
        return new (t || HomePortfolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
      };

      HomePortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomePortfolioComponent,
        selectors: [["yc-home-portfolio"]],
        decls: 4,
        vars: 1,
        consts: [["id", "portfolio", 1, "yc-section-title"], [1, "yc-portfolio__projects"], [4, "ngFor", "ngForOf"], [3, "href", "class", 4, "ngIf", "ngIfElse"], ["internalLink", ""], [3, "href"], [3, "click"]],
        template: function HomePortfolioComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "PORTFOLIO");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomePortfolioComponent_ng_container_3_Template, 4, 2, "ng-container", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        styles: ["[_nghost-%COMP%] {\n  display: block;\n  background-color: #f5f5f5;\n  padding-bottom: 100px;\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%] {\n  max-width: 960px;\n  margin: 0 auto;\n  overflow: auto;\n  display: flex;\n  flex-wrap: wrap;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%] {\n  display: block;\n  width: 33.33333%;\n  float: left;\n  position: relative;\n  padding-top: 18.7%;\n  overflow: hidden;\n  background-position: center center;\n  background-size: cover;\n  box-shadow: 2px 2px 8px 0px darkgrey;\n  perspective: 300px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  z-index: 1;\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(1) {\n  transform-origin: left top;\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(2) {\n  transform-origin: center top;\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(3) {\n  transform-origin: right top;\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(4) {\n  transform-origin: left center;\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(5) {\n  transform-origin: center center;\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(6) {\n  transform-origin: right center;\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(7) {\n  transform-origin: left bottom;\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(8) {\n  transform-origin: center bottom;\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(9) {\n  transform-origin: right bottom;\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project.yc-portfolio__project-linkedin[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  background-image: url(/assets/images/projects/linkedin-cover.png);\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project.yc-portfolio__project-plateiq[_ngcontent-%COMP%] {\n  background-color: #17364f;\n  background-image: url(/assets/images/projects/plateiq-cover.jpeg);\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project.yc-portfolio__project-lilitofu[_ngcontent-%COMP%] {\n  background-color: #0fb8bd;\n  background-image: url(/assets/images/projects/lilitofu-cover.jpeg);\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project.yc-portfolio__project-chatapp[_ngcontent-%COMP%] {\n  background-color: #8bc174;\n  background-image: url(/assets/images/projects/chatapp-cover.jpg);\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project.yc-portfolio__project-craigslist[_ngcontent-%COMP%] {\n  background-color: #fe88ae;\n  background-image: url(/assets/images/projects/craigslist-cover.png);\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project.yc-portfolio__project-shoppingcart[_ngcontent-%COMP%] {\n  background-color: #e32240;\n  background-image: url(/assets/images/projects/shoppingcart-cover.png);\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project.yc-portfolio__project-spotify[_ngcontent-%COMP%] {\n  background-color: #515151;\n  background-image: url(/assets/images/projects/spotifyplaylist-cover.jpg);\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project.yc-portfolio__project-youtube[_ngcontent-%COMP%] {\n  background-color: #3895c7;\n  background-image: url(/assets/images/projects/youtube-cover.jpeg);\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project.yc-portfolio__project-signature[_ngcontent-%COMP%] {\n  background-color: #15565d;\n  background-image: url(/assets/images/projects/signature-cover.jpeg);\n}\n@media (max-width: 840px) {\n  [_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%] {\n    width: 50%;\n    padding-top: 28.125%;\n  }\n  [_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(1) {\n    transform-origin: left top;\n  }\n  [_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(2) {\n    transform-origin: right top;\n  }\n  [_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(3) {\n    transform-origin: left center;\n  }\n  [_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(4) {\n    transform-origin: right center;\n  }\n  [_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(5) {\n    transform-origin: left center;\n  }\n  [_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(6) {\n    transform-origin: right center;\n  }\n  [_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(7) {\n    transform-origin: left center;\n  }\n  [_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(8) {\n    transform-origin: right bottom;\n  }\n  [_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(9) {\n    transform-origin: left bottom;\n  }\n}\n@media screen and (max-width: 540px) {\n  [_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-top: 56.25%;\n  }\n  [_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(1) {\n    transform-origin: center top;\n  }\n  [_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(2) {\n    transform-origin: center center;\n  }\n  [_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(3) {\n    transform-origin: center center;\n  }\n  [_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(4) {\n    transform-origin: center center;\n  }\n  [_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(5) {\n    transform-origin: center center;\n  }\n  [_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(6) {\n    transform-origin: center center;\n  }\n  [_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(7) {\n    transform-origin: center center;\n  }\n  [_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(8) {\n    transform-origin: center center;\n  }\n  [_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%]:nth-of-type(9) {\n    transform-origin: center bottom;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUtcG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFDRjtBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUFJO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUVOO0FBRE07RUFDRSxzQkFBQTtFQUNBLFVBQUE7QUFHUjtBQVlRO0VBQ0UsMEJBQUE7QUFWVjtBQVNRO0VBQ0UsNEJBQUE7QUFQVjtBQU1RO0VBQ0UsMkJBQUE7QUFKVjtBQUdRO0VBQ0UsNkJBQUE7QUFEVjtBQUFRO0VBQ0UsK0JBQUE7QUFFVjtBQUhRO0VBQ0UsOEJBQUE7QUFLVjtBQU5RO0VBQ0UsNkJBQUE7QUFRVjtBQVRRO0VBQ0UsK0JBQUE7QUFXVjtBQVpRO0VBQ0UsOEJBQUE7QUFjVjtBQVhNO0VBQ0UseUJBQUE7RUFDQSxpRUFBQTtBQWFSO0FBWE07RUFDRSx5QkFBQTtFQUNBLGlFQUFBO0FBYVI7QUFYTTtFQUNFLHlCQUFBO0VBQ0Esa0VBQUE7QUFhUjtBQVhNO0VBQ0UseUJBQUE7RUFDQSxnRUFBQTtBQWFSO0FBWE07RUFDRSx5QkFBQTtFQUNBLG1FQUFBO0FBYVI7QUFYTTtFQUNFLHlCQUFBO0VBQ0EscUVBQUE7QUFhUjtBQVhNO0VBQ0UseUJBQUE7RUFDQSx3RUFBQTtBQWFSO0FBWE07RUFDRSx5QkFBQTtFQUNBLGlFQUFBO0FBYVI7QUFYTTtFQUNFLHlCQUFBO0VBQ0EsbUVBQUE7QUFhUjtBQVhNO0VBckVGO0lBc0VJLFVBQUE7SUFDQSxvQkFBQTtFQWNOO0VBQVE7SUFDRSwwQkFBQTtFQUVWO0VBSFE7SUFDRSwyQkFBQTtFQUtWO0VBTlE7SUFDRSw2QkFBQTtFQVFWO0VBVFE7SUFDRSw4QkFBQTtFQVdWO0VBWlE7SUFDRSw2QkFBQTtFQWNWO0VBZlE7SUFDRSw4QkFBQTtFQWlCVjtFQWxCUTtJQUNFLDZCQUFBO0VBb0JWO0VBckJRO0lBQ0UsOEJBQUE7RUF1QlY7RUF4QlE7SUFDRSw2QkFBQTtFQTBCVjtBQUNGO0FBdkJNO0VBMUZGO0lBMkZJLFdBQUE7SUFDQSxtQkFBQTtFQTBCTjtFQWpCUTtJQUNFLDRCQUFBO0VBbUJWO0VBcEJRO0lBQ0UsK0JBQUE7RUFzQlY7RUF2QlE7SUFDRSwrQkFBQTtFQXlCVjtFQTFCUTtJQUNFLCtCQUFBO0VBNEJWO0VBN0JRO0lBQ0UsK0JBQUE7RUErQlY7RUFoQ1E7SUFDRSwrQkFBQTtFQWtDVjtFQW5DUTtJQUNFLCtCQUFBO0VBcUNWO0VBdENRO0lBQ0UsK0JBQUE7RUF3Q1Y7RUF6Q1E7SUFDRSwrQkFBQTtFQTJDVjtBQUNGIiwiZmlsZSI6ImhvbWUtcG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuXG4gIC55Yy1wb3J0Zm9saW9fX3Byb2plY3RzIHtcbiAgICBtYXgtd2lkdGg6IDk2MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLnljLXBvcnRmb2xpb19fcHJvamVjdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAzMy4zMzMzMyU7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHBhZGRpbmctdG9wOiAxOC43JTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIGJveC1zaGFkb3c6IDJweCAycHggOHB4IDBweCBkYXJrZ3JleTtcbiAgICAgIHBlcnNwZWN0aXZlOiAzMDBweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgfVxuICAgICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCA5IHtcbiAgICAgICAgJHg6IGNlbnRlcjtcbiAgICAgICAgJHk6IGNlbnRlcjtcbiAgICAgICAgQGlmICRpICUgMyA9PSAxIHtcbiAgICAgICAgICAkeDogbGVmdDtcbiAgICAgICAgfSBAZWxzZSBpZiAkaSAlIDMgPT0gMCB7XG4gICAgICAgICAgJHg6IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIEBpZiAkaSA+PSAxIGFuZCAgJGkgPD0gMyB7XG4gICAgICAgICAgJHk6IHRvcDtcbiAgICAgICAgfSBAZWxzZSBpZiAkaSA+PSA3IGFuZCAkaSA8PSA5IHtcbiAgICAgICAgICAkeTogYm90dG9tO1xuICAgICAgICB9XG4gICAgICAgICY6bnRoLW9mLXR5cGUoI3skaX0pIHtcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAkeCAkeTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJi55Yy1wb3J0Zm9saW9fX3Byb2plY3QtbGlua2VkaW4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvcHJvamVjdHMvbGlua2VkaW4tY292ZXIucG5nKTtcbiAgICAgIH1cbiAgICAgICYueWMtcG9ydGZvbGlvX19wcm9qZWN0LXBsYXRlaXEge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTczNjRmO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvcHJvamVjdHMvcGxhdGVpcS1jb3Zlci5qcGVnKTtcbiAgICAgIH1cbiAgICAgICYueWMtcG9ydGZvbGlvX19wcm9qZWN0LWxpbGl0b2Z1IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBmYjhiZDtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL3Byb2plY3RzL2xpbGl0b2Z1LWNvdmVyLmpwZWcpO1xuICAgICAgfVxuICAgICAgJi55Yy1wb3J0Zm9saW9fX3Byb2plY3QtY2hhdGFwcCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4YmMxNzQ7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy9jaGF0YXBwLWNvdmVyLmpwZyk7XG4gICAgICB9XG4gICAgICAmLnljLXBvcnRmb2xpb19fcHJvamVjdC1jcmFpZ3NsaXN0IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlODhhZTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL3Byb2plY3RzL2NyYWlnc2xpc3QtY292ZXIucG5nKTtcbiAgICAgIH1cbiAgICAgICYueWMtcG9ydGZvbGlvX19wcm9qZWN0LXNob3BwaW5nY2FydCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMzIyNDA7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy9zaG9wcGluZ2NhcnQtY292ZXIucG5nKTtcbiAgICAgIH1cbiAgICAgICYueWMtcG9ydGZvbGlvX19wcm9qZWN0LXNwb3RpZnkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTE1MTUxO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvcHJvamVjdHMvc3BvdGlmeXBsYXlsaXN0LWNvdmVyLmpwZyk7XG4gICAgICB9XG4gICAgICAmLnljLXBvcnRmb2xpb19fcHJvamVjdC15b3V0dWJlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4OTVjNztcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL3Byb2plY3RzL3lvdXR1YmUtY292ZXIuanBlZyk7XG4gICAgICB9XG4gICAgICAmLnljLXBvcnRmb2xpb19fcHJvamVjdC1zaWduYXR1cmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTU1NjVkO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvcHJvamVjdHMvc2lnbmF0dXJlLWNvdmVyLmpwZWcpO1xuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ODQwcHgpIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgcGFkZGluZy10b3A6IDI4LjEyNSU7XG4gICAgICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggOSB7XG4gICAgICAgICAgJHg6IGNlbnRlcjtcbiAgICAgICAgICAkeTogY2VudGVyO1xuICAgICAgICAgIEBpZiAkaSAlIDIgPT0gMSB7XG4gICAgICAgICAgICAkeDogbGVmdDtcbiAgICAgICAgICB9IEBlbHNlIGlmICRpICUgMiA9PSAwIHtcbiAgICAgICAgICAgICR4OiByaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQGlmICRpID49IDEgYW5kICAkaSA8PSAyIHtcbiAgICAgICAgICAgICR5OiB0b3A7XG4gICAgICAgICAgfSAgQGVsc2UgaWYgJGkgPj0gOCBhbmQgJGkgPD0gOSB7XG4gICAgICAgICAgICAkeTogYm90dG9tO1xuICAgICAgICAgIH1cbiAgICAgICAgICAmOm50aC1vZi10eXBlKCN7JGl9KSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAkeCAkeTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTQwcHgpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1Ni4yNSU7XG4gICAgICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggOSB7XG4gICAgICAgICAgJHk6IGNlbnRlcjtcbiAgICAgICAgICBAaWYgJGkgPT0gMSB7XG4gICAgICAgICAgICAkeTogdG9wO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAaWYgJGkgPT0gOSB7XG4gICAgICAgICAgICAkeTogYm90dG9tO1xuICAgICAgICAgIH1cbiAgICAgICAgICAmOm50aC1vZi10eXBlKCN7JGl9KSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgJHk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19 */"]
      });
      /***/
    },

    /***/
    "2J9f":
    /*!*************************************************************!*\
      !*** ./src/app/home/home-contact/home-contact.component.ts ***!
      \*************************************************************/

    /*! exports provided: HomeContactComponent */

    /***/
    function J9f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeContactComponent", function () {
        return HomeContactComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var HomeContactComponent = /*#__PURE__*/function () {
        function HomeContactComponent(_http) {
          _classCallCheck(this, HomeContactComponent);

          this._http = _http;
          this.id = 'contact';
          this.contact = {
            name: null,
            _replyto: null,
            message: null
          };
        }

        _createClass(HomeContactComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            console.log('Submit!', this.contact);

            if (this.contact.name && this.contact._replyto) {
              this._http.post('https://formspree.io/ychen248@buffalo.edu', this.contact).subscribe();
            }
          }
        }]);

        return HomeContactComponent;
      }();

      HomeContactComponent.ɵfac = function HomeContactComponent_Factory(t) {
        return new (t || HomeContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      HomeContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeContactComponent,
        selectors: [["yc-home-contact"]],
        hostVars: 1,
        hostBindings: function HomeContactComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);
          }
        },
        decls: 20,
        vars: 3,
        consts: [[1, "yc-contact__form"], [1, "yc-contact__form-content"], ["appearance", "standard", 1, "yc-contact__form-field"], ["matInput", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "rows", "4", 3, "ngModel", "ngModelChange"], [1, "yc-contact__form-actions"], ["mat-raised-button", "", "color", "primary", 1, "yc-contact__form-submit", 3, "click"]],
        template: function HomeContactComponent_Template(rf, ctx) {
          if (rf & 1) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeContactComponent_Template_input_ngModelChange_8_listener($event) {
              return ctx.contact.name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeContactComponent_Template_input_ngModelChange_12_listener($event) {
              return ctx.contact._replyto = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Message");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "textarea", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeContactComponent_Template_textarea_ngModelChange_16_listener($event) {
              return ctx.contact.message = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-actions", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeContactComponent_Template_button_click_18_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contact.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contact._replyto);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contact.message);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]],
        styles: ["[_nghost-%COMP%] {\n  display: block;\n  background-image: url(\"/assets/images/road_sit_right_16_8.jpg\");\n  background-size: cover;\n  background-position: center center;\n  width: 100%;\n  height: 0;\n  padding-top: 50%;\n  position: relative;\n}\n@media screen and (max-width: 992px) {\n  [_nghost-%COMP%] {\n    height: auto;\n    padding: 20px 0;\n  }\n}\n[_nghost-%COMP%]   .yc-contact__form[_ngcontent-%COMP%] {\n  width: 30%;\n  position: absolute;\n  top: 50%;\n  left: 20%;\n  transform: translateY(-50%);\n  padding: 15px;\n  margin: 0;\n}\n[_nghost-%COMP%]   .yc-contact__form[_ngcontent-%COMP%]   .yc-contact__form-content[_ngcontent-%COMP%], [_nghost-%COMP%]   .yc-contact__form[_ngcontent-%COMP%]   .yc-contact__form-actions[_ngcontent-%COMP%] {\n  margin: 0 16px;\n}\n[_nghost-%COMP%]   .yc-contact__form[_ngcontent-%COMP%]   .yc-contact__form-field[_ngcontent-%COMP%], [_nghost-%COMP%]   .yc-contact__form[_ngcontent-%COMP%]   .yc-contact__form-submit[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media screen and (max-width: 992px) {\n  [_nghost-%COMP%]   .yc-contact__form[_ngcontent-%COMP%] {\n    position: static;\n    transform: none;\n    width: 45%;\n    margin: 0 20px;\n  }\n}\n@media screen and (max-width: 768px) {\n  [_nghost-%COMP%]   .yc-contact__form[_ngcontent-%COMP%] {\n    opacity: 0.9;\n    width: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUtY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSwrREFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUFFO0VBVEY7SUFVSSxZQUFBO0lBQ0EsZUFBQTtFQUdGO0FBQ0Y7QUFERTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQUdKO0FBRkk7O0VBRUUsY0FBQTtBQUlOO0FBRkk7O0VBRUUsV0FBQTtBQUlOO0FBRkk7RUFoQkY7SUFpQkksZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsVUFBQTtJQUNBLGNBQUE7RUFLSjtBQUNGO0FBSkk7RUF0QkY7SUF1QkksWUFBQTtJQUNBLFdBQUE7RUFPSjtBQUNGIiwiZmlsZSI6ImhvbWUtY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvcm9hZF9zaXRfcmlnaHRfMTZfOC5qcGcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMDtcbiAgcGFkZGluZy10b3A6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG4gIH1cblxuICAueWMtY29udGFjdF9fZm9ybSB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogMjAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIG1hcmdpbjogMDtcbiAgICAueWMtY29udGFjdF9fZm9ybS1jb250ZW50LFxuICAgIC55Yy1jb250YWN0X19mb3JtLWFjdGlvbnMge1xuICAgICAgbWFyZ2luOiAwIDE2cHg7XG4gICAgfVxuICAgIC55Yy1jb250YWN0X19mb3JtLWZpZWxkLFxuICAgIC55Yy1jb250YWN0X19mb3JtLXN1Ym1pdCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgICB3aWR0aDogNDUlO1xuICAgICAgbWFyZ2luOiAwIDIwcHg7XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBvcGFjaXR5OiAwLjk7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICB9XG4gIH1cbn1cbiAgXG4gICJdfQ== */"]
      });
      /***/
    },

    /***/
    "9enj":
    /*!***********************************************!*\
      !*** ./src/app/portfolio/portfolio.module.ts ***!
      \***********************************************/

    /*! exports provided: PortfolioModule */

    /***/
    function enj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortfolioModule", function () {
        return PortfolioModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./portfolio/portfolio.component */
      "ptD8");
      /* harmony import */


      var _portfolio_linkedin_portfolio_linkedin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./portfolio-linkedin/portfolio-linkedin.component */
      "qqd6");
      /* harmony import */


      var _portfolio_plateiq_portfolio_plateiq_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./portfolio-plateiq/portfolio-plateiq.component */
      "lMke");
      /* harmony import */


      var _portfolio_lilitofu_portfolio_lilitofu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./portfolio-lilitofu/portfolio-lilitofu.component */
      "K/by");
      /* harmony import */


      var _portfolio_youtube_portfolio_youtube_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./portfolio-youtube/portfolio-youtube.component */
      "xVix");
      /* harmony import */


      var _portfolio_signature_portfolio_signature_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./portfolio-signature/portfolio-signature.component */
      "a7NM");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PortfolioModule = function PortfolioModule() {
        _classCallCheck(this, PortfolioModule);
      };

      PortfolioModule.ɵfac = function PortfolioModule_Factory(t) {
        return new (t || PortfolioModule)();
      };

      PortfolioModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: PortfolioModule
      });
      PortfolioModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
          path: ':portfolioId',
          component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__["PortfolioComponent"]
        }])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](PortfolioModule, {
          declarations: [_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__["PortfolioComponent"], _portfolio_linkedin_portfolio_linkedin_component__WEBPACK_IMPORTED_MODULE_3__["PortfolioLinkedinComponent"], _portfolio_plateiq_portfolio_plateiq_component__WEBPACK_IMPORTED_MODULE_4__["PortfolioPlateiqComponent"], _portfolio_lilitofu_portfolio_lilitofu_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioLilitofuComponent"], _portfolio_youtube_portfolio_youtube_component__WEBPACK_IMPORTED_MODULE_6__["PortfolioYoutubeComponent"], _portfolio_signature_portfolio_signature_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioSignatureComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
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

      /***/
    },

    /***/
    "B+5u":
    /*!***********************************************************!*\
      !*** ./src/app/home/home-footer/home-footer.component.ts ***!
      \***********************************************************/

    /*! exports provided: HomeFooterComponent */

    /***/
    function B5u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeFooterComponent", function () {
        return HomeFooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HomeFooterComponent = /*#__PURE__*/function () {
        function HomeFooterComponent() {
          _classCallCheck(this, HomeFooterComponent);
        }

        _createClass(HomeFooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeFooterComponent;
      }();

      HomeFooterComponent.ɵfac = function HomeFooterComponent_Factory(t) {
        return new (t || HomeFooterComponent)();
      };

      HomeFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeFooterComponent,
        selectors: [["yc-home-footer"]],
        decls: 17,
        vars: 0,
        consts: [[1, "yc-footer__social"], ["href", "https://www.linkedin.com/in/yc-shawn", "target", "_blank"], ["aria-hidden", "true", 1, "fab", "fa-linkedin"], ["href", "https://www.facebook.com/shawnloatrchen", "target", "_blank"], ["aria-hidden", "true", 1, "fab", "fa-facebook-square"], ["href", "https://www.instagram.com/shawnloatr/", "target", "_blank"], ["aria-hidden", "true", 1, "fab", "fa-instagram"], ["href", "https://www.youtube.com/channel/UCQLEPbkEmwz4mABAV-kzQTQ", "target", "_blank"], ["aria-hidden", "true", 1, "fab", "fa-youtube-square"], ["href", "https://github.com/yc-shawn", "target", "_blank"], ["aria-hidden", "true", 1, "fab", "fa-github"], [1, "yc-footer__contact"], [1, "yc-footer__copyright"]],
        template: function HomeFooterComponent_Template(rf, ctx) {
          if (rf & 1) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\xA9 2017-2021 Yuxiang Chen all rights reserved.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["[_nghost-%COMP%] {\n  display: block;\n  padding: 40px 0 20px 0;\n  background-color: #26262a;\n  color: white;\n}\n[_nghost-%COMP%]   .yc-footer__social[_ngcontent-%COMP%] {\n  max-width: 400px;\n  margin: 0px auto;\n  padding: 0 10px;\n  display: flex;\n  justify-content: space-around;\n}\n[_nghost-%COMP%]   .yc-footer__social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  line-height: 50px;\n  height: 45px;\n}\n[_nghost-%COMP%]   .yc-footer__social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transform: scale(1.25);\n}\n[_nghost-%COMP%]   .yc-footer__social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%] {\n  font-size: 35px;\n  color: white;\n}\n[_nghost-%COMP%]   .yc-footer__contact[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 20px;\n}\n[_nghost-%COMP%]   .yc-footer__copyright[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUtZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFBRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FBRUo7QUFESTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUdOO0FBRk07RUFDRSxzQkFBQTtBQUlSO0FBRk07RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQUlSO0FBQUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFFSjtBQUFFO0VBQ0Usa0JBQUE7QUFFSiIsImZpbGUiOiJob21lLWZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDQwcHggMCAyMHB4IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MmE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLnljLWZvb3Rlcl9fc29jaWFsIHtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yNSlcbiAgICAgIH1cbiAgICAgIC5mYWIge1xuICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLnljLWZvb3Rlcl9fY29udGFjdCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMjBweDtcbiAgfVxuICAueWMtZm9vdGVyX19jb3B5cmlnaHQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "IrL6":
    /*!***********************************************************!*\
      !*** ./src/app/home/home-header/home-header.component.ts ***!
      \***********************************************************/

    /*! exports provided: HomeHeaderComponent */

    /***/
    function IrL6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeHeaderComponent", function () {
        return HomeHeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HomeHeaderComponent = /*#__PURE__*/function () {
        function HomeHeaderComponent() {
          _classCallCheck(this, HomeHeaderComponent);
        }

        _createClass(HomeHeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeHeaderComponent;
      }();

      HomeHeaderComponent.ɵfac = function HomeHeaderComponent_Factory(t) {
        return new (t || HomeHeaderComponent)();
      };

      HomeHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeHeaderComponent,
        selectors: [["yc-home-header"]],
        decls: 6,
        vars: 0,
        consts: [[1, "yc-header__logo"], [1, "yc-header__intro"], [1, "yc-header__intro-name"], [1, "yc-header__intro-title"]],
        template: function HomeHeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "YUXIANG CHEN");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "SOFTWARE / FRONTEND / ENGINEER");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["[_nghost-%COMP%] {\n  display: block;\n  background-color: #103c4b;\n  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(\"/assets/images/beach-with-surfing-board.jpg\") center center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 95vh;\n  position: relative;\n  text-align: center;\n  overflow: hidden;\n  background-attachment: fixed;\n}\n[_nghost-%COMP%]   .yc-header__intro[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n}\n[_nghost-%COMP%]   .yc-header__intro[_ngcontent-%COMP%]   .yc-header__intro-name[_ngcontent-%COMP%] {\n  font-size: 72px;\n  letter-spacing: 0.05em;\n  padding: 0.5em 0.2em;\n  border: white solid 10px;\n  white-space: nowrap;\n}\n[_nghost-%COMP%]   .yc-header__intro[_ngcontent-%COMP%]   .yc-header__intro-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  color: white;\n  line-height: 1;\n  white-space: nowrap;\n}\n[_nghost-%COMP%]   .yc-header__logo[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 40px;\n  position: absolute;\n  top: 20px;\n  left: 30px;\n  background: url(\"/assets/images/logo.png\") center center;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n@media screen and (max-width: 650px) {\n  [_nghost-%COMP%]   .yc-header__intro[_ngcontent-%COMP%]   .yc-header__intro-name[_ngcontent-%COMP%] {\n    font-size: 32px;\n    border-width: 5px;\n  }\n  [_nghost-%COMP%]   .yc-header__intro[_ngcontent-%COMP%]   .yc-header__intro-title[_ngcontent-%COMP%] {\n    font-weight: 500;\n    font-size: 13px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EscUlBQUE7RUFFQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQUFGO0FBRUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0FBQUo7QUFFSTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBQUFOO0FBR0k7RUFDRSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUROO0FBS0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSx3REFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QUFISjtBQU1FO0VBRUk7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUFMTjtFQU9JO0lBQ0UsZ0JBQUE7SUFDQSxlQUFBO0VBTE47QUFDRiIsImZpbGUiOiJob21lLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMDNjNGI7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMC41KSksXG4gICAgdXJsKFwiL2Fzc2V0cy9pbWFnZXMvYmVhY2gtd2l0aC1zdXJmaW5nLWJvYXJkLmpwZ1wiKSBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5NXZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcblxuICAueWMtaGVhZGVyX19pbnRybyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAueWMtaGVhZGVyX19pbnRyby1uYW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogNzJweDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gICAgICBwYWRkaW5nOiAwLjVlbSAwLjJlbTtcbiAgICAgIGJvcmRlcjogd2hpdGUgc29saWQgMTBweDtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgfVxuXG4gICAgLnljLWhlYWRlcl9faW50cm8tdGl0bGUge1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgfVxuICB9XG5cbiAgLnljLWhlYWRlcl9fbG9nbyB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIwcHg7XG4gICAgbGVmdDogMzBweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9sb2dvLnBuZ1wiKSBjZW50ZXIgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcbiAgICAueWMtaGVhZGVyX19pbnRybyB7XG4gICAgICAueWMtaGVhZGVyX19pbnRyby1uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICBib3JkZXItd2lkdGg6IDVweDtcbiAgICAgIH1cbiAgICAgIC55Yy1oZWFkZXJfX2ludHJvLXRpdGxlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "K/by":
    /*!******************************************************************************!*\
      !*** ./src/app/portfolio/portfolio-lilitofu/portfolio-lilitofu.component.ts ***!
      \******************************************************************************/

    /*! exports provided: PortfolioLilitofuComponent */

    /***/
    function KBy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortfolioLilitofuComponent", function () {
        return PortfolioLilitofuComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PortfolioLilitofuComponent = /*#__PURE__*/function () {
        function PortfolioLilitofuComponent() {
          _classCallCheck(this, PortfolioLilitofuComponent);
        }

        _createClass(PortfolioLilitofuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PortfolioLilitofuComponent;
      }();

      PortfolioLilitofuComponent.ɵfac = function PortfolioLilitofuComponent_Factory(t) {
        return new (t || PortfolioLilitofuComponent)();
      };

      PortfolioLilitofuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PortfolioLilitofuComponent,
        selectors: [["yc-portfolio-lilitofu"]],
        decls: 26,
        vars: 0,
        consts: [[1, "yc-portfolio-lilitofu__demo", "mb-3"], ["src", "/assets/images/projects/lilitofu-home.png", 1, "lilitofu-img-home"], ["src", "/assets/images/projects/lilitofu-story.png", 1, "lilitofu-img-story"], [1, "text-center"], [1, "text-center", "mb-3"], ["href", "https://www.lilitofu.com/", "target", "_blank"], ["src", "assets/images/projects/lilitofu-team.jpg", 1, "yc-portfolio-lilitofu__team"]],
        template: function PortfolioLilitofuComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }
        },
        styles: ["[_nghost-%COMP%] {\n  display: block;\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 10px 15px 30px 15px;\n}\n[_nghost-%COMP%]   .yc-portfolio-lilitofu__demo[_ngcontent-%COMP%] {\n  position: relative;\n  height: 0;\n  padding: 30%;\n}\n[_nghost-%COMP%]   .yc-portfolio-lilitofu__demo[_ngcontent-%COMP%]   .lilitofu-img-home[_ngcontent-%COMP%], [_nghost-%COMP%]   .yc-portfolio-lilitofu__demo[_ngcontent-%COMP%]   .lilitofu-img-story[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 70%;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;\n}\n[_nghost-%COMP%]   .yc-portfolio-lilitofu__demo[_ngcontent-%COMP%]   .lilitofu-img-home[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n}\n[_nghost-%COMP%]   .yc-portfolio-lilitofu__demo[_ngcontent-%COMP%]   .lilitofu-img-story[_ngcontent-%COMP%] {\n  bottom: 0;\n  right: 0;\n}\n[_nghost-%COMP%]   .yc-portfolio-lilitofu__team[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BvcnRmb2xpby1saWxpdG9mdS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBQ0o7QUFBSTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDJFQUFBO0FBRU47QUFBSTtFQUNFLE1BQUE7RUFDQSxPQUFBO0FBRU47QUFBSTtFQUNFLFNBQUE7RUFDQSxRQUFBO0FBRU47QUFFRTtFQUNFLFdBQUE7QUFBSiIsImZpbGUiOiJwb3J0Zm9saW8tbGlsaXRvZnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDk2MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMTBweCAxNXB4IDMwcHggMTVweDtcblxuICAueWMtcG9ydGZvbGlvLWxpbGl0b2Z1X19kZW1vIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHBhZGRpbmc6IDMwJTtcbiAgICAubGlsaXRvZnUtaW1nLWhvbWUsIC5saWxpdG9mdS1pbWctc3Rvcnkge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDcwJTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4xKSBpbnNldDtcbiAgICB9XG4gICAgLmxpbGl0b2Z1LWltZy1ob21lIHtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgfVxuICAgIC5saWxpdG9mdS1pbWctc3Rvcnkge1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuICB9XG5cbiAgLnljLXBvcnRmb2xpby1saWxpdG9mdV9fdGVhbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH0gIFxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "PbKa":
    /*!***************************************************************!*\
      !*** ./src/app/home/home-comments/home-comments.component.ts ***!
      \***************************************************************/

    /*! exports provided: HomeCommentsComponent */

    /***/
    function PbKa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeCommentsComponent", function () {
        return HomeCommentsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HomeCommentsComponent = /*#__PURE__*/function () {
        function HomeCommentsComponent() {
          _classCallCheck(this, HomeCommentsComponent);
        }

        _createClass(HomeCommentsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeCommentsComponent;
      }();

      HomeCommentsComponent.ɵfac = function HomeCommentsComponent_Factory(t) {
        return new (t || HomeCommentsComponent)();
      };

      HomeCommentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeCommentsComponent,
        selectors: [["yc-home-comments"]],
        decls: 2,
        vars: 0,
        consts: [["id", "comments", 1, "yc-section-title"]],
        template: function HomeCommentsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "COMMENTS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLWNvbW1lbnRzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: RootComponent, AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RootComponent", function () {
        return RootComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _home_home_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home/home.module */
      "ct+p");
      /* harmony import */


      var _portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./portfolio/portfolio.module */
      "9enj");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RootComponent = function RootComponent() {
        _classCallCheck(this, RootComponent);
      };

      RootComponent.ɵfac = function RootComponent_Factory(t) {
        return new (t || RootComponent)();
      };

      RootComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: RootComponent,
        selectors: [["yc-root"]],
        decls: 1,
        vars: 0,
        template: function RootComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        encapsulation: 2
      });

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [RootComponent]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(null,
            /*! ./home/home.module */
            "ct+p")).then(function (m) {
              return m.HomeModule;
            });
          }
        }, {
          path: 'portfolio',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(null,
            /*! ./portfolio/portfolio.module */
            "9enj")).then(function (m) {
              return m.PortfolioModule;
            });
          }
        }], {
          useHash: true,
          relativeLinkResolution: 'legacy'
        }), _home_home_module__WEBPACK_IMPORTED_MODULE_2__["HomeModule"], _portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_3__["PortfolioModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [RootComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_2__["HomeModule"], _portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_3__["PortfolioModule"]]
        });
      })();
      /***/

    },

    /***/
    "a7NM":
    /*!********************************************************************************!*\
      !*** ./src/app/portfolio/portfolio-signature/portfolio-signature.component.ts ***!
      \********************************************************************************/

    /*! exports provided: PortfolioSignatureComponent */

    /***/
    function a7NM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortfolioSignatureComponent", function () {
        return PortfolioSignatureComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PortfolioSignatureComponent = /*#__PURE__*/function () {
        function PortfolioSignatureComponent() {
          _classCallCheck(this, PortfolioSignatureComponent);
        }

        _createClass(PortfolioSignatureComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PortfolioSignatureComponent;
      }();

      PortfolioSignatureComponent.ɵfac = function PortfolioSignatureComponent_Factory(t) {
        return new (t || PortfolioSignatureComponent)();
      };

      PortfolioSignatureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PortfolioSignatureComponent,
        selectors: [["yc-portfolio-signature"]],
        decls: 34,
        vars: 0,
        consts: [["src", "/assets/images/projects/ubhacking.png", 1, "yc-portfolio-signature__ubhacking-logo"], [1, "text-center"], [1, "text-center", "mb-3"], ["href", "https://www.fideliscare.org/", "target", "_blank"], ["href", "https://github.com/yc-shawn/signature-sign-in-system"], ["src", "/assets/images/projects/ubhacking-working.jpg", 1, "yc-portfolio-signature__image"], ["src", "/assets/images/projects/SignatureSignIn.png_thumb.jpg", 1, "yc-portfolio-signature__image"]],
        template: function PortfolioSignatureComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }
        },
        styles: ["[_nghost-%COMP%] {\n  display: block;\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 10px 15px 30px 15px;\n}\n[_nghost-%COMP%]   .yc-portfolio-signature__ubhacking-logo[_ngcontent-%COMP%] {\n  width: 30%;\n  margin: 20px 35%;\n}\n[_nghost-%COMP%]   .yc-portfolio-signature__image[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BvcnRmb2xpby1zaWduYXR1cmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7QUFDRjtBQUNFO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFFRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQUFKIiwiZmlsZSI6InBvcnRmb2xpby1zaWduYXR1cmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDk2MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMTBweCAxNXB4IDMwcHggMTVweDtcblxuICAueWMtcG9ydGZvbGlvLXNpZ25hdHVyZV9fdWJoYWNraW5nLWxvZ28ge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgbWFyZ2luOiAyMHB4IDM1JTtcbiAgfVxuXG4gIC55Yy1wb3J0Zm9saW8tc2lnbmF0dXJlX19pbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgfVxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "byuy":
    /*!*************************************************************!*\
      !*** ./src/app/home/home-aboutme/home-aboutme.component.ts ***!
      \*************************************************************/

    /*! exports provided: HomeAboutmeComponent */

    /***/
    function byuy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeAboutmeComponent", function () {
        return HomeAboutmeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function HomeAboutmeComponent_div_35_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span");
        }
      }

      var _c0 = function _c0() {
        return [1, 2, 3, 4, 5];
      };

      function HomeAboutmeComponent_div_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeAboutmeComponent_div_35_span_4_Template, 1, 0, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var skill_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("yc-aboutme__skill-icon yc-aboutme__skill-icon-" + ctx_r0.levels[skill_r1]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        }
      }

      var HomeAboutmeComponent = /*#__PURE__*/function () {
        function HomeAboutmeComponent() {
          _classCallCheck(this, HomeAboutmeComponent);

          this.skills = ['Java', 'Javascript', 'Typescript', 'NodeJS', 'React/Redux', 'Ember', 'Angular', 'Bootstrap', 'Jquery', 'CSS/SASS/SCSS', 'AWS', 'MongoDB'];
          this.levels = {
            Java: 5,
            Python: 4,
            'C#': 3,
            Swift: 4,
            'C++': 3,
            HTML: 5,
            'CSS/SASS/SCSS': 5,
            Javascript: 5,
            Typescript: 4,
            Jquery: 4,
            NodeJS: 4,
            'React/Redux': 4,
            'SQL/NoSQL': 3,
            Ember: 4,
            Angular: 4,
            Bootstrap: 4,
            AWS: 3,
            MongoDB: 3
          };
        }

        _createClass(HomeAboutmeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeAboutmeComponent;
      }();

      HomeAboutmeComponent.ɵfac = function HomeAboutmeComponent_Factory(t) {
        return new (t || HomeAboutmeComponent)();
      };

      HomeAboutmeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeAboutmeComponent,
        selectors: [["yc-home-aboutme"]],
        decls: 59,
        vars: 1,
        consts: [["id", "about_me", 1, "yc-section-title"], [1, "yc-aboutme__image"], ["src", "/assets/images/my-portrait.jpg", "alt", "", 1, "face-img"], [1, "yc-aboutme__icon"], ["aria-hidden", "true", 1, "fas", "fa-code"], ["aria-hidden", "true", 1, "fas", "fa-camera-retro"], ["aria-hidden", "true", 1, "far", "fa-clock"], ["aria-hidden", "true", 1, "fas", "fa-pencil-ruler"], [1, "yc-aboutme__intro"], ["href", "https://www.linkedin.com", "target", "_blank"], ["aria-hidden", "true", 1, "fab", "fa-linkedin"], [1, "yc-aboutme__skills"], ["class", "yc-aboutme__skill", 4, "ngFor", "ngForOf"], [1, "yc-aboutme__resume"], ["href", "assets/documents/Yuxiang_Chen_Resume_2020.pdf", "target", "_blank"], [1, "yc-aboutme__others"], [1, "row", "yc-aboutme__gallery"], [1, "col-md-4"], ["src", "assets/images/my-golden-gate-bridge.jpg", "alt", "my-golden-gate-bridge"], [1, "gallery-text"], ["src", "assets/images/suzy.jpg", "alt", "suzy"], ["src", "assets/images/my-creative.jpg", "alt", "creative photo"], [1, "yc-aboutme__skill"], [4, "ngFor", "ngForOf"]],
        template: function HomeAboutmeComponent_Template(rf, ctx) {
          if (rf & 1) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Senior Software Engineer(Front-end) at ");

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
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
        styles: ["[_nghost-%COMP%]   .yc-aboutme__image[_ngcontent-%COMP%] {\n  max-width: 780px;\n  display: flex;\n  margin: 0 auto;\n  align-items: center;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   .yc-aboutme__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 225px;\n  height: 225px;\n  border-radius: 50%;\n  order: 3;\n}\n[_nghost-%COMP%]   .yc-aboutme__image[_ngcontent-%COMP%]   .yc-aboutme__icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  opacity: 0.6;\n  background-color: lightgrey;\n  color: darkgrey;\n  border-radius: 50%;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   .yc-aboutme__image[_ngcontent-%COMP%]   .yc-aboutme__icon[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%], [_nghost-%COMP%]   .yc-aboutme__image[_ngcontent-%COMP%]   .yc-aboutme__icon[_ngcontent-%COMP%]   .far[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #222;\n}\n[_nghost-%COMP%]   .yc-aboutme__image[_ngcontent-%COMP%]   .yc-aboutme__icon[_ngcontent-%COMP%]:nth-of-type(1) {\n  order: 1;\n}\n[_nghost-%COMP%]   .yc-aboutme__image[_ngcontent-%COMP%]   .yc-aboutme__icon[_ngcontent-%COMP%]:nth-of-type(2) {\n  order: 2;\n}\n[_nghost-%COMP%]   .yc-aboutme__image[_ngcontent-%COMP%]   .yc-aboutme__icon[_ngcontent-%COMP%]:nth-of-type(3) {\n  order: 4;\n}\n[_nghost-%COMP%]   .yc-aboutme__image[_ngcontent-%COMP%]   .yc-aboutme__icon[_ngcontent-%COMP%]:nth-of-type(4) {\n  order: 5;\n}\n@media screen and (max-width: 650px) {\n  [_nghost-%COMP%]   .yc-aboutme__image[_ngcontent-%COMP%] {\n    display: block;\n    text-align: center;\n  }\n  [_nghost-%COMP%]   .yc-aboutme__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: block;\n    margin: 0 auto 30px auto;\n  }\n  [_nghost-%COMP%]   .yc-aboutme__image[_ngcontent-%COMP%]   .yc-aboutme__icon[_ngcontent-%COMP%] {\n    margin: 5px;\n  }\n}\n[_nghost-%COMP%]   .yc-aboutme__intro[_ngcontent-%COMP%] {\n  max-width: 620px;\n  padding: 0 15px;\n  margin: 50px auto;\n  font-size: 20px;\n  text-align: center;\n  font-weight: 300;\n}\n[_nghost-%COMP%]   .yc-aboutme__intro[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n}\n[_nghost-%COMP%]   .yc-aboutme__intro[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]    > .fa-linkedin[_ngcontent-%COMP%] {\n  color: #0074d9;\n  font-size: 22px;\n  margin-left: 2px;\n  text-decoration: inherit;\n  -webkit-text-decoration-color: black;\n          text-decoration-color: black;\n}\n[_nghost-%COMP%]   .yc-aboutme__skills[_ngcontent-%COMP%] {\n  max-width: 740px;\n  margin: 100px auto;\n  color: #999;\n  overflow: auto;\n}\n[_nghost-%COMP%]   .yc-aboutme__skills[_ngcontent-%COMP%]   .yc-aboutme__skill[_ngcontent-%COMP%] {\n  width: 23%;\n  padding-left: 10%;\n  float: left;\n}\n[_nghost-%COMP%]   .yc-aboutme__skills[_ngcontent-%COMP%]   .yc-aboutme__skill[_ngcontent-%COMP%]   .yc-aboutme__skill-icon-1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(n+2) {\n  background-color: lightgrey;\n}\n[_nghost-%COMP%]   .yc-aboutme__skills[_ngcontent-%COMP%]   .yc-aboutme__skill[_ngcontent-%COMP%]   .yc-aboutme__skill-icon-2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(n+3) {\n  background-color: lightgrey;\n}\n[_nghost-%COMP%]   .yc-aboutme__skills[_ngcontent-%COMP%]   .yc-aboutme__skill[_ngcontent-%COMP%]   .yc-aboutme__skill-icon-3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(n+4) {\n  background-color: lightgrey;\n}\n[_nghost-%COMP%]   .yc-aboutme__skills[_ngcontent-%COMP%]   .yc-aboutme__skill[_ngcontent-%COMP%]   .yc-aboutme__skill-icon-4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(n+5) {\n  background-color: lightgrey;\n}\n[_nghost-%COMP%]   .yc-aboutme__skills[_ngcontent-%COMP%]   .yc-aboutme__skill[_ngcontent-%COMP%]   .yc-aboutme__skill-icon-5[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(n+6) {\n  background-color: lightgrey;\n}\n[_nghost-%COMP%]   .yc-aboutme__skills[_ngcontent-%COMP%]   .yc-aboutme__skill[_ngcontent-%COMP%]   .yc-aboutme__skill-icon[_ngcontent-%COMP%] {\n  margin: 2px 0 30px;\n}\n[_nghost-%COMP%]   .yc-aboutme__skills[_ngcontent-%COMP%]   .yc-aboutme__skill[_ngcontent-%COMP%]   .yc-aboutme__skill-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  display: inline-block;\n  background-color: black;\n  margin-right: 5px;\n  border-radius: 50%;\n}\n[_nghost-%COMP%]   .yc-aboutme__skills[_ngcontent-%COMP%]   .yc-aboutme__skill[_ngcontent-%COMP%]   .yc-aboutme__skill-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n  width: 10px;\n  height: 10px;\n  content: \"\";\n  display: block;\n  background: #fff;\n  border-radius: 50%;\n  margin: 2px;\n}\n@media screen and (max-width: 541px) {\n  [_nghost-%COMP%]   .yc-aboutme__skills[_ngcontent-%COMP%] {\n    margin-left: 25px;\n  }\n  [_nghost-%COMP%]   .yc-aboutme__skills[_ngcontent-%COMP%]   .yc-aboutme__skill[_ngcontent-%COMP%] {\n    width: 45%;\n    padding-left: 5%;\n  }\n}\n[_nghost-%COMP%]   .yc-aboutme__resume[_ngcontent-%COMP%] {\n  max-width: 300px;\n  margin: 0 auto 0 auto;\n  padding: 10px 0 70px 0;\n  text-align: center;\n}\n[_nghost-%COMP%]   .yc-aboutme__resume[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 20px;\n  color: black;\n  background-color: white;\n  padding: 0.6em 0.6em;\n  border: black solid 4px;\n}\n[_nghost-%COMP%]   .yc-aboutme__resume[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  color: white;\n  background-color: black;\n}\n[_nghost-%COMP%]   .yc-aboutme__others[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  font-family: \"Palatino Linotype\", \"Book Antiqua\", Palatino, serif;\n}\n[_nghost-%COMP%]   .yc-aboutme__others[_ngcontent-%COMP%]    > b[_ngcontent-%COMP%] {\n  color: #e1c184;\n  font-size: 36px;\n}\n[_nghost-%COMP%]   .yc-aboutme__gallery[_ngcontent-%COMP%] {\n  margin: 0;\n}\n[_nghost-%COMP%]   .yc-aboutme__gallery[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%] {\n  padding: 0;\n  position: relative;\n}\n[_nghost-%COMP%]   .yc-aboutme__gallery[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%]:hover   .gallery-text[_ngcontent-%COMP%] {\n  display: block;\n  background-color: rgba(100, 100, 100, 0.6);\n}\n[_nghost-%COMP%]   .yc-aboutme__gallery[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%]:hover   .gallery-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  -webkit-animation: ease-show-up 0.3s 0s ease forwards;\n          animation: ease-show-up 0.3s 0s ease forwards;\n}\n@-webkit-keyframes ease-show-up {\n  from {\n    transform: translate(-50%, 0%);\n  }\n  to {\n    transform: translate(-50%, -50%);\n  }\n}\n@keyframes ease-show-up {\n  from {\n    transform: translate(-50%, 0%);\n  }\n  to {\n    transform: translate(-50%, -50%);\n  }\n}\n[_nghost-%COMP%]   .yc-aboutme__gallery[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .yc-aboutme__gallery[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%]   .gallery-text[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: none;\n}\n[_nghost-%COMP%]   .yc-aboutme__gallery[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%]   .gallery-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  font-size: 28px;\n  color: white;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUtYWJvdXRtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQUo7QUFDSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FBQ047QUFDSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ047QUFBTTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBRVI7QUFBTTtFQUNFLFFBQUE7QUFFUjtBQUFNO0VBQ0UsUUFBQTtBQUVSO0FBQU07RUFDRSxRQUFBO0FBRVI7QUFBTTtFQUNFLFFBQUE7QUFFUjtBQUNJO0VBdkNGO0lBd0NJLGNBQUE7SUFDQSxrQkFBQTtFQUVKO0VBREk7SUFDRSxjQUFBO0lBQ0Esd0JBQUE7RUFHTjtFQURJO0lBQ0UsV0FBQTtFQUdOO0FBQ0Y7QUFBRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFFSjtBQURJO0VBQ0UsWUFBQTtBQUdOO0FBRk07RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0FBSVI7QUFBRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUVKO0FBREk7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBR047QUFEUTtFQUNFLDJCQUFBO0FBR1Y7QUFKUTtFQUNFLDJCQUFBO0FBTVY7QUFQUTtFQUNFLDJCQUFBO0FBU1Y7QUFWUTtFQUNFLDJCQUFBO0FBWVY7QUFiUTtFQUNFLDJCQUFBO0FBZVY7QUFaTTtFQUNFLGtCQUFBO0FBY1I7QUFiUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFlVjtBQWRVO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBZ0JaO0FBWEk7RUFuQ0Y7SUFvQ0ksaUJBQUE7RUFjSjtFQWJJO0lBQ0UsVUFBQTtJQUNBLGdCQUFBO0VBZU47QUFDRjtBQVpFO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFjSjtBQWJJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtBQWVOO0FBZE07RUFDRSxZQUFBO0VBQ0EsdUJBQUE7QUFnQlI7QUFaRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlFQUFBO0FBY0o7QUFiSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBZU47QUFaRTtFQUNFLFNBQUE7QUFjSjtBQWJJO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FBZU47QUFkTTtFQUNFLGNBQUE7RUFDQSwwQ0FBQTtBQWdCUjtBQWZRO0VBU0UscURBQUE7VUFBQSw2Q0FBQTtBQVNWO0FBakJVO0VBQ0U7SUFDRSw4QkFBQTtFQW1CWjtFQWpCVTtJQUNFLGdDQUFBO0VBbUJaO0FBQ0Y7QUF6QlU7RUFDRTtJQUNFLDhCQUFBO0VBbUJaO0VBakJVO0lBQ0UsZ0NBQUE7RUFtQlo7QUFDRjtBQWRNO0VBQ0UsV0FBQTtBQWdCUjtBQWRNO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQWdCUjtBQWZRO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFpQlYiLCJmaWxlIjoiaG9tZS1hYm91dG1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAueWMtYWJvdXRtZV9faW1hZ2Uge1xuICAgIG1heC13aWR0aDogNzgwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDIyNXB4O1xuICAgICAgaGVpZ2h0OiAyMjVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIG9yZGVyOiAzO1xuICAgIH1cbiAgICAueWMtYWJvdXRtZV9faWNvbiB7XG4gICAgICB3aWR0aDogNjBweDtcbiAgICAgIGhlaWdodDogNjBweDtcbiAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbiAgICAgIGNvbG9yOiBkYXJrZ3JleTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgLmZhcywgLmZhciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgY29sb3I6ICMyMjI7XG4gICAgICB9XG4gICAgICAmOm50aC1vZi10eXBlKDEpIHtcbiAgICAgICAgb3JkZXI6IDE7XG4gICAgICB9XG4gICAgICAmOm50aC1vZi10eXBlKDIpIHtcbiAgICAgICAgb3JkZXI6IDI7XG4gICAgICB9XG4gICAgICAmOm50aC1vZi10eXBlKDMpIHtcbiAgICAgICAgb3JkZXI6IDQ7XG4gICAgICB9XG4gICAgICAmOm50aC1vZi10eXBlKDQpIHtcbiAgICAgICAgb3JkZXI6IDU7XG4gICAgICB9XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGltZyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IDAgYXV0byAzMHB4IGF1dG87XG4gICAgICB9XG4gICAgICAueWMtYWJvdXRtZV9faWNvbiB7XG4gICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAueWMtYWJvdXRtZV9faW50cm8ge1xuICAgIG1heC13aWR0aDogNjIwcHg7XG4gICAgcGFkZGluZzogMCAxNXB4O1xuICAgIG1hcmdpbjogNTBweCBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBhIHtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgID4gLmZhLWxpbmtlZGluIHtcbiAgICAgICAgY29sb3I6ICMwMDc0ZDk7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IGJsYWNrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAueWMtYWJvdXRtZV9fc2tpbGxzIHtcbiAgICBtYXgtd2lkdGg6IDc0MHB4O1xuICAgIG1hcmdpbjogMTAwcHggYXV0bztcbiAgICBjb2xvcjogIzk5OTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICAueWMtYWJvdXRtZV9fc2tpbGwge1xuICAgICAgd2lkdGg6IDIzJTtcbiAgICAgIHBhZGRpbmctbGVmdDogMTAlO1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDUge1xuICAgICAgICAueWMtYWJvdXRtZV9fc2tpbGwtaWNvbi0jeyRpfSBzcGFuOm50aC1jaGlsZChuKyN7JGkrMX0pIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gICAgICAgIH0gIFxuICAgICAgfVxuICAgICAgLnljLWFib3V0bWVfX3NraWxsLWljb24ge1xuICAgICAgICBtYXJnaW46IDJweCAwIDMwcHg7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgICAgIGhlaWdodDogMTRweDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSAgIFxuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NDFweCkge1xuICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgICAueWMtYWJvdXRtZV9fc2tpbGwge1xuICAgICAgICB3aWR0aDogNDUlO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAueWMtYWJvdXRtZV9fcmVzdW1lIHtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvIDAgYXV0bztcbiAgICBwYWRkaW5nOiAxMHB4IDAgNzBweCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICA+IGEge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIHBhZGRpbmc6IDAuNmVtIDAuNmVtO1xuICAgICAgYm9yZGVyOiBibGFjayBzb2xpZCA0cHg7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLnljLWFib3V0bWVfX290aGVycyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUGFsYXRpbm8gTGlub3R5cGVcIiwgXCJCb29rIEFudGlxdWFcIiwgUGFsYXRpbm8sIHNlcmlmO1xuICAgID4gYiB7XG4gICAgICBjb2xvcjogI2UxYzE4NDtcbiAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICB9XG4gIH1cbiAgLnljLWFib3V0bWVfX2dhbGxlcnkge1xuICAgIG1hcmdpbjogMDtcbiAgICAuY29sLW1kLTQge1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICY6aG92ZXIgLmdhbGxlcnktdGV4dCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwMCwgMTAwLCAxMDAsIDAuNik7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIEBrZXlmcmFtZXMgZWFzZS1zaG93LXVwIHtcbiAgICAgICAgICAgIGZyb20ge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMCUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG8ge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYW5pbWF0aW9uOiBlYXNlLXNob3ctdXAgMC4zcyAwcyBlYXNlIGZvcndhcmRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5nYWxsZXJ5LXRleHQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "cPhq":
    /*!*********************************************!*\
      !*** ./src/app/home/home/home.component.ts ***!
      \*********************************************/

    /*! exports provided: HomeComponent */

    /***/
    function cPhq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! jquery */
      "EVdn");
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _home_nav_home_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../home-nav/home-nav.component */
      "lJXf");
      /* harmony import */


      var _home_header_home_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../home-header/home-header.component */
      "IrL6");
      /* harmony import */


      var _home_aboutme_home_aboutme_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../home-aboutme/home-aboutme.component */
      "byuy");
      /* harmony import */


      var _home_portfolio_home_portfolio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../home-portfolio/home-portfolio.component */
      "0kCP");
      /* harmony import */


      var _home_contact_home_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../home-contact/home-contact.component */
      "2J9f");
      /* harmony import */


      var _home_footer_home_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../home-footer/home-footer.component */
      "B+5u");

      function HomeComponent_button_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_button_2_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r1.scrollTop();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(_element) {
          _classCallCheck(this, HomeComponent);

          this._element = _element;
          this.isMenuOpen = false;
        }

        _createClass(HomeComponent, [{
          key: "onScroll",
          value: function onScroll(_ref) {
            var target = _ref.target;

            if (target.scrollTop > 200) {
              this.showScrollTop = true;
            } else {
              this.showScrollTop = false;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
          /**
           * Toogle side menu in small screen
           */

        }, {
          key: "toggleMenu",
          value: function toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
          }
        }, {
          key: "scrollTop",
          value: function scrollTop() {
            jquery__WEBPACK_IMPORTED_MODULE_0__('yc-home').animate({
              scrollTop: 0
            }, 300);
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["yc-home"]],
        hostVars: 2,
        hostBindings: function HomeComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function HomeComponent_scroll_HostBindingHandler($event) {
              return ctx.onScroll($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("yc-home--menu-open", ctx.isMenuOpen);
          }
        },
        decls: 9,
        vars: 2,
        consts: [[1, "yc-home__toggle", 3, "click"], [1, "fas", "fa-bars"], ["class", "yc-home__scroll-top", 3, "click", 4, "ngIf"], [3, "isMenuOpen"], [1, "yc-home__scroll-top", 3, "click"], [1, "fas", "fa-arrow-up"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_0_listener() {
              return ctx.toggleMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomeComponent_button_2_Template, 2, 0, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "yc-home-nav", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "yc-home-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "yc-home-aboutme");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "yc-home-portfolio");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "yc-home-contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "yc-home-footer");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showScrollTop);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isMenuOpen", ctx.isMenuOpen);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _home_nav_home_nav_component__WEBPACK_IMPORTED_MODULE_3__["HomeNavComponent"], _home_header_home_header_component__WEBPACK_IMPORTED_MODULE_4__["HomeHeaderComponent"], _home_aboutme_home_aboutme_component__WEBPACK_IMPORTED_MODULE_5__["HomeAboutmeComponent"], _home_portfolio_home_portfolio_component__WEBPACK_IMPORTED_MODULE_6__["HomePortfolioComponent"], _home_contact_home_contact_component__WEBPACK_IMPORTED_MODULE_7__["HomeContactComponent"], _home_footer_home_footer_component__WEBPACK_IMPORTED_MODULE_8__["HomeFooterComponent"]],
        styles: ["[_nghost-%COMP%] {\n  display: block;\n  transition: right 0.3s ease-in-out;\n  position: relative;\n  right: 0;\n  height: 100vh;\n  overflow-y: scroll;\n}\n[_nghost-%COMP%]   .yc-home__toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  top: 10px;\n  right: 10px;\n  z-index: 10;\n  background: transparent;\n  border: 1px solid white;\n  border-radius: 4px;\n  font-size: 32px;\n  padding: 0px 10px;\n  transition: right 0.3s ease-in-out;\n  display: none;\n}\n[_nghost-%COMP%]   .yc-home__scroll-top[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n  position: fixed;\n  right: 20px;\n  bottom: 20px;\n  border-radius: 50%;\n  z-index: 1;\n  border: 1px solid #d5d5d5;\n  background-color: #f0f0f0;\n  opacity: 0.7;\n}\n[_nghost-%COMP%]   .yc-home__scroll-top[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n@media screen and (max-width: 650px) {\n  [_nghost-%COMP%]   .yc-home__toggle[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  .yc-home--menu-open[_nghost-%COMP%] {\n    right: 150px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0FBQ0o7QUFFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFBSjtBQUNJO0VBQ0UsVUFBQTtBQUNOO0FBR0U7RUFDRTtJQUNFLHFCQUFBO0VBREo7RUFJRTtJQUNFLFlBQUE7RUFGSjtBQUNGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiByaWdodCAwLjNzIGVhc2UtaW4tb3V0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG5cbiAgLnljLWhvbWVfX3RvZ2dsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgei1pbmRleDogMTA7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgICB0cmFuc2l0aW9uOiByaWdodCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAueWMtaG9tZV9fc2Nyb2xsLXRvcCB7XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogMjBweDtcbiAgICBib3R0b206IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q1ZDVkNTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICAmOmhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcbiAgICAueWMtaG9tZV9fdG9nZ2xlIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG5cbiAgICAmLnljLWhvbWUtLW1lbnUtb3BlbiB7XG4gICAgICByaWdodDogMTUwcHg7XG4gICAgfVxuICB9XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "ct+p":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomeModule */

    /***/
    function ctP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
        return HomeModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./home/home.component */
      "cPhq");
      /* harmony import */


      var _home_header_home_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./home-header/home-header.component */
      "IrL6");
      /* harmony import */


      var _home_aboutme_home_aboutme_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./home-aboutme/home-aboutme.component */
      "byuy");
      /* harmony import */


      var _home_portfolio_home_portfolio_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./home-portfolio/home-portfolio.component */
      "0kCP");
      /* harmony import */


      var _home_comments_home_comments_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./home-comments/home-comments.component */
      "PbKa");
      /* harmony import */


      var _home_footer_home_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./home-footer/home-footer.component */
      "B+5u");
      /* harmony import */


      var _home_nav_home_nav_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./home-nav/home-nav.component */
      "lJXf");
      /* harmony import */


      var _home_contact_home_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./home-contact/home-contact.component */
      "2J9f");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MaterialModules = [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"]];

      var HomeModule = function HomeModule() {
        _classCallCheck(this, HomeModule);
      };

      HomeModule.ɵfac = function HomeModule_Factory(t) {
        return new (t || HomeModule)();
      };

      HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
        type: HomeModule
      });
      HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], MaterialModules, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
          path: '',
          component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]
        }])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](HomeModule, {
          declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _home_header_home_header_component__WEBPACK_IMPORTED_MODULE_9__["HomeHeaderComponent"], _home_aboutme_home_aboutme_component__WEBPACK_IMPORTED_MODULE_10__["HomeAboutmeComponent"], _home_portfolio_home_portfolio_component__WEBPACK_IMPORTED_MODULE_11__["HomePortfolioComponent"], _home_comments_home_comments_component__WEBPACK_IMPORTED_MODULE_12__["HomeCommentsComponent"], _home_footer_home_footer_component__WEBPACK_IMPORTED_MODULE_13__["HomeFooterComponent"], _home_nav_home_nav_component__WEBPACK_IMPORTED_MODULE_14__["HomeNavComponent"], _home_contact_home_contact_component__WEBPACK_IMPORTED_MODULE_15__["HomeContactComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "lJXf":
    /*!*****************************************************!*\
      !*** ./src/app/home/home-nav/home-nav.component.ts ***!
      \*****************************************************/

    /*! exports provided: HomeNavComponent */

    /***/
    function lJXf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeNavComponent", function () {
        return HomeNavComponent;
      });
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! jquery */
      "EVdn");
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var HomeNavComponent = /*#__PURE__*/function () {
        function HomeNavComponent(_router) {
          _classCallCheck(this, HomeNavComponent);

          this._router = _router;
        }

        _createClass(HomeNavComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onScrollTo",
          value: function onScrollTo(tag) {
            var tagElement = jquery__WEBPACK_IMPORTED_MODULE_0__("#".concat(tag));

            if (tagElement) {
              jquery__WEBPACK_IMPORTED_MODULE_0__('yc-home').animate({
                scrollTop: tagElement.offset().top
              }, 300, function () {// this._router.navigate([], {
                //   queryParams: { tag },
                //   queryParamsHandling: 'merge',
                //   replaceUrl: true,
                // });
              });
            }
          }
        }]);

        return HomeNavComponent;
      }();

      HomeNavComponent.ɵfac = function HomeNavComponent_Factory(t) {
        return new (t || HomeNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      HomeNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: HomeNavComponent,
        selectors: [["yc-home-nav"]],
        hostVars: 2,
        hostBindings: function HomeNavComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("yc-home-nav--menu-open", ctx.isMenuOpen);
          }
        },
        inputs: {
          isMenuOpen: "isMenuOpen"
        },
        decls: 6,
        vars: 0,
        consts: [[3, "click"]],
        template: function HomeNavComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeNavComponent_Template_a_click_0_listener() {
              return ctx.onScrollTo("about_me");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "ABOUT ME");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeNavComponent_Template_a_click_2_listener() {
              return ctx.onScrollTo("portfolio");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "PORTFOLIO");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeNavComponent_Template_a_click_4_listener() {
              return ctx.onScrollTo("contact");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "CONTACT");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  display: flex;\n  top: 30px;\n  right: 30px;\n  z-index: 1;\n}\n[_nghost-%COMP%]    > a[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-block;\n  margin-left: 20px;\n  color: rgba(255, 255, 255, 0.9);\n  font-weight: 700;\n  font-size: 14px;\n}\n[_nghost-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  color: rgba(255, 255, 255, 0.65) \"\";\n}\n@media screen and (max-width: 650px) {\n  [_nghost-%COMP%] {\n    position: fixed;\n    height: 100vh;\n    flex-direction: column;\n    top: 0;\n    right: -150px;\n    width: 150px;\n    background: #333;\n    padding: 30px 0;\n    transition: right 0.3s ease-in-out;\n  }\n  [_nghost-%COMP%]    > a[_ngcontent-%COMP%] {\n    padding: 10px 8px;\n  }\n  .yc-home-nav--menu-open[_nghost-%COMP%] {\n    right: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUtbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBQ0Y7QUFBRTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFFSjtBQURJO0VBQ0UsbUNBQUE7QUFHTjtBQUNFO0VBbEJGO0lBbUJJLGVBQUE7SUFDQSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxNQUFBO0lBQ0EsYUFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxrQ0FBQTtFQUVGO0VBREU7SUFDRSxpQkFBQTtFQUdKO0VBQUU7SUFDRSxRQUFBO0VBRUo7QUFDRiIsImZpbGUiOiJob21lLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB0b3A6IDMwcHg7XG4gIHJpZ2h0OiAzMHB4O1xuICB6LWluZGV4OiAxO1xuICA+IGEge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjUpJydcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAtMTUwcHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGJhY2tncm91bmQ6ICMzMzM7XG4gICAgcGFkZGluZyA6IDMwcHggMDtcbiAgICB0cmFuc2l0aW9uOiByaWdodCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgID4gYSB7XG4gICAgICBwYWRkaW5nOiAxMHB4IDhweDtcbiAgICB9XG5cbiAgICAmLnljLWhvbWUtbmF2LS1tZW51LW9wZW4ge1xuICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuICB9XG59Il19 */"]
      });
      /***/
    },

    /***/
    "lMke":
    /*!****************************************************************************!*\
      !*** ./src/app/portfolio/portfolio-plateiq/portfolio-plateiq.component.ts ***!
      \****************************************************************************/

    /*! exports provided: PortfolioPlateiqComponent */

    /***/
    function lMke(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortfolioPlateiqComponent", function () {
        return PortfolioPlateiqComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PortfolioPlateiqComponent = /*#__PURE__*/function () {
        function PortfolioPlateiqComponent() {
          _classCallCheck(this, PortfolioPlateiqComponent);
        }

        _createClass(PortfolioPlateiqComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PortfolioPlateiqComponent;
      }();

      PortfolioPlateiqComponent.ɵfac = function PortfolioPlateiqComponent_Factory(t) {
        return new (t || PortfolioPlateiqComponent)();
      };

      PortfolioPlateiqComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PortfolioPlateiqComponent,
        selectors: [["yc-portfolio-plateiq"]],
        decls: 38,
        vars: 0,
        consts: [[1, "yc-portfolio-plateiq__demo"], ["src", "assets/images/projects/macbook-frame-sm.png", 1, "yc-portfolio-plateiq__demo-frame"], ["src", "assets/images/projects/plateiq-hotlist-gif.gif", 1, "yc-portfolio-plateiq__demo-gif"], [1, "text-center"], [1, "text-center", "mb-3"], [1, "text-left"], [1, "text-left", "pl-3"], ["href", "https://www.plateiq.com/", "target", "_blank"]],
        template: function PortfolioPlateiqComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }
        },
        styles: ["[_nghost-%COMP%] {\n  display: block;\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 10px 15px 30px 15px;\n}\n[_nghost-%COMP%]   .yc-portfolio-plateiq__demo[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 640px;\n  margin: 0 auto;\n}\n[_nghost-%COMP%]   .yc-portfolio-plateiq__demo[_ngcontent-%COMP%]   .yc-portfolio-plateiq__demo-frame[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .yc-portfolio-plateiq__demo[_ngcontent-%COMP%]   .yc-portfolio-plateiq__demo-gif[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6%;\n  left: 12.7%;\n  width: 74.8%;\n  height: 72%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BvcnRmb2xpby1wbGF0ZWlxLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0FBQ0Y7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0o7QUFBSTtFQUNFLFdBQUE7QUFFTjtBQUFJO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRU4iLCJmaWxlIjoicG9ydGZvbGlvLXBsYXRlaXEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDk2MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMTBweCAxNXB4IDMwcHggMTVweDtcblxuICAueWMtcG9ydGZvbGlvLXBsYXRlaXFfX2RlbW97XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1heC13aWR0aDogNjQwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgLnljLXBvcnRmb2xpby1wbGF0ZWlxX19kZW1vLWZyYW1lIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAueWMtcG9ydGZvbGlvLXBsYXRlaXFfX2RlbW8tZ2lmIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogNiU7XG4gICAgICBsZWZ0OiAxMi43JTtcbiAgICAgIHdpZHRoOiA3NC44JTtcbiAgICAgIGhlaWdodDogNzIlO1xuICAgIH1cbiAgfVxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "ptD8":
    /*!************************************************************!*\
      !*** ./src/app/portfolio/portfolio/portfolio.component.ts ***!
      \************************************************************/

    /*! exports provided: PortfolioComponent */

    /***/
    function ptD8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function () {
        return PortfolioComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _portfolio_linkedin_portfolio_linkedin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../portfolio-linkedin/portfolio-linkedin.component */
      "qqd6");
      /* harmony import */


      var _portfolio_plateiq_portfolio_plateiq_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../portfolio-plateiq/portfolio-plateiq.component */
      "lMke");
      /* harmony import */


      var _portfolio_lilitofu_portfolio_lilitofu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../portfolio-lilitofu/portfolio-lilitofu.component */
      "K/by");
      /* harmony import */


      var _portfolio_youtube_portfolio_youtube_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../portfolio-youtube/portfolio-youtube.component */
      "xVix");
      /* harmony import */


      var _portfolio_signature_portfolio_signature_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../portfolio-signature/portfolio-signature.component */
      "a7NM");

      function PortfolioComponent_a_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a");
        }

        if (rf & 2) {
          var project_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("yc-portfolio__project yc-portfolio__project-", project_r6.id, "");
        }
      }

      function PortfolioComponent_yc_portfolio_linkedin_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "yc-portfolio-linkedin");
        }
      }

      function PortfolioComponent_yc_portfolio_plateiq_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "yc-portfolio-plateiq");
        }
      }

      function PortfolioComponent_yc_portfolio_lilitofu_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "yc-portfolio-lilitofu");
        }
      }

      function PortfolioComponent_yc_portfolio_youtube_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "yc-portfolio-youtube");
        }
      }

      function PortfolioComponent_yc_portfolio_signature_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "yc-portfolio-signature");
        }
      }

      var PortfolioComponent = /*#__PURE__*/function () {
        function PortfolioComponent(_activatedRoute, _router) {
          _classCallCheck(this, PortfolioComponent);

          this._activatedRoute = _activatedRoute;
          this._router = _router;
          this.projects = [{
            id: 'linkedin',
            external: false
          }, {
            id: 'plateiq',
            external: false
          }, {
            id: 'lilitofu',
            external: false
          }, {
            id: 'chatapp',
            external: true,
            link: 'https://yc-shawn.github.io/real-time-chat/'
          }, {
            id: 'craigslist',
            external: true,
            link: 'https://yc-shawn.github.io/craigslist-housing'
          }, {
            id: 'shoppingcart',
            external: true,
            link: 'https://yc-shawn.herokuapp.com/shoppingcart'
          }, {
            id: 'spotify',
            external: true,
            link: 'https://yc-shawn.github.io/spotify'
          }, {
            id: 'youtube',
            external: false
          }, {
            id: 'signature',
            external: false
          }];
          this.showPortfolioDetails = false;
          this.portfolioId = this._activatedRoute.snapshot.params.portfolioId;
        }

        _createClass(PortfolioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this3 = this;

            setTimeout(function () {
              _this3.showPortfolioDetails = true;
            });
          }
        }, {
          key: "onBack",
          value: function onBack() {
            var _this4 = this;

            this.showPortfolioDetails = false;
            setTimeout(function () {
              _this4._router.navigateByUrl('/?tag=portfolio');
            }, 301);
          }
        }]);

        return PortfolioComponent;
      }();

      PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) {
        return new (t || PortfolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PortfolioComponent,
        selectors: [["yc-portfolio"]],
        decls: 14,
        vars: 9,
        consts: [["id", "portfolio", 1, "yc-section-title"], [1, "yc-portfolio-container"], [1, "yc-portfolio__projects"], [3, "class", 4, "ngFor", "ngForOf"], [1, "yc-portfolio__detail-container", 3, "ngSwitch"], [1, "yc-portfolio__return-container"], [3, "click"], [1, "fas", "fa-chevron-left"], [4, "ngSwitchCase"]],
        template: function PortfolioComponent_Template(rf, ctx) {
          if (rf & 1) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioComponent_Template_button_click_7_listener() {
              return ctx.onBack();
            });

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
          }

          if (rf & 2) {
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
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _portfolio_linkedin_portfolio_linkedin_component__WEBPACK_IMPORTED_MODULE_3__["PortfolioLinkedinComponent"], _portfolio_plateiq_portfolio_plateiq_component__WEBPACK_IMPORTED_MODULE_4__["PortfolioPlateiqComponent"], _portfolio_lilitofu_portfolio_lilitofu_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioLilitofuComponent"], _portfolio_youtube_portfolio_youtube_component__WEBPACK_IMPORTED_MODULE_6__["PortfolioYoutubeComponent"], _portfolio_signature_portfolio_signature_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioSignatureComponent"]],
        styles: ["[_nghost-%COMP%] {\n  display: block;\n  background-color: #f5f5f5;\n  padding-bottom: 100px;\n  height: 100vh;\n  overflow-y: scroll;\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%] {\n  max-width: 960px;\n  margin: 0 auto;\n  overflow: auto;\n  display: flex;\n  flex-wrap: wrap;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 100vw;\n  transform: translateX(-50%);\n  transition: all 0.3s ease-in-out;\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%] {\n  display: block;\n  width: 33.33333%;\n  float: left;\n  position: relative;\n  padding-top: 18.7%;\n  overflow: hidden;\n  background-position: center center;\n  background-size: cover;\n  box-shadow: 2px 2px 8px 0px darkgrey;\n  perspective: 300px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project.yc-portfolio__project-linkedin[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  background-image: url(/assets/images/projects/linkedin-cover.png);\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project.yc-portfolio__project-plateiq[_ngcontent-%COMP%] {\n  background-color: #17364f;\n  background-image: url(/assets/images/projects/plateiq-cover.jpeg);\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project.yc-portfolio__project-lilitofu[_ngcontent-%COMP%] {\n  background-color: #0fb8bd;\n  background-image: url(/assets/images/projects/lilitofu-cover.jpeg);\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project.yc-portfolio__project-chatapp[_ngcontent-%COMP%] {\n  background-color: #8bc174;\n  background-image: url(/assets/images/projects/chatapp-cover.jpg);\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project.yc-portfolio__project-craigslist[_ngcontent-%COMP%] {\n  background-color: #fe88ae;\n  background-image: url(/assets/images/projects/craigslist-cover.png);\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project.yc-portfolio__project-shoppingcart[_ngcontent-%COMP%] {\n  background-color: #e32240;\n  background-image: url(/assets/images/projects/shoppingcart-cover.png);\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project.yc-portfolio__project-spotify[_ngcontent-%COMP%] {\n  background-color: #515151;\n  background-image: url(/assets/images/projects/spotifyplaylist-cover.jpg);\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project.yc-portfolio__project-youtube[_ngcontent-%COMP%] {\n  background-color: #3895c7;\n  background-image: url(/assets/images/projects/youtube-cover.jpeg);\n}\n[_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project.yc-portfolio__project-signature[_ngcontent-%COMP%] {\n  background-color: #15565d;\n  background-image: url(/assets/images/projects/signature-cover.jpeg);\n}\n@media (max-width: 840px) {\n  [_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%] {\n    width: 50%;\n    padding-top: 28.125%;\n  }\n}\n@media screen and (max-width: 540px) {\n  [_nghost-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%]   .yc-portfolio__project[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-top: 56.25%;\n  }\n}\n[_nghost-%COMP%]   .yc-portfolio__detail-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 100%;\n  width: 100%;\n  transform: translateX(0);\n  transition: all 0.3s ease-in-out;\n}\n[_nghost-%COMP%]   .yc-portfolio__detail-container[_ngcontent-%COMP%]   .yc-portfolio__return-container[_ngcontent-%COMP%] {\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 0 0 10px 10px;\n}\n[_nghost-%COMP%]   .yc-portfolio__detail-container[_ngcontent-%COMP%]   .yc-portfolio__return-container[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  background: white;\n  border: 2px solid #999;\n  color: #999;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n}\n[_nghost-%COMP%]   .yc-portfolio__detail-container[_ngcontent-%COMP%]   .yc-portfolio__return-container[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:hover {\n  border-color: #333;\n  color: #333;\n}\n[_nghost-%COMP%]   .yc-portfolio-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n[_nghost-%COMP%]   .yc-portfolio-container.yc-portfolio-detail-shown[_ngcontent-%COMP%]   .yc-portfolio__projects[_ngcontent-%COMP%] {\n  left: -100%;\n}\n[_nghost-%COMP%]   .yc-portfolio-container.yc-portfolio-detail-shown[_ngcontent-%COMP%]   .yc-portfolio__detail-container[_ngcontent-%COMP%] {\n  left: 50%;\n  transform: translateX(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BvcnRmb2xpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGdDQUFBO0FBQ0o7QUFBSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFFTjtBQURNO0VBQ0UseUJBQUE7RUFDQSxpRUFBQTtBQUdSO0FBRE07RUFDRSx5QkFBQTtFQUNBLGlFQUFBO0FBR1I7QUFETTtFQUNFLHlCQUFBO0VBQ0Esa0VBQUE7QUFHUjtBQURNO0VBQ0UseUJBQUE7RUFDQSxnRUFBQTtBQUdSO0FBRE07RUFDRSx5QkFBQTtFQUNBLG1FQUFBO0FBR1I7QUFETTtFQUNFLHlCQUFBO0VBQ0EscUVBQUE7QUFHUjtBQURNO0VBQ0UseUJBQUE7RUFDQSx3RUFBQTtBQUdSO0FBRE07RUFDRSx5QkFBQTtFQUNBLGlFQUFBO0FBR1I7QUFETTtFQUNFLHlCQUFBO0VBQ0EsbUVBQUE7QUFHUjtBQURNO0VBaERGO0lBaURJLFVBQUE7SUFDQSxvQkFBQTtFQUlOO0FBQ0Y7QUFITTtFQXBERjtJQXFESSxXQUFBO0lBQ0EsbUJBQUE7RUFNTjtBQUNGO0FBRkU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0EsZ0NBQUE7QUFJSjtBQUZJO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBYUEsc0JBQUE7QUFSTjtBQUpNO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBTVI7QUFMUTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQU9WO0FBQUU7RUFDRSxrQkFBQTtBQUVKO0FBQ007RUFDRSxXQUFBO0FBQ1I7QUFDTTtFQUNFLFNBQUE7RUFDQSwyQkFBQTtBQUNSIiwiZmlsZSI6InBvcnRmb2xpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuXG4gIC55Yy1wb3J0Zm9saW9fX3Byb2plY3RzIHtcbiAgICBtYXgtd2lkdGg6IDk2MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICAueWMtcG9ydGZvbGlvX19wcm9qZWN0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDMzLjMzMzMzJTtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgcGFkZGluZy10b3A6IDE4LjclO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggMHB4IGRhcmtncmV5O1xuICAgICAgcGVyc3BlY3RpdmU6IDMwMHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgJi55Yy1wb3J0Zm9saW9fX3Byb2plY3QtbGlua2VkaW4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvcHJvamVjdHMvbGlua2VkaW4tY292ZXIucG5nKTtcbiAgICAgIH1cbiAgICAgICYueWMtcG9ydGZvbGlvX19wcm9qZWN0LXBsYXRlaXEge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTczNjRmO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvcHJvamVjdHMvcGxhdGVpcS1jb3Zlci5qcGVnKTtcbiAgICAgIH1cbiAgICAgICYueWMtcG9ydGZvbGlvX19wcm9qZWN0LWxpbGl0b2Z1IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBmYjhiZDtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL3Byb2plY3RzL2xpbGl0b2Z1LWNvdmVyLmpwZWcpO1xuICAgICAgfVxuICAgICAgJi55Yy1wb3J0Zm9saW9fX3Byb2plY3QtY2hhdGFwcCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4YmMxNzQ7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy9jaGF0YXBwLWNvdmVyLmpwZyk7XG4gICAgICB9XG4gICAgICAmLnljLXBvcnRmb2xpb19fcHJvamVjdC1jcmFpZ3NsaXN0IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlODhhZTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL3Byb2plY3RzL2NyYWlnc2xpc3QtY292ZXIucG5nKTtcbiAgICAgIH1cbiAgICAgICYueWMtcG9ydGZvbGlvX19wcm9qZWN0LXNob3BwaW5nY2FydCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMzIyNDA7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy9zaG9wcGluZ2NhcnQtY292ZXIucG5nKTtcbiAgICAgIH1cbiAgICAgICYueWMtcG9ydGZvbGlvX19wcm9qZWN0LXNwb3RpZnkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTE1MTUxO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvcHJvamVjdHMvc3BvdGlmeXBsYXlsaXN0LWNvdmVyLmpwZyk7XG4gICAgICB9XG4gICAgICAmLnljLXBvcnRmb2xpb19fcHJvamVjdC15b3V0dWJlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4OTVjNztcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL3Byb2plY3RzL3lvdXR1YmUtY292ZXIuanBlZyk7XG4gICAgICB9XG4gICAgICAmLnljLXBvcnRmb2xpb19fcHJvamVjdC1zaWduYXR1cmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTU1NjVkO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvcHJvamVjdHMvc2lnbmF0dXJlLWNvdmVyLmpwZWcpO1xuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ODQwcHgpIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgcGFkZGluZy10b3A6IDI4LjEyNSU7XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU0MHB4KSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nLXRvcDogNTYuMjUlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC55Yy1wb3J0Zm9saW9fX2RldGFpbC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG5cbiAgICAueWMtcG9ydGZvbGlvX19yZXR1cm4tY29udGFpbmVyIHtcbiAgICAgIG1heC13aWR0aDogOTYwcHg7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgID4gYnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM5OTk7XG4gICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzMzMztcbiAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcGFkZGluZzogMCAwIDEwcHggMTBweDtcbiAgICB9XG4gIH1cblxuICAueWMtcG9ydGZvbGlvLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJi55Yy1wb3J0Zm9saW8tZGV0YWlsLXNob3duIHtcbiAgICAgIC55Yy1wb3J0Zm9saW9fX3Byb2plY3RzIHtcbiAgICAgICAgbGVmdDogLTEwMCU7XG4gICAgICB9XG4gICAgICAueWMtcG9ydGZvbGlvX19kZXRhaWwtY29udGFpbmVyIHtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19 */"]
      });
      /***/
    },

    /***/
    "qqd6":
    /*!******************************************************************************!*\
      !*** ./src/app/portfolio/portfolio-linkedin/portfolio-linkedin.component.ts ***!
      \******************************************************************************/

    /*! exports provided: PortfolioLinkedinComponent */

    /***/
    function qqd6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortfolioLinkedinComponent", function () {
        return PortfolioLinkedinComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PortfolioLinkedinComponent = /*#__PURE__*/function () {
        function PortfolioLinkedinComponent() {
          _classCallCheck(this, PortfolioLinkedinComponent);
        }

        _createClass(PortfolioLinkedinComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PortfolioLinkedinComponent;
      }();

      PortfolioLinkedinComponent.ɵfac = function PortfolioLinkedinComponent_Factory(t) {
        return new (t || PortfolioLinkedinComponent)();
      };

      PortfolioLinkedinComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PortfolioLinkedinComponent,
        selectors: [["yc-portfolio-linkedin"]],
        decls: 25,
        vars: 0,
        consts: [["src", "assets/images/projects/linkedin-ads.png", 1, "yc-portfolio-linkedin__ads-image"], [1, "text-center"], [1, "text-center", "mb-2"], [1, "text-center", "mb-3"]],
        template: function PortfolioLinkedinComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Senior Software Engineer at Linkedin");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Event ad");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["[_nghost-%COMP%] {\n  display: block;\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 10px 15px 30px 15px;\n}\n[_nghost-%COMP%]   .yc-portfolio-linkedin__ads-image[_ngcontent-%COMP%] {\n  margin: 0 auto 20px auto;\n  display: block;\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BvcnRmb2xpby1saW5rZWRpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtBQUNGO0FBQ0U7RUFDRSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoicG9ydGZvbGlvLWxpbmtlZGluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiA5NjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDEwcHggMTVweCAzMHB4IDE1cHg7XG5cbiAgLnljLXBvcnRmb2xpby1saW5rZWRpbl9fYWRzLWltYWdlIHtcbiAgICBtYXJnaW46IDAgYXV0byAyMHB4IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "xVix":
    /*!****************************************************************************!*\
      !*** ./src/app/portfolio/portfolio-youtube/portfolio-youtube.component.ts ***!
      \****************************************************************************/

    /*! exports provided: PortfolioYoutubeComponent */

    /***/
    function xVix(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortfolioYoutubeComponent", function () {
        return PortfolioYoutubeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PortfolioYoutubeComponent = /*#__PURE__*/function () {
        function PortfolioYoutubeComponent() {
          _classCallCheck(this, PortfolioYoutubeComponent);
        }

        _createClass(PortfolioYoutubeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PortfolioYoutubeComponent;
      }();

      PortfolioYoutubeComponent.ɵfac = function PortfolioYoutubeComponent_Factory(t) {
        return new (t || PortfolioYoutubeComponent)();
      };

      PortfolioYoutubeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PortfolioYoutubeComponent,
        selectors: [["yc-portfolio-youtube"]],
        decls: 41,
        vars: 0,
        consts: [["src", "/assets/images/projects/youtube-channel.png", "alt", "youtube-logo", 1, "yc-portfolio-youtube__image"], ["href", "http://www.youtube.com/channel/UCQLEPbkEmwz4mABAV-kzQTQ?sub_confirmation=1", 1, "yc-portfolio-youtube__subscribe"], ["src", "/assets/images/projects/youtube-subscribe.png"], ["src", "/assets/images/projects/ROS_tutorial_cover.png", "alt", "ros-cover", 1, "yc-portfolio-youtube__image"], [1, "yc-portfolio-youtube__ros-playlist"], ["src", "https://www.youtube.com/embed/videoseries?list=PLk51HrKSBQ8-jTgD0qgRp1vmQeVSJ5SQC", "frameborder", "0", "allowfullscreen", ""]],
        template: function PortfolioYoutubeComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }
        },
        styles: ["[_nghost-%COMP%] {\n  display: block;\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 10px 15px 30px 15px;\n}\n[_nghost-%COMP%]   .yc-portfolio-youtube__image[_ngcontent-%COMP%] {\n  width: 60%;\n  margin: 20px 20%;\n}\n[_nghost-%COMP%]   .yc-portfolio-youtube__subscribe[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 200px;\n  margin: 20px auto;\n}\n[_nghost-%COMP%]   .yc-portfolio-youtube__subscribe[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 200px;\n  margin: 20px auto;\n}\n[_nghost-%COMP%]   .yc-portfolio-youtube__ros-playlist[_ngcontent-%COMP%] {\n  display: block;\n  width: 80%;\n  height: 0;\n  position: relative;\n  margin: 20px auto;\n  padding-bottom: 45%;\n}\n[_nghost-%COMP%]   .yc-portfolio-youtube__ros-playlist[_ngcontent-%COMP%]    > iframe[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BvcnRmb2xpby15b3V0dWJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0FBQ0Y7QUFDRTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQUNKO0FBRUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUFKO0FBQ0k7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNOO0FBR0U7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFESjtBQUVJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FBQU4iLCJmaWxlIjoicG9ydGZvbGlvLXlvdXR1YmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDk2MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMTBweCAxNXB4IDMwcHggMTVweDtcblxuICAueWMtcG9ydGZvbGlvLXlvdXR1YmVfX2ltYWdlIHtcbiAgICB3aWR0aDogNjAlO1xuICAgIG1hcmdpbjogMjBweCAyMCU7XG4gIH1cblxuICAueWMtcG9ydGZvbGlvLXlvdXR1YmVfX3N1YnNjcmliZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICA+IGltZyB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICB9XG4gIH1cblxuICAueWMtcG9ydGZvbGlvLXlvdXR1YmVfX3Jvcy1wbGF5bGlzdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIHBhZGRpbmctYm90dG9tOiA0NSU7XG4gICAgPiBpZnJhbWUge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgIH1cbiAgfVxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map