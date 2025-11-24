document.getElementById('navToggle').onclick=function(){
  const nav=document.getElementById('primaryNav');
  const exp=this.getAttribute('aria-expanded')==='true';
  this.setAttribute('aria-expanded', !exp);
  nav.classList.toggle('open');
};