(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/build"],{"0f8d":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("701a"));function n(t){return t&&t.__esModule?t:{default:t}}var s={data:function(){return{static:"",swipeList:wx.getStorageSync("banderbuild")||[],indicatorDots:!0,indicatorcolor:"white",indicatoractivecolor:"#FEC200",autoplay:!0,interval:5e3,duration:1e3,circular:!0,newlist:[],recomlist:[],classlist:[],provinceName:"",countyAreaName:"",cityName:""}},onLoad:function(){this.static=a.default.static},onShow:function(){var t=a.default.checkPageTime("index_build_time");console.log(t),this.newlist.length&&!t||this.req_new(),this.recomlist.length&&!t||this.req_recom(),this.classlist.length&&!t||this.req_class(),this.swipeList.length&&!t||this.req_banner()},methods:{bindRegionChange:function(t){this.provinceName=t.target.value[0],this.countyAreaName=t.target.value[1],this.cityName=t.target.value[2]},call:function(){a.default.call()},go_build_build2:function(t){wx.navigateTo({url:"../build/build2?_id=".concat(t)})},go_build_serch:function(){wx.navigateTo({url:"../build/serch"})},go_build_mallinf:function(t,i){wx.navigateTo({url:"../build/mallinf?_id=".concat(t,"&&title=").concat(i)})},req_class:function(){var t=this;a.default.request({data:{parentid:0},url:"goods/class"}).then(function(i){console.log(i),t.classlist=i})},req_new:function(){var t=this;a.default.request({data:{parentid:0},url:"goods/newlist"}).then(function(i){t.newlist=i})},req_recom:function(){var t=this;a.default.request({data:{parentid:0},url:"goods/recommendlist"}).then(function(i){t.recomlist=i})},req_banner:function(){var t=this;a.default.request({allurl:a.default.uploadimgurl+"common/banner",data:{type:2},method:"GET"}).then(function(i){t.swipeList=i,wx.setStorageSync("banderbuild",t.swipeList)})}}};i.default=s},3356:function(t,i,e){"use strict";e.r(i);var a=e("0f8d"),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,function(){return a[t]})}(s);i["default"]=n.a},"5ce6":function(t,i,e){"use strict";var a=e("9bdd"),n=e.n(a);n.a},6073:function(t,i,e){"use strict";e.r(i);var a=e("f7be"),n=e("3356");for(var s in n)"default"!==s&&function(t){e.d(i,t,function(){return n[t]})}(s);e("5ce6");var c=e("2877"),r=Object(c["a"])(n["default"],a["a"],a["b"],!1,null,null,null);r.options.__file="build.vue",i["default"]=r.exports},"9bdd":function(t,i,e){},f7be:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("view",[e("div",{staticClass:"header"},[e("div",{staticClass:"adress"},[t.disabled?t._e():e("picker",{staticClass:"regionpicker",attrs:{mode:"region",value:"请选择所在城市","custom-item":t.customItem,eventid:"c169ad22-0"},on:{change:t.bindRegionChange}},[e("view",{staticClass:"picker"},[t._v(t._s(t.provinceName||"")+"，"+t._s(t.countyAreaName||"")+"，"+t._s(t.cityName||""))])]),e("image",{attrs:{src:"../../static/index/blackadress.png"}}),e("span",[t._v(t._s(t.cityName||"朝阳"))])],1),e("div",{staticClass:"serch",attrs:{eventid:"c169ad22-1"},on:{click:t.go_build_serch}},[e("span",[t._v("请输入所需材料")]),e("image",{attrs:{src:"../../static/index/serch.png"}})]),e("div",{staticClass:"tel"},[e("image",{attrs:{src:"../../static/index/blacktel.png",eventid:"c169ad22-2"},on:{click:t.call}})])]),e("swiper",{attrs:{"indicator-dots":t.indicatorDots,autoplay:t.autoplay,interval:t.interval,duration:t.duration,"indicator-active-color":t.indicatoractivecolor,"indicator-color":t.indicatorcolor}},t._l(t.swipeList,function(i,a){return e("swiper-item",{key:i,attrs:{mpcomid:"c169ad22-0-"+a}},[e("image",{attrs:{src:t.static+i.banner}})])})),e("div",{staticClass:"server"},t._l(t.classlist,function(i,a){return e("div",{key:t.item,attrs:{eventid:"c169ad22-3-"+a},on:{click:function(e){t.go_build_build2(i.id)}}},[e("image",{staticClass:"noimage",attrs:{src:t.static+i.picture}}),e("view",[t._v(t._s(i.name))])])})),t.newlist.length?e("div",{staticClass:"title"},[e("span",[t._v("•")]),e("span",{staticClass:"bg0"},[t._v("最新优惠")]),e("span",[t._v("•")])]):t._e(),e("div",{staticClass:"youhui leftright"},t._l(t.newlist,function(i,a){return e("div",{key:a,attrs:{eventid:"c169ad22-4-"+a},on:{click:function(e){t.go_build_mallinf(i.id,i.name)}}},[e("div",[t._v(t._s(i.name))]),e("div",[e("image",{staticClass:"noimage",attrs:{src:t.static+i.picture}})]),e("div",[e("span",[t._v(t._s(i.price))]),e("span",[t._v("元每套")])])])})),t.recomlist.length?e("div",{staticClass:"title"},[e("span",[t._v("•")]),e("span",{staticClass:"bg1"},[t._v("最新推荐")]),e("span",[t._v("•")])]):t._e(),e("div",{staticClass:"youhui leftright"},t._l(t.recomlist,function(i,a){return e("div",{key:a,attrs:{eventid:"c169ad22-5-"+a},on:{click:function(e){t.go_build_mallinf(i.id,i.name)}}},[e("div",[t._v(t._s(i.name))]),e("div",[e("image",{staticClass:"noimage",attrs:{src:t.static+i.picture}})]),e("div",[e("span",[t._v(t._s(i.price))]),e("span",[t._v("元每套")])])])}))],1)},n=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return n})},f99e:function(t,i,e){"use strict";e("33f4");var a=s(e("b0ce")),n=s(e("6073"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(n.default))}},[["f99e","common/runtime","common/vendor"]]]);