const teams = document.querySelector("#teams");

let teamsStr = "";

const teamsArr = [
  {
    src: "assets/images/magnus.png",
    text: "Magnus Aston",
  },
  {
    src: "assets/images/sara.png",
    text: "Sara Florez Brinez",
  },
  {
    src: "assets/images/jocelyn.png",
    text: "Jocelyn Wang",
  },
  {
    src: "assets/images/bernice.JPG",
    text: "Bernice Lam",
  },
];

teamsArr.forEach((team) => {
  teamsStr += `
  	<div class="d-flex align-items-center" style=" margin-bottom: 15px">
  		<img style="margin-left: 25%; margin-right: auto; object-fit: cover" width="400px" height="300px" src="${team.src}" />
  		<h2 style="margin-left: 0; margin-right: auto; margin-top: 0;">${team.text}</h2>
	</div>
  `;
});

teams.insertAdjacentHTML("beforeend", teamsStr);

console.log(teamsStr);
