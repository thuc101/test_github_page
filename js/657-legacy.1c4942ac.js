(self["webpackChunkvue_start_1"]=self["webpackChunkvue_start_1"]||[]).push([[657],{20657:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("raw-loader",{attrs:{mytxt:n(38719).Z}}),r("h1",[e._v("This is KonvaVue")]),r("b-row",[r("b-col",{staticClass:"border-right",attrs:{sm:"3"}},[r("div",{staticClass:"mb-1"},[r("button",{staticClass:"mr-1",attrs:{disabled:1!=e.Sel.length},on:{click:e.onDel}},[e._v("Del")]),r("button",{staticClass:"mr-1",attrs:{disabled:2!=e.Sel.length},on:{click:e.onLink}},[e._v(e._s(e.unLink?"UnLink":"Link"))]),r("button",{staticClass:"mr-1",on:{click:e.onReset}},[e._v("Reset")]),r("button",{staticClass:"mr-1",on:{click:e.onLoad}},[e._v("Load")]),r("button",{staticClass:"mr-1",on:{click:e.onSave}},[e._v("Save")])]),r("div",{attrs:{id:"stage-parent"}},[r("div",{staticClass:"border",attrs:{id:"container"}},[r("v-stage",{ref:"stage",attrs:{config:e.configKonva},on:{click:e.onStageClick,mousemove:e.onStageMouseMove,mouseenter:e.onStageMouseenter,mouseleave:e.onStageMouseleave}},[r("v-layer",{ref:"layer"},[r("v-circle",{ref:"circle",attrs:{config:e.configCircle}}),r("v-rect",{ref:"rect",attrs:{config:{x:100,y:100,width:150,height:150,fill:"yellow",stroke:"blue",strokeWidth:5,draggable:!0,visible:!1}}}),r("v-line",{ref:"line",attrs:{config:{points:[100,100,400,200],stroke:"gray",strokeWidth:5,lineCap:"round",lineJoin:"round",draggable:!0,visible:!1}}}),r("v-shape",{ref:"nice",attrs:{config:{sceneFunc:function(e,t){var n=-20,r=-50;e.beginPath(),e.moveTo(n+20,r+50),e.lineTo(n+220,r+80),e.quadraticCurveTo(n+150,r+100,n+260,r+170),e.closePath(),e.fillStrokeShape(t)},fill:"#00D2FF",stroke:"black",strokeWidth:4,visible:!0,draggable:!0,visible:!1}}}),r("v-shape",{ref:"ball",attrs:{config:{x:150,y:150,r:90,text:"1",fontSize:50,fill:"aqua",stroke:"black",textcolor:"red",strokeWidth:1,draggable:!0,sel:!1,visible:!1,sceneFunc:function(e,t){var n=t.getAttr("fontSize");e.beginPath(),e.arc(0,0,t.getAttr("r"),0,2*Math.PI),e.fillStrokeShape(t);var r=t.getAttr("textcolor");e.fillStyle=r,e.textBaseline="middle",e.textAlign="center",e.font=n+"px verdana",e.fillText(""+t.getAttr("text"),0,0)}}}}),r("v-shape",{ref:"board",attrs:{config:{x:50,y:50,width:300,height:100,text:"Thức 101",fontSize:60,fill:"yellow",stroke:"red",strokeWidth:1,draggable:!0,visible:!1,sceneFunc:function(e,t){var n=t.getAttr("fontSize");e.beginPath(),e.rect(0,0,t.getAttr("width"),t.getAttr("height")),e.fillStrokeShape(t),e.fillStyle="red",e.textBaseline="middle",e.textAlign="center",e.font=n+"px Times New Roman",e.fillText(""+t.getAttr("text"),t.getAttr("width")/2,t.getAttr("height")/2)}}}})],1)],1)],1)])]),r("b-col",{attrs:{sm:"9"}},[e._v(" "+e._s(e.msg)),r("br"),e._v(e._s(e.hover)+" "),r("div",{staticClass:"row no-gutters border-top p-1"},e._l(e.listData,(function(t,n){return r("div",{key:n,staticClass:"mb-1 mr-1 col-sm-2"},[r("div",{class:n==e.hover?"border border-primary":"",staticStyle:{position:"relative"},on:{mouseover:function(t){e.hover=n},mouseout:function(t){e.hover=-1}}},[r("img",{staticClass:"img-thumbnail",attrs:{src:t.src},on:{click:function(n){return e.onView(t.data)}}}),r("button",{staticClass:"m-1",staticStyle:{position:"absolute",bottom:"0",right:"0"},on:{click:function(t){return e.onDelData(n)}}},[e._v("Del")])])])})),0)])],1)],1)},i=[],o=(n(41539),n(54747),n(68309),n(43290),n(39714),n(69826),1500),l=1e3,a=null,s=null,c={name:"Tpl",components:{},computed:{test:function(){return"hello"}},data:function(){return{msg:"hello",configKonva:{width:o,height:l},configCircle:{x:o/2,y:l/2,radius:90,fill:"yellow",stroke:"black",strokeWidth:5,draggable:!0,visible:!1},count:0,p:{},arPoint:[],Sel:[],arSel:[],unLink:!1,listData:[],hover:-1}},mounted:function(){this.$nextTick((function(){s=this.$refs.layer.getNode(),a=this.$refs.stage.getNode(),window.addEventListener("resize",this.fitStageIntoParentContainer),this.fitStageIntoParentContainer()}))},created:function(){},methods:{onDelData:function(e){},onView:function(e){},onSave:function(){},load:function(e){},onLoad:function(){},reset:function(){},onReset:function(){},onDel:function(){},onUnlink:function(e,t){},chkPairExist:function(e,t){},onLink:function(){},drawLine:function(){},draw:function(){var e=this;this.getListBall().forEach((function(t,n){e.drawBall(t)})),this.msg={p:this.p,getSel:this.getSel()}},createLine:function(e){var t=this.$refs.line.getNode().clone();return t.visible(!0),t.name(e),t},createBall:function(e,t,n,r,i){var o=this.$refs.ball.getNode().clone();return o.visible(!0),o.x(e),o.y(t),o.setAttr("r",n),o.fill("yellow"),o.stroke("black"),o.name(r),o.id(i),o.setAttr("text",i),o.on("click",(function(e){})),o.on("mouseenter",(function(e){})),o.on("mouseleave",(function(e){})),o.on("dragend",(function(e){})),o.on("dragmove",(function(e){})),o},drawBall:function(e){var t,n,r=e.getAttr("sel");0==r?(t="yellow",n="blue"):(t="blue",n="white"),e.fill(t),e.setAttr("textcolor",n)},clearSel:function(){this.getListBall().forEach((function(e,t){e.setAttr("sel",!1)}))},getSel:function(){var e=[];return this.getListBall().forEach((function(t,n){1==t.getAttr("sel")&&e.push(parseInt(t.id()))})),e},onStageClick:function(e){var t=e.target.name();if("myball"==t){var n=e.target.getAttr("sel");e.target.setAttr("sel",!n);var r=this.getSel(),i=this.getLinePointer();1==r.length?i.visible(!0):i.visible(!1)}else{var o=this.myGetMouse(),l=(this.count,this.createBall(o.x,o.y,60,"myball",this.count.toString()));this.count++,s.add(l)}this.draw()},onStageMouseMove:function(e){var t=e.target.name();if("myball"==t){if(1==this.getSel().length){var n=this.getSel()[0],r=this.getBallById(n).x(),i=this.getBallById(n).y(),o={x:e.target.x(),y:e.target.y()};this.drawLinePointer(r,i,o.x,o.y)}}else if(1==this.getSel().length){var l=this.getSel()[0],a=this.getBallById(l).x(),s=this.getBallById(l).y(),c=this.myGetMouse();this.drawLinePointer(a,s,c.x,c.y)}this.p=this.myGetMouse(),this.draw()},onStageMouseenter:function(e){},onStageMouseleave:function(e){},getPointer:function(){var e;return 0==s.find(".mypointer").length?(e=this.$refs.circle.getNode().clone(),e.name("mypointer"),e.radius(60),e.fill("white"),s.add(e)):e=s.find(".mypointer")[0],e.moveToBottom(),e},getLinePointer:function(){var e;return 0==s.find(".mylinepointer").length?(e=this.$refs.line.getNode().clone(),e.points([]),e.name("mylinepointer"),s.add(e)):e=s.find(".mylinepointer")[0],e.moveToBottom(),e},drawLinePointer:function(e,t,n,r){this.getLinePointer().points([e,t,n,r])},getListRect:function(){return s.find(".myrect")},getListLine:function(){return s.find(".myline")},getListBall:function(){return s.find(".myball")},getBallById:function(e){return s.find("#".concat(e))[0]},myGetMouse:function(){var e=a.scale().x,t=a.getPointerPosition(),n=t.x,r=t.y,i=Math.round(n/e),o=Math.round(r/e);return{x:i,y:o}},fitStageIntoParentContainer:function(){var e=document.querySelector("#stage-parent"),t=e.offsetWidth,n=t/o;a.width(o*n),a.height(l*n),a.scale({x:n,y:n}),this.configKonva.width=o*n,this.configKonva.height=l*n}}},u=c,h=n(1001),d=(0,h.Z)(u,r,i,!1,null,"ab15b6e4",null),g=d.exports},21285:function(e,t,n){"use strict";var r=n(47908),i=n(51400),o=n(26244);e.exports=function(e){var t=r(this),n=o(t),l=arguments.length,a=i(l>1?arguments[1]:void 0,n),s=l>2?arguments[2]:void 0,c=void 0===s?n:i(s,n);while(c>a)t[a++]=e;return t}},18533:function(e,t,n){"use strict";var r=n(42092).forEach,i=n(9341),o=i("forEach");e.exports=o?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},9341:function(e,t,n){"use strict";var r=n(47293);e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){return 1},1)}))}},67066:function(e,t,n){"use strict";var r=n(19670);e.exports=function(){var e=r(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},34706:function(e,t,n){var r=n(46916),i=n(92597),o=n(47976),l=n(67066),a=RegExp.prototype;e.exports=function(e){var t=e.flags;return void 0!==t||"flags"in a||i(e,"flags")||!o(a,e)?t:r(l,e)}},43290:function(e,t,n){var r=n(82109),i=n(21285),o=n(51223);r({target:"Array",proto:!0},{fill:i}),o("fill")},69826:function(e,t,n){"use strict";var r=n(82109),i=n(42092).find,o=n(51223),l="find",a=!0;l in[]&&Array(1)[l]((function(){a=!1})),r({target:"Array",proto:!0,forced:a},{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),o(l)},39714:function(e,t,n){"use strict";var r=n(76530).PROPER,i=n(98052),o=n(19670),l=n(41340),a=n(47293),s=n(34706),c="toString",u=RegExp.prototype,h=u[c],d=a((function(){return"/a/b"!=h.call({source:"a",flags:"b"})})),g=r&&h.name!=c;(d||g)&&i(RegExp.prototype,c,(function(){var e=o(this),t=l(e.source),n=l(s(e));return"/"+t+"/"+n}),{unsafe:!0})},54747:function(e,t,n){var r=n(17854),i=n(48324),o=n(98509),l=n(18533),a=n(68880),s=function(e){if(e&&e.forEach!==l)try{a(e,"forEach",l)}catch(t){e.forEach=l}};for(var c in i)i[c]&&s(r[c]&&r[c].prototype);s(o)},38719:function(e,t){"use strict";t["Z"]='<template>\r\n  <div>\r\n    <raw-loader :mytxt=" require(\'!raw-loader!./KonvaVueTpl3.vue\').default "></raw-loader> \r\n    <h1>This is KonvaVue</h1>\r\n    <b-row>\r\n      <b-col sm="3" class="border-right">\r\n        <div class="mb-1">\r\n          <button class="mr-1" @click="onDel" :disabled=" (Sel.length==1) ? false : true " >Del</button>\r\n          <button class="mr-1" @click="onLink" :disabled=" (Sel.length==2) ? false : true " >{{(!unLink) ? \'Link\' : \'UnLink\'}}</button>\r\n          <button class="mr-1" @click="onReset" >Reset</button>\r\n          <button class="mr-1" @click="onLoad" >Load</button>\r\n          <button class="mr-1" @click="onSave" >Save</button>\r\n        </div>\r\n          \r\n          <div id="stage-parent">\r\n            <div id="container" class="border">\r\n                <v-stage ref="stage"\r\n                    @click="onStageClick"\r\n                    @mousemove="onStageMouseMove" \r\n                    @mouseenter="onStageMouseenter"\r\n                    @mouseleave="onStageMouseleave"\r\n                    :config="configKonva" >\r\n                    <v-layer ref="layer">\r\n                        <v-circle ref="circle" :config="configCircle"></v-circle>\r\n                        <v-rect ref="rect" \r\n                            :config="{\r\n                                x: 100,\r\n                                y: 100,\r\n                                width: 150,\r\n                                height: 150,\r\n                                fill: \'yellow\',\r\n                                stroke:\'blue\',\r\n                                strokeWidth:5,\r\n                                //shadowBlur: 10,\r\n                                draggable:true,\r\n                                visible:false\r\n                            }"\r\n                        />\r\n                        <v-line ref="line" :config="{\r\n                          points: [100,100,400,200],\r\n                          stroke: \'gray\',\r\n                          strokeWidth: 5,\r\n                          lineCap: \'round\',\r\n                          lineJoin: \'round\',\r\n                          draggable:true,\r\n                          visible: false\r\n                        }"></v-line>\r\n                        <v-shape ref="nice"\r\n                          :config="{\r\n                            sceneFunc: function(context, shape) {\r\n                              let x=-20;\r\n                              let y=-50;\r\n                              context.beginPath();\r\n                              context.moveTo(x+20, y+50);\r\n                              context.lineTo(x+220, y+80);\r\n                              context.quadraticCurveTo(x+150, y+100, x+260, y+170);\r\n                              context.closePath();\r\n                              context.fillStrokeShape(shape);\r\n                            },\r\n                            fill: \'#00D2FF\',\r\n                            stroke: \'black\',\r\n                            strokeWidth: 4,\r\n                            visible: true,\r\n                            draggable:true,\r\n                            visible:false,\r\n                          }"\r\n                        />\r\n                        <v-shape ref="ball"\r\n                          :config="{\r\n                            x:150,\r\n                            y:150,\r\n                            r:90,\r\n                            text:\'1\',\r\n                            fontSize:50,\r\n                            fill: \'aqua\',\r\n                            stroke: \'black\',\r\n                            textcolor:\'red\',\r\n                            strokeWidth: 1,\r\n                            draggable:true,  \r\n                            sel:false,      \r\n                            visible:false,\r\n                            sceneFunc: function (context, shape) {\r\n                              let fontSize=shape.getAttr(\'fontSize\');//40;\r\n                              context.beginPath();\r\n                              context.arc(0, 0, shape.getAttr(\'r\'), 0, 2 * Math.PI);\r\n                              context.fillStrokeShape(shape);\r\n                              let textcolor=shape.getAttr(\'textcolor\');\r\n                              context.fillStyle=textcolor;//\'white\';\r\n                              context.textBaseline = \'middle\'; \r\n                              context.textAlign = \'center\';\r\n                              context.font=`${fontSize}px verdana`;//verdana//Times New Roman\r\n                              context.fillText(`${shape.getAttr(\'text\')}`, 0,0);\r\n\r\n                            }\r\n                          }"\r\n                        />\r\n                        <v-shape ref="board" :config="{\r\n                          x:50,\r\n                          y:50,\r\n                          width:300,\r\n                          height:100,\r\n                          text:\'Thức 101\',\r\n                          fontSize:60,\r\n                          fill: \'yellow\',\r\n                          stroke: \'red\',\r\n                          strokeWidth: 1,\r\n                          draggable:true, \r\n                          visible:false,       \r\n                          sceneFunc: function (context, shape) {\r\n                            let fontSize=shape.getAttr(\'fontSize\');\r\n                            context.beginPath();\r\n                            context.rect(0, 0, shape.getAttr(\'width\'), shape.getAttr(\'height\'));\r\n                            context.fillStrokeShape(shape);\r\n                            context.fillStyle=\'red\';\r\n                            context.textBaseline = \'middle\'; \r\n                            context.textAlign = \'center\';\r\n                            context.font=`${fontSize}px Times New Roman`;\r\n                            context.fillText(`${shape.getAttr(\'text\')}`, shape.getAttr(\'width\')/2,shape.getAttr(\'height\')/2);\r\n                          }\r\n                        }">\r\n                        </v-shape>\r\n                    </v-layer>\r\n                </v-stage>\r\n            </div>\r\n          </div>\r\n\r\n      </b-col>\r\n      <b-col sm="9">\r\n        {{msg}}<br>{{hover}}\r\n        <div class="row no-gutters border-top p-1">\r\n          <div v-for="(x,i) in listData" :key="i" class="mb-1 mr-1 col-sm-2">\r\n            <div :class=" (i==hover) ? \'border border-primary\' : \'\' " style="position:relative" @mouseover=" hover=i " @mouseout=" hover=-1 " >\r\n              <img :src=" x.src " @click="onView(x.data)" class="img-thumbnail" >\r\n              <button @click="onDelData(i)" class="m-1" style="position:absolute; bottom:0; right: 0;">Del</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </b-col>\r\n    </b-row>\r\n  </div>\r\n</template>\r\n<script>\r\nvar sceneWidth = 1500;\r\nvar sceneHeight = 1000;\r\nvar stage=null;\r\nvar layer=null;\r\nexport default {\r\n  name: \'Tpl\',\r\n  components: {\r\n  },\r\n  computed: {\r\n  \ttest () {\r\n    \treturn \'hello\'\r\n    },\r\n  },\r\n  data(){\r\n    return{\r\n        msg:"hello",\r\n        configKonva: {\r\n          width: sceneWidth,\r\n          height: sceneHeight\r\n        },\r\n        configCircle: {\r\n          x: sceneWidth/2,\r\n          y: sceneHeight/2,\r\n          radius: 90,\r\n          fill: "yellow",\r\n          stroke: "black",\r\n          strokeWidth: 5,\r\n          draggable:true,\r\n          visible:false,\r\n        },\r\n        count:0,\r\n        p:{},\r\n\r\n\r\n\r\n        \r\n        arPoint:[],\r\n        Sel:[],\r\n        arSel:[],\r\n        unLink:false,\r\n        listData:[],\r\n        hover:-1,\r\n    }\r\n  },\r\n  mounted(){\r\n    this.$nextTick(function(){\r\n      layer=this.$refs.layer.getNode();\r\n      stage=this.$refs.stage.getNode();\r\n      window.addEventListener("resize", this.fitStageIntoParentContainer);\r\n      this.fitStageIntoParentContainer();\r\n    })\r\n  },\r\n  created(){\r\n  },\r\n  methods:{\r\n    onDelData(i){\r\n    },\r\n    onView(data){\r\n    },\r\n    onSave(){\r\n    },\r\n    load(data){\r\n    },\r\n    onLoad(){\r\n    },\r\n    reset(){\r\n    },\r\n    onReset(){\r\n    },\r\n    onDel(){\r\n    },\r\n    onUnlink(id1,id2){\r\n    },\r\n    chkPairExist(id1,id2){\r\n    },\r\n    onLink(){\r\n    },\r\n    drawLine(){\r\n    },\r\n    draw(){\r\n      this.getListBall().forEach((x,i)=>{\r\n        this.drawBall(x);\r\n      })\r\n      this.msg={\r\n        p:this.p,\r\n        getSel:this.getSel()\r\n      }\r\n    },\r\n    createLine(name){\r\n      let line=this.$refs.line.getNode().clone();\r\n      line.visible(true);\r\n      line.name(name);\r\n      return line;\r\n    },\r\n    createBall(x,y,r,name,id){\r\n      let that=this;\r\n      let ball=this.$refs.ball.getNode().clone();\r\n      ball.visible(true);\r\n      ball.x(x);\r\n      ball.y(y);\r\n      ball.setAttr(\'r\',r);\r\n      ball.fill("yellow");\r\n      ball.stroke(\'black\');\r\n      ball.name(name);\r\n      ball.id(id);\r\n      ball.setAttr("text",id);\r\n      ball.on("click",function(e){\r\n      });\r\n      ball.on("mouseenter",function(e){\r\n      });\r\n      ball.on("mouseleave",function(e){\r\n      });\r\n      ball.on("dragend",function(e){\r\n      });\r\n      ball.on("dragmove",function(e){\r\n      });\r\n      return ball;\r\n    },\r\n    drawBall(ball){\r\n      let sel=ball.getAttr("sel");\r\n      let colorFill;\r\n      let colorText;\r\n      if(sel==false){\r\n        colorFill=\'yellow\';\r\n        colorText=\'blue\';\r\n      }else{\r\n        colorFill=\'blue\';\r\n        colorText=\'white\';\r\n      }\r\n      ball.fill(colorFill);\r\n      ball.setAttr(\'textcolor\',colorText);\r\n    },\r\n    clearSel(){\r\n      this.getListBall().forEach((x,i)=>{\r\n        x.setAttr("sel",false);\r\n      })\r\n    },\r\n    getSel(){\r\n      let ar=[];\r\n      this.getListBall().forEach((x,i)=>{\r\n        if(x.getAttr("sel")==true){\r\n          ar.push( parseInt(x.id()));\r\n        }\r\n      })\r\n      return ar;\r\n    },\r\n    onStageClick(e){\r\n      let chk=e.target.name();\r\n      if(chk==\'myball\'){\r\n        let sel=e.target.getAttr("sel");\r\n        e.target.setAttr("sel",!sel);\r\n        let lSel=this.getSel();\r\n        let line=this.getLinePointer();\r\n        if(lSel.length==1){\r\n          line.visible(true);\r\n        }else{\r\n          line.visible(false);\r\n        }\r\n      }else{\r\n        let p=this.myGetMouse();\r\n        let id=this.count;\r\n        let ball=this.createBall(p.x,p.y,60,"myball",this.count.toString());\r\n        this.count++;\r\n        layer.add(ball);\r\n      }\r\n      this.draw();\r\n    },\r\n    onStageMouseMove(e){\r\n      let chk=e.target.name();\r\n      if(chk==\'myball\'){\r\n        if(this.getSel().length==1){\r\n          let id=this.getSel()[0];\r\n          let x1=this.getBallById(id).x();\r\n          let y1=this.getBallById(id).y();\r\n          let p={\r\n            x:e.target.x(),\r\n            y:e.target.y()\r\n          }\r\n          this.drawLinePointer(x1,y1,p.x,p.y);\r\n        }\r\n      }else{\r\n        if(this.getSel().length==1){\r\n          let id=this.getSel()[0];\r\n          let x1=this.getBallById(id).x();\r\n          let y1=this.getBallById(id).y();\r\n          let p=this.myGetMouse();\r\n          this.drawLinePointer(x1,y1,p.x,p.y);\r\n        }\r\n      }\r\n      this.p=this.myGetMouse();\r\n      this.draw();\r\n    },\r\n    onStageMouseenter(e){\r\n    },\r\n    onStageMouseleave(e){\r\n    },\r\n    getPointer(){\r\n      let pointer;\r\n      if(layer.find(\'.mypointer\').length==0){\r\n        pointer=this.$refs.circle.getNode().clone();\r\n        pointer.name(\'mypointer\');\r\n        pointer.radius(60);\r\n        pointer.fill(\'white\');\r\n        layer.add(pointer);\r\n      }else{\r\n        pointer=layer.find(\'.mypointer\')[0];\r\n      }\r\n      pointer.moveToBottom();\r\n      return pointer;\r\n    },\r\n    getLinePointer(){\r\n      let pointer;\r\n      if(layer.find(\'.mylinepointer\').length==0){\r\n        pointer=this.$refs.line.getNode().clone();\r\n        pointer.points([]);\r\n        pointer.name(\'mylinepointer\');\r\n        layer.add(pointer);\r\n      }else{\r\n        pointer=layer.find(\'.mylinepointer\')[0];\r\n      }\r\n      pointer.moveToBottom();\r\n      return pointer;\r\n    },\r\n    drawLinePointer(x1,y1,x2,y2){\r\n      this.getLinePointer().points([x1,y1,x2,y2]);\r\n    },\r\n    getListRect(){ return layer.find(".myrect") },\r\n    getListLine(){ return layer.find(".myline") },\r\n    getListBall(){ return layer.find(".myball") },\r\n    getBallById(id){ return layer.find(`#${id}`)[0] },\r\n    myGetMouse() {\r\n      let scale=stage.scale().x;\r\n      var mousePos = stage.getPointerPosition();\r\n      var x = mousePos.x;\r\n      var y = mousePos.y;\r\n      var xx = Math.round(x / scale);\r\n      var yy = Math.round(y / scale);\r\n      return { x: xx, y: yy };\r\n    },\r\n    fitStageIntoParentContainer() {\r\n      var container = document.querySelector(\'#stage-parent\');\r\n      var containerWidth = container.offsetWidth;\r\n      var scale = containerWidth / sceneWidth;\r\n      stage.width(sceneWidth * scale);\r\n      stage.height(sceneHeight * scale);\r\n      stage.scale({ x: scale, y: scale });\r\n      this.configKonva.width = sceneWidth * scale;\r\n      this.configKonva.height = sceneHeight * scale;\r\n    },\r\n  }\r\n}\r\n<\/script>\r\n<style scoped>\r\n</style>\r\n'}}]);
//# sourceMappingURL=657-legacy.1c4942ac.js.map