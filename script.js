const flashcard = document.getElementById('flashcard');
const front = document.getElementById('front');
const back = document.getElementById('back');
const nextBtn = document.getElementById('next-btn');

const flashcards = [
    { word: "átl", translation: "Water" },
    { word: "amóxtli", translation: "Book" },
    { word: "káli", translation: "House" },
    { word: "síuatl", translation: "Woman" },
    { word: "kóatl", translation: "Snake" }
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