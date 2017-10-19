window.onload = showImages;


function showImages(){
	var imgIndex1 = Math.round(Math.random() * 10);
	document.getElementById("randomImage1").src = "usethese/approval/" + "approve" + imgIndex1 + ".jpg";
}