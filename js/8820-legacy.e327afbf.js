(self["webpackChunkvue_start_1"]=self["webpackChunkvue_start_1"]||[]).push([[8820],{28820:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return tt}});var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-container",{attrs:{fluid:""}},[i("raw-loader",{attrs:{mytxt:n(86552).Z}}),i("form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.onSave.apply(null,arguments)}}},[i("b-table",{ref:"mytable",attrs:{items:t.items,fields:t.fields,"current-page":t.currentPage,"per-page":t.perPage,filter:t.filter,"filter-included-fields":t.filterOn,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"sort-direction":t.sortDirection,stacked:"md","show-empty":"",small:"",fixed:"",outlined:"",bordered:""},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell()",fn:function(e){var n=e.value,r=e.item,s=e.field.key;return[t.sel[t.pri]!=r[t.pri]?[0!=r[t.pri]?[s==t.pri?[t._v(" "+t._s(n)+" ")]:t._e(),"name"==s?[t._v(" "+t._s(n)+" ")]:t._e(),"maso"==s?[t._v(" "+t._s(n)+" ")]:t._e()]:t._e()]:t._e(),t.sel[t.pri]==r[t.pri]||0==r[t.pri]?[s==t.pri?[i("span",[t._v(t._s(n))])]:t._e(),"name"==s?[i("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"ko-hop-le":t.errors.has(s)},attrs:{autocomplete:"off",name:s,placeholder:""},model:{value:r[s],callback:function(e){t.$set(r,s,e)},expression:"item[key]"}})]:t._e(),"maso"==s?[i("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|length:7",expression:"'required|length:7'"},{name:"mask",rawName:"v-mask",value:"RD-####",expression:" 'RD-####' "}],class:{"ko-hop-le":t.errors.has(s)},attrs:{autocomplete:"off",name:s,placeholder:"RD-####"},model:{value:r[s],callback:function(e){t.$set(r,s,e)},expression:"item[key]"}})]:t._e()]:t._e()]}},{key:"cell(cmd)",fn:function(e){return[0==e.item[t.pri]?[i("b-button",{staticClass:"mr-1",attrs:{variant:"outline",size:"sm"},on:{click:function(n){return t.onSave(e.item)}}},[i("b-icon-hand-thumbs-up")],1),i("b-button",{staticClass:"mr-1",attrs:{variant:"outline",size:"sm"},on:{click:function(n){return t.OnCancel(e.item)}}},[i("b-icon-file-x")],1)]:[t.sel[t.pri]!=e.item[t.pri]?i("b-button",{staticClass:"mr-1",attrs:{variant:"outline",disabled:1==t.isAdded(),size:"sm"},on:{click:function(n){return t.OnEdit(e.item)}}},[i("b-icon-pencil-square")],1):t._e(),t.sel[t.pri]!=e.item[t.pri]?i("b-button",{staticClass:"mr-1",attrs:{variant:"outline",disabled:1==t.isAdded(),size:"sm"},on:{click:function(n){return t.OnDel(e.item)}}},[i("b-icon-trash")],1):t._e(),t.sel[t.pri]==e.item[t.pri]?i("b-button",{staticClass:"mr-1",attrs:{variant:"outline",size:"sm"},on:{click:function(n){return t.onSave(e.item)}}},[i("b-icon-hand-thumbs-up")],1):t._e(),t.sel[t.pri]==e.item[t.pri]?i("b-button",{staticClass:"mr-1",attrs:{variant:"outline",size:"sm"},on:{click:function(n){return t.OnCancel(e.item)}}},[i("b-icon-file-x")],1):t._e()]]}},{key:"bottom-row",fn:function(e){return[i("td",{attrs:{colspan:e.columns}},[i("b-row",[i("b-col",{staticClass:"my-1",attrs:{sm:"6"}},[i("b-form-group",{staticClass:"mb-0",attrs:{label:"Filter","label-for":"filter-input","label-cols-sm":"3","label-align-sm":"right","label-size":"sm"}},[i("b-input-group",{attrs:{size:"sm"}},[i("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:"Type to Search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),i("b-input-group-append",[i("b-button",{attrs:{disabled:!t.filter},on:{click:function(e){t.filter=""}}},[t._v("Clear")])],1)],1)],1)],1),i("b-col",{staticClass:"my-1",attrs:{sm:"6"}},[i("b-form-group",{staticClass:"mb-0",attrs:{label:"Per page","label-for":"per-page-select","label-cols-sm":"6","label-cols-md":"4","label-cols-lg":"3","label-align-sm":"right","label-size":"sm"}},[i("b-form-select",{attrs:{id:"per-page-select",options:t.pageOptions,size:"sm"},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1),i("b-col",{staticClass:"my-1 text-right",attrs:{sm:"6"}},[t._v(" page :"+t._s(t.currentPage)+" / "+t._s(t.getLastPage(t.totalRows))+" of "+t._s(t.totalRows)+" "),i("b-button",{attrs:{disabled:1==t.adding||1==t.isEditing(),size:"sm"},on:{click:t.OnAdd}},[i("b",[t._v("Add")])])],1),i("b-col",{staticClass:"my-1",attrs:{sm:"6"}},[i("b-pagination",{staticClass:"my-0",attrs:{disabled:1==t.adding||1==t.isEditing(),"total-rows":t.totalRows,"per-page":t.perPage,align:"fill",size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)],1)]}}])})],1),i("b-modal",{attrs:{id:t.infoModal.id,title:t.infoModal.title,"ok-only":""},on:{hide:t.resetInfoModal}},[i("pre",[t._v(t._s(t.infoModal.content))])])],1)},r=[],s=(n(41539),n(39714),n(21249),n(57327),n(54747),n(38862),n(34553),n(40561),n(12954)),a=n(20144),o=(n(30381),n(19938)),l=n.n(o);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t){return f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var m="_",p="function",h=[];function b(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m;if(!g(t))throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");if(-1!==t.indexOf(e))throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+"The placeholder character that was received is: ".concat(JSON.stringify(e),"\n\n")+"The mask that was received is: ".concat(JSON.stringify(t)));return t.map((function(t){return t instanceof RegExp?e:t})).join("")}function g(t){return Array.isArray&&Array.isArray(t)||t instanceof Array}var v="[]";function y(t){var e,n=[];while(e=t.indexOf(v),-1!==e)n.push(e),t.splice(e,1);return{maskWithoutCaretTraps:t,indexes:n}}var x=[],k="";function w(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:x,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!g(e)){if(f(e)!==p)throw new Error("Text-mask:conformToMask; The mask property must be an array.");e=e(t,n),e=y(e).maskWithoutCaretTraps}var i=n.guide,r=void 0===i||i,s=n.previousConformedValue,a=void 0===s?k:s,o=n.placeholderChar,l=void 0===o?m:o,c=n.placeholder,u=void 0===c?b(e,l):c,d=n.currentCaretPosition,h=n.keepCharPositions,v=!1===r&&void 0!==a,w=t.length,O=a.length,P=u.length,S=e.length,C=w-O,R=C>0,E=d+(R?-C:0),_=E+Math.abs(C);if(!0===h&&!R){for(var M=k,z=E;z<_;z++)u[z]===l&&(M+=l);t=t.slice(0,E)+M+t.slice(E,w)}for(var D=t.split(k).map((function(t,e){return{char:t,isNew:e>=E&&e<_}})),A=w-1;A>=0;A--){var N=D[A].char;if(N!==l){var I=A>=E&&O===S;N===u[I?A-C:A]&&D.splice(A,1)}}var $=k,T=!1;t:for(var V=0;V<P;V++){var j=u[V];if(j===l){if(D.length>0)while(D.length>0){var J=D.shift(),q=J.char,B=J.isNew;if(q===l&&!0!==v){$+=l;continue t}if(e[V].test(q)){if(!0===h&&!1!==B&&a!==k&&!1!==r&&R){for(var L=D.length,F=null,U=0;U<L;U++){var Z=D[U];if(Z.char!==l&&!1===Z.isNew)break;if(Z.char===l){F=U;break}}null!==F?($+=q,D.splice(F,1)):V--}else $+=q;continue t}T=!0}!1===v&&($+=u.substr(V,P));break}$+=j}if(v&&!1===R){for(var H=null,K=0;K<$.length;K++)u[K]===l&&(H=K);$=null!==H?$.substr(0,H+1):k}return{conformedValue:$,meta:{someCharsRejected:T}}}var O={__nextCharOptional__:!0},P={"#":/\d/,A:/[a-z]/i,N:/[a-z0-9]/i,"?":O,X:/./},S=function(t){var e=t.lastIndexOf("/");return new RegExp(t.slice(1,e),t.slice(e+1))},C=function(t){return S(t.toString().replace(/.(\/)[gmiyus]{0,6}$/,(function(t){return t.replace("/","?/")})))},R=function(t){return"[\\^$.|?*+()".indexOf(t)>-1?"\\".concat(t):t},E=function(t){return new RegExp("/[".concat(R(t),"]/"))},_=function(t){return t instanceof RegExp},M=function(t){return _(t)?t:E(t)};function z(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:P;return t.map((function(t,n,i){var r=e[t]||t,s=i[n-1],a=e[s]||s;return r===O?null:a===O?C(M(r)):r})).filter(Boolean)}function D(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:P;return z(t.split(""),e)}function A(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:P,n=t.map((function(t){return t instanceof RegExp?t:"string"===typeof t?t.split(""):null})).filter(Boolean).reduce((function(t,e){return t.concat(e)}),[]);return z(n,e)}var N=function(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)},I=function(t){return t instanceof HTMLInputElement?t:t.querySelector("input")||t},$=function(t){return"function"===typeof t},T=function(t){return"string"===typeof t},V=function(t){return t instanceof RegExp};function j(t,e){return Array.isArray(t)?A(t,e):$(t)?t:T(t)&&t.length>0?D(t,e):t}function J(){var t=new Map,e={previousValue:"",mask:[]};function n(n){return t.get(n)||u({},e)}function i(e,i){t.set(e,u(u({},n(e)),i))}function r(e){t.delete(e)}return{partiallyUpdate:i,remove:r,get:n}}function q(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:P;return null===t||Array.isArray(t)||"object"!==f(t)?e:Object.keys(t).reduce((function(e,n){var i=t[n];return null===i||i instanceof RegExp?u(u({},e),{},d({},n,i)):e}),e)}var B=J();function L(t){N(t,"input")}function F(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t.value,i=B.get(t),r=i.previousValue,s=i.mask,a=n!==r,o=n.length>r.length,l=n&&a&&o;if((e||l)&&s){var c=w(n,s,{guide:!1}),u=c.conformedValue;t.value=u,L(t)}B.partiallyUpdate(t,{previousValue:n})}function U(t,e,n){var i=j(e,n);B.partiallyUpdate(t,{mask:i})}function Z(t){var e=Array.isArray(t)?t:[t],n=e.filter((function(t){return T(t)||V(t)}));return n.toString()}function H(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=q(t&&t.placeholders);return{bind:function(t,n){var i=n.value;t=I(t),U(t,i,e),F(t)},componentUpdated:function(t,n){var i=n.value,r=n.oldValue;t=I(t);var s=$(i)||Z(r)!==Z(i);s&&U(t,i,e),F(t,s)},unbind:function(t){t=I(t),B.remove(t)}}}H();function K(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=q(t&&t.placeholders);return function(t,n){if(!T(t)&&!Number.isFinite(t))return t;var i=j(n,e),r=w("".concat(t),i,{guide:!1}),s=r.conformedValue;return s}}K();var W=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.directive("mask",H(e)),t.filter("VMask",K(e))};a["default"].use(s.ZP,{classes:!0,fieldsBagName:"veeFields"}),a["default"].component("v-select",l()),a["default"].use(W);var X={data:function(){return{items:[],fields:[{key:"id",formatter:function(t,e,n){var i=t.toString();return i.length<4?i:i.substring(0,4)+"..."},sortable:!0,thClass:"text-center",tdClass:"text-center align-middle",thStyle:{width:"10%"}},{key:"name",sortable:!0,thClass:"text-center",tdClass:"align-middle",thStyle:{width:"60%"}},{key:"maso",sortable:!0,thClass:"text-center",tdClass:"align-middle",thStyle:{width:"20%"}},{key:"cmd",class:"text-center",thClass:"text-center",tdClass:"align-middle",thStyle:{width:"10%"}}],totalRows:1,currentPage:1,perPage:3,pageOptions:[3,5,10,15,{value:100,text:"Show a lot"}],sortBy:"",sortDesc:!1,sortDirection:"asc",filter:null,filterOn:[],infoModal:{id:"info-modal",title:"",content:""},sel:{},pri:"id",adding:!1,lastPage:0}},computed:{sortOptions:function(){return this.fields.filter((function(t){return t.sortable})).map((function(t){return{text:t.label,value:t.key}}))}},mounted:function(){var t=[{id:1,name:"thuc 101",maso:"RD-0001"},{id:2,name:"thuc 102",maso:"RD-0002"}];this.items=t,this.totalRows=this.items.length,this.lastPage=this.getLastPage(this.totalRows)},methods:{createId:function(){var t=this,e=0;return this.items.forEach((function(n){n[t.pri]>e&&(e=n[t.pri])})),e+1},onSave:function(t){var e=this;this.$validator.validateAll().then((function(n){if(n){var i=JSON.parse(JSON.stringify(t));if(0==i[e.pri]){var r=e.items.findIndex((function(t){return t[e.pri]==i[e.pri]}));i[e.pri]=e.createId(),e.$set(e.items,r,i),e.adding=!1,e.$refs.mytable.refresh()}else{var s=e.items.findIndex((function(t){return t[e.pri]==i[e.pri]}));e.$set(e.items,s,i),e.sel={}}}else e.toast("Không hợp lệ")}))},OnDel:function(t){this.delRow(t)},delRow:function(t){var e=this,n=t[this.pri],i=this.items.findIndex((function(t){return t[e.pri]==n}));this.items.splice(i,1),this.totalRows=this.items.length,this.lastPage=this.getLastPage(this.totalRows)},doCancel:function(t){for(var e in t)t[e]!=this.sel[e]&&(t[e]=this.sel[e])},isAdded:function(){var t=this,e=!1;return this.items.forEach((function(n){0==n[t.pri]&&(e=!0)})),e},OnEdit:function(t){"{}"==JSON.stringify(this.sel)&&(this.sel=JSON.parse(JSON.stringify(t)))},OnCancel:function(t){var e=this;if(0==t[this.pri]){var n=this.items.findIndex((function(n){return n[e.pri]==t[e.pri]}));this.items.splice(n,1),this.adding=!1,this.$refs.mytable.refresh()}else this.doCancel(t),this.sel={}},OnAdd:function(){var t={id:0,name:"Thức",maso:""};this.items.unshift(t),this.adding=!0,this.currentPage=1,this.totalRows=this.items.length,this.$refs.mytable.refresh()},isEditing:function(){return"{}"!=JSON.stringify(this.sel)},getLastPage:function(t){var e=this.perPage,n=t%e;return 0==n?t/e:(t-n)/e+1},info:function(t,e,n){this.infoModal.title="Row index: ".concat(e),this.infoModal.content=JSON.stringify(t,null,2),this.$root.$emit("bv::show::modal",this.infoModal.id,n)},resetInfoModal:function(){this.infoModal.title="",this.infoModal.content=""},onFiltered:function(t){this.totalRows=t.length,this.currentPage=1},toast:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.$bvToast.toast(t,{title:"Information",variant:e,solid:!0})}}},G=X,Q=n(1001),Y=(0,Q.Z)(G,i,r,!1,null,null,null),tt=Y.exports},18533:function(t,e,n){"use strict";var i=n(42092).forEach,r=n(9341),s=r("forEach");t.exports=s?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},9341:function(t,e,n){"use strict";var i=n(47293);t.exports=function(t,e){var n=[][t];return!!n&&i((function(){n.call(null,e||function(){return 1},1)}))}},86135:function(t,e,n){"use strict";var i=n(34948),r=n(3070),s=n(79114);t.exports=function(t,e,n){var a=i(e);a in t?r.f(t,a,s(0,n)):t[a]=n}},67066:function(t,e,n){"use strict";var i=n(19670);t.exports=function(){var t=i(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},34706:function(t,e,n){var i=n(46916),r=n(92597),s=n(47976),a=n(67066),o=RegExp.prototype;t.exports=function(t){var e=t.flags;return void 0!==e||"flags"in o||r(t,"flags")||!s(o,t)?e:i(a,t)}},21249:function(t,e,n){"use strict";var i=n(82109),r=n(42092).map,s=n(81194),a=s("map");i({target:"Array",proto:!0,forced:!a},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},40561:function(t,e,n){"use strict";var i=n(82109),r=n(17854),s=n(51400),a=n(19303),o=n(26244),l=n(47908),c=n(65417),u=n(86135),f=n(81194),d=f("splice"),m=r.TypeError,p=Math.max,h=Math.min,b=9007199254740991,g="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!d},{splice:function(t,e){var n,i,r,f,d,v,y=l(this),x=o(y),k=s(t,x),w=arguments.length;if(0===w?n=i=0:1===w?(n=0,i=x-k):(n=w-2,i=h(p(a(e),0),x-k)),x+n-i>b)throw m(g);for(r=c(y,i),f=0;f<i;f++)d=k+f,d in y&&u(r,f,y[d]);if(r.length=i,n<i){for(f=k;f<x-i;f++)d=f+i,v=f+n,d in y?y[v]=y[d]:delete y[v];for(f=x;f>x-i+n;f--)delete y[f-1]}else if(n>i)for(f=x-i;f>k;f--)d=f+i-1,v=f+n-1,d in y?y[v]=y[d]:delete y[v];for(f=0;f<n;f++)y[f+k]=arguments[f+2];return y.length=x-i+n,r}})},39714:function(t,e,n){"use strict";var i=n(76530).PROPER,r=n(98052),s=n(19670),a=n(41340),o=n(47293),l=n(34706),c="toString",u=RegExp.prototype,f=u[c],d=o((function(){return"/a/b"!=f.call({source:"a",flags:"b"})})),m=i&&f.name!=c;(d||m)&&r(RegExp.prototype,c,(function(){var t=s(this),e=a(t.source),n=a(l(t));return"/"+e+"/"+n}),{unsafe:!0})},54747:function(t,e,n){var i=n(17854),r=n(48324),s=n(98509),a=n(18533),o=n(68880),l=function(t){if(t&&t.forEach!==a)try{o(t,"forEach",a)}catch(e){t.forEach=a}};for(var c in r)r[c]&&l(i[c]&&i[c].prototype);l(s)},86552:function(t,e){"use strict";e["Z"]='<template>\n  <b-container fluid>\n    <raw-loader :mytxt="require(\'!raw-loader!./BasicVmask.vue\').default"></raw-loader>\n\n\n    <form @submit.stop.prevent="onSave">\n      <b-table ref="mytable" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage"\n        :filter="filter" :filter-included-fields="filterOn" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc"\n        :sort-direction="sortDirection" stacked="md" show-empty small fixed outlined bordered @filtered="onFiltered">\n\n        <template v-slot:cell()="{ value, item, field: { key } }">\n          <template v-if="sel[pri] != item[pri]">\n            <template v-if="item[pri] != 0">\n              <template v-if="key == pri">\n                {{ value }}\n              </template>\n              <template v-if="key == \'name\'">\n                {{ value }}\n              </template>\n              <template v-if="key == \'maso\'">\n                {{ value }}\n              </template>\n            </template>\n          </template>\n          <template v-if="(sel[pri] == item[pri] || item[pri] == 0)">\n            <template v-if="key == pri">\n              <span>{{ value }}</span>\n            </template>\n            <template v-if="key == \'name\'">\n              <b-form-input autocomplete="off" v-model="item[key]" :name="key" v-validate="\'required\'" placeholder=""\n                :class="{ \'ko-hop-le\': errors.has(key) }">\n              </b-form-input>\n            </template>\n            <template v-if="key == \'maso\'">\n              <b-form-input autocomplete="off" v-model="item[key]" :name="key" v-validate="\'required|length:7\'" placeholder="RD-####"\n                v-mask=" \'RD-####\' "\n                :class="{ \'ko-hop-le\': errors.has(key) }">\n              </b-form-input>\n            </template>\n          </template>\n        </template>\n\n        <template #cell(cmd)="row">\n          <template v-if="row.item[pri] == 0">\n            <b-button variant="outline" class="mr-1" size="sm" @click="onSave(row.item)">\n              <b-icon-hand-thumbs-up></b-icon-hand-thumbs-up>\n            </b-button>\n            <b-button variant="outline" class="mr-1" size="sm" @click="OnCancel(row.item)">\n              <b-icon-file-x></b-icon-file-x>\n            </b-button>\n          </template>\n          <template v-else>\n            <b-button variant="outline" :disabled="isAdded() == true" class="mr-1" v-if="sel[pri] != row.item[pri]" size="sm"\n              @click="OnEdit(row.item)">\n              <b-icon-pencil-square></b-icon-pencil-square>\n            </b-button>\n            <b-button variant="outline" :disabled="isAdded() == true" class="mr-1" v-if="sel[pri] != row.item[pri]" size="sm"\n              @click="OnDel(row.item)">\n              <b-icon-trash></b-icon-trash>\n            </b-button>\n            <b-button variant="outline" class="mr-1" v-if="sel[pri] == row.item[pri]" size="sm" @click="onSave(row.item)">\n              <b-icon-hand-thumbs-up></b-icon-hand-thumbs-up>\n            </b-button>\n            <b-button variant="outline" class="mr-1" v-if="sel[pri] == row.item[pri]" size="sm" @click="OnCancel(row.item)">\n              <b-icon-file-x></b-icon-file-x>\n            </b-button>\n          </template>\n        </template>\n\n        <template #bottom-row="data">\n          <td :colspan="data.columns">\n            <b-row>\n              <b-col sm="6" class="my-1">\n                <b-form-group label="Filter" label-for="filter-input" label-cols-sm="3" label-align-sm="right"\n                  label-size="sm" class="mb-0">\n                  <b-input-group size="sm">\n                    <b-form-input id="filter-input" v-model="filter" type="search"\n                      placeholder="Type to Search"></b-form-input>\n                    <b-input-group-append>\n                      <b-button :disabled="!filter" @click="filter = \'\'">Clear</b-button>\n                    </b-input-group-append>\n                  </b-input-group>\n                </b-form-group>\n              </b-col>\n              <b-col sm="6" class="my-1">\n                <b-form-group label="Per page" label-for="per-page-select" label-cols-sm="6" label-cols-md="4"\n                  label-cols-lg="3" label-align-sm="right" label-size="sm" class="mb-0">\n                  <b-form-select id="per-page-select" v-model="perPage" :options="pageOptions"\n                    size="sm"></b-form-select>\n                </b-form-group>\n              </b-col>\n              <b-col sm="6" class="my-1 text-right">\n                page :{{ currentPage }} / {{ getLastPage(totalRows) }} of {{ totalRows }}\n                <b-button :disabled="adding == true || isEditing() == true" @click="OnAdd"\n                  size="sm"><b>Add</b></b-button>\n              </b-col>\n              <b-col sm="6" class="my-1">\n                <b-pagination :disabled=" adding == true || isEditing() == true " v-model="currentPage" :total-rows="totalRows" :per-page="perPage" align="fill" size="sm"\n                  class="my-0"></b-pagination>\n              </b-col>\n            </b-row>\n\n          </td>\n        </template>\n\n      </b-table>\n    </form>\n    \x3c!-- Info modal --\x3e\n    <b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">\n      <pre>{{ infoModal.content }}</pre>\n    </b-modal>\n  </b-container>\n</template>\n\n<script>\n\nimport VeeValidate from "vee-validate";\nimport Vue from "vue";\nVue.use(VeeValidate, {\n  classes: true,\n  fieldsBagName: \'veeFields\'\n});\n\nimport moment from "moment";\n\nimport vSelect from "vue-select";\nVue.component("v-select", vSelect);\n//import "vue-select/dist/vue-select.css";\n\n\n// Prefered: as a plugin (directive + filter) + custom placeholders support\nimport VueMask from \'v-mask\'\nVue.use(VueMask);\n\n\nexport default {\n  data() {\n    return {\n      items: [\n      ],\n      fields: [\n        {\n          key: \'id\',\n          formatter: (value, key, item) => {\n            let text = value.toString();\n            return (text.length < 4) ? text : text.substring(0, 4) + "...";\n          },\n          sortable: true,\n          thClass: \'text-center\',\n          tdClass: \'text-center align-middle\',\n          //tdClass: \'align-middle\'\n          thStyle: { width: "10%" },\n        },\n        { key: \'name\', sortable: true, thClass: \'text-center\', tdClass: \'align-middle\', thStyle: { width: "60%" }},\n        { key: \'maso\', sortable: true, thClass: \'text-center\', tdClass: \'align-middle\', thStyle: { width: "20%" }},\n        {\n          key: \'cmd\',\n          class: \'text-center\',\n          thClass: \'text-center\',\n          tdClass: \'align-middle\',\n          thStyle: { width: "10%" }\n        }\n      ],\n      totalRows: 1,\n      currentPage: 1,\n      perPage: 3,\n      pageOptions: [3,5, 10, 15, { value: 100, text: "Show a lot" }],\n      sortBy: \'\',\n      sortDesc: false,\n      sortDirection: \'asc\',\n      filter: null,\n      filterOn: [],\n      infoModal: {\n        id: \'info-modal\',\n        title: \'\',\n        content: \'\'\n      },\n\n      sel: {},\n      pri: \'id\',\n      adding: false,\n      lastPage:0,\n\n    }\n  },\n  computed: {\n    sortOptions() {\n      // Create an options list from our fields\n      return this.fields\n        .filter(f => f.sortable)\n        .map(f => {\n          return { text: f.label, value: f.key }\n        })\n    }\n  },\n  mounted() {\n    let items = [\n      {id:1,name:\'thuc 101\',maso:\'RD-0001\'},\n      {id:2,name:\'thuc 102\',maso:\'RD-0002\'},\n    ];\n    this.items = items;\n    this.totalRows = this.items.length;\n    this.lastPage=this.getLastPage(this.totalRows);\n  },\n  methods: {\n    createId(){\n      let max=0;\n      this.items.forEach(x=>{\n        if(x[this.pri] > max){\n          max=x[this.pri];\n        }\n      })\n      return max+1;\n    },\n    onSave(item) {\n      this.$validator.validateAll().then((result) => {\n        if (!result) {\n          this.toast("Không hợp lệ");\n          return;\n        }\n        let r = JSON.parse(JSON.stringify(item));\n        if(r[this.pri]==0){\n          let index = this.items.findIndex(x => x[this.pri] == r[this.pri]);\n          r[this.pri] = this.createId();//new Date().getTime();\n          this.$set(this.items, index, r);\n          this.adding=false;\n          this.$refs.mytable.refresh();\n        }else{\n          let index = this.items.findIndex(x => x[this.pri] == r[this.pri]);\n          this.$set(this.items, index, r);\n          this.sel={};\n        }\n      });\n    },\n    OnDel(item) {\n      this.delRow(item);\n    },\n    delRow(item) {\n      let id = item[this.pri];\n      let index = this.items.findIndex(x => x[this.pri] == id);\n      this.items.splice(index, 1);\n      this.totalRows = this.items.length;\n      this.lastPage = this.getLastPage(this.totalRows);\n    },\n    doCancel(item) {\n      for (let key in item) {\n        if (item[key] != this.sel[key]) {\n          item[key] = this.sel[key]\n        }\n      }\n    },\n    isAdded() {\n      let kq = false;\n      this.items.forEach(x => {\n        if (x[this.pri] == 0) kq = true;\n      })\n      return kq;\n    },\n    OnEdit(item) {\n      if (JSON.stringify(this.sel) != "{}") return;\n      this.sel = JSON.parse(JSON.stringify(item));\n    },\n    OnCancel(item) {\n      if (item[this.pri] == 0) {\n        let index = this.items.findIndex(x => x[this.pri] == item[this.pri]);\n        this.items.splice(index, 1);\n        this.adding = false;\n        this.$refs.mytable.refresh();\n      } else {\n        this.doCancel(item);\n        this.sel = {};\n      }\n    },\n    OnAdd() {\n      let r = {\n        id: 0,\n        name: \'Thức\',\n        maso:\'\'\n      }\n      this.items.unshift(r);\n      this.adding = true;\n      this.currentPage=1;\n      this.totalRows=this.items.length;\n      this.$refs.mytable.refresh();\n    },\n    isEditing() {\n      return JSON.stringify(this.sel) != "{}"\n    },\n    getLastPage(count) {\n      let pageSize = this.perPage;//this.tabulator.getPageSize();\n      let du = count % pageSize;\n      return du == 0 ? count / pageSize : (count - du) / pageSize + 1;\n    },\n    info(item, index, button) {\n      this.infoModal.title = `Row index: ${index}`\n      this.infoModal.content = JSON.stringify(item, null, 2)\n      this.$root.$emit(\'bv::show::modal\', this.infoModal.id, button)\n    },\n    resetInfoModal() {\n      this.infoModal.title = \'\'\n      this.infoModal.content = \'\'\n    },\n    onFiltered(filteredItems) {\n      this.totalRows = filteredItems.length\n      this.currentPage = 1\n    },\n    toast(msg, variant = null) {\n      this.$bvToast.toast(msg, {\n        title: `Information`,\n        variant: variant,\n        solid: true,\n      });\n    },\n\n  }\n}\n<\/script>\n<style lang="scss">\n@import "@/assets/scss/myStyle.scss";\n</style>'}}]);
//# sourceMappingURL=8820-legacy.e327afbf.js.map