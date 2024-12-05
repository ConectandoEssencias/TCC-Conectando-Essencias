window.addEventListener("load", () => {
   document.body.classList.add("loaded");
});

 
const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = () => {
   faders.forEach(fader => {
       const rect = fader.getBoundingClientRect();
       if (rect.top <= window.innerHeight - 100) {
           fader.classList.add('visible');
      }
   });
};


window.addEventListener('scroll', appearOnScroll);
window.addEventListener('load', appearOnScroll);