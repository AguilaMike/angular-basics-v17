import{Aa as u,Ea as e,Fa as t,Ha as h,Ja as g,Ka as _,Ma as i,Na as x,Oa as c,S as f,Sa as b,W as d,X as p,lb as V,oa as r,za as C}from"./chunk-3V6KY2LI.js";import"./chunk-2XJVAMHT.js";function E(a,o){if(a&1){let l=h();e(0,"button",0),g("click",function(){d(l);let n=_();return p(n.changeHero())}),i(1,"Cambiar nombre"),t()}}function S(a,o){if(a&1){let l=h();e(0,"button",0),g("click",function(){d(l);let n=_();return p(n.changeAge())}),i(1,"Cambiar edad"),t()}}function v(a,o){if(a&1){let l=h();e(0,"button",0),g("click",function(){d(l);let n=_();return p(n.resetHero())}),i(1,"Reset"),t()}}var k=(()=>{let o=class o{constructor(){this.changes={isVisibleName:!0,isVisibleAge:!0,reset:!1},this.name="Iroman",this.age=45}get capitalizedName(){return this.name.toUpperCase()}getHeroDescription(){return`${this.name} - ${this.age}`}changeHero(){this.name="Spiderman",this.changes.isVisibleName=!1,this.changes.reset=!0}changeAge(){this.age=25,this.changes.isVisibleAge=!1,this.changes.reset=!0}resetHero(){this.name="Iroman",this.age=45,this.changes.isVisibleName=!0,this.changes.isVisibleAge=!0,this.changes.reset=!1}};o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=f({type:o,selectors:[["app-heroes-hero"]],standalone:!0,features:[b],decls:22,vars:8,consts:[[3,"click"]],template:function(n,s){n&1&&(e(0,"h1"),i(1),t(),e(2,"dl")(3,"td"),i(4,"Nombre:"),t(),e(5,"dd"),i(6),t(),e(7,"td"),i(8,"Edad:"),t(),e(9,"dd"),i(10),t(),e(11,"td"),i(12,"M\xE9todo:"),t(),e(13,"dd"),i(14),t(),e(15,"td"),i(16,"Capitalizado:"),t(),e(17,"dd"),i(18),t()(),C(19,E,2,0,"button")(20,S,2,0,"button")(21,v,2,0,"button")),n&2&&(r(1),x(s.name),r(5),c(" ",s.name," "),r(4),c(" ",s.age," "),r(4),c(" ",s.getHeroDescription()," "),r(4),c(" ",s.capitalizedName," "),r(1),u(19,s.changes.isVisibleName?19:-1),r(1),u(20,s.changes.isVisibleAge?20:-1),r(1),u(21,s.changes.reset?21:-1))},dependencies:[V],styles:["h1[_ngcontent-%COMP%]{font-size:50px}dd[_ngcontent-%COMP%]{font-size:2rem;font-weight:700}"]});let a=o;return a})();export{k as HeroComponent};
