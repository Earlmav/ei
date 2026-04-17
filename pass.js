const passwordInput = document.getElementById('password-input');
const passwordScreen = document.getElementById('password-screen');
const mainContent = document.getElementById('main-content');
const errorMsg = document.getElementById('error-msg');

const SECRET_PASSWORD = "sushi"; 

passwordInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        if (passwordInput.value.toLowerCase() === SECRET_PASSWORD.toLowerCase()) {

            passwordScreen.style.transition = "all 1.2s cubic-bezier(0.4, 0, 0.2, 1)";
            passwordScreen.style.filter = "blur(20px)";
            passwordScreen.style.opacity = "0";

            setTimeout(() => {
                passwordScreen.style.display = "none";
                
                if(mainContent) {
                    mainContent.style.display = "block";
                    
                    setTimeout(() => {
                        mainContent.style.opacity = "1";
                        
                        const heart = document.querySelector('.heart');
                        if (heart) {
                            heart.classList.remove('no-anim');
                            heart.classList.add('beating');
                        }

                        if (typeof window.revealSystem === "function") {
                            window.revealSystem();
                        }
                    }, 50);
                }
            }, 800);

        } else {
            errorMsg.style.display = "block";
            passwordInput.style.borderColor = "#ff4d4d";
            passwordInput.value = ""; 
        }
    }
});


function unlockLetterContent() {
    const input = document.getElementById('letter-pass-input').value;
    const lockScreen = document.getElementById('letter-lock-screen');
    const actualContent = document.getElementById('letter-actual-content');
    const errorMsg = document.getElementById('letter-error-msg');

    const SECRET_KEY = "CANILU"; 

    if (input.toLowerCase() === SECRET_KEY.toLowerCase()) {
        lockScreen.style.display = "none";
        actualContent.style.display = "block";
    } else {
        errorMsg.style.display = "block";
        document.getElementById('letter-pass-input').value = "";
    }
}