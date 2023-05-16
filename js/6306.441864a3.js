"use strict";(self["webpackChunkvue_start_1"]=self["webpackChunkvue_start_1"]||[]).push([[6306],{76306:function(t,e,a){a.r(e),a.d(e,{default:function(){return u}});var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MonHocToan"},[n("raw-loader",{attrs:{mytxt:a(14173).Z}}),n("h1",[t._v("AxiosUploadBase64 page")]),n("div",[n("b-row",[n("b-col",{staticClass:"border-right",attrs:{md:"3"}},[n("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.onUpload.apply(null,arguments)}}},[n("b-img",{ref:"output",attrs:{fluid:"",alt:"Responsive image"}}),n("br"),n("input",{ref:"file",staticClass:"m-1",attrs:{type:"file",id:"file"},on:{change:t.onFileChange}}),n("br"),n("div",[n("button",{staticClass:"mr-1",attrs:{type:"submit"}},[t._v("Upload")]),n("button",{staticClass:"mr-1",on:{click:t.onRemove}},[t._v("Remove")])])],1)]),n("b-col",{attrs:{md:"9"}},[n("com-view-imag",{ref:"listImg"})],1)],1)],1)],1)},s=[],o=a(19755),i=a.n(o),r=a(9669),l=a.n(r),d=a(51878),m={name:"Tpl",components:{ComViewImag:d.Z},methods:{onUpload(){let t=this.$refs.file.files;if(0==t.length)return;let e=t[0],a=this;this.getReadAsDataURL(e).then((t=>{let e=new FormData;e.append("base64",t),a.UploadAxios2(e).then((t=>{a.$refs.listImg.loadListImg(),i()(a.$refs.output).attr("src",""),i()(a.$refs.file).val("")}))}))},onFileChange(){let t=this.$refs.file.files,e=t[0];this.getReadAsDataURL(e).then((t=>{i()(this.$refs.output).attr("src",t)}))},onRemove(){i()(this.$refs.output).attr("src",""),i()(this.$refs.file).val("")},getReadAsDataURL(t){return new Promise(((e,a)=>{let n=new FileReader;n.onload=()=>{e(n.result)},n.onerror=a,n.readAsDataURL(t)}))},async UploadAxios(t){return await l().post("/api/FileUpload/UploadAxios",t).catch((t=>{console.log(t)}))},async UploadAxios2(t){return await l().post("/api/FileUpload/UploadAxios2",t).catch((t=>{console.log(t)}))}}},p=m,c=a(1001),f=(0,c.Z)(p,n,s,!1,null,null,null),u=f.exports},51878:function(t,e,a){a.d(e,{Z:function(){return p}});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v("View images")]),a("b-row",{staticClass:"border-bottom mb-3"},t._l(t.ds,(function(e){return a("b-col",{key:e,attrs:{md:"1"}},[a("div",{staticClass:"border mb-2 position-relative bg-dark text-light",staticStyle:{height:"50px"}},[a("img",{attrs:{width:"100%",height:"50px",src:"/api/FileUpload/GetImage/"+e,alt:"Image 1"}}),a("span",{staticClass:"position-absolute",staticStyle:{bottom:"1px",right:"1px"}},[a("a",{attrs:{href:"#"},on:{click:function(a){return t.onDel(e)}}},[t._v("Del")])])])])})),1)],1)},s=[],o=a(9669),i=a.n(o),r={name:"HelloWorld",props:{msg:String},data(){return{ds:[]}},mounted(){this.loadListImg()},methods:{loadListImg(){this.getListImg().then((t=>{this.ds=t.data}))},async getListImg(){return await i().get("/api/FileUpload/GetListFile").catch((t=>{console.log(t)}))},onDel(t){this.Del(t).then((t=>{this.loadListImg()}))},async Del(t){return await i().get(`/api/FileUpload/Del/${t}`).catch((t=>{console.log(t)}))}}},l=r,d=a(1001),m=(0,d.Z)(l,n,s,!1,null,null,null),p=m.exports},14173:function(t,e){e["Z"]='<template>\n  <div class="MonHocToan">\n    <raw-loader :mytxt="require(\'!raw-loader!./AxiosUploadBase64.vue\').default"></raw-loader>\n    <h1>AxiosUploadBase64 page</h1>\n    <div>\n      <b-row>\n        <b-col md="3" class="border-right">\n          <form enctype="multipart/form-data" @submit.stop.prevent="onUpload">\n            <b-img ref="output" fluid alt="Responsive image"></b-img><br>\n            <input type="file" id="file" ref="file" class="m-1" @change="onFileChange" /><br>\n            <div>\n              <button type="submit" class="mr-1">Upload</button>\n              <button @click="onRemove" class="mr-1">Remove</button>\n            </div>\n          </form>\n        </b-col>\n        <b-col md="9">\n          <com-view-imag ref="listImg"></com-view-imag>\n        </b-col>\n      </b-row>\n    </div>\n  </div>\n</template>\n<script>\nimport $ from "jquery"\nimport axios from "axios";\nimport ComViewImag from "./ComViewImage.vue";\nexport default {\n  name: \'Tpl\',\n  components: {\n    ComViewImag\n  },\n  methods: {\n\n    onUpload() {\n      let files = this.$refs.file.files;\n      if (files.length == 0) return;\n      let file = files[0];\n      let that = this;\n      this.getReadAsDataURL(file).then((res) => {\n        let fd = new FormData();\n        fd.append("base64", res);\n        that.UploadAxios2(fd).then(res2 => {\n          that.$refs.listImg.loadListImg();\n          $(that.$refs.output).attr("src", "");\n          $(that.$refs.file).val("");\n        })\n      });\n    },\n    onFileChange() {\n      let files = this.$refs.file.files;\n      let file = files[0];\n      this.getReadAsDataURL(file).then((res) => {\n        $(this.$refs.output).attr("src", res);\n      });\n    },\n    onRemove() {\n      $(this.$refs.output).attr("src", "");\n      $(this.$refs.file).val("");\n    },\n    getReadAsDataURL(file) {\n      return new Promise((resolve, reject) => {\n        let reader = new FileReader();\n        reader.onload = () => {\n          resolve(reader.result);\n        };\n        reader.onerror = reject;\n        reader.readAsDataURL(file);\n      });\n    },\n    async UploadAxios(formData) {\n      return await axios\n        .post(`/api/FileUpload/UploadAxios`, formData)\n        .catch((err) => {\n          console.log(err);\n        });\n    },\n    async UploadAxios2(formData) {\n      return await axios\n        .post(`/api/FileUpload/UploadAxios2`, formData)\n        .catch((err) => {\n          console.log(err);\n        });\n    },\n\n\n  }\n}\n<\/script>\n'}}]);
//# sourceMappingURL=6306.441864a3.js.map