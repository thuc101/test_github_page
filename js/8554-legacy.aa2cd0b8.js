(self["webpackChunkvue_start_1"]=self["webpackChunkvue_start_1"]||[]).push([[8554],{97582:function(t,r,n){"use strict";n.r(r),n.d(r,{default:function(){return p}});var e=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("raw-loader",{attrs:{mytxt:n(13755).Z}}),e("h3",[t._v("hello world read it every day")]),e("h3",[t._v("Vi du 1")]),e("list",{attrs:{ds:[{Id:1,Ten:"thuc"},{Id:2,Ten:"thuc"}]},scopedSlots:t._u([{key:"default",fn:function(r){return e("div",{},[t._v(" "+t._s(r)+" ")])}}])}),e("hr"),e("h3",[t._v("Vi du 2")]),e("list",{attrs:{ds:[{id:1,ten:"thuc"},{id:2,ten:"thuc"}]},scopedSlots:t._u([{key:"tieude",fn:function(){return[e("h3",[t._v("hello world")])]},proxy:!0},{key:"default",fn:function(r){return e("div",{},[t._v(" "+t._s(r.item.id)+" "+t._s(r.item.ten)+" ")])}}])}),e("hr"),e("h3",[t._v("Vi du 3")]),e("list",{attrs:{ds:[{id:1,ten:"thuc"},{id:2,ten:"thuc"}]},scopedSlots:t._u([{key:"default",fn:function(r){return t._l(r,(function(r){return e("div",{key:r.Id},[t._v(t._s(r))])}))}}])}),e("hr"),e("h3",[t._v("Vi du 4")]),e("ul",[e("list",{attrs:{ds:[{id:1,ten:"thuc"},{id:2,ten:"thuc"}]},scopedSlots:t._u([{key:"default",fn:function(r){return e("li",{},[t._v(t._s(r.item.id)+" "+t._s(r.item.ten))])}}])})],1),e("h3",[t._v("Vi du 5")]),e("table",{attrs:{border:"1"}},[e("list",{attrs:{ds:[{id:1,ten:"thuc"},{id:2,ten:"thuc"}]},scopedSlots:t._u([{key:"tieude",fn:function(){return[e("h3",[t._v("hello world")])]},proxy:!0},{key:"default",fn:function(r){return e("tr",{},[e("td",[t._v(t._s(r.item.id))]),e("td",[t._v(t._s(r.item.ten))]),e("td",[e("button",{on:{click:function(n){return t.onEdit(r)}}},[t._v("Edit")]),e("button",[t._v("Del")])])])}}])})],1)],1)},i=[],u=(n(38862),function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",[t._t("tieude",(function(){return[t._v("test slot list")]})),t._l(t.ds,(function(r){return t._t("default",null,{item:r})}))],2)}),d=[],o={props:["ds"]},l=o,s=n(1001),c=(0,s.Z)(l,u,d,!1,null,null,null),a=c.exports,h={props:["ds"],components:{List:a},methods:{onEdit:function(t){alert(JSON.stringify(t))}}},f=h,v=(0,s.Z)(f,e,i,!1,null,null,null),p=v.exports},38862:function(t,r,n){var e=n(82109),i=n(35005),u=n(22104),d=n(46916),o=n(1702),l=n(47293),s=n(43157),c=n(60614),a=n(70111),h=n(52190),f=n(50206),v=n(30133),p=i("JSON","stringify"),_=o(/./.exec),m=o("".charAt),w=o("".charCodeAt),y=o("".replace),b=o(1..toString),k=/[\uD800-\uDFFF]/g,x=/^[\uD800-\uDBFF]$/,S=/^[\uDC00-\uDFFF]$/,V=!v||l((function(){var t=i("Symbol")();return"[null]"!=p([t])||"{}"!=p({a:t})||"{}"!=p(Object(t))})),g=l((function(){return'"\\udf06\\ud834"'!==p("\udf06\ud834")||'"\\udead"'!==p("\udead")})),D=function(t,r){var n=f(arguments),e=r;if((a(r)||void 0!==t)&&!h(t))return s(r)||(r=function(t,r){if(c(e)&&(r=d(e,this,t,r)),!h(r))return r}),n[1]=r,u(p,null,n)},E=function(t,r,n){var e=m(n,r-1),i=m(n,r+1);return _(x,t)&&!_(S,i)||_(S,t)&&!_(x,e)?"\\u"+b(w(t,0),16):t};p&&e({target:"JSON",stat:!0,arity:3,forced:V||g},{stringify:function(t,r,n){var e=f(arguments),i=u(V?D:p,null,e);return g&&"string"==typeof i?y(i,k,E):i}})},13755:function(t,r){"use strict";r["Z"]='\r\n\x3c!--\r\n        -------------------------------------------------------List.vue \r\n        <template>\r\n            <div>\r\n                <slot v-for="item in ds" :item="item"></slot>\r\n            </div>\r\n        </template>\r\n        --script--\r\n        export default{\r\n            props:["ds"]\r\n        }\r\n        --script-- \r\n--\x3e\r\n<template>\r\n    <div>\r\n        <raw-loader :mytxt="require(\'!raw-loader!./SlotLaGi.vue\').default"></raw-loader>\r\n        <h3>hello world read it every day</h3>\r\n        <h3>Vi du 1</h3>\r\n        <list :ds="[{Id:1,Ten:\'thuc\'},{Id:2,Ten:\'thuc\'}]">\r\n                <div slot-scope="row">\r\n    \t\t\t\t{{ row }}\r\n    \t\t\t</div>\r\n        </list>\r\n        <hr>\r\n        <h3>Vi du 2</h3>\r\n        <list\r\n            :ds="[{id:1,ten:\'thuc\'},{id:2,ten:\'thuc\'}]" >\r\n                <template v-slot:tieude >\r\n                    <h3>hello world</h3>\r\n                </template>\r\n                <div slot-scope="row">\r\n    \t\t\t\t{{row.item.id}} {{ row.item.ten }}\r\n    \t\t\t</div>\r\n        </list>\r\n        <hr>\r\n        <h3>Vi du 3</h3>\r\n        <list :ds="[{id:1,ten:\'thuc\'},{id:2,ten:\'thuc\'}]">\r\n            <template slot-scope="row" >\r\n                <div v-for="x in row" :key="x.Id">{{ x }}</div>\r\n            </template>\r\n        </list>\r\n        <hr>\r\n        <h3>Vi du 4</h3>\r\n        <ul>\r\n            <list :ds="[{id:1,ten:\'thuc\'},{id:2,ten:\'thuc\'}]">\r\n                <li slot-scope="row">{{row.item.id}} {{ row.item.ten }}</li>\r\n            </list>\r\n        </ul>\r\n        <h3>Vi du 5</h3>\r\n        <table border="1">\r\n            <list :ds="[{id:1,ten:\'thuc\'},{id:2,ten:\'thuc\'}]">\r\n                    <template v-slot:tieude >\r\n                        <h3>hello world</h3>\r\n                    </template>\r\n                    <tr slot-scope="row">\r\n                        <td>{{ row.item.id }}</td>\r\n                        <td>{{ row.item.ten }}</td>\r\n                        <td>\r\n                            <button @click="onEdit(row)">Edit</button>\r\n                            <button>Del</button>\r\n                        </td>\r\n                    </tr>\r\n            </list>\r\n        </table>\r\n    </div>\r\n</template>\r\n<script>\r\nimport List from "@/views/BTable4/List.vue"\r\nexport default{\r\n    props:["ds"],\r\n    components:{\r\n        List\r\n    },\r\n    methods:{\r\n        onEdit(row){\r\n            alert(JSON.stringify(row));\r\n        }\r\n    }\r\n}\r\n<\/script>\r\n'}}]);
//# sourceMappingURL=8554-legacy.aa2cd0b8.js.map