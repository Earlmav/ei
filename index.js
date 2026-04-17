let noteIndex = 0;

function handleJar() {
    const display = document.getElementById('note-display');
    const btn = document.getElementById('jar-action-btn');
    const hints = window.HINT_NOTES;

    if (noteIndex < hints.length) {
        display.style.opacity = 0;
        
        setTimeout(() => {
            display.innerText = hints[noteIndex];
            display.style.opacity = 1;
            noteIndex++;

            if (noteIndex === hints.length) {
                btn.innerText = "All hints revealed ✨";
                btn.style.opacity = "0.6";
                btn.style.cursor = "default";
            }
        }, 200);
    } 
}


const quizData = [
    {
        q: "Lagi natin ginagawa nung gr8",
        a: ["Away", "Call", "Laro Roblox", "Aral"],
        c: 1 
    },
    {
        q: "Kailan ako nagconfess? 😯",
        a: ["May 14, 2025", "August 8, 2025", "April 27, 2025", "September 30, 2025"],
        c: 2
    },
    {
        q: "Alin ako dito",
        a: ["Nonchalant", "Maingay", "Makulit", "Masungit"],
        c: 0
    },
    {
        q: "Ano ang 2nd to the last na kulay sa rainbow?",
        a: ["Blue", "Red", "Indigo", "Purple"],
        c: 2
    },
    {
        q: "Unang photoism nating dalawa?",
        a: ["gr10 start of classes", "Seniors' Night", "Last day of clearance", "Intrams gr10"],
        c: 2
    },   
    {
        q: "Paborito kong kausap?",
        a: ["Siots", "Achi", "Sarili ko", "U"],
        c: 3

    }
];

let currentQuestionIndex = 0;
let userAnswers = [];

function startQuiz() {
    const readyBtn = document.getElementById('ready-btn');
    const quizContainer = document.getElementById('quiz-container');

    userAnswers = [];
    currentQuestionIndex = 0;
    
    if (readyBtn) readyBtn.style.display = "none";
    quizContainer.style.display = "flex"; 
    quizContainer.style.flexDirection = "column";
    quizContainer.style.alignItems = "center";
    
    setTimeout(() => {
        quizContainer.style.opacity = "1";
        loadQuestion();
    }, 50);
}

function loadQuestion() {
    const questionEl = document.getElementById('question-text');
    const optionsGrid = document.getElementById('options-grid');
    
    const data = quizData[currentQuestionIndex];

    if (data) {
        questionEl.textContent = data.q;
        optionsGrid.innerHTML = "";

        data.a.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.className = "quiz-btn";
            btn.textContent = option;
            btn.onclick = () => recordAndNext(index);
            optionsGrid.appendChild(btn);
        });
    } else {
        validateAllAnswers();
    }
}

function recordAndNext(selectedIndex) {
    userAnswers.push(selectedIndex);
    currentQuestionIndex++;
    loadQuestion();
}

function validateAllAnswers() {
    const quizContainer = document.getElementById('quiz-container');
    const letterPage = document.getElementById('letter-page'); 
    
    const isPerfect = userAnswers.every((choice, index) => choice === quizData[index].c);

    if (isPerfect) {
        quizContainer.style.opacity = "0";
        
        setTimeout(() => {
            quizContainer.style.display = "none";
            
            if (letterPage) {
                letterPage.classList.add('page-active'); 
                letterPage.style.display = "block"; 
            } else {
                console.error("Letter page element not found!");
            }
        }, 500);
    } else {
        alert("May Mali");
        startQuiz();
    }
}