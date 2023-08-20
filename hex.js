// const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
//

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// btn.addEventListener('click', () => {
//   let hexColor = '#';
//   for (let i = 0; i < 6; i++) {
//     hexColor += hex[getRandomNumber()];
//   }
//   color.textContent = hexColor;
//   document.body.style.backgroundColor = hexColor;
// });

// function getRandomNumber() {
//   return Math.floor(Math.random() * hex.length);
// }

btn.addEventListener('click', () => {
  color.textContent = generateRandomColor();
  document.body.style.backgroundColor = generateRandomColor();
});

function generateRandomColor() {
  const hexCodes = '0123456789ABCDEF';
  let color = '';

  for (let i = 0; i < 6; i++) {
    color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
  }

  return '#' + color;
}
