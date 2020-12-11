const navLinks = document.querySelector("#nav-links");
const socialMedia = document.querySelector("#social-media");
let socialMediaStr = "";
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
    href: "./tour.html",
    text: "Events",
  },
  {
    href: "./team.html",
    text: "Our Team",
  },
  {
    href: "./contactus.html",
    text: "Contact Us",
  },
];

const socialMediaArr = [
  {
    class: "fa-tiktok",
    href: "assets/images/tiktok.png",
  },
  {
    class: "fa-instagram",
    href: "assets/images/ig.png",
  },
  {
    class: "fa-facebook",
    href: "assets/images/fb.png",
  },
];

navArr.forEach((navLink) => {
  navStr += `
		<a href="${navLink.href}" class="font-14">${navLink.text}</a>
	`;
});

navLinks.insertAdjacentHTML("beforeend", navStr);

socialMediaArr.forEach((socialMedia) => {
  socialMediaStr += `
	<a class="mx-3" href="${socialMedia.href}"><i class="fab ${socialMedia.class} fa-lg"></i></a>
	`;
});

socialMedia.insertAdjacentHTML("beforeend", socialMediaStr);
