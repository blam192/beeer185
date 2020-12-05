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
	<div class="card mx-5">
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
