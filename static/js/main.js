function nightMode() {
	if (localStorage.getItem('stylesheet')) {
		localStorage.clear();
		document.getElementById('night-css').setAttribute('href', '');
	} else {
		localStorage.setItem('stylesheet', '/css/night.css');
		document.getElementById('night-css').setAttribute('href', localStorage.getItem('stylesheet'));
	}
}

document.getElementById('night-mode').addEventListener('click', nightMode)