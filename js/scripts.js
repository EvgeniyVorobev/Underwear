// Dropdown Menu
$(document).ready(function () {
	document.getElementById('navigation').onmouseover = function (e) {
		target = e.target;
		if (e.target.className == 'dropdown') {
			submenu = e.target.parentElement.children;
			for (var i = 0; i < submenu.length; i++) {
				if (submenu[i].className == 'hidden-items') {
					submenu[i].classList.add('visible-items');	
					submenu[i].classList.toggle('hidden-items');	
					hideMenu()
				}
			}
		}
	}
})

$(document).ready(function () {
	document.getElementById('navigation-addon').onmouseover = function (e) {
		target = e.target;
		if (e.target.className == 'dropdown') {
			submenu = e.target.parentElement.children;
			for (var i = 0; i < submenu.length; i++) {
				if (submenu[i].className == 'hidden-items') {
					submenu[i].classList.add('visible-items');	
					submenu[i].classList.toggle('hidden-items');	
					hideMenu()
				}
			}
		}
	}
})

function hideMenu() {
	document.body.onmouseover = function (e) {
		if (document.getElementsByClassName('visible-items')) {
			if (e.target.tagName != 'LI' && e.target.tagName != 'A') {	
				if (document.getElementsByClassName('visible-items')[0]) {
					document.getElementsByClassName('visible-items')[0].classList.add('hidden-items');
					document.getElementsByClassName('visible-items')[0].classList.remove('visible-items');	
				}		
			}
		}					
	}
}

// Lightwidget modified


// $(document).ready(function gridChange(){
// 	if (innerWidth < 1199) {
// 		console.log('ready');
// 		var lightwidgetIframe = $('#lightwidget-iframe')[0];
// 		console.log(lightwidgetIframe.contents());
// 		// document.getElementsByClassName('lightwidget')[0].classList.add('AAAAAAAAAAAA')
// 	}
// })

