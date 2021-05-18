const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});

var typed = new Typed(".typing",{
	strings:["Actors.","Artists.","Bloggers.","Coders.","Content Writers.","Dancers.","Digital Marketers.","Editors.","Designers.","Models.","Musicians.","Photographers.","Speakers."],
	typeSpeed:100,
	backSpeed:60,
	loop:true
});

let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
	let progressHeight = (window.pageYOffset / totalHeight) * 100;
	progress.style.height = progressHeight + "%";
}

Carousel Auto-Cycle
  $(document).ready(function() {
    $('.carousel').carousel({
      interval: 6000
    })
  });
