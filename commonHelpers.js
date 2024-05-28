import{a as d,i as g,S as h}from"./assets/vendor-b0d10f48.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=n(r);fetch(r.href,t)}})();const y="https://pixabay.com/api/",p="44067524-7b37ef940db212c179aad5861";function L(o){const e=`${y}?key=${p}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;return d.get(e).then(n=>n.data.hits).catch(n=>{throw new n("Error fetching images:")})}const c=document.querySelector(".gallery"),u=document.querySelector(".loader");let l=null;function w(o){c.innerHTML=b(o),m()}function b(o){return o.map(e=>`<li class="gallery-item">
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
</li>`).join("")}function i(o){g.error({title:"Error",message:o})}function S(){c.innerHTML=""}function $(){u.classList.remove("hidden")}function q(){u.classList.add("hiden")}function f(){l=new h(".gallery a",{captionsData:"alt",captionDelay:250})}function m(){l?l.refresh():f()}const v=document.querySelector(".form-search"),E=document.querySelector('.form-search input[name="query"]');v.addEventListener("submit",P);function P(o){o.preventDefault();const e=E.value.trim();if(!e){i("Please enter a search term");return}S(),$(),L(e).then(n=>{n.length===0?i("Sorry, there are no images matching your search query. Please try again!"):(w(n),f(),m())}).catch(n=>{i("An error occured while fetching images"),console.error(n)}).finally(()=>{q()})}
//# sourceMappingURL=commonHelpers.js.map
