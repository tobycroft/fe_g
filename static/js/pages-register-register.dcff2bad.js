(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-register-register"],{"3a2b":function(t,e,n){var o=n("a660");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var r=n("4f06").default;r("33d4f91a",o,!0,{sourceMap:!1,shadowMode:!1})},"8d8e":function(t,e,n){"use strict";n("7a82");var o=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("c7eb")),a=o(n("1da1"));n("ac1f"),n("00b4"),n("d9e2"),n("d401");var i=n("100b"),c={data:function(){var t=this;return{checkboxValue:[0],form:{phone:"",code:"",password:"",confirmPassword:""},rules:{phone:{type:"string",required:!0,validator:function(t,e,n){e?1==/^(0|86|17951)?(13[0-9]|15[0123456789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(e)?n():n(new Error("请输入合法的手机号")):n(new Error("请输入号码"))},trigger:["blur","change"]},code:{type:"string",required:!0,message:"请输入验证码",trigger:["blur","change"]},password:{type:"string",min:6,max:30,required:!0,message:"请输入6-30位密码",trigger:["blur","change"]},confirmPassword:{type:"string",min:6,max:30,required:!0,validator:function(e,n,o){n?n==t.form.password?o():o(new Error("两次输入的密码不一致")):o(new Error("请再次输入密码"))},trigger:["blur","change"]}},showPwd:!1}},computed:{},methods:{sendWaiterLoginCode:function(){var t=this;return(0,a.default)((0,r.default)().mark((function e(){return(0,r.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,i.sendWaiterLoginCode)({phone:t.form.phone});case 2:e.sent;case 3:case"end":return e.stop()}}),e)})))()},changeIcon:function(){this.showPwd=!this.showPwd},updateInitPassword:function(){var t=this;this.$refs.form.validate().then((function(){1==t.checkboxValue[0]?(0,i.updateInitPassword)(t.form).then((function(t){uni.showToast({icon:"success",title:"注册成功"}),uni.navigateTo({url:"/pages/login/login"})})):uni.showToast({icon:"none",title:"请同意用户协议"})}))},toAgreement:function(){uni.navigateTo({url:"/pages/agreement/agreement"})},checkboxChange:function(t){console.log(t)}},onLoad:function(){}};e.default=c},a660:function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.box[data-v-15f2b4bd]{padding-top:%?96?%}.login-container[data-v-15f2b4bd]{padding:0 %?80?%}.login-container .form-container[data-v-15f2b4bd]{margin-top:%?24?%}.login-container .form-container .form-item .u-input[data-v-15f2b4bd]{padding:0!important;height:%?100?%;font-size:%?36?%;border:none;border-radius:0;border-bottom:%?0.5?% solid #ccc;color:#303133}.login-container .form-container .form-item .text-code[data-v-15f2b4bd]{font-size:%?24?%;font-family:PingFang SC-Light,PingFang SC;font-weight:300;color:#c6d1dd}.login-container .form-container .form-item uni-image[data-v-15f2b4bd]{width:%?34?%}.login-container .form-container[data-v-15f2b4bd]  .u-form-item__body__right__message{margin:0!important}.login-container .form-container[data-v-15f2b4bd]  .u-form-item__body{display:block}.login-container .form-container[data-v-15f2b4bd]  .u-form-item__body .u-form-item__body__left{width:auto!important;font-weight:700}.login-container .login-btn[data-v-15f2b4bd]{margin-top:%?51?%}.login-container .toggle-container[data-v-15f2b4bd]{display:flex;align-items:center;width:100%;color:#333;font-size:%?34?%}.login-container .toggle-container .text-agreement[data-v-15f2b4bd]{color:#008fff}.login-container .toggle-container[data-v-15f2b4bd]  .u-checkbox__icon-wrap{width:%?30?%!important;height:%?30?%!important}',""]),t.exports=e},b859:function(t,e,n){"use strict";n.r(e);var o=n("8d8e"),r=n.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=r.a},cb4e:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var o={navbar:n("3ff4").default,"u-Form":n("fc64").default,uFormItem:n("5462").default,uInput:n("f980").default,uCheckboxGroup:n("36a9").default,uCheckbox:n("5c76").default,uButton:n("2e4e").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"box"},[n("navbar",{attrs:{title:"注册5",backgroundColor:"#F7F7F7"}}),n("v-uni-view",{staticStyle:{height:"var(--status-bar-height)"}}),n("v-uni-view",{staticClass:"login-container"},[n("u--form",{ref:"form",staticClass:"form-container",attrs:{model:t.form,rules:t.rules}},[n("u-form-item",{staticClass:"form-item",attrs:{label:"手机号",prop:"phone"}},[n("u-input",{attrs:{type:"text","placeholder-style":"color:#cccccc",placeholder:"请输入手机号"},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1),n("u-form-item",{staticClass:"form-item",attrs:{label:"密码",prop:"password"}},[n("u-input",{attrs:{type:"text","placeholder-style":"color:#cccccc",placeholder:"请输入密码"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),n("u-form-item",{staticClass:"form-item",attrs:{label:"再次输入密码",prop:"confirmPassword"}},[n("u-input",{attrs:{type:"text","placeholder-style":"color:#cccccc",placeholder:"请再次输入密码"},model:{value:t.form.confirmPassword,callback:function(e){t.$set(t.form,"confirmPassword",e)},expression:"form.confirmPassword"}})],1),n("u-form-item",{staticClass:"form-item",attrs:{label:"验证码",prop:"code"}},[n("u-input",{attrs:{type:"text","placeholder-style":"color:#cccccc",placeholder:"请输入验证码"},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}},[n("template",{slot:"suffix"},[n("v-uni-view",{staticClass:"text-code",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sendWaiterLoginCode.apply(void 0,arguments)}}},[t._v("获取验证码")])],1)],2)],1)],1),n("v-uni-view",{staticClass:"toggle-container"},[n("u-checkbox-group",{attrs:{placement:"column"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.checkboxChange.apply(void 0,arguments)}},model:{value:t.checkboxValue,callback:function(e){t.checkboxValue=e},expression:"checkboxValue"}},[n("u-checkbox",{attrs:{label:"",name:"1"}})],1),n("v-uni-text",[t._v("阅读并同意"),n("v-uni-text",{staticClass:"text-agreement",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toAgreement.apply(void 0,arguments)}}},[t._v("《平台用户服务协议》")])],1)],1),n("v-uni-view",{staticClass:"login-btn"},[n("u-button",{attrs:{customStyle:"border-radius:51rpx;height: 102rpx;font-size:32rpx;box-shadow: 0px 16px 32px 1px rgba(239,152,1,0.36);",color:"linear-gradient(85deg, #FFCB6F 0%, #FFA900 100%)"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.updateInitPassword.apply(void 0,arguments)}}},[t._v("立即注册")])],1)],1)],1)},a=[]},d233:function(t,e,n){"use strict";var o=n("3a2b"),r=n.n(o);r.a},dd37:function(t,e,n){"use strict";n.r(e);var o=n("cb4e"),r=n("b859");for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("d233");var i=n("f0c5"),c=Object(i["a"])(r["default"],o["b"],o["c"],!1,null,"15f2b4bd",null,!1,o["a"],void 0);e["default"]=c.exports}}]);