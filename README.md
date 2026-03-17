# 0376RA4PR1

## Descripció
Aquest repositori es de la pràctica **RA4PR1 - Primer repositori amb Git i GitHub**.  

## Fitxers
- `index.html`: estructura de la pàgina web
- `style.css`: estils
- `script.js`: exercicis del DOM
- `README.md`: documentació del projecte en format Markdown

## Exercicis de DOM
1. Seleccionar un element amb `querySelector`
2. Modificar el text d’un paràgraf amb `textContent`
3. Canviar l’atribut `src` d’una imatge amb `setAttribute`
4. Modificar l’estil d’un element amb `backgroundColor`
5. Afegir o treure una classe amb `classList.toggle`
6. Mostrar una alerta amb `addEventListener`
7. Crear un nou element amb `createElement` i `appendChild`
8. Eliminar un element amb `remove()`

## Explicació del codi del script
- El fitxer `script.js` conté els exercicis de DOM.
- Per exemple, per seleccionar el títol principal s’utilitza `document.querySelector("#titol-principal")`.
- Per canviar el text d’un paràgraf s’utilitza `textContent`.
- Per afegir un esdeveniment a un botó s’utilitza `addEventListener("click", ...)`.
- Per crear nous elements a la llista s’utilitza `document.createElement("li")` i `appendChild()`.

## Fragment de codi
```javascript
let hola_mon = document.querySelector("#paragraf-hola");
hola_mon.textContent = "Hola Món";

let botoalerta = document.querySelector("#boto-alerta");
botoalerta.addEventListener("click", function () {
  alert("Hola! Has clicat el botó");
});
