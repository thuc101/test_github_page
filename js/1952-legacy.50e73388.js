(self["webpackChunkvue_start_1"]=self["webpackChunkvue_start_1"]||[]).push([[1952],{31952:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return f}});var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-container",{attrs:{fluid:""}},[i("raw-loader",{attrs:{mytxt:n(24805).Z}}),i("form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.onSave.apply(null,arguments)}}},[i("b-table",{ref:"mytable",attrs:{items:t.items,fields:t.fields,"current-page":t.currentPage,"per-page":t.perPage,filter:t.filter,"filter-included-fields":t.filterOn,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"sort-direction":t.sortDirection,stacked:"md","show-empty":"",small:"",fixed:"",outlined:"",bordered:""},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell()",fn:function(e){var n=e.value,s=e.item,r=e.field.key;return[t.sel[t.pri]!=s[t.pri]?[0!=s[t.pri]?[r==t.pri?[t._v(" "+t._s(n)+" ")]:t._e(),"name"==r?[t._v(" "+t._s(n)+" ")]:t._e()]:t._e()]:t._e(),t.sel[t.pri]==s[t.pri]||0==s[t.pri]?[r==t.pri?[i("span",[t._v(t._s(n))])]:t._e(),"name"==r?[i("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"ko-hop-le":t.errors.has(r)},attrs:{autocomplete:"off",name:r,placeholder:""},model:{value:s[r],callback:function(e){t.$set(s,r,e)},expression:"item[key]"}})]:t._e()]:t._e()]}},{key:"cell(cmd)",fn:function(e){return[0==e.item[t.pri]?[i("b-button",{staticClass:"mr-1",attrs:{variant:"outline",size:"sm"},on:{click:function(n){return t.onSave(e.item)}}},[i("b-icon-hand-thumbs-up")],1),i("b-button",{staticClass:"mr-1",attrs:{variant:"outline",size:"sm"},on:{click:function(n){return t.OnCancel(e.item)}}},[i("b-icon-file-x")],1)]:[t.sel[t.pri]!=e.item[t.pri]?i("b-button",{staticClass:"mr-1",attrs:{variant:"outline",disabled:1==t.isAdded(),size:"sm"},on:{click:function(n){return t.OnEdit(e.item)}}},[i("b-icon-pencil-square")],1):t._e(),t.sel[t.pri]!=e.item[t.pri]?i("b-button",{staticClass:"mr-1",attrs:{variant:"outline",disabled:1==t.isAdded(),size:"sm"},on:{click:function(n){return t.OnDel(e.item)}}},[i("b-icon-trash")],1):t._e(),t.sel[t.pri]==e.item[t.pri]?i("b-button",{staticClass:"mr-1",attrs:{variant:"outline",size:"sm"},on:{click:function(n){return t.onSave(e.item)}}},[i("b-icon-hand-thumbs-up")],1):t._e(),t.sel[t.pri]==e.item[t.pri]?i("b-button",{staticClass:"mr-1",attrs:{variant:"outline",size:"sm"},on:{click:function(n){return t.OnCancel(e.item)}}},[i("b-icon-file-x")],1):t._e()]]}},{key:"bottom-row",fn:function(e){return[i("td",{attrs:{colspan:e.columns}},[i("b-row",[i("b-col",{staticClass:"my-1",attrs:{sm:"6"}},[i("b-form-group",{staticClass:"mb-0",attrs:{label:"Filter","label-for":"filter-input","label-cols-sm":"3","label-align-sm":"right","label-size":"sm"}},[i("b-input-group",{attrs:{size:"sm"}},[i("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:"Type to Search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),i("b-input-group-append",[i("b-button",{attrs:{disabled:!t.filter},on:{click:function(e){t.filter=""}}},[t._v("Clear")])],1)],1)],1)],1),i("b-col",{staticClass:"my-1",attrs:{sm:"6"}},[i("b-form-group",{staticClass:"mb-0",attrs:{label:"Per page","label-for":"per-page-select","label-cols-sm":"6","label-cols-md":"4","label-cols-lg":"3","label-align-sm":"right","label-size":"sm"}},[i("b-form-select",{attrs:{id:"per-page-select",options:t.pageOptions,size:"sm"},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1),i("b-col",{staticClass:"my-1 text-right",attrs:{sm:"6"}},[t._v(" page :"+t._s(t.currentPage)+" / "+t._s(t.getLastPage(t.totalRows))+" of "+t._s(t.totalRows)+" "),i("b-button",{attrs:{disabled:1==t.adding||1==t.isEditing(),size:"sm"},on:{click:t.OnAdd}},[i("b",[t._v("Add")])])],1),i("b-col",{staticClass:"my-1",attrs:{sm:"6"}},[i("b-pagination",{staticClass:"my-0",attrs:{disabled:1==t.adding||1==t.isEditing(),"total-rows":t.totalRows,"per-page":t.perPage,align:"fill",size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)],1)]}}])})],1),i("b-modal",{attrs:{id:t.infoModal.id,title:t.infoModal.title,"ok-only":""},on:{hide:t.resetInfoModal}},[i("pre",[t._v(t._s(t.infoModal.content))])])],1)},s=[],r=(n(41539),n(39714),n(21249),n(57327),n(54747),n(38862),n(34553),n(40561),n(12954)),a=n(20144),l=(n(30381),n(19938)),o=n.n(l);a["default"].use(r.ZP,{classes:!0,fieldsBagName:"veeFields"}),a["default"].component("v-select",o());var c={data:function(){return{items:[],fields:[{key:"id",formatter:function(t,e,n){var i=t.toString();return i.length<4?i:i.substring(0,4)+"..."},sortable:!0,thClass:"text-center",tdClass:"text-center align-middle",thStyle:{width:"10%"}},{key:"name",sortable:!0,thClass:"text-center",tdClass:"align-middle",thStyle:{width:"80%"}},{key:"cmd",class:"text-center",thClass:"text-center",tdClass:"align-middle",thStyle:{width:"10%"}}],totalRows:1,currentPage:1,perPage:3,pageOptions:[3,5,10,15,{value:100,text:"Show a lot"}],sortBy:"",sortDesc:!1,sortDirection:"asc",filter:null,filterOn:[],infoModal:{id:"info-modal",title:"",content:""},sel:{},pri:"id",adding:!1,lastPage:0}},computed:{sortOptions:function(){return this.fields.filter((function(t){return t.sortable})).map((function(t){return{text:t.label,value:t.key}}))}},mounted:function(){for(var t=[],e=1;e<6;e++)t.push({id:e,name:"thuc ".concat(e)});this.items=t,this.totalRows=this.items.length,this.lastPage=this.getLastPage(this.totalRows)},methods:{createId:function(){var t=this,e=0;return this.items.forEach((function(n){n[t.pri]>e&&(e=n[t.pri])})),e+1},onSave:function(t){var e=this;this.$validator.validateAll().then((function(n){if(n){var i=JSON.parse(JSON.stringify(t));if(0==i[e.pri]){var s=e.items.findIndex((function(t){return t[e.pri]==i[e.pri]}));i[e.pri]=e.createId(),e.$set(e.items,s,i),e.adding=!1,e.$refs.mytable.refresh()}else{var r=e.items.findIndex((function(t){return t[e.pri]==i[e.pri]}));e.$set(e.items,r,i),e.sel={}}}else e.toast("Không hợp lệ")}))},OnDel:function(t){this.delRow(t)},delRow:function(t){var e=this,n=t[this.pri],i=this.items.findIndex((function(t){return t[e.pri]==n}));this.items.splice(i,1),this.totalRows=this.items.length,this.lastPage=this.getLastPage(this.totalRows)},doCancel:function(t){for(var e in t)t[e]!=this.sel[e]&&(t[e]=this.sel[e])},isAdded:function(){var t=this,e=!1;return this.items.forEach((function(n){0==n[t.pri]&&(e=!0)})),e},OnEdit:function(t){"{}"==JSON.stringify(this.sel)&&(this.sel=JSON.parse(JSON.stringify(t)))},OnCancel:function(t){var e=this;if(0==t[this.pri]){var n=this.items.findIndex((function(n){return n[e.pri]==t[e.pri]}));this.items.splice(n,1),this.adding=!1,this.$refs.mytable.refresh()}else this.doCancel(t),this.sel={}},OnAdd:function(){var t={id:0,name:"Thức"};this.items.unshift(t),this.adding=!0,this.currentPage=1,this.totalRows=this.items.length,this.$refs.mytable.refresh()},isEditing:function(){return"{}"!=JSON.stringify(this.sel)},getLastPage:function(t){var e=this.perPage,n=t%e;return 0==n?t/e:(t-n)/e+1},info:function(t,e,n){this.infoModal.title="Row index: ".concat(e),this.infoModal.content=JSON.stringify(t,null,2),this.$root.$emit("bv::show::modal",this.infoModal.id,n)},resetInfoModal:function(){this.infoModal.title="",this.infoModal.content=""},onFiltered:function(t){this.totalRows=t.length,this.currentPage=1},toast:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.$bvToast.toast(t,{title:"Information",variant:e,solid:!0})}}},d=c,u=n(1001),m=(0,u.Z)(d,i,s,!1,null,null,null),f=m.exports},18533:function(t,e,n){"use strict";var i=n(42092).forEach,s=n(9341),r=s("forEach");t.exports=r?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},9341:function(t,e,n){"use strict";var i=n(47293);t.exports=function(t,e){var n=[][t];return!!n&&i((function(){n.call(null,e||function(){return 1},1)}))}},86135:function(t,e,n){"use strict";var i=n(34948),s=n(3070),r=n(79114);t.exports=function(t,e,n){var a=i(e);a in t?s.f(t,a,r(0,n)):t[a]=n}},67066:function(t,e,n){"use strict";var i=n(19670);t.exports=function(){var t=i(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},34706:function(t,e,n){var i=n(46916),s=n(92597),r=n(47976),a=n(67066),l=RegExp.prototype;t.exports=function(t){var e=t.flags;return void 0!==e||"flags"in l||s(t,"flags")||!r(l,t)?e:i(a,t)}},21249:function(t,e,n){"use strict";var i=n(82109),s=n(42092).map,r=n(81194),a=r("map");i({target:"Array",proto:!0,forced:!a},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},40561:function(t,e,n){"use strict";var i=n(82109),s=n(17854),r=n(51400),a=n(19303),l=n(26244),o=n(47908),c=n(65417),d=n(86135),u=n(81194),m=u("splice"),f=s.TypeError,p=Math.max,h=Math.min,b=9007199254740991,g="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!m},{splice:function(t,e){var n,i,s,u,m,v,y=o(this),x=l(y),w=r(t,x),k=arguments.length;if(0===k?n=i=0:1===k?(n=0,i=x-w):(n=k-2,i=h(p(a(e),0),x-w)),x+n-i>b)throw f(g);for(s=c(y,i),u=0;u<i;u++)m=w+u,m in y&&d(s,u,y[m]);if(s.length=i,n<i){for(u=w;u<x-i;u++)m=u+i,v=u+n,m in y?y[v]=y[m]:delete y[v];for(u=x;u>x-i+n;u--)delete y[u-1]}else if(n>i)for(u=x-i;u>w;u--)m=u+i-1,v=u+n-1,m in y?y[v]=y[m]:delete y[v];for(u=0;u<n;u++)y[u+w]=arguments[u+2];return y.length=x-i+n,s}})},39714:function(t,e,n){"use strict";var i=n(76530).PROPER,s=n(98052),r=n(19670),a=n(41340),l=n(47293),o=n(34706),c="toString",d=RegExp.prototype,u=d[c],m=l((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),f=i&&u.name!=c;(m||f)&&s(RegExp.prototype,c,(function(){var t=r(this),e=a(t.source),n=a(o(t));return"/"+e+"/"+n}),{unsafe:!0})},54747:function(t,e,n){var i=n(17854),s=n(48324),r=n(98509),a=n(18533),l=n(68880),o=function(t){if(t&&t.forEach!==a)try{l(t,"forEach",a)}catch(e){t.forEach=a}};for(var c in s)s[c]&&o(i[c]&&i[c].prototype);o(r)},24805:function(t,e){"use strict";e["Z"]='<template>\n  <b-container fluid>\n    <raw-loader :mytxt="require(\'!raw-loader!./Basic.vue\').default"></raw-loader>\n    <form @submit.stop.prevent="onSave">\n      <b-table ref="mytable" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage"\n        :filter="filter" :filter-included-fields="filterOn" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc"\n        :sort-direction="sortDirection" stacked="md" show-empty small fixed outlined bordered @filtered="onFiltered">\n\n        <template v-slot:cell()="{ value, item, field: { key } }">\n          <template v-if="sel[pri] != item[pri]">\n            <template v-if="item[pri] != 0">\n              <template v-if="key == pri">\n                {{ value }}\n              </template>\n              <template v-if="key == \'name\'">\n                {{ value }}\n              </template>\n            </template>\n          </template>\n          <template v-if="(sel[pri] == item[pri] || item[pri] == 0)">\n            <template v-if="key == pri">\n              <span>{{ value }}</span>\n            </template>\n            <template v-if="key == \'name\'">\n              <b-form-input autocomplete="off" v-model="item[key]" :name="key" v-validate="\'required\'" placeholder=""\n                :class="{ \'ko-hop-le\': errors.has(key) }">\n              </b-form-input>\n            </template>\n          </template>\n        </template>\n\n        <template #cell(cmd)="row">\n          <template v-if="row.item[pri] == 0">\n            <b-button variant="outline" class="mr-1" size="sm" @click="onSave(row.item)">\n              <b-icon-hand-thumbs-up></b-icon-hand-thumbs-up>\n            </b-button>\n            <b-button variant="outline" class="mr-1" size="sm" @click="OnCancel(row.item)">\n              <b-icon-file-x></b-icon-file-x>\n            </b-button>\n          </template>\n          <template v-else>\n            <b-button variant="outline" :disabled="isAdded() == true" class="mr-1" v-if="sel[pri] != row.item[pri]" size="sm"\n              @click="OnEdit(row.item)">\n              <b-icon-pencil-square></b-icon-pencil-square>\n            </b-button>\n            <b-button variant="outline" :disabled="isAdded() == true" class="mr-1" v-if="sel[pri] != row.item[pri]" size="sm"\n              @click="OnDel(row.item)">\n              <b-icon-trash></b-icon-trash>\n            </b-button>\n            <b-button variant="outline" class="mr-1" v-if="sel[pri] == row.item[pri]" size="sm" @click="onSave(row.item)">\n              <b-icon-hand-thumbs-up></b-icon-hand-thumbs-up>\n            </b-button>\n            <b-button variant="outline" class="mr-1" v-if="sel[pri] == row.item[pri]" size="sm" @click="OnCancel(row.item)">\n              <b-icon-file-x></b-icon-file-x>\n            </b-button>\n          </template>\n        </template>\n\n        <template #bottom-row="data">\n          <td :colspan="data.columns">\n            <b-row>\n              <b-col sm="6" class="my-1">\n                <b-form-group label="Filter" label-for="filter-input" label-cols-sm="3" label-align-sm="right"\n                  label-size="sm" class="mb-0">\n                  <b-input-group size="sm">\n                    <b-form-input id="filter-input" v-model="filter" type="search"\n                      placeholder="Type to Search"></b-form-input>\n                    <b-input-group-append>\n                      <b-button :disabled="!filter" @click="filter = \'\'">Clear</b-button>\n                    </b-input-group-append>\n                  </b-input-group>\n                </b-form-group>\n              </b-col>\n              <b-col sm="6" class="my-1">\n                <b-form-group label="Per page" label-for="per-page-select" label-cols-sm="6" label-cols-md="4"\n                  label-cols-lg="3" label-align-sm="right" label-size="sm" class="mb-0">\n                  <b-form-select id="per-page-select" v-model="perPage" :options="pageOptions"\n                    size="sm"></b-form-select>\n                </b-form-group>\n              </b-col>\n              <b-col sm="6" class="my-1 text-right">\n                page :{{ currentPage }} / {{ getLastPage(totalRows) }} of {{ totalRows }}\n                <b-button :disabled="adding == true || isEditing() == true" @click="OnAdd"\n                  size="sm"><b>Add</b></b-button>\n              </b-col>\n              <b-col sm="6" class="my-1">\n                <b-pagination :disabled=" adding == true || isEditing() == true " v-model="currentPage" :total-rows="totalRows" :per-page="perPage" align="fill" size="sm"\n                  class="my-0"></b-pagination>\n              </b-col>\n            </b-row>\n\n          </td>\n        </template>\n\n      </b-table>\n    </form>\n    \x3c!-- Info modal --\x3e\n    <b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">\n      <pre>{{ infoModal.content }}</pre>\n    </b-modal>\n  </b-container>\n</template>\n\n<script>\n\nimport VeeValidate from "vee-validate";\nimport Vue from "vue";\nVue.use(VeeValidate, {\n  classes: true,\n  fieldsBagName: \'veeFields\'\n});\n\nimport moment from "moment";\n\nimport vSelect from "vue-select";\nVue.component("v-select", vSelect);\n//import "vue-select/dist/vue-select.css";\n\nexport default {\n  data() {\n    return {\n      items: [\n      ],\n      fields: [\n        {\n          key: \'id\',\n          formatter: (value, key, item) => {\n            let text = value.toString();\n            return (text.length < 4) ? text : text.substring(0, 4) + "...";\n          },\n          sortable: true,\n          thClass: \'text-center\',\n          tdClass: \'text-center align-middle\',\n          //tdClass: \'align-middle\'\n          thStyle: { width: "10%" },\n        },\n        { key: \'name\', sortable: true, thClass: \'text-center\', tdClass: \'align-middle\', thStyle: { width: "80%" }},\n        {\n          key: \'cmd\',\n          class: \'text-center\',\n          thClass: \'text-center\',\n          tdClass: \'align-middle\',\n          thStyle: { width: "10%" }\n        }\n      ],\n      totalRows: 1,\n      currentPage: 1,\n      perPage: 3,\n      pageOptions: [3,5, 10, 15, { value: 100, text: "Show a lot" }],\n      sortBy: \'\',\n      sortDesc: false,\n      sortDirection: \'asc\',\n      filter: null,\n      filterOn: [],\n      infoModal: {\n        id: \'info-modal\',\n        title: \'\',\n        content: \'\'\n      },\n\n      sel: {},\n      pri: \'id\',\n      adding: false,\n      lastPage:0,\n\n    }\n  },\n  computed: {\n    sortOptions() {\n      // Create an options list from our fields\n      return this.fields\n        .filter(f => f.sortable)\n        .map(f => {\n          return { text: f.label, value: f.key }\n        })\n    }\n  },\n  mounted() {\n    let items = [\n    ];\n    for(var i=1;i<6;i++){\n      items.push({\n        id:i,\n        name:`thuc ${i}`\n      })\n    }\n    this.items = items;\n    this.totalRows = this.items.length;\n    this.lastPage=this.getLastPage(this.totalRows);\n  },\n  methods: {\n    createId(){\n      let max=0;\n      this.items.forEach(x=>{\n        if(x[this.pri] > max){\n          max=x[this.pri];\n        }\n      })\n      return max+1;\n    },\n    onSave(item) {\n      this.$validator.validateAll().then((result) => {\n        if (!result) {\n          this.toast("Không hợp lệ");\n          return;\n        }\n        let r = JSON.parse(JSON.stringify(item));\n        //alert(JSON.stringify(r));\n        //return;\n        if(r[this.pri]==0){\n          let index = this.items.findIndex(x => x[this.pri] == r[this.pri]);\n          r[this.pri] = this.createId();//new Date().getTime();\n          this.$set(this.items, index, r);\n          this.adding=false;\n          this.$refs.mytable.refresh();\n        }else{\n          let index = this.items.findIndex(x => x[this.pri] == r[this.pri]);\n          this.$set(this.items, index, r);\n          this.sel={};\n        }\n      });\n    },\n    OnDel(item) {\n      this.delRow(item);\n    },\n    delRow(item) {\n      let id = item[this.pri];\n      let index = this.items.findIndex(x => x[this.pri] == id);\n      this.items.splice(index, 1);\n      this.totalRows = this.items.length;\n      this.lastPage = this.getLastPage(this.totalRows);\n    },\n    doCancel(item) {\n      for (let key in item) {\n        if (item[key] != this.sel[key]) {\n          item[key] = this.sel[key]\n        }\n      }\n    },\n    isAdded() {\n      let kq = false;\n      this.items.forEach(x => {\n        if (x[this.pri] == 0) kq = true;\n      })\n      return kq;\n    },\n    OnEdit(item) {\n      if (JSON.stringify(this.sel) != "{}") return;\n      this.sel = JSON.parse(JSON.stringify(item));\n    },\n    OnCancel(item) {\n      if (item[this.pri] == 0) {\n        let index = this.items.findIndex(x => x[this.pri] == item[this.pri]);\n        this.items.splice(index, 1);\n        this.adding = false;\n        this.$refs.mytable.refresh();\n      } else {\n        this.doCancel(item);\n        this.sel = {};\n      }\n    },\n    OnAdd() {\n      let r = {\n        id: 0,\n        name: \'Thức\',\n      }\n      this.items.unshift(r);\n      this.adding = true;\n      this.currentPage=1;\n      this.totalRows=this.items.length;\n      this.$refs.mytable.refresh();\n    },\n    isEditing() {\n      return JSON.stringify(this.sel) != "{}"\n    },\n    getLastPage(count) {\n      let pageSize = this.perPage;//this.tabulator.getPageSize();\n      let du = count % pageSize;\n      return du == 0 ? count / pageSize : (count - du) / pageSize + 1;\n    },\n    info(item, index, button) {\n      this.infoModal.title = `Row index: ${index}`\n      this.infoModal.content = JSON.stringify(item, null, 2)\n      this.$root.$emit(\'bv::show::modal\', this.infoModal.id, button)\n    },\n    resetInfoModal() {\n      this.infoModal.title = \'\'\n      this.infoModal.content = \'\'\n    },\n    onFiltered(filteredItems) {\n      this.totalRows = filteredItems.length\n      this.currentPage = 1\n    },\n    toast(msg, variant = null) {\n      this.$bvToast.toast(msg, {\n        title: `Information`,\n        variant: variant,\n        solid: true,\n      });\n    },\n\n  }\n}\n<\/script>\n'}}]);
//# sourceMappingURL=1952-legacy.50e73388.js.map