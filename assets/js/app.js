
const btn = document.querySelector('.hamburger');
const mobile = document.querySelector('.mobile-menu');
if(btn){btn.addEventListener('click',()=>{const visible = mobile.style.display==='block';mobile.style.display= visible?'none':'block';});}
