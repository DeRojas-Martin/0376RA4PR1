document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("boton-saludo");

    if (boton) {
        boton.addEventListener("click", () => {
            alert("Hola, El script.js funciona");
        });
    }
});