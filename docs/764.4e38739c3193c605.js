"use strict";(self.webpackChunkFacebook=self.webpackChunkFacebook||[]).push([[764],{764:(q,f,c)=>{c.r(f),c.d(f,{MeFriendModule:()=>s});var i=c(6771),l=c(6895),p=c(3900),n=c(8256),M=c(5175),m=c(4004),b=c(529);class _{constructor(e){this.http=e}ngOnInit(){}getByIdBlogFriend(e,o){return this.http.get(`https://facebook-d95ea-default-rtdb.firebaseio.com/users/contacts/${o}/blogs/${e}.json`).pipe((0,m.U)(r=>({...r,id:e})))}}function O(t,e){if(1&t&&(n.TgZ(0,"nav",21),n._uU(1),n.qZA()),2&t){const o=n.oxw(2);n.xp6(1),n.hij("My friends: ",o.user.friends.length,"")}}function P(t,e){1&t&&(n.TgZ(0,"nav",21),n._uU(1,"My friends: 0"),n.qZA())}function h(t,e){if(1&t&&(n.TgZ(0,"nav",22),n._UZ(1,"img",5),n.qZA()),2&t){const o=e.$implicit;n.xp6(1),n.s9C("src",o.img,n.LSH)}}_.\u0275fac=function(e){return new(e||_)(n.LFG(b.eN))},_.\u0275prov=n.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"});const C=function(){return["/user","my-friends"]},v=function(t){return["/user","my-friends",t,"blog"]},x=function(){return{exact:!0}},y=function(t){return["/user","my-friends",t,"about"]},Z=function(t){return["/user","my-friends",t,"friends"]},k=function(t){return["/user","my-friends",t,"photos"]},w=function(t){return["/user","my-friends",t,"music"]};function T(t,e){if(1&t&&(n.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"nav",4),n._UZ(4,"img",5),n.TgZ(5,"div",6),n._UZ(6,"img",7),n.qZA()(),n.TgZ(7,"div",8)(8,"nav",9),n._uU(9,"\u2190 Back"),n.qZA(),n.TgZ(10,"nav",10),n._uU(11),n.qZA(),n.TgZ(12,"div",11)(13,"div",12),n.YNc(14,O,2,1,"nav",13),n.YNc(15,P,2,0,"ng-template",null,14,n.W1O),n.TgZ(17,"div",15),n.YNc(18,h,2,1,"nav",16),n.qZA()()()(),n._UZ(19,"hr"),n.TgZ(20,"div",17)(21,"nav",18),n._uU(22,"Publocation"),n.qZA(),n.TgZ(23,"nav",19),n._uU(24,"About"),n.qZA(),n.TgZ(25,"nav",19),n._uU(26,"Friends"),n.qZA(),n.TgZ(27,"nav",19),n._uU(28,"Photos"),n.qZA(),n.TgZ(29,"nav",19),n._uU(30,"Music"),n.qZA()()(),n.TgZ(31,"div",20),n._UZ(32,"router-outlet"),n.qZA()()()),2&t){const o=n.MAs(16),r=n.oxw();n.xp6(4),n.s9C("src",r.user.imgCover,n.LSH),n.xp6(2),n.s9C("src",r.user.img,n.LSH),n.s9C("alt",r.user.name),n.xp6(2),n.Q6J("routerLink",n.DdM(15,C)),n.xp6(3),n.Oqu(r.user.name),n.xp6(2),n.Q6J("routerLink",n.DdM(16,C)),n.xp6(1),n.Q6J("ngIf",r.user.friends)("ngIfElse",o),n.xp6(4),n.Q6J("ngForOf",r.user.friends),n.xp6(3),n.Q6J("routerLink",n.VKq(17,v,r.user.id))("routerLinkActiveOptions",n.DdM(19,x)),n.xp6(2),n.Q6J("routerLink",n.VKq(20,y,r.user.id)),n.xp6(2),n.Q6J("routerLink",n.VKq(22,Z,r.user.id)),n.xp6(2),n.Q6J("routerLink",n.VKq(24,k,r.user.id)),n.xp6(2),n.Q6J("routerLink",n.VKq(26,w,r.user.id))}}class g{constructor(e,o,r,d){this.route=e,this.blogsService=o,this.friendsService=r,this.router=d}ngOnInit(){this.route.params.pipe((0,p.w)(e=>this.blogsService.getByIdUser(e.id))).subscribe(e=>{this.user=e,this.friendsService.friends=e})}}g.\u0275fac=function(e){return new(e||g)(n.Y36(i.gz),n.Y36(M.Q),n.Y36(_),n.Y36(i.F0))},g.\u0275cmp=n.Xpm({type:g,selectors:[["app-me-friend"]],decls:1,vars:1,consts:[["class","about-friend",4,"ngIf"],[1,"about-friend"],[1,"user_inner"],[1,"user_inner_head"],[1,"head_img"],["alt","",3,"src"],[1,"head_img_me"],[3,"src","alt"],[1,"user_info"],[1,"user_info_back",3,"routerLink"],[1,"user_info_txt"],[1,"user_info_inner"],[1,"user_info_friend",3,"routerLink"],["class","user_info_friend_inner",4,"ngIf","ngIfElse"],["contactZero",""],[1,"user_info_friend_sircle"],["class","sircle_info",4,"ngFor","ngForOf"],[1,"user_navbar"],["routerLinkActive","active",1,"user_navbar_inner",3,"routerLink","routerLinkActiveOptions"],["routerLinkActive","active",1,"user_navbar_inner",3,"routerLink"],[1,"user_content"],[1,"user_info_friend_inner"],[1,"sircle_info"]],template:function(e,o){1&e&&n.YNc(0,T,33,28,"div",0),2&e&&n.Q6J("ngIf",o.user)},dependencies:[l.sg,l.O5,i.lC,i.rH,i.Od],styles:[".about-friend[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_open .7s;height:100vh;z-index:99999;position:absolute;inset:0;background-color:#fff}.about-friend[_ngcontent-%COMP%]   .user_inner[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:0 30px}.about-friend[_ngcontent-%COMP%]   .user_inner[_ngcontent-%COMP%]   .user_inner_head[_ngcontent-%COMP%]{width:77%;margin:0 auto}.about-friend[_ngcontent-%COMP%]   .user_inner[_ngcontent-%COMP%]   .user_inner_head[_ngcontent-%COMP%]   .head_img[_ngcontent-%COMP%]{position:relative;max-width:1280px;height:360px}.about-friend[_ngcontent-%COMP%]   .user_inner[_ngcontent-%COMP%]   .user_inner_head[_ngcontent-%COMP%]   .head_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}.about-friend[_ngcontent-%COMP%]   .user_inner[_ngcontent-%COMP%]   .user_inner_head[_ngcontent-%COMP%]   .head_img_me[_ngcontent-%COMP%]{position:absolute;bottom:-18%;left:43%}.about-friend[_ngcontent-%COMP%]   .user_inner[_ngcontent-%COMP%]   .user_inner_head[_ngcontent-%COMP%]   .head_img_me[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:170px;height:170px;border-radius:50%}.about-friend[_ngcontent-%COMP%]   .user_inner[_ngcontent-%COMP%]   .user_inner_head[_ngcontent-%COMP%]   .user_info[_ngcontent-%COMP%]{margin:15px 0;display:flex;flex-direction:column}.about-friend[_ngcontent-%COMP%]   .user_inner[_ngcontent-%COMP%]   .user_inner_head[_ngcontent-%COMP%]   .user_info[_ngcontent-%COMP%]   .user_info_back[_ngcontent-%COMP%]{background-color:#000;color:#fff;font-size:1.3rem;width:8%;cursor:pointer;border:1px solid white;padding:8px}.about-friend[_ngcontent-%COMP%]   .user_inner[_ngcontent-%COMP%]   .user_inner_head[_ngcontent-%COMP%]   .user_info[_ngcontent-%COMP%]   .user_info_back[_ngcontent-%COMP%]:hover{background-color:#fff;color:#000;transition:all .5s ease-in;border:1px solid black}.about-friend[_ngcontent-%COMP%]   .user_inner[_ngcontent-%COMP%]   .user_inner_head[_ngcontent-%COMP%]   .user_info[_ngcontent-%COMP%]   .user_info_txt[_ngcontent-%COMP%]{font-weight:600;font-size:1.3rem}.about-friend[_ngcontent-%COMP%]   .user_inner[_ngcontent-%COMP%]   .user_inner_head[_ngcontent-%COMP%]   .user_info[_ngcontent-%COMP%]   .user_info_inner[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.about-friend[_ngcontent-%COMP%]   .user_inner[_ngcontent-%COMP%]   .user_inner_head[_ngcontent-%COMP%]   .user_info[_ngcontent-%COMP%]   .user_info_inner[_ngcontent-%COMP%]   .user_info_friend[_ngcontent-%COMP%]{cursor:pointer}.about-friend[_ngcontent-%COMP%]   .user_inner[_ngcontent-%COMP%]   .user_inner_head[_ngcontent-%COMP%]   .user_info[_ngcontent-%COMP%]   .user_info_inner[_ngcontent-%COMP%]   .user_info_friend[_ngcontent-%COMP%]   .user_info_friend_sircle[_ngcontent-%COMP%]{display:flex;flex-direction:row}.about-friend[_ngcontent-%COMP%]   .user_inner[_ngcontent-%COMP%]   .user_inner_head[_ngcontent-%COMP%]   .user_info[_ngcontent-%COMP%]   .user_info_inner[_ngcontent-%COMP%]   .user_info_friend[_ngcontent-%COMP%]   .user_info_friend_sircle[_ngcontent-%COMP%]   .sircle_info[_ngcontent-%COMP%]{margin-left:-5px}.about-friend[_ngcontent-%COMP%]   .user_inner[_ngcontent-%COMP%]   .user_inner_head[_ngcontent-%COMP%]   .user_info[_ngcontent-%COMP%]   .user_info_inner[_ngcontent-%COMP%]   .user_info_friend[_ngcontent-%COMP%]   .user_info_friend_sircle[_ngcontent-%COMP%]   .sircle_info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%}.about-friend[_ngcontent-%COMP%]   .user_inner[_ngcontent-%COMP%]   .user_inner_head[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{margin-bottom:10px}.about-friend[_ngcontent-%COMP%]   .user_inner[_ngcontent-%COMP%]   .user_inner_head[_ngcontent-%COMP%]   .user_navbar[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;width:60%}.about-friend[_ngcontent-%COMP%]   .user_inner[_ngcontent-%COMP%]   .user_inner_head[_ngcontent-%COMP%]   .user_navbar[_ngcontent-%COMP%]   .user_navbar_inner[_ngcontent-%COMP%]{cursor:pointer;padding:7px}.about-friend[_ngcontent-%COMP%]   .user_inner[_ngcontent-%COMP%]   .user_inner_head[_ngcontent-%COMP%]   .user_navbar[_ngcontent-%COMP%]   .user_navbar_inner[_ngcontent-%COMP%]:hover{background-color:#8a8989;border-radius:12px;transition:all .3s ease-in-out}.about-friend[_ngcontent-%COMP%]   .user_inner[_ngcontent-%COMP%]   .user_content[_ngcontent-%COMP%]{margin-top:20px}@keyframes _ngcontent-%COMP%_open{0%{transform:translateY(300px);opacity:0}to{transform:translateY(0);opacity:1}}"]});const F=function(t,e){return["/user","my-friends",t,"blog",e]};function A(t,e){if(1&t){const o=n.EpF();n.TgZ(0,"div")(1,"div",3),n.NdJ("mouseenter",function(){n.CHM(o);const d=n.oxw();return n.KtG(d.showMore=!0)})("mouseleave",function(){n.CHM(o);const d=n.oxw();return n.KtG(d.showMore=!1)}),n.TgZ(2,"h1",4),n._uU(3),n.qZA(),n.TgZ(4,"nav",5),n._uU(5,"Read more"),n.qZA()()()}if(2&t){const o=e.$implicit,r=n.oxw();n.xp6(1),n.Jzz("background-size: cover; background: url(",o.bgImage,")"),n.xp6(2),n.Oqu(o.title),n.xp6(1),n.Q6J("routerLink",n.WLB(5,F,r.user,o.id))}}class a{constructor(e){this.friendSerive=e,this.showMore=!1}ngOnInit(){this.publication=Object.values(this.friendSerive.friends.blogs),this.user=this.friendSerive.friends.id}}a.\u0275fac=function(e){return new(e||a)(n.Y36(_))},a.\u0275cmp=n.Xpm({type:a,selectors:[["app-publication"]],decls:4,vars:1,consts:[[1,"blog"],[1,"blog_inner"],[4,"ngFor","ngForOf"],[1,"blog_id",3,"mouseenter","mouseleave"],[1,"blog_id_title"],[1,"blog_id_more",3,"routerLink"]],template:function(e,o){1&e&&(n.TgZ(0,"div",0)(1,"div",1),n.YNc(2,A,6,8,"div",2),n.qZA()(),n._UZ(3,"router-outlet")),2&e&&(n.xp6(2),n.Q6J("ngForOf",o.publication))},dependencies:[l.sg,i.lC,i.rH],styles:[".blog[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:75%;margin:0 auto}.blog[_ngcontent-%COMP%]   .blog_id[_ngcontent-%COMP%]{width:100%;height:220px;display:flex;align-items:center;flex-direction:column;justify-content:space-evenly;margin-bottom:20px;border-width:6px;border-style:solid;border-image:linear-gradient(to right,#ffffff,#ffffff) 1}.blog[_ngcontent-%COMP%]   .blog_id_title[_ngcontent-%COMP%]{font-weight:700;font-size:1.2rem}.blog[_ngcontent-%COMP%]   .blog_id_more[_ngcontent-%COMP%]{opacity:0;color:#fff;cursor:pointer;background-image:linear-gradient(to left,#0652DD,#9980FA,#FDA7DF);padding:10px;border-radius:7px;background-size:200%;transition:.5s all;animation:_ngcontent-%COMP%_animrev .5s}.blog[_ngcontent-%COMP%]   .blog_id[_ngcontent-%COMP%]:hover{transition:all .5s;border-width:6px;border-style:solid;border-image:linear-gradient(to right,darkblue,darkorchid) 1}.blog[_ngcontent-%COMP%]   .blog_id[_ngcontent-%COMP%]:hover   .blog_id_more[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_anim .5s;opacity:1}.blog[_ngcontent-%COMP%]   .blog_id[_ngcontent-%COMP%]:hover   .blog_id_more[_ngcontent-%COMP%]:hover{background-position:right}.blog_content[_ngcontent-%COMP%]{position:absolute;inset:0;background:#7c7b7b}@keyframes _ngcontent-%COMP%_anim{0%{transform:translateY(50px);opacity:0}to{transform:translateY(0);opacity:1}}@keyframes _ngcontent-%COMP%_animrev{0%{transform:translateY(0);opacity:1}to{transform:translateY(50px);opacity:0}}"]});const L=function(t){return["/user","my-friends",t,"blog"]};class u{constructor(e,o,r){this.friendSerive=e,this.router=o,this.friendService=r}ngOnInit(){this.router.params.pipe((0,p.w)(e=>this.friendService.getByIdBlogFriend(e.id,this.friendSerive.friends.id))).subscribe(e=>{this.blog=e,console.log(e)}),this.user=this.friendSerive.friends.id,document.body.style.overflow="hidden"}removeHidden(){document.body.style.overflow=""}}u.\u0275fac=function(e){return new(e||u)(n.Y36(_),n.Y36(i.gz),n.Y36(_))},u.\u0275cmp=n.Xpm({type:u,selectors:[["app-blog"]],decls:13,vars:7,consts:[[1,"blog_content"],[1,"blog_content_inner"],[1,"blog_content_inner_header"],[3,"src"],[1,"blog_content_inner_header_back",3,"routerLink","click"],[1,"blog_content_inner_main"],[1,"blog_content_inner_main_title"],["alt","",3,"src"]],template:function(e,o){1&e&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2),n._UZ(3,"img",3),n.TgZ(4,"nav",4),n.NdJ("click",function(){return o.removeHidden()}),n._uU(5,"\u2190 Back"),n.qZA()(),n.TgZ(6,"div",5)(7,"h3",6),n._uU(8),n.qZA(),n.TgZ(9,"nav"),n._UZ(10,"img",7),n.qZA(),n.TgZ(11,"nav"),n._uU(12),n.qZA()()()()),2&e&&(n.xp6(3),n.s9C("src",o.blog.bgImage,n.LSH),n.xp6(1),n.Q6J("routerLink",n.VKq(5,L,o.user)),n.xp6(4),n.Oqu(o.blog.title),n.xp6(2),n.s9C("src",o.blog.img,n.LSH),n.xp6(2),n.Oqu(o.blog.body))},dependencies:[i.rH],styles:[".blog_content[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_open .7s;position:fixed;inset:0;overflow-y:scroll;background:#e7e7e7;height:100vh}.blog_content[_ngcontent-%COMP%]   .blog_content_inner[_ngcontent-%COMP%]{display:flex;width:70%;margin:0 auto;flex-direction:column}.blog_content[_ngcontent-%COMP%]   .blog_content_inner_header[_ngcontent-%COMP%]{height:350px;display:flex;flex-direction:column}.blog_content[_ngcontent-%COMP%]   .blog_content_inner_header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}.blog_content[_ngcontent-%COMP%]   .blog_content_inner_header_back[_ngcontent-%COMP%]{margin-top:15px;background-color:#000;color:#fff;font-size:1.3rem;width:8%;cursor:pointer;border:1px solid white;padding:8px}.blog_content[_ngcontent-%COMP%]   .blog_content_inner_header_back[_ngcontent-%COMP%]:hover{background-color:#fff;color:#000;transition:all .5s ease-in;border:1px solid black}.blog_content[_ngcontent-%COMP%]   .blog_content_inner_main[_ngcontent-%COMP%]{margin:50px auto 0;display:flex;width:80%;align-items:center;flex-direction:column}.blog_content[_ngcontent-%COMP%]   .blog_content_inner_main_title[_ngcontent-%COMP%]{font-size:1.8rem;padding-bottom:20px}@keyframes _ngcontent-%COMP%_open{0%{transform:translateY(1800px);opacity:0}to{transform:translateY(0);opacity:1}}"]});const U=[{path:"",component:g,children:[{path:"blog",component:a,children:[{path:":id",component:u}]}]}];class s{}s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=n.oAB({type:s}),s.\u0275inj=n.cJS({imports:[l.ez,i.Bz.forChild(U)]})}}]);