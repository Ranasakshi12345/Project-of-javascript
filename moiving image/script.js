const movingImage = document.getElementById('movingImage');

let topPosition = 0;
let leftPosition = 0;

document.addEventListener('keydown', (event) => {
  const key = event.key || event.keyCode;

  switch (key) {
    case 'ArrowUp':
    case 38:
      topPosition -= 10;
      movingImage.style.top = topPosition + 'px';
      break;

    case 'ArrowDown':
    case 40:
      topPosition += 10;
      movingImage.style.top = topPosition + 'px';
      break;

    case 'ArrowLeft':
    case 37:
      leftPosition -= 10;
      movingImage.style.left = leftPosition + 'px';
      break;

    case 'ArrowRight':
    case 39:
      leftPosition += 10;
      movingImage.style.left = leftPosition + 'px';
      break;
  }
});

  