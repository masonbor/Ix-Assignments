var first = document.getElementById('first'); 
var last = document.getElementById('last'); 
var turnsRed = document.querySelectorAll('.change-color')[0];
var lightbox = document.querySelectorAll('.lightbox')[0];



function getFormValues() {
	console.log(first.value, last.value);
	
}

function changeColor() {
	turnsRed.classList.add('isRed');

	
}

function toggleImage() {
	lightbox.classList.add('isVisible');
}

function removeIamge() { 
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

lightbox.onclick = function () { 
	removeIamge();
};