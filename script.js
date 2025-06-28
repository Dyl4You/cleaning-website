// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))
            .scrollIntoView({behavior:'smooth'});
  });
});

// simple success alert
const f=document.getElementById('contact-form');
if(f){f.addEventListener('submit',()=>setTimeout(()=>alert('Thanks! We’ll be in touch soon.'),100));}
