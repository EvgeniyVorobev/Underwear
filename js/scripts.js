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

// Modal windows

$(document).ready(function() {
	$('#modal-window_1, #modal-window_2, #modal-window_3,#modal-window_4,#modal-window_5,#modal-window_6,#modal-window_7,#modal-window_8').click(function(e){ // Вешаем событие на id = modal-window_1;
		var modalTarget = e.target.getAttribute('modal-target');
		// $('body')[0].classList.add('fixed');
		// $('#'+modalTarget).removeAttr('hidden');
		$('body').attr('style','overflow-y: hidden');
		$('#'+modalTarget).attr('style','left:0');
		// $('#'+modalTarget).removeAttr('hidden');
		$('.close-modal').click(function(){
			// $('body')[0].classList.remove('fixed');
			$('body').attr('style','');
			$('#'+modalTarget).attr('style','left:10000px');
		})
	})
})

