async function calcular(operation) {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const url = `http://127.0.0.1:8000/${operation}/?num1=${a}&num2=${b}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(await response.text());
        }
        const data = await response.json();
        document.getElementById("resultado").innerText = data.resultado;
    } catch (error) {
        document.getElementById("resultado").innerText = error.message;
    }
}

function limpiar() {
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("resultado").innerText = "0";
}