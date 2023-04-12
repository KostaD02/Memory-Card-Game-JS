const controls = document.querySelector(".controls");
const generate = document.querySelector(".generate");
const rangePicker = document.querySelector("#rangePicker");
const displayRange = document.querySelector("#displayRange");
const startBtn = document.querySelector("#startBtn");
const scoreDisplay = document.querySelector("#scoreDisplay");
const displayWrapper = document.querySelector(".wrapper");
const selectedCards = [];

let isStarted = false;
let score = 0;

displayRange.innerHTML = rangePicker.value;

rangePicker.addEventListener('change', () => {
  displayRange.innerHTML = rangePicker.value;
});

startBtn.addEventListener('click', () => {
  isStarted = true;
  startGame();
});


function startGame() {
  toggleControls();
  initCards();
  rotateAllCards();
}

function toggleControls() {
  generate.style.display = isStarted ? "grid" : "none";
  displayWrapper.style.display = isStarted ? "block" : "none";
  controls.style.display = isStarted ? "none" : "block";
}

function initCards() {
  const randomCardsArray = getShuffledCards(cardsArrayName, rangePicker.value);
  const cardsArray = getShuffledWithDuplicates(randomCardsArray, rangePicker.value);
  generate.style.gridTemplateColumns = `repeat(${Math.floor(rangePicker.value / 2)}, 1fr)`;
  cardsArray.forEach(card => {
    generate.innerHTML += `
      <div class="box back-rotate">
        <img class="card-image" src="./assets/images/cards/${card}">
      </div>
    `;
  });
  document.querySelectorAll('.box').forEach(element => {
    toggleBoxClasses(element);
    element.addEventListener('click', function () {
      if (!this.classList.contains("rotate") && selectedCards.length < 2) {
        toggleBoxClasses(this);
        selectedCards.push(this);
        checkSelectedElements();
      }
    })
  });
}

function rotateAllCards() {
  setTimeout(() => {
    document.querySelectorAll('.box').forEach(element => {
      toggleBoxClasses(element);
    });
  }, 2000);
}

function toggleBoxClasses(element) {
  element.classList.toggle("rotate");
  element.classList.toggle("back-rotate");
}

function checkSelectedElements() {
  if (selectedCards.length === 2) {
    const firstCard = getImageNameWithBox(selectedCards[0]);
    const secondCard = getImageNameWithBox(selectedCards[1]);
    if (firstCard === secondCard) {
      clearSeletedCards();
      score++;
      scoreDisplay.innerHTML = score;
      if (score === Number(rangePicker.value)) {
        displayAlert('Congratz', 'success', 'You won game');
        setTimeout(() => {
          resetConfig();
          toggleControls();
        }, 1500);
      }
    } else {
      setTimeout(() => {
        selectedCards.forEach(card => {
          toggleBoxClasses(card);
        });
        clearSeletedCards();
      }, 1000);
    }
  }
}

function clearSeletedCards() {
  selectedCards.pop();
  selectedCards.pop();
}

function getImageNameWithBox(element) {
  return element.childNodes[1].src.split("/").pop();
}

function displayAlert(title, icon, text = "") {
  Swal.fire({ title, icon, text });
}

function resetConfig() {
  generate.innerHTML = "";
  isStarted = false;
  score = 0;
  scoreDisplay.innerHTML = score;
}