(self["webpackChunkvue_start_1"]=self["webpackChunkvue_start_1"]||[]).push([[9767],{46773:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"MonHocToan"},[i("raw-loader",{attrs:{mytxt:n(59114).Z}}),i("h1",[e._v("UploadBasic2 page")]),i("com-view-imag",{ref:"listImg"}),i("div",[e._l(e.ds,(function(e){return i("img",{key:e.name,staticClass:"m-1",attrs:{src:e.src,width:"60",height:"70"}})})),i("form",{attrs:{id:"form",name:"form",action:"/uploader",enctype:"multipart/form-data",method:"post"},on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.onUpload.apply(null,arguments)}}},[i("div",{staticClass:"buttons"},[i("div",{staticClass:"upload-button"},[i("div",{staticClass:"label"},[e._v("Click me!")]),i("input",{ref:"myfile",attrs:{id:"filessfsfsf",name:"files11111",type:"file",size:"1",multiple:""},on:{change:e.OnChange}}),e.ds.length>0?i("button",{staticClass:"mr-1",attrs:{type:"submit"}},[e._v("Upload")]):e._e()])])])],2)],1)},a=[],s=(n(68309),n(41539),n(19755)),r=n.n(s),l=n(51878),o={name:"Tpl",components:{ComViewImag:l.Z},data:function(){return{ds:[]}},methods:{onUpload:function(){for(var e=r()(this.$refs.myfile),t=e.get(0).files,n=0;n<t.length;n++)t[n].name,t[n].lastModified,t[n].size,t[n].type;var i=new FormData;for(n=0;n!=t.length;n++)i.append("files",t[n]);var a=this;r().ajax({url:"/api/FileUpload/Upload2",data:i,processData:!1,contentType:!1,type:"POST",success:function(e){alert("Files Uploaded!"),r()(a.$refs.myfile).val(""),a.ds=[],a.$refs.listImg.loadListImg()}})},OnChange:function(){var e=this,t=r()(this.$refs.myfile),n=t.get(0).files;this.ds=[];for(var i=function(){var t={name:n[a].name,lastModified:n[a].lastModified,size:n[a].size,type:n[a].type};e.getReadAsDataURL(n[a]).then((function(n){e.ds.push({name:t.name,src:n})}))},a=0;a<n.length;a++)i()},getReadAsDataURL:function(e){return new Promise((function(t,n){var i=new FileReader;i.onload=function(){t(i.result)},i.onerror=n,i.readAsDataURL(e)}))}}},f=o,u=n(1001),d=(0,u.Z)(f,i,a,!1,null,null,null),c=d.exports},51878:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v("View images")]),n("b-row",{staticClass:"border-bottom mb-3"},e._l(e.ds,(function(t){return n("b-col",{key:t,attrs:{md:"1"}},[n("div",{staticClass:"border mb-2 position-relative bg-dark text-light",staticStyle:{height:"50px"}},[n("img",{attrs:{width:"100%",height:"50px",src:"/api/FileUpload/GetImage/"+t,alt:"Image 1"}}),n("span",{staticClass:"position-absolute",staticStyle:{bottom:"1px",right:"1px"}},[n("a",{attrs:{href:"#"},on:{click:function(n){return e.onDel(t)}}},[e._v("Del")])])])])})),1)],1)},a=[],s=n(77673),r=n(16198),l=n(9669),o=n.n(l),f={name:"HelloWorld",props:{msg:String},data:function(){return{ds:[]}},mounted:function(){this.loadListImg()},methods:{loadListImg:function(){var e=this;this.getListImg().then((function(t){e.ds=t.data}))},getListImg:function(){return(0,r.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o().get("/api/FileUpload/GetListFile").catch((function(e){console.log(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},onDel:function(e){var t=this;this.Del(e).then((function(e){t.loadListImg()}))},Del:function(e){return(0,r.Z)((0,s.Z)().mark((function t(){return(0,s.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o().get("/api/FileUpload/Del/".concat(e)).catch((function(e){console.log(e)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()}}},u=f,d=n(1001),c=(0,d.Z)(u,i,a,!1,null,null,null),m=c.exports},38862:function(e,t,n){var i=n(82109),a=n(35005),s=n(22104),r=n(46916),l=n(1702),o=n(47293),f=n(43157),u=n(60614),d=n(70111),c=n(52190),m=n(50206),p=n(30133),h=a("JSON","stringify"),g=l(/./.exec),v=l("".charAt),y=l("".charCodeAt),w=l("".replace),b=l(1..toString),C=/[\uD800-\uDFFF]/g,D=/^[\uD800-\uDBFF]$/,U=/^[\uDC00-\uDFFF]$/,x=!p||o((function(){var e=a("Symbol")();return"[null]"!=h([e])||"{}"!=h({a:e})||"{}"!=h(Object(e))})),$=o((function(){return'"\\udf06\\ud834"'!==h("\udf06\ud834")||'"\\udead"'!==h("\udead")})),F=function(e,t){var n=m(arguments),i=t;if((d(t)||void 0!==e)&&!c(e))return f(t)||(t=function(e,t){if(u(i)&&(t=r(i,this,e,t)),!c(t))return t}),n[1]=t,s(h,null,n)},I=function(e,t,n){var i=v(n,t-1),a=v(n,t+1);return g(D,e)&&!g(U,a)||g(U,e)&&!g(D,i)?"\\u"+b(y(e,0),16):e};h&&i({target:"JSON",stat:!0,arity:3,forced:x||$},{stringify:function(e,t,n){var i=m(arguments),a=s(x?F:h,null,i);return $&&"string"==typeof a?w(a,C,I):a}})},59114:function(e,t){"use strict";t["Z"]='<template>\n  <div class="MonHocToan">\n    <raw-loader :mytxt="require(\'!raw-loader!./BasicUpload2.vue\').default"></raw-loader>\n    <h1>UploadBasic2 page</h1>\n    <com-view-imag ref="listImg"></com-view-imag>\n    <div>\n      \x3c!-- <div>{{ds}}</div> --\x3e\n      <img class="m-1" v-for="x in ds" :key="x.name" :src="x.src" width="60" height="70" />\n      <form id="form" name="form" action="/uploader" enctype="multipart/form-data" method="post"\n        @submit.stop.prevent="onUpload">\n        <div class="buttons">\n          <div class="upload-button">\n            <div class="label">Click me!</div>\n            <input id="filessfsfsf" name="files11111" ref="myfile" type="file" size="1" multiple @change="OnChange" />\n            <button v-if="ds.length > 0" type="submit" class="mr-1">Upload</button>\n          </div>\n        </div>\n      </form>\n\n\n    </div>\n  </div>\n</template>\n<script>\nimport $ from "jquery"\n//import ComViewImag from "@/views/Upload/ComViewImage.vue"\nimport ComViewImag from "./ComViewImage.vue";\nexport default {\n  name: \'Tpl\',\n  components: {\n    ComViewImag\n  },\n  data() {\n    return {\n      ds: []\n    }\n  },\n  methods: {\n    onUpload() {\n      let $files = $(this.$refs.myfile);\n      let files = $files.get(0).files;\n      for (var i = 0; i < files.length; i++) {\n        let info = {\n          name: files[i].name,\n          lastModified: files[i].lastModified,\n          size: files[i].size,\n          type: files[i].type\n        }\n        //alert(JSON.stringify(info));\n      }\n      var formData = new FormData();\n      for (var i = 0; i != files.length; i++) {\n        formData.append("files", files[i]);//<-------"files" là tham số api\n      }\n      let that = this;\n      $.ajax(\n        {\n          url: "/api/FileUpload/Upload2",\n          data: formData,\n          processData: false,\n          contentType: false,\n          type: "POST",\n          success: function (data) {\n            alert("Files Uploaded!");\n            $(that.$refs.myfile).val(\'\');\n            that.ds = [];\n            that.$refs.listImg.loadListImg();\n          }\n        }\n      );\n\n    },\n    OnChange() {\n      let $files = $(this.$refs.myfile);\n      let files = $files.get(0).files;\n      this.ds = [];\n      for (var i = 0; i < files.length; i++) {\n        let info = {\n          name: files[i].name,\n          lastModified: files[i].lastModified,\n          size: files[i].size,\n          type: files[i].type\n        }\n        this.getReadAsDataURL(files[i]).then(res => {\n          this.ds.push({\n            name: info.name,\n            src: res\n          })\n        })\n      }\n    },\n    getReadAsDataURL(file) {\n      return new Promise((resolve, reject) => {\n        let reader = new FileReader();\n        reader.onload = () => {\n          resolve(reader.result);\n        };\n        reader.onerror = reject;\n        reader.readAsDataURL(file);\n      });\n    },\n\n\n  }\n}\n<\/script>\n'}}]);
//# sourceMappingURL=9767-legacy.82350343.js.map