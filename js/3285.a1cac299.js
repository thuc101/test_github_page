"use strict";(self["webpackChunkvue_start_1"]=self["webpackChunkvue_start_1"]||[]).push([[3285],{3285:function(t,e,n){n.r(e),n.d(e,{default:function(){return b}});var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",{attrs:{fluid:""}},[s("raw-loader",{attrs:{mytxt:n(24555).Z}}),s("h1",[t._v("BanModal")]),s("b-table",{ref:"mytable",attrs:{items:t.myProvider,fields:t.fields,"current-page":t.currentPage,"per-page":t.perPage,filter:t.filter,"filter-included-fields":t.filterOn,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"sort-direction":t.sortDirection,stacked:"md","show-empty":"",small:"",fixed:"",outlined:"",bordered:""},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(cmd)",fn:function(e){return[s("b-button",{staticClass:"mr-1",attrs:{variant:"outline",size:"sm"},on:{click:function(n){return t.OnEditModal(e.item)}}},[s("b-icon-pencil-square")],1),s("b-button",{staticClass:"mr-1",attrs:{variant:"outline",size:"sm"},on:{click:function(n){return t.OnDel(e.item)}}},[s("b-icon-trash")],1)]}},{key:"bottom-row",fn:function(e){return[s("td",{attrs:{colspan:e.columns}},[s("b-row",[s("b-col",{staticClass:"my-1",attrs:{sm:"6"}},[s("b-form-group",{staticClass:"mb-0",attrs:{label:"Filter","label-for":"filter-input","label-cols-sm":"3","label-align-sm":"right","label-size":"sm"}},[s("b-input-group",{attrs:{size:"sm"}},[s("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:"Type to Search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),s("b-input-group-append",[s("b-button",{attrs:{disabled:!t.filter},on:{click:function(e){t.filter=""}}},[t._v("Clear")])],1)],1)],1)],1),s("b-col",{staticClass:"my-1",attrs:{sm:"6"}},[s("b-form-group",{staticClass:"mb-0",attrs:{label:"Per page","label-for":"per-page-select","label-cols-sm":"6","label-cols-md":"4","label-cols-lg":"3","label-align-sm":"right","label-size":"sm"}},[s("b-form-select",{attrs:{id:"per-page-select",options:t.pageOptions,size:"sm"},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1),s("b-col",{staticClass:"my-1 text-right",attrs:{sm:"6"}},[t._v(" page :"+t._s(t.currentPage)+" / "+t._s(t.getLastPage(t.totalRows))+" of "+t._s(t.totalRows)+" "),s("b-button",{attrs:{size:"sm"},on:{click:t.OnAddModal}},[s("b",[t._v("Add")])])],1),s("b-col",{staticClass:"my-1",attrs:{sm:"6"}},[s("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,align:"fill",size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)],1)]}}])}),s("b-modal",{ref:"my-modal",attrs:{size:"sm","no-close-on-backdrop":!0,"hide-footer":"",title:0==t.sel[t.pri]?"form Add":"form Edit"}},[s("div",{staticClass:"d-block"},[s("form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.onSaveModal.apply(null,arguments)}}},[s("div",{staticClass:"text-right"},[t._l(t.sel,(function(e,n){return s("div",{key:n,staticClass:"form-group row"},[n==t.pri?[s("label",{staticClass:"col-sm-4 col-form-label"},[t._v("Id")]),s("div",{staticClass:"col-sm-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.sel[n],expression:"sel[k]"}],class:{"form-control":!0,"ko-hop-le":t.errors.has(n)},attrs:{readonly:!0,name:n,type:"text"},domProps:{value:t.sel[n]},on:{input:function(e){e.target.composing||t.$set(t.sel,n,e.target.value)}}})])]:t._e(),"Name"==n?[s("label",{staticClass:"col-sm-4 col-form-label"},[t._v("Name")]),s("div",{staticClass:"col-sm-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.sel[n],expression:"sel[k]"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"form-control":!0,"ko-hop-le":t.errors.has(n)},attrs:{name:n,autocomplete:"off",type:"text"},domProps:{value:t.sel[n]},on:{input:function(e){e.target.composing||t.$set(t.sel,n,e.target.value)}}})])]:t._e()],2)})),s("button",{staticClass:"btn mr-1",attrs:{type:"submit"}},[t._v("Save")]),s("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(e){return t.hideModal()}}},[t._v("Cancel")])],2)])])])],1)},a=[],l=n(12954),i=n(20144),r=(n(30381),n(19938)),o=n.n(r),d=n(9669),c=n.n(d),m=n(60325);i["default"].use(l.ZP,{classes:!0,fieldsBagName:"veeFields"}),i["default"].component("v-select",o());var u={data(){return{items:[],fields:[{key:"Id",sortable:!0,thClass:"text-center",tdClass:"text-center align-middle",thStyle:{width:"10%"}},{key:"Name",sortable:!0,thClass:"text-center",tdClass:"align-middle",thStyle:{width:"80%"}},{key:"cmd",class:"text-center",thClass:"text-center",tdClass:"align-middle",thStyle:{width:"10%"}}],totalRows:1,currentPage:1,perPage:3,pageOptions:[3,5,10,15,{value:100,text:"Show a lot"}],sortBy:"",sortDesc:!1,sortDirection:"asc",filter:null,filterOn:[],infoModal:{id:"info-modal",title:"",content:""},sel:{},pri:"Id",title:"Hi modal"}},computed:{sortOptions(){return this.fields.filter((t=>t.sortable)).map((t=>({text:t.label,value:t.key})))}},mounted(){},methods:{myProvider(t){let e=t.currentPage,n=t.perPage,s=t.sortBy,a=t.sortDesc,l=this,i="/api/Ban/GetPage2";if(i=`${i}?page=${e}&size=${n}&sortBy=${s}&sortDesc=${a}`,t.filter){let e=t.filter;i=`${i}&filter=${e}`}return c().get(i).then((t=>(l.last_page=t.data.last_page,l.totalRows=t.data.rowCount,t.data.data)))},createId(){let t=0;return this.items.forEach((e=>{e[this.pri]>t&&(t=e[this.pri])})),t+1},OnDel(t){this.Del(t[this.pri]).then((t=>{"ok"==t.data.kq&&this.$refs.mytable.refresh(),this.toast(`${t.data.msg}`)}))},delRow(t){let e=t[this.pri],n=this.items.findIndex((t=>t[this.pri]==e));this.items.splice(n,1),this.totalRows=this.items.length,this.lastPage=this.getLastPage(this.totalRows)},OnEditModal(t){this.sel=JSON.parse(JSON.stringify(t)),this.showModal()},onSaveModal(){this.$validator.validateAll().then((t=>{if(!t)return void this.toast("Không hợp lệ");let e=JSON.parse(JSON.stringify(this.sel));this.Save(e).then((t=>{"ok"==t.data.kq?(this.hideModal(),this.$refs.mytable.refresh()):this.toast(`${t.data.msg}`)}))}))},OnAddModal(){this.sel={},this.sel[this.pri]=0,this.sel["Name"]="bàn số xxxx",this.showModal()},getLastPage(t){let e=this.perPage,n=t%e;return 0==n?t/e:(t-n)/e+1},info(t,e,n){this.infoModal.title=`Row index: ${e}`,this.infoModal.content=JSON.stringify(t,null,2),this.$root.$emit("bv::show::modal",this.infoModal.id,n)},resetInfoModal(){this.infoModal.title="",this.infoModal.content=""},onFiltered(t){this.totalRows=t.length,this.currentPage=1},showModal(){this.$refs["my-modal"].show()},hideModal(){this.$refs["my-modal"].hide()},toast(t,e=null){this.$bvToast.toast(t,{title:"Information",variant:e,solid:!0})},async Save(t){return await m.Z.post("/api/Ban/Save",t).catch((t=>{console.log(t)}))},async Del(t){return await m.Z.get(`/api/Ban/Delete?id=${t}`).catch((t=>{console.log(t)}))}}},p=u,f=n(1001),h=(0,f.Z)(p,s,a,!1,null,null,null),b=h.exports},24555:function(t,e){e["Z"]='<template>\n  <b-container fluid>\n    <raw-loader :mytxt="require(\'!raw-loader!./BanModal.vue\').default"></raw-loader>\n    <h1>BanModal</h1>\n    <b-table ref="mytable" :items="myProvider" :fields="fields" :current-page="currentPage" :per-page="perPage" :filter="filter"\n      :filter-included-fields="filterOn" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc"\n      :sort-direction="sortDirection" stacked="md" show-empty small fixed outlined bordered @filtered="onFiltered">\n\n      <template #cell(cmd)="row">\n        <b-button variant="outline" class="mr-1" size="sm" @click="OnEditModal(row.item)">\n          <b-icon-pencil-square></b-icon-pencil-square>\n        </b-button>\n        <b-button variant="outline" class="mr-1" size="sm" @click="OnDel(row.item)">\n          <b-icon-trash></b-icon-trash>\n        </b-button>\n      </template>\n\n      <template #bottom-row="data">\n        <td :colspan="data.columns">\n          <b-row>\n            <b-col sm="6" class="my-1">\n              <b-form-group label="Filter" label-for="filter-input" label-cols-sm="3" label-align-sm="right"\n                label-size="sm" class="mb-0">\n                <b-input-group size="sm">\n                  <b-form-input id="filter-input" v-model="filter" type="search"\n                    placeholder="Type to Search"></b-form-input>\n\n                  <b-input-group-append>\n                    <b-button :disabled="!filter" @click="filter = \'\'">Clear</b-button>\n                  </b-input-group-append>\n                </b-input-group>\n              </b-form-group>\n            </b-col>\n            <b-col sm="6" class="my-1">\n              <b-form-group label="Per page" label-for="per-page-select" label-cols-sm="6" label-cols-md="4"\n                label-cols-lg="3" label-align-sm="right" label-size="sm" class="mb-0">\n                <b-form-select id="per-page-select" v-model="perPage" :options="pageOptions" size="sm"></b-form-select>\n              </b-form-group>\n            </b-col>\n            <b-col sm="6" class="my-1 text-right">\n              page :{{ currentPage }} / {{ getLastPage(totalRows) }} of {{ totalRows }}\n              <b-button @click="OnAddModal" size="sm"><b>Add</b></b-button>\n            </b-col>\n            <b-col sm="6" class="my-1">\n              <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" align="fill" size="sm"\n                class="my-0"></b-pagination>\n            </b-col>\n          </b-row>\n\n        </td>\n      </template>\n    </b-table>\n\n    \x3c!-- Info modal --\x3e\n    <b-modal ref="my-modal" size="sm" :no-close-on-backdrop="true" hide-footer\n      :title="(sel[pri] == 0) ? \'form Add\' : \'form Edit\'">\n      <div class="d-block">\n        <form @submit.stop.prevent="onSaveModal">\n          <div class="text-right">\n            <div class="form-group row" v-for="(v, k) in sel" :key="k">\n              <template v-if="(k == pri)">\n                <label class="col-sm-4 col-form-label">Id</label>\n                <div class="col-sm-8">\n                  <input :readonly="true" :name="k" v-model="sel[k]" :class="{\n                    \'form-control\': true,\n                    \'ko-hop-le\': errors.has(k),\n                  }" type="text" />\n                </div>\n              </template>\n              <template v-if="k == \'Name\'">\n                <label class="col-sm-4 col-form-label">Name</label>\n                <div class="col-sm-8">\n                  <input :name="k" v-model="sel[k]" autocomplete="off" :class="{\n                    \'form-control\': true,\n                    \'ko-hop-le\': errors.has(k),\n                  }" type="text" v-validate="\'required\'" />\n                </div>\n              </template>\n            </div>\n            <button type="submit" class="btn mr-1">Save</button>\n            <button type="button" class="btn" @click="hideModal()">Cancel</button>\n          </div>\n        </form>\n      </div>\n    </b-modal>\n  </b-container>\n</template>\n<script>\n\nimport VeeValidate from "vee-validate";\nimport Vue from "vue";\nVue.use(VeeValidate, {\n  classes: true,\n  fieldsBagName: \'veeFields\'\n});\n\nimport moment from "moment";\n\nimport vSelect from "vue-select";\nVue.component("v-select", vSelect);\n//import "vue-select/dist/vue-select.css";\n\nimport axios from "axios";\nimport Repository from "@/Repository";\n\nexport default {\n  data() {\n    return {\n      items: [\n      ],\n\n      fields: [\n        {\n          key: \'Id\',\n          // formatter: (value, key, item) => {\n          //   let text = value.toString();\n          //   return (text.length < 4) ? text : text.substring(0, 4) + "...";\n          // },\n          sortable: true,\n          thClass: \'text-center\',\n          tdClass: \'text-center align-middle\',\n          //tdClass: \'align-middle\'\n          thStyle: { width: "10%" },\n        },\n        { key: \'Name\', sortable: true, thClass: \'text-center\', tdClass: \'align-middle\', thStyle: { width: "80%" } },\n        {\n          key: \'cmd\',\n          class: \'text-center\',\n          thClass: \'text-center\',\n          tdClass: \'align-middle\',\n          thStyle: { width: "10%" }\n        }\n      ],\n      totalRows: 1,\n      currentPage: 1,\n      perPage: 3,\n      pageOptions: [3,5,10,15,{ value: 100, text: "Show a lot" }],\n      sortBy: \'\',\n      sortDesc: false,\n      sortDirection: \'asc\',\n      filter: null,\n      filterOn: [],\n      infoModal: {\n        id: \'info-modal\',\n        title: \'\',\n        content: \'\'\n      },\n\n      sel: {},\n      pri: \'Id\',\n      title: "Hi modal"\n\n\n    }\n  },\n  computed: {\n    sortOptions() {\n      // Create an options list from our fields\n      return this.fields\n        .filter(f => f.sortable)\n        .map(f => {\n          return { text: f.label, value: f.key }\n        })\n    }\n  },\n  mounted() {\n    // let items = [\n    // ];\n    // for (var i = 1; i < 5; i++) {\n    //   items.push({\n    //     id: i,\n    //     name: `thuc ${i}`\n    //   })\n    // }\n    // this.items = items;\n    // this.totalRows = this.items.length;\n  },\n  methods: {\n    myProvider(ctx) {\n      let currentPage = ctx.currentPage;\n      let perPage = ctx.perPage;\n      let sortBy = ctx.sortBy;\n      let sortDesc = ctx.sortDesc;\n      let vm = this;\n      let url = `/api/Ban/GetPage2`;\n      url = `${url}?page=${currentPage}&size=${perPage}&sortBy=${sortBy}&sortDesc=${sortDesc}`;\n      if (ctx.filter) {\n        let filter = ctx.filter;\n        url = `${url}&filter=${filter}`;\n      }\n      return axios.get(url)\n        .then(res => {\n          //alert(JSON.stringify(res));\n          /*{"data":{"last_page":1,"rowCount":3,"data":[{\n            "Id":1284,"Name":"66"},{"Id":1286,"Name":"22"},{"Id":3769,"Name":"11"}]},"status":200,"statusText":"OK","headers":{"content-length":"109","content-type":"application/json; charset=utf-8","date":"Fri, 30 Dec 202          \n          */\n          //return;\n          vm.last_page = res.data.last_page;\n          vm.totalRows = res.data.rowCount;\n          // if (this.adding == true) {\n          //   let r = {};\n          //   r[this.pri] = 0;\n          //   r["Name"] = "";\n          //   res.data.data.unshift(r);\n          //}\n          return res.data.data;\n        })\n    },\n    createId(){\n      let max=0;\n      this.items.forEach(x=>{\n        if(x[this.pri] > max){\n          max=x[this.pri];\n        }\n      })\n      return max+1;\n    },\n    OnDel(item) {\n      // alert(JSON.stringify(item));\n      // return;\n      // this.delRow(item);\n      this.Del(item[this.pri]).then(res=>{\n        //alert(JSON.stringify(res));\n        if(res.data.kq==\'ok\'){\n          this.$refs.mytable.refresh();\n        }else{\n\n        }\n        this.toast(`${res.data.msg}`);\n      })\n    },\n    delRow(item) {\n      let id = item[this.pri];\n      let index = this.items.findIndex(x => x[this.pri] == id);\n      this.items.splice(index, 1);\n      this.totalRows = this.items.length;\n      this.lastPage = this.getLastPage(this.totalRows);\n    },\n    OnEditModal(item) {\n      this.sel = JSON.parse(JSON.stringify(item));\n      this.showModal();\n    },\n    onSaveModal() {\n      this.$validator.validateAll().then((result) => {\n        if (!result) {\n          this.toast("Không hợp lệ");\n          return;\n        }\n        let r = JSON.parse(JSON.stringify(this.sel));\n        this.Save(r).then(res=>{\n          //alert(JSON.stringify(res));\n          if(res.data.kq==\'ok\'){\n            this.hideModal();\n            this.$refs.mytable.refresh();\n          }else{\n            this.toast(`${res.data.msg}`)\n          }\n        })\n      });\n    },\n    OnAddModal(){\n      this.sel={};\n      this.sel[this.pri]=0;\n      this.sel[\'Name\']=\'bàn số xxxx\'\n      this.showModal();\n    },    \n    getLastPage(count) {\n      let pageSize = this.perPage;//this.tabulator.getPageSize();\n      let du = count % pageSize;\n      return du == 0 ? count / pageSize : (count - du) / pageSize + 1;\n    },\n    info(item, index, button) {\n      this.infoModal.title = `Row index: ${index}`\n      this.infoModal.content = JSON.stringify(item, null, 2)\n      this.$root.$emit(\'bv::show::modal\', this.infoModal.id, button)\n    },\n    resetInfoModal() {\n      this.infoModal.title = \'\'\n      this.infoModal.content = \'\'\n    },\n    onFiltered(filteredItems) {\n      // Trigger pagination to update the number of buttons/pages due to filtering\n      this.totalRows = filteredItems.length\n      this.currentPage = 1\n    },\n    showModal() {\n      this.$refs["my-modal"].show();\n    },\n    hideModal() {\n      this.$refs["my-modal"].hide();\n    },\n    toast(msg, variant = null) {\n      this.$bvToast.toast(msg, {\n        title: `Information`,\n        variant: variant,\n        solid: true,\n      });\n    },\n    async Save(r) {\n      return await Repository.post(`/api/Ban/Save`, r).catch((err) => {\n        console.log(err);\n      });\n    },\n    async Del(id) {\n      return await Repository\n        .get(`/api/Ban/Delete?id=${id}`)\n        .catch((err) => {\n          console.log(err);\n        });\n    },\n\n\n  }\n}\n<\/script>'},60325:function(t,e,n){var s=n(9669),a=n.n(s);let l=localStorage.getItem("token");e["Z"]=a().create({baseURL:"",headers:{Authorization:`Bearer ${l}`,"Content-Type":"application/json;charset=utf-8"}})}}]);
//# sourceMappingURL=3285.a1cac299.js.map