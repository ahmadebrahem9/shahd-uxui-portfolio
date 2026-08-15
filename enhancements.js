const themeToggle=document.getElementById('themeToggle');
function setTheme(theme){
  const light=theme==='light';
  document.body.classList.toggle('light',light);
  themeToggle.textContent=light?'☾':'☀';
  themeToggle.setAttribute('aria-label',light?'Switch to dark mode':'Switch to light mode');
  localStorage.setItem('shahd-theme',theme);
}
themeToggle.addEventListener('click',()=>setTheme(document.body.classList.contains('light')?'dark':'light'));
document.documentElement.lang='en';
document.documentElement.dir='ltr';
localStorage.removeItem('shahd-language');
setTheme(localStorage.getItem('shahd-theme')||'dark');
