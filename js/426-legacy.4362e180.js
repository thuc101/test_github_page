(self["webpackChunkvue_start_1"]=self["webpackChunkvue_start_1"]||[]).push([[426],{11740:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return y}});var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MonHocToan"},[n("raw-loader",{attrs:{mytxt:r(46149).Z}}),n("h1",[t._v("User Claim")]),n("div",[n("button",{staticClass:"mb-1"},[t._v("Remove all permission")]),n("form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.onSave.apply(null,arguments)}}},[n("b-table",{ref:"mytable",attrs:{"thead-class":"myTable",items:t.myProvider,fields:t.fields,"current-page":t.currentPage,"per-page":t.perPage,filter:t.filter,"filter-included-fields":t.filterOn,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"sort-direction":t.sortDirection,stacked:"sm","show-empty":"",small:"",fixed:"",outlined:"",bordered:""},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell()",fn:function(e){var r=e.value,i=e.item,a=e.field.key;return[t.sel[t.pri]!=i[t.pri]?[0!=i[t.pri]?[(t.pri,[t._v(" "+t._s(r)+" ")])]:t._e()]:t._e(),t.sel[t.pri]==i[t.pri]||0==i[t.pri]?["Id"==a?[n("span",[t._v(t._s(r))])]:t._e(),"ClaimValue"==a?[n("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"ko-hop-le":t.errors.has(a)},attrs:{name:a,placeholder:""},model:{value:i[a],callback:function(e){t.$set(i,a,e)},expression:"item[key]"}})]:t._e(),"List"==a?[n("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"",expression:"''"}],class:{danger:t.errors.has(a)},attrs:{multiple:"",name:a,reduce:function(t){return t.id},options:t.comboUser,"has-error":t.errors.has(a)},model:{value:i[a],callback:function(e){t.$set(i,a,e)},expression:"item[key]"}})]:t._e()]:t._e()]}},{key:"cell(cmd)",fn:function(e){return[0==e.item[t.pri]?[n("b-button",{staticClass:"mr-1",attrs:{size:"sm"},on:{click:function(r){return t.onSave(e.item)}}},[n("b-icon-hand-thumbs-up")],1),n("b-button",{staticClass:"mr-1",attrs:{size:"sm"},on:{click:function(r){return t.OnCancel(e.item)}}},[n("b-icon-file-x")],1)]:[t.sel[t.pri]!=e.item[t.pri]?n("b-button",{staticClass:"mr-1",attrs:{disabled:1==t.adding||1==t.isEditing(),variant:"outline",size:"sm"},on:{click:function(r){return t.OnEdit(e.item)}}},[n("b-icon-pencil-square")],1):t._e(),t.sel[t.pri]==e.item[t.pri]?n("b-button",{staticClass:"mr-1",attrs:{variant:"outline",size:"sm"},on:{click:function(r){return t.onSave(e.item)}}},[n("b-icon-hand-thumbs-up")],1):t._e(),t.sel[t.pri]==e.item[t.pri]?n("b-button",{staticClass:"mr-1",attrs:{variant:"outline",size:"sm"},on:{click:function(r){return t.OnCancel(e.item)}}},[n("b-icon-file-x")],1):t._e()]]}},{key:"bottom-row",fn:function(e){return[n("td",{attrs:{colspan:e.columns}},[n("b-row",[n("b-col",{staticClass:"my-1",attrs:{sm:"6"}},[n("b-form-group",{staticClass:"mb-0",attrs:{label:"Tìm kiếm","label-for":"filter-input","label-cols-sm":"3","label-align-sm":"right","label-size":"sm"}},[n("b-input-group",{attrs:{size:"sm"}},[n("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:"Type to Search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),n("b-input-group-append",[n("b-button",{attrs:{disabled:!t.filter},on:{click:function(e){t.filter=""}}},[t._v("Clear")])],1)],1)],1)],1),n("b-col",{staticClass:"my-1",attrs:{sm:"6"}},[n("b-form-group",{staticClass:"mb-0",attrs:{label:"Số dòng","label-for":"per-page-select","label-cols-sm":"6","label-cols-md":"4","label-cols-lg":"3","label-align-sm":"right","label-size":"sm"}},[n("b-form-select",{attrs:{id:"per-page-select",options:t.pageOptions,size:"sm"},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1),n("b-col",{staticClass:"my-1 text-right",attrs:{sm:"6"}},[n("span",[t._v("page : "+t._s(t.currentPage)+" / "+t._s(t.last_page)+" of "+t._s(t.totalRows)+" ")]),n("b-button",{staticClass:"mr-1 mb-1",attrs:{disabled:1==t.adding||1==t.isEditing(),size:"sm"},on:{click:t.OnAdd}},[n("b",[t._v("Add")])])],1),n("b-col",{staticClass:"my-1",attrs:{sm:"6"}},[n("b-pagination",{ref:"mypage",attrs:{disabled:1==t.adding||1==t.isEditing(),"total-rows":t.totalRows,"per-page":t.perPage,size:"sm",align:"fill","first-text":"First","prev-text":"Prev","next-text":"Next","last-text":"Last"},on:{change:t.onChangePage,input:t.onPagingInput},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)],1)]}},{key:"row-details",fn:function(e){return[n("b-card",[n("ul",t._l(e.item,(function(e,r){return n("li",{key:r},[t._v(t._s(r)+": "+t._s(e))])})),0)])]}}])})],1),n("b-modal",{attrs:{id:t.infoModal.id,title:t.infoModal.title,"ok-only":""},on:{hide:t.resetInfoModal}},[n("pre",[t._v(t._s(t.infoModal.content))])])],1)],1)},i=[],a=r(77673),s=r(16198),o=(r(41539),r(54747),r(34553),r(38862),r(92222),r(57327),r(47941),r(40561),r(12954)),l=r(20144),c=r(19938),u=r.n(c),d=r(85890),m=r(96486),f=r(70790),p=(r(30381),r(53009));l["default"].use(o.ZP,{classes:!0,fieldsBagName:"veeFields"}),l["default"].component("v-select",u());var h={components:{VueTypeaheadBootstrap:d.Z},data:function(){var t=this;return{items:[],fields:[{key:"Id",formatter:function(t,e,r){return t},sortable:!0,thClass:"text-center",tdClass:"text-center align-middle",thStyle:{width:"8%"}},{key:"ClaimValue",sortable:!0,thClass:"text-center",tdClass:"align-middle",thStyle:{width:"10%"}},{key:"List",formatter:function(e,r,n){var i=[];return e.forEach((function(e){var r=t.comboUser.findIndex((function(t){return t.id==e}));r>=0&&i.push(t.comboUser[r].label)})),i},sortable:!0,thClass:"text-center",tdClass:"align-middle",thStyle:{width:"70%"}},{key:"cmd",class:"text-center",thClass:"text-center",tdClass:"align-middle",thStyle:{width:"12%"}}],totalRows:1,currentPage:1,perPage:5,pageOptions:[5,10,15,{value:100,text:"Show a lot"}],sortBy:"",sortDesc:!1,sortDirection:"asc",filter:null,filterOn:[],infoModal:{id:"info-modal",title:"",content:""},sel:{},pri:"Id",last_page:0,adding:!1,ListAuto:[],Lops:[],url:"/api/HocSinh4",comboUser:[]}},watch:{last_page:function(t,e){},currentPage:function(t){},totalRows:function(t,e){}},computed:{},mounted:function(){},methods:{onSelectChange:function(t){},OnSearch:(0,m.debounce)((function(t){var e=this;fetch("/api/Ban/AutoComplete?q=".concat(t)).then((function(t){return t.json()})).then((function(t){console.log(JSON.stringify(t)),e.ListAuto=t.items}))}),500),onPagingInput:function(){},myProvider:function(t){var e=this,r=t.currentPage,n=t.perPage,i=t.sortBy,a=t.sortDesc,s=this,o="/api/NguoiDung5/ClaimUser_GetPage2";if(o="".concat(o,"?page=").concat(r,"&size=").concat(n,"&sortBy=").concat(i,"&sortDesc=").concat(a),t.filter){var l=t.filter;o="".concat(o,"&filter=").concat(l)}return f.Z.get(o).then((function(t){if(e.GetUserCombo(),s.last_page=t.data.last_page,s.totalRows=t.data.rowCount,1==e.adding){var r={};r[e.pri]=0,r["TenHocSinh"]="thuc",r["NamSinh"]=new Date,r["LopHocId"]=null,t.data.data.unshift(r)}return s.mapData(t.data.data)}))},mapData:function(t){var e=[];return t.forEach((function(t){var r={};Object.keys(t).forEach((function(e){var n=e;r[n]=t[e]})),e.push(r)})),e},onChangePage:function(){this.sel={},this.adding=!1},OnAdd:function(){this.adding=!0,this.$refs.mytable.refresh()},OnEdit:function(t){"{}"==JSON.stringify(this.sel)&&1!=this.adding&&(this.sel=JSON.parse(JSON.stringify(t)))},onSave:function(t){var e=this;this.$validator.validateAll().then((function(r){if(r){var n=JSON.parse(JSON.stringify(t));0==n[e.pri]?e.Add(n):e.Update(n)}else e.toast("Không hợp lệ")}))},OnCancel:function(t){0!=t[this.pri]?(this.doCancel(t),this.sel={}):(this.adding=!1,this.$refs.mytable.refresh())},OnDel:function(t){this.Del(t[this.pri])},delRow:function(t){var e=t.id,r=this.items.findIndex((function(t){return t.id==e}));this.items.splice(r,1)},isEditing:function(){return"{}"!=JSON.stringify(this.sel)},isAdded:function(){var t=!1;return this.items.forEach((function(e){0==e.id&&(t=!0)})),t},doCancel:function(t){for(var e in t)t[e]!=this.sel[e]&&(t[e]=this.sel[e])},getLastPage:function(t){var e=this.perPage,r=t%e;return 0==r?t/e:(t-r)/e+1},gotoPage:function(t){this.currentPage=t,this.$refs.mytable.refresh()},toast:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.$bvToast.toast(t,{title:"Information",variant:e,solid:!0})},Add:function(t){var e=this;return(0,s.Z)((0,a.Z)().mark((function r(){return(0,a.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,f.Z.post("".concat(e.url,"/Add"),t).then((function(t){e.toast("".concat(t.data.msg)),e.adding=!1,e.$refs.mytable.refresh()})).catch((function(t){p.Z.XuLyErr(t)}));case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r)})))()},Update:function(t){var e=this;return(0,s.Z)((0,a.Z)().mark((function r(){return(0,a.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,f.Z.post("/api/NguoiDung5/ClaimUser_update",t).then((function(t){e.toast("".concat(t.data.msg)),e.adding=!1,e.sel={},e.$refs.mytable.refresh()})).catch((function(t){p.Z.XuLyErr(t)}));case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r)})))()},Del:function(t){var e=this;return(0,s.Z)((0,a.Z)().mark((function r(){return(0,a.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,f.Z.get("".concat(e.url,"/Delete?id=").concat(t)).then((function(t){if("nook"!=t.data.kq){e.toast("".concat(t.data.msg));var r=e.getLastPage(e.totalRows-1);r<e.currentPage&&(e.currentPage=r),e.$refs.mytable.refresh()}else e.toast("".concat(t.data.msg))})).catch((function(t){p.Z.XuLyErr(t)}));case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r)})))()},getById:function(t){var e=this;return(0,s.Z)((0,a.Z)().mark((function r(){return(0,a.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,f.Z.get("".concat(e.url,"/GetById?id=").concat(t)).then((function(t){e.sel=t.data})).catch((function(t){p.Z.XuLyErr(t)}));case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r)})))()},LdsLop:function(){var t=this;return(0,s.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f.Z.get("/api/LopHoc4/LdsComboItem").then((function(e){t.Lops=e.data.list})).catch((function(t){p.Z.XuLyErr(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},GetUserCombo:function(){var t=this;return(0,s.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f.Z.get("/api/NguoiDung5/GetComboNguoiDung").then((function(e){t.comboUser=e.data})).catch((function(t){p.Z.XuLyErr(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},info:function(t,e,r){this.infoModal.title="Row index: ".concat(e),this.infoModal.content=JSON.stringify(t,null,2),this.$root.$emit("bv::show::modal",this.infoModal.id,r)},resetInfoModal:function(){this.infoModal.title="",this.infoModal.content=""},onFiltered:function(t){this.totalRows=t.length,this.currentPage=1}}},g=h,b=r(1001),v=(0,b.Z)(g,n,i,!1,null,null,null),y=v.exports},92222:function(t,e,r){"use strict";var n=r(82109),i=r(17854),a=r(47293),s=r(43157),o=r(70111),l=r(47908),c=r(26244),u=r(86135),d=r(65417),m=r(81194),f=r(5112),p=r(7392),h=f("isConcatSpreadable"),g=9007199254740991,b="Maximum allowed index exceeded",v=i.TypeError,y=p>=51||!a((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),k=m("concat"),w=function(t){if(!o(t))return!1;var e=t[h];return void 0!==e?!!e:s(t)},x=!y||!k;n({target:"Array",proto:!0,arity:1,forced:x},{concat:function(t){var e,r,n,i,a,s=l(this),o=d(s,0),m=0;for(e=-1,n=arguments.length;e<n;e++)if(a=-1===e?s:arguments[e],w(a)){if(i=c(a),m+i>g)throw v(b);for(r=0;r<i;r++,m++)r in a&&u(o,m,a[r])}else{if(m>=g)throw v(b);u(o,m++,a)}return o.length=m,o}})},47941:function(t,e,r){var n=r(82109),i=r(47908),a=r(81956),s=r(47293),o=s((function(){a(1)}));n({target:"Object",stat:!0,forced:o},{keys:function(t){return a(i(t))}})},46149:function(t,e){"use strict";e["Z"]='<template>\r\n    <div class="MonHocToan">\r\n        <raw-loader :mytxt="require(\'!raw-loader!./NDUserClaim.vue\').default"></raw-loader>\r\n        <h1>User Claim</h1>\r\n        <div>\r\n            <button class="mb-1">Remove all permission</button>\r\n            <form @submit.stop.prevent="onSave">\r\n                <b-table thead-class="myTable" ref="mytable" :items="myProvider" :fields="fields"\r\n                    :current-page="currentPage" :per-page="perPage" :filter="filter" :filter-included-fields="filterOn"\r\n                    :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :sort-direction="sortDirection" stacked="sm"\r\n                    show-empty small fixed outlined bordered @filtered="onFiltered">\r\n                    <template v-slot:cell()="{ value, item, field: { key } }">\r\n                        <template v-if="sel[pri] != item[pri]">\r\n                            <template v-if="item[pri] != 0">\r\n                                <template v-if="key == pri">\r\n                                    {{ value }}\r\n                                </template>\r\n                                <template v-else>\r\n                                    {{ value }}\r\n                                </template>\r\n                            </template>\r\n                        </template>\r\n                        <template v-if="(sel[pri] == item[pri] || item[pri] == 0)">\r\n                            <template v-if="key == \'Id\'">\r\n                                <span>{{ value }}</span>\r\n                            </template>\r\n                            <template v-if="key == \'ClaimValue\'">\r\n                                <b-form-input v-model="item[key]" :name="key" v-validate="\'required\'" placeholder=""\r\n                                    :class="{ \'ko-hop-le\': errors.has(key) }">\r\n                                </b-form-input>\r\n                            </template>\r\n                            <template v-if="key == \'List\'">\r\n                                <v-select multiple v-model="item[key]" v-validate="\'\'" :name="key"\r\n                                    :reduce="(option) => option.id" :options="\r\n                                        comboUser\r\n                                    " :has-error="errors.has(key)" :class="{ danger: errors.has(key) }" />\r\n                            </template>\r\n\r\n                        </template>\r\n                    </template>\r\n                    <template #cell(cmd)="row">\r\n                        <template v-if="row.item[pri] == 0">\r\n                            <b-button class="mr-1" size="sm" @click="onSave(row.item)">\r\n                                <b-icon-hand-thumbs-up></b-icon-hand-thumbs-up>\r\n                            </b-button>\r\n                            <b-button class="mr-1" size="sm" @click="OnCancel(row.item)">\r\n                                <b-icon-file-x></b-icon-file-x>\r\n                            </b-button>\r\n                        </template>\r\n                        <template v-else>\r\n                            <b-button :disabled="adding == true || isEditing() == true" variant="outline" class="mr-1"\r\n                                v-if="sel[pri] != row.item[pri]" size="sm" @click="OnEdit(row.item)">\r\n                                <b-icon-pencil-square></b-icon-pencil-square>\r\n                            </b-button>\r\n                            \x3c!-- <b-button :disabled="adding == true || isEditing() == true" variant="outline" class="mr-1"\r\n                                v-if="sel[pri] != row.item[pri]" size="sm" @click="OnDel(row.item)">\r\n                                <b-icon-trash></b-icon-trash>\r\n                            </b-button> --\x3e\r\n                            <b-button variant="outline" class="mr-1" v-if="sel[pri] == row.item[pri]" size="sm"\r\n                                @click="onSave(row.item)">\r\n                                <b-icon-hand-thumbs-up></b-icon-hand-thumbs-up>\r\n                            </b-button>\r\n                            <b-button variant="outline" class="mr-1" v-if="sel[pri] == row.item[pri]" size="sm"\r\n                                @click="OnCancel(row.item)">\r\n                                <b-icon-file-x></b-icon-file-x>\r\n                            </b-button>\r\n                        </template>\r\n                    </template>\r\n\r\n                    <template #bottom-row="data">\r\n                        <td :colspan="data.columns">\r\n                            <b-row>\r\n                                <b-col sm="6" class="my-1">\r\n                                    <b-form-group label="Tìm kiếm" label-for="filter-input" label-cols-sm="3"\r\n                                        label-align-sm="right" label-size="sm" class="mb-0">\r\n                                        <b-input-group size="sm">\r\n                                            <b-form-input id="filter-input" v-model="filter" type="search"\r\n                                                placeholder="Type to Search">\r\n                                            </b-form-input>\r\n\r\n                                            <b-input-group-append>\r\n                                                <b-button :disabled="!filter" @click="filter = \'\'">Clear</b-button>\r\n                                            </b-input-group-append>\r\n                                        </b-input-group>\r\n                                    </b-form-group>\r\n                                </b-col>\r\n                                <b-col sm="6" class="my-1">\r\n                                    <b-form-group label="Số dòng" label-for="per-page-select" label-cols-sm="6"\r\n                                        label-cols-md="4" label-cols-lg="3" label-align-sm="right" label-size="sm"\r\n                                        class="mb-0">\r\n                                        <b-form-select id="per-page-select" v-model="perPage" :options="pageOptions"\r\n                                            size="sm">\r\n                                        </b-form-select>\r\n                                    </b-form-group>\r\n                                </b-col>\r\n\r\n                                <b-col sm="6" class="my-1 text-right">\r\n                                    <span>page : {{ currentPage }} / {{ last_page }} of {{ totalRows }} </span>\r\n                                    <b-button :disabled="adding == true || isEditing() == true" class="mr-1 mb-1" size="sm"\r\n                                        @click="OnAdd">\r\n                                        <b>Add</b></b-button>\r\n                                </b-col>\r\n                                <b-col sm="6" class="my-1">\r\n                                    <b-pagination :disabled="adding == true || isEditing() == true" ref="mypage"\r\n                                        v-model="currentPage" :total-rows="totalRows" :per-page="perPage" size="sm"\r\n                                        align="fill" @change="onChangePage" @input="onPagingInput" first-text="First"\r\n                                        prev-text="Prev" next-text="Next" last-text="Last">\r\n                                    </b-pagination>\r\n                                </b-col>\r\n                            </b-row>\r\n\r\n                        </td>\r\n                    </template>\r\n\r\n                    <template #row-details="row">\r\n                        <b-card>\r\n                            <ul>\r\n                                <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>\r\n                            </ul>\r\n                        </b-card>\r\n                    </template>\r\n                </b-table>\r\n\r\n            </form>\r\n            \x3c!-- Info modal --\x3e\r\n            <b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">\r\n                <pre>{{ infoModal.content }}</pre>\r\n            </b-modal>\r\n        </div>\r\n    </div>\r\n</template>\r\n<script>\r\n\r\nimport VeeValidate from "vee-validate";\r\nimport Vue from "vue";\r\nVue.use(VeeValidate, {\r\n    classes: true,\r\n    fieldsBagName: \'veeFields\'\r\n});\r\nimport vSelect from "vue-select";\r\nVue.component("v-select", vSelect);\r\n\r\nimport VueTypeaheadBootstrap from "vue-typeahead-bootstrap";\r\nimport { debounce } from "lodash";\r\n\r\nimport fetchClient from "@/fetchClient";\r\nimport moment from "moment";\r\nimport TumLum from "@/TumLum";\r\nexport default {\r\n    components: {\r\n        VueTypeaheadBootstrap\r\n    },\r\n\r\n    data() {\r\n        return {\r\n            items: [\r\n            ],\r\n            fields: [\r\n                {\r\n                    key: \'Id\',\r\n                    formatter: (value, key, item) => {\r\n                        return value;\r\n                    },\r\n                    sortable: true,\r\n                    thClass: \'text-center\',\r\n                    tdClass: \'text-center align-middle\',\r\n                    thStyle: { width: "8%" },\r\n                },\r\n                { key: \'ClaimValue\', sortable: true, thClass: \'text-center\', tdClass: \'align-middle\', thStyle: { width: "10%" }, },\r\n                {\r\n                    key: \'List\',\r\n                    formatter: (value, key, item) => {\r\n                        let listLabel = []\r\n                        value.forEach(x => {\r\n                            let index = this.comboUser.findIndex(y => y.id == x);\r\n                            if (index >= 0) {\r\n                                listLabel.push(this.comboUser[index].label);\r\n                            }\r\n                        })\r\n                        return listLabel;\r\n                    },\r\n                    sortable: true, thClass: \'text-center\', tdClass: \'align-middle\', thStyle: { width: "70%" },\r\n                },\r\n                {\r\n                    key: \'cmd\',\r\n                    class: \'text-center\',\r\n                    thClass: \'text-center\',\r\n                    tdClass: \'align-middle\',\r\n                    thStyle: { width: "12%" }\r\n                }\r\n            ],\r\n            totalRows: 1,\r\n            currentPage: 1,\r\n            perPage: 5,\r\n            pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],\r\n            sortBy: \'\',\r\n            sortDesc: false,\r\n            sortDirection: \'asc\',\r\n            filter: null,\r\n            filterOn: [],\r\n            infoModal: {\r\n                id: \'info-modal\',\r\n                title: \'\',\r\n                content: \'\'\r\n            },\r\n            sel: {},\r\n            pri: "Id",\r\n            last_page: 0,\r\n            adding: false,\r\n            ListAuto: [],\r\n            Lops: [],\r\n\r\n            url: `/api/HocSinh4`,\r\n            comboUser: []\r\n\r\n        }\r\n    },\r\n\r\n    watch: {\r\n        last_page: function (newValue, oldValue) {\r\n        },\r\n        currentPage: function (val) {\r\n        },\r\n        totalRows: function (newValue, oldValue) {\r\n        }\r\n    },\r\n    computed: {\r\n    },\r\n    mounted() {\r\n    },\r\n    methods: {\r\n        onSelectChange(e) {\r\n        },\r\n        OnSearch: debounce(function (query) {\r\n            fetch(`/api/Ban/AutoComplete?q=${query}`)\r\n                .then((response) => {\r\n                    return response.json();\r\n                })\r\n                .then((data) => {\r\n                    console.log(JSON.stringify(data))\r\n                    this.ListAuto = data.items;\r\n                });\r\n        }, 500),\r\n        onPagingInput() {\r\n        },\r\n        myProvider(ctx) {\r\n            let currentPage = ctx.currentPage;\r\n            let perPage = ctx.perPage;\r\n            let sortBy = ctx.sortBy;\r\n            let sortDesc = ctx.sortDesc;\r\n            let vm = this;\r\n            let url = `/api/NguoiDung5/ClaimUser_GetPage2`;\r\n            url = `${url}?page=${currentPage}&size=${perPage}&sortBy=${sortBy}&sortDesc=${sortDesc}`;\r\n            if (ctx.filter) {\r\n                let filter = ctx.filter;\r\n                url = `${url}&filter=${filter}`;\r\n            }\r\n            return fetchClient.get(url)\r\n                .then(res => {\r\n                    this.GetUserCombo();\r\n                    vm.last_page = res.data.last_page;\r\n                    vm.totalRows = res.data.rowCount;\r\n                    if (this.adding == true) {\r\n                        let r = {};\r\n                        r[this.pri] = 0;\r\n                        r["TenHocSinh"] = "thuc";\r\n                        r["NamSinh"] = new Date();\r\n                        r["LopHocId"] = null;\r\n                        res.data.data.unshift(r);\r\n                    }\r\n                    return vm.mapData(res.data.data); //res.data.data;\r\n                })\r\n        },\r\n        mapData(data) {\r\n            let kq = [];\r\n            data.forEach(obj => {\r\n                let x = {};\r\n                Object.keys(obj).forEach(key => {\r\n                    let k = key;\r\n                    x[k] = obj[key];\r\n                });\r\n                kq.push(x);\r\n            })\r\n            return kq;\r\n        },\r\n        onChangePage() {\r\n            this.sel = {};\r\n            this.adding = false;\r\n        },\r\n        OnAdd() {\r\n            this.adding = true;\r\n            this.$refs.mytable.refresh();\r\n        },\r\n        OnEdit(item) {\r\n            if (JSON.stringify(this.sel) != "{}" || this.adding == true) {\r\n                return;\r\n            }\r\n            this.sel = JSON.parse(JSON.stringify(item));\r\n        },\r\n        onSave(item) {\r\n            this.$validator.validateAll().then((result) => {\r\n                if (!result) {\r\n                    this.toast("Không hợp lệ");\r\n                    return;\r\n                }\r\n                let r = JSON.parse(JSON.stringify(item));\r\n                if (r[this.pri] == 0) {\r\n                    this.Add(r);\r\n                } else {\r\n                    this.Update(r);\r\n                }\r\n            });\r\n        },\r\n        OnCancel(item) {\r\n            if (item[this.pri] != 0) {\r\n                this.doCancel(item);\r\n                this.sel = {};\r\n            } else {\r\n                this.adding = false;\r\n                this.$refs.mytable.refresh();\r\n            }\r\n        },\r\n        OnDel(item) {\r\n            this.Del(item[this.pri]);\r\n        },\r\n        delRow(item) {\r\n            let id = item.id;\r\n            let index = this.items.findIndex(x => x.id == id);\r\n            this.items.splice(index, 1);\r\n        },\r\n        isEditing() {\r\n            return JSON.stringify(this.sel) != "{}"\r\n        },\r\n        isAdded() {\r\n            let kq = false;\r\n            this.items.forEach(x => {\r\n                if (x.id == 0) kq = true;\r\n            })\r\n            return kq;\r\n        },\r\n        doCancel(item) {\r\n            for (let key in item) {\r\n                if (item[key] != this.sel[key]) {\r\n                    item[key] = this.sel[key]\r\n                }\r\n            }\r\n        },\r\n        getLastPage(count) {\r\n            let pageSize = this.perPage;//this.tabulator.getPageSize();\r\n            let du = count % pageSize;\r\n            return du == 0 ? count / pageSize : (count - du) / pageSize + 1;\r\n        },\r\n        gotoPage(page) {\r\n            this.currentPage = page;\r\n            this.$refs.mytable.refresh();\r\n        },\r\n        toast(msg, variant = null) {\r\n            this.$bvToast.toast(msg, {\r\n                title: `Information`,\r\n                variant: variant,\r\n                solid: true,\r\n            });\r\n        },\r\n        async Add(r) {\r\n            return await fetchClient.post(`${this.url}/Add`, r)\r\n                .then(res => {\r\n                    this.toast(`${res.data.msg}`);\r\n                    this.adding = false;\r\n                    this.$refs.mytable.refresh();\r\n                })\r\n                .catch((err) => {\r\n                    TumLum.XuLyErr(err);\r\n                });\r\n        },\r\n        async Update(r) {\r\n            // alert(JSON.stringify(r));\r\n            // return;\r\n            return await fetchClient.post(`/api/NguoiDung5/ClaimUser_update`, r)\r\n                .then(res => {\r\n                    this.toast(`${res.data.msg}`);\r\n                    this.adding = false;\r\n                    this.sel = {};\r\n                    this.$refs.mytable.refresh();\r\n                })\r\n                .catch((err) => {\r\n                    TumLum.XuLyErr(err);\r\n                });\r\n        },\r\n        async Del(id) {\r\n            return await fetchClient.get(`${this.url}/Delete?id=${id}`)\r\n                .then(res => {\r\n                    if (res.data.kq == \'nook\') {\r\n                        this.toast(`${res.data.msg}`);\r\n                        return;\r\n                    }\r\n                    this.toast(`${res.data.msg}`);\r\n                    let lastPage = this.getLastPage(this.totalRows - 1);\r\n                    if (lastPage < this.currentPage) this.currentPage = lastPage;\r\n                    this.$refs.mytable.refresh();\r\n                })\r\n                .catch((err) => {\r\n                    TumLum.XuLyErr(err);\r\n                });\r\n        },\r\n        async getById(id) {\r\n            return await fetchClient.get(`${this.url}/GetById?id=${id}`)\r\n                .then(res => {\r\n                    this.sel = res.data\r\n                })\r\n                .catch((err) => {\r\n                    TumLum.XuLyErr(err);\r\n                });\r\n        },\r\n        async LdsLop() {\r\n            return await fetchClient.get(`/api/LopHoc4/LdsComboItem`)\r\n                .then(res => {\r\n                    this.Lops = res.data.list;\r\n                })\r\n                .catch((err) => {\r\n                    TumLum.XuLyErr(err);\r\n                });\r\n        },\r\n        async GetUserCombo() {\r\n            return await fetchClient.get(`/api/NguoiDung5/GetComboNguoiDung`)\r\n                .then(res => {\r\n                    this.comboUser = res.data;\r\n                })\r\n                .catch((err) => {\r\n                    TumLum.XuLyErr(err);\r\n                });\r\n        },\r\n\r\n        info(item, index, button) {\r\n            this.infoModal.title = `Row index: ${index}`\r\n            this.infoModal.content = JSON.stringify(item, null, 2)\r\n            this.$root.$emit(\'bv::show::modal\', this.infoModal.id, button)\r\n        },\r\n        resetInfoModal() {\r\n            this.infoModal.title = \'\'\r\n            this.infoModal.content = \'\'\r\n        },\r\n        onFiltered(filteredItems) {\r\n            this.totalRows = filteredItems.length\r\n            this.currentPage = 1\r\n        }\r\n    }\r\n}\r\n<\/script>'},53009:function(t,e,r){"use strict";r(38862);e["Z"]={XuLyErr:function(t){var e=JSON.parse(JSON.stringify(t)).status;if(400==e){var r=JSON.parse(JSON.stringify(t.response)).data.message;alert(r)}else t.response?401==t.response.status?alert("Chưa đăng nhập hoặc token hết hạn"):403==t.response.status&&alert("Bạn ko có quyền"):t.request?alert(JSON.stringify(t.request)):t.message&&alert(JSON.stringify(t.message))}}},70790:function(t,e,r){"use strict";var n=r(9669),i=r.n(n),a=function(){var t={baseURL:"",method:"get",headers:{"Content-Type":"application/json;charset=utf-8"}},e=i().create(t);return e.interceptors.request.use((function(t){var e=localStorage.getItem("token");return t.headers.Authorization=e?"Bearer ".concat(e):"",t})),e};e["Z"]=a()}}]);
//# sourceMappingURL=426-legacy.4362e180.js.map