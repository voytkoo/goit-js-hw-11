import{a as m,i as d,S as g}from"./assets/vendor-b0d10f48.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=n(r);fetch(r.href,t)}})();const h="https://pixabay.com/api/",y="44067524-7b37ef940db212c179aad5861";function p(o){const e=`${h}?key=${y}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;return m.get(e).then(n=>n.data.hits).catch(n=>{throw console.error("Error fetching images:",n),new Error("Failed to fetch images")})}const u=document.querySelector(".gallery"),f=document.querySelector(".loader");let l=null;function L(o){u.innerHTML=b(o)}function b(o){return o.map(e=>`<li class="gallery-item">
  <a class="gallery-link" href="${e.largeImageURL}">
    <img
      class="gallery-image"
      src="${e.webformatURL}"
      alt="${e.tags}"
    />
  </a>
<ul class='info'>
      <li class="info-image><strong class="info-comment">Likes</strong> ${e.likes}</li>
      <li class="info-image><strong class="info-comment">Views</strong> ${e.views}</li>
      <li class="info-image><strong class="info-comment">Comments</strong> ${e.comments}</li>
      <li class="info-image><strong class="info-comment">Downloads</strong> ${e.downloads}</li>
      </ul>
</li>`).join("")}function i(o){d.error({title:"Error",message:o})}function w(){u.innerHTML=""}function S(){f.style.display="block"}function $(){f.style.display="none"}function q(){l=new g(".gallery a",{captionsData:"alt",captionDelay:250})}function E(){l?l.refresh():q()}const v=document.querySelector(".form-search"),c=document.querySelector('.form-search input[name="query"]');v.addEventListener("submit",P);function P(o){o.preventDefault();const e=c.value.trim();if(!e){i("Please enter a search term");return}w(),S(),p(e).then(n=>{n.length===0?i("Sorry, there are no images matching your search query. Please try again!"):(L(n),c.value="",E())}).catch(n=>{i("An error occured while fetching images"),console.error(n)}).finally(()=>{$()})}
//# sourceMappingURL=commonHelpers.js.map
