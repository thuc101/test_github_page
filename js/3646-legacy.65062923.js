"use strict";(self["webpackChunkvue_start_1"]=self["webpackChunkvue_start_1"]||[]).push([[3646],{59510:function(e,t,r){r.r(t),r.d(t,{default:function(){return y}});var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"MonHocToan"},[n("raw-loader",{attrs:{mytxt:r(60393).Z}}),n("h1",[e._v("User List")]),n("div",[n("form",{on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.onSave.apply(null,arguments)}}},[n("b-table",{ref:"mytable",attrs:{"thead-class":"myTable",items:e.myProvider,fields:e.fields,"current-page":e.currentPage,"per-page":e.perPage,filter:e.filter,"filter-included-fields":e.filterOn,"sort-by":e.sortBy,"sort-desc":e.sortDesc,"sort-direction":e.sortDirection,stacked:"sm","show-empty":"",small:"",fixed:"",outlined:"",bordered:""},on:{"update:sortBy":function(t){e.sortBy=t},"update:sort-by":function(t){e.sortBy=t},"update:sortDesc":function(t){e.sortDesc=t},"update:sort-desc":function(t){e.sortDesc=t},filtered:e.onFiltered},scopedSlots:e._u([{key:"cell()",fn:function(t){var r=t.value,a=t.item,s=t.field.key;return[e.sel[e.pri]!=a[e.pri]?[0!=a[e.pri]?[s==e.pri?[e._v(" "+e._s(r)+" ")]:e._e(),"FirstName"==s?[e._v(" "+e._s(r)+" ")]:e._e(),"LastName"==s?[e._v(" "+e._s(r)+" ")]:e._e(),"Username"==s?[e._v(" "+e._s(r)+" ")]:e._e(),"Role"==s?[n("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{danger:e.errors.has(s)},attrs:{disabled:!0,multiple:"",name:s,reduce:function(e){return e.id},options:e.roles,"has-error":e.errors.has(s)},model:{value:a[s],callback:function(t){e.$set(a,s,t)},expression:"item[key]"}})]:e._e(),"TrangThai"==s?[n("b-form-checkbox",{staticClass:"my-checkbox",attrs:{disabled:!0,size:"sm",name:s,value:"true","unchecked-value":"false"},model:{value:a[s],callback:function(t){e.$set(a,s,t)},expression:"item[key]"}})]:e._e()]:e._e()]:e._e(),e.sel[e.pri]==a[e.pri]||0==a[e.pri]?["Id"==s?[n("span",[e._v(e._s(r))])]:e._e(),"FirstName"==s?[n("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"ko-hop-le":e.errors.has(s)},attrs:{name:s,placeholder:""},model:{value:a[s],callback:function(t){e.$set(a,s,t)},expression:"item[key]"}})]:e._e(),"LastName"==s?[n("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"ko-hop-le":e.errors.has(s)},attrs:{name:s,placeholder:""},model:{value:a[s],callback:function(t){e.$set(a,s,t)},expression:"item[key]"}})]:e._e(),"Username"==s?[n("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"ko-hop-le":e.errors.has(s)},attrs:{name:s,placeholder:""},model:{value:a[s],callback:function(t){e.$set(a,s,t)},expression:"item[key]"}})]:e._e(),"Role"==s?[n("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{danger:e.errors.has(s)},attrs:{multiple:"",name:s,reduce:function(e){return e.id},options:e.roles,"has-error":e.errors.has(s)},model:{value:a[s],callback:function(t){e.$set(a,s,t)},expression:"item[key]"}})]:e._e(),"TrangThai"==s?[n("b-form-checkbox",{staticClass:"my-checkbox",attrs:{size:"sm",name:s,value:"true","unchecked-value":"false"},model:{value:a[s],callback:function(t){e.$set(a,s,t)},expression:"item[key]"}})]:e._e()]:e._e()]}},{key:"cell(cmd)",fn:function(t){return[0==t.item[e.pri]?[n("b-button",{staticClass:"mr-1",attrs:{size:"sm"},on:{click:function(r){return e.onSave(t.item)}}},[n("b-icon-hand-thumbs-up")],1),n("b-button",{staticClass:"mr-1",attrs:{size:"sm"},on:{click:function(r){return e.OnCancel(t.item)}}},[n("b-icon-file-x")],1)]:[e.sel[e.pri]!=t.item[e.pri]?n("b-button",{staticClass:"mr-1",attrs:{disabled:1==e.adding||1==e.isEditing(),variant:"outline",size:"sm"},on:{click:function(r){return e.OnEdit(t.item)}}},[n("b-icon-pencil-square")],1):e._e(),e.sel[e.pri]!=t.item[e.pri]?n("b-button",{staticClass:"mr-1",attrs:{disabled:1==e.adding||1==e.isEditing(),variant:"outline",size:"sm"},on:{click:function(r){return e.OnDel(t.item)}}},[n("b-icon-trash")],1):e._e(),e.sel[e.pri]==t.item[e.pri]?n("b-button",{staticClass:"mr-1",attrs:{variant:"outline",size:"sm"},on:{click:function(r){return e.onSave(t.item)}}},[n("b-icon-hand-thumbs-up")],1):e._e(),e.sel[e.pri]==t.item[e.pri]?n("b-button",{staticClass:"mr-1",attrs:{variant:"outline",size:"sm"},on:{click:function(r){return e.OnCancel(t.item)}}},[n("b-icon-file-x")],1):e._e()]]}},{key:"bottom-row",fn:function(t){return[n("td",{attrs:{colspan:t.columns}},[n("b-row",[n("b-col",{staticClass:"my-1",attrs:{sm:"6"}},[n("b-form-group",{staticClass:"mb-0",attrs:{label:"Tìm kiếm","label-for":"filter-input","label-cols-sm":"3","label-align-sm":"right","label-size":"sm"}},[n("b-input-group",{attrs:{size:"sm"}},[n("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:"Type to Search"},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}}),n("b-input-group-append",[n("b-button",{attrs:{disabled:!e.filter},on:{click:function(t){e.filter=""}}},[e._v("Clear")])],1)],1)],1)],1),n("b-col",{staticClass:"my-1",attrs:{sm:"6"}},[n("b-form-group",{staticClass:"mb-0",attrs:{label:"Số dòng","label-for":"per-page-select","label-cols-sm":"6","label-cols-md":"4","label-cols-lg":"3","label-align-sm":"right","label-size":"sm"}},[n("b-form-select",{attrs:{id:"per-page-select",options:e.pageOptions,size:"sm"},model:{value:e.perPage,callback:function(t){e.perPage=t},expression:"perPage"}})],1)],1),n("b-col",{staticClass:"my-1 text-right",attrs:{sm:"6"}},[n("span",[e._v("page : "+e._s(e.currentPage)+" / "+e._s(e.last_page)+" of "+e._s(e.totalRows)+" ")]),n("b-button",{staticClass:"mr-1 mb-1",attrs:{disabled:1==e.adding||1==e.isEditing(),size:"sm"},on:{click:e.OnAdd}},[n("b",[e._v("Add")])])],1),n("b-col",{staticClass:"my-1",attrs:{sm:"6"}},[n("b-pagination",{ref:"mypage",attrs:{disabled:1==e.adding||1==e.isEditing(),"total-rows":e.totalRows,"per-page":e.perPage,size:"sm",align:"fill","first-text":"First","prev-text":"Prev","next-text":"Next","last-text":"Last"},on:{change:e.onChangePage,input:e.onPagingInput},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)],1)],1)]}},{key:"row-details",fn:function(t){return[n("b-card",[n("ul",e._l(t.item,(function(t,r){return n("li",{key:r},[e._v(e._s(r)+": "+e._s(t))])})),0)])]}}])})],1),n("b-modal",{attrs:{id:e.infoModal.id,title:e.infoModal.title,"ok-only":""},on:{hide:e.resetInfoModal}},[n("pre",[e._v(e._s(e.infoModal.content))])])],1)],1)},a=[],s=r(77673),i=r(16198),l=(r(41539),r(38862),r(92222),r(57327),r(54747),r(47941),r(74916),r(23123),r(34553),r(40561),r(12954)),o=r(20144),c=r(19938),u=r.n(c),d=r(85890),m=r(96486),p=r(70790),f=(r(30381),r(53009));o["default"].use(l.ZP,{classes:!0,fieldsBagName:"veeFields"}),o["default"].component("v-select",u());var h={components:{VueTypeaheadBootstrap:d.Z},data:function(){return{items:[],fields:[{key:"Id",formatter:function(e,t,r){return e},sortable:!0,thClass:"text-center",tdClass:"text-center align-middle",thStyle:{width:"8%"}},{key:"FirstName",sortable:!0,thClass:"text-center",tdClass:"align-middle",thStyle:{width:"10%"}},{key:"LastName",sortable:!0,thClass:"text-center",tdClass:"align-middle",thStyle:{width:"10%"}},{key:"Username",sortable:!0,thClass:"text-center",tdClass:"align-middle",thStyle:{width:"10%"}},{key:"Role",sortable:!0,thClass:"text-center",tdClass:"align-middle",thStyle:{width:"45%"}},{key:"TrangThai",label:"TT",sortable:!0,thClass:"text-center",tdClass:"align-middle text-center",thStyle:{width:"5%"}},{key:"cmd",class:"text-center",thClass:"text-center",tdClass:"align-middle",thStyle:{width:"12%"}}],totalRows:1,currentPage:1,perPage:5,pageOptions:[5,10,15,{value:100,text:"Show a lot"}],sortBy:"",sortDesc:!1,sortDirection:"asc",filter:null,filterOn:[],infoModal:{id:"info-modal",title:"",content:""},sel:{},pri:"Id",last_page:0,adding:!1,ListAuto:[],Lops:[],url:"/api/NguoiDung5",roles:[]}},watch:{last_page:function(e,t){},currentPage:function(e){},totalRows:function(e,t){}},computed:{},mounted:function(){},methods:{OnSearch:(0,m.debounce)((function(e){var t=this;fetch("/api/Ban/AutoComplete?q=".concat(e)).then((function(e){return e.json()})).then((function(e){console.log(JSON.stringify(e)),t.ListAuto=e.items}))}),500),onPagingInput:function(){},myProvider:function(e){var t=this,r=e.currentPage,n=e.perPage,a=e.sortBy,s=e.sortDesc,i=this,l="".concat(this.url,"/GetPage2");if(l="".concat(l,"?page=").concat(r,"&size=").concat(n,"&sortBy=").concat(a,"&sortDesc=").concat(s),e.filter){var o=e.filter;l="".concat(l,"&filter=").concat(o)}return p.Z.get(l).then((function(e){if(t.LdsRoleComboItem(),i.last_page=e.data.last_page,i.totalRows=e.data.rowCount,1==t.adding){var r={};r[t.pri]=0,r["FirstName"]="first name",r["LastName"]="last name",r["Username"]="user name",r["Password"]="passworld",r["Role"]="role",r["Token"]="token",r["TrangThai"]=1,e.data.data.unshift(r)}return i.mapData(e.data.data)}))},mapData:function(e){var t=[];return e.forEach((function(e){var r={};Object.keys(e).forEach((function(t){var n=t;"Role"!=n?r[n]=e[t]:""==e[t]?r[n]=null:r[n]=e[t].split(",")})),t.push(r)})),t},onChangePage:function(){this.sel={},this.adding=!1},OnAdd:function(){this.adding=!0,this.$refs.mytable.refresh()},OnEdit:function(e){"{}"==JSON.stringify(this.sel)&&1!=this.adding&&this.getById(e[this.pri])},onSave:function(e){var t=this;this.$validator.validateAll().then((function(r){if(r){var n=JSON.parse(JSON.stringify(e)),a="";n.Role.forEach((function(e,t){t<n.Role.length-1?a+="".concat(e,","):a+="".concat(e)})),n.Role=a,0==n[t.pri]?t.Add(n):t.Update(n)}else t.toast("Không hợp lệ")}))},OnCancel:function(e){0!=e[this.pri]?(this.doCancel(e),this.sel={}):(this.adding=!1,this.$refs.mytable.refresh())},OnDel:function(e){this.Del(e[this.pri])},delRow:function(e){var t=e.id,r=this.items.findIndex((function(e){return e.id==t}));this.items.splice(r,1)},isEditing:function(){return"{}"!=JSON.stringify(this.sel)},isAdded:function(){var e=!1;return this.items.forEach((function(t){0==t.id&&(e=!0)})),e},doCancel:function(e){for(var t in e)e[t]!=this.sel[t]&&(e[t]=this.sel[t])},getLastPage:function(e){var t=this.perPage,r=e%t;return 0==r?e/t:(e-r)/t+1},gotoPage:function(e){this.currentPage=e,this.$refs.mytable.refresh()},toast:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.$bvToast.toast(e,{title:"Information",variant:t,solid:!0})},Add:function(e){var t=this;return(0,i.Z)((0,s.Z)().mark((function r(){return(0,s.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,p.Z.post("".concat(t.url,"/Add"),e).then((function(e){t.toast("".concat(e.data.msg)),t.adding=!1,t.$refs.mytable.refresh()})).catch((function(e){f.Z.XuLyErr(e)}));case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r)})))()},Update:function(e){var t=this;return(0,i.Z)((0,s.Z)().mark((function r(){return(0,s.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,p.Z.post("".concat(t.url,"/Update"),e).then((function(e){t.toast("".concat(e.data.msg)),t.adding=!1,t.sel={},t.$refs.mytable.refresh()})).catch((function(e){f.Z.XuLyErr(e)}));case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r)})))()},Del:function(e){var t=this;return(0,i.Z)((0,s.Z)().mark((function r(){return(0,s.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,p.Z.get("".concat(t.url,"/Delete?id=").concat(e)).then((function(e){if("nook"!=e.data.kq){t.toast("".concat(e.data.msg));var r=t.getLastPage(t.totalRows-1);r<t.currentPage&&(t.currentPage=r),t.$refs.mytable.refresh()}else t.toast("".concat(e.data.msg))})).catch((function(e){f.Z.XuLyErr(e)}));case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r)})))()},getById:function(e){var t=this;return(0,i.Z)((0,s.Z)().mark((function r(){return(0,s.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,p.Z.get("".concat(t.url,"/GetById?id=").concat(e)).then((function(e){t.sel=e.data})).catch((function(e){f.Z.XuLyErr(e)}));case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r)})))()},LdsLop:function(){var e=this;return(0,i.Z)((0,s.Z)().mark((function t(){return(0,s.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p.Z.get("/api/LopHoc4/LdsComboItem").then((function(t){e.Lops=t.data.list})).catch((function(e){f.Z.XuLyErr(e)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},LdsRoleComboItem:function(){var e=this;return(0,i.Z)((0,s.Z)().mark((function t(){return(0,s.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p.Z.get("/api/NDRole5/LdsComboItem").then((function(t){e.roles=t.data.list})).catch((function(e){f.Z.XuLyErr(e)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},info:function(e,t,r){this.infoModal.title="Row index: ".concat(t),this.infoModal.content=JSON.stringify(e,null,2),this.$root.$emit("bv::show::modal",this.infoModal.id,r)},resetInfoModal:function(){this.infoModal.title="",this.infoModal.content=""},onFiltered:function(e){this.totalRows=e.length,this.currentPage=1}}},b=h,g=r(1001),v=(0,g.Z)(b,n,a,!1,null,null,null),y=v.exports},60393:function(e,t){t["Z"]='<template>\r\n    <div class="MonHocToan">\r\n        <raw-loader :mytxt="require(\'!raw-loader!./NguoiDung.vue\').default"></raw-loader>\r\n        <h1>User List</h1>\r\n        <div>\r\n            <form @submit.stop.prevent="onSave">\r\n                <b-table thead-class="myTable" ref="mytable" :items="myProvider" :fields="fields"\r\n                    :current-page="currentPage" :per-page="perPage" :filter="filter" :filter-included-fields="filterOn"\r\n                    :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :sort-direction="sortDirection" stacked="sm"\r\n                    show-empty small fixed outlined bordered @filtered="onFiltered">\r\n                    <template v-slot:cell()="{ value, item, field: { key } }">\r\n                        <template v-if="sel[pri] != item[pri]">\r\n                            <template v-if="item[pri] != 0">\r\n                                <template v-if="key == pri">\r\n                                    {{ value }}\r\n                                </template>\r\n                                <template v-if="key == \'FirstName\'">\r\n                                    {{ value }}\r\n                                </template>\r\n                                <template v-if="key == \'LastName\'">\r\n                                    {{ value }}\r\n                                </template>\r\n                                <template v-if="key == \'Username\'">\r\n                                    {{ value }}\r\n                                </template>\r\n                                <template v-if="key == \'Role\'">\r\n                                    <v-select :disabled="true" multiple v-model="item[key]" v-validate="\'required\'" :name="key"\r\n                                    :reduce="(option) => option.id" :options="\r\n                                        roles\r\n                                    " :has-error="errors.has(key)" :class="{ danger: errors.has(key) }" />\r\n                                </template>\r\n                                <template v-if="key == \'TrangThai\'">\r\n                                    <b-form-checkbox :disabled="true" size="sm" class="my-checkbox" v-model="item[key]" \r\n                                        :name="key"\r\n                                        value=true\r\n                                        unchecked-value=false>\r\n                                    </b-form-checkbox>\r\n                                </template>\r\n                            </template>\r\n                        </template>\r\n                        <template v-if="(sel[pri] == item[pri] || item[pri] == 0)">\r\n                            <template v-if="key == \'Id\'">\r\n                                <span>{{ value }}</span>\r\n                            </template>\r\n                            <template v-if="key == \'FirstName\'">\r\n                                <b-form-input v-model="item[key]" :name="key" v-validate="\'required\'" placeholder=""\r\n                                    :class="{ \'ko-hop-le\': errors.has(key) }">\r\n                                </b-form-input>\r\n                            </template>\r\n                            <template v-if="key == \'LastName\'">\r\n                                <b-form-input v-model="item[key]" :name="key" v-validate="\'required\'" placeholder=""\r\n                                    :class="{ \'ko-hop-le\': errors.has(key) }">\r\n                                </b-form-input>\r\n                            </template>\r\n                            <template v-if="key == \'Username\'">\r\n                                <b-form-input v-model="item[key]" :name="key" v-validate="\'required\'" placeholder=""\r\n                                    :class="{ \'ko-hop-le\': errors.has(key) }">\r\n                                </b-form-input>\r\n                            </template>\r\n                            <template v-if="key == \'Role\'">\r\n                                <v-select multiple v-model="item[key]" v-validate="\'required\'" :name="key"\r\n                                    :reduce="(option) => option.id" :options="\r\n                                        roles\r\n                                    " :has-error="errors.has(key)" :class="{ danger: errors.has(key) }" />\r\n                            </template>\r\n                            <template v-if="key == \'TrangThai\'">\r\n                                <b-form-checkbox size="sm" class="my-checkbox" v-model="item[key]" \r\n                                    :name="key"\r\n                                    value=true\r\n                                    unchecked-value=false>\r\n                                </b-form-checkbox>\r\n                            </template>\r\n\r\n\r\n                        </template>\r\n                    </template>\r\n                    <template #cell(cmd)="row">\r\n                        <template v-if="row.item[pri] == 0">\r\n                            <b-button class="mr-1" size="sm" @click="onSave(row.item)">\r\n                                <b-icon-hand-thumbs-up></b-icon-hand-thumbs-up>\r\n                            </b-button>\r\n                            <b-button class="mr-1" size="sm" @click="OnCancel(row.item)">\r\n                                <b-icon-file-x></b-icon-file-x>\r\n                            </b-button>\r\n                        </template>\r\n                        <template v-else>\r\n                            <b-button :disabled="adding == true || isEditing() == true" variant="outline" class="mr-1"\r\n                                v-if="sel[pri] != row.item[pri]" size="sm" @click="OnEdit(row.item)">\r\n                                <b-icon-pencil-square></b-icon-pencil-square>\r\n                            </b-button>\r\n                            <b-button :disabled="adding == true || isEditing() == true" variant="outline" class="mr-1"\r\n                                v-if="sel[pri] != row.item[pri]" size="sm" @click="OnDel(row.item)">\r\n                                <b-icon-trash></b-icon-trash>\r\n                            </b-button>\r\n                            <b-button variant="outline" class="mr-1" v-if="sel[pri] == row.item[pri]" size="sm"\r\n                                @click="onSave(row.item)">\r\n                                <b-icon-hand-thumbs-up></b-icon-hand-thumbs-up>\r\n                            </b-button>\r\n                            <b-button variant="outline" class="mr-1" v-if="sel[pri] == row.item[pri]" size="sm"\r\n                                @click="OnCancel(row.item)">\r\n                                <b-icon-file-x></b-icon-file-x>\r\n                            </b-button>\r\n                        </template>\r\n                    </template>\r\n\r\n                    <template #bottom-row="data">\r\n                        <td :colspan="data.columns">\r\n                            <b-row>\r\n                                <b-col sm="6" class="my-1">\r\n                                    <b-form-group label="Tìm kiếm" label-for="filter-input" label-cols-sm="3"\r\n                                        label-align-sm="right" label-size="sm" class="mb-0">\r\n                                        <b-input-group size="sm">\r\n                                            <b-form-input id="filter-input" v-model="filter" type="search"\r\n                                                placeholder="Type to Search">\r\n                                            </b-form-input>\r\n\r\n                                            <b-input-group-append>\r\n                                                <b-button :disabled="!filter" @click="filter = \'\'">Clear</b-button>\r\n                                            </b-input-group-append>\r\n                                        </b-input-group>\r\n                                    </b-form-group>\r\n                                </b-col>\r\n                                <b-col sm="6" class="my-1">\r\n                                    <b-form-group label="Số dòng" label-for="per-page-select" label-cols-sm="6"\r\n                                        label-cols-md="4" label-cols-lg="3" label-align-sm="right" label-size="sm"\r\n                                        class="mb-0">\r\n                                        <b-form-select id="per-page-select" v-model="perPage" :options="pageOptions"\r\n                                            size="sm">\r\n                                        </b-form-select>\r\n                                    </b-form-group>\r\n                                </b-col>\r\n\r\n                                <b-col sm="6" class="my-1 text-right">\r\n                                    <span>page : {{ currentPage }} / {{ last_page }} of {{ totalRows }} </span>\r\n                                    <b-button :disabled="adding == true || isEditing() == true" class="mr-1 mb-1" size="sm"\r\n                                        @click="OnAdd">\r\n                                        <b>Add</b></b-button>\r\n                                </b-col>\r\n                                <b-col sm="6" class="my-1">\r\n                                    <b-pagination :disabled="adding == true || isEditing() == true" ref="mypage"\r\n                                        v-model="currentPage" :total-rows="totalRows" :per-page="perPage" size="sm"\r\n                                        align="fill" @change="onChangePage" @input="onPagingInput" first-text="First"\r\n                                        prev-text="Prev" next-text="Next" last-text="Last">\r\n                                    </b-pagination>\r\n                                </b-col>\r\n                            </b-row>\r\n\r\n                        </td>\r\n                    </template>\r\n\r\n                    <template #row-details="row">\r\n                        <b-card>\r\n                            <ul>\r\n                                <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>\r\n                            </ul>\r\n                        </b-card>\r\n                    </template>\r\n                </b-table>\r\n\r\n            </form>\r\n            \x3c!-- Info modal --\x3e\r\n            <b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">\r\n                <pre>{{ infoModal.content }}</pre>\r\n            </b-modal>\r\n        </div>\r\n    </div>\r\n</template>\r\n<script>\r\n\r\nimport VeeValidate from "vee-validate";\r\nimport Vue from "vue";\r\nVue.use(VeeValidate, {\r\n    classes: true,\r\n    fieldsBagName: \'veeFields\'\r\n});\r\nimport vSelect from "vue-select";\r\nVue.component("v-select", vSelect);\r\n\r\nimport VueTypeaheadBootstrap from "vue-typeahead-bootstrap";\r\nimport { debounce } from "lodash";\r\n\r\nimport fetchClient from "@/fetchClient";\r\nimport moment from "moment";\r\nimport TumLum from "@/TumLum";\r\nexport default {\r\n    components: {\r\n        VueTypeaheadBootstrap\r\n    },\r\n\r\n    data() {\r\n        return {\r\n            items: [\r\n            ],\r\n            fields: [\r\n                {\r\n                    key: \'Id\',\r\n                    formatter: (value, key, item) => {\r\n                        return value;\r\n                    },\r\n                    sortable: true,\r\n                    thClass: \'text-center\',\r\n                    tdClass: \'text-center align-middle\',\r\n                    thStyle: { width: "8%" },\r\n                },\r\n                //{ key: \'TenHocSinh\', sortable: true, thClass: \'text-center\', tdClass: \'align-middle\', thStyle: { width: "80%" }, },\r\n                { key: \'FirstName\', sortable: true, thClass: \'text-center\', tdClass: \'align-middle\', thStyle: { width: "10%" }, },\r\n                { key: \'LastName\', sortable: true, thClass: \'text-center\', tdClass: \'align-middle\', thStyle: { width: "10%" }, },\r\n                { key: \'Username\', sortable: true, thClass: \'text-center\', tdClass: \'align-middle\', thStyle: { width: "10%" }, },\r\n                { key: \'Role\', sortable: true, thClass: \'text-center\', tdClass: \'align-middle\', thStyle: { width: "45%" }, },\r\n                { key: \'TrangThai\', label: "TT", sortable: true, thClass: \'text-center\', tdClass: \'align-middle text-center\', thStyle: { width: "5%" }, },\r\n\r\n                {\r\n                    key: \'cmd\',\r\n                    class: \'text-center\',\r\n                    thClass: \'text-center\',\r\n                    tdClass: \'align-middle\',\r\n                    thStyle: { width: "12%" }\r\n                }\r\n            ],\r\n            totalRows: 1,\r\n            currentPage: 1,\r\n            perPage: 5,\r\n            pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],\r\n            sortBy: \'\',\r\n            sortDesc: false,\r\n            sortDirection: \'asc\',\r\n            filter: null,\r\n            filterOn: [],\r\n            infoModal: {\r\n                id: \'info-modal\',\r\n                title: \'\',\r\n                content: \'\'\r\n            },\r\n            sel: {},\r\n            pri: "Id",\r\n            last_page: 0,\r\n            adding: false,\r\n            ListAuto: [],\r\n            Lops: [],\r\n\r\n            url: `/api/NguoiDung5`,\r\n            roles: [],\r\n        }\r\n    },\r\n\r\n    watch: {\r\n        last_page: function (newValue, oldValue) {\r\n        },\r\n        currentPage: function (val) {\r\n        },\r\n        totalRows: function (newValue, oldValue) {\r\n        }\r\n    },\r\n    computed: {\r\n    },\r\n    mounted() {\r\n    },\r\n    methods: {\r\n        OnSearch: debounce(function (query) {\r\n            fetch(`/api/Ban/AutoComplete?q=${query}`)\r\n                .then((response) => {\r\n                    return response.json();\r\n                })\r\n                .then((data) => {\r\n                    console.log(JSON.stringify(data))\r\n                    this.ListAuto = data.items;\r\n                });\r\n        }, 500),\r\n        onPagingInput() {\r\n        },\r\n        myProvider(ctx) {\r\n            let currentPage = ctx.currentPage;\r\n            let perPage = ctx.perPage;\r\n            let sortBy = ctx.sortBy;\r\n            let sortDesc = ctx.sortDesc;\r\n            let vm = this;\r\n            let url = `${this.url}/GetPage2`;\r\n            url = `${url}?page=${currentPage}&size=${perPage}&sortBy=${sortBy}&sortDesc=${sortDesc}`;\r\n            if (ctx.filter) {\r\n                let filter = ctx.filter;\r\n                url = `${url}&filter=${filter}`;\r\n            }\r\n            return fetchClient.get(url)\r\n                .then(res => {\r\n                    this.LdsRoleComboItem();\r\n                    //this.LdsLop();\r\n                    //alert(JSON.stringify(res));\r\n\r\n                    /*{"data":{"last_page":1,"rowCount":5,\r\n                        "data":[{\r\n                            "Id":1,\r\n                            "FirstName":"Tấn Thức",\r\n                            "LastName":"Nguyễn",\r\n                            "Username":"admin",\r\n                            "Password":"21232f297a57a5a743894a0e4a801fc3",\r\n                            "Role":"Admin,User",\r\n                            "Token":null,\r\n                            "TrangThai":true\r\n                    */\r\n                    vm.last_page = res.data.last_page;\r\n                    vm.totalRows = res.data.rowCount;\r\n                    if (this.adding == true) {\r\n                        /*\r\n                        let r2={}\r\n                        r2[this.pri]=0;\r\n                        this.fields.forEach(element => {\r\n                            if(element.key!=\'cmd\' && element.key!=this.pri) r2[element.key]="xyz"\r\n                        });\r\n                        alert(JSON.stringify(r2));\r\n                        {"Id":0,"TenHocSinh":"xyz","NamSinh":"xyz","LopHocId":"xyz"}\r\n                        */\r\n                        let r = {};\r\n                        r[this.pri] = 0;\r\n                        r["FirstName"] = "first name";\r\n                        r["LastName"] = "last name";\r\n                        r["Username"] = "user name";\r\n                        r["Password"] = "passworld";\r\n                        r["Role"] = "role";\r\n                        r["Token"] = "token";\r\n                        r["TrangThai"] = 1;\r\n                        res.data.data.unshift(r);\r\n                    }\r\n                    return vm.mapData(res.data.data); //res.data.data;\r\n                })\r\n        },\r\n        mapData(data) {\r\n            let kq = [];\r\n            data.forEach(obj => {\r\n                let x = {};\r\n                Object.keys(obj).forEach(key => {\r\n                    let k = key;\r\n                    if (k != "Role") {\r\n                        x[k] = obj[key];\r\n                    } else {\r\n                        if (obj[key] == "") {\r\n                            x[k] = null;\r\n                        } else {\r\n                            x[k] = obj[key].split(",");\r\n                            //x[k]="xyz";\r\n                        }\r\n                    }\r\n                });\r\n                kq.push(x);\r\n            })\r\n            return kq;\r\n        },\r\n        onChangePage() {\r\n            this.sel = {};\r\n            this.adding = false;\r\n        },\r\n        OnAdd() {\r\n            this.adding = true;\r\n            this.$refs.mytable.refresh();\r\n        },\r\n        OnEdit(item) {\r\n            if (JSON.stringify(this.sel) != "{}" || this.adding == true) {\r\n                return;\r\n            }\r\n            //this.sel = JSON.parse(JSON.stringify(item));\r\n            this.getById(item[this.pri]);\r\n\r\n            return;\r\n            this.getById(item[this.pri]).then(res => {\r\n                this.sel = res.data;\r\n            })\r\n        },\r\n        onSave(item) {\r\n            this.$validator.validateAll().then((result) => {\r\n                if (!result) {\r\n                    this.toast("Không hợp lệ");\r\n                    return;\r\n                }\r\n                let r = JSON.parse(JSON.stringify(item));\r\n                let roleStr = "";\r\n                r.Role.forEach((v, k) => {\r\n                    if (k < r.Role.length - 1) {\r\n                        roleStr += `${v},`;\r\n                    } else {\r\n                        roleStr += `${v}`;\r\n                    }\r\n                })\r\n                r.Role = roleStr;\r\n                if (r[this.pri] == 0) {\r\n                    this.Add(r);\r\n                } else {\r\n                    this.Update(r);\r\n                }\r\n            });\r\n        },\r\n        OnCancel(item) {\r\n            if (item[this.pri] != 0) {\r\n                this.doCancel(item);\r\n                this.sel = {};\r\n            } else {\r\n                this.adding = false;\r\n                this.$refs.mytable.refresh();\r\n            }\r\n        },\r\n        OnDel(item) {\r\n            this.Del(item[this.pri]);\r\n        },\r\n        delRow(item) {\r\n            let id = item.id;\r\n            let index = this.items.findIndex(x => x.id == id);\r\n            this.items.splice(index, 1);\r\n        },\r\n        isEditing() {\r\n            return JSON.stringify(this.sel) != "{}"\r\n        },\r\n        isAdded() {\r\n            let kq = false;\r\n            this.items.forEach(x => {\r\n                if (x.id == 0) kq = true;\r\n            })\r\n            return kq;\r\n        },\r\n        doCancel(item) {\r\n            for (let key in item) {\r\n                if (item[key] != this.sel[key]) {\r\n                    item[key] = this.sel[key]\r\n                }\r\n            }\r\n        },\r\n        getLastPage(count) {\r\n            let pageSize = this.perPage;//this.tabulator.getPageSize();\r\n            let du = count % pageSize;\r\n            return du == 0 ? count / pageSize : (count - du) / pageSize + 1;\r\n        },\r\n        gotoPage(page) {\r\n            this.currentPage = page;\r\n            this.$refs.mytable.refresh();\r\n        },\r\n        toast(msg, variant = null) {\r\n            this.$bvToast.toast(msg, {\r\n                title: `Information`,\r\n                variant: variant,\r\n                solid: true,\r\n            });\r\n        },\r\n        async Add(r) {\r\n            return await fetchClient.post(`${this.url}/Add`, r)\r\n                .then(res => {\r\n                    this.toast(`${res.data.msg}`);\r\n                    this.adding = false;\r\n                    this.$refs.mytable.refresh();\r\n                })\r\n                .catch((err) => {\r\n                    TumLum.XuLyErr(err);\r\n                });\r\n        },\r\n        async Update(r) {\r\n            return await fetchClient.post(`${this.url}/Update`, r)\r\n                .then(res => {\r\n                    this.toast(`${res.data.msg}`);\r\n                    this.adding = false;\r\n                    this.sel = {};\r\n                    this.$refs.mytable.refresh();\r\n                })\r\n                .catch((err) => {\r\n                    TumLum.XuLyErr(err);\r\n                });\r\n        },\r\n        async Del(id) {\r\n            return await fetchClient.get(`${this.url}/Delete?id=${id}`)\r\n                .then(res => {\r\n                    if (res.data.kq == \'nook\') {\r\n                        this.toast(`${res.data.msg}`);\r\n                        return;\r\n                    }\r\n                    this.toast(`${res.data.msg}`);\r\n                    let lastPage = this.getLastPage(this.totalRows - 1);\r\n                    if (lastPage < this.currentPage) this.currentPage = lastPage;\r\n                    this.$refs.mytable.refresh();\r\n                })\r\n                .catch((err) => {\r\n                    TumLum.XuLyErr(err);\r\n                });\r\n        },\r\n        async getById(id) {\r\n            return await fetchClient.get(`${this.url}/GetById?id=${id}`)\r\n                .then(res => {\r\n                    this.sel = res.data\r\n                })\r\n                .catch((err) => {\r\n                    TumLum.XuLyErr(err);\r\n                });\r\n        },\r\n        async LdsLop() {\r\n            return await fetchClient.get(`/api/LopHoc4/LdsComboItem`)\r\n                .then(res => {\r\n                    this.Lops = res.data.list;\r\n                })\r\n                .catch((err) => {\r\n                    TumLum.XuLyErr(err);\r\n                });\r\n        },\r\n        async LdsRoleComboItem() {\r\n            return await fetchClient.get(`/api/NDRole5/LdsComboItem`)\r\n                .then(res => {\r\n                    this.roles = res.data.list;\r\n                })\r\n                .catch((err) => {\r\n                    TumLum.XuLyErr(err);\r\n                });\r\n        },\r\n        //LdsComboItem\r\n        info(item, index, button) {\r\n            this.infoModal.title = `Row index: ${index}`\r\n            this.infoModal.content = JSON.stringify(item, null, 2)\r\n            this.$root.$emit(\'bv::show::modal\', this.infoModal.id, button)\r\n        },\r\n        resetInfoModal() {\r\n            this.infoModal.title = \'\'\r\n            this.infoModal.content = \'\'\r\n        },\r\n        onFiltered(filteredItems) {\r\n            this.totalRows = filteredItems.length\r\n            this.currentPage = 1\r\n        }\r\n    }\r\n}\r\n<\/script>'},53009:function(e,t,r){r(38862);t["Z"]={XuLyErr:function(e){var t=JSON.parse(JSON.stringify(e)).status;if(400==t){var r=JSON.parse(JSON.stringify(e.response)).data.message;alert(r)}else e.response?401==e.response.status?alert("Chưa đăng nhập hoặc token hết hạn"):403==e.response.status&&alert("Bạn ko có quyền"):e.request?alert(JSON.stringify(e.request)):e.message&&alert(JSON.stringify(e.message))}}},70790:function(e,t,r){var n=r(9669),a=r.n(n),s=function(){var e={baseURL:"",method:"get",headers:{"Content-Type":"application/json;charset=utf-8"}},t=a().create(e);return t.interceptors.request.use((function(e){var t=localStorage.getItem("token");return e.headers.Authorization=t?"Bearer ".concat(t):"",e})),t};t["Z"]=s()}}]);
//# sourceMappingURL=3646-legacy.65062923.js.map