(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-uploadWork-uploadWork"],{"0225":function(e,t,a){"use strict";a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("a9e3");var i={props:{value:{type:[String,Number],default:uni.$u.props.textarea.value},placeholder:{type:[String,Number],default:uni.$u.props.textarea.placeholder},placeholderClass:{type:String,default:uni.$u.props.input.placeholderClass},placeholderStyle:{type:[String,Object],default:uni.$u.props.input.placeholderStyle},height:{type:[String,Number],default:uni.$u.props.textarea.height},confirmType:{type:String,default:uni.$u.props.textarea.confirmType},disabled:{type:Boolean,default:uni.$u.props.textarea.disabled},count:{type:Boolean,default:uni.$u.props.textarea.count},focus:{type:Boolean,default:uni.$u.props.textarea.focus},autoHeight:{type:Boolean,default:uni.$u.props.textarea.autoHeight},fixed:{type:Boolean,default:uni.$u.props.textarea.fixed},cursorSpacing:{type:Number,default:uni.$u.props.textarea.cursorSpacing},cursor:{type:[String,Number],default:uni.$u.props.textarea.cursor},showConfirmBar:{type:Boolean,default:uni.$u.props.textarea.showConfirmBar},selectionStart:{type:Number,default:uni.$u.props.textarea.selectionStart},selectionEnd:{type:Number,default:uni.$u.props.textarea.selectionEnd},adjustPosition:{type:Boolean,default:uni.$u.props.textarea.adjustPosition},disableDefaultPadding:{type:Boolean,default:uni.$u.props.textarea.disableDefaultPadding},holdKeyboard:{type:Boolean,default:uni.$u.props.textarea.holdKeyboard},maxlength:{type:[String,Number],default:uni.$u.props.textarea.maxlength},border:{type:String,default:uni.$u.props.textarea.border},formatter:{type:[Function,null],default:uni.$u.props.textarea.formatter}}};t.default=i},"094d":function(e,t,a){"use strict";var i=a("9cb0"),n=a.n(i);n.a},"0984":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("uvTextarea",{attrs:{value:e.value,placeholder:e.placeholder,height:e.height,confirmType:e.confirmType,disabled:e.disabled,count:e.count,focus:e.focus,autoHeight:e.autoHeight,fixed:e.fixed,cursorSpacing:e.cursorSpacing,cursor:e.cursor,showConfirmBar:e.showConfirmBar,selectionStart:e.selectionStart,selectionEnd:e.selectionEnd,adjustPosition:e.adjustPosition,disableDefaultPadding:e.disableDefaultPadding,holdKeyboard:e.holdKeyboard,maxlength:e.maxlength,border:e.border,customStyle:e.customStyle,formatter:e.formatter},on:{focus:function(t){arguments[0]=t=e.$handleEvent(t),function(t){return e.$emit("focus")}.apply(void 0,arguments)},blur:function(t){arguments[0]=t=e.$handleEvent(t),function(t){return e.$emit("blur")}.apply(void 0,arguments)},linechange:function(t){arguments[0]=t=e.$handleEvent(t),function(t){return e.$emit("linechange",t)}.apply(void 0,arguments)},confirm:function(t){arguments[0]=t=e.$handleEvent(t),function(t){return e.$emit("confirm")}.apply(void 0,arguments)},input:function(t){arguments[0]=t=e.$handleEvent(t),function(t){return e.$emit("input",t)}.apply(void 0,arguments)},keyboardheightchange:function(t){arguments[0]=t=e.$handleEvent(t),function(t){return e.$emit("keyboardheightchange")}.apply(void 0,arguments)}}})},n=[]},"0aff":function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-4d81a2b6], uni-scroll-view[data-v-4d81a2b6], uni-swiper-item[data-v-4d81a2b6]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-textarea[data-v-4d81a2b6]{border-radius:4px;background-color:#fff;position:relative;display:flex;flex-direction:row;flex:1;padding:9px}.u-textarea--radius[data-v-4d81a2b6]{border-radius:4px}.u-textarea--no-radius[data-v-4d81a2b6]{border-radius:0}.u-textarea--disabled[data-v-4d81a2b6]{background-color:#f5f7fa}.u-textarea__field[data-v-4d81a2b6]{flex:1;font-size:15px;color:#606266;width:100%}.u-textarea__count[data-v-4d81a2b6]{position:absolute;right:5px;bottom:2px;font-size:12px;color:#909193;background-color:#fff;padding:1px 4px}',""]),e.exports=t},"114a":function(e,t,a){"use strict";a.r(t);var i=a("39d2"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t["default"]=n.a},"198e":function(e,t,a){"use strict";a.r(t);var i=a("553f"),n=a("27f8");for(var o in n)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(o);a("094d");var r=a("f0c5"),u=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"4d81a2b6",null,!1,i["a"],void 0);t["default"]=u.exports},"26a5":function(e,t,a){var i=a("f59c");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("0dbe69c4",i,!0,{sourceMap:!1,shadowMode:!1})},"27f8":function(e,t,a){"use strict";a.r(t);var i=a("348a"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t["default"]=n.a},"348a":function(e,t,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("99af"),a("14d9");var n=i(a("0225")),o={name:"u-textarea",mixins:[uni.$u.mpMixin,uni.$u.mixin,n.default],data:function(){return{innerValue:"",focused:!1,firstChange:!0,changeFromInner:!1,innerFormatter:function(e){return e}}},watch:{value:{immediate:!0,handler:function(e,t){this.innerValue=e,!1===this.firstChange&&!1===this.changeFromInner&&this.valueChange(),this.firstChange=!1,this.changeFromInner=!1}}},computed:{textareaClass:function(){var e=[],t=this.border,a=this.disabled;this.shape;return"surround"===t&&(e=e.concat(["u-border","u-textarea--radius"])),"bottom"===t&&(e=e.concat(["u-border-bottom","u-textarea--no-radius"])),a&&e.push("u-textarea--disabled"),e.join(" ")},textareaStyle:function(){return uni.$u.deepMerge({},uni.$u.addStyle(this.customStyle))}},methods:{setFormatter:function(e){this.innerFormatter=e},onFocus:function(e){this.$emit("focus",e)},onBlur:function(e){this.$emit("blur",e),uni.$u.formValidate(this,"blur")},onLinechange:function(e){this.$emit("linechange",e)},onInput:function(e){var t=this,a=e.detail||{},i=a.value,n=void 0===i?"":i,o=this.formatter||this.innerFormatter,r=o(n);this.innerValue=n,this.$nextTick((function(){t.innerValue=r,t.valueChange()}))},valueChange:function(){var e=this,t=this.innerValue;this.$nextTick((function(){e.$emit("input",t),e.changeFromInner=!0,e.$emit("change",t),uni.$u.formValidate(e,"change")}))},onConfirm:function(e){this.$emit("confirm",e)},onKeyboardheightchange:function(e){this.$emit("keyboardheightchange",e)}}};t.default=o},"39d2":function(e,t,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("c7eb")),o=i(a("5530")),r=i(a("1da1"));a("a434"),a("99af"),a("d81d"),a("14d9"),a("d3b7");var u=a("407e"),s={data:function(){return{defaultImgUrl:a("7515"),fileList:[],checkboxList:[],form:{teacher_phone:"",title:"",teacher_name:"",content:"",attachment:"",is_original:""},rules:{teacher_phone:{type:"string",required:!0,message:'请输入指导老师手机号或"无"',trigger:["blur","change"]},title:{type:"string",required:!0,message:"请输入作品名称",trigger:["blur","change"]},teacher_name:{type:"string",required:!0,message:'请输入指导老师姓名或"无"',trigger:["blur","change"]},content:{type:"string",required:!0,message:"请输入作品描述",trigger:["blur","change"]}}}},onLoad:function(e){this.form.enroll_id=e.eid},methods:{submitLogin:function(){var e=this;this.$refs.form.validate().then((function(t){e.form.attachment?e.form.is_original?(0,u.enrollUploadAdd)(e.form).then((function(t){uni.reLaunch({url:"/pages/mine/mine?showPop=true&eid=".concat(e.form.enroll_id)})})):uni.showToast({icon:"none",title:'请勾选"本人承诺作品为原创"',duration:3e3}):uni.showToast({icon:"none",title:"请上传作品",duration:3e3})}))},checkboxChange:function(e){this.form.is_original=e},deletePic:function(e){this.fileList.splice(e.index,1),this.form.attachment=""},afterRead:function(e){var t=this;return(0,r.default)((0,n.default)().mark((function a(){var i,r,u,s,l;return(0,n.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:i=[].concat(e.file),r=t.fileList.length,i.map((function(e){t.fileList.push((0,o.default)((0,o.default)({},e),{},{status:"uploading",message:"上传中"}))})),u=0;case 4:if(!(u<i.length)){a.next=14;break}return a.next=7,t.uploadFilePromise(i[u].url);case 7:s=a.sent,l=t.fileList[r],t.fileList.splice(r,1,Object.assign(l,{status:"success",message:"",url:s})),r++;case 11:u++,a.next=4;break;case 14:t.form.attachment=t.fileList[0].url;case 15:case"end":return a.stop()}}),a)})))()},uploadFilePromise:function(e){return new Promise((function(t,a){uni.uploadFile({url:"https://upload.familyeducation.org.cn/v1/file/index/upfull?token=gallery",filePath:e,name:"file",formData:{user:"test"},success:function(e){var a=JSON.parse(e.data);t(a.data)}})}))}}};t.default=s},"4f11":function(e,t,a){"use strict";var i=a("26a5"),n=a.n(i);n.a},5372:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAARRJREFUKFON0b8vg1EUxvHv0zcSDH1ToxhE0tntIjFJbEj8D7YaqEHSdOskXQzva5D6E0wiKYPFamo7GHSzsFAsTf3oe4SE/tLWHe89n5vnnCNGHDvG496dIJYxO+XpZUMjUeD2kHLtumhrNArdFWihA+3/B9VAyV9klh2KLD87zlSiDky0UWtlOArcJdJSR99N6mV/ILIwVQCyXYOyqKBMNdeHrDDnMxk/By12T9beeWtMa7f2oO/cCf8IxRwQB2YAr28VZmvKVM6+7mWBKyGtDt1XFKW1Uy3+1MhC9wzy/0RmEWJd25VS57ssmD9EsXRP/gZmIc3mgbI3d70fyoqM8ZraBJJY65aYd81j+UJ5PgZF/gSfDF3u7Y4hBQAAAABJRU5ErkJggg=="},"553f":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"u-textarea",class:e.textareaClass,style:[e.textareaStyle]},[a("v-uni-textarea",{staticClass:"u-textarea__field",style:{height:e.$u.addUnit(e.height)},attrs:{value:e.innerValue,placeholder:e.placeholder,"placeholder-style":e.$u.addStyle(e.placeholderStyle,"string"),"placeholder-class":e.placeholderClass,disabled:e.disabled,focus:e.focus,autoHeight:e.autoHeight,fixed:e.fixed,cursorSpacing:e.cursorSpacing,cursor:e.cursor,showConfirmBar:e.showConfirmBar,selectionStart:e.selectionStart,selectionEnd:e.selectionEnd,adjustPosition:e.adjustPosition,disableDefaultPadding:e.disableDefaultPadding,holdKeyboard:e.holdKeyboard,maxlength:e.maxlength},on:{focus:function(t){arguments[0]=t=e.$handleEvent(t),e.onFocus.apply(void 0,arguments)},blur:function(t){arguments[0]=t=e.$handleEvent(t),e.onBlur.apply(void 0,arguments)},linechange:function(t){arguments[0]=t=e.$handleEvent(t),e.onLinechange.apply(void 0,arguments)},input:function(t){arguments[0]=t=e.$handleEvent(t),e.onInput.apply(void 0,arguments)},confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.onConfirm.apply(void 0,arguments)},keyboardheightchange:function(t){arguments[0]=t=e.$handleEvent(t),e.onKeyboardheightchange.apply(void 0,arguments)}}}),e.count?a("v-uni-text",{staticClass:"u-textarea__count",style:{"background-color":e.disabled?"transparent":"#fff"}},[e._v(e._s(e.innerValue.length)+"/"+e._s(e.maxlength))]):e._e()],1)},n=[]},"5a30":function(e,t,a){"use strict";a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={watch:{accept:{immediate:!0,handler:function(e){"all"!==e&&"media"!==e||uni.$u.error("只有微信小程序才支持把accept配置为all、media之一")}}}};t.default=i},"5e45":function(e,t,a){"use strict";a.r(t);var i=a("b834"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t["default"]=n.a},6331:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return i}));var i={uIcon:a("cff0").default,uLoadingIcon:a("9eac").default},n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"u-upload",style:[e.$u.addStyle(e.customStyle)]},[a("v-uni-view",{staticClass:"u-upload__wrap"},[e.previewImage?e._l(e.lists,(function(t,i){return a("v-uni-view",{key:i,staticClass:"u-upload__wrap__preview"},[t.isImage||t.type&&"image"===t.type?a("v-uni-image",{staticClass:"u-upload__wrap__preview__image",style:[{width:e.$u.addUnit(e.width),height:e.$u.addUnit(e.height)}],attrs:{src:t.thumb||t.url,mode:e.imageMode},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.onPreviewImage(t)}}}):a("v-uni-view",{staticClass:"u-upload__wrap__preview__other"},[a("u-icon",{attrs:{color:"#80CBF9",size:"26",name:t.isVideo||t.type&&"video"===t.type?"movie":"folder"}}),a("v-uni-text",{staticClass:"u-upload__wrap__preview__other__text"},[e._v(e._s(t.isVideo||t.type&&"video"===t.type?"视频":"文件"))])],1),"uploading"===t.status||"failed"===t.status?a("v-uni-view",{staticClass:"u-upload__status"},[a("v-uni-view",{staticClass:"u-upload__status__icon"},["failed"===t.status?a("u-icon",{attrs:{name:"close-circle",color:"#ffffff",size:"25"}}):a("u-loading-icon",{attrs:{size:"22",mode:"circle",color:"#ffffff"}})],1),t.message?a("v-uni-text",{staticClass:"u-upload__status__message"},[e._v(e._s(t.message))]):e._e()],1):e._e(),"uploading"!==t.status&&(e.deletable||t.deletable)?a("v-uni-view",{staticClass:"u-upload__deletable",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.deleteItem(i)}}},[a("v-uni-view",{staticClass:"u-upload__deletable__icon"},[a("u-icon",{attrs:{name:"close",color:"#ffffff",size:"10"}})],1)],1):e._e(),"success"===t.status?a("v-uni-view",{staticClass:"u-upload__success"},[a("v-uni-view",{staticClass:"u-upload__success__icon"},[a("u-icon",{attrs:{name:"checkmark",color:"#ffffff",size:"12"}})],1)],1):e._e()],1)})):e._e(),e.isInCount?[e.$slots.default||e.$slots.$default?a("v-uni-view",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseFile.apply(void 0,arguments)}}},[e._t("default")],2):a("v-uni-view",{staticClass:"u-upload__button",class:[e.disabled&&"u-upload__button--disabled"],style:[{width:e.$u.addUnit(e.width),height:e.$u.addUnit(e.height)}],attrs:{"hover-class":e.disabled?"":"u-upload__button--hover","hover-stay-time":"150"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseFile.apply(void 0,arguments)}}},[a("u-icon",{attrs:{name:e.uploadIcon,size:"26",color:e.uploadIconColor}}),e.uploadText?a("v-uni-text",{staticClass:"u-upload__button__text"},[e._v(e._s(e.uploadText))]):e._e()],1)]:e._e()],2)],1)},o=[]},7515:function(e,t,a){e.exports=a.p+"static/img/upload-default.283dcd87.png"},"7bc5":function(e,t,a){"use strict";a.r(t);var i=a("c1af"),n=a("114a");for(var o in n)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(o);a("ceef");var r=a("f0c5"),u=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"3e81e57d",null,!1,i["a"],void 0);t["default"]=u.exports},"87d3":function(e,t,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("d81d"),a("ac1f"),a("00b4"),a("d3b7"),a("4de4");var n=a("d1f1"),o=i(a("5a30")),r=i(a("9463")),u={name:"u-upload",mixins:[uni.$u.mpMixin,uni.$u.mixin,o.default,r.default],data:function(){return{lists:[],isInCount:!0}},watch:{fileList:{immediate:!0,handler:function(){this.formatFileList()}}},methods:{formatFileList:function(){var e=this,t=this.fileList,a=void 0===t?[]:t,i=this.maxCount,n=a.map((function(t){return Object.assign(Object.assign({},t),{isImage:"image"===e.accept||uni.$u.test.image(t.url||t.thumb),isVideo:"video"===e.accept||uni.$u.test.video(t.url||t.thumb),deletable:"boolean"===typeof t.deletable?t.deletable:e.deletable})}));this.lists=n,this.isInCount=n.length<i},chooseFile:function(){var e=this,t=this.maxCount,a=this.multiple,i=this.lists,o=this.disabled;if(!o){var r;try{r=uni.$u.test.array(this.capture)?this.capture:this.capture.split(",")}catch(u){r=[]}(0,n.chooseFile)(Object.assign({accept:this.accept,multiple:this.multiple,capture:r,compressed:this.compressed,maxDuration:this.maxDuration,sizeType:this.sizeType,camera:this.camera},{maxCount:t-i.length})).then((function(t){e.onBeforeRead(a?t:t[0])})).catch((function(t){e.$emit("error",t)}))}},onBeforeRead:function(e){var t=this,a=this.beforeRead,i=this.useBeforeRead,n=!0;uni.$u.test.func(a)&&(n=a(e,this.getDetail())),i&&(n=new Promise((function(a,i){t.$emit("beforeRead",Object.assign(Object.assign({file:e},t.getDetail()),{callback:function(e){e?a():i()}}))}))),n&&(uni.$u.test.promise(n)?n.then((function(a){return t.onAfterRead(a||e)})):this.onAfterRead(e))},getDetail:function(e){return{name:this.name,index:null==e?this.fileList.length:e}},onAfterRead:function(e){var t=this.maxSize,a=this.afterRead,i=Array.isArray(e)?e.some((function(e){return e.size>t})):e.size>t;i?this.$emit("oversize",Object.assign({file:e},this.getDetail())):("function"===typeof a&&a(e,this.getDetail()),this.$emit("afterRead",Object.assign({file:e},this.getDetail())))},deleteItem:function(e){this.$emit("delete",Object.assign(Object.assign({},this.getDetail(e)),{file:this.fileList[e]}))},onPreviewImage:function(e){var t=this;e.isImage&&this.previewFullImage&&uni.previewImage({urls:this.lists.filter((function(e){return"image"===t.accept||uni.$u.test.image(e.url||e.thumb)})).map((function(e){return e.url||e.thumb})),current:e.url||e.thumb,fail:function(){uni.$u.toast("预览图片失败")}})},onPreviewVideo:function(e){if(this.data.previewFullImage){var t=e.currentTarget.dataset.index,a=this.data.lists;wx.previewMedia({sources:a.filter((function(e){return isVideoFile(e)})).map((function(e){return Object.assign(Object.assign({},e),{type:"video"})})),current:t,fail:function(){uni.$u.toast("预览视频失败")}})}},onClickPreview:function(e){var t=e.currentTarget.dataset.index,a=this.data.lists[t];this.$emit("clickPreview",Object.assign(Object.assign({},a),this.getDetail(t)))}}};t.default=u},9463:function(e,t,a){"use strict";a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("a9e3");var i={props:{accept:{type:String,default:uni.$u.props.upload.accept},capture:{type:[String,Array],default:uni.$u.props.upload.capture},compressed:{type:Boolean,default:uni.$u.props.upload.compressed},camera:{type:String,default:uni.$u.props.upload.camera},maxDuration:{type:Number,default:uni.$u.props.upload.maxDuration},uploadIcon:{type:String,default:uni.$u.props.upload.uploadIcon},uploadIconColor:{type:String,default:uni.$u.props.upload.uploadIconColor},useBeforeRead:{type:Boolean,default:uni.$u.props.upload.useBeforeRead},afterRead:{type:Function,default:null},beforeRead:{type:Function,default:null},previewFullImage:{type:Boolean,default:uni.$u.props.upload.previewFullImage},maxCount:{type:[String,Number],default:uni.$u.props.upload.maxCount},disabled:{type:Boolean,default:uni.$u.props.upload.disabled},imageMode:{type:String,default:uni.$u.props.upload.imageMode},name:{type:String,default:uni.$u.props.upload.name},sizeType:{type:Array,default:uni.$u.props.upload.sizeType},multiple:{type:Boolean,default:uni.$u.props.upload.multiple},deletable:{type:Boolean,default:uni.$u.props.upload.deletable},maxSize:{type:[String,Number],default:uni.$u.props.upload.maxSize},fileList:{type:Array,default:uni.$u.props.upload.fileList},uploadText:{type:String,default:uni.$u.props.upload.uploadText},width:{type:[String,Number],default:uni.$u.props.upload.width},height:{type:[String,Number],default:uni.$u.props.upload.height},previewImage:{type:Boolean,default:uni.$u.props.upload.previewImage}}};t.default=i},"9cb0":function(e,t,a){var i=a("0aff");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("5086ba02",i,!0,{sourceMap:!1,shadowMode:!1})},b50f:function(e,t,a){"use strict";a.r(t);var i=a("0984"),n=a("5e45");for(var o in n)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(o);var r=a("f0c5"),u=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);t["default"]=u.exports},b834:function(e,t,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("198e")),o=i(a("0225")),r={name:"u--textarea",mixins:[uni.$u.mpMixin,o.default,uni.$u.mixin],components:{uvTextarea:n.default}};t.default=r},c1af:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return i}));var i={navbar:a("7a0d").default,"u-Form":a("0106").default,uUpload:a("f82d").default,uFormItem:a("5fc5").default,uInput:a("d72b").default,"u-Textarea":a("b50f").default,uCheckboxGroup:a("fad7").default,uCheckbox:a("2566").default,uButton:a("bc1e").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"box"},[i("navbar",{attrs:{title:"上传作品"}}),i("v-uni-view",{staticStyle:{height:"var(--status-bar-height)"}}),i("u--form",{ref:"form",staticClass:"form-container",attrs:{model:e.form,rules:e.rules}},[i("v-uni-view",{staticClass:"upload-box"},[i("u-upload",{attrs:{fileList:e.fileList,name:"6",multiple:!0,maxCount:1,width:"304rpx",height:"237rpx",customStyle:"margin:0 auto;"},on:{afterRead:function(t){arguments[0]=t=e.$handleEvent(t),e.afterRead.apply(void 0,arguments)},delete:function(t){arguments[0]=t=e.$handleEvent(t),e.deletePic.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"upload-in-box"},[i("v-uni-view",{staticClass:"first-line"},[this.fileList.length?e._e():i("v-uni-image",{attrs:{src:e.defaultImgUrl,mode:"widthFix"}})],1),i("v-uni-view",{staticClass:"second-line"},[i("v-uni-image",{attrs:{src:a("fe11"),mode:"widthFix"}}),i("v-uni-text",[e._v("点击上传作品")])],1),i("v-uni-view",{staticClass:"third-line"},[e._v("只能上传1张图片，单张图片大小不超过5MB")])],1)],1)],1),i("v-uni-view",{staticClass:"fill-box"},[i("v-uni-view",{staticClass:"card-header"},[e._v("作品信息"),i("v-uni-image",{attrs:{src:a("5372"),mode:"widthFix"}})],1),i("u-form-item",{staticClass:"form-item",attrs:{label:"作品名称",prop:"title"}},[i("v-uni-text",{staticClass:"star"},[e._v("*")]),i("u-input",{attrs:{type:"text",placeholder:"请输入不超过12字的作品名称"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),i("u-form-item",{staticClass:"form-item wrap",attrs:{label:"作品描述",prop:"content"}},[i("v-uni-text",{staticClass:"star"},[e._v("*")]),i("u--textarea",{attrs:{rows:4,placeholder:"请输入不超过300字的作品描述",count:!0,maxlength:"300",autoHeight:!0},model:{value:e.form.content,callback:function(t){e.$set(e.form,"content",t)},expression:"form.content"}})],1)],1),i("v-uni-view",{staticClass:"fill-box"},[i("u-form-item",{staticClass:"form-item",attrs:{label:"指导老师",prop:"teacher_name"}},[i("u-input",{attrs:{type:"text","placeholder-style":"color:#cccccc",placeholder:"如无相关信息可填写“无”"},model:{value:e.form.teacher_name,callback:function(t){e.$set(e.form,"teacher_name",t)},expression:"form.teacher_name"}})],1),i("u-form-item",{staticClass:"form-item",attrs:{label:"指导老师联系方式",prop:"teacher_phone"}},[i("u-input",{attrs:{type:"text","placeholder-style":"color:#cccccc",placeholder:"如无相关信息可填写“无”"},model:{value:e.form.teacher_phone,callback:function(t){e.$set(e.form,"teacher_phone",t)},expression:"form.teacher_phone"}})],1)],1),i("v-uni-view",{staticClass:"toggle-container"},[i("u-checkbox-group",{attrs:{placement:"column"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.checkboxChange.apply(void 0,arguments)}},model:{value:e.checkboxList,callback:function(t){e.checkboxList=t},expression:"checkboxList"}},[i("u-checkbox",{attrs:{label:"",name:!0}})],1),i("v-uni-text",{staticClass:"text-agreement"},[e._v("本人承诺作品为原创")])],1)],1),i("v-uni-view",{staticClass:"fill-box"},[i("v-uni-view",{staticClass:"card-header"},[e._v("上传要求"),i("v-uni-image",{attrs:{src:a("5372"),mode:"widthFix"}})],1),i("v-uni-view",{staticClass:"ask-box"},[i("v-uni-view",{staticClass:"ask-line"},[e._v("1、白色景")]),i("v-uni-view",{staticClass:"ask-line"},[e._v("2、画面无任何LOGO、作品作者等信息3、照片原图发送，图像大小不低于3M(精度300DPI)")]),i("v-uni-view",{staticClass:"ask-line"},[e._v("3、作品清晰，光源干净，没有阴影")]),i("v-uni-view",{staticClass:"ask-line"},[e._v("4、不要加任何滤镜")]),i("v-uni-view",{staticClass:"ask-line"},[e._v("5、拍摄时平面拍摄，不要出现角度和透视")]),i("v-uni-view",{staticClass:"ask-line"},[e._v("6、作品居中，四周留有空白")])],1)],1),i("v-uni-view",{staticClass:"login-btn"},[i("u-button",{attrs:{customStyle:"border-radius:51rpx;height: 102rpx;font-size:32rpx;box-shadow: 0px 16px 32px 1px rgba(239,152,1,0.36);",color:"linear-gradient(85deg, #FFCB6F 0%, #FFA900 100%)"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submitLogin.apply(void 0,arguments)}}},[e._v("提交报名")])],1)],1)},o=[]},c5b2:function(e,t,a){"use strict";a.r(t);var i=a("87d3"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t["default"]=n.a},ceef:function(e,t,a){"use strict";var i=a("eef0"),n=a.n(i);n.a},d1f1:function(e,t,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.chooseFile=function(e){var t=e.accept,a=e.multiple,i=e.capture,u=e.compressed,s=e.maxDuration,l=e.sizeType,d=e.camera,c=e.maxCount;return new Promise((function(e,f){switch(t){case"image":uni.chooseImage({count:a?Math.min(c,9):1,sourceType:i,sizeType:l,success:function(t){return e(function(e){return e.tempFiles.map((function(e){return(0,n.default)((0,n.default)({},o(e,["path"])),{},{type:"image",url:e.path,thumb:e.path,size:e.size,name:e.name})}))}(t))},fail:f});break;case"video":uni.chooseVideo({sourceType:i,compressed:u,maxDuration:s,camera:d,success:function(t){return e(function(e){return[(0,n.default)((0,n.default)({},o(e,["tempFilePath","thumbTempFilePath","errMsg"])),{},{type:"video",url:e.tempFilePath,thumb:e.thumbTempFilePath,size:e.size,name:e.name})]}(t))},fail:f});break;case"file":uni.chooseFile({count:a?c:1,type:t,success:function(t){return e(r(t))},fail:f});break;default:uni.chooseFile({count:a?c:1,type:"all",success:function(t){return e(r(t))},fail:f})}}))};var n=i(a("5530"));function o(e,t){return["[object Object]","[object File]"].includes(Object.prototype.toString.call(e))?Object.keys(e).reduce((function(a,i){return t.includes(i)||(a[i]=e[i]),a}),{}):{}}function r(e){return e.tempFiles.map((function(e){return(0,n.default)((0,n.default)({},o(e,["path"])),{},{url:e.path,size:e.size,name:e.name,type:e.type})}))}a("caad"),a("d3b7"),a("13d5"),a("b64b"),a("2532"),a("d81d")},eb0a:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.box[data-v-3e81e57d]{margin-top:%?88?%;padding:%?34?% %?24?% %?48?% %?24?%;background:linear-gradient(180deg,#ffa900,#f7f7f7 %?480?%)}.box .upload-box[data-v-3e81e57d]{width:%?702?%;margin-bottom:%?24?%;padding:%?24?%;background:linear-gradient(180deg,#fff5e4,#fff);border-radius:%?24?%;overflow:hidden}.box .upload-box[data-v-3e81e57d]  .u-upload__wrap__preview__image{width:%?658?%!important;height:%?520?%!important}.box .upload-box .upload-in-box[data-v-3e81e57d]{width:%?658?%;padding:%?62?% 0 %?24?%;text-align:center}.box .upload-box .first-line[data-v-3e81e57d]{text-align:center;margin-bottom:%?40?%}.box .upload-box .first-line uni-image[data-v-3e81e57d]{margin:0 auto;width:%?304?%}.box .upload-box .second-line[data-v-3e81e57d]{margin-bottom:%?24?%;display:flex;align-items:center;justify-content:center}.box .upload-box .second-line uni-image[data-v-3e81e57d]{margin-right:%?7?%;width:%?36?%}.box .upload-box .second-line uni-text[data-v-3e81e57d]{font-size:%?36?%;font-weight:700;color:#ffa900}.box .upload-box .third-line[data-v-3e81e57d]{font-size:%?24?%;color:#c6d1dd}.box .fill-box[data-v-3e81e57d]{margin-bottom:%?24?%;padding:%?24?%;width:100%;background:#fff;border-radius:%?24?%}.box .fill-box .card-header[data-v-3e81e57d]{font-size:%?32?%;font-weight:800}.box .fill-box .card-header uni-image[data-v-3e81e57d]{width:%?12?%;-webkit-transform:translateY(%?10?%);transform:translateY(%?10?%)}.box .fill-box .ask-box[data-v-3e81e57d]{margin-top:%?24?%}.box .fill-box .ask-box .ask-line[data-v-3e81e57d]{font-size:%?26?%;line-height:%?48?%}.box .login-btn[data-v-3e81e57d]{margin:%?64?% %?56?% 0 %?56?%}.box .form-item[data-v-3e81e57d]{border-bottom:%?0.5?% solid #ccc}.box .form-item[data-v-3e81e57d]:nth-last-child(1){border-bottom:none}.box .form-item .u-input[data-v-3e81e57d]{padding:0!important;height:%?100?%;font-size:%?36?%;border:none;border-radius:0;color:#303133}.box .form-item .star[data-v-3e81e57d]{display:inline-block;color:#ff9231;height:%?30?%}.box .form-item uni-image[data-v-3e81e57d]{width:%?13?%}.box .toggle-container[data-v-3e81e57d]{margin-top:%?8?%;margin-bottom:%?48?%;display:flex;align-items:center;width:100%;color:#ffa900;font-size:%?30?%;font-weight:700}.box .toggle-container[data-v-3e81e57d]  .u-checkbox__icon-wrap{width:%?30?%!important;height:%?30?%!important}.box[data-v-3e81e57d]  .u-form-item__body__right__message{margin:0!important}.box[data-v-3e81e57d]  .u-form-item__body .u-form-item__body__left{width:auto!important}.box[data-v-3e81e57d]  .u-input__content__field-wrapper__field,\r\n.box .uni-textarea-textarea[data-v-3e81e57d]{text-align:right!important}.box[data-v-3e81e57d]  .u-textarea{margin-top:%?60?%}.box[data-v-3e81e57d]  .u-textarea__count{position:absolute;top:%?-30?%;bottom:300px!important}.box[data-v-3e81e57d]  .u-textarea--radius{border:none}',""]),e.exports=t},eef0:function(e,t,a){var i=a("eb0a");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("7a827ef9",i,!0,{sourceMap:!1,shadowMode:!1})},f59c:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-5f2310ee], uni-scroll-view[data-v-5f2310ee], uni-swiper-item[data-v-5f2310ee]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-upload[data-v-5f2310ee]{display:flex;flex-direction:column;flex:1}.u-upload__wrap[data-v-5f2310ee]{display:flex;flex-direction:row;flex-wrap:wrap;flex:1}.u-upload__wrap__preview[data-v-5f2310ee]{border-radius:2px;margin:0 8px 8px 0;position:relative;overflow:hidden;display:flex;flex-direction:row}.u-upload__wrap__preview__image[data-v-5f2310ee]{width:80px;height:80px}.u-upload__wrap__preview__other[data-v-5f2310ee]{width:80px;height:80px;background-color:#f2f2f2;flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center}.u-upload__wrap__preview__other__text[data-v-5f2310ee]{font-size:11px;color:#909193;margin-top:2px}.u-upload__deletable[data-v-5f2310ee]{position:absolute;top:0;right:0;background-color:#373737;height:14px;width:14px;display:flex;flex-direction:row;border-bottom-left-radius:100px;align-items:center;justify-content:center;z-index:3}.u-upload__deletable__icon[data-v-5f2310ee]{position:absolute;-webkit-transform:scale(.7);transform:scale(.7);top:0;right:0;top:1px;right:0}.u-upload__success[data-v-5f2310ee]{position:absolute;bottom:0;right:0;display:flex;flex-direction:row;border-style:solid;border-top-color:transparent;border-left-color:transparent;border-bottom-color:#5ac725;border-right-color:#5ac725;border-width:9px;align-items:center;justify-content:center}.u-upload__success__icon[data-v-5f2310ee]{position:absolute;-webkit-transform:scale(.7);transform:scale(.7);bottom:-10px;right:-10px}.u-upload__status[data-v-5f2310ee]{position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.5);display:flex;flex-direction:column;align-items:center;justify-content:center}.u-upload__status__icon[data-v-5f2310ee]{position:relative;z-index:1}.u-upload__status__message[data-v-5f2310ee]{font-size:12px;color:#fff;margin-top:5px}.u-upload__button[data-v-5f2310ee]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:80px;height:80px;background-color:#f4f5f7;border-radius:2px;margin:0 8px 8px 0;box-sizing:border-box}.u-upload__button__text[data-v-5f2310ee]{font-size:11px;color:#909193;margin-top:2px}.u-upload__button--hover[data-v-5f2310ee]{background-color:#e6e7e9}.u-upload__button--disabled[data-v-5f2310ee]{opacity:.5}',""]),e.exports=t},f82d:function(e,t,a){"use strict";a.r(t);var i=a("6331"),n=a("c5b2");for(var o in n)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(o);a("4f11");var r=a("f0c5"),u=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"5f2310ee",null,!1,i["a"],void 0);t["default"]=u.exports},fe11:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAABG1JREFUWEfNmEFoXFUUhr8zGaUUwYousmjBYsWIFbso2KKBFifYhV0IMm/SJIuAYooWFFooKJiNIFhxoWJEoUKnZF4MuOhCxUgoRpyFoKCQEVPaRcSAXbgIodhkjtz77pvcmXkz701G0LN875xz/3vuOef+5wo9ilZ4ACggPAkcRBlEGLRulDWENeAXlCVgQUpc62UJyaKs0+R5mDHgebBAepEllBlqhDLNZpphKiCd5SlyzAAH0pyl/F+hzpSM8k03vY6A9CK72M27wFSCA7PTH4AqyjWUdauT414H/AhwqMPCM2zwqkxyK+l/IiCdY5A6VxAOtxitAO+wxbyc4ma3nWqZvdxhj/kVcDm2bVBFeFaKNt+apA2QA7OIMORpmgicZ5mPsuSBv4KL9GsoZxF2Nf4pNXIcbwXVBMgZLwIm5JEYw9uclAlMdHYseplD5PmsJRerbHDcP75mQCEftuTMEhuclEn+2jESz7BD9Gck4HSs1gDkqmnBs19BGE46537AWVDK98D9DT91CnH1WUCuzyx74dykzlEZtZXUVXSex02SA3nqjKeVtV1vlsPkLKh8Iy1qPGryMwJUYQyh7K18QQLOpYGxtiFfACec7pIEDGe0exs429AVSlIkjACFfOt14HU22Jc1b3SORZRjzvENCdifCdBF9rCb68AefzOilzjAnfzmIX1fipzJ4tRuZoeAXCCao/Q3D4pWeBGxV0MkWwzLKXsxZpK+AEWt4MfGQsqUaMglYNx9XGeZe3ppfv0AclH6w+vkZQPIIIzvnaoEHM0UGqfUN6A5rqA849z9ZABtI1Q+lRKTrYA05AngLZS9CWANH4qvhE2U1TYdYRXhdSlyNcG3n0drBpB6Sp9IwAttRhWuI14j6yWE27qrErAvAdAbwHT8PRug0FZhv3woM6DmpAqYaNuF6awDmJ3c1RYctfkX9RLlFjmqCQFcp86bUmr/p6HlXIaiGLFH9r9L6v+27Cv8iXCfi1BZdJYpcpZ2xDIiAf6t3zWF+yl7rXAEsZdsJHVOt18dkFhpnVD1Ceg9hJcbvs3VYXPRv1yjxNyflQftFJAja6adxD3MMoUYkLk6TC7FkjlK2txpFyRgJEub0pCP3ZwXqSujUqKyTdCG+LmF2J+QgK/SnLs8iDajTCSVdqsPDXka+LLx3fB2n6BZX5cpkOdrz9iMxcekyK9poHr5r3M8hNp+FPMg2GRExqJCSiP55g4q/FugtMJjiI1M9BYQSTLJt1GKptXWMegmwniW4+sWKUeTDe/yu333MciCiqbW1kHR/CojnJciv/d0RPM8whYXPN4dJ3H6oBgv5EaVz5sGxuinoRfzKGUGuCpFN9O3INQ57qZuOU4JaXAdXyv7KN0A1f2xIQZXQ1hB3SAZvRMZVtCNGfT+2OBvxVbfAKaj+rN+L6e2fURbnImrqZOD1Pchm1fmwWqI5xBe2uGD1QfUmM/C1TMBaoqYGZvyFMhZWnvQlXBcxuZ5JXrSq/Mdmyz0+kjxD7X4x8xIrWDAAAAAAElFTkSuQmCC"}}]);