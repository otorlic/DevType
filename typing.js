const typingBox = document.getElementById("codeChunk");

let index, currCharIndex = 0;

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

    currCharIndex = 0;
    
}


document.body.addEventListener("keydown", function(e) {

    let charSpans = typingBox.querySelectorAll("span");

    let chars = code[index];

    charSpans[currCharIndex].classList.add("active");
    if (currCharIndex > 0) {
        charSpans[currCharIndex - 1].classList.add("inactive");
    }
    
    if (e.shiftKey) { // For uppercase characters
        
        if (e.key === 'Shift') { // incredibly sloppy way to make the shift key not be counted as character
            // this is bad, find another way
        } else if (e.key === chars.charAt(currCharIndex)) {
            charSpans[currCharIndex].style.backgroundColor = "green";
            currCharIndex++;
        } else {
            charSpans[currCharIndex].style.backgroundColor = "red";
            currCharIndex++;
        }
        
        
    } else if (e.key === 'Backspace') {
        if (currCharIndex > 0) { // dec index unless we are at the start of the code chunk
            currCharIndex--;
        }
        charSpans[currCharIndex].style.backgroundColor = "#626262"; //remove any color around the character
        
    } else if (e.key === 'Enter') {
        if (chars.charAt(currCharIndex) === '\n') {
            charSpans[currCharIndex].style.backgroundColor = "green";
        } else {
            charSpans[currCharIndex].style.backgroundColor = "red";
        }
        currCharIndex++;

    } else if (e.key === 'Tab') {
        if (chars.charAt(currCharIndex) === '\t') {
            charSpans[currCharIndex].style.backgroundColor = "green";
        } else {
            charSpans[currCharIndex].style.backgroundColor = "red";
        }
        currCharIndex++;
    
    } else { // Normal case, just typing character

        if (e.key === chars.charAt(currCharIndex)) {
            charSpans[currCharIndex].style.backgroundColor = "green";
        } else {
            charSpans[currCharIndex].style.backgroundColor = "red";
        }
        currCharIndex++;
    }

    

});


codeChooser();