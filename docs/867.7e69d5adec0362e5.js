"use strict";(self.webpackChunkFacebook=self.webpackChunkFacebook||[]).push([[867],{8867:(v,a,r)=>{r.r(a),r.d(a,{AuthModule:()=>g});var d=r(6895),s=r(6771),n=r(8256);class l{}l.\u0275fac=function(t){return new(t||l)},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-auth"]],decls:1,vars:0,template:function(t,e){1&t&&n._UZ(0,"router-outlet")},dependencies:[s.lC]});var i=r(433),_=r(1942);function f(o,t){if(1&o&&(n.TgZ(0,"div"),n._uU(1),n.qZA()),2&o){const e=n.oxw();n.xp6(1),n.hij(" ",e.message," ")}}function p(o,t){1&o&&(n.TgZ(0,"small"),n._uU(1,"*Login input shout not be empty"),n.qZA())}function u(o,t){1&o&&(n.TgZ(0,"small"),n._uU(1,"*Login input has inorrect value"),n.qZA())}function C(o,t){if(1&o&&(n.TgZ(0,"div",8),n.YNc(1,p,2,0,"small",1),n.YNc(2,u,2,0,"small",1),n.qZA()),2&o){const e=n.oxw();n.xp6(1),n.Q6J("ngIf",e.form.get("email").errors.required),n.xp6(1),n.Q6J("ngIf",e.form.get("email").errors.email)}}function h(o,t){1&o&&(n.TgZ(0,"small"),n._uU(1,"*Password input shout not be empty"),n.qZA())}function M(o,t){1&o&&(n.TgZ(0,"small"),n._uU(1,"*Password input has short value"),n.qZA())}function O(o,t){if(1&o&&(n.TgZ(0,"div",8),n.YNc(1,h,2,0,"small",1),n.YNc(2,M,2,0,"small",1),n.qZA()),2&o){const e=n.oxw();n.xp6(1),n.Q6J("ngIf",e.form.get("password").errors.required),n.xp6(1),n.Q6J("ngIf",e.form.get("password").errors.minlength)}}class m{constructor(t,e){this.router=t,this.logService=e,this.submitted=!1}ngOnInit(){this.setForm()}setForm(){this.form=new i.cw({email:new i.NI("",[i.kI.required,i.kI.email]),password:new i.NI("",[i.kI.required,i.kI.minLength(6)])})}addForm(){this.form.invalid||(this.submitted=!0,this.logService.logIn({email:this.form.value.email,password:this.form.value.password}).subscribe(()=>{this.form.reset(),this.router.navigate(["/"]),this.submitted=!1},e=>this.submitted=!1))}}m.\u0275fac=function(t){return new(t||m)(n.Y36(s.F0),n.Y36(_.$))},m.\u0275cmp=n.Xpm({type:m,selectors:[["app-log-form"]],decls:11,vars:5,consts:[["action","",1,"form",3,"formGroup","ngSubmit"],[4,"ngIf"],["type","email","placeholder","max@gmail.com","formControlName","email",1,"form_input"],["class","form_error",4,"ngIf"],["type","password","placeholder","facebook","formControlName","password",1,"form_input"],["type","submit",1,"form_log",3,"disabled"],[1,"brd"],[1,"form_lognew"],[1,"form_error"]],template:function(t,e){1&t&&(n.TgZ(0,"form",0),n.NdJ("ngSubmit",function(){return e.addForm()}),n.YNc(1,f,2,1,"div",1),n._UZ(2,"input",2),n.YNc(3,C,3,2,"div",3),n._UZ(4,"input",4),n.YNc(5,O,3,2,"div",3),n.TgZ(6,"button",5),n._uU(7,"Log in"),n.qZA(),n._UZ(8,"div",6),n.TgZ(9,"button",7),n._uU(10,"Create new account"),n.qZA()()),2&t&&(n.Q6J("formGroup",e.form),n.xp6(1),n.Q6J("ngIf",e.message),n.xp6(2),n.Q6J("ngIf",e.form.get("email").invalid&&e.form.get("email").touched),n.xp6(2),n.Q6J("ngIf",e.form.get("password").invalid&&e.form.get("password").touched),n.xp6(1),n.Q6J("disabled",e.form.invalid&&e.form.untouched||e.submitted))},dependencies:[d.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u],styles:[".form[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:15px;background-color:#fff;border-radius:5px;box-shadow:0 2px 5px gray;align-items:center}.form[_ngcontent-%COMP%]   .form_input[_ngcontent-%COMP%]{width:94%;outline:0;padding:10px 15px;margin-bottom:20px;border:1px solid #c0bbbb;border-radius:7px}.form[_ngcontent-%COMP%]   .form_error[_ngcontent-%COMP%]{color:red;margin-bottom:10px;margin-top:-15px;width:100%}.form[_ngcontent-%COMP%]   .form_log[_ngcontent-%COMP%]{background-color:#1877f2;border:0;border-radius:7px;color:#fff;font-size:1.3rem;font-weight:700;padding:7px;width:40%}.form[_ngcontent-%COMP%]   .form_log[_ngcontent-%COMP%]:hover{background-color:#115dbe;transition:all .2s ease-in}.form[_ngcontent-%COMP%]   .brd[_ngcontent-%COMP%]{margin:15px 0;border-top:1px solid gray;width:100%}.form[_ngcontent-%COMP%]   .form_lognew[_ngcontent-%COMP%]{background-color:#49be32;border-radius:7px;font-size:.9rem;font-weight:700;border:0;color:#fff;padding:7px}.form[_ngcontent-%COMP%]   .form_lognew[_ngcontent-%COMP%]:hover{transition:all .2s ease-in;background-color:#32b019}"]});class c{}c.\u0275fac=function(t){return new(t||c)},c.\u0275cmp=n.Xpm({type:c,selectors:[["app-login",8,"ts"]],attrs:["class","ts"],decls:10,vars:0,consts:[[1,"login"],[1,"login_inner"],[1,"login_inner_lf"],[1,"login_inner_lf_log"],[1,"login_inner_lf_text"],[1,"login_inner_rg"]],template:function(t,e){1&t&&(n.TgZ(0,"div")(1,"div",0)(2,"div",1)(3,"div",2)(4,"h1",3),n._uU(5,"facebook"),n.qZA(),n.TgZ(6,"p",4),n._uU(7,"Connect with friends and the world around you on Facebook."),n.qZA()(),n.TgZ(8,"div",5),n._UZ(9,"app-log-form"),n.qZA()()()())},dependencies:[m],styles:["div[_ngcontent-%COMP%]{background-color:#f3f3f3}div[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{max-width:1120px;margin:0 auto}div[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login_inner[_ngcontent-%COMP%]{padding:0 15px;height:100vh;display:flex;flex-direction:row;align-items:center}@media (max-width: 920px){div[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login_inner[_ngcontent-%COMP%]{flex-direction:column;align-items:center;justify-content:center}}div[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login_inner[_ngcontent-%COMP%]   .login_inner_lf[_ngcontent-%COMP%]{flex-basis:50%}@media (max-width: 920px){div[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login_inner[_ngcontent-%COMP%]   .login_inner_lf[_ngcontent-%COMP%]{flex-basis:unset;width:60%;display:flex;align-items:center;flex-direction:column}}@media (max-width: 560px){div[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login_inner[_ngcontent-%COMP%]   .login_inner_lf[_ngcontent-%COMP%]{width:100%}}div[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login_inner[_ngcontent-%COMP%]   .login_inner_lf[_ngcontent-%COMP%]   .login_inner_lf_log[_ngcontent-%COMP%]{font-size:1.8rem}div[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login_inner[_ngcontent-%COMP%]   .login_inner_lf[_ngcontent-%COMP%]   .login_inner_lf_text[_ngcontent-%COMP%]{font-size:1.2rem}@media (max-width: 920px){div[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login_inner[_ngcontent-%COMP%]   .login_inner_lf[_ngcontent-%COMP%]   .login_inner_lf_text[_ngcontent-%COMP%]{text-align:center}}div[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login_inner[_ngcontent-%COMP%]   .login_inner_rg[_ngcontent-%COMP%]{flex-basis:50%}@media (max-width: 920px){div[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login_inner[_ngcontent-%COMP%]   .login_inner_rg[_ngcontent-%COMP%]{margin-top:50px;flex-basis:unset;width:70%}}@media (max-width: 560px){div[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login_inner[_ngcontent-%COMP%]   .login_inner_rg[_ngcontent-%COMP%]{width:100%}}"]});const x=[{path:"",component:l,children:[{path:"",component:c}]}];class g{}g.\u0275fac=function(t){return new(t||g)},g.\u0275mod=n.oAB({type:g}),g.\u0275inj=n.cJS({imports:[d.ez,s.Bz.forChild(x),i.u5,i.UX]})}}]);