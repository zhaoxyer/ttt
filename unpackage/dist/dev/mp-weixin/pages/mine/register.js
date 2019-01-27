(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/mine/register"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\mine\\register.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/hasee/Documents/HBuilderProjects/mall/pages/mine/register.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;


































var _index = _interopRequireDefault(__webpack_require__(/*! ../../utils/index.js */ "C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\utils\\index.js"));
var _login = _interopRequireDefault(__webpack_require__(/*! ../../components/login.vue */ "C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\components\\login.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =
{
  data: function data() {
    return {
      check: false,
      codemsg: "获取验证码",
      userinf: _defineProperty({
        "idCard": "",
        "name": "", //姓名
        "password": "", //密码
        "password1": "", //确认密码
        "phone": "", //手机号
        "username": "", //用户名
        "vCode": "" }, "idCard",
      '') };


  },
  components: {
    login: _login.default },

  onLoad: function onLoad() {
  },
  methods: {
    go_mine_login: function go_mine_login() {
      wx.redirectTo({
        url: '../mine/login' });

    },
    cg_active: function cg_active() {
      console.log(1);
      this.check = !this.check;
    },
    req_register: function req_register() {var _this = this;
      if (!this.userinf.username) {
        _index.default.totast('请输入用户名');
        return;
      }
      if (!_index.default.checkUsername(this.userinf.username)) {
        _index.default.totast('用户名为英文和数字组成');
        return;
      }
      if (this.userinf.username.length < 4 || this.userinf.username.length > 16) {
        _index.default.totast('用户名为4到16位数字英文组成');
        return;
      }
      if (!this.userinf.name) {
        _index.default.totast('请输入姓名');
        return;
      }
      if (!_index.default.checkName(this.userinf.name)) {
        _index.default.totast('请输入正确的姓名');
        return;
      }
      if (!this.userinf.idCard) {
        _index.default.totast('请输入身份证号');
        return;
      }
      if (!_index.default.checkCard(this.userinf.idCard)) {
        _index.default.totast('请输入正确的身份证号');
        return;
      }
      if (!_index.default.checkmobile(this.userinf.phone)) {
        _index.default.totast('请输入正确的手机号');
        return;
      }
      if (!this.userinf.vCode) {
        _index.default.totast('请输入验证码');
        return;
      }
      if (!this.userinf.password) {
        _index.default.totast('请输入密码');
        return;
      }
      if (this.userinf.password.length < 8 || this.userinf.password.length > 32) {
        _index.default.totast('密码为8到32位');
        return;
      }
      if (this.userinf.password != this.userinf.password1) {
        _index.default.totast('两次密码输入不一致');
        return;
      }
      if (!this.check) {
        _index.default.totast('请阅读用户协议');
        return;
      }
      _index.default.request({
        data: this.userinf,
        url: "user/register",
        c: true }).
      then(function (data) {
        _this.go_mine_login();
      });
    },
    req_sendCode: function req_sendCode() {var _this2 = this;
      if (this.codemsg != "获取验证码" && this.codemsg != "重新获取") return;
      if (!this.userinf.phone) {
        _index.default.totast('请输入正确的手机号');
        return;
      }
      var codenum = 120;
      var timer = setInterval(function () {
        codenum--;
        _this2.codemsg = codenum + 's后重新获取';
        if (codenum == 0) {
          clearInterval(timer);
          _this2.codemsg = "重新获取";
        }
      }, 1000);
      _index.default.request({
        data: {
          phone: this.userinf.phone },

        url: "user/sendCode" }).
      then(function (data) {
      }).catch(function (data) {
        clearInterval(timer);
        _this2.codemsg = "重新获取";
      });
    } } };exports.default = _default;

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\mine\\register.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/hasee/Documents/HBuilderProjects/mall/pages/mine/register.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\mine\\register.vue?vue&type=template&id=a52f7684&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/hasee/Documents/HBuilderProjects/mall/pages/mine/register.vue?vue&type=template&id=a52f7684& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
        _c("span", [_vm._v("用户名")]),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.userinf.username,
              expression: "userinf.username"
            }
          ],
          attrs: {
            type: "text",
            placeholder: "请输入用户名",
            maxlength: "16",
            eventid: "66326846-0"
          },
          domProps: { value: _vm.userinf.username },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.userinf.username = $event.target.value
            }
          }
        })
      ]),
      _c("div", [
        _c("span", [_vm._v("姓名")]),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.userinf.name,
              expression: "userinf.name"
            }
          ],
          attrs: {
            type: "text",
            placeholder: "请输入真实姓名",
            eventid: "66326846-1"
          },
          domProps: { value: _vm.userinf.name },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.userinf.name = $event.target.value
            }
          }
        })
      ]),
      _c("div", [
        _c("span", [_vm._v("身份证")]),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.userinf.idCard,
              expression: "userinf.idCard"
            }
          ],
          attrs: {
            type: "idcard",
            placeholder: "请输入身份证号",
            maxlength: "18",
            eventid: "66326846-2"
          },
          domProps: { value: _vm.userinf.idCard },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.userinf.idCard = $event.target.value
            }
          }
        })
      ]),
      _c("div", [
        _c("span", [_vm._v("手机号")]),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.userinf.phone,
              expression: "userinf.phone"
            }
          ],
          attrs: {
            type: "number",
            placeholder: "请输入手机号",
            maxlength: "11",
            eventid: "66326846-3"
          },
          domProps: { value: _vm.userinf.phone },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.userinf.phone = $event.target.value
            }
          }
        })
      ]),
      _c(
        "div",
        [
          _c("span", [_vm._v("验证码")]),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.userinf.vCode,
                expression: "userinf.vCode"
              }
            ],
            attrs: {
              type: "number",
              placeholder: "请输入验证码",
              eventid: "66326846-4"
            },
            domProps: { value: _vm.userinf.vCode },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.userinf.vCode = $event.target.value
              }
            }
          }),
          _c(
            "label",
            {
              staticClass: "getcode",
              attrs: { eventid: "66326846-5" },
              on: { click: _vm.req_sendCode }
            },
            [_vm._v(_vm._s(_vm.codemsg))]
          )
        ],
        1
      ),
      _c("div", [
        _c("span", [_vm._v("密码")]),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.userinf.password,
              expression: "userinf.password"
            }
          ],
          attrs: {
            type: "password",
            placeholder: "长度8~32位须包含数字字母符号至少2种元素",
            maxlength: "32",
            eventid: "66326846-6"
          },
          domProps: { value: _vm.userinf.password },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.userinf.password = $event.target.value
            }
          }
        })
      ]),
      _c("div", [
        _c("span", [_vm._v("确认密码")]),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.userinf.password1,
              expression: "userinf.password1"
            }
          ],
          attrs: {
            type: "password",
            placeholder: "请输入确认密码",
            maxlength: "32",
            eventid: "66326846-7"
          },
          domProps: { value: _vm.userinf.password1 },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.userinf.password1 = $event.target.value
            }
          }
        })
      ]),
      _c("p", { staticClass: "xieyi" }, [
        _c(
          "span",
          {
            class: { active: _vm.check },
            attrs: { eventid: "66326846-8" },
            on: { click: _vm.cg_active }
          },
          [_vm._v("●")]
        ),
        _c("span", [_vm._v("我已阅读并同意")]),
        _c("span", [_vm._v("《用户服务协议》")])
      ]),
      _c("p", { staticClass: "submit" }, [
        _c(
          "view",
          { attrs: { eventid: "66326846-9" }, on: { click: _vm.req_register } },
          [_vm._v("注册")]
        )
      ]),
      _c(
        "p",
        {
          staticClass: "tip",
          attrs: { eventid: "66326846-10" },
          on: { click: _vm.go_mine_login }
        },
        [_vm._v("已有账号？点击登陆")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\main.js?{\"page\":\"pages%2Fmine%2Fregister\"}":
/*!*************************************************************************************************!*\
  !*** C:/Users/hasee/Documents/HBuilderProjects/mall/main.js?{"page":"pages%2Fmine%2Fregister"} ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _register = _interopRequireDefault(__webpack_require__(/*! ./pages/mine/register.vue */ "C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\mine\\register.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_register.default));

/***/ }),

/***/ "C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\mine\\register.vue":
/*!******************************************************************************!*\
  !*** C:/Users/hasee/Documents/HBuilderProjects/mall/pages/mine/register.vue ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_vue_vue_type_template_id_a52f7684___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=a52f7684& */ "C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\mine\\register.vue?vue&type=template&id=a52f7684&");
/* harmony import */ var _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&lang=js& */ "C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\mine\\register.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.vue?vue&type=style&index=0&lang=css& */ "C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\mine\\register.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _register_vue_vue_type_template_id_a52f7684___WEBPACK_IMPORTED_MODULE_0__["render"],
  _register_vue_vue_type_template_id_a52f7684___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "C:/Users/hasee/Documents/HBuilderProjects/mall/pages/mine/register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\mine\\register.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** C:/Users/hasee/Documents/HBuilderProjects/mall/pages/mine/register.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\mine\\register.vue?vue&type=script&lang=js&");
/* harmony import */ var _E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\mine\\register.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************!*\
  !*** C:/Users/hasee/Documents/HBuilderProjects/mall/pages/mine/register.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\mine\\register.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\mine\\register.vue?vue&type=template&id=a52f7684&":
/*!*************************************************************************************************************!*\
  !*** C:/Users/hasee/Documents/HBuilderProjects/mall/pages/mine/register.vue?vue&type=template&id=a52f7684& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_a52f7684___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=template&id=a52f7684& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\mine\\register.vue?vue&type=template&id=a52f7684&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_a52f7684___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_1_2_0_20181122_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_a52f7684___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

},[["C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\main.js?{\"page\":\"pages%2Fmine%2Fregister\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/mine/register.js.map