import{e as r,R as e,A as l}from"./vendor.ed6a35f9.js";import{a as i,p as m}from"./index.5e81d3fc.js";const s="_linkbox_144up_2",c="_sideBarContainer_144up_13",o="_sideBar_144up_13",u="_main_144up_39";var d={linkbox:s,sideBarContainer:c,sideBar:o,main:u};function p(){const{article:a}=r(),t=i.find(({url:n})=>n==a);return t?e.createElement("article",{className:d.main},e.createElement("header",null,e.createElement("h1",null,t.title),e.createElement("time",null,m(t.time)),e.createElement("address",null,t.author),e.createElement("summary",null,t.summary)),e.createElement("hr",null),e.createElement("main",null,e.createElement(l,{obtainFor:t.load}))):e.createElement(e.Fragment,null,"Article not found")}export{p as default};