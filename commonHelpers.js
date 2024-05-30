import{a as f,S as m,i as d}from"./assets/vendor-b0d10f48.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(r){if(r.ep)return;r.ep=!0;const t=n(r);fetch(r.href,t)}})();const g="https://pixabay.com/api/",h="44067524-7b37ef940db212c179aad5861";function y(o){const e=`${g}?key=${h}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;return f.get(e).then(n=>n.data.hits).catch(n=>{throw console.error("Error fetching images:",n),new Error("Failed to fetch images")})}const c=document.querySelector(".gallery"),u=document.querySelector(".loader");let p=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(o){c.innerHTML=w(o)}function w(o){return o.map(e=>`<li class="gallery-item">
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
</li>`).join("")}function i(o){d.error({title:"Error",message:o})}function b(){c.innerHTML=""}function S(){u.style.display="block"}function $(){u.style.display="none"}function q(){p.refresh()}const E=document.querySelector(".form-search"),a=document.querySelector('.form-search input[name="query"]');E.addEventListener("submit",v);function v(o){o.preventDefault();const e=a.value.trim();if(!e){i("Please enter a search term");return}b(),S(),y(e).then(n=>{n.length===0?i("Sorry, there are no images matching your search query. Please try again!"):(L(n),a.value="",q())}).catch(n=>{i("An error occured while fetching images"),console.error(n)}).finally(()=>{$()})}
//# sourceMappingURL=commonHelpers.js.map
