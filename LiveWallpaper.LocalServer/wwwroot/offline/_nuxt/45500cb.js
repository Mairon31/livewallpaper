(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{304:function(e,n,t){"use strict";t.r(n);var l=t(1),o=(t(33),t(12),{data:function(){return{innerFile:this.file,innerProgress:0,fileUploadedPath:void 0,tokenSource:void 0,fileType:null}},props:["file","url","deleteTitle","deleteMessage","deleteConfirmText","deleteCancelText","uploadDir"],watch:{file:function(e,n){e&&!this.innerFile&&(this.innerFile={name:e,fake:!0},this.innerProgress=100)},innerFile:function(e,n){if(!e||!e.fake){if(e&&n){for(var t=["lastModified","name","size","type "],l=0,o=0,r=t;o<r.length;o++){var c=r[o];if(e[c]!=n[c])break;l++}if(l==t.length)return}e&&this.upload(e)}}},methods:{_uploadProgressCallback:function(e){this.innerProgress=Math.round(100*e.loaded/e.total),console.log(this.innerProgress,e.loaded,e.total)},upload:function(e){var n=this;this.innerProgress=0,this.fileType=e.type,console.log("fileType",this.fileType),new Promise((function(t,l){var o={onUploadProgress:n._uploadProgressCallback,resolve:t,reject:l};n.tokenSource=n.$local.api.uploadFile(n.$axios,e,n.uploadDir,o)})).then((function(e){n.$emit("uploaded",e)})).catch((function(e){return n.$local.handleClientApiException(n,e)})).finally((function(){n.tokenSource=null}))},stopUpload:function(){var e,n=this;this.$buefy.dialog.confirm({title:this.deleteTitle,message:this.deleteMessage,confirmText:this.deleteConfirmText,cancelText:this.deleteCancelText,type:"is-danger",hasIcon:!0,onConfirm:(e=Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.tokenSource&&n.tokenSource.cancel("Operation canceled by the user."),n.innerProgress=0,n.$emit("cancelled"),n.innerFile=null;case 4:case"end":return e.stop()}}),e)}))),function(){return e.apply(this,arguments)}),onCancel:function(){}})},cleanFile:function(){this.innerFile=null}}}),r=t(19),component=Object(r.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-field",[t("b-field",{staticClass:"file is-primary",class:{"has-name":!!e.innerFile}},[t("b-upload",{staticClass:"file-label",attrs:{"drag-drop":"",disabled:!!e.innerFile,accept:"image/*,video/*"},model:{value:e.innerFile,callback:function(n){e.innerFile=n},expression:"innerFile"}},[t("span",{staticClass:"file-cta"},[t("b-icon",{staticClass:"file-icon",attrs:{pack:"fas",icon:"upload"}}),e._v(" "),t("span",{staticClass:"file-label"},[e._v(e._s(e.$t("dashboard.client.editor.uploadTips")))])],1)])],1),e._v(" "),e.innerFile?t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-11"},[t("b-progress",{attrs:{type:"is-info",value:e.innerProgress,"show-value":""}},[e._v("\n        "+e._s(e.innerFile.name)+"\n      ")])],1),e._v(" "),t("div",{staticClass:"column"},[t("button",{staticClass:"delete is-small",attrs:{type:"button"},on:{click:e.stopUpload}})])]):e._e()],1)}),[],!1,null,null,null);n.default=component.exports}}]);