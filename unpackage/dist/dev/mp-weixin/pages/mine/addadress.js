(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/mine/addadress"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\mine\\addadress.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/hasee/Documents/HBuilderProjects/mall/pages/mine/addadress.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;


































var _index = _interopRequireDefault(__webpack_require__(/*! ../../utils/index.js */ "C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\utils\\index.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =
{
  data: function data() {
    return {
      adressinf: {
        "address": "",
        "cityCode": "",
        "cityName": "",
        "countyAreaCode": "",
        "countyAreaName": "",
        "defaultType": 0,
        "name": "",
        "phone": "",
        "provinceCode": "",
        "provinceName": "" },

      id: '' };

  },
  onLoad: function onLoad(opt) {
    if (opt._id) {
      this.id = opt._id;
      this.req_addressInf(opt._id);
    }
  },
  methods: {
    bindRegionChange: function bindRegionChange(e) {
      this.adressinf.provinceName = e.target.value[0];
      this.adressinf.countyAreaName = e.target.value[1];
      this.adressinf.cityName = e.target.value[2];
    },
    cg_active: function cg_active() {
      if (this.adressinf.defaultType) {
        this.adressinf.defaultType = 0;
        return;
      }
      this.adressinf.defaultType = 1;
    },
    req_addaddress: function req_addaddress() {
      var url = "address/add";
      if (this.id) {
        url = "address/update";
      }
      if (!this.adressinf.name) {
        _index.default.totast('请输入姓名');
        return;
      }
      if (!_index.default.checkmobile(this.adressinf.phone)) {
        _index.default.totast('请输入正确的手机号');
        return;
      }
      if (!this.adressinf.provinceName) {
        _index.default.totast('请选择所在城市');
        return;
      }
      if (!this.adressinf.address) {
        _index.default.totast('请输入详细地址');
        return;
      }
      _index.default.request({
        data: this.adressinf,
        url: url,
        c: true }).
      then(function (data) {
        wx.navigateBack();
      });
    },
    req_addressInf: function req_addressInf(id) {var _this = this;
      _index.default.request({
        data: {
          id: id },

        url: "address/detail" }).
      then(function (data) {
        _this.adressinf = data;
      });
    } } };exports.default = _default;

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\mine\\addadress.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/hasee/Documents/HBuilderProjects/mall/pages/mine/addadress.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\mine\\addadress.vue?vue&type=template&id=45dd3ccc&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/hasee/Documents/HBuilderProjects/mall/pages/mine/addadress.vue?vue&type=template&id=45dd3ccc& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "setinput" },
    [
      _c("div", [
        _c("span", [_vm._v("姓名")]),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.adressinf.name,
              expression: "adressinf.name"
            }
          ],
          attrs: {
            type: "text",
            placeholder: "最少2个,最多15个字",
            eventid: "E-0"
          },
          domProps: { value: _vm.adressinf.name },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.adressinf.name = $event.target.value
            }
          }
        })
      ]),
      _c("div", [
        _c("span", [_vm._v("电话")]),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.adressinf.phone,
              expression: "adressinf.phone"
            }
          ],
          attrs: { type: "text", placeholder: "请输入手机号", eventid: "E-1" },
          domProps: { value: _vm.adressinf.phone },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.adressinf.phone = $event.target.value
            }
          }
        })
      ]),
      _c("div", [
        _c("span", [_vm._v("地区")]),
        _c(
          "div",
          { staticClass: "inputall" },
          [
            !_vm.disabled
              ? _c(
                  "picker",
                  {
                    staticClass: "regionpicker",
                    attrs: {
                      mode: "region",
                      value: "请选择所在城市",
                      "custom-item": _vm.customItem,
                      eventid: "E-2"
                    },
                    on: { change: _vm.bindRegionChange }
                  },
                  [
                    _c("view", { staticClass: "picker" }, [
                      _vm._v(
                        "\n\t\t\t\t\t      " +
                          _vm._s(_vm.adressinf.provinceName || "") +
                          "，" +
                          _vm._s(_vm.adressinf.countyAreaName || "") +
                          "，" +
                          _vm._s(_vm.adressinf.cityName || "") +
                          "\n\t\t\t\t\t    "
                      )
                    ])
                  ]
                )
              : _vm._e(),
            _vm._v(
              "\n\t\t\t" +
                _vm._s(
                  _vm.adressinf.provinceName +
                    _vm.adressinf.countyAreaName +
                    _vm.adressinf.cityName || "请选择所在城市"
                ) +
                "\n\t\t"
            )
          ],
          1
        )
      ]),
      _c("div", [
        _c("span", [_vm._v("地址")]),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.adressinf.address,
              expression: "adressinf.address"
            }
          ],
          attrs: {
            type: "text",
            placeholder: "请填写详细地址,5~60个字",
            eventid: "E-3"
          },
          domProps: { value: _vm.adressinf.address },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.adressinf.address = $event.target.value
            }
          }
        })
      ]),
      _c("p", { staticClass: "xieyi" }, [
        _c(
          "span",
          { attrs: { eventid: "E-4" }, on: { click: _vm.cg_active } },
          [
            !_vm.adressinf.defaultType
              ? _c("image", { attrs: { src: "../../static/mine/check.jpg" } })
              : _vm._e(),
            _vm.adressinf.defaultType
              ? _c("image", { attrs: { src: "../../static/mine/uncheck.jpg" } })
              : _vm._e()
          ]
        ),
        _c("span", [_vm._v("设置成默认地址")])
      ]),
      _c(
        "p",
        {
          staticClass: "submit",
          attrs: { eventid: "E-5" },
          on: {
            click: function($event) {
              _vm.req_addaddress()
            }
          }
        },
        [_vm._v("\n\t\t保存\n\t")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\main.js?{\"page\":\"pages%2Fmine%2Faddadress\"}":
/*!**************************************************************************************************!*\
  !*** C:/Users/hasee/Documents/HBuilderProjects/mall/main.js?{"page":"pages%2Fmine%2Faddadress"} ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _addadress = _interopRequireDefault(__webpack_require__(/*! ./pages/mine/addadress.vue */ "C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\mine\\addadress.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_addadress.default));

/***/ }),

/***/ "C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages.json":
/*!*****************************************************************!*\
  !*** C:/Users/hasee/Documents/HBuilderProjects/mall/pages.json ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\mine\\addadress.vue":
/*!*******************************************************************************!*\
  !*** C:/Users/hasee/Documents/HBuilderProjects/mall/pages/mine/addadress.vue ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addadress_vue_vue_type_template_id_45dd3ccc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addadress.vue?vue&type=template&id=45dd3ccc& */ "C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\mine\\addadress.vue?vue&type=template&id=45dd3ccc&");
/* harmony import */ var _addadress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addadress.vue?vue&type=script&lang=js& */ "C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\mine\\addadress.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _addadress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _addadress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _addadress_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addadress.vue?vue&type=style&index=0&lang=css& */ "C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\mine\\addadress.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _addadress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _addadress_vue_vue_type_template_id_45dd3ccc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _addadress_vue_vue_type_template_id_45dd3ccc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "C:/Users/hasee/Documents/HBuilderProjects/mall/pages/mine/addadress.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\mine\\addadress.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** C:/Users/hasee/Documents/HBuilderProjects/mall/pages/mine/addadress.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_addadress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./addadress.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\mine\\addadress.vue?vue&type=script&lang=js&");
/* harmony import */ var _E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_addadress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_addadress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_addadress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_addadress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_addadress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\mine\\addadress.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************!*\
  !*** C:/Users/hasee/Documents/HBuilderProjects/mall/pages/mine/addadress.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_1_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_3_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_addadress_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./addadress.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\mine\\addadress.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_1_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_3_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_addadress_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_1_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_3_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_addadress_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_1_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_3_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_addadress_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_1_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_3_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_addadress_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_1_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_3_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_addadress_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\mine\\addadress.vue?vue&type=template&id=45dd3ccc&":
/*!**************************************************************************************************************!*\
  !*** C:/Users/hasee/Documents/HBuilderProjects/mall/pages/mine/addadress.vue?vue&type=template&id=45dd3ccc& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_addadress_vue_vue_type_template_id_45dd3ccc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./addadress.vue?vue&type=template&id=45dd3ccc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\mine\\addadress.vue?vue&type=template&id=45dd3ccc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_addadress_vue_vue_type_template_id_45dd3ccc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_addadress_vue_vue_type_template_id_45dd3ccc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

},[["C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\main.js?{\"page\":\"pages%2Fmine%2Faddadress\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/mine/addadress.js.map