const cocktails = document.querySelector(".cocktails");
let cocktailsString = "";

const cocktailsArr = [
  {
    src:
      "https://images.unsplash.com/photo-1562419988-e6157d80e9fc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1pbW9zYSUyMGFsY29ob2x8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    alt: "card image cap",
    text: "Ginseng Zing",
    overlayText: `Renshen™ Spirit ginseng vodka, orange juice, lime juice, spiced ginger simple syrup champagne, ginger beer/soda`,
  },
  {
    src:
      "https://posanarestaurant.com/wp-content/uploads/2016/04/Ginseng-Sublime-Martini-Glass-Posana-200x300.jpg",
    alt: "card image cap",
    text: "Ginseng Sublime Cocktail from Posana",
    overlayText:
      "Renshen™ Spirit ginseng vodka, red beet juice, maple syrup, lemon juice",
  },
  {
    src:
      "https://melbournecocktails.com/wp-content/uploads/ginger-lemongrass-ginseng-portrait-200x300.jpg",
    alt: "card image cap",
    text: "Ginseng Ginger Spritz",
    overlayText:
      "Renshen™ Spirit ginseng vodka, dry vermouth, lemongrass, fresh ginger, ginger syrup, ginger beer",
  },
];

cocktailsArr.forEach((arr) => {
  cocktailsString += `
  <div class="card" onmouseover="overlayActive(this)" onmouseout="overlayInactive(this)" style="width: 300px; margin-left: auto; margin-right: auto; overflow: hidden">
    <div id="overlay" class="d-none" style="cursor: pointer"> 
      <div class="d-flex justify-content-center align-items-center px-2" style="width: 100%; height: 80%; position: absolute; background-color: rgba(255, 0, 0, 0.4);">
        <p class="text-white">${arr.overlayText}</p>
      </div>
    </div>
    <div style="height: 400px; width: 300px">    
      <img
        style="cursor: pointer; width: 100%; height: 100%; overflow: hidden; object-fit: cover"
        class="card-img-top"

        src=${arr.src}
        alt=${arr.alt}
      /> 
    </div>

    
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
    src:
      "https://assets.epicurious.com/photos/5761d0d88accf290434553ab/6:4/w_620%2Ch_413/classic-potato-pancakes.jpg",
    alt: "card image cap",
    text: "Potato Pancakes",
    overlayText: `russet potatoes \n onion, egg, all-purpose flour, butter`,
  },
  {
    src:
      "https://static01.nyt.com/images/2017/07/19/dining/26HOT1/19HOT1-articleLarge.jpg",
    alt: "card image cap",
    text: "Ginseng Chicken Soup",
    overlayText: "Renshen™ Spirit ginseng vodka, a whole chicken, (optional) dried shiitake mushroom, Goji berries, dried dates, ginger",
  },
  {
    src:
      "https://images.unsplash.com/photo-1512838243191-e81e8f66f1fd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZmlzaCUyMHRhY29zfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    alt: "card image cap",
    text: "Perfect Fish Tacos",
    overlayText:
      "corn torillas, cod, avocado, shredded purple cabbage, jalapeo",
  },
];

foodArr.forEach((arr) => {
  foodString += `
  <div class="card mb-5" onmouseover="overlayActive(this)" onmouseout="overlayInactive(this)" style="min-width: 300px; margin-left: 4%; margin-right: 4%">
    <div id="overlay" class="d-none" style="cursor: pointer"> 
      <div class="d-flex justify-content-center align-items-center px-2" style="width: 100%; height: 79%; position: absolute; background-color: rgba(255, 0, 0, 0.4);">
        <p class="text-white">${arr.overlayText}</p>
      </div>
    </div>
    <img
    style="cursor: pointer"
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
