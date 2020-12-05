const cocktails = document.querySelector(".cocktails");
let cocktailsString = "";

const cocktailsArr = [
  {
    src: "https://via.placeholder.com/150",
    alt: "card image cap",
    text: "Lorem, ipsum dolor.",
    overlayText: "Lorem",
  },
  {
    src: "https://via.placeholder.com/300",
    alt: "card image cap",
    text: "Lorem, ipsum dolor.",
    overlayText: "Lorem",
  },
  {
    src: "https://via.placeholder.com/150",
    alt: "card image cap",
    text: "Pineapple.",
    overlayText: "Lorem",
  },
];

cocktailsArr.forEach((arr) => {
  cocktailsString += `
  <div class="card" onmouseover="overlayActive(this)" onmouseout="overlayInactive(this)" style="min-width: 300px; margin-left: 4%; margin-right: 4%">
    <div id="overlay" class="d-none"> 
      <div class="d-flex justify-content-center align-items-center" onclick="hi()" style="width: 100%; height: 79.5%; position: absolute; background-color: rgba(255, 0, 0, 0.4);">
        <p class="text-white">${arr.overlayText}</p>
      </div>
    </div>
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

// ////////////////// food

const food = document.querySelector(".food");
let foodString = "";

const foodArr = [
  {
    src: "https://via.placeholder.com/150",
    alt: "card image cap",
    text: "Lorem, ipsum dolor.",
    overlayText: "Lorem",
  },
  {
    src: "https://via.placeholder.com/300",
    alt: "card image cap",
    text: "Lorem, ipsum dolor.",
    overlayText: "Lorem",
  },
  {
    src: "https://via.placeholder.com/150",
    alt: "card image cap",
    text: "Pineapple.",
    overlayText: "Lorem",
  },
];

foodArr.forEach((arr) => {
  foodString += `
  <div class="card" onmouseover="overlayActive(this)" onmouseout="overlayInactive(this)" style="min-width: 300px; margin-left: 4%; margin-right: 4%">
    <div id="overlay" class="d-none"> 
      <div class="d-flex justify-content-center align-items-center" onclick="hi()" style="width: 100%; height: 79.5%; position: absolute; background-color: rgba(255, 0, 0, 0.4);">
        <p class="text-white">${arr.overlayText}</p>
      </div>
    </div>
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

const overlay = document.querySelectorAll("#overlay");

console.log(overlay);

function overlayActive(e) {
  e.children[0].classList.remove("d-none");
  // overlay.classList.add("d-block");
}

function overlayInactive(e) {
  e.children[0].classList.add("d-none");
}
