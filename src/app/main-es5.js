function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["svgEle"];
    var _c1 = ["svgEle", ""];

    function AppComponent__svg_line_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "line", 3);
      }

      if (rf & 2) {
        var rel_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x1", rel_r3.source.x)("x2", rel_r3.target.x)("y1", rel_r3.source.y)("y2", rel_r3.target.y);
      }
    }

    function AppComponent__svg_circle_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 4);
      }

      if (rf & 2) {
        var entity_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("fill", entity_r4.color);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("transform", "translate(" + entity_r4.x + ", " + entity_r4.y + ")");
      }
    }

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(dataService) {
        _classCallCheck(this, AppComponent);

        this.dataService = dataService;
        this.entities = [];
        this.relationships = [];
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          if (this.svgElement) {
            var domElement = this.svgElement.nativeElement;
            this.simulation = d3__WEBPACK_IMPORTED_MODULE_1__["forceSimulation"](this.entities).force('charge', d3__WEBPACK_IMPORTED_MODULE_1__["forceManyBody"]().strength(-30)).force('center', d3__WEBPACK_IMPORTED_MODULE_1__["forceCenter"](500 / 2, 500 / 2)).force('x', d3__WEBPACK_IMPORTED_MODULE_1__["forceX"]()).force('y', d3__WEBPACK_IMPORTED_MODULE_1__["forceY"]()).force('center', d3__WEBPACK_IMPORTED_MODULE_1__["forceCenter"]( // parentNode needed for firefox
            (domElement.clientWidth || domElement.parentNode.clientWidth) / 2, (domElement.clientHeight || domElement.parentNode.clientHeight) / 2)) // really low alpha min and decay result in long running
            // force graph, good for ambient motion during presentation
            .alphaMin(0.0001).alphaDecay(0.0005).on('tick', function () {// This is where we would normally manipulate the DOM
              // and update node positions
            }).force('link', d3__WEBPACK_IMPORTED_MODULE_1__["forceLink"](this.relationships) // Associate links with nodes by way of display name
            .id(function (node) {
              return node.displayName;
            }).distance(0).strength(0.5));
            this.dataService.getEntitiesAndLinks().subscribe(function (stuff) {
              _this.entities = stuff.entities;
              _this.relationships = stuff.relationships;

              if (_this.simulation) {
                _this.simulation.nodes(_this.entities);

                _this.simulation.force('link', d3__WEBPACK_IMPORTED_MODULE_1__["forceLink"](_this.relationships).id(function (node) {
                  return node.displayName;
                }).distance(0).strength(0.5));
              }
            });
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      viewQuery: function AppComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.svgElement = _t.first);
        }
      },
      decls: 4,
      vars: 2,
      consts: [["width", "100%", "height", "600px"], ["stroke", "black", 4, "ngFor", "ngForOf"], ["r", "5", 3, "fill", 4, "ngFor", "ngForOf"], ["stroke", "black"], ["r", "5"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0, _c1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent__svg_line_2_Template, 1, 4, "line", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent__svg_circle_3_Template, 1, 2, "circle", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.relationships);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.entities);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'app-root',
        templateUrl: './app.component.html'
      }]
    }], function () {
      return [{
        type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }];
    }, {
      svgElement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['svgEle', {
          static: true
        }]
      }]
    });
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./data.service */
    "./src/app/data.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]]]
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]]
    });
    /*@__PURE__*/


    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
        providers: [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]]
      }]
    }], null, null);
    /***/

  },

  /***/
  "./src/app/data.service.ts":
  /*!*********************************!*\
    !*** ./src/app/data.service.ts ***!
    \*********************************/

  /*! exports provided: DataService */

  /***/
  function srcAppDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var entitiesAndLinks = {
      entities: [{
        displayName: 'Celestine Reilly',
        index: 0,
        color: '#003c8f'
      }, {
        displayName: 'Missouri McLaughlin',
        index: 1,
        color: '#5e92f3'
      }, {
        displayName: 'Mrs. Frida King',
        index: 2,
        color: '#ff6090'
      }, {
        displayName: 'Colten Waelchi DDS',
        index: 3,
        color: '#003c8f'
      }, {
        displayName: 'Kayleigh Schimmel',
        index: 4,
        color: '#ff6090'
      }, {
        displayName: 'Krystel Marquardt',
        index: 5,
        color: '#ff6090'
      }, {
        displayName: 'Aida Stamm',
        index: 6,
        color: '#ff6090'
      }, {
        displayName: 'Jude Anderson',
        index: 7,
        color: '#e91e63'
      }, {
        displayName: 'Ron VonRueden',
        index: 8,
        color: '#003c8f'
      }, {
        displayName: "Nora O'Conner",
        index: 9,
        color: '#5e92f3'
      }, {
        displayName: 'Kaley Dickinson',
        index: 10,
        color: '#1565c0'
      }, {
        displayName: 'Olen Ruecker',
        index: 11,
        color: '#ff6090'
      }, {
        displayName: 'Gino Romaguera',
        index: 12,
        color: '#e91e63'
      }, {
        displayName: 'Leanna Will',
        index: 13,
        color: '#1565c0'
      }, {
        displayName: 'Kristofer Hane',
        index: 14,
        color: '#e91e63'
      }, {
        displayName: 'Janie Bahringer',
        index: 15,
        color: '#b0003a'
      }, {
        displayName: 'Herbert Rohan',
        index: 16,
        color: '#1565c0'
      }, {
        displayName: 'Geo Rice',
        index: 17,
        color: '#1565c0'
      }, {
        displayName: 'Reba Baumbach',
        index: 18,
        color: '#5e92f3'
      }, {
        displayName: 'Virgil Boyle',
        index: 19,
        color: '#ff6090'
      }, {
        displayName: 'Mr. Rebeka Huel',
        index: 20,
        color: '#003c8f'
      }, {
        displayName: 'Alexie Bartoletti',
        index: 21,
        color: '#5e92f3'
      }, {
        displayName: 'Carlotta Mueller',
        index: 22,
        color: '#5e92f3'
      }, {
        displayName: 'Soledad Mosciski',
        index: 23,
        color: '#ff6090'
      }, {
        displayName: 'Jerod Weimann',
        index: 24,
        color: '#003c8f'
      }, {
        displayName: 'Emory Legros',
        index: 25,
        color: '#ff6090'
      }, {
        displayName: 'Darby Bednar DVM',
        index: 26,
        color: '#b0003a'
      }, {
        displayName: 'Tatyana DuBuque II',
        index: 27,
        color: '#ff6090'
      }, {
        displayName: 'Mr. Minerva Donnelly',
        index: 28,
        color: '#1565c0'
      }, {
        displayName: 'Monserrate Schaefer',
        index: 29,
        color: '#ff6090'
      }, {
        displayName: 'Dagmar Schaefer',
        index: 30,
        color: '#b0003a'
      }, {
        displayName: 'Lottie Rohan III',
        index: 31,
        color: '#b0003a'
      }, {
        displayName: 'Ernestina Medhurst DVM',
        index: 32,
        color: '#b0003a'
      }, {
        displayName: 'Claudie Fritsch',
        index: 33,
        color: '#1565c0'
      }, {
        displayName: 'Lukas Bednar',
        index: 34,
        color: '#ff6090'
      }, {
        displayName: 'Pierre McClure',
        index: 35,
        color: '#ff6090'
      }, {
        displayName: 'Caden Hammes',
        index: 36,
        color: '#5e92f3'
      }, {
        displayName: 'Maurice Robel',
        index: 37,
        color: '#1565c0'
      }, {
        displayName: 'Lacey Bauch',
        index: 38,
        color: '#e91e63'
      }, {
        displayName: 'Blanche Lesch',
        index: 39,
        color: '#ff6090'
      }, {
        displayName: 'Ebony Mante',
        index: 40,
        color: '#b0003a'
      }, {
        displayName: 'Buford Jakubowski',
        index: 41,
        color: '#ff6090'
      }, {
        displayName: 'Ayla Leffler IV',
        index: 42,
        color: '#1565c0'
      }, {
        displayName: 'Dr. Sophia Durgan',
        index: 43,
        color: '#003c8f'
      }, {
        displayName: 'Pearl Kohler',
        index: 44,
        color: '#e91e63'
      }, {
        displayName: 'Ms. Hobart Hauck',
        index: 45,
        color: '#e91e63'
      }, {
        displayName: 'Tatum Roob',
        index: 46,
        color: '#b0003a'
      }, {
        displayName: 'Justyn Buckridge',
        index: 47,
        color: '#e91e63'
      }, {
        displayName: 'Ms. Efren Fisher',
        index: 48,
        color: '#ff6090'
      }, {
        displayName: 'Helen Ferry Sr.',
        index: 49,
        color: '#5e92f3'
      }, {
        displayName: 'Adolf Leffler',
        index: 50,
        color: '#e91e63'
      }, {
        displayName: 'Yessenia Bayer IV',
        index: 51,
        color: '#5e92f3'
      }, {
        displayName: 'Kameron Harris',
        index: 52,
        color: '#b0003a'
      }, {
        displayName: 'Maiya Gleason',
        index: 53,
        color: '#003c8f'
      }, {
        displayName: 'Ricky Block',
        index: 54,
        color: '#e91e63'
      }, {
        displayName: 'Vernon Bartell',
        index: 55,
        color: '#b0003a'
      }, {
        displayName: 'Dr. Garret Kirlin',
        index: 56,
        color: '#ff6090'
      }, {
        displayName: 'Marlon Williamson',
        index: 57,
        color: '#5e92f3'
      }, {
        displayName: 'Gladys McGlynn',
        index: 58,
        color: '#5e92f3'
      }, {
        displayName: 'Miss Juston Deckow',
        index: 59,
        color: '#e91e63'
      }, {
        displayName: 'Demetris Nicolas',
        index: 60,
        color: '#1565c0'
      }, {
        displayName: 'Conrad Bradtke',
        index: 61,
        color: '#003c8f'
      }, {
        displayName: 'Rogers Klocko',
        index: 62,
        color: '#5e92f3'
      }, {
        displayName: 'Kristian Miller',
        index: 63,
        color: '#003c8f'
      }, {
        displayName: 'Shyanne Halvorson',
        index: 64,
        color: '#ff6090'
      }, {
        displayName: 'Anabel Kohler',
        index: 65,
        color: '#ff6090'
      }, {
        displayName: 'Jazmyne Schowalter',
        index: 66,
        color: '#e91e63'
      }, {
        displayName: 'Elvis Toy',
        index: 67,
        color: '#003c8f'
      }, {
        displayName: 'Lyda Steuber',
        index: 68,
        color: '#003c8f'
      }, {
        displayName: 'Arnoldo Berge',
        index: 69,
        color: '#5e92f3'
      }, {
        displayName: 'Wilber Langosh',
        index: 70,
        color: '#ff6090'
      }, {
        displayName: 'Miguel Abshire V',
        index: 71,
        color: '#ff6090'
      }, {
        displayName: 'Elza Kreiger',
        index: 72,
        color: '#5e92f3'
      }, {
        displayName: 'Myah Hilll PhD',
        index: 73,
        color: '#b0003a'
      }, {
        displayName: 'Ms. Magnolia Hand',
        index: 74,
        color: '#003c8f'
      }, {
        displayName: 'Allie Hyatt',
        index: 75,
        color: '#e91e63'
      }, {
        displayName: 'Antonina White DVM',
        index: 76,
        color: '#5e92f3'
      }, {
        displayName: 'Jolie Lebsack I',
        index: 77,
        color: '#b0003a'
      }, {
        displayName: 'Zelma Orn',
        index: 78,
        color: '#003c8f'
      }, {
        displayName: 'Candido Muller',
        index: 79,
        color: '#ff6090'
      }, {
        displayName: 'Fred Ratke',
        index: 80,
        color: '#003c8f'
      }, {
        displayName: 'Hayley Emard',
        index: 81,
        color: '#b0003a'
      }, {
        displayName: 'Lauriane Langworth',
        index: 82,
        color: '#e91e63'
      }, {
        displayName: 'Ryann Brekke',
        index: 83,
        color: '#b0003a'
      }, {
        displayName: 'Ryley Cruickshank IV',
        index: 84,
        color: '#003c8f'
      }, {
        displayName: 'Kirstin Ortiz',
        index: 85,
        color: '#b0003a'
      }, {
        displayName: 'Payton Watsica',
        index: 86,
        color: '#b0003a'
      }, {
        displayName: 'Daisy Collins',
        index: 87,
        color: '#ff6090'
      }, {
        displayName: 'Arvel Haag Sr.',
        index: 88,
        color: '#b0003a'
      }, {
        displayName: 'Ward Tromp',
        index: 89,
        color: '#5e92f3'
      }, {
        displayName: 'Macie Bosco',
        index: 90,
        color: '#1565c0'
      }, {
        displayName: 'Justice Dicki',
        index: 91,
        color: '#003c8f'
      }, {
        displayName: 'Jaren Kirlin',
        index: 92,
        color: '#5e92f3'
      }, {
        displayName: 'Josefina Feeney',
        index: 93,
        color: '#b0003a'
      }, {
        displayName: 'Norma Renner',
        index: 94,
        color: '#b0003a'
      }, {
        displayName: 'Ida Kuhlman',
        index: 95,
        color: '#e91e63'
      }, {
        displayName: 'Winona Funk',
        index: 96,
        color: '#5e92f3'
      }, {
        displayName: 'Isom Jerde',
        index: 97,
        color: '#1565c0'
      }, {
        displayName: 'Cheyanne Huels',
        index: 98,
        color: '#ff6090'
      }, {
        displayName: 'Beulah Sporer',
        index: 99,
        color: '#b0003a'
      }, {
        displayName: 'Bernadette Miller',
        index: 100,
        color: '#b0003a'
      }, {
        displayName: 'Dr. Sophia Kuphal',
        index: 101,
        color: '#003c8f'
      }, {
        displayName: 'Loraine Considine',
        index: 102,
        color: '#1565c0'
      }, {
        displayName: 'Estrella VonRueden',
        index: 103,
        color: '#e91e63'
      }, {
        displayName: 'Dr. Sophie Mosciski',
        index: 104,
        color: '#ff6090'
      }, {
        displayName: 'Kitty Ledner',
        index: 105,
        color: '#003c8f'
      }, {
        displayName: 'Kitty Huel',
        index: 106,
        color: '#ff6090'
      }, {
        displayName: 'Mellie Stamm',
        index: 107,
        color: '#1565c0'
      }, {
        displayName: 'Andreanne Koch',
        index: 108,
        color: '#b0003a'
      }, {
        displayName: 'Ally Ankunding',
        index: 109,
        color: '#5e92f3'
      }, {
        displayName: 'Gladys Kshlerin',
        index: 110,
        color: '#ff6090'
      }, {
        displayName: 'Eliseo Bernhard',
        index: 111,
        color: '#ff6090'
      }, {
        displayName: 'Rahul Lebsack',
        index: 112,
        color: '#5e92f3'
      }, {
        displayName: 'Dallas Orn',
        index: 113,
        color: '#003c8f'
      }, {
        displayName: 'Ms. Nelle Hudson',
        index: 114,
        color: '#b0003a'
      }, {
        displayName: 'Sonya Corwin',
        index: 115,
        color: '#1565c0'
      }, {
        displayName: 'Mr. Adam Hickle',
        index: 116,
        color: '#ff6090'
      }, {
        displayName: 'Van Metz',
        index: 117,
        color: '#003c8f'
      }, {
        displayName: 'Vilma Funk',
        index: 118,
        color: '#003c8f'
      }, {
        displayName: 'Delia Streich',
        index: 119,
        color: '#1565c0'
      }, {
        displayName: 'Liza Kautzer',
        index: 120,
        color: '#1565c0'
      }, {
        displayName: 'Gregoria Leannon',
        index: 121,
        color: '#1565c0'
      }, {
        displayName: 'Jackeline Zemlak',
        index: 122,
        color: '#e91e63'
      }, {
        displayName: 'Janet Dickens',
        index: 123,
        color: '#1565c0'
      }, {
        displayName: 'Rocio Kuvalis',
        index: 124,
        color: '#ff6090'
      }, {
        displayName: 'Dewitt Trantow',
        index: 125,
        color: '#1565c0'
      }, {
        displayName: 'Ms. Roscoe Ryan',
        index: 126,
        color: '#b0003a'
      }, {
        displayName: 'Lloyd Breitenberg',
        index: 127,
        color: '#b0003a'
      }, {
        displayName: 'Trinity Rosenbaum',
        index: 128,
        color: '#b0003a'
      }, {
        displayName: 'Pierce Haag',
        index: 129,
        color: '#5e92f3'
      }, {
        displayName: 'Cassandra Simonis',
        index: 130,
        color: '#ff6090'
      }, {
        displayName: 'Heber King',
        index: 131,
        color: '#1565c0'
      }, {
        displayName: 'Karine Emmerich',
        index: 132,
        color: '#ff6090'
      }, {
        displayName: 'Guillermo Macejkovic',
        index: 133,
        color: '#e91e63'
      }, {
        displayName: 'Carlo Barrows',
        index: 134,
        color: '#e91e63'
      }, {
        displayName: 'Marion Jerde',
        index: 135,
        color: '#5e92f3'
      }, {
        displayName: 'Dina Champlin I',
        index: 136,
        color: '#5e92f3'
      }, {
        displayName: 'Robyn Cruickshank Sr.',
        index: 137,
        color: '#e91e63'
      }, {
        displayName: 'Esperanza Kuhlman',
        index: 138,
        color: '#b0003a'
      }, {
        displayName: 'Liam Will',
        index: 139,
        color: '#5e92f3'
      }, {
        displayName: 'Freeman Auer',
        index: 140,
        color: '#1565c0'
      }, {
        displayName: 'Stanley Denesik',
        index: 141,
        color: '#003c8f'
      }, {
        displayName: 'Elwyn White',
        index: 142,
        color: '#b0003a'
      }, {
        displayName: 'Destin Schumm',
        index: 143,
        color: '#e91e63'
      }, {
        displayName: 'Miss Mortimer Lehner',
        index: 144,
        color: '#e91e63'
      }, {
        displayName: 'Timothy Grimes',
        index: 145,
        color: '#ff6090'
      }, {
        displayName: 'Montana Lynch',
        index: 146,
        color: '#e91e63'
      }, {
        displayName: 'Caterina Lehner PhD',
        index: 147,
        color: '#e91e63'
      }, {
        displayName: 'Athena Lang V',
        index: 148,
        color: '#003c8f'
      }, {
        displayName: 'Corine Romaguera',
        index: 149,
        color: '#1565c0'
      }, {
        displayName: 'Magdalen Schinner',
        index: 150,
        color: '#1565c0'
      }, {
        displayName: 'Chelsie Homenick',
        index: 151,
        color: '#1565c0'
      }, {
        displayName: 'Mrs. Leonardo Hickle',
        index: 152,
        color: '#1565c0'
      }, {
        displayName: 'Margaret Trantow',
        index: 153,
        color: '#ff6090'
      }, {
        displayName: 'Emmett Dickinson',
        index: 154,
        color: '#5e92f3'
      }, {
        displayName: 'Dora Schmeler IV',
        index: 155,
        color: '#b0003a'
      }, {
        displayName: 'Raleigh Kuphal',
        index: 156,
        color: '#5e92f3'
      }, {
        displayName: 'Kevin Wolff',
        index: 157,
        color: '#ff6090'
      }, {
        displayName: 'Godfrey Ryan',
        index: 158,
        color: '#ff6090'
      }, {
        displayName: 'Miguel Daugherty',
        index: 159,
        color: '#5e92f3'
      }, {
        displayName: 'Syble Muller',
        index: 160,
        color: '#5e92f3'
      }, {
        displayName: 'Aisha Thiel',
        index: 161,
        color: '#ff6090'
      }, {
        displayName: 'Adonis Hayes',
        index: 162,
        color: '#ff6090'
      }, {
        displayName: 'Nathaniel Lubowitz',
        index: 163,
        color: '#5e92f3'
      }, {
        displayName: 'Daija Goyette',
        index: 164,
        color: '#ff6090'
      }, {
        displayName: 'Dr. Elinore Sauer',
        index: 165,
        color: '#ff6090'
      }, {
        displayName: 'Alberta Torphy',
        index: 166,
        color: '#e91e63'
      }, {
        displayName: 'Crystel Wilderman',
        index: 167,
        color: '#003c8f'
      }, {
        displayName: 'Sofia Lubowitz IV',
        index: 168,
        color: '#ff6090'
      }, {
        displayName: 'Keeley Bosco DDS',
        index: 169,
        color: '#003c8f'
      }, {
        displayName: 'Alyson Jaskolski',
        index: 170,
        color: '#e91e63'
      }, {
        displayName: 'Erika Bernhard',
        index: 171,
        color: '#1565c0'
      }, {
        displayName: 'Filomena Greenholt',
        index: 172,
        color: '#003c8f'
      }, {
        displayName: 'Halie Trantow',
        index: 173,
        color: '#1565c0'
      }, {
        displayName: 'Frederick Ziemann',
        index: 174,
        color: '#003c8f'
      }, {
        displayName: 'Rashawn Hills Jr.',
        index: 175,
        color: '#b0003a'
      }, {
        displayName: 'Josh Cruickshank',
        index: 176,
        color: '#003c8f'
      }, {
        displayName: 'Filiberto Mohr',
        index: 177,
        color: '#1565c0'
      }, {
        displayName: 'Kyla Dietrich',
        index: 178,
        color: '#1565c0'
      }, {
        displayName: 'Dolores Daniel',
        index: 179,
        color: '#5e92f3'
      }, {
        displayName: 'Gladys Rice',
        index: 180,
        color: '#5e92f3'
      }, {
        displayName: 'Aurore Adams II',
        index: 181,
        color: '#003c8f'
      }, {
        displayName: 'Raymond Vandervort',
        index: 182,
        color: '#ff6090'
      }, {
        displayName: 'Monserrate Kuvalis',
        index: 183,
        color: '#003c8f'
      }, {
        displayName: 'Emiliano Dickens',
        index: 184,
        color: '#5e92f3'
      }, {
        displayName: 'Kaci Abbott',
        index: 185,
        color: '#003c8f'
      }, {
        displayName: 'Miss Erna Mills',
        index: 186,
        color: '#1565c0'
      }, {
        displayName: 'Dillan Koch',
        index: 187,
        color: '#003c8f'
      }, {
        displayName: 'Ms. Estevan Huels',
        index: 188,
        color: '#1565c0'
      }, {
        displayName: 'Maida Lebsack',
        index: 189,
        color: '#e91e63'
      }, {
        displayName: 'Tatyana Rath',
        index: 190,
        color: '#b0003a'
      }, {
        displayName: 'Juvenal Koss',
        index: 191,
        color: '#003c8f'
      }, {
        displayName: 'Judy Schinner',
        index: 192,
        color: '#5e92f3'
      }, {
        displayName: 'Seth Legros',
        index: 193,
        color: '#e91e63'
      }, {
        displayName: 'Emely Stokes',
        index: 194,
        color: '#e91e63'
      }, {
        displayName: 'Dewitt Greenholt',
        index: 195,
        color: '#003c8f'
      }, {
        displayName: 'Ora Green',
        index: 196,
        color: '#ff6090'
      }, {
        displayName: 'Mrs. Francis Stanton',
        index: 197,
        color: '#1565c0'
      }, {
        displayName: 'Rachel Murazik',
        index: 198,
        color: '#1565c0'
      }, {
        displayName: 'Alize Rippin',
        index: 199,
        color: '#ff6090'
      }, {
        displayName: 'Aurelio Abshire',
        index: 200,
        color: '#5e92f3'
      }, {
        displayName: 'Claudia Mertz Sr.',
        index: 201,
        color: '#b0003a'
      }, {
        displayName: 'Vernie Bartoletti',
        index: 202,
        color: '#e91e63'
      }, {
        displayName: 'Lula Smith',
        index: 203,
        color: '#b0003a'
      }, {
        displayName: 'Mrs. Layne Daugherty',
        index: 204,
        color: '#1565c0'
      }, {
        displayName: 'Thea Langworth',
        index: 205,
        color: '#1565c0'
      }, {
        displayName: 'Alessia Moen',
        index: 206,
        color: '#1565c0'
      }, {
        displayName: 'Garett Mante',
        index: 207,
        color: '#003c8f'
      }, {
        displayName: 'Guillermo Buckridge',
        index: 208,
        color: '#e91e63'
      }, {
        displayName: 'Danyka Schumm',
        index: 209,
        color: '#e91e63'
      }, {
        displayName: 'Cristina Schultz',
        index: 210,
        color: '#e91e63'
      }, {
        displayName: 'Gerald Gerlach',
        index: 211,
        color: '#003c8f'
      }, {
        displayName: 'Winston Terry',
        index: 212,
        color: '#1565c0'
      }, {
        displayName: 'Dr. Clemens Huels',
        index: 213,
        color: '#e91e63'
      }, {
        displayName: 'Jacinthe Kub',
        index: 214,
        color: '#003c8f'
      }, {
        displayName: 'Dr. Betty Considine',
        index: 215,
        color: '#e91e63'
      }, {
        displayName: 'Lincoln Kreiger',
        index: 216,
        color: '#b0003a'
      }, {
        displayName: 'Ashlee Hickle',
        index: 217,
        color: '#ff6090'
      }, {
        displayName: 'Jermain Nader DDS',
        index: 218,
        color: '#e91e63'
      }, {
        displayName: 'Eladio Kozey',
        index: 219,
        color: '#e91e63'
      }, {
        displayName: 'Kenny Schinner',
        index: 220,
        color: '#003c8f'
      }, {
        displayName: 'Mafalda Welch',
        index: 221,
        color: '#1565c0'
      }, {
        displayName: 'Lazaro Heller',
        index: 222,
        color: '#e91e63'
      }, {
        displayName: 'Tevin Kautzer',
        index: 223,
        color: '#1565c0'
      }, {
        displayName: 'Davon Gorczany',
        index: 224,
        color: '#e91e63'
      }, {
        displayName: 'Florencio Balistreri III',
        index: 225,
        color: '#ff6090'
      }, {
        displayName: 'Sydni Hodkiewicz',
        index: 226,
        color: '#e91e63'
      }, {
        displayName: 'Destin Thiel',
        index: 227,
        color: '#e91e63'
      }, {
        displayName: 'Marcia McClure',
        index: 228,
        color: '#5e92f3'
      }, {
        displayName: 'Art Williamson Sr.',
        index: 229,
        color: '#1565c0'
      }, {
        displayName: 'Dee Nitzsche',
        index: 230,
        color: '#b0003a'
      }, {
        displayName: 'Frederik Nader',
        index: 231,
        color: '#5e92f3'
      }, {
        displayName: 'Vivianne Kub',
        index: 232,
        color: '#ff6090'
      }, {
        displayName: 'Ressie Schinner',
        index: 233,
        color: '#e91e63'
      }, {
        displayName: 'Desmond Howe',
        index: 234,
        color: '#003c8f'
      }, {
        displayName: 'Lucienne Gottlieb',
        index: 235,
        color: '#ff6090'
      }, {
        displayName: 'Ervin Mante',
        index: 236,
        color: '#003c8f'
      }, {
        displayName: 'Green Hilpert',
        index: 237,
        color: '#1565c0'
      }, {
        displayName: 'Dr. Tyrese Olson',
        index: 238,
        color: '#e91e63'
      }, {
        displayName: 'Johnathon Bergstrom',
        index: 239,
        color: '#003c8f'
      }, {
        displayName: 'Krista Jaskolski',
        index: 240,
        color: '#003c8f'
      }, {
        displayName: 'Therese Lind',
        index: 241,
        color: '#5e92f3'
      }, {
        displayName: 'Bernita Konopelski',
        index: 242,
        color: '#5e92f3'
      }, {
        displayName: 'Rosemarie Pfannerstill',
        index: 243,
        color: '#b0003a'
      }, {
        displayName: 'Dejah Eichmann',
        index: 244,
        color: '#e91e63'
      }, {
        displayName: 'Darlene Hodkiewicz DVM',
        index: 245,
        color: '#5e92f3'
      }, {
        displayName: 'Mr. Dannie Hills',
        index: 246,
        color: '#5e92f3'
      }, {
        displayName: 'Mr. Bessie Schmidt',
        index: 247,
        color: '#e91e63'
      }, {
        displayName: 'Shaun Towne',
        index: 248,
        color: '#ff6090'
      }, {
        displayName: 'Kiara Williamson IV',
        index: 249,
        color: '#b0003a'
      }],
      relationships: [{
        source: 'Celestine Reilly',
        target: 'Eliseo Bernhard'
      }, {
        source: 'Missouri McLaughlin',
        target: 'Dallas Orn'
      }, {
        source: 'Mrs. Frida King',
        target: 'Kiara Williamson IV'
      }, {
        source: 'Colten Waelchi DDS',
        target: 'Seth Legros'
      }, {
        source: 'Kayleigh Schimmel',
        target: 'Kitty Huel'
      }, {
        source: 'Krystel Marquardt',
        target: 'Robyn Cruickshank Sr.'
      }, {
        source: 'Aida Stamm',
        target: 'Godfrey Ryan'
      }, {
        source: 'Jude Anderson',
        target: "Nora O'Conner"
      }, {
        source: 'Ron VonRueden',
        target: 'Myah Hilll PhD'
      }, {
        source: "Nora O'Conner",
        target: 'Heber King'
      }, {
        source: 'Kaley Dickinson',
        target: 'Guillermo Macejkovic'
      }, {
        source: 'Olen Ruecker',
        target: 'Kitty Ledner'
      }, {
        source: 'Gino Romaguera',
        target: 'Lincoln Kreiger'
      }, {
        source: 'Leanna Will',
        target: 'Carlo Barrows'
      }, {
        source: 'Kristofer Hane',
        target: 'Dr. Elinore Sauer'
      }, {
        source: 'Janie Bahringer',
        target: 'Cheyanne Huels'
      }, {
        source: 'Herbert Rohan',
        target: 'Desmond Howe'
      }, {
        source: 'Geo Rice',
        target: 'Dolores Daniel'
      }, {
        source: 'Reba Baumbach',
        target: 'Guillermo Buckridge'
      }, {
        source: 'Virgil Boyle',
        target: 'Vivianne Kub'
      }, {
        source: 'Mr. Rebeka Huel',
        target: 'Ms. Roscoe Ryan'
      }, {
        source: 'Alexie Bartoletti',
        target: 'Dr. Sophia Kuphal'
      }, {
        source: 'Carlotta Mueller',
        target: 'Garett Mante'
      }, {
        source: 'Soledad Mosciski',
        target: 'Nathaniel Lubowitz'
      }, {
        source: 'Jerod Weimann',
        target: 'Ayla Leffler IV'
      }, {
        source: 'Emory Legros',
        target: 'Conrad Bradtke'
      }, {
        source: 'Darby Bednar DVM',
        target: 'Alexie Bartoletti'
      }, {
        source: 'Tatyana DuBuque II',
        target: 'Erika Bernhard'
      }, {
        source: 'Mr. Minerva Donnelly',
        target: 'Dr. Garret Kirlin'
      }, {
        source: 'Monserrate Schaefer',
        target: 'Geo Rice'
      }, {
        source: 'Dagmar Schaefer',
        target: 'Gino Romaguera'
      }, {
        source: 'Lottie Rohan III',
        target: 'Andreanne Koch'
      }, {
        source: 'Ernestina Medhurst DVM',
        target: 'Magdalen Schinner'
      }, {
        source: 'Claudie Fritsch',
        target: 'Miss Juston Deckow'
      }, {
        source: 'Lukas Bednar',
        target: 'Montana Lynch'
      }, {
        source: 'Pierre McClure',
        target: 'Virgil Boyle'
      }, {
        source: 'Caden Hammes',
        target: 'Kenny Schinner'
      }, {
        source: 'Maurice Robel',
        target: 'Cassandra Simonis'
      }, {
        source: 'Lacey Bauch',
        target: 'Kyla Dietrich'
      }, {
        source: 'Blanche Lesch',
        target: 'Erika Bernhard'
      }, {
        source: 'Ebony Mante',
        target: 'Kenny Schinner'
      }, {
        source: 'Buford Jakubowski',
        target: 'Delia Streich'
      }, {
        source: 'Ayla Leffler IV',
        target: 'Ernestina Medhurst DVM'
      }, {
        source: 'Dr. Sophia Durgan',
        target: 'Aurore Adams II'
      }, {
        source: 'Pearl Kohler',
        target: 'Dora Schmeler IV'
      }, {
        source: 'Ms. Hobart Hauck',
        target: 'Dallas Orn'
      }, {
        source: 'Tatum Roob',
        target: 'Tatyana DuBuque II'
      }, {
        source: 'Justyn Buckridge',
        target: 'Adolf Leffler'
      }, {
        source: 'Ms. Efren Fisher',
        target: 'Josh Cruickshank'
      }, {
        source: 'Helen Ferry Sr.',
        target: 'Crystel Wilderman'
      }, {
        source: 'Adolf Leffler',
        target: 'Guillermo Buckridge'
      }, {
        source: 'Yessenia Bayer IV',
        target: 'Daija Goyette'
      }, {
        source: 'Kameron Harris',
        target: 'Lloyd Breitenberg'
      }, {
        source: 'Maiya Gleason',
        target: 'Jerod Weimann'
      }, {
        source: 'Ricky Block',
        target: 'Guillermo Buckridge'
      }, {
        source: 'Vernon Bartell',
        target: 'Anabel Kohler'
      }, {
        source: 'Dr. Garret Kirlin',
        target: 'Timothy Grimes'
      }, {
        source: 'Marlon Williamson',
        target: 'Ernestina Medhurst DVM'
      }, {
        source: 'Gladys McGlynn',
        target: 'Alberta Torphy'
      }, {
        source: 'Miss Juston Deckow',
        target: 'Dr. Clemens Huels'
      }, {
        source: 'Demetris Nicolas',
        target: 'Alberta Torphy'
      }, {
        source: 'Conrad Bradtke',
        target: 'Caterina Lehner PhD'
      }, {
        source: 'Rogers Klocko',
        target: 'Florencio Balistreri III'
      }, {
        source: 'Kristian Miller',
        target: 'Norma Renner'
      }, {
        source: 'Shyanne Halvorson',
        target: 'Marcia McClure'
      }, {
        source: 'Anabel Kohler',
        target: 'Alize Rippin'
      }, {
        source: 'Jazmyne Schowalter',
        target: 'Herbert Rohan'
      }, {
        source: 'Elvis Toy',
        target: 'Ryley Cruickshank IV'
      }, {
        source: 'Lyda Steuber',
        target: 'Mafalda Welch'
      }, {
        source: 'Arnoldo Berge',
        target: 'Dina Champlin I'
      }, {
        source: 'Wilber Langosh',
        target: 'Davon Gorczany'
      }, {
        source: 'Miguel Abshire V',
        target: 'Garett Mante'
      }, {
        source: 'Elza Kreiger',
        target: 'Lazaro Heller'
      }, {
        source: 'Myah Hilll PhD',
        target: 'Liza Kautzer'
      }, {
        source: 'Ms. Magnolia Hand',
        target: 'Dr. Garret Kirlin'
      }, {
        source: 'Allie Hyatt',
        target: 'Ms. Nelle Hudson'
      }, {
        source: 'Antonina White DVM',
        target: 'Kameron Harris'
      }, {
        source: 'Jolie Lebsack I',
        target: 'Darby Bednar DVM'
      }, {
        source: 'Zelma Orn',
        target: 'Guillermo Buckridge'
      }, {
        source: 'Candido Muller',
        target: 'Ms. Roscoe Ryan'
      }, {
        source: 'Fred Ratke',
        target: 'Tevin Kautzer'
      }, {
        source: 'Hayley Emard',
        target: 'Heber King'
      }, {
        source: 'Lauriane Langworth',
        target: 'Estrella VonRueden'
      }, {
        source: 'Ryann Brekke',
        target: 'Cassandra Simonis'
      }, {
        source: 'Ryley Cruickshank IV',
        target: 'Dr. Tyrese Olson'
      }, {
        source: 'Kirstin Ortiz',
        target: 'Gregoria Leannon'
      }, {
        source: 'Payton Watsica',
        target: 'Lauriane Langworth'
      }, {
        source: 'Daisy Collins',
        target: 'Elvis Toy'
      }, {
        source: 'Arvel Haag Sr.',
        target: 'Ms. Hobart Hauck'
      }, {
        source: 'Ward Tromp',
        target: 'Missouri McLaughlin'
      }, {
        source: 'Macie Bosco',
        target: 'Kiara Williamson IV'
      }, {
        source: 'Justice Dicki',
        target: 'Kristofer Hane'
      }, {
        source: 'Jaren Kirlin',
        target: 'Magdalen Schinner'
      }, {
        source: 'Josefina Feeney',
        target: 'Alyson Jaskolski'
      }, {
        source: 'Norma Renner',
        target: 'Ressie Schinner'
      }, {
        source: 'Ida Kuhlman',
        target: 'Stanley Denesik'
      }, {
        source: 'Winona Funk',
        target: 'Destin Thiel'
      }, {
        source: 'Isom Jerde',
        target: 'Pierce Haag'
      }, {
        source: 'Cheyanne Huels',
        target: 'Mr. Minerva Donnelly'
      }, {
        source: 'Beulah Sporer',
        target: 'Alberta Torphy'
      }, {
        source: 'Bernadette Miller',
        target: 'Helen Ferry Sr.'
      }, {
        source: 'Dr. Sophia Kuphal',
        target: 'Rachel Murazik'
      }, {
        source: 'Loraine Considine',
        target: 'Kenny Schinner'
      }, {
        source: 'Estrella VonRueden',
        target: 'Leanna Will'
      }, {
        source: 'Dr. Sophie Mosciski',
        target: 'Ms. Roscoe Ryan'
      }, {
        source: 'Kitty Ledner',
        target: 'Jerod Weimann'
      }, {
        source: 'Kitty Huel',
        target: 'Montana Lynch'
      }, {
        source: 'Mellie Stamm',
        target: 'Montana Lynch'
      }, {
        source: 'Andreanne Koch',
        target: 'Jackeline Zemlak'
      }, {
        source: 'Ally Ankunding',
        target: 'Monserrate Schaefer'
      }, {
        source: 'Gladys Kshlerin',
        target: 'Rocio Kuvalis'
      }, {
        source: 'Eliseo Bernhard',
        target: 'Helen Ferry Sr.'
      }, {
        source: 'Rahul Lebsack',
        target: 'Dewitt Greenholt'
      }, {
        source: 'Dallas Orn',
        target: 'Anabel Kohler'
      }, {
        source: 'Ms. Nelle Hudson',
        target: 'Nathaniel Lubowitz'
      }, {
        source: 'Sonya Corwin',
        target: 'Jerod Weimann'
      }, {
        source: 'Mr. Adam Hickle',
        target: 'Claudie Fritsch'
      }, {
        source: 'Van Metz',
        target: 'Lottie Rohan III'
      }, {
        source: 'Vilma Funk',
        target: 'Pierre McClure'
      }, {
        source: 'Delia Streich',
        target: 'Gerald Gerlach'
      }, {
        source: 'Liza Kautzer',
        target: 'Judy Schinner'
      }, {
        source: 'Gregoria Leannon',
        target: 'Dolores Daniel'
      }, {
        source: 'Jackeline Zemlak',
        target: 'Freeman Auer'
      }, {
        source: 'Janet Dickens',
        target: 'Geo Rice'
      }, {
        source: 'Rocio Kuvalis',
        target: 'Emiliano Dickens'
      }, {
        source: 'Dewitt Trantow',
        target: 'Krystel Marquardt'
      }, {
        source: 'Ms. Roscoe Ryan',
        target: 'Celestine Reilly'
      }, {
        source: 'Lloyd Breitenberg',
        target: 'Tatyana Rath'
      }, {
        source: 'Trinity Rosenbaum',
        target: 'Gerald Gerlach'
      }, {
        source: 'Pierce Haag',
        target: 'Shaun Towne'
      }, {
        source: 'Cassandra Simonis',
        target: 'Jude Anderson'
      }, {
        source: 'Heber King',
        target: 'Dolores Daniel'
      }, {
        source: 'Karine Emmerich',
        target: 'Rocio Kuvalis'
      }, {
        source: 'Guillermo Macejkovic',
        target: 'Vilma Funk'
      }, {
        source: 'Carlo Barrows',
        target: 'Emely Stokes'
      }, {
        source: 'Marion Jerde',
        target: 'Gerald Gerlach'
      }, {
        source: 'Dina Champlin I',
        target: 'Geo Rice'
      }, {
        source: 'Robyn Cruickshank Sr.',
        target: 'Elwyn White'
      }, {
        source: 'Esperanza Kuhlman',
        target: 'Monserrate Schaefer'
      }, {
        source: 'Liam Will',
        target: "Nora O'Conner"
      }, {
        source: 'Freeman Auer',
        target: 'Alexie Bartoletti'
      }, {
        source: 'Stanley Denesik',
        target: 'Antonina White DVM'
      }, {
        source: 'Elwyn White',
        target: 'Pierce Haag'
      }, {
        source: 'Destin Schumm',
        target: 'Reba Baumbach'
      }, {
        source: 'Miss Mortimer Lehner',
        target: 'Sofia Lubowitz IV'
      }, {
        source: 'Timothy Grimes',
        target: 'Emmett Dickinson'
      }, {
        source: 'Montana Lynch',
        target: 'Antonina White DVM'
      }, {
        source: 'Caterina Lehner PhD',
        target: 'Yessenia Bayer IV'
      }, {
        source: 'Athena Lang V',
        target: 'Marlon Williamson'
      }, {
        source: 'Corine Romaguera',
        target: 'Liza Kautzer'
      }, {
        source: 'Magdalen Schinner',
        target: 'Zelma Orn'
      }, {
        source: 'Chelsie Homenick',
        target: 'Green Hilpert'
      }, {
        source: 'Mrs. Leonardo Hickle',
        target: 'Jaren Kirlin'
      }, {
        source: 'Margaret Trantow',
        target: 'Dora Schmeler IV'
      }, {
        source: 'Emmett Dickinson',
        target: 'Gino Romaguera'
      }, {
        source: 'Dora Schmeler IV',
        target: 'Dallas Orn'
      }, {
        source: 'Raleigh Kuphal',
        target: 'Elza Kreiger'
      }, {
        source: 'Kevin Wolff',
        target: 'Aida Stamm'
      }, {
        source: 'Godfrey Ryan',
        target: 'Destin Schumm'
      }, {
        source: 'Miguel Daugherty',
        target: 'Ryann Brekke'
      }, {
        source: 'Syble Muller',
        target: 'Guillermo Macejkovic'
      }, {
        source: 'Aisha Thiel',
        target: 'Krista Jaskolski'
      }, {
        source: 'Adonis Hayes',
        target: 'Rashawn Hills Jr.'
      }, {
        source: 'Nathaniel Lubowitz',
        target: 'Cassandra Simonis'
      }, {
        source: 'Daija Goyette',
        target: 'Loraine Considine'
      }, {
        source: 'Dr. Elinore Sauer',
        target: 'Ernestina Medhurst DVM'
      }, {
        source: 'Alberta Torphy',
        target: 'Claudia Mertz Sr.'
      }, {
        source: 'Crystel Wilderman',
        target: 'Cristina Schultz'
      }, {
        source: 'Sofia Lubowitz IV',
        target: 'Aurore Adams II'
      }, {
        source: 'Keeley Bosco DDS',
        target: 'Lacey Bauch'
      }, {
        source: 'Alyson Jaskolski',
        target: 'Caterina Lehner PhD'
      }, {
        source: 'Erika Bernhard',
        target: 'Danyka Schumm'
      }, {
        source: 'Filomena Greenholt',
        target: 'Mrs. Leonardo Hickle'
      }, {
        source: 'Halie Trantow',
        target: 'Ms. Nelle Hudson'
      }, {
        source: 'Frederick Ziemann',
        target: 'Dee Nitzsche'
      }, {
        source: 'Rashawn Hills Jr.',
        target: 'Kevin Wolff'
      }, {
        source: 'Josh Cruickshank',
        target: 'Cassandra Simonis'
      }, {
        source: 'Filiberto Mohr',
        target: 'Davon Gorczany'
      }, {
        source: 'Kyla Dietrich',
        target: 'Filiberto Mohr'
      }, {
        source: 'Dolores Daniel',
        target: 'Blanche Lesch'
      }, {
        source: 'Gladys Rice',
        target: 'Maida Lebsack'
      }, {
        source: 'Aurore Adams II',
        target: 'Dolores Daniel'
      }, {
        source: 'Raymond Vandervort',
        target: 'Colten Waelchi DDS'
      }, {
        source: 'Monserrate Kuvalis',
        target: 'Crystel Wilderman'
      }, {
        source: 'Emiliano Dickens',
        target: 'Justice Dicki'
      }, {
        source: 'Kaci Abbott',
        target: 'Kitty Ledner'
      }, {
        source: 'Miss Erna Mills',
        target: 'Filomena Greenholt'
      }, {
        source: 'Dillan Koch',
        target: 'Ryann Brekke'
      }, {
        source: 'Ms. Estevan Huels',
        target: 'Winona Funk'
      }, {
        source: 'Maida Lebsack',
        target: 'Payton Watsica'
      }, {
        source: 'Tatyana Rath',
        target: 'Aurelio Abshire'
      }, {
        source: 'Juvenal Koss',
        target: 'Kayleigh Schimmel'
      }, {
        source: 'Judy Schinner',
        target: 'Isom Jerde'
      }, {
        source: 'Seth Legros',
        target: 'Ayla Leffler IV'
      }, {
        source: 'Emely Stokes',
        target: 'Elza Kreiger'
      }, {
        source: 'Dewitt Greenholt',
        target: 'Kaci Abbott'
      }, {
        source: 'Ora Green',
        target: 'Keeley Bosco DDS'
      }, {
        source: 'Mrs. Francis Stanton',
        target: 'Erika Bernhard'
      }, {
        source: 'Rachel Murazik',
        target: 'Aurore Adams II'
      }, {
        source: 'Alize Rippin',
        target: 'Marlon Williamson'
      }, {
        source: 'Aurelio Abshire',
        target: 'Dr. Tyrese Olson'
      }, {
        source: 'Claudia Mertz Sr.',
        target: 'Corine Romaguera'
      }, {
        source: 'Vernie Bartoletti',
        target: 'Pearl Kohler'
      }, {
        source: 'Lula Smith',
        target: 'Emiliano Dickens'
      }, {
        source: 'Mrs. Layne Daugherty',
        target: 'Buford Jakubowski'
      }, {
        source: 'Thea Langworth',
        target: 'Aurelio Abshire'
      }, {
        source: 'Alessia Moen',
        target: 'Dr. Clemens Huels'
      }, {
        source: 'Garett Mante',
        target: 'Conrad Bradtke'
      }, {
        source: 'Guillermo Buckridge',
        target: 'Margaret Trantow'
      }, {
        source: 'Danyka Schumm',
        target: 'Darby Bednar DVM'
      }, {
        source: 'Cristina Schultz',
        target: 'Arnoldo Berge'
      }, {
        source: 'Gerald Gerlach',
        target: 'Syble Muller'
      }, {
        source: 'Winston Terry',
        target: 'Lukas Bednar'
      }, {
        source: 'Dr. Clemens Huels',
        target: 'Justyn Buckridge'
      }, {
        source: 'Jacinthe Kub',
        target: 'Claudia Mertz Sr.'
      }, {
        source: 'Dr. Betty Considine',
        target: 'Mr. Adam Hickle'
      }, {
        source: 'Lincoln Kreiger',
        target: 'Ms. Roscoe Ryan'
      }, {
        source: 'Ashlee Hickle',
        target: 'Emely Stokes'
      }, {
        source: 'Jermain Nader DDS',
        target: 'Ms. Magnolia Hand'
      }, {
        source: 'Eladio Kozey',
        target: 'Mrs. Layne Daugherty'
      }, {
        source: 'Kenny Schinner',
        target: 'Janet Dickens'
      }, {
        source: 'Mafalda Welch',
        target: 'Lula Smith'
      }, {
        source: 'Lazaro Heller',
        target: 'Winston Terry'
      }, {
        source: 'Tevin Kautzer',
        target: 'Danyka Schumm'
      }, {
        source: 'Davon Gorczany',
        target: 'Justyn Buckridge'
      }, {
        source: 'Florencio Balistreri III',
        target: 'Dr. Sophia Durgan'
      }, {
        source: 'Sydni Hodkiewicz',
        target: 'Estrella VonRueden'
      }, {
        source: 'Destin Thiel',
        target: 'Halie Trantow'
      }, {
        source: 'Marcia McClure',
        target: 'Lincoln Kreiger'
      }, {
        source: 'Art Williamson Sr.',
        target: 'Therese Lind'
      }, {
        source: 'Dee Nitzsche',
        target: 'Dina Champlin I'
      }, {
        source: 'Frederik Nader',
        target: 'Dallas Orn'
      }, {
        source: 'Vivianne Kub',
        target: 'Lula Smith'
      }, {
        source: 'Ressie Schinner',
        target: 'Ryann Brekke'
      }, {
        source: 'Desmond Howe',
        target: 'Crystel Wilderman'
      }, {
        source: 'Lucienne Gottlieb',
        target: 'Dr. Sophia Durgan'
      }, {
        source: 'Ervin Mante',
        target: 'Ms. Roscoe Ryan'
      }, {
        source: 'Green Hilpert',
        target: 'Ms. Nelle Hudson'
      }, {
        source: 'Dr. Tyrese Olson',
        target: 'Athena Lang V'
      }, {
        source: 'Johnathon Bergstrom',
        target: 'Missouri McLaughlin'
      }, {
        source: 'Krista Jaskolski',
        target: 'Anabel Kohler'
      }, {
        source: 'Therese Lind',
        target: 'Dolores Daniel'
      }, {
        source: 'Bernita Konopelski',
        target: 'Ebony Mante'
      }, {
        source: 'Rosemarie Pfannerstill',
        target: 'Elvis Toy'
      }, {
        source: 'Dejah Eichmann',
        target: 'Lacey Bauch'
      }, {
        source: 'Darlene Hodkiewicz DVM',
        target: 'Olen Ruecker'
      }, {
        source: 'Mr. Dannie Hills',
        target: 'Aurore Adams II'
      }, {
        source: 'Mr. Bessie Schmidt',
        target: 'Trinity Rosenbaum'
      }, {
        source: 'Shaun Towne',
        target: 'Caden Hammes'
      }, {
        source: 'Kiara Williamson IV',
        target: 'Ms. Estevan Huels'
      }]
    };

    var DataService =
    /*#__PURE__*/
    function () {
      function DataService() {
        _classCallCheck(this, DataService);
      }

      _createClass(DataService, [{
        key: "getEntitiesAndLinks",
        value: function getEntitiesAndLinks() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(entitiesAndLinks);
        }
      }]);

      return DataService;
    }();

    DataService.ɵfac = function DataService_Factory(t) {
      return new (t || DataService)();
    };

    DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DataService,
      factory: function factory(t) {
        return DataService.ɵfac(t);
      },
      providedIn: null
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null);
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
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
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/kcordes/projects/Ang/angular-class-material/abc/AOT-SKIP-cli/sandbox/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]); //# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map