var redText = document.querySelectorAll('.change-color')[0];
var first = document.getElementById("first"); 
var last = document.getElementById("last");
var lightbox = document.querySelectorAll('.lightbox')[0];



function getFormValues() {
	console.log(first.value, last.value);	
}

function changeColor() { 
	redText.classList.add('turnsRed');
}

function toggleImage() {
	lightbox.classList.add('isVisible');
}

function removeImage() { 
	lightbox.classList.remove('isVisible');


}

document.getElementById("name-btn").onclick = function() {
	getFormValues();
};

document.getElementById("color-btn").onclick = function() {
	changeColor();
};

document.getElementById("image-btn").onclick = function() {
	toggleImage();
};

lightbox.onclick = function() {
	removeImage();
};