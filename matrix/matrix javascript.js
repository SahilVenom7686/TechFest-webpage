const matrixText = document.getElementById('matrix-text');

// Audio elements
const songA = document.getElementById('songA');
const songB = document.getElementById('songB');
const songC = document.getElementById('songC');
const songD = document.getElementById('songD');
const songE = document.getElementById('songE');

// Function to generate matrix text
function generateMatrixText() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from({ length: 100 }).map(() => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
}

// Function to update matrix text periodically
function updateMatrix() {
  matrixText.textContent = generateMatrixText();
  setTimeout(updateMatrix, 50); // Adjust the speed of the animation here (lower value = faster)
}

// Function to play music based on the letter clicked
function playMusic(letter) {
  switch (letter) {
    case 'A':
      songA.currentTime = 0;
      songA.play();
      break;
    case 'B':
      songB.currentTime = 0;
      songB.play();
      break;
    case 'C':
      songC.currentTime = 0;
      songC.play();
      break;
    case 'D':
      songD.currentTime = 0;
      songD.play();
      break;
    case 'E':
      songE.currentTime = 0;
      songE.play();
      break;
    default:
      break;
  }
}

// Start the matrix animation
updateMatrix();
