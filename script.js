var audio = document.createElement('audio');
var source = document.createElement('source');
var media = document.getElementById('media');
media.appendChild(audio);
audio.appendChild(source);
source.setAttribute('src', 'https://cdn.glitch.com/32e1cede-2c77-4515-9044-e18d39aef0d7%2FBasics%20of%20Personal%20FInance%20%26%20Home%20Ownership%20by%20Faizan%20Bhatti.m4a?v=1599001948751');
source.setAttribute('type', 'audio/mpeg');
audio.setAttribute('controls', 'controls');

function myFunction(img) {
	// Get the expanded image
	var expandImg = document.getElementById("expandedImg");

	var x = document.getElementsByClassName("closebtn")[0];

	x.style.visibility = "visible";
	// Get the image text
	var imgText = document.getElementById("imgtext");

	imgText.style.visibility = "visible";
	// Use the same src in the expanded image as the image being clicked on from the grid
	expandImg.src = img.src;
	// Use the value of the alt attribute of the clickable image as text inside the expanded image
	imgText.innerHTML = img.alt;
	// Show the container element (hidden with CSS)
	expandImg.parentElement.style.display = "block";
}