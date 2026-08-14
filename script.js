const header=document.querySelector('.site-header');window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>20));const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');toggle.addEventListener('click',()=>nav.classList.toggle('open'));document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in-view')}),{threshold:.14});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));const modal=document.getElementById('galleryModal'),open=document.getElementById('openGallery'),close=document.getElementById('closeGallery');open.addEventListener('click',()=>{modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'});close.addEventListener('click',()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''});modal.addEventListener('click',e=>{if(e.target===modal){close.click()}});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))close.click()});
if(window.matchMedia('(min-width: 900px)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  const heroVisual=document.querySelector('.hero-visual');
  window.addEventListener('scroll',()=>{
    if(!heroVisual) return;
    const y=Math.min(window.scrollY*.05,28);
    heroVisual.style.transform=`translateY(${y}px)`;
  },{passive:true});
}
