"use strict";(self["webpackChunkvue_start_1"]=self["webpackChunkvue_start_1"]||[]).push([[7351],{7351:function(r,e,t){t.r(e),t.d(e,{default:function(){return g}});var n=function(){var r=this,e=r.$createElement,n=r._self._c||e;return n("div",[n("raw-loader",{attrs:{mytxt:t(16465).Z}}),n("h1",[r._v("This is KonvaVue")]),n("b-row",[n("b-col",{staticClass:"border-right",attrs:{sm:"3"}},[n("div",{staticClass:"mb-1"},[n("button",{staticClass:"mr-1",on:{click:function(e){r.dx=r.dx-5}}},[r._v("Giảm dx")]),r._v(" "+r._s(r.dx)+" "),n("button",{staticClass:"mr-1",on:{click:function(e){r.dx=r.dx+5}}},[r._v("Tăng dx")])]),n("div",{staticClass:"mb-1"},[n("button",{staticClass:"mr-1",on:{click:r.onStart}},[r._v("Start")]),n("button",{staticClass:"mr-1",on:{click:r.onStop}},[r._v("Stop")])]),n("div",{attrs:{id:"stage-parent"}},[n("div",{staticClass:"border",attrs:{id:"container"}},[n("v-stage",{ref:"stage",attrs:{config:r.configKonva},on:{click:r.onStageClick,mousemove:r.onStageMouseMove,mouseenter:r.onStageMouseenter,mouseleave:r.onStageMouseleave}},[n("v-layer",{ref:"layer"},[n("v-circle",{ref:"circle",attrs:{config:{x:100,y:100,radius:60,fill:"yellow",stroke:"black",strokeWidth:5,draggable:!0,visible:!0}}})],1)],1)],1)])]),n("b-col",{attrs:{sm:"9"}},[r._v(" "+r._s(r.msg)),n("br"),r._v(r._s(r.hover)+" "),n("div",{staticClass:"row no-gutters border-top p-1"},r._l(r.listData,(function(e,t){return n("div",{key:t,staticClass:"mb-1 mr-1 col-sm-2"},[n("div",{class:t==r.hover?"border border-primary":"",staticStyle:{position:"relative"},on:{mouseover:function(e){r.hover=t},mouseout:function(e){r.hover=-1}}},[n("img",{staticClass:"img-thumbnail",attrs:{src:e.src},on:{click:function(t){return r.onView(e.data)}}}),n("button",{staticClass:"m-1",staticStyle:{position:"absolute",bottom:"0",right:"0"},on:{click:function(e){return r.onDelData(t)}}},[r._v("Del")])])])})),0)])],1)],1)},i=[],a=1500,s=1e3,o=null,c=null,l={name:"Tpl",components:{},computed:{test(){return"hello"}},data(){return{msg:"hello",configKonva:{width:a,height:s},configCircle:{x:a/2,y:s/2,radius:90,fill:"yellow",stroke:"black",strokeWidth:5,draggable:!0,visible:!1},dx:10,dy:10,ani:null,count:0,p:{},arPoint:[],Sel:[],arSel:[],unLink:!1,listData:[],hover:-1}},mounted(){this.$nextTick((function(){c=this.$refs.layer.getNode(),o=this.$refs.stage.getNode(),window.addEventListener("resize",this.fitStageIntoParentContainer),this.fitStageIntoParentContainer(),this.ani=this.createAnimate(),this.ani.start()}))},created(){},methods:{onStart(){this.ani.start()},onStop(){this.ani.stop()},createCircle(r,e){let t=this.$refs.circle.getNode().clone();return t.name("mycircle"),t.fill("white"),t.x(r),t.y(e),t},createAnimate(){let r=this.$refs.circle.getNode();r.x(a/2),r.y(s/2);let e=1,t=1,n=this;var i=new Konva.Animation((function(i){r.x(r.x()+e*n.dx),r.y(r.y()+t*n.dy),(r.y()>s||r.y()<0)&&(t*=-1),(r.x()>a||r.x()<0)&&(e*=-1);let o=!1;for(var c=0;c<n.getListCircle().length;c++)if(1==n.haveIntersection2(n.getListCircle()[c],r)){o=!0;break}1==o&&(e*=-1,t*=-1)}),c);return i},haveIntersection(r,e){return!(e.x>r.x+r.width||e.x+e.width<r.x||e.y>r.y+r.height||e.y+e.height<r.y)},haveIntersection2(r,e){function t(r,e,t,n){return Math.sqrt((r-t)*(r-t)+(e-n)*(e-n))}o.scale().x;let n=!1,i=Math.floor(t(r.x(),r.y(),e.x(),e.y())),a=r.radius(),s=e.radius();return a+s>i&&(n=!0),n},onStageClick(r){let e=this.myGetMouse(),t=this.createCircle(e.x,e.y);c.add(t),this.msg={dem:this.getListCircle().length}},onStageMouseMove(r){},onStageMouseenter(r){},onStageMouseleave(r){},getListCircle(){return c.find(".mycircle")},getListRect(){return c.find(".myrect")},getListLine(){return c.find(".myline")},getListBall(){return c.find(".myball")},getBallById(r){return c.find(`#${r}`)[0]},myGetMouse(){let r=o.scale().x;var e=o.getPointerPosition(),t=e.x,n=e.y,i=Math.round(t/r),a=Math.round(n/r);return{x:i,y:a}},fitStageIntoParentContainer(){var r=document.querySelector("#stage-parent"),e=r.offsetWidth,t=e/a;o.width(a*t),o.height(s*t),o.scale({x:t,y:t}),this.configKonva.width=a*t,this.configKonva.height=s*t}}},u=l,h=t(1001),d=(0,h.Z)(u,n,i,!1,null,"a4520b88",null),g=d.exports},16465:function(r,e){e["Z"]='<template>\r\n  <div>\r\n    <raw-loader :mytxt=" require(\'!raw-loader!./KonvaVueAnimate.vue\').default "></raw-loader> \r\n    <h1>This is KonvaVue</h1>\r\n    <b-row>\r\n      <b-col sm="3" class="border-right">\r\n        <div class="mb-1">\r\n          <button class="mr-1" @click=" dx=dx-5; ">Giảm dx</button>\r\n          {{dx}}\r\n          <button class="mr-1" @click=" dx=dx+5; ">Tăng dx</button>\r\n        </div>\r\n        <div class="mb-1">\r\n          <button class="mr-1" @click="onStart">Start</button>\r\n          <button class="mr-1" @click="onStop">Stop</button>\r\n        </div>\r\n          \r\n          <div id="stage-parent">\r\n            <div id="container" class="border">\r\n                <v-stage ref="stage"\r\n                    @click="onStageClick"\r\n                    @mousemove="onStageMouseMove" \r\n                    @mouseenter="onStageMouseenter"\r\n                    @mouseleave="onStageMouseleave"\r\n                    :config="configKonva" >\r\n                    <v-layer ref="layer">\r\n                      <v-circle ref="circle" \r\n                      :config="{\r\n                        x: 100,\r\n                        y: 100,\r\n                        radius: 60,\r\n                        fill: \'yellow\',\r\n                        stroke: \'black\',\r\n                        strokeWidth: 5,\r\n                        draggable:true,\r\n                        visible:true,\r\n                      }"></v-circle>\r\n                    </v-layer>\r\n                </v-stage>\r\n            </div>\r\n          </div>\r\n\r\n      </b-col>\r\n      <b-col sm="9">\r\n        {{msg}}<br>{{hover}}\r\n        <div class="row no-gutters border-top p-1">\r\n          <div v-for="(x,i) in listData" :key="i" class="mb-1 mr-1 col-sm-2">\r\n            <div :class=" (i==hover) ? \'border border-primary\' : \'\' " style="position:relative" @mouseover=" hover=i " @mouseout=" hover=-1 " >\r\n              <img :src=" x.src " @click="onView(x.data)" class="img-thumbnail" >\r\n              <button @click="onDelData(i)" class="m-1" style="position:absolute; bottom:0; right: 0;">Del</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </b-col>\r\n    </b-row>\r\n  </div>\r\n</template>\r\n<script>\r\nvar sceneWidth = 1500;\r\nvar sceneHeight = 1000;\r\nvar stage=null;\r\nvar layer=null;\r\nexport default {\r\n  name: \'Tpl\',\r\n  components: {\r\n  },\r\n  computed: {\r\n  \ttest () {\r\n    \treturn \'hello\'\r\n    },\r\n  },\r\n  data(){\r\n    return{\r\n        msg:"hello",\r\n        configKonva: {\r\n          width: sceneWidth,\r\n          height: sceneHeight\r\n        },\r\n        configCircle: {\r\n          x: sceneWidth/2,\r\n          y: sceneHeight/2,\r\n          radius: 90,\r\n          fill: "yellow",\r\n          stroke: "black",\r\n          strokeWidth: 5,\r\n          draggable:true,\r\n          visible:false,\r\n        },\r\n        dx:10,\r\n        dy:10,\r\n        ani:null,\r\n\r\n\r\n\r\n\r\n        count:0,\r\n        p:{},\r\n\r\n\r\n\r\n        \r\n        arPoint:[],\r\n        Sel:[],\r\n        arSel:[],\r\n        unLink:false,\r\n        listData:[],\r\n        hover:-1,\r\n    }\r\n  },\r\n  mounted(){\r\n    this.$nextTick(function(){\r\n      layer=this.$refs.layer.getNode();\r\n      stage=this.$refs.stage.getNode();\r\n      window.addEventListener("resize", this.fitStageIntoParentContainer);\r\n      this.fitStageIntoParentContainer();\r\n\r\n      this.ani=this.createAnimate();\r\n      this.ani.start();\r\n    })\r\n  },\r\n  created(){\r\n  },\r\n  methods:{\r\n    onStart(){\r\n      this.ani.start();\r\n    },\r\n    onStop(){\r\n      this.ani.stop();\r\n    },\r\n    createCircle(x,y){\r\n      let circle=this.$refs.circle.getNode().clone();\r\n      circle.name(\'mycircle\');//  mycircle\r\n      circle.fill(\'white\');\r\n      circle.x(x);\r\n      circle.y(y);\r\n      return circle;\r\n    },\r\n    createAnimate(){\r\n      let circle=this.$refs.circle.getNode();\r\n      circle.x(sceneWidth/2);\r\n      circle.y(sceneHeight/2);\r\n      let chieuX=1;\r\n      let chieuY=1;\r\n      let that=this;\r\n      var anim = new Konva.Animation(function (frame) {\r\n        circle.x( circle.x() + chieuX*that.dx );\r\n        circle.y( circle.y() + chieuY*that.dy );\r\n        if( circle.y() > sceneHeight || circle.y() < 0 ){\r\n          chieuY = -1*chieuY;\r\n        }\r\n        if( circle.x() > sceneWidth || circle.x() < 0 ){\r\n          chieuX= -1*chieuX;\r\n        }\r\n        \r\n        let chk=false;\r\n        for(var i=0;i<that.getListCircle().length;i++){\r\n          //if(that.haveIntersection( that.getListCircle()[i].getClientRect(),circle.getClientRect() )){\r\n          if(that.haveIntersection2(that.getListCircle()[i],circle)==true){  \r\n            chk=true;\r\n            break;\r\n          }\r\n        }\r\n        if(chk==true){\r\n          chieuX=-1*chieuX;\r\n          chieuY=-1*chieuY;\r\n        }\r\n        \r\n\r\n      }, layer);\r\n      return anim;\r\n    },\r\n\r\n    haveIntersection(r1, r2) {\r\n        return !(\r\n          r2.x > r1.x + r1.width ||\r\n          r2.x + r2.width < r1.x ||\r\n          r2.y > r1.y + r1.height ||\r\n          r2.y + r2.height < r1.y\r\n        );\r\n    },    \r\n    haveIntersection2(s1, s2) {\r\n      function kc(x1,y1,x2,y2){\r\n        return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));\r\n      }\r\n      function convert(value,scale){\r\n        return Math.round(value*scale);\r\n      }\r\n      let scale=stage.scale().x;\r\n      let kq=false;\r\n      \r\n      let d=Math.floor(kc(s1.x(),s1.y(),s2.x(),s2.y()));\r\n      let r1=s1.radius();\r\n      let r2=s2.radius();\r\n      if(r1+r2 > d){\r\n        kq=true;\r\n      }\r\n      return kq;\r\n    },    \r\n    onStageClick(e){\r\n      let p=this.myGetMouse();\r\n      let circle=this.createCircle(p.x,p.y);\r\n      layer.add(circle);\r\n      this.msg={\r\n        dem:this.getListCircle().length\r\n      }\r\n    },\r\n    onStageMouseMove(e){\r\n    },\r\n    onStageMouseenter(e){\r\n    },\r\n    onStageMouseleave(e){\r\n    },\r\n    getListCircle(){ return layer.find(".mycircle") },\r\n    getListRect(){ return layer.find(".myrect") },\r\n    getListLine(){ return layer.find(".myline") },\r\n    getListBall(){ return layer.find(".myball") },\r\n    getBallById(id){ return layer.find(`#${id}`)[0] },\r\n    myGetMouse() {\r\n      let scale=stage.scale().x;\r\n      var mousePos = stage.getPointerPosition();\r\n      var x = mousePos.x;\r\n      var y = mousePos.y;\r\n      var xx = Math.round(x / scale);\r\n      var yy = Math.round(y / scale);\r\n      return { x: xx, y: yy };\r\n    },\r\n    fitStageIntoParentContainer() {\r\n      var container = document.querySelector(\'#stage-parent\');\r\n      var containerWidth = container.offsetWidth;\r\n      var scale = containerWidth / sceneWidth;\r\n      stage.width(sceneWidth * scale);\r\n      stage.height(sceneHeight * scale);\r\n      stage.scale({ x: scale, y: scale });\r\n      this.configKonva.width = sceneWidth * scale;\r\n      this.configKonva.height = sceneHeight * scale;\r\n    },\r\n  }\r\n}\r\n<\/script>\r\n<style scoped>\r\n</style>\r\n'}}]);
//# sourceMappingURL=7351.970509b1.js.map