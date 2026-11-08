(function(){var gs=[].slice.call(document.querySelectorAll('.g img')),d=document.getElementById('lb'),im=document.getElementById('lbi'),c=document.getElementById('lbc'),i=0;
var bn=['০','১','২','৩','৪','৫','৬','৭','৮','৯'];function b(n){return String(n).replace(/\d/g,function(x){return bn[x]})}
function show(k){i=(k+gs.length)%gs.length;im.src=gs[i].src;c.textContent=b(i+1)+' / '+b(gs.length)}
gs.forEach(function(g,k){g.parentNode.addEventListener('click',function(){show(k);d.showModal()})});
d.querySelector('.x').onclick=function(){d.close()};d.querySelector('.p').onclick=function(){show(i-1)};d.querySelector('.n').onclick=function(){show(i+1)};
d.addEventListener('click',function(e){if(e.target===d||e.target.className==='st')d.close()});
d.addEventListener('keydown',function(e){if(e.key==='ArrowLeft')show(i-1);if(e.key==='ArrowRight')show(i+1)});
})();

(function(){var b=document.querySelector('.burger'),m=document.getElementById('menu');if(!b||!m)return;
function t(o){m.classList.toggle('open',o);b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'মেনু বন্ধ করুন':'মেনু খুলুন')}
b.addEventListener('click',function(){t(!m.classList.contains('open'))});
m.addEventListener('click',function(e){if(e.target.tagName==='A')t(false)});
document.addEventListener('keydown',function(e){if(e.key==='Escape')t(false)});
window.addEventListener('resize',function(){if(window.innerWidth>760)t(false)});
})();
