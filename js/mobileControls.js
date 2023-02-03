const up = document.querySelector("#up-arrow");
const left = document.querySelector("#left-arrow");
const right = document.querySelector("#right-arrow");
const down = document.querySelector("#down-arrow");

up.addEventListener("click", () => {
  const event = new KeyboardEvent("keydown", {
    key: "ArrowUp",
    code: "ArrowUp",
    bubbles: true,
  });
  document.dispatchEvent(event);
});

left.addEventListener("click", () => {
  const event = new KeyboardEvent("keydown", {
    key: "ArrowLeft",
    code: "ArrowLeft",
    bubbles: true,
  });
  document.dispatchEvent(event);
});

right.addEventListener("click", () => {
  const event = new KeyboardEvent("keydown", {
    key: "ArrowRight",
    code: "ArrowRight",
    bubbles: true,
  });
  document.dispatchEvent(event);
});

down.addEventListener("click", () => {
  const event = new KeyboardEvent("keydown", {
    key: "ArrowDown",
    code: "ArrowDown",
    bubbles: true,
  });
  document.dispatchEvent(event);
});
