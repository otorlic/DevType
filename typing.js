let index = 0;
let i = 0;

const code = [
    "for (int i = 0; i < 200; i++) {\n\tbuffer[i] = 0;\n}",
    "System.out.println(\"Hello, World!\");",
    "public void absorb(byte[] data, int len) {\n\tthis.absorb(data, 0, len);\n}",
    "if (percent >= 90) {\n\tSystem.out.println(\"You got an A!\");\n} else if (percent >= 80) {\n\tSystem.out.println(\"You got a B!\");\n} else if (percent >= 70) {\n\tSystem.out.println(\"You got a C!\");\n} else if (percent >= 60) {\n\tSystem.out.println(\"You got a D!\");\n} else {\n\tSystem.out.println(\"You got an F!\");\n}"
];

let chunk = code[index];
let currentChar = 0;
function codeChooser() {
    index = Math.floor(Math.random() * code.length);
    document.getElementById("codeChunk").innerHTML = "";
    chunk = code[index];
    currentChar = 0;
}



document.body.addEventListener("keypress", type);


function type() {
    
    let letter = chunk.charAt(currentChar);
    document.getElementById("codeChunk").innerHTML += letter;
    currentChar++;

}