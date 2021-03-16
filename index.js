const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});

var typed = new Typed(".typing",{
	strings:["Actor.","Artist.","Blogger.","Coder.","Content Writer.","Dancer.","Digital Marketer.","Editor.","Designer.","Model.","Musician.","Photographer.","Speaker."],
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
