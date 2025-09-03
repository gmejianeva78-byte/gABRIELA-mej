console.log("hola");

const titulo = document.getElementById("tituloPrincipal");
let estadoOriginal = true;

titulo.innerText = "Dos conejos con zanahoria"

titulo.addEventListener("click", () => {
    if(estadoOriginal === true) {
        titulo.innerText = "UNA SERPIENTE MUTANTE";
        titulo.style.color = "purple";
    }

else {
    titulo.innerText = "Dos conejos con zanahoria";
    titulo.style.color = "green";
}
estadoOriginal = !estadoOriginal;
});

