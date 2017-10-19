window.onload = showImages;


function showImages(){
	var imgIndex1 = Math.round(Math.random() * 11);
	document.getElementById("randomImage1").src = "usethese/other/" + "other" + imgIndex1 + ".jpg";
}