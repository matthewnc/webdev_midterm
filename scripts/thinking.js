window.onload = showImages;


function showImages(){
	var imgIndex1 = Math.round(Math.random() * 3);
	document.getElementById("randomImage1").src = "usethese/thinking/" + "think" + imgIndex1 + ".jpg";
}