// import { createPopper } from "@popperjs/core";
const ginseng = document.querySelector("#ginseng");
const bottle = document.querySelector("#bottle");
const tooltip = document.querySelector("#tooltip");
const tooltip2 = document.querySelector("#tooltip2");

let popperInstance = null;

function create() {
  popperInstance = Popper.createPopper(ginseng, tooltip, {
    placement: "left",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [10, 20],
        },
      },
    ],
  });
}

function destroy() {
  if (popperInstance) {
    popperInstance.destroy();
    popperInstance = null;
  }
}

function show() {
  tooltip.setAttribute("data-show", "");
  create();
}

function hide() {
  tooltip.removeAttribute("data-show");
  destroy();
}

const showEvents = ["mouseenter", "focus"];
const hideEvents = ["mouseleave", "blur"];

showEvents.forEach((event) => {
  ginseng.addEventListener(event, show);
});

hideEvents.forEach((event) => {
  ginseng.addEventListener(event, hide);
});

let popperInstances = null;

function created() {
  popperInstances = Popper.createPopper(bottle, tooltip2, {
    placement: "right",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [10, 20],
        },
      },
    ],
  });
}

function destroyed() {
  if (popperInstances) {
    popperInstances.destroy();
    popperInstances = null;
  }
}

function shown() {
  tooltip2.setAttribute("data-show", "");
  created();
}

function hided() {
  tooltip2.removeAttribute("data-show");
  destroyed();
}

showEvents.forEach((event) => {
  bottle.addEventListener(event, shown);
});

hideEvents.forEach((event) => {
  bottle.addEventListener(event, hided);
});
