const typingBox = document.getElementById("codeChunk");

let index, currCharIndex, total, correct = 0;
let charSpans, chars;


const code = [
    "for (int i = 0; i < 200; i++) {\n\tbuffer[i] = 0;\n}",
    "System.out.println(\"Hello, World!\");",
    "public void absorb(byte[] data, int len) {\n\tthis.absorb(data, 0, len);\n}",
    "if (percent >= 90) {\n\tSystem.out.println(\"You got an A!\");\n} else if (percent >= 80) {\n\tSystem.out.println(\"You got a B!\");\n} else if (percent >= 70) {\n\tSystem.out.println(\"You got a C!\");\n} else if (percent >= 60) {\n\tSystem.out.println(\"You got a D!\");\n} else {\n\tSystem.out.println(\"You got an F!\");\n}"
];

let chunk = code[index];

function codeChooser() {

    //start by clearing out the old code chunk
    typingBox.innerHTML = "";

    //randomly select a code chunk
    index = Math.floor(Math.random() * code.length);
    chunk = code[index].split(""); //then split it so each character is its own index

    //take each character of the code chunk and place it in a span and add it to the typing box
    for (let i = 0; i < chunk.length; i++) {
        if (chunk[i] === '\n') { // if the span contains the new line character,
            typingBox.innerHTML += `<span>${"    " + chunk[i]}</span>`; // then add spaces to make it appear longer
        } else if (chunk[i] === '\t') {
            typingBox.innerHTML += `<span>${"    "}</span>`; // then add spaces to make it appear longer
        } else {
            typingBox.innerHTML += `<span>${chunk[i]}</span>`; // if not, just wrap it in a span normally
        }
    }
    typingBox.querySelectorAll("span")[0].classList.add("active");
    currCharIndex = 0;
    
}


document.body.addEventListener("keydown", function(e) {

    charSpans = typingBox.querySelectorAll("span"); // list of all the spans that make up the code chunk
    chars = code[index]; // the long string of the code chunk

    
    
    if (e.shiftKey) { // For uppercase characters
        
        if (e.key === 'Shift') { // incredibly sloppy way to make the shift key not be counted as character
            // this is bad, find another way
        } else if (e.key === chars.charAt(currCharIndex)) {
            makeCorrect(charSpans[currCharIndex]);
            //currCharIndex++; // can't do this outside of if's or else just pressing shift will inc index
            incIndex();
        } else {
            makeIncorrect(charSpans[currCharIndex]);
            //currCharIndex++;
            incIndex();
        }
        
        
    } else if (e.key === 'Backspace') {
        charSpans[currCharIndex].classList.remove("active");

        if (currCharIndex > 0) { // dec index unless we are at the start of the code chunk
            currCharIndex--;
        }
        if (charSpans[currCharIndex].classList.contains("correct")) {
            charSpans[currCharIndex].classList.remove("correct");
        } else if (charSpans[currCharIndex].classList.contains("incorrect")) {
            charSpans[currCharIndex].classList.remove("incorrect");
        }
        
    } else if (e.key === 'Enter') {
        if (chars.charAt(currCharIndex) === '\n') {
            makeCorrect(charSpans[currCharIndex]);
        } else {
            makeIncorrect(charSpans[currCharIndex]);
        }
        //currCharIndex++;
        incIndex();

    } else if (e.key === 'Tab') {
        e.preventDefault(); // to stop going into search bar
        if (chars.charAt(currCharIndex) === '\t') {
            makeCorrect(charSpans[currCharIndex]);
        } else {
            makeIncorrect(charSpans[currCharIndex]);
        }
        //currCharIndex++;
        incIndex();
    
    } else { // Normal case, just typing character

        if (e.key === " ") {
            e.preventDefault(); // to stop opening language selector
        }
        if (e.key === chars.charAt(currCharIndex)) {
            makeCorrect(charSpans[currCharIndex]);
        } else {
            makeIncorrect(charSpans[currCharIndex]);
        }
        //currCharIndex++;
        incIndex();
    }

    // make the next span active
    charSpans[currCharIndex].classList.add("active");

    // make the previously typed span not active
    if (currCharIndex > 0) {
        charSpans[currCharIndex - 1].classList.remove("active");
    }

    

});

function makeCorrect(charSpan) {
    charSpan.classList.add("correct");
    correct++;
    total++;
}

function makeIncorrect(charSpan) {
    charSpan.classList.add("incorrect");
    total++;
}

function incIndex() {
    if (currCharIndex === charSpans.length - 1) { // if the last character was just typed
        charSpans[currCharIndex].classList.remove("active");
    } else {
        currCharIndex++; // inc to the next span
        // charSpans[currCharIndex].classList.add("active"); //and make it active

        // // make the previously typed span not active
        // if (currCharIndex > 0) {
        //     charSpans[currCharIndex - 1].classList.remove("active");
        // }
        
    }
}


codeChooser();