const cocktails = document.querySelector(".cocktails");
let cocktailsString = "";

const cocktailsArr = [
  {
    src: "https://via.placeholder.com/150",
    alt: "card image cap",
    text: "Lorem, ipsum dolor.",
  },
  {
    src: "https://via.placeholder.com/150",
    alt: "card image cap",
    text: "Lorem, ipsum dolor.",
  },
  {
    src: "https://via.placeholder.com/150",
    alt: "card image cap",
    text: "Lorem, ipsum dolor.",
  },
];

cocktailsArr.forEach((arr, i) => {
  cocktailsString += `
	<div class="card" style="min-width: 50px; margin: auto;">
		<img
		class="card-img-top"
		src=${arr.src}
		alt=${arr.alt}
		/>
		<div class="card-body">
			<h5 class="card-title">${arr.text}</h5>
		</div>
  	</div>
  `;
});

cocktails.insertAdjacentHTML("beforeend", cocktailsString);

// food
const food = document.querySelector(".food");
let foodString = "";

const foodArr = [
  {
    src: "https://via.placeholder.com/150",
    alt: "card image cap",
    text: "Lorem, ipsum dolor.",
  },
  {
    src: "https://via.placeholder.com/150",
    alt: "card image cap",
    text: "Lorem, ipsum dolor.",
  },
  {
    src: "https://via.placeholder.com/150",
    alt: "card image cap",
    text: "Pineapple.",
  },
];

foodArr.forEach((arr, i) => {
  foodString += `
	<div class="card mx-4">
		<img
		class="card-img-top"
		src=${arr.src}
		alt=${arr.alt}
		/>
		<div class="card-body">
			<h5 class="card-title">${arr.text}</h5>
		</div>
  	</div>
  `;
});

food.insertAdjacentHTML("beforeend", foodString);
