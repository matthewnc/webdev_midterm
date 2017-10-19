window.onload = showImages;


function showImages(){
	var imgIndex1 = Math.round(Math.random() * 39);
	document.getElementById("randomImage1").src = "usethese/disapproval/" + "disapprove" + imgIndex1 + ".jpg";
}