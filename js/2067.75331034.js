"use strict";(self["webpackChunkvue_start_1"]=self["webpackChunkvue_start_1"]||[]).push([[2067],{2067:function(t,e,s){s.r(e),s.d(e,{default:function(){return o}});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{},[s("b-row",[s("b-col",{attrs:{lg:"12"}}),s("b-col",{staticClass:"border-right",attrs:{lg:"2"}},[s("h4",{staticClass:"mb-1 text-right"},[t._v(t._s(t.$route.fullPath.split("/")[1]))]),s("div",{staticClass:"vertical-menu shadow mt-4"},t._l(t.submenu,(function(e){return s("router-link",{key:e.id,attrs:{to:e.path}},[t._v(t._s(e.label))])})),1)]),s("b-col",{staticClass:"mb-3",attrs:{lg:"10"}},[s("router-view")],1)],1)],1)])},r=[],h=s(19467),l={name:"VerLayout",components:{},watch:{"$route.fullPath":{handler:function(t){let e=JSON.parse(JSON.stringify(this.$store.state.routes));h.Z.routes=e;let s=`/${this.$route.fullPath.split("/")[1]}`;this.submenu=h.Z.getChild(s)},deep:!0,immediate:!0}},computed:{ds2:function(){return[1,2,3]}},data(){return{ds:[],submenu:[]}},created(){},mounted(){this.$nextTick((()=>{let t=JSON.parse(JSON.stringify(this.$store.state.routes));h.Z.routes=t;let e=`/${this.$route.fullPath.split("/")[1]}`;this.submenu=h.Z.getChild(e)}))},methods:{}},u=l,n=s(1001),a=(0,n.Z)(u,i,r,!1,null,"9c4fe9be",null),o=a.exports},19467:function(t,e,s){s(26699);e["Z"]={routes:[],TestMethod(){alert(JSON.stringify(this.routes))},getListLink(){let t=[],e=[],s=this.routes;s.forEach((e=>{"*"!=e.path&&t.push(e)}));while(0!=t.length){let s=t.pop();void 0==s.children?e.push(s):e.push({id:s.id,label:s.label,path:s.path,auth:s.auth});let i=s.path;void 0!=s.children&&s.children.forEach((e=>{""!=e.path&&"/"!=i?e.path=i+"/"+e.path:e.path=i+e.path,t.push(e)}))}return e},itemToString(t){let e="",s=Object.keys(t);return s.forEach((s=>{"children"!=s&&(e+=`${s} -> ${t[s]} |`)})),e},getItem(t,e){let s=t.findIndex((t=>t.id==e));s<0&&console.log(`khong tim thay id : ${e}`);let i=t[s];return i},getMenu(){let t=this.routes,e=JSON.parse(JSON.stringify(t[0].children)),s=this.getListLink(),i=[];return e.forEach((t=>{if(void 0==t.children){let e=this.getItem(s,t.id);i.push(e)}else{let e=this.getItem(s,t.id),r=[];t.children.forEach((t=>{let e=this.getItem(s,t.id);r.push(e)})),e.children=r,i.push(e)}})),i},getChild(t){let e=this.getMenu(),s=e.findIndex((e=>e.path==t));if(s<0)return[];{let t=e[s].children,i=[];return t.forEach((t=>{0==t.path.includes(":")&&i.push(t)})),i}},getHor(){let t=this.getMenu(),e=[];return t.forEach((t=>{e.push({id:t.id,path:t.path,label:t.label})})),e}}}}]);
//# sourceMappingURL=2067.75331034.js.map