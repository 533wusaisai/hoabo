import{y as I,q as b,v as C,L as y,c as A,a as L,t as o,f as P,$ as f,a0 as S,I as p,w as E}from"./index-642426f2.js";import{r as h,f as H,n as d,w as N,c as n,d as u,t as O,u as z,y as D}from"./index-6c50562b.js";const M=(e,c)=>{const t=h(),a=()=>{t.value=y(e).height};return H(()=>{if(d(a),c)for(let i=1;i<=3;i++)setTimeout(a,100*i)}),I(()=>d(a)),N([b,C],a),t};function $(e,c){const t=M(e,!0);return a=>n("div",{class:c("placeholder"),style:{height:t.value?"".concat(t.value,"px"):void 0}},[a()])}const[q,r]=A("nav-bar"),F={title:String,fixed:Boolean,zIndex:L,border:o,leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean,clickable:o};var K=u({name:q,props:F,emits:["clickLeft","clickRight"],setup(e,{emit:c,slots:t}){const a=h(),i=$(a,r),g=l=>c("clickLeft",l),x=l=>c("clickRight",l),v=()=>t.left?t.left():[e.leftArrow&&n(p,{class:r("arrow"),name:"arrow-left"},null),e.leftText&&n("span",{class:r("text")},[e.leftText])],k=()=>t.right?t.right():n("span",{class:r("text")},[e.rightText]),s=()=>{const{title:l,fixed:m,border:w,zIndex:T}=e,B=P(T),_=e.leftArrow||e.leftText||t.left,R=e.rightText||t.right;return n("div",{ref:a,style:B,class:[r({fixed:m}),{[S]:w,"van-safe-area-top":e.safeAreaInsetTop}]},[n("div",{class:r("content")},[_&&n("div",{class:[r("left"),e.clickable?f:""],onClick:g},[v()]),n("div",{class:[r("title"),"van-ellipsis"]},[t.title?t.title():l]),R&&n("div",{class:[r("right"),e.clickable?f:""],onClick:x},[k()])])])};return()=>e.fixed&&e.placeholder?i(s):s()}});const V=E(K),j=u({__name:"index",setup(e){const c=()=>history.back();return(t,a)=>(O(),z("div",null,[n(D(V),{title:"购物车","left-text":"返回","left-arrow":"",onClickLeft:c})]))}});export{j as default};
