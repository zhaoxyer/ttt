(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/build/build2"],{"123d":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=s(e("701a"));function s(t){return t&&t.__esModule?t:{default:t}}var a={data:function(){return{static:"",activeindex:0,classlist:[],storelist:[],id:""}},onLoad:function(t){this.static=n.default.static,this.id=t._id,n.default.settitle(t.name),this.req_class(t._id)},methods:{go_build_serch:function(){wx.navigateTo({url:"../build/serch"})},go_build_tenant:function(t,i){wx.setStorageSync("tenant",i),wx.navigateTo({url:"../build/tenant?storeid=".concat(t,"&classid=").concat(this.classlist[this.activeindex].id)})},cg_activeindex:function(t,i){this.activeindex=t,this.req_storelist(i)},req_class:function(t){var i=this;n.default.request({data:{parentid:t},url:"goods/class"}).then(function(t){return i.classlist=t,{classid:t[0].id}}).then(function(t){i.req_storelist(t.classid)})},req_storelist:function(t){var i=this;n.default.request({data:{classid:t,id:this.id},url:"goods/storelist"}).then(function(t){i.storelist=t})}}};i.default=a},"30a3":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"serch",attrs:{eventid:"4793c0f2-0"},on:{click:t.go_build_serch}},[e("image",{attrs:{src:"../../static/index/serch.png"}}),e("span",[t._v("寻找商品、店铺")])]),e("div",{staticClass:"section"},[e("nav",t._l(t.classlist,function(i,n){return e("div",{key:i,class:{active:n==t.activeindex},attrs:{eventid:"4793c0f2-1-"+n},on:{click:function(e){t.cg_activeindex(n,i.id)}}},[t._v(t._s(i.name))])})),e("div",{staticClass:"list"},t._l(t.storelist,function(i,n){return e("div",{key:n,attrs:{eventid:"4793c0f2-2-"+n},on:{click:function(e){t.go_build_tenant(i.id,i)}}},[e("image",{attrs:{src:t.static+i.picture}}),e("div",[e("p",[t._v(t._s(i.name))]),e("p",[t._v("地址："+t._s(i.address))])],1)])}))],1)])},s=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return s})},"3d26":function(t,i,e){"use strict";var n=e("c952"),s=e.n(n);s.a},"6fb4":function(t,i,e){"use strict";e("33f4");var n=a(e("b0ce")),s=a(e("d543"));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(s.default))},b941:function(t,i,e){"use strict";e.r(i);var n=e("123d"),s=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,function(){return n[t]})}(a);i["default"]=s.a},c952:function(t,i,e){},d543:function(t,i,e){"use strict";e.r(i);var n=e("30a3"),s=e("b941");for(var a in s)"default"!==a&&function(t){e.d(i,t,function(){return s[t]})}(a);e("3d26");var c=e("2877"),u=Object(c["a"])(s["default"],n["a"],n["b"],!1,null,null,null);u.options.__file="build2.vue",i["default"]=u.exports}},[["6fb4","common/runtime","common/vendor"]]]);