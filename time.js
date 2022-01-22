let url = "https://complimentr.com/api";

fetch(url)
	.then((response) => response.json())
	.then((data) => showCompliments(data));

function showCompliments(data) {
	let phrase = data.compliment;
	let compsection = document.getElementById("text");
	compsection.textContent += phrase;
}

let btn = document.querySelector(".btn");

btn.addEventListener("click", function (event) {
	console.log("Awww You Are The Best");
	window.location.reload();
});
