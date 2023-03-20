"use strict";(self.webpackChunkFacebook=self.webpackChunkFacebook||[]).push([[665],{8665:(D,u,l)=>{l.r(u),l.d(u,{BlogModule:()=>p});var g=l(6895),s=l(6771),n=l(8256),_=l(5175);const C=function(){return["content"]},x=function(){return{exact:!0}},O=function(){return["photos"]},P=function(){return["people"]};class r{constructor(e,t){this.blogService=e,this.router=t,this.allBlogs=[]}ngOnInit(){this.getBLogs(),this.router.navigate(["/blogs","content"])}getBLogs(){this.blogService.getBLogs().subscribe(e=>{this.allBlogs=e})}}r.\u0275fac=function(e){return new(e||r)(n.Y36(_.Q),n.Y36(s.F0))},r.\u0275cmp=n.Xpm({type:r,selectors:[["app-blogs-page"]],decls:10,vars:8,consts:[[1,"blog"],[1,"blog_log_choice"],["routerLinkActive","active",1,"blog_log_choice_type",3,"routerLink","routerLinkActiveOptions"],["routerLinkActive","active",1,"blog_log_choice_type",3,"routerLink"],[1,"blog_content"]],template:function(e,t){1&e&&(n.TgZ(0,"div",0)(1,"div",1)(2,"nav",2),n._uU(3,"Content"),n.qZA(),n.TgZ(4,"nav",3),n._uU(5,"Photos"),n.qZA(),n.TgZ(6,"nav",3),n._uU(7,"Find Friends"),n.qZA()(),n.TgZ(8,"div",4),n._UZ(9,"router-outlet"),n.qZA()()),2&e&&(n.xp6(2),n.Q6J("routerLink",n.DdM(4,C))("routerLinkActiveOptions",n.DdM(5,x)),n.xp6(2),n.Q6J("routerLink",n.DdM(6,O)),n.xp6(2),n.Q6J("routerLink",n.DdM(7,P)))},dependencies:[s.lC,s.rH,s.Od],styles:[".blog[_ngcontent-%COMP%]{margin:0 35px;display:flex;align-items:flex-start;flex-direction:column;animation:_ngcontent-%COMP%_open .7s}@media (max-width: 920px){.blog[_ngcontent-%COMP%]{margin:0 15px}}.blog[_ngcontent-%COMP%]   .blog_log_choice[_ngcontent-%COMP%]{position:fixed;background-color:#fff;left:37%;max-width:600px;justify-content:space-between;box-shadow:3px 10px 15px #c5bdbd;display:flex;flex-direction:row}@media (max-width: 920px){.blog[_ngcontent-%COMP%]   .blog_log_choice[_ngcontent-%COMP%]{left:25%}}@media (max-width: 720px){.blog[_ngcontent-%COMP%]   .blog_log_choice[_ngcontent-%COMP%]{left:5%}}.blog[_ngcontent-%COMP%]   .blog_log_choice[_ngcontent-%COMP%]   .blog_log_choice_type[_ngcontent-%COMP%]{padding:5px 15px;cursor:pointer}@media (max-width: 475px){.blog[_ngcontent-%COMP%]   .blog_log_choice[_ngcontent-%COMP%]   .blog_log_choice_type[_ngcontent-%COMP%]{font-size:.8rem}}.blog[_ngcontent-%COMP%]   .blog_log_choice[_ngcontent-%COMP%]   .blog_log_choice_type[_ngcontent-%COMP%]:hover{background-color:#7c7b7b;transition:all .8s ease}.blog[_ngcontent-%COMP%]   .blog_content[_ngcontent-%COMP%]{margin-top:100px;width:100%}@keyframes _ngcontent-%COMP%_open{0%{transform:translateY(-50px);opacity:0}to{transform:translateY(0);opacity:1}}"]});var M=l(529);const v=function(o){return["/blogs","content",o]};function k(o,e){if(1&o&&(n.TgZ(0,"div")(1,"div",5)(2,"h1",6),n._uU(3),n.qZA(),n.TgZ(4,"nav",7),n._uU(5,"Read more"),n.qZA()()()),2&o){const t=e.$implicit;n.xp6(1),n.Jzz("background-size: cover; background: url(",t.bgImage,")"),n.xp6(2),n.Oqu(t.title),n.xp6(1),n.Q6J("routerLink",n.VKq(5,v,t.id))}}function w(o,e){if(1&o&&(n.TgZ(0,"div",2)(1,"div",3),n.YNc(2,k,6,7,"div",4),n.qZA()()),2&o){const t=n.oxw();n.xp6(2),n.Q6J("ngForOf",t.blogs)}}function I(o,e){1&o&&n._UZ(0,"img",8)}class m{constructor(e){this.blogService=e,this.blogs=[]}ngOnInit(){this.blogService.getBLogs().subscribe(e=>{this.blogs=Object.values(e)})}}function y(o,e){if(1&o){const t=n.EpF();n.TgZ(0,"div",7),n.NdJ("click",function(){n.CHM(t);const c=n.oxw();return n.KtG(c.plusMe(c.imageSrc))}),n._uU(1,"\u271a"),n.qZA()}}function Z(o,e){1&o&&(n.TgZ(0,"div",10),n._uU(1,"\u2714"),n.qZA())}m.\u0275fac=function(e){return new(e||m)(n.Y36(_.Q))},m.\u0275cmp=n.Xpm({type:m,selectors:[["app-blogs-group"]],decls:3,vars:2,consts:[["class","blog",4,"ngIf","ngIfElse"],["loading",""],[1,"blog"],[1,"blog_inner"],[4,"ngFor","ngForOf"],[1,"blog_id"],[1,"blog_id_title"],[1,"blog_id_more",3,"routerLink"],["src","./assets/spinner.gif","alt","Loading",1,"loading"]],template:function(e,t){if(1&e&&(n.YNc(0,w,3,1,"div",0),n.YNc(1,I,1,0,"ng-template",null,1,n.W1O)),2&e){const i=n.MAs(2);n.Q6J("ngIf",t.blogs.length)("ngIfElse",i)}},dependencies:[g.sg,g.O5,s.rH],styles:[".blog[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:75%;margin:0 auto}@media (max-width: 920px){.blog[_ngcontent-%COMP%]{width:95%}}@media (max-width: 475px){.blog[_ngcontent-%COMP%]{width:100%}}.blog[_ngcontent-%COMP%]   .blog_id[_ngcontent-%COMP%]{width:100%;height:220px;display:flex;align-items:center;flex-direction:column;justify-content:space-evenly;margin-bottom:20px;border-width:6px;border-style:solid;border-image:linear-gradient(to right,#ffffff,#ffffff) 1}.blog[_ngcontent-%COMP%]   .blog_id_title[_ngcontent-%COMP%]{font-weight:700;font-size:1.2rem}@media (max-width: 475px){.blog[_ngcontent-%COMP%]   .blog_id_title[_ngcontent-%COMP%]{font-size:1rem;text-align:center}}.blog[_ngcontent-%COMP%]   .blog_id_more[_ngcontent-%COMP%]{opacity:0;color:#fff;cursor:pointer;background-image:linear-gradient(to left,#0652DD,#9980FA,#FDA7DF);padding:10px;border-radius:7px;background-size:200%;transition:.5s all;animation:_ngcontent-%COMP%_animrev .5s}.blog[_ngcontent-%COMP%]   .blog_id[_ngcontent-%COMP%]:hover{transition:all .5s;border-width:6px;border-style:solid;border-image:linear-gradient(to right,darkblue,darkorchid) 1}.blog[_ngcontent-%COMP%]   .blog_id[_ngcontent-%COMP%]:hover   .blog_id_more[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_anim .5s;opacity:1}.blog[_ngcontent-%COMP%]   .blog_id[_ngcontent-%COMP%]:hover   .blog_id_more[_ngcontent-%COMP%]:hover{background-position:right}.blog_content[_ngcontent-%COMP%]{position:absolute;inset:0;background:#7c7b7b}@keyframes _ngcontent-%COMP%_anim{0%{transform:translateY(50px);opacity:0}to{transform:translateY(0);opacity:1}}@keyframes _ngcontent-%COMP%_animrev{0%{transform:translateY(0);opacity:1}to{transform:translateY(50px);opacity:0}}"]});class d{constructor(e){this.blogService=e,this.closesImage=new n.vpe,this.plusImage=new n.vpe}ngOnInit(){}close(e){this.closesImage.emit(e),document.body.style.overflow=""}plusMe(e){const t={...e,my:!0};this.blogService.setMePhoto(t).subscribe(),this.blogService.setChangePhoto(t).subscribe(i=>{this.plusImage.emit(!1)}),document.body.style.overflow=""}}function T(o,e){if(1&o){const t=n.EpF();n.TgZ(0,"nav",5)(1,"img",6),n.NdJ("click",function(){const a=n.CHM(t).$implicit,j=n.oxw(2);return n.KtG(j.showImg(a))}),n.qZA()()}if(2&o){const t=e.$implicit;n.xp6(1),n.Q6J("src",t.img,n.LSH)}}function B(o,e){if(1&o&&(n.TgZ(0,"div",3),n.YNc(1,T,2,1,"nav",4),n.qZA()),2&o){const t=n.oxw();n.xp6(1),n.Q6J("ngForOf",t.photos)}}function A(o,e){1&o&&n._UZ(0,"img",7)}function F(o,e){if(1&o){const t=n.EpF();n.TgZ(0,"app-image-block",8),n.NdJ("plusImage",function(c){n.CHM(t);const a=n.oxw();return n.KtG(a.plusImage(c))})("closesImage",function(c){n.CHM(t);const a=n.oxw();return n.KtG(a.closesImage(c))}),n.qZA()}if(2&o){const t=n.oxw();n.Q6J("imageSrc",t.photo)}}d.\u0275fac=function(e){return new(e||d)(n.Y36(_.Q))},d.\u0275cmp=n.Xpm({type:d,selectors:[["app-image-block"]],inputs:{imageSrc:"imageSrc"},outputs:{closesImage:"closesImage",plusImage:"plusImage"},decls:12,vars:5,consts:[[1,"image"],[1,"image_block"],[1,"image_download"],[3,"href","download"],["src","./assets/icons8-download-24.png","alt","Download"],["class","close",3,"click",4,"ngIf","ngIfElse"],["minus",""],[1,"close",3,"click"],[1,"image_inner"],["alt","",1,"image_active",3,"src"],[1,"close"]],template:function(e,t){if(1&e&&(n.TgZ(0,"div",0)(1,"div",1)(2,"span",2)(3,"a",3),n._UZ(4,"img",4),n.qZA()(),n.YNc(5,y,2,0,"div",5),n.YNc(6,Z,2,0,"ng-template",null,6,n.W1O),n.TgZ(8,"div",7),n.NdJ("click",function(){return t.close(!1)}),n._uU(9,"\u2716"),n.qZA()(),n.TgZ(10,"nav",8),n._UZ(11,"img",9),n.qZA()()),2&e){const i=n.MAs(7);n.xp6(3),n.s9C("href",t.imageSrc.img,n.LSH),n.Q6J("download",t.imageSrc.img),n.xp6(2),n.Q6J("ngIf",0==t.imageSrc.my)("ngIfElse",i),n.xp6(6),n.s9C("src",t.imageSrc.img,n.LSH)}},dependencies:[g.O5],styles:[".image[_ngcontent-%COMP%]{position:absolute;inset:-90px 0 0;z-index:9999;background-color:#222222e6}.image[_ngcontent-%COMP%]   .image_block[_ngcontent-%COMP%]{position:sticky;justify-content:right;top:10%;margin-right:5%;align-items:center;display:flex;flex-direction:row}.image[_ngcontent-%COMP%]   .image_block[_ngcontent-%COMP%]   .image_download[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{padding-top:10px;color:#fff}.image[_ngcontent-%COMP%]   .image_block[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{margin-left:15px;cursor:pointer;font-size:1.2rem;color:#fff}.image[_ngcontent-%COMP%]   .image_inner[_ngcontent-%COMP%]{max-width:65%;margin:50px auto;position:sticky;top:15%}@media (max-width: 720px){.image[_ngcontent-%COMP%]   .image_inner[_ngcontent-%COMP%]{max-width:95%}}.image[_ngcontent-%COMP%]   .image_inner[_ngcontent-%COMP%]   .image_active[_ngcontent-%COMP%]{width:100%;height:100%}"]});class b{constructor(e){this.photosService=e,this.photos=[],this.isLoading=!0,this.closeImage=!1}ngOnInit(){this.isLoading=!0,this.photosService.getPhotos().subscribe(e=>{this.photos=Object.values(e),this.isLoading=!1})}closesImage(e){this.closeImage=e}plusImage(e){this.closeImage=e,this.ngOnInit()}showImg(e){this.showImage=e.img,this.photo=e,document.body.style.overflow="hidden",this.closeImage=!0}}b.\u0275fac=function(e){return new(e||b)(n.Y36(_.Q))},b.\u0275cmp=n.Xpm({type:b,selectors:[["app-photos-block"]],decls:4,vars:3,consts:[["class","photos",4,"ngIf","ngIfElse"],["loading",""],[3,"imageSrc","plusImage","closesImage",4,"ngIf"],[1,"photos"],["class","photos_blocs",4,"ngFor","ngForOf"],[1,"photos_blocs"],[3,"src","click"],["src","./assets/spinner.gif","alt","loading",1,"loading"],[3,"imageSrc","plusImage","closesImage"]],template:function(e,t){if(1&e&&(n.YNc(0,B,2,1,"div",0),n.YNc(1,A,1,0,"ng-template",null,1,n.W1O),n.YNc(3,F,1,1,"app-image-block",2)),2&e){const i=n.MAs(2);n.Q6J("ngIf",t.photos.length)("ngIfElse",i),n.xp6(3),n.Q6J("ngIf",t.closeImage)}},dependencies:[g.sg,g.O5,d],styles:[".photos[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-evenly;height:100%;width:100%}.photos[_ngcontent-%COMP%]   .photos_blocs[_ngcontent-%COMP%]{padding:5px;max-width:300px;height:300px}@media (max-width: 1124px){.photos[_ngcontent-%COMP%]   .photos_blocs[_ngcontent-%COMP%]{max-width:30%;height:240px}}@media (max-width: 720px){.photos[_ngcontent-%COMP%]   .photos_blocs[_ngcontent-%COMP%]{max-width:300px;height:300px}}.photos[_ngcontent-%COMP%]   .photos_blocs[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}"]});var S=l(6046);function Y(o,e){1&o&&n._UZ(0,"nav",11)}function J(o,e){if(1&o){const t=n.EpF();n.TgZ(0,"button",12),n.NdJ("click",function(){n.CHM(t);const c=n.oxw().$implicit,a=n.oxw(2);return n.KtG(a.add(c))}),n._uU(1,"Add"),n.qZA()}if(2&o){const t=n.oxw(3);n.Q6J("disabled",t.disable)}}function L(o,e){if(1&o){const t=n.EpF();n.TgZ(0,"button",12),n.NdJ("click",function(){n.CHM(t);const c=n.oxw().$implicit,a=n.oxw(2);return n.KtG(a.delete(c))}),n._uU(1,"Delete"),n.qZA()}if(2&o){const t=n.oxw(3);n.Q6J("disabled",t.disable)}}function Q(o,e){if(1&o&&(n.TgZ(0,"div",4)(1,"nav",5),n._UZ(2,"img",6),n.YNc(3,Y,1,0,"nav",7),n.qZA(),n.TgZ(4,"p",8),n._uU(5),n.qZA(),n.YNc(6,J,2,1,"button",9),n.YNc(7,L,2,1,"ng-template",null,10,n.W1O),n.qZA()),2&o){const t=e.$implicit,i=n.MAs(8);n.xp6(2),n.s9C("src",t.img,n.LSH),n.s9C("alt",t.name),n.xp6(1),n.Q6J("ngIf",t.isOnline),n.xp6(2),n.Oqu(t.name),n.xp6(1),n.Q6J("ngIf",!t.isFriend)("ngIfElse",i)}}function q(o,e){if(1&o&&(n.TgZ(0,"div",2),n.YNc(1,Q,9,6,"div",3),n.qZA()),2&o){const t=n.oxw();n.xp6(1),n.Q6J("ngForOf",t.peoples)}}function N(o,e){1&o&&n._UZ(0,"img",13)}class h{constructor(e,t,i){this.peopleService=e,this.contactService=t,this.route=i,this.peoples=[],this.disable=!1}ngOnInit(){this.upload(),setTimeout(()=>{this.ngOnInit()},5e3)}upload(){this.Psub=this.peopleService.getPeople().subscribe(e=>{const t=Object.values(e);this.peoples=t})}add(e){const t={...e,isFriend:!0};this.disable=!0,this.contactService.addPeople(t).subscribe(i=>{this.disable=!1}),this.contactService.changePeopleToFriend(t).subscribe(i=>{this.disable=!1})}delete(e){const t={...e,isFriend:!1};this.contactService.deleteFriend(e).subscribe(),this.contactService.changePeopleToFriend(t).subscribe()}ngOnDestroy(){this.Psub&&this.Psub.unsubscribe()}}h.\u0275fac=function(e){return new(e||h)(n.Y36(_.Q),n.Y36(S.y),n.Y36(s.F0))},h.\u0275cmp=n.Xpm({type:h,selectors:[["app-people-block"]],decls:3,vars:2,consts:[["class","people",4,"ngIf","ngIfElse"],["loading",""],[1,"people"],["class","people_block",4,"ngFor","ngForOf"],[1,"people_block"],[1,"people_image"],[1,"people_img",3,"src","alt"],["class","people_online",4,"ngIf"],[1,"people_name"],["class","people_add",3,"disabled","click",4,"ngIf","ngIfElse"],["trueFriend",""],[1,"people_online"],[1,"people_add",3,"disabled","click"],["src","./assets/spinner.gif","alt","loading",1,"loading"]],template:function(e,t){if(1&e&&(n.YNc(0,q,2,1,"div",0),n.YNc(1,N,1,0,"ng-template",null,1,n.W1O)),2&e){const i=n.MAs(2);n.Q6J("ngIf",t.peoples.length)("ngIfElse",i)}},dependencies:[g.sg,g.O5],styles:[".people[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap}.people[_ngcontent-%COMP%]   .people_block[_ngcontent-%COMP%]{padding:10px 15px;display:flex;flex-direction:row;align-items:center;justify-content:space-between;flex-basis:320px;flex-wrap:wrap}@media (max-width: 475px){.people[_ngcontent-%COMP%]   .people_block[_ngcontent-%COMP%]{justify-content:left}}.people[_ngcontent-%COMP%]   .people_block[_ngcontent-%COMP%]   .people_name[_ngcontent-%COMP%]{font-size:1.2rem}@media (max-width: 475px){.people[_ngcontent-%COMP%]   .people_block[_ngcontent-%COMP%]   .people_name[_ngcontent-%COMP%]{font-size:1rem;padding:0 10px}}.people[_ngcontent-%COMP%]   .people_block[_ngcontent-%COMP%]   .people_image[_ngcontent-%COMP%]{position:relative;width:60px;height:60px}@media (max-width: 475px){.people[_ngcontent-%COMP%]   .people_block[_ngcontent-%COMP%]   .people_image[_ngcontent-%COMP%]{width:48px;height:48px}}.people[_ngcontent-%COMP%]   .people_block[_ngcontent-%COMP%]   .people_image[_ngcontent-%COMP%]   .people_img[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:25px}.people[_ngcontent-%COMP%]   .people_block[_ngcontent-%COMP%]   .people_image[_ngcontent-%COMP%]   .people_online[_ngcontent-%COMP%]{width:12px;height:12px;background-color:#32b019;border-radius:15px;position:absolute;bottom:5px}.people[_ngcontent-%COMP%]   .people_block[_ngcontent-%COMP%]   .people_add[_ngcontent-%COMP%]{background-color:#fff;border:1px solid red;font-size:.7rem;padding:7px 9px;border-radius:7px}.people[_ngcontent-%COMP%]   .people_block[_ngcontent-%COMP%]   .people_add[_ngcontent-%COMP%]:hover{transition:all .6s ease-in-out;background-color:red;color:#fff}"]});var U=l(3900);function z(o,e){if(1&o){const t=n.EpF();n.TgZ(0,"div")(1,"img",14),n.NdJ("click",function(){n.CHM(t);const c=n.oxw();return n.KtG(c.love(c.blog))}),n.qZA()()}}function E(o,e){if(1&o){const t=n.EpF();n.TgZ(0,"img",15),n.NdJ("click",function(){n.CHM(t);const c=n.oxw();return n.KtG(c.removeLove(c.blog))}),n.qZA()}}const H=function(){return["/blogs","content"]};class f{constructor(e,t){this.route=e,this.blogService=t,this.loading=!1}ngOnInit(){this.loading=!0,this.route.params.pipe((0,U.w)(e=>this.blogService.getById(e.id))).subscribe(e=>{this.blog=e,this.loading=!1})}love(e){const t={...e,favourite:!0};this.blogService.changeBlogInfo(t).subscribe(i=>{this.ngOnInit()})}removeLove(e){const t={...e,favourite:!1};this.blogService.changeBlogInfo(t).subscribe(i=>{this.ngOnInit()})}}f.\u0275fac=function(e){return new(e||f)(n.Y36(s.gz),n.Y36(_.Q))},f.\u0275cmp=n.Xpm({type:f,selectors:[["app-blog-info"]],decls:18,vars:8,consts:[[1,"blog_content"],[1,"blog_content_inner"],[1,"blog_content_inner_header"],[1,"blog_content_inner_header_image"],[3,"src"],[1,"blog_content_inner_header_loft"],[1,"blog_content_inner_header_back",3,"routerLink"],[4,"ngIf","ngIfElse"],["loveActive",""],[1,"blog_content_inner_main"],[1,"blog_content_inner_main_title"],[1,"blog_content_inner_main_image"],["alt","",3,"src"],[1,"blog_content_inner_main_txt"],["width","38","src","./assets/love.png","alt","Love",2,"cursor","pointer",3,"click"],["width","38","src","./assets/love_active.png","alt","Love",2,"cursor","pointer",3,"click"]],template:function(e,t){if(1&e&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"nav",3),n._UZ(4,"img",4),n.qZA(),n.TgZ(5,"div",5)(6,"nav",6),n._uU(7,"\u2190 Back"),n.qZA(),n.YNc(8,z,2,0,"div",7),n.YNc(9,E,1,0,"ng-template",null,8,n.W1O),n.qZA()(),n.TgZ(11,"div",9)(12,"h3",10),n._uU(13),n.qZA(),n.TgZ(14,"nav",11),n._UZ(15,"img",12),n.qZA(),n.TgZ(16,"nav",13),n._uU(17),n.qZA()()()()),2&e){const i=n.MAs(10);n.xp6(4),n.s9C("src",t.blog.bgImage,n.LSH),n.xp6(2),n.Q6J("routerLink",n.DdM(7,H)),n.xp6(2),n.Q6J("ngIf",0==t.blog.favourite)("ngIfElse",i),n.xp6(5),n.Oqu(t.blog.title),n.xp6(2),n.s9C("src",t.blog.img,n.LSH),n.xp6(2),n.hij(" ",t.blog.body,"")}},dependencies:[g.O5,s.rH],styles:[".blog_content[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_open .7s;z-index:9999;position:fixed;inset:0;overflow-y:scroll;background:#e7e7e7;height:100vh}.blog_content[_ngcontent-%COMP%]   .blog_content_inner[_ngcontent-%COMP%]{display:flex;width:70%;margin:0 auto 50px;flex-direction:column}@media (max-width: 1124px){.blog_content[_ngcontent-%COMP%]   .blog_content_inner[_ngcontent-%COMP%]{width:80%}}@media (max-width: 720px){.blog_content[_ngcontent-%COMP%]   .blog_content_inner[_ngcontent-%COMP%]{width:95%}}.blog_content[_ngcontent-%COMP%]   .blog_content_inner_header[_ngcontent-%COMP%]{display:flex;flex-direction:column}.blog_content[_ngcontent-%COMP%]   .blog_content_inner_header_image[_ngcontent-%COMP%]{height:350px}@media (max-width: 475px){.blog_content[_ngcontent-%COMP%]   .blog_content_inner_header_image[_ngcontent-%COMP%]{height:250px}}.blog_content[_ngcontent-%COMP%]   .blog_content_inner_header_image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}.blog_content[_ngcontent-%COMP%]   .blog_content_inner_header_back[_ngcontent-%COMP%]{margin-top:15px;background-color:#000;color:#fff;font-size:1.3rem;cursor:pointer;border:1px solid white;padding-block:10px;padding-inline:15px}.blog_content[_ngcontent-%COMP%]   .blog_content_inner_header_back[_ngcontent-%COMP%]:hover{background-color:#fff;color:#000;transition:all .5s ease-in;border:1px solid black}.blog_content[_ngcontent-%COMP%]   .blog_content_inner_header_loft[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:row;justify-content:space-between}.blog_content[_ngcontent-%COMP%]   .blog_content_inner_main[_ngcontent-%COMP%]{margin:50px auto 0;display:flex;width:80%;align-items:center;flex-direction:column}@media (max-width: 720px){.blog_content[_ngcontent-%COMP%]   .blog_content_inner_main[_ngcontent-%COMP%]{width:95%}}.blog_content[_ngcontent-%COMP%]   .blog_content_inner_main_title[_ngcontent-%COMP%]{font-size:1.8rem;padding-bottom:20px}@media (max-width: 475px){.blog_content[_ngcontent-%COMP%]   .blog_content_inner_main_title[_ngcontent-%COMP%]{font-size:1.3rem}}.blog_content[_ngcontent-%COMP%]   .blog_content_inner_main_image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto;object-fit:cover}@media (max-width: 475px){.blog_content[_ngcontent-%COMP%]   .blog_content_inner_main_txt[_ngcontent-%COMP%]{font-size:.85rem}}@keyframes _ngcontent-%COMP%_open{0%{transform:translateY(1800px);opacity:0}to{transform:translateY(0);opacity:1}}.blog_content[_ngcontent-%COMP%]::-webkit-scrollbar{width:10px}.blog_content[_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 2px gray;border-radius:5px}.blog_content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#8c8a8a;border-radius:5px}.blog_content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#7c7b7b}"]});const G=[{path:"",component:r,children:[{path:"content",component:m},{path:"content/:id",component:f},{path:"photos",component:b},{path:"people",component:h}]}];class p{}p.\u0275fac=function(e){return new(e||p)},p.\u0275mod=n.oAB({type:p}),p.\u0275inj=n.cJS({imports:[g.ez,s.Bz.forChild(G),M.JF]})}}]);