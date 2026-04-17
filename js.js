// --- ELEMENTS ---
const openLetterBtn = document.getElementById('open-letter-btn');
const letterPage = document.getElementById('letter-page');
const heartContainer = document.querySelector('.heart');

// --- 1. OPENING THE LETTER ---
// Instead of a checkbox 'change', we use a 'click' event
openLetterBtn.addEventListener('click', () => {
    // 1. Show the full-page overlay
    letterPage.classList.add('page-active');
    
    // 2. Adjust the heart visual if needed 
    // (Optional: add a class to hide the corner heart while reading)
    heartContainer.style.opacity = "0";
    
    // 3. Prevent the background Games from scrolling
    document.body.style.overflow = 'hidden';
});

// --- 3. GLOBAL REVEAL (Called by pass.js) ---
window.revealSystem = function() {
    const main = document.getElementById('main-content');
    if (main) {
        main.style.display = "block";
        // Small timeout to allow display:block to register before opacity change
        setTimeout(() => {
            main.style.opacity = "1";
            heartContainer.classList.add('beating');
        }, 50);
    }
};

document.getElementById('close-letter-btn').onclick = function() {
    const letterPage = document.getElementById('letter-page');
    const mainContent = document.getElementById('main-content');

    // Hide Letter
    letterPage.style.display = "none";
    letterPage.classList.remove('page-active');

    // Bring Hub back
    if (mainContent) {
        mainContent.style.display = "block";
        setTimeout(() => { 
            mainContent.style.opacity = "1"; 
        }, 10);
    }
};

let currentPage = 1;

function flipPage(targetPage) {
    const pages = [
        document.getElementById('p1'),
        document.getElementById('p2'),
        document.getElementById('p3')
    ];
    const nextBtn = document.getElementById('next-page-btn');
    const prevBtn = document.getElementById('prev-page-btn');
    const paper = document.querySelector('.letter-paper');

    // 1. Smooth Fade Out
    paper.style.opacity = "0";

    setTimeout(() => {
        // 2. Hide all pages
        pages.forEach(p => p.style.display = "none");

        // 3. Show the target page
        pages[targetPage - 1].style.display = "block";
        currentPage = targetPage;

        // 4. Update Button Visibility
        // Hide "Back" if on Page 1
        prevBtn.style.display = (currentPage === 1) ? "none" : "inline-block";
        
        // Hide "Next" if on Page 3
        nextBtn.style.display = (currentPage === 3) ? "none" : "inline-block";

        // 5. Reset scroll and Fade In
        document.getElementById('letter-page').scrollTop = 0;
        paper.style.opacity = "1";
    }, 400);
}