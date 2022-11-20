
	var scroll = new SmoothScroll('a[href*="#"]',{
        speed: 600,
	    speedAsDuration: true
    });

    function onClickMenu(){
            document.getElementById("menu").classList.toggle("change")
            document.getElementById("nav").classList.toggle("change")
            document.getElementById("menu-bg").classList.toggle("change-bg")
            
    }