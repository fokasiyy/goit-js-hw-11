import{a as f,S as d,i as m}from"./assets/vendor-Bz4lgVUE.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function y(o){return f.get("https://pixabay.com/api/",{params:{key:"50311128-48dd02331c2e5a3f7eb5afcac",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits).catch(r=>console.log(r))}const i=document.querySelector(".gallery"),l=document.querySelector(".loader"),g=new d(".gallery a",{captionsData:"alt",captionDelay:250});function h(o){const r=o.map(s=>{const{webformatURL:n,largeImageURL:e,tags:t,likes:a,views:c,comments:p,downloads:u}=s;return`
      <li class="gallery-item">
        <a href="${e}"><img class="gallery-image" src="${n}" alt="${t}"/></a>
        <div class="stats">
          <p><span>Likes</span><span>${a}</span></p>
          <p><span>Views</span><span>${c}</span></p>
          <p><span>Comments</span><span>${p}</span></p>
          <p><span>Downloads</span><span>${u}</span></p>
        </div>
      </li>
        `}).join("");i.insertAdjacentHTML("afterbegin",r),g.refresh()}function L(){i.innerHTML=""}function b(){l.style.visibility="visible"}function v(){l.style.visibility="hidden"}const w=document.querySelector(".form");w.addEventListener("submit",o=>{o.preventDefault(),L();const r=o.target.elements["search-text"].value.trim();r&&(b(),y(r).then(s=>{s&&s.length>0?h(s):m.show({title:"❌",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",titleColor:"white",backgroundColor:"#ef4040",position:"topRight"})}).finally(()=>{v()}))});
//# sourceMappingURL=index.js.map
