# 0376RA4PR1

## Descripció
Aquest repositori es de la la pràctica **RA4PR1 - Primer repositori amb Git i GitHub**.  
I en aquesta pestanya es parla de la documentacio del meu codi, llistes, etc....
---

## Fitxers

- `index.html` estructura de la pàgina
- `style.css` estils
- `script.js` funcionalitat JavaScript
- `README.md` documentació del projecte

---

## Exercicis de DOM

1. Crear una pàgina HTML  
2. Afegir estils amb CSS  
3. Connectar JavaScript a la pàgina  
4. Manipular elements del DOM  
5. Afegir un esdeveniment a un botó  

---

## Explicació del script

El fitxer `script.js` s'encarrega de gestionar un esdeveniment sobre un botó.

Primer es comprova que el document estigui carregat:

`document.addEventListener("DOMContentLoaded", ...)`

Després es selecciona el botó:

`document.getElementById("boton-saludo")`

Finalment, s'afegeix un esdeveniment `click` que mostra un missatge:

`alert("Hola! El script funciona correctament")`

---

## Exemple de codi

```javascript
document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("boton-saludo");

    if (boton) {
        boton.addEventListener("click", () => {
            alert("Hola! El script funciona correctament");
        });
    }
});