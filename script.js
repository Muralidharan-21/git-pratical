const text = ["Java Full Stack Developer.", "Problem Solver.", "Spring Boot Developer.", "DSA Enthusiast."];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function type() {
    if (index < text.length) {
        if (!isDeleting && charIndex <= text[index].length) {
            currentText = text[index].substring(0, charIndex);
            charIndex++;
        } else if (isDeleting && charIndex >= 0) {
            currentText = text[index].substring(0, charIndex);
            charIndex--;
        }

        document.querySelector(".typing").textContent = currentText;

        if (charIndex == text[index].length) {
            isDeleting = true;
            setTimeout(type, 1000);
            return;
        }

        if (charIndex == 0 && isDeleting) {
            isDeleting = false;
            index++;
            if (index == text.length) index = 0;
        }
    }
    setTimeout(type, isDeleting ? 50 : 100);
}

type();