(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-register-register"],{"07d5":function(e,t,n){var o=n("981b");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=n("4f06").default;r("66175b23",o,!0,{sourceMap:!1,shadowMode:!1})},"0e3c":function(e,t,n){"use strict";n.r(t);var o=n("e176"),r=n.n(o);for(var a in o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=r.a},"19d7":function(e,t,n){"use strict";n.r(t);var o=n("4991"),r=n("0e3c");for(var a in r)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("88c2");var i=n("f0c5"),c=Object(i["a"])(r["default"],o["b"],o["c"],!1,null,"678c680e",null,!1,o["a"],void 0);t["default"]=c.exports},4991:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}));var o={navbar:n("7a0d").default,"u-Form":n("0106").default,uFormItem:n("5fc5").default,uInput:n("d72b").default,uCheckboxGroup:n("fad7").default,uCheckbox:n("2566").default,uButton:n("bc1e").default},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"box"},[n("navbar",{attrs:{title:"注册",backgroundColor:"#F7F7F7"}}),n("v-uni-view",{staticStyle:{height:"var(--status-bar-height)"}}),n("v-uni-view",{staticClass:"login-container"},[n("u--form",{ref:"form",staticClass:"form-container",attrs:{model:e.form,rules:e.rules}},[n("u-form-item",{staticClass:"form-item",attrs:{label:"手机号",prop:"phone"}},[n("u-input",{attrs:{type:"text","placeholder-style":"color:#cccccc",placeholder:"请输入手机号"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),n("u-form-item",{staticClass:"form-item",attrs:{label:"密码",prop:"password"}},[n("u-input",{attrs:{type:"password","placeholder-style":"color:#cccccc",placeholder:"请输入密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),n("u-form-item",{staticClass:"form-item",attrs:{label:"再次输入密码",prop:"confirmPassword"}},[n("u-input",{attrs:{type:"password","placeholder-style":"color:#cccccc",placeholder:"请再次输入密码"},model:{value:e.form.confirmPassword,callback:function(t){e.$set(e.form,"confirmPassword",t)},expression:"form.confirmPassword"}})],1)],1),n("v-uni-view",{staticClass:"toggle-container"},[n("u-checkbox-group",{attrs:{placement:"column"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.checkboxChange.apply(void 0,arguments)}},model:{value:e.checkboxValue,callback:function(t){e.checkboxValue=t},expression:"checkboxValue"}},[n("u-checkbox",{attrs:{label:"",name:"1"}})],1),n("v-uni-text",[e._v("阅读并同意"),n("v-uni-text",{staticClass:"text-agreement",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toAgreement.apply(void 0,arguments)}}},[e._v("《平台用户服务协议》")])],1)],1),n("v-uni-view",{staticClass:"login-btn"},[n("u-button",{attrs:{customStyle:"border-radius:51rpx;height: 102rpx;font-size:32rpx;box-shadow: 0px 16px 32px 1px rgba(239,152,1,0.36);",color:"linear-gradient(85deg, #FFCB6F 0%, #FFA900 100%)"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.updateInitPassword.apply(void 0,arguments)}}},[e._v("立即注册")])],1)],1)],1)},a=[]},"88c2":function(e,t,n){"use strict";var o=n("07d5"),r=n.n(o);r.a},"981b":function(e,t,n){var o=n("24fb");t=o(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.box[data-v-678c680e]{padding-top:%?96?%}.login-container[data-v-678c680e]{padding:0 %?80?%}.login-container .form-container[data-v-678c680e]{margin-top:%?24?%}.login-container .form-container .form-item .u-input[data-v-678c680e]{padding:0!important;height:%?100?%;font-size:%?36?%;border:none;border-radius:0;border-bottom:%?0.5?% solid #ccc;color:#303133}.login-container .form-container .form-item .text-code[data-v-678c680e]{font-size:%?30?%;font-weight:700;color:#ffa900}.login-container .form-container .form-item uni-image[data-v-678c680e]{width:%?34?%}.login-container .form-container[data-v-678c680e]  .u-form-item__body__right__message{margin:0!important}.login-container .form-container[data-v-678c680e]  .u-form-item__body{display:block}.login-container .form-container[data-v-678c680e]  .u-form-item__body .u-form-item__body__left{width:auto!important;font-weight:700}.login-container .login-btn[data-v-678c680e]{margin-top:%?51?%}.login-container .toggle-container[data-v-678c680e]{display:flex;align-items:center;width:100%;color:#333;font-size:%?34?%}.login-container .toggle-container .text-agreement[data-v-678c680e]{color:#008fff}.login-container .toggle-container[data-v-678c680e]  .u-checkbox__icon-wrap{width:%?30?%!important;height:%?30?%!important}',""]),e.exports=t},e176:function(e,t,n){"use strict";n("7a82");var o=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("c7eb")),a=o(n("1da1"));n("ac1f"),n("00b4"),n("d9e2"),n("d401");var i=n("407e"),c={data:function(){var e=this;return{checkboxValue:[0],form:{phone:"",code:"",password:"",confirmPassword:""},rules:{phone:{type:"string",required:!0,validator:function(e,t,n){t?1==/^(0|86|17951)?(13[0-9]|15[0123456789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(t)?n():n(new Error("请输入合法的手机号")):n(new Error("请输入号码"))},trigger:["blur","change"]},code:{type:"string",required:!0,message:"请输入验证码",trigger:["blur","change"]},password:{type:"string",min:6,max:30,required:!0,message:"请输入6-30位密码",trigger:["blur","change"]},confirmPassword:{type:"string",min:6,max:30,required:!0,validator:function(t,n,o){n?n==e.form.password?o():o(new Error("两次输入的密码不一致")):o(new Error("请再次输入密码"))},trigger:["blur","change"]}},showPwd:!1}},computed:{},methods:{sendWaiterLoginCode:function(){var e=this;return(0,a.default)((0,r.default)().mark((function t(){return(0,r.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,i.sendWaiterLoginCode)({phone:e.form.phone});case 2:t.sent,uni.showToast({icon:"none",title:"正在发送验证码短信，请稍等"});case 4:case"end":return t.stop()}}),t)})))()},changeIcon:function(){this.showPwd=!this.showPwd},updateInitPassword:function(){var e=this;this.$refs.form.validate().then((function(){1==e.checkboxValue[0]?(0,i.updateInitPassword)(e.form).then((function(t){uni.showToast({icon:"success",title:"注册成功"}),e.$store.commit("user/SET_NEEDPHONE",""),uni.navigateBack({delta:1})})):uni.showToast({icon:"none",title:"请同意用户协议"})}))},toAgreement:function(){uni.navigateTo({url:"/pages/agreement/agreement"})},checkboxChange:function(e){console.log(e)}},onLoad:function(){}};t.default=c}}]);