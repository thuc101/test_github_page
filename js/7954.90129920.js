"use strict";(self["webpackChunkvue_start_1"]=self["webpackChunkvue_start_1"]||[]).push([[7954],{57954:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h4",[e._v("Thêm Bài viết")]),n("b-row",[n("b-col",{attrs:{cols:"8"}},[n("b-row",{staticClass:"mb-2"},[n("b-col",{attrs:{cols:"2"}},[e._v("Tiêu đề")]),n("b-col",[n("b-input",{attrs:{size:"sm"},model:{value:e.rec.title,callback:function(t){e.$set(e.rec,"title",t)},expression:"rec.title"}})],1)],1),n("vue-ckeditor",{attrs:{config:e.config},model:{value:e.rec.content,callback:function(t){e.$set(e.rec,"content",t)},expression:"rec.content"}})],1),n("b-col",[n("b-button",{attrs:{size:"sm"},on:{click:function(t){return e.on_add()}}},[e._v("Add")])],1)],1)],1)},s=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ckeditor"},[n("textarea",{attrs:{name:e.name,id:e.id,types:e.types,config:e.config,disabled:e.readOnlyMode},domProps:{value:e.value}})])},o=[];let r=(new Date).getTime();var l={name:"VueCkeditor",props:{name:{type:String,default:()=>"editor-"+ ++r},value:{type:String},id:{type:String,default:()=>`editor-${r}`},types:{type:String,default:()=>"classic"},config:{type:Object,default:()=>{}},instanceReadyCallback:{type:Function},readOnlyMode:{type:Boolean,default:()=>!1}},data(){return{instanceValue:""}},computed:{instance(){return CKEDITOR.instances[this.id]}},watch:{value(e){try{this.instance&&this.update(e)}catch(t){}},readOnlyMode(e){this.instance.setReadOnly(e)}},mounted(){this.create()},methods:{create(){"undefined"===typeof CKEDITOR?console.log("CKEDITOR is missing (http://ckeditor.com/)"):("inline"===this.types?CKEDITOR.inline(this.id,this.config):CKEDITOR.replace(this.id,this.config),this.instance.setData(this.value),this.instance.on("instanceReady",(()=>{this.instance.setData(this.value)})),this.instance.on("change",this.onChange),this.instance.on("mode",this.onMode),this.instance.on("blur",(e=>{this.$emit("blur",e)})),this.instance.on("focus",(e=>{this.$emit("focus",e)})),this.instance.on("contentDom",(e=>{this.$emit("contentDom",e)})),CKEDITOR.on("dialogDefinition",(e=>{this.$emit("dialogDefinition",e)})),this.instance.on("fileUploadRequest",(e=>{this.$emit("fileUploadRequest",e)})),this.instance.on("fileUploadResponse",(e=>{setTimeout((()=>{this.onChange()}),0),this.$emit("fileUploadResponse",e)})),"undefined"!==typeof this.instanceReadyCallback&&this.instance.on("instanceReady",this.instanceReadyCallback),this.$once("hook:beforeDestroy",(()=>{this.destroy()})))},update(e){this.instanceValue!==e&&(this.instance.setData(e,{internal:!1}),this.instanceValue=e)},destroy(){try{let e=window["CKEDITOR"];e.instances&&e.instances[this.id]&&e.instances[this.id].destroy()}catch(e){}},onMode(){if("source"===this.instance.mode){let e=this.instance.editable();e.attachListener(e,"input",(()=>{this.onChange()}))}},onChange(){let e=this.instance.getData();e!==this.value&&(this.$emit("input",e),this.instanceValue=e)}}},c=l,d=n(1001),h=(0,d.Z)(c,a,o,!1,null,null,null),u=h.exports,p=n(60325);const m="/js/ckeditor_4.10.0_full/ckeditor/filemanager";var f={components:{VueCkeditor:u},data(){return{rec:{title:"Tiêu đề",content:"Nội dung"},content:"",config:{toolbar:[{name:"document",items:["Source","-","Save","NewPage","Preview","Print","-","Templates"]},{name:"editing",items:["Find","Replace","-","SelectAll","-","Scayt"]},{name:"forms",items:["Form","Checkbox","Radio","TextField","Textarea","Select","Button","ImageButton","HiddenField"]},"/",{name:"basicstyles",items:["Bold","Italic","Underline","Strike","Subscript","Superscript","-","CopyFormatting","RemoveFormat"]},{name:"paragraph",items:["NumberedList","BulletedList","-","Outdent","Indent","-","Blockquote","CreateDiv","-","JustifyLeft","JustifyCenter","JustifyRight","JustifyBlock","-","BidiLtr","BidiRtl","Language"]},{name:"links",items:["Link","Unlink","Anchor"]},{name:"insert",items:["Image","Flash","Table","HorizontalRule","Smiley","SpecialChar","PageBreak","Iframe"]},"/",{name:"styles",items:["Styles","Format","Font","FontSize"]},{name:"colors",items:["TextColor","BGColor"]},{name:"tools",items:["Maximize","ShowBlocks"]},{name:"about",items:["About"]}],height:300,filebrowserBrowseUrl:m+"/browser/default/browser.html?Connector="+m+"/connectors/php/connector.php",filebrowserImageBrowseUrl:m+"/browser/default/browser.html?Type=Image&Connector="+m+"/connectors/php/connector.php",filebrowserFlashBrowseUrl:m+"/browser/default/browser.html?Type=Flash&Connector="+m+"/connectors/php/connector.php",filebrowserUploadUrl:m+"/connectors/php/upload.php?Type=File",filebrowserImageUploadUrl:m+"/connectors/php/upload.php?Type=Image",filebrowserFlashUploadUrl:m+"/connectors/php/upload.php?Type=Flash"}}},methods:{async add(){return await p.Z.post("/api/myadmin/tintuc/add",this.rec).catch((e=>{console.log(e)}))},on_add(){this.add().then((e=>{alert(JSON.stringify(e.data))}))}}},y=f,b=(0,d.Z)(y,i,s,!1,null,null,null),g=b.exports},60325:function(e,t,n){var i=n(9669),s=n.n(i);let a=localStorage.getItem("token");t["Z"]=s().create({baseURL:"",headers:{Authorization:`Bearer ${a}`,"Content-Type":"application/json;charset=utf-8"}})}}]);
//# sourceMappingURL=7954.90129920.js.map