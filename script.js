// RA3Ex7 - Activitats ràpides DOM JS

// 1 - Selecció: Usa querySelector per canviar el color d'un <h1> quan la pàgina carregui.
let seleccio_color = document.querySelector("#titol-principal");
seleccio_color.style.color = "red";

// 2 - Contingut: Fes que un paràgraf <p> mostri "Hola Món" usant textContent.
let hola_mon = document.querySelector("#paragraf-hola");
hola_mon.textContent = "Hola Món";

// 3 - Atributs: Canvia la 'src' d'una imatge <img> usant setAttribute.
let canvia_src = document.querySelector("#imatge-canviant");
canvia_src.setAttribute("src", "https://i.imgflip.com/30b1gx.jpg");

// 4 - Estils: Canvia el color de fons (backgroundColor) d'un element en fer-li clic.
let canviar_fons = document.querySelector("#caixa-estil");
canviar_fons.addEventListener("click", function () {
  canviar_fons.style.backgroundColor = "#03c0ff";
});

// 5 - Classes: Crea un botó que afegeixi/tregui la classe 'actiu' amb classList.toggle.
let textclasse = document.querySelector("#text-classe");
let bototoggle = document.querySelector("#boto-toggle");

bototoggle.addEventListener("click", function () {
  textclasse.classList.toggle("actiu");
});

// 6 - Esdeveniments: Afegeix un addEventListener a un botó perquè tregui una alerta (alert).
let botoalerta = document.querySelector("#boto-alerta");
botoalerta.addEventListener("click", function () {
  alert("Hola! Has clicat el botó");
});

// 7 - Estructura: Crea un nou <li> amb createElement i afegeix-lo a una <ul> amb appendChild.
let llista = document.querySelector("#llista-compra");
let botoafegir = document.querySelector("#boto-afegir");

botoafegir.addEventListener("click", function () {
  let crearli = document.createElement("li");
  crearli.textContent = "Nou producte";
  llista.appendChild(crearli);
});

// 8 - Eliminació: Fes que un element desaparegui en fer-li clic usant el mètode remove().
let eliminar = document.querySelector("#element-eliminar");
eliminar.addEventListener("click", function () {
  eliminar.remove();
});