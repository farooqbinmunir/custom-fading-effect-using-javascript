/* Script starts */
setInterval(fb_fadeIn, 2000);
function fb_fadeIn(){
	var newsWrapper = document.querySelector('.fbm-fading-box');
	newsWrapper.style.opacity = 0.10;
	setTimeout(function(){
		newsWrapper.style.opacity = 1;
	}, 1000);
}