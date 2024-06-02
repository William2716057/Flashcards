const flashcard = document.getElementById('flashcard');
const front = document.getElementById('front');
const back = document.getElementById('back');
const nextBtn = document.getElementById('next-btn');
const wordInput = document.getElementById('word-input');
const translationInput = document.getElementById('translation-input');
const addBtn = document.getElementById('add-btn');
const deleteAllBtn = document.getElementById('delete-all-btn');

let flashcards = JSON.parse(localStorage.getItem('flashcards')) || [
  //  { word: "átl", translation: "Water" },
  //  { word: "amóxtli", translation: "Book" },
  //  { word: "káli", translation: "House" },
  //  { word: "síuatl", translation: "Woman" },
  //  { word: "kóatl", translation: "Snake" }
];

let currentIndex = 0;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


function loadFlashcard(index) {
    if (flashcards.length > 0) {
        front.textContent = flashcards[index].translation;
        back.textContent = flashcards[index].word;
    } else {
        front.textContent = 'Add input';
        back.textContent = '';
    }
}

function addFlashcards() {
    const words = wordInput.value.trim().split('\n').map(item => item.trim());
    const translations = translationInput.value.trim().split('\n').map(item => item.trim());

    if (words.length === translations.length) {
        words.forEach((word, index) => {
            flashcards.push({ word, translation: translations[index] });
        });
        localStorage.setItem('flashcards', JSON.stringify(flashcards));
        wordInput.value = '';
        translationInput.value = '';
        shuffleArray(flashcards);
        currentIndex = 0;
        loadFlashcard(currentIndex);
    } else {
        alert('The number of words and translations must match.');
    }
}
function deleteAllFlashcards() {
    flashcards = [];
    localStorage.removeItem('flashcards');
    loadFlashcard(0);
}

flashcard.addEventListener('click', () => {
    flashcard.classList.toggle('is-flipped');
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % flashcards.length;
    loadFlashcard(currentIndex);
    flashcard.classList.remove('is-flipped');
});

document.getElementById('read-button').addEventListener('click', function () {
    var text = document.getElementById('text-to-read').value;
    var lang = document.getElementById('language-select').value;
    speak(text, lang);
});

function speak(text, lang) {
    if ('speechSynthesis' in window) {
        var msg = new SpeechSynthesisUtterance();
        msg.text = text;
        msg.lang = lang; 
        window.speechSynthesis.speak(msg);
    } else {
        alert('Sorry, your browser does not support text-to-speech!');
    }
}


addBtn.addEventListener('click', addFlashcards);

deleteAllBtn.addEventListener('click', deleteAllFlashcards);

// Initial load
shuffleArray(flashcards);
loadFlashcard(currentIndex);
