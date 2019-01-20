(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/build/pay"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\build\\pay.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/hasee/Documents/HBuilderProjects/mall/pages/build/pay.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;




























































































var _index = _interopRequireDefault(__webpack_require__(/*! ../../utils/index.js */ "C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\utils\\index.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =
{
  data: function data() {
    return {
      buildinf: {},
      vehiclelist: [],
      carrylist: [],
      name: '',
      date: '',
      time: '',
      y: "",
      m: '',
      d: '',
      adress: {},
      vehicleindex: 0,
      carryindex: 0,
      allprice: '',
      mallprice: '',
      sendprice: '',
      carryprice: '',
      remark: '',
      requireCarry: 1,
      floor: '',
      static: '' };

  },
  onLoad: function onLoad(opt) {var _this = this;
    this.static = _index.default.static;
    this.name = opt.name;
    this.buildinf = wx.getStorageSync('buildinf');
    this.buildinf.forEach(function (item) {
      if (item.picture) item.picture = item.picture.split(',')[0];
    });
    wx.setStorageSync('buildinf', '');
    this.req_vehiclelist();
    this.req_carrylist();
    this.req_getdefaddress();
    this.buildinf.forEach(function (item) {
      _this.mallprice += item.price;
      item.goodsSpecId = item.id;
      item.goodsNumber = item.num;
    });
  },
  onShow: function onShow() {
    if (wx.getStorageSync('adress')) {
      this.adress = wx.getStorageSync('adress');
      wx.setStorageSync('adress', '');
    }
  },
  methods: {
    cg_requireCarry: function cg_requireCarry(type) {
      this.requireCarry = type;
    },
    getallprice: function getallprice() {
      this.allprice = (Number(this.mallprice) + Number(this.sendprice) + Number(this.carryprice)).toFixed(2);
    },
    cg_vehicleindex: function cg_vehicleindex(index) {
      this.vehicleindex = index;
      this.sendprice = this.vehiclelist[index].startPrice;
      this.getallprice();
    },
    cg_carryindex: function cg_carryindex(index) {
      this.carryindex = index;
      this.carryprice = this.carrylist[index].startPrice;
      this.getallprice();
    },
    go_mine_adress: function go_mine_adress() {
      wx.navigateTo({
        url: '../mine/adress?src=pay' });

    },
    timeChange: function timeChange(e) {
      this.time = e.detail.value;
    },
    dateChange: function dateChange(e) {
      this.date = e.detail.value;
      var date = this.date.split('-');
      this.y = date[0];
      this.m = date[1];
      this.d = date[2];
    },
    req_unifiedOrder: function req_unifiedOrder() {
      if (!this.adress) {
        _index.default.totast('请选择地址');
        return;
      }
      if (!this.date) {
        _index.default.totast('请选择日期');
        return;
      }
      if (!this.time) {
        _index.default.totast('请选择时间');
        return;
      }
      if (!this.floor) {
        _index.default.totast('请选择楼层');
        return;
      }
      _index.default.request({
        data: {
          "addressId": this.adress.id,
          "carryTypeId": this.carrylist[this.carryindex].id,
          "expressTypeId": this.vehiclelist[this.vehicleindex].id,
          "expressTime": this.date + this.time,
          "floor": this.floor, //楼层
          "orderGoods": this.buildinf,
          "remark": this.remark,
          "number": 1,
          "requireCarry": this.requireCarry //是否搬运1是2否
        },
        url: "goods/order/unifiedOrder",
        c: true }).
      then(function (data) {
        _index.default.totast('下单成功');
      });
    },
    req_vehiclelist: function req_vehiclelist() {var _this2 = this;
      _index.default.request({
        url: "order/vehiclelist" }).
      then(function (data) {
        _this2.vehiclelist = data;
        _this2.sendprice = _this2.vehiclelist[0].startPrice;
        _this2.getallprice();
      });
    },
    req_carrylist: function req_carrylist() {var _this3 = this;
      _index.default.request({
        url: "order/carrylist" }).
      then(function (data) {
        _this3.carrylist = data;
        _this3.carryprice = _this3.carrylist[0].startPrice;
        _this3.getallprice();
      });
    },
    req_getdefaddress: function req_getdefaddress() {var _this4 = this;
      _index.default.request({
        url: "address/getdefaddress" }).
      then(function (data) {
        _this4.adress = data;
      });
    } } };exports.default = _default;

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\build\\pay.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/hasee/Documents/HBuilderProjects/mall/pages/build/pay.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\build\\pay.vue?vue&type=template&id=8320fe34&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/hasee/Documents/HBuilderProjects/mall/pages/build/pay.vue?vue&type=template&id=8320fe34& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "adress" }, [
        _vm.adress
          ? _c(
              "div",
              {
                staticClass: "adressli",
                attrs: { eventid: "E-1" },
                on: { click: _vm.go_mine_adress }
              },
              [
                _c("div", [_vm._v("姓      名：" + _vm._s(_vm.adress.name))]),
                _c("div", [_vm._v("联系方式：" + _vm._s(_vm.adress.phone))]),
                _c("div", { staticClass: "adressinf" }, [
                  _c("div", [
                    _c("div"),
                    _c("span", [
                      _vm._v(
                        "收货地址：" +
                          _vm._s(
                            _vm.adress.provinceName +
                              _vm.adress.countyAreaName +
                              _vm.adress.cityName +
                              _vm.adress.address
                          )
                      )
                    ])
                  ]),
                  _c("image", { attrs: { src: "../../static/right.jpg" } })
                ])
              ]
            )
          : _c(
              "div",
              {
                staticClass: "adressli center",
                attrs: { eventid: "E-0" },
                on: { click: _vm.go_mine_adress }
              },
              [_vm._v("\n\t\t\t请选择地址\n\t\t")]
            )
      ]),
      _vm._l(_vm.buildinf, function(list, index) {
        return _c("div", { key: list, staticClass: "payinf inff" }, [
          _c("div", [
            _c("image", { attrs: { src: _vm.static + list.picture } }),
            _c(
              "div",
              [
                _c("p", [
                  _c("view", [_vm._v(_vm._s(_vm.name))]),
                  _c("view", [
                    _c("span", [_vm._v("规格")]),
                    _c("span", [_vm._v(_vm._s(list.name))])
                  ]),
                  _c("view", [
                    _c("span", [_vm._v("数量")]),
                    _c("span", [_vm._v("x" + _vm._s(list.num))])
                  ])
                ])
              ],
              1
            )
          ])
        ])
      }),
      _c(
        "div",
        { staticClass: "payinf time" },
        [
          _c("h1", [_vm._v("配送时间选择")]),
          _c("p", [
            _c(
              "view",
              [
                !_vm.disabled
                  ? _c(
                      "picker",
                      {
                        staticClass: "regionpicker",
                        attrs: {
                          mode: "date",
                          value: "日期",
                          "custom-item": _vm.customItem,
                          eventid: "E-2"
                        },
                        on: { change: _vm.dateChange }
                      },
                      [
                        _c("view", { staticClass: "picker" }, [
                          _vm._v("\n\t\t\t\t\t\t日期\n\t\t\t\t\t")
                        ])
                      ]
                    )
                  : _vm._e(),
                !_vm.date
                  ? _c("span", [_vm._v("请选择日期")])
                  : _c("view", [
                      _c("span", [_vm._v(_vm._s(_vm.y))]),
                      _c("span", [_vm._v("年")]),
                      _c("span", [_vm._v(_vm._s(_vm.m))]),
                      _c("span", [_vm._v("月")]),
                      _c("span", [_vm._v(_vm._s(_vm.d))]),
                      _c("span", [_vm._v("日")])
                    ])
              ],
              1
            ),
            _c(
              "view",
              [
                !_vm.disabled
                  ? _c(
                      "picker",
                      {
                        staticClass: "regionpicker",
                        attrs: {
                          mode: "time",
                          value: "时间",
                          "custom-item": _vm.customItem,
                          eventid: "E-3"
                        },
                        on: { change: _vm.timeChange }
                      },
                      [
                        _c("view", { staticClass: "picker" }, [
                          _vm._v("\n\t\t\t\t\t\t时间\n\t\t\t\t\t")
                        ])
                      ]
                    )
                  : _vm._e(),
                _c("span", [
                  _vm._v(
                    "\n\t\t\t\t\t" +
                      _vm._s(_vm.time || "请选择时间") +
                      "\n\t\t\t\t"
                  )
                ])
              ],
              1
            )
          ])
        ],
        1
      ),
      _c(
        "div",
        { staticClass: "payinf sendtype" },
        [
          _c("h1", [_vm._v("配送方式")]),
          _vm._l(_vm.vehiclelist, function(list, index) {
            return _c(
              "p",
              {
                key: index,
                attrs: { eventid: "E-4-" + index },
                on: {
                  click: function($event) {
                    _vm.cg_vehicleindex(index)
                  }
                }
              },
              [
                _c("span", { class: { active: index == _vm.vehicleindex } }, [
                  _vm._v(_vm._s(list.name))
                ]),
                _c("span", [_vm._v("起步价￥" + _vm._s(list.startPrice))])
              ]
            )
          })
        ],
        2
      ),
      _c(
        "div",
        { staticClass: "payinf sendtype sendtype1" },
        [
          _c("h1", [_vm._v("是否搬运上楼")]),
          _c("p", { staticClass: "carry" }, [
            _vm.requireCarry == 1
              ? _c("image", { attrs: { src: "../../static/mine/uncheck.jpg" } })
              : _c("image", {
                  attrs: { src: "../../static/mine/check.jpg", eventid: "E-5" },
                  on: {
                    click: function($event) {
                      _vm.cg_requireCarry(1)
                    }
                  }
                }),
            _c("span", [_vm._v("是")]),
            _vm.requireCarry == 2
              ? _c("image", { attrs: { src: "../../static/mine/uncheck.jpg" } })
              : _c("image", {
                  attrs: { src: "../../static/mine/check.jpg", eventid: "E-6" },
                  on: {
                    click: function($event) {
                      _vm.cg_requireCarry(2)
                    }
                  }
                }),
            _c("span", [_vm._v("否")])
          ]),
          _c(
            "p",
            { staticClass: "floor" },
            _vm._l(_vm.carrylist, function(list, index) {
              return _c(
                "view",
                {
                  key: index,
                  attrs: { eventid: "E-7-" + index },
                  on: {
                    click: function($event) {
                      _vm.cg_carryindex(index)
                    }
                  }
                },
                [
                  _c("view", { class: { active: index == _vm.carryindex } }),
                  _c("view", [_vm._v(_vm._s(list.name))])
                ]
              )
            })
          ),
          _vm.carrylist.length
            ? _c("p", { staticClass: "louceng" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.floor,
                      expression: "floor"
                    }
                  ],
                  attrs: {
                    placeholder: "请输入楼层",
                    type: "number",
                    eventid: "E-8"
                  },
                  domProps: { value: _vm.floor },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.floor = $event.target.value
                    }
                  }
                }),
                _vm._v(
                  "层 起步价" +
                    _vm._s(_vm.carrylist[_vm.carryindex].startPrice) +
                    "\n\t\t"
                )
              ])
            : _vm._e()
        ],
        1
      ),
      _c(
        "div",
        { staticClass: "payinf remake" },
        [
          _c("h1", [_vm._v("订单备注")]),
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.remark,
                expression: "remark"
              }
            ],
            attrs: { eventid: "E-9" },
            domProps: { value: _vm.remark },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.remark = $event.target.value
              }
            }
          })
        ],
        1
      ),
      _c(
        "div",
        { staticClass: "payinf mingxi" },
        [
          _c("h1", [_vm._v("价格明细")]),
          _c(
            "div",
            { staticClass: "mingxiinf" },
            [
              _c("p", [_vm._v("货款：" + _vm._s(_vm.mallprice))]),
              _c("p", [_vm._v("配送费：" + _vm._s(_vm.sendprice))]),
              _c("p", [_vm._v("搬运费：" + _vm._s(_vm.carryprice))])
            ],
            1
          )
        ],
        1
      ),
      _c("div", { staticClass: "bgheight" }),
      _c("div", { staticClass: "apply" }, [
        _c("span", [
          _vm._v("合计："),
          _c("span", [_vm._v(_vm._s(_vm.allprice))])
        ]),
        _c(
          "span",
          { attrs: { eventid: "E-10" }, on: { click: _vm.req_unifiedOrder } },
          [_vm._v("确认支付")]
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\main.js?{\"page\":\"pages%2Fbuild%2Fpay\"}":
/*!*********************************************************************************************!*\
  !*** C:/Users/hasee/Documents/HBuilderProjects/mall/main.js?{"page":"pages%2Fbuild%2Fpay"} ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _pay = _interopRequireDefault(__webpack_require__(/*! ./pages/build/pay.vue */ "C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\build\\pay.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_pay.default));

/***/ }),

/***/ "C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages.json":
/*!*****************************************************************!*\
  !*** C:/Users/hasee/Documents/HBuilderProjects/mall/pages.json ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\build\\pay.vue":
/*!**************************************************************************!*\
  !*** C:/Users/hasee/Documents/HBuilderProjects/mall/pages/build/pay.vue ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pay_vue_vue_type_template_id_8320fe34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pay.vue?vue&type=template&id=8320fe34& */ "C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\build\\pay.vue?vue&type=template&id=8320fe34&");
/* harmony import */ var _pay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pay.vue?vue&type=script&lang=js& */ "C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\build\\pay.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _pay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _pay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _pay_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pay.vue?vue&type=style&index=0&lang=css& */ "C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\build\\pay.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _pay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _pay_vue_vue_type_template_id_8320fe34___WEBPACK_IMPORTED_MODULE_0__["render"],
  _pay_vue_vue_type_template_id_8320fe34___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "C:/Users/hasee/Documents/HBuilderProjects/mall/pages/build/pay.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\build\\pay.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** C:/Users/hasee/Documents/HBuilderProjects/mall/pages/build/pay.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_pay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./pay.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\build\\pay.vue?vue&type=script&lang=js&");
/* harmony import */ var _E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_pay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_pay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_pay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_pay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_pay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\build\\pay.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************!*\
  !*** C:/Users/hasee/Documents/HBuilderProjects/mall/pages/build/pay.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_1_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_3_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_pay_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./pay.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\build\\pay.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_1_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_3_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_pay_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_1_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_3_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_pay_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_1_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_3_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_pay_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_1_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_3_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_pay_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_1_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_3_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_pay_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\build\\pay.vue?vue&type=template&id=8320fe34&":
/*!*********************************************************************************************************!*\
  !*** C:/Users/hasee/Documents/HBuilderProjects/mall/pages/build/pay.vue?vue&type=template&id=8320fe34& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_pay_vue_vue_type_template_id_8320fe34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./pay.vue?vue&type=template&id=8320fe34& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\build\\pay.vue?vue&type=template&id=8320fe34&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_pay_vue_vue_type_template_id_8320fe34___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_pay_vue_vue_type_template_id_8320fe34___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\utils\\index.js":
/*!*********************************************************************!*\
  !*** C:/Users/hasee/Documents/HBuilderProjects/mall/utils/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var ut = {};
ut.url = 'https://mdapi.vertxjava.com/api/v1/client/';
ut.static = 'https://mdapi.vertxjava.com';
ut.uploadimgurl = 'https://mdapi.vertxjava.com/api/v1/';
ut.formatTime = function (data) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  return minute + '分' + second + '秒';
};
ut.formatNumber = function (n) {
  n = n.toString();
  return n[1] ? n : '0' + n;
};
//格式化时间
ut.time = function (timestamp) {
  var date = new Date(timestamp * 1000), //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  Y = date.getFullYear() + '-',
  M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-',
  D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate(),
  h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours() + ' :',
  m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  return Y + M + D + " " + h + m;
};
//提示
ut.totast = function (title) {
  wx.showToast({
    title: title,
    icon: 'none',
    color: 'red',
    duration: 2000 });

};
//拨打电话
ut.call = function () {
  wx.makePhoneCall({
    phoneNumber: '18888888888' });

};
//
ut.createRandom = function (num, min, max) {
  var arr = [],
  res = [],
  newArr;
  for (var i = min; i < max; i++) {
    arr.push(i);
  }
  newArr = Object.assign([], arr);

  for (var item = 0; item < arr.length; item++) {
    res.push(newArr.splice(Math.floor(Math.random() * newArr.length), 1)[0]);
  }
  res.length = num;
  return res;
};
//设置页面title
ut.settitle = function (title) {
  wx.setNavigationBarTitle({
    title: title });

};
//弹出消息
ut.showToast = function (title) {
  wx.showToast({
    title: title,
    icon: 'none',
    color: 'red',
    duration: 2000 });

};
//校验手机号
ut.checkmobile = function (str) {
  var myreg = /^[1][3,4,5,6.7,8,9][0-9]{9}$/;
  if (!myreg.test(str)) {
    return false;
  } else {
    return true;
  }
};
//校验姓名
ut.checkName = function (name) {
  var regName = /^[\u4e00-\u9fa5]{2,4}$/;
  if (!regName.test(name)) {
    return false;
  }
  return true;
};
//校验身份证
ut.checkName = function (idNo) {
  var regIdNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  if (!regIdNo.test(idNo)) {
    return false;
  }
};
//清除用户信息
ut.loginout = function () {
  wx.setStorageSync('token', '');
};
ut.request = function (parm) {
  parm.data = parm.data || {};
  var c = 'application/x-www-form-urlencoded';
  if (parm.c) {
    c = 'application/json';
  }
  return new Promise(function (_success, _fail) {
    wx.request({
      url: parm.allurl ? parm.allurl : ut.url + parm.url,
      data: parm.data,
      method: parm.method || 'post',
      header: {
        "Accept": "*/*",
        'content-type': c,
        "Authorization": wx.getStorageSync('token') || '' },

      success: function success(res) {
        wx.hideLoading({
          complete: function complete() {
            if (res.data.code == 0) {
              _success(res.data.data);
            } else {
              wx.showToast({
                title: res.data.msg,
                icon: 'none',
                color: 'red',
                duration: 2000 });

            }
          } });

      },
      fail: function fail() {
        _fail();
        wx.showToast({
          title: '连接超时',
          icon: 'none',
          color: 'red',
          duration: 2000 });

      } });

  });
};
//请求
ut.ajax = function (parm) {
  if (parm.loadinghide) {
    ut.request(parm);
  } else {
    wx.showLoading({
      title: '正在加载。。',
      complete: function complete() {
        ut.request(parm);
      } });

  }
};

ut.login = function (callback) {
  //调用登录接口
  wx.login({
    success: function success(data) {
      console.log(data);
      wx.getUserInfo({
        success: function success(res) {
          //获取用户标识
          ut.ajax({
            url: 'thirdParty/register',
            data: {
              js_code: data.code,
              nickName: res.userInfo.nickName,
              avatarUrl: res.userInfo.avatarUrl },

            method: 'get',
            success: function success(data) {
              wx.setStorageSync('uid', data.id);
              wx.setStorageSync('userInfo', data.inf);
              if (callback) callback();
            } });

        } });


      //  
    } });

};
//上传图片
ut.uploadimg = function (parm) {
  parm = parm || {};
  wx.chooseImage({
    count: 1,
    sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    success: function success(res) {
      // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
      console.log(res);
      if (parm.callback) parm.callback(res.tempFilePaths[0]);
    } });

};
//
var _default = ut;exports.default = _default;

/***/ })

},[["C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\main.js?{\"page\":\"pages%2Fbuild%2Fpay\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/build/pay.js.map