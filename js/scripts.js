(d => {

	let nav = d.getElementById('js__nav');

	d.getElementById('js__nav').addEventListener('click', ev => {
		smoothScroll(ev);
	});

	function smoothScroll(event) {
	    if (event.target.hash !== 'A') { 
	        event.preventDefault()
	        let hash = event.target.hash.replace("#", "")
	        let link = document.getElementById(hash)
	        const position = link.getBoundingClientRect().y 
	        let top = 0

	        let smooth = setInterval(() => {
	            let leftover = position - top
	            if (top === position) {
	                clearInterval(smooth)
	            }

	            else if(position > top && leftover < 10) {
	                top += leftover
	                window.scrollTo(0, top)
	            }

	            else if(position > (top - 10)) {
	                top += 10
	                window.scrollTo(0, top)
	            }

	        }, 3)
	    }
	}

})(document)