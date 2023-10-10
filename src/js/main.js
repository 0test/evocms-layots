import '../css/style.css'
import '../scss/main.scss';
(() => {
	'use strict'
	window.addEventListener('scroll', () => {
		var header = document.getElementById('fix');
		var top = (window.scrollY || window.scrollTop) - (window.clientTop || 0);
		if (top) {
			header.classList.add('scrolled');
		}
		else {
			header.classList.remove('scrolled');
		}
	});

	var menubtn = document.getElementById('showmenu');
	menubtn.addEventListener('click', function(e){
		menubtn.classList.toggle('active');
		document.getElementById('menulist').classList.toggle('active');
	}, false);
})()