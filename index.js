let navLinks = document.querySelector("#nav-links");
let navStr = "";

const navArr = [
  {
    href: "./story.html",
    text: "Our Story",
  },
  {
    href: "./products.html",
    text: "Products",
  },
  {
    href: "./recipes.html",
    text: "Recipes",
  },
  {
    href: "./purchasenow.html",
    text: "Purchase Now",
  },
  {
    href: "./contactus.html",
    text: "Contact Us",
  },
];

navArr.forEach((navLink) => {
  navStr += `
		<a href="${navLink.href}" class="font-14">${navLink.text}</a>
	`;
});

console.log(navStr);

navLinks.insertAdjacentHTML("beforeend", navStr);
