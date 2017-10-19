window.onload = showImages;


function showImages(){
	var imgIndex1 = Math.round(Math.random() * 80);
	var imgIndex2 = Math.round(Math.random() * 80);
	var imgIndex3 = Math.round(Math.random() * 80);
	document.getElementById("randomImage1").src = "usethese/random/" + imgIndex1 + ".jpg";
	document.getElementById("randomImage2").src = "usethese/random/" + imgIndex2 + ".jpg";
	document.getElementById("randomImage3").src = "usethese/random/" + imgIndex3 + ".jpg";
}