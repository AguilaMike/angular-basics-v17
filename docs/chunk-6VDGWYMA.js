import{Aa as p,Ba as b,Ca as v,Da as E,Ea as i,Fa as a,Ga as u,Ha as f,Ja as _,Ka as d,La as S,Ma as o,Na as m,S as y,Sa as k,W as g,X as h,ia as C,lb as w,oa as r,za as x}from"./chunk-3V6KY2LI.js";import"./chunk-2XJVAMHT.js";function D(e,t){if(e&1){let n=f();i(0,"h4"),o(1,"H\xE9roe borrado "),i(2,"small",2),o(3),a()(),i(4,"button",3),_("click",function(){g(n);let l=d();return h(l.resetHeroes())}),o(5,"Resetablecer h\xE9roe"),a()}if(e&2){let n=d();r(3),m(n.heroesDeletedDescription)}}function j(e,t){e&1&&(i(0,"h4"),o(1,"No ha borrado nada."),a())}function L(e,t){if(e&1){let n=f();i(0,"button",4),_("click",function(){g(n);let l=d();return h(l.deleteLastHeroe())}),o(1,"Borrar \xFAltimo h\xE9roe"),a()}}function T(e,t){if(e&1&&u(0,"img",14),e&2){let n=d().$implicit;S("src",n.image,C)}}function F(e,t){e&1&&u(0,"img",15)}function H(e,t){if(e&1&&(i(0,"li",5)(1,"div",6),x(2,T,1,1,"img",7)(3,F,1,0),i(4,"div",8)(5,"p",9),o(6),a(),i(7,"p",10),o(8),a()()(),i(9,"div",11)(10,"p",12),o(11),a(),i(12,"p",13),o(13),a()()()),e&2){let n=t.$implicit;r(2),p(2,n.image?2:3),r(4),m(n.alterEgo),r(2),m(n.name),r(3),m(n.company),r(2),m(n.age)}}function I(e,t){e&1&&(i(0,"li",16)(1,"div",17)(2,"p",18),o(3,"No hay h\xE9roes"),a()()())}var V=(()=>{let t=class t{constructor(){this.heroes=[],this.heroesDeleted=[],this.resetHeroes()}resetHeroes(){this.heroes=[{alterEgo:"Ironman",name:"Tony Stark",company:"Marvel",age:45,image:"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/346-iron-man.jpg"},{alterEgo:"Spiderman",name:"Peter Parker",company:"Marvel",age:25,image:"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/620-spider-man.jpg"},{alterEgo:"Batman",name:"Bruce Wayne",company:"DC",age:45,image:"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/70-batman.jpg"},{alterEgo:"Superman",name:"Clark Kent",company:"DC",age:45,image:"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/644-superman.jpg"}],this.heroesDeleted=[]}deleteLastHeroe(){let s=this.heroes.pop();s&&this.heroesDeleted.push(s.name)}get heroesDeletedDescription(){return this.heroesDeleted.join(", ")}};t.\u0275fac=function(l){return new(l||t)},t.\u0275cmp=y({type:t,selectors:[["app-heroes-list"]],standalone:!0,features:[k],decls:9,vars:3,consts:[["class","delete"],[1,"divide-y","divide-gray-100"],[1,"text-red-600"],[3,"click"],[1,"delete",3,"click"],[1,"flex","justify-between","gap-x-6","py-5"],[1,"flex","min-w-0","gap-x-4"],["class","h-12 w-12 flex-none rounded-full bg-gray-50","alt","",3,"src"],[1,"min-w-0","flex-auto"],[1,"text-sm","font-semibold","leading-6","text-gray-900"],[1,"mt-1","truncate","text-xs","leading-5","text-gray-500"],[1,"hidden","shrink-0","sm:flex","sm:flex-col","sm:items-end"],[1,"text-sm","leading-6","text-gray-900"],[1,"mt-1","text-xs","leading-5","text-gray-500"],["alt","",1,"h-12","w-12","flex-none","rounded-full","bg-gray-50",3,"src"],["src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyH4dVJ8h4ZG94myBbUiXSfrvshfCgihJAhMGEOORvrFnMherNY4NSBhRKctB-ey5Xf8Y&usqp=CAU","alt","",1,"h-12","w-12","flex-none","rounded-full","bg-gray-50"],[1,"py-5"],[1,"flex","justify-center"],[1,"text-sm","leading-5","text-gray-500"],["class","flex justify-between gap-x-6 py-5"]],template:function(l,c){l&1&&(i(0,"h3"),o(1,"Listado de H\xE9roes"),a(),x(2,D,6,1)(3,j,2,0)(4,L,2,0,"button",0),i(5,"ul",1),v(6,H,14,5,"li",19,b,!1,I,4,0),a()),l&2&&(r(2),p(2,c.heroesDeletedDescription!==""?2:3),r(2),p(4,c.heroes.length>0?4:-1),E(6,c.heroes))},dependencies:[w]});let e=t;return e})();export{V as ListComponent};
