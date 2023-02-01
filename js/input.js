let inputDirection = { x: 0, y: 0 };
let previousInputDirection = { x: 0, y: 0 };

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      if (previousInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: -1 };
      break;
    case "ArrowRight":
      if (previousInputDirection.x !== 0) break;
      inputDirection = { x: 1, y: 0 };
      break;
    case "ArrowDown":
      if (previousInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: +1 };
      break;
    case "ArrowLeft":
      if (previousInputDirection.x !== 0) break;
      inputDirection = { x: -1, y: 0 };
      break;
    default:
      return inputDirection;
  }
});

export function getInputDirection() {
  previousInputDirection = inputDirection;
  return inputDirection;
}
