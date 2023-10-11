import '../css/style.css'
import '../scss/main.scss';
(() => {
	'use strict'
	window.addEventListener('scroll', () => {
		var top = (window.scrollY || window.scrollTop) - (window.clientTop || 0);
		document.getElementById('fix').classList.toggle('scrolled',top);
	});

	var menubtn = document.getElementById('showmenu');
	menubtn.addEventListener('click', function(e){
		menubtn.classList.toggle('active');
		document.getElementById('menulist').classList.toggle('active');
	}, false);
})()