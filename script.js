const flashcard = document.getElementById('flashcard');
const front = document.getElementById('front');
const back = document.getElementById('back');
const nextBtn = document.getElementById('next-btn');

const flashcards = [
    { word: "�tl", translation: "Water" },
    { word: "am�xtli", translation: "Book" },
    { word: "k�li", translation: "House" },
    { word: "s�uatl", translation: "Woman" },
    { word: "k�atl", translation: "Snake" }
];

let currentIndex = 0;

function loadFlashcard(index) {
    front.textContent = flashcards[index].translation;
    back.textContent = flashcards[index].word;
}

flashcard.addEventListener('click', () => {
    flashcard.classList.toggle('is-flipped');
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % flashcards.length;
    loadFlashcard(currentIndex);
    flashcard.classList.remove('is-flipped');
});

// Initial load
loadFlashcard(currentIndex);