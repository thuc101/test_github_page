(self["webpackChunkvue_start_1"]=self["webpackChunkvue_start_1"]||[]).push([[7321],{37321:function(r,n,t){"use strict";t.r(n),t.d(n,{default:function(){return g}});var e=function(){var r=this,n=r.$createElement,e=r._self._c||n;return e("div",{staticClass:"home"},[e("raw-loader",{attrs:{mytxt:t(61211).Z}}),e("h1",[r._v("Test login")]),e("b-row",[e("b-col",{attrs:{md:"2"}},[e("b-img",{attrs:{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv7CjqIxz7niAdt1MxlZM_iPsNAgGcnlKinuS-IiT42mwF-49Qi64wvAQLPvn2ecyL5Lw&usqp=CAU",fluid:"",alt:"Fluid image"}})],1),e("b-col",{attrs:{md:"10"}},[e("div",{staticClass:"border-bottom pb-1 "},[e("b-row",[e("b-col",{staticClass:"border-right",attrs:{md:"7"}},[r._v(" "+r._s(r.user)+" ")]),e("b-col",{staticClass:"p-1",attrs:{md:"5"}},[e("div",{class:{border:!1}},[""==r.token?e("div",{staticClass:"text-right pr-4"},[r._v(" username: "),e("input",{directives:[{name:"model",rawName:"v-model",value:r.acc.username,expression:"acc.username"}],staticClass:"mb-1",domProps:{value:r.acc.username},on:{input:function(n){n.target.composing||r.$set(r.acc,"username",n.target.value)}}}),e("br"),r._v(" password: "),e("input",{directives:[{name:"model",rawName:"v-model",value:r.acc.password,expression:"acc.password"}],staticClass:"mb-1",domProps:{value:r.acc.password},on:{input:function(n){n.target.composing||r.$set(r.acc,"password",n.target.value)}}}),e("br"),e("button",{on:{click:r.onLogin}},[r._v("Login")])]):e("div",[e("button",{on:{click:r.onLogout}},[r._v("Logout")])])])])],1)],1)])],1),e("div",{staticClass:"border mt-1"},[e("b-row",[e("b-col",{attrs:{md:"4"}},[e("div",{staticClass:"border-right bg-light p-1"},[e("button",{on:{click:r.TestAdminOnly}},[r._v("TestAdminOnly")]),e("button",{on:{click:r.TestThemHs}},[r._v("TestThemHs")])])]),e("b-col",{attrs:{md:"8"}},[r._v(" Right ")])],1)],1)],1)},s=[],a=t(77673),o=t(16198),i=(t(38862),t(70790)),u=t(53009),c={components:{},data:function(){return{acc:{username:"admin",password:"admin"},token:"",user:{}}},mounted:function(){var r=localStorage.getItem("token")?localStorage.getItem("token"):"";this.token=r,this.GetUserInfo()},methods:{onLogout:function(){localStorage.removeItem("token"),location.reload()},onLogin:function(){var r={Username:this.acc.username,Password:this.acc.password};this.Login(r)},Login:function(r){var n=this;return(0,o.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.Z.post("/api/NguoiDung5/Login",r).then((function(r){alert("Đăng nhập thành công."),n.user.Username=r.data.kq.Username,n.user.Role=r.data.kq.Role;var t=r.data.kq.Token;localStorage.setItem("token",t),location.reload()})).catch((function(r){u.Z.XuLyErr(r)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},GetUserInfo:function(){var r=this;return(0,o.Z)((0,a.Z)().mark((function n(){return(0,a.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/api/NguoiDung5/GetUserInfo").then((function(n){r.user={user:n.data.user,maxlevel:n.data.maxlevel,roles:n.data.roles,roles2:n.data.roles2}})).catch((function(r){u.Z.XuLyErr(r)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))()},TestAdminOnly:function(){return(0,o.Z)((0,a.Z)().mark((function r(){return(0,a.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,i.Z.get("/api/NguoiDung5/TestAdminOnly").then((function(r){alert(JSON.stringify(r))})).catch((function(r){u.Z.XuLyErr(r)}));case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r)})))()},TestThemHs:function(){return(0,o.Z)((0,a.Z)().mark((function r(){return(0,a.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,i.Z.get("/api/NguoiDung5/TestThemHs").then((function(r){alert(JSON.stringify(r))})).catch((function(r){u.Z.XuLyErr(r)}));case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r)})))()}}},l=c,d=t(1001),m=(0,d.Z)(l,e,s,!1,null,null,null),g=m.exports},38862:function(r,n,t){var e=t(82109),s=t(35005),a=t(22104),o=t(46916),i=t(1702),u=t(47293),c=t(43157),l=t(60614),d=t(70111),m=t(52190),g=t(50206),h=t(30133),p=s("JSON","stringify"),f=i(/./.exec),v=i("".charAt),b=i("".charCodeAt),w=i("".replace),k=i(1..toString),y=/[\uD800-\uDFFF]/g,T=/^[\uD800-\uDBFF]$/,L=/^[\uDC00-\uDFFF]$/,N=!h||u((function(){var r=s("Symbol")();return"[null]"!=p([r])||"{}"!=p({a:r})||"{}"!=p(Object(r))})),x=u((function(){return'"\\udf06\\ud834"'!==p("\udf06\ud834")||'"\\udead"'!==p("\udead")})),C=function(r,n){var t=g(arguments),e=n;if((d(n)||void 0!==r)&&!m(r))return c(n)||(n=function(r,n){if(l(e)&&(n=o(e,this,r,n)),!m(n))return n}),t[1]=n,a(p,null,t)},S=function(r,n,t){var e=v(t,n-1),s=v(t,n+1);return f(T,r)&&!f(L,s)||f(L,r)&&!f(T,e)?"\\u"+k(b(r,0),16):r};p&&e({target:"JSON",stat:!0,arity:3,forced:N||x},{stringify:function(r,n,t){var e=g(arguments),s=a(N?C:p,null,e);return x&&"string"==typeof s?w(s,y,S):s}})},61211:function(r,n){"use strict";n["Z"]='<template>\r\n    <div class="home">\r\n        <raw-loader :mytxt="require(\'!raw-loader!./TestLogin.vue\').default"></raw-loader>\r\n        <h1>Test login</h1>\r\n        <b-row>\r\n            <b-col md="2">\r\n                <b-img\r\n                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv7CjqIxz7niAdt1MxlZM_iPsNAgGcnlKinuS-IiT42mwF-49Qi64wvAQLPvn2ecyL5Lw&usqp=CAU"\r\n                    fluid alt="Fluid image"></b-img>\r\n            </b-col>\r\n            <b-col md="10">\r\n                \x3c!-- {{ token }} --\x3e\r\n                <div class="border-bottom pb-1 ">\r\n                        <b-row>\r\n                            <b-col md="7" class="border-right">\r\n                                {{ user }}\r\n                            </b-col>\r\n                            <b-col md="5" class="p-1">\r\n                                <div :class="{\'border\': false }">\r\n                                    <div class="text-right pr-4" v-if=" token == \'\' ">\r\n                                        username: <input v-model="acc.username" class="mb-1" /><br>\r\n                                        password: <input v-model="acc.password" class="mb-1" /><br>\r\n                                        <button @click="onLogin">Login</button>\r\n                                    </div>\r\n                                    <div v-else>\r\n                                        <button @click="onLogout">Logout</button>\r\n                                    </div>\r\n                                </div>\r\n                            </b-col>\r\n                        </b-row>\r\n                </div>\r\n            </b-col>\r\n        </b-row>\r\n\r\n        <div class="border mt-1"> \r\n            <b-row> \r\n                <b-col md="4" class=""> \r\n                    <div class="border-right bg-light p-1"> \r\n                        <button @click="TestAdminOnly">TestAdminOnly</button>\r\n                        <button @click="TestThemHs">TestThemHs</button>\r\n                    </div>\r\n                </b-col>\r\n                <b-col md="8"> \r\n                    \r\n                    Right \r\n\r\n                </b-col>\r\n            </b-row>\r\n        </div>\r\n\r\n\r\n    </div>\r\n</template>\r\n<script>\r\nimport fetchClient from \'@/fetchClient\';\r\nimport TumLum from \'@/TumLum\';\r\nexport default {\r\n    components: {\r\n    },\r\n    data(){\r\n        return{\r\n            acc:{\r\n                username:\'admin\',\r\n                password:\'admin\'\r\n            },\r\n            token:\'\',\r\n            user:{},\r\n        }\r\n    },\r\n    mounted(){\r\n        let token = (localStorage.getItem("token")) ? localStorage.getItem("token") : \'\';\r\n        this.token = token;\r\n        this.GetUserInfo();\r\n    },\r\n    methods: {\r\n        onLogout() {\r\n            localStorage.removeItem("token");\r\n            location.reload();\r\n        },\r\n        onLogin(){\r\n            let user={\r\n                Username:this.acc.username,\r\n                Password:this.acc.password\r\n            }\r\n            this.Login(user);\r\n        },\r\n        async Login(r){\r\n            return await fetchClient.post(`/api/NguoiDung5/Login`,r)\r\n            .then(res=>{\r\n                //alert(JSON.stringify(res));\r\n                //return;\r\n                alert(`Đăng nhập thành công.`);\r\n                this.user.Username=res.data.kq.Username;\r\n                this.user.Role=res.data.kq.Role;\r\n                let token = res.data.kq.Token;\r\n                localStorage.setItem("token", token);\r\n                location.reload();\r\n            }).catch(err=>{\r\n                TumLum.XuLyErr(err);\r\n            })\r\n        },\r\n        async GetUserInfo() {\r\n            return await fetchClient.get(`/api/NguoiDung5/GetUserInfo`)\r\n                .then(res => {\r\n                    //alert(JSON.stringify(res));\r\n                    /*\r\n                    {"data":{\r\n                        "user":{\r\n                            "Id":1,\r\n                            "FirstName":"admin",\r\n                            "LastName":"Nguyễn",\r\n                            "Username":"admin","Password":"","Role":"1,4,2,3","Token":null,"TrangThai":true},\r\n                        "maxlevel":9,\r\n                        "roles":\r\n                            ["Admin","User","NhanVien","ChuQuan"],\r\n                        "msg":"Get user info"},"status":200,"\r\n                        "roles2":\r\n                            ["Admin","User","NhanVien","ChuQuan"],"msg":"Get                        \r\n                    */\r\n                    this.user={\r\n                        user:res.data.user,\r\n                        maxlevel:res.data.maxlevel,\r\n                        roles:res.data.roles,\r\n                        roles2:res.data.roles2\r\n                    };\r\n                    //res.data.user;\r\n                })\r\n                .catch(err => {\r\n                    TumLum.XuLyErr(err);\r\n                })\r\n        },\r\n        async TestAdminOnly() {\r\n            return await fetchClient.get(`/api/NguoiDung5/TestAdminOnly`)\r\n                .then(res => {\r\n                    //this.user=res.data.user;\r\n                    alert(JSON.stringify(res));\r\n                })\r\n                .catch(err => {\r\n                    TumLum.XuLyErr(err);\r\n                })\r\n        },\r\n        async TestThemHs() {\r\n            return await fetchClient.get(`/api/NguoiDung5/TestThemHs`)\r\n                .then(res => {\r\n                    //this.user=res.data.user;\r\n                    alert(JSON.stringify(res));\r\n                })\r\n                .catch(err => {\r\n                    TumLum.XuLyErr(err);\r\n                })\r\n        },\r\n\r\n\r\n    }\r\n}\r\n<\/script>\r\n  '},53009:function(r,n,t){"use strict";t(38862);n["Z"]={XuLyErr:function(r){var n=JSON.parse(JSON.stringify(r)).status;if(400==n){var t=JSON.parse(JSON.stringify(r.response)).data.message;alert(t)}else r.response?401==r.response.status?alert("Chưa đăng nhập hoặc token hết hạn"):403==r.response.status&&alert("Bạn ko có quyền"):r.request?alert(JSON.stringify(r.request)):r.message&&alert(JSON.stringify(r.message))}}},70790:function(r,n,t){"use strict";var e=t(9669),s=t.n(e),a=function(){var r={baseURL:"",method:"get",headers:{"Content-Type":"application/json;charset=utf-8"}},n=s().create(r);return n.interceptors.request.use((function(r){var n=localStorage.getItem("token");return r.headers.Authorization=n?"Bearer ".concat(n):"",r})),n};n["Z"]=a()}}]);
//# sourceMappingURL=7321-legacy.549c1fb9.js.map