const places = document.querySelector("#places");

let placesStr = "";

const placesArr = [
  {
    src: "assets/images/miami.jpg",
    text: "MIAMI",
  },
  {
    src: "assets/images/dc.jpg",
    text: "WASHINGTON DC",
  },
  {
    src: "assets/images/ny.jpg",
    text: "NEW YORK",
  },
  {
    src: "assets/images/boston.jpeg",
    text: "BOSTON",
  },
];

placesArr.forEach((place) => {
  placesStr += `
	<div>
    <img src="${place.src}" width="300px" style="border-radius: 5px"/>
    <p class="text-center">${place.text}</p>
	</div>
  `;
});

places.insertAdjacentHTML("beforeend", placesStr);

console.log(placesStr);
