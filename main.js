// -----------NAVIGATION TEMPLATE---------------
class MyTemplate extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `<div class="nav">
        <button onclick="portugal()" title="
        Portugal">Home</button>
        <button onclick="lisboa()" title="Lisboa">Lisboa</button>
        <button onclick="portu()" title="Portu">Portu</button>
        <button onclick="coimbra()" title="Coimbra">Coimbra</button>
        <button onclick="sintra()" title="Sintra">Sintra</button>
        <button onclick="douro()" title="Douro">Douro River Valley</button>
        <button onclick="alegrete()" title="Alegrete">Alegrete</button>
      </div>`;
  }
}

customElements.define('nav-template', MyTemplate);

// -----------SLIDESHOW LISBOA PAGE---------------

var slideIndex = [1, 1];
var slideId = ["slides1", "slides2"]
showSlides(1, 0);
showSlides(1, 1);

function slides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var show = document.getElementsByClassName(slideId[no]);
  if (n > show.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = show.length}
  for (i = 0; i < show.length; i++) {
    show[i].style.display = "none";
  }
  show[slideIndex[no] - 1].style.display = "block";
}
// -----------NAVIGATION BUTTONS---------------

function portugal() {
  window.location.href = "Portugal.html"
}

function lisboa() {
  window.location.href = "Lisboa.html"
}

function portu() {
  window.location.href = "Portu.html"
}

function coimbra() {
  window.location.href = "Coimbra.html"
}

function sintra() {
  window.location.href = "Sintra.html"
}

function douro() {
  window.location.href = "Douro.html"
}

function alegrete() {
  window.location.href = "Alegrete.html"
}
