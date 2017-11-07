'use strict';

var file;
function scanFile(event) {
	var resImage = document.getElementById("fileInput");
	document.getElementById("fileInput").click();
	file = resImage.files[0];
	window.location.replace("../addcoupon.html");
}

function goBack(event){
	window.location.replace("../coupon.html");
}