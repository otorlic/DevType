const typingBox = document.getElementById("codeChunk");

let index = 0;

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
        typingBox.innerHTML += `<span>${chunk[i]}</span>`;
    }

    /* alternative found online */

    // code[index].split("").forEach(char => {
    //     let span = `<span>${char}</span>`
    //     typingBox.innerHTML += span;
    // });
    
}



document.body.addEventListener("keydown", type);

let currCharIndex = 0;
function type(event) {

    let letter = code[index].charAt(currCharIndex); // get the letter that should be typed
    let pressed = event.key; // get the letter that was typed
    
    // if the pressed letter is the same as the needed letter, print it
    if (pressed == letter) {
        typingBox.innerHTML += pressed;
        currCharIndex++; // increase index to next letter
    }
    

}

