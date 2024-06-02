const flashcard = document.getElementById('flashcard');
const front = document.getElementById('front');
const back = document.getElementById('back');
const nextBtn = document.getElementById('next-btn');
const wordInput = document.getElementById('word-input');
const translationInput = document.getElementById('translation-input');
const addBtn = document.getElementById('add-btn');

let flashcards = JSON.parse(localStorage.getItem('flashcards')) || [
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

function addFlashcard() {
    const newWord = wordInput.value.trim();
    const newTranslation = translationInput.value.trim();
    if (newWord && newTranslation) {
        flashcards.push({ word: newWord, translation: newTranslation });
        localStorage.setItem('flashcards', JSON.stringify(flashcards));
        wordInput.value = '';
        translationInput.value = '';
    }
}

flashcard.addEventListener('click', () => {
    flashcard.classList.toggle('is-flipped');
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % flashcards.length;
    loadFlashcard(currentIndex);
    flashcard.classList.remove('is-flipped');
});

addBtn.addEventListener('click', addFlashcard);

// Initial load
loadFlashcard(currentIndex);