import{m,Z as o,_ as p}from"./entry.jYzUhm1m.js";import{q as f,w as s,e as g,s as c,j as h}from"./query.uRH-bkkb.js";import{u as v}from"./preview.FHOn9CT1.js";const $=async t=>{const{content:n}=m().public;typeof(t==null?void 0:t.params)!="function"&&(t=f(t));const a=t.params(),i=n.experimental.stripQueryParameters?s(`/navigation/${`${o(a)}.${n.integrity}`}/${g(a)}.json`):s(`/navigation/${o(a)}.${n.integrity}.json`);if(c())return(await p(()=>import("./client-db.1M_zQ3Rw.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(r=>r.generateNavigation))(a);const e=await $fetch(i,{method:"GET",responseType:"json",params:n.experimental.stripQueryParameters?void 0:{_params:h(a),previewToken:v().getPreviewToken()}});if(typeof e=="string"&&e.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return e};export{$ as f};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./client-db.1M_zQ3Rw.js","./entry.jYzUhm1m.js","./query.uRH-bkkb.js","./preview.FHOn9CT1.js","./index.1dSrIji7.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
