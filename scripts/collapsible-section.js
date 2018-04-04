(function() {

	let collapsibleHeaders = document.querySelectorAll('.collapsible-header') || [];

	for (let h = 0; h < collapsibleHeaders.length; h++) {
		collapsibleHeaders[h].addEventListener('click', function(e) {
			e.preventDefault();
			this.parentElement.classList.toggle('expanded');
		});
	}

}());
