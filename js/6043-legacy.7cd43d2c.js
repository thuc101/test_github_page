"use strict";(self["webpackChunkvue_start_1"]=self["webpackChunkvue_start_1"]||[]).push([[6043],{60390:function(t,r,n){n.r(r),n.d(r,{default:function(){return w}});var e=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("raw-loader",{attrs:{mytxt:n(51138).Z}}),t._v(" "+t._s(t.msg)),e("br"),e("div",{staticClass:"mb-1"},[e("button",{staticClass:"mr-1",on:{click:t.onAdd}},[t._v("Add")]),e("button",{staticClass:"mr-1",on:{click:t.testData}},[t._v("Test data")])]),e("div",{ref:"table"}),e("b-modal",{ref:"my-modal2",attrs:{id:"modal-1",size:"sm","no-close-on-backdrop":!0,"hide-footer":"",title:"BootstrapVue"}},[e("form",{on:{submit:function(r){return r.stopPropagation(),r.preventDefault(),t.onSaveModal.apply(null,arguments)}}},[e("div",[e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-sm-4 col-form-label"},[t._v("Id")]),e("div",{staticClass:"col-sm-8"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.r.Id,expression:"r.Id"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:t.r.Id},on:{input:function(r){r.target.composing||t.$set(t.r,"Id",r.target.value)}}})])]),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-sm-4 col-form-label"},[t._v(" Name ")]),e("div",{staticClass:"col-sm-8"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.r.Name,expression:"r.Name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"form-control":!0,"ko-hop-le":t.errors.has("Name")},attrs:{type:"text",name:"Name",autocomplete:"off"},domProps:{value:t.r.Name},on:{input:function(r){r.target.composing||t.$set(t.r,"Name",r.target.value)}}})])])]),e("div",{staticClass:"float-right"},[e("button",{staticClass:"btn btn-primary mr-1 btn-sm",attrs:{type:"submit"}},[t._v("Save")]),e("button",{staticClass:"btn btn-sm",attrs:{type:"button"},on:{click:function(r){return t.hideModal()}}},[t._v("Cancel")])])])])],1)},a=[],o=n(77673),l=n(16198),i=(n(38862),n(69826),n(41539),n(34553),n(40561),n(60911)),s=n(19755),d=n.n(s),c=n(9669),u=n.n(c),m=n(12954),f=n(20144),h=n(19938),g=n.n(h);n(30381);f["default"].use(m.ZP,{classes:!0}),f["default"].component("v-select",g());var p={data:function(){return{tabulator:null,tableData:[],url:"/api/Ban/GetPage",msg:"hello world",count:8,r:{id:0,ten:"thuc 101",ngay:new Date},tps:[{label:"Huế",id:"HUE"},{label:"Sài gòn",id:"SG"},{label:"Đà nẵng",id:"DN"},{label:"Quảng ngãi",id:"QN"}]}},mounted:function(){var t=this;this.tabulator=new i.Ae(this.$refs.table,{pagination:!0,paginationMode:"remote",ajaxSorting:!0,ajaxURL:t.url,ajaxFiltering:!0,filterMode:"remote",sortMode:"remote",ajaxParams:{token:"ABC123"},paginationSize:2,paginationInitialPage:1,paginationSizeSelector:[5,10,20,30,50],height:d()(window).innerHeight()-400,layout:"fitData",ajaxRequesting:function(r,n){t.msg="".concat(r," - ")+JSON.stringify(n)},ajaxResponse:function(r,n,e){return t.msg=e,e},addRowPos:"top",history:!0,index:"Id",autoColumns:!1,columns:[{title:"STT",formatter:"rownum",headerHozAlign:"center",hozAlign:"center"},{title:"Cmd",headerHozAlign:"center",hozAlign:"center",headerSort:!1,width:75,formatter:function(r,n,e){e((function(){d()(r.getElement()).find("#edit").on("click",r.getRow(),t.onEdit),d()(r.getElement()).find("#del").on("click",r.getRow(),t.onDel)}));var a=d()("<div>"),o=d()("<button>",{text:"Edit",class:"mr-1"}).attr("id","edit"),l=d()("<button>",{text:"Del",class:"mr-1"}).attr("id","del");return a.append(o),a.append(l),a[0]}},{title:"Id",field:"Id",width:60,hozAlign:"center"},{title:"Name",field:"Name",width:100,hozAlign:"left"}]}),this.tabulator.on("dataLoaded",(function(r){t.onLoad()})),this.tabulator.on("pageLoaded",(function(t){})),this.tabulator.on("dataChanged",(function(t){}))},methods:{onLoad:function(){},ChangeAct:function(){var t="true"==this.r.act;this.r.act=t},testData:function(){this.setPage(this.getPageMax())},onSaveModal:function(){var t=this;this.$validator.validateAll().then((function(r){if(r){var n=JSON.parse(JSON.stringify(t.r));t.Save(n).then((function(r){var n=r.data.kq,e=r.data.msg;"updateok"==n?(t.toast(e),t.hideModal(),t.setPage(t.getPage())):"addok"==n&&(t.toast(e),t.hideModal(),t.tabulator.setData(t.url).then((function(){t.setPage(t.getPageMax())})))}))}else t.toast("Không hợp lệ")}))},onAdd:function(){this.r={Id:0,Name:"thuc 101"},this.showModal()},onEdit:function(t){var r=this;t.preventDefault();var n=t.data,e=n.getIndex();this.getById(e).then((function(t){r.r=t.data,r.showModal()}))},onDel:function(t){var r=this;t.preventDefault();var n=t.data,e=n.getIndex();this.Del(e).then((function(t){"ok"==t.data.kq&&(1!=r.getData().length?r.setPage(r.getPage()):r.setPage(r.getPage()-1)),r.toast(t.data.msg)}))},Save:function(t){return(0,l.Z)((0,o.Z)().mark((function r(){return(0,o.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,u().post("/api/Ban/Save",t).catch((function(t){console.log(t)}));case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r)})))()},Del:function(t){return(0,l.Z)((0,o.Z)().mark((function r(){return(0,o.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,u().get("/api/Ban/Delete?id=".concat(t)).catch((function(t){console.log(t)}));case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r)})))()},getById:function(t){return(0,l.Z)((0,o.Z)().mark((function r(){return(0,o.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,u().get("/api/Ban/GetById?id=".concat(t)).catch((function(t){console.log(t)}));case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r)})))()},getPageMax:function(){return this.tabulator.getPageMax()},getPageSize:function(){return this.tabulator.getPageSize()},getPage:function(){return this.tabulator.getPage()},setPage:function(t){this.tabulator.setPage(t)},getData:function(){return this.tabulator.getData()},tabulatorAdd:function(t){this.tableData.unshift(t)},tabulatorDel:function(t){var r=this.tableData.findIndex((function(r){return r.id==t}));this.tableData.splice(r,1)},tabulatorUpdate:function(t){var r=this.tableData.findIndex((function(r){return r.id==t.id}));this.tableData.splice(r,1,t)},tabulatorGetRow:function(t){},toast:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.$bvToast.toast(t,{title:"Information",variant:r,solid:!0})},showModal:function(){this.$refs["my-modal2"].show()},hideModal:function(){this.$refs["my-modal2"].hide()}}},b=p,v=n(1001),x=(0,v.Z)(b,e,a,!1,null,null,null),w=x.exports},69826:function(t,r,n){var e=n(82109),a=n(42092).find,o=n(51223),l="find",i=!0;l in[]&&Array(1)[l]((function(){i=!1})),e({target:"Array",proto:!0,forced:i},{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),o(l)},40561:function(t,r,n){var e=n(82109),a=n(17854),o=n(51400),l=n(19303),i=n(26244),s=n(47908),d=n(65417),c=n(86135),u=n(81194),m=u("splice"),f=a.TypeError,h=Math.max,g=Math.min,p=9007199254740991,b="Maximum allowed length exceeded";e({target:"Array",proto:!0,forced:!m},{splice:function(t,r){var n,e,a,u,m,v,x=s(this),w=i(x),y=o(t,w),$=arguments.length;if(0===$?n=e=0:1===$?(n=0,e=w-y):(n=$-2,e=g(h(l(r),0),w-y)),w+n-e>p)throw f(b);for(a=d(x,e),u=0;u<e;u++)m=y+u,m in x&&c(a,u,x[m]);if(a.length=e,n<e){for(u=y;u<w-e;u++)m=u+e,v=u+n,m in x?x[v]=x[m]:delete x[v];for(u=w;u>w-e+n;u--)delete x[u-1]}else if(n>e)for(u=w-e;u>y;u--)m=u+e-1,v=u+n-1,m in x?x[v]=x[m]:delete x[v];for(u=0;u<n;u++)x[u+y]=arguments[u+2];return x.length=w-e+n,a}})},51138:function(t,r){r["Z"]='<template>\r\n  <div>\r\n    <raw-loader :mytxt=" require(\'!raw-loader!./VueTabulator.vue\').default "></raw-loader> \r\n    {{msg}}  \r\n    <div class="mb-1">\r\n      <button class="mr-1" @click="onAdd">Add</button>\r\n      <button class="mr-1" @click="testData" :disabled="true">Test data</button>\r\n    </div>\r\n    \x3c!-- {{tableData}} --\x3e\r\n    <div ref="table"></div>\r\n    <b-modal ref="my-modal2" id="modal-1" size="sm" :no-close-on-backdrop="true" hide-footer title="BootstrapVue">\r\n      <form @submit.stop.prevent="onSaveModal">\r\n        <div>\r\n          \x3c!-- <pre>{{r}}</pre> --\x3e\r\n          <div class="form-group row">\r\n            <label class="col-sm-4 col-form-label">Id</label>\r\n            <div class="col-sm-8">\r\n              <input type="text" class="form-control" disabled v-model="r.id" />\r\n            </div>\r\n          </div>\r\n          <div class="form-group row">\r\n            <label class="col-sm-4 col-form-label">\r\n              Name\r\n            </label>\r\n            <div class="col-sm-8">\r\n              <input \r\n                type="text" \r\n                v-model="r.name"\r\n                name="name"\r\n                v-validate="\'required\'"                \r\n                :class="{\r\n                    \'form-control\': true,\r\n                    \'ko-hop-le\': errors.has(\'name\'),\r\n                }"\r\n                autocomplete="off"\r\n              />\r\n            </div>\r\n          </div>\r\n\r\n          <div class="form-group row">\r\n            <label class="col-sm-4 col-form-label">\r\n              Ngay\r\n            </label>\r\n            <div class="col-sm-8">\r\n              <b-form-datepicker \r\n                v-model="r.ngay" \r\n                name="ngay"\r\n                v-validate="\'required\'"\r\n                :date-format-options="{ year: \'numeric\', month: \'numeric\', day: \'numeric\' }"\r\n                locale="vi"\r\n                class="mb-2" >\r\n              </b-form-datepicker>\r\n            </div>\r\n          </div>\r\n          <div class="form-group row">\r\n            <label class="col-sm-4 col-form-label">\r\n              Act\r\n            </label>\r\n            <div class="col-sm-8">\r\n              <b-form-checkbox\r\n                v-model="r.act"\r\n                name="checkbox-1"\r\n                value=true\r\n                unchecked-value=false\r\n                @change="ChangeAct"                \r\n              >\r\n                Active\r\n              </b-form-checkbox>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="form-group row">\r\n            <label class="col-sm-4 col-form-label">\r\n              Thành phố {{ errors.has(\'tp\') }}\r\n            </label>\r\n            <div class="col-sm-8">\r\n              <v-select\r\n                v-model="r.tp"\r\n                name="tp"\r\n                v-validate="\'required\'"\r\n                :reduce="(option) => option.id"\r\n                :options="tps"\r\n                :has-error="errors.has(\'tp\')"\r\n                :class="{ danger: errors.has(\'tp\') }"                \r\n              />\r\n            </div>\r\n          </div>\r\n          <div class="form-group row">\r\n            <label class="col-sm-4 col-form-label">\r\n              Quyền\r\n            </label>\r\n            <div class="col-sm-8">\r\n              <v-select \r\n                multiple\r\n                name="quyen" \r\n                v-model="r.quyen" \r\n                :options="[\'Admin\',\'User\',\'Editor\']" \r\n                v-validate="\'required\'"\r\n                :class="{ danger: errors.has(\'quyen\') }"                \r\n              />\r\n            </div>\r\n          </div>\r\n        \r\n        </div>\r\n        <div class="float-right">\r\n          <button type="submit" class="btn btn-primary mr-1 btn-sm">Save</button>\r\n          <button type="button" class="btn btn-sm" @click="hideModal()">Cancel</button>\r\n        </div>\r\n      </form>\r\n    </b-modal>\r\n  </div>\r\n</template>\r\n<script>\r\nimport {TabulatorFull as Tabulator} from \'tabulator-tables\'; //import Tabulator library\r\nimport $ from "jquery"\r\n\r\nimport VeeValidate from "vee-validate";\r\nimport Vue from "vue";\r\nVue.use(VeeValidate, {\r\n  classes: true,\r\n});\r\n\r\nimport vSelect from "vue-select";\r\nVue.component("v-select", vSelect);\r\nimport "vue-select/dist/vue-select.css";\r\nimport moment from \'moment\';\r\nexport default {\r\n  data: function () {\r\n    return {\r\n      tabulator: null, //variable to hold your table\r\n      tableData: [], //data for table to display\r\n      msg:"hello world",\r\n      count:8,\r\n      r:{\r\n        id:0,\r\n        ten:\'thuc 101\',\r\n        ngay:new Date\r\n      },\r\n      tps:[\r\n        { label: \'Huế\', id: \'HUE\' },\r\n        { label: \'Sài gòn\', id: \'SG\' },\r\n        { label: \'Đà nẵng\', id: \'DN\' },\r\n        { label: \'Quảng ngãi\', id: \'QN\' },\r\n      ],\r\n    }\r\n  },\r\n  mounted(){\r\n    let that=this;\r\n\r\n    var dateFormatter = function(cell, formatterParams){\r\n      var value = cell.getValue();\r\n      if(value){\r\n        value = moment(value , "YYYY/MM/DD").format("DD/MM/YYYY");\r\n      }\r\n      return value;\r\n    };\r\n\r\n    this.tabulator = new Tabulator(this.$refs.table, {\r\n      data: this.tableData, //link data to table\r\n      reactiveData:true, //enable data reactivity\r\n      height:$(window).innerHeight()-400,//\'200px\',//$(window).innerHeight()\r\n      //addRowPos:"top",       //top,bottom//when adding a new row, add it to the top of the table\r\n      // columnVertAlign: "middle", //align header contents\r\n      // cellVertAlign: "middle", //vertically center cell contents\r\n\r\n      history:true,             //allow undo and redo actions on the table\r\n      pagination:"local",       //paginate the data\r\n      paginationSize:3,         //allow 7 rows per page of data\r\n      paginationCounter:"rows", //display count of paginated rows in footer\r\n      paginationInitialPage:1, //optional parameter to set the initial page to load    \r\n      paginationSizeSelector: [5, 10, 20, 30, 50],\r\n      //autoColumns:true,\r\n      columns: [\r\n        {\r\n          title: "STT",\r\n          formatter: "rownum",\r\n          headerHozAlign: "center",\r\n          hozAlign: "center",\r\n        },\r\n        {\r\n          title: "Cmd",\r\n          headerHozAlign: "center",\r\n          hozAlign: "center",\r\n          headerSort: false,\r\n          width: 75,\r\n          formatter: function (cell, formatterParams, onRendered) {\r\n            onRendered(function () {\r\n              $(cell.getElement()).find("#edit").on("click", cell.getRow(), that.onEdit);\r\n              $(cell.getElement()).find("#del").on("click", cell.getRow(), that.onDel);\r\n            });\r\n            let $div = $("<div>");\r\n            let $btnEdit=  $("<button>", { text: "Edit", class: "mr-1" }).attr("id", "edit");\r\n            let $btnDel=  $("<button>", { text: "Del", class: "mr-1" }).attr("id", "del");\r\n            $div.append($btnEdit);\r\n            $div.append($btnDel);\r\n            return $div[0];\r\n          },\r\n        },\r\n        {\r\n          title: "Id",\r\n          field: "id",\r\n          width: 60,\r\n          //headerFilter: true,\r\n          hozAlign: "center",\r\n        },\r\n        {\r\n          title: "Name",\r\n          field: "name",\r\n          width: 110,\r\n        },\r\n\r\n        {\r\n            title: "Ngày",\r\n            headerHozAlign: "center",\r\n            hozAlign: "center",\r\n            field: "ngay",\r\n            width: 100,\r\n            formatter:dateFormatter,\r\n          },\r\n          /*\r\n          Tại sao không hoạt động\r\n          {title:"Act", field:"act",\r\n            headerHozAlign: "center",\r\n            hozAlign: "center",\r\n            formatter:"tickCross", \r\n            formatterParams:{\r\n              allowEmpty:true,\r\n              allowTruthy:true,\r\n              tickElement:"yes",//"<i class=\'fa fa-check\'></i>",\r\n              crossElement:"no"//"<i class=\'fa fa-times\'></i>",\r\n            }\r\n          },\r\n          */\r\n          {title:"Act", field:"act", \r\n            headerHozAlign: "center",\r\n            hozAlign: "center",\r\n            formatter:function(cell, formatterParams, onRendered){\r\n              let $chk=$("<input type=\'checkbox\'>").prop("checked",cell.getValue()).attr("disabled", true);\r\n              return $chk[0];\r\n            },\r\n          },\r\n          {\r\n            title: "Thành phố",\r\n            headerHozAlign: "center",\r\n            hozAlign: "center",\r\n            field: "tp",\r\n            width: 130,\r\n            formatter:function(cell, formatterParams, onRendered){\r\n              let tp=cell.getValue();\r\n              let tps=that.tps;\r\n              let index=that.tps.findIndex(x=>x.id==tp);\r\n              return `${tp} - ${that.tps[index].label}`;\r\n            },\r\n          },\r\n          {\r\n            title: "Quyền",\r\n            headerHozAlign: "center",\r\n            hozAlign: "center",\r\n            field: "quyen",\r\n            width: 150,\r\n            formatter:function(cell, formatterParams, onRendered){\r\n              return JSON.stringify(cell.getValue());\r\n            },\r\n          },\r\n\r\n\r\n\r\n\r\n      ], //define table columns\r\n    });\r\n    this.tabulator.on("dataLoaded", function(data){\r\n      that.onLoad();\r\n    });\r\n    this.tabulator.on("pageLoaded", function(pageno){\r\n    }); \r\n    this.tabulator.on("dataChanged", function(data){\r\n    });\r\n  },\r\n  methods:{\r\n    onLoad(){\r\n      let ar=[\r\n        {id:1,name:"thuc 101",ngay:new Date(),act:true,tp:"QN",quyen:[] },\r\n        {id:2,name:"thuc 102",ngay:new Date(),act:false,tp:"QN",quyen:[] },\r\n      ];\r\n      this.count=3;\r\n      ar.forEach(x=>{\r\n        this.tableData.push(x);\r\n      })\r\n    },\r\n    ChangeAct(){\r\n      let act=(this.r.act==\'true\') ? true : false;\r\n      this.r.act=act;\r\n    },\r\n    testData(){\r\n    },\r\n    onSaveModal(){\r\n      this.$validator.validateAll().then((result) => {\r\n        if (!result) {\r\n          this.toast("Không hợp lệ");\r\n          return;\r\n        }\r\n        let r=JSON.parse(JSON.stringify(this.r));\r\n        if(r.id==0){\r\n          r.id=this.count;\r\n          this.tabulatorAdd(r);\r\n          this.count++;\r\n          this.setPage(1);\r\n        }else{\r\n          this.tabulatorUpdate(r);\r\n        }\r\n        this.hideModal();\r\n      });\r\n    },    \r\n    onAdd(){\r\n      this.r={\r\n        id:0,\r\n        name:"thuc 101",\r\n        ngay:new Date(),\r\n        act:true,\r\n        tp:"QN",\r\n        quyen:[] \r\n      };\r\n      this.showModal();\r\n    },\r\n    onEdit(e){\r\n      e.preventDefault();\r\n      let row = e.data;\r\n      let id = row.getIndex();\r\n      this.r=JSON.parse(  JSON.stringify(row.getData()) );\r\n      this.showModal();\r\n    },\r\n    onDel(e) {\r\n      e.preventDefault();\r\n      let row = e.data;\r\n      let id = row.getIndex();\r\n      this.tabulatorDel(id);\r\n    },\r\n    getPageMax(){\r\n      return this.tabulator.getPageMax();\r\n    },\r\n    getLastPage(count) {\r\n      let pageSize = this.tabulator.getPageSize();\r\n      let du = count % pageSize;\r\n      return du == 0 ? count / pageSize : (count - du) / pageSize + 1;\r\n    },\r\n    getPageSize() {\r\n      return this.tabulator.getPageSize();\r\n    },\r\n    getPage() {\r\n      return this.tabulator.getPage();\r\n    },\r\n    setPage(_page) {\r\n      this.tabulator.setPage(_page);\r\n    },\r\n    getData() {\r\n      return this.tabulator.getData();\r\n    },\r\n    tabulatorAdd(r){\r\n      this.tableData.unshift(r);\r\n    },\r\n    tabulatorDel(id){\r\n      let index=this.tableData.findIndex(x=>x.id==id);\r\n      this.tableData.splice(index,1);      \r\n    },\r\n    tabulatorUpdate(r){\r\n      let index=this.tableData.findIndex(x=>x.id==r.id);\r\n      this.tableData.splice(index,1,r);    \r\n    },\r\n    tabulatorGetRow(id){\r\n      //let index=this.tabulator.getData().findIndex(x=>x.id==id);\r\n      //let r=this.tabulator.getData()[index];\r\n      //return r;\r\n    },\r\n    toast(msg, variant = null) {\r\n      this.$bvToast.toast(msg, {\r\n        title: `Information`,\r\n        variant: variant,\r\n        solid: true,\r\n      });\r\n    },\r\n    showModal() {\r\n        this.$refs[\'my-modal2\'].show()\r\n    },\r\n    hideModal() {\r\n      this.$refs[\'my-modal2\'].hide()\r\n    },\r\n  }\r\n}\r\n<\/script>\r\n<style lang="scss">\r\n\r\n  $vs-red:red;\r\n  $vs-default:rgba(60, 60, 60, 0.26);\r\n  $vs-colors: (\r\n      lightest: $vs-default,//$vs-red, //rgba(60, 60, 60, 0.26),\r\n      light: rgba(60, 60, 60, 0.5),\r\n      dark: #333,\r\n      darkest: rgba(0, 0, 0, 0.15),\r\n  ) !default;\r\n\r\n  //  Global Component Variables\r\n  $vs-component-bg: none !default;\r\n  $vs-component-line-height: 1.8 !default;\r\n  $vs-component-placeholder-color: inherit !default;\r\n\r\n  //  Active State\r\n  $vs-state-active-bg: #5897fb !default;\r\n  $vs-state-active-color: #fff !default;\r\n\r\n  //  Deselect State\r\n  $vs-state-deselect-bg: #fb5858 !default;\r\n  $vs-state-deselect-color: #fff !default;\r\n\r\n  //  Disabled State\r\n  $vs-state-disabled-bg: rgb(248, 248, 248) !default;\r\n  $vs-state-disabled-color: map_get($vs-colors, \'light\') !default;\r\n  $vs-state-disabled-controls-color: map_get($vs-colors, \'light\') !default;\r\n  $vs-state-disabled-cursor: not-allowed !default;\r\n\r\n  //  Borders\r\n  $vs-border-width: 1px !default;\r\n  $vs-border-style: solid !default;\r\n  $vs-border-radius: 4px !default;\r\n  $vs-border-color: map_get($vs-colors, \'lightest\') !default;\r\n\r\n  //  Component Controls: Clear, Open Indicator\r\n  $vs-controls-color: map_get($vs-colors, \'light\') !default;\r\n  $vs-controls-size: 1 !default;\r\n  $vs-controls-deselect-text-shadow: 0 1px 0 #fff !default;\r\n\r\n  //  Selected\r\n  $vs-selected-bg: #f0f0f0 !default;\r\n  $vs-selected-border-color: $vs-border-color !default;\r\n  $vs-selected-border-style: $vs-border-style !default;\r\n  $vs-selected-border-width: $vs-border-width !default;\r\n\r\n  //  Dropdown\r\n  $vs-dropdown-z-index: 1000 !default;\r\n  $vs-dropdown-min-width: 160px !default;\r\n  $vs-dropdown-max-height: 350px !default;\r\n  $vs-dropdown-box-shadow: 0px 3px 6px 0px map_get($vs-colors, \'darkest\') !default;\r\n  $vs-dropdown-bg: #fff !default;\r\n\r\n  @import "vue-select/src/scss/vue-select.scss";\r\n  .xyz{\r\n    border: 1px solid red;\r\n  }\r\n  .danger, \r\n  .danger .dropdown-toggle, \r\n  .danger .selected-tag {\r\n    background-color: aqua;\r\n    border-radius: 4px;\r\n  }\r\n  .ko-hop-le {\r\n    border-radius: 4px;\r\n    background-color: aqua;\r\n  }\r\n  $textSize: 8.5px; //14px !default; //table text size\r\n  @import "~tabulator-tables/src/scss/tabulator.scss";\r\n  .tabulator-col-title {\r\n    text-align: center;\r\n  }\r\n  .tabulator .tabulator-footer .tabulator-page.active {\r\n    background-color: greenyellow !important;\r\n    color: blue !important;\r\n  }\r\n  .b-calendar .b-calendar-grid-body .col[data-date] .btn {\r\n    width: 24px;\r\n    height: 24px;\r\n    font-size: 10px;\r\n    line-height: 1;\r\n    margin: 0px auto;\r\n    padding: 6px 0;\r\n  }\r\n  .custom-control.custom-checkbox {\r\n    position: relative;\r\n    z-index: 1;\r\n    display: block;\r\n    min-height: 0.9rem;\r\n    padding-left: 1.5rem;\r\n    padding-top: 0.3rem;\r\n  }\r\n  .col-4 input {\r\n    margin-bottom: 1px;\r\n  }\r\n  .form-group {\r\n    margin-bottom: 0.3rem;\r\n  }\r\n  </style>\r\n\r\n'}}]);
//# sourceMappingURL=6043-legacy.7cd43d2c.js.map