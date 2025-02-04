
const code = [
    "for (int i = 0; i < 200; i++) {\n    buffer[i] = 0;\n}",
    "System.out.println(\"Hello, World!\");",
    "public void absorb(byte[] data, int len) {\n    this.absorb(data, 0, len);\n}"
];

function codeChooser() {
    const index = Math.floor(Math.random() * code.length);
    document.getElementById("codeChunk").innerHTML = code[index];

    //const chunk = document.getElementById("test");
    //chunk.innerHTML = '<h1 id="codeChunk">System.out.println("Hello, World!");</h1>';
}