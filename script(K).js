
// Why on Earth is this bloody thing not saving itself/rendering appropriately?

// --- Slideshow for left side images ---
const slideshowImages = [
  "rios.jpeg",
  "rainforest.jpeg",
  "picodaneblina.jpeg",
  "Jalapao.jpeg",
  "OuroPretoMG.jpeg",
  "P.CavernasMG.jpeg",
  "P.TerraRonca.jpeg",
  "PortoSP.jpeg",
  "RJ.jpeg",
  "R.SãoFrancisco.jpeg",
  "praça do japão.jpeg",
  "PortoGalinhas.jpeg",
  "natal(gramado).jpeg",
  "lencóis.jpeg",
  "BonecosArgila.jpeg",
  "Carnaval.jpeg",
  "3poderes.jpeg",
  "foziguaçu.jpeg",
  // Add more image paths as needed
];

const slideshowLegends = [
  "Encontro dos Rios Solimões-Negro - Amazonas (AM).",
  "Interior da Floresta Amazônica - Amazonas (AM).",
  "Pico da Neblina visto de longe - Amazonas (AM).",
  "Formação Geológica no Parque Estadual do Jalapão - Tocantins (TO).",
  "Edifícios históricos vistos em Ouro Preto - Minas Gerais (MG).",
  "Formação Geológica no Parque Nacional das Cavernas do Peruaçu - Minas Gerais (MG).",
  "Caverna inundada no Parque Estadual da Terra Ronca - Goiás (GO).",
  "Vista aérea e noturna do Porto de Santos - São Paulo (SP).",
  "Vista aérea da cidade do Rio de Janeiro - Rio de Janeiro (RJ).",
  "Fluxo do Rio São Francisco - Pernambuco (PE).",
  "Vista diurna da Praça do Japão - Paraná (PR).",
  "Recife de corais em Porto de Galinhas visto de cima - Pernambuco (PE).",
  "Natal Luz em Gramado - Rio Grande do Sul (RS).",
  "Lençóis Maranhenses vistos de cima - Maranhão (MA).",
  "Bonecos de Argila em referência ao Sertanejo.",
  "Carnaval em Salvador - Bahia (BA).",
  "Congresso Nacional - Distrito Federal (DF).",
  "Cataratas do Iguaçu - Paraná (PR)."
];

let slideshowIndex = 0;
const slideshowImg = document.getElementById('slideshow-img');
const slideshowLegend = document.getElementById('slideshow-legend');

if (slideshowLegend) {
  slideshowLegend.textContent = slideshowLegends[0];
}

function showNextSlideshowImage() {
  slideshowIndex = (slideshowIndex + 1) % slideshowImages.length;
  slideshowImg.style.opacity = 0;
  if (slideshowLegend) slideshowLegend.style.opacity = 0;
  setTimeout(() => {
    slideshowImg.src = slideshowImages[slideshowIndex];
    if (slideshowLegend) {
      slideshowLegend.textContent = slideshowLegends[slideshowIndex];
      slideshowLegend.style.opacity = 1;
    }
    slideshowImg.style.opacity = 1;
  }, 400);
}

// Start the slideshow
setInterval(showNextSlideshowImage, 3000); // Change image every 3 seconds

const facts = [
    "A floresta Amazônica, presente na Região Norte, é a maior floresta tropical do mundo.",
    "O Festival de Parintins, no Amazonas, é um dos maiores festivais folclóricos do Brasil.",
    "O açaí, fruta típica da região, é considerado um superalimento no mundo todo.",
    "Na Região Norte existem mais de 180 povos indígenas distintos.",
    "Manaus já foi conhecida como 'A Paris dos Trópicos' durante o ciclo da borracha.",
    "O rio Amazonas é o maior em volume de água do planeta.",
    "O estado do Pará é o maior produtor de cacau do Brasil.",
    "Grande parte da energia da região é gerada por usinas hidrelétricas, como a de Tucuruí."
];

// Elementos
const factBtn = document.getElementById('fact-btn');
const factText = document.getElementById('fact-text');

let lastFactIndex = -1;

function showRandomFact() {
    let idx;
    do {
        idx = Math.floor(Math.random() * facts.length);
    } while (facts.length > 1 && idx === lastFactIndex);
    lastFactIndex = idx;
    factText.style.opacity = 0;
    setTimeout(() => {
        factText.textContent = facts[idx];
        factText.style.opacity = 1;
    }, 160);
}

if (factBtn) {
    factBtn.addEventListener('click', showRandomFact);
}

function typewriter(element, text, speed = 70) {
  let i = 0;
  element.textContent = "";
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}
window.addEventListener('DOMContentLoaded', () => {
  const intro = document.querySelector('#maintitle h1');
  if (intro) {
    typewriter(intro, intro.textContent.trim());
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const intro = document.querySelector('#maintitle p.subtitle');
  if (intro) {
    typewriter(intro, intro.textContent.trim());
  }
});

// Cookie Widget Logic
const cookieWidget = document.getElementById('cookie-widget');
const cookieArrow = document.getElementById('cookie-arrow');
const cookieYes = document.getElementById('cookie-yes');
const cookieNo = document.getElementById('cookie-no');

function closeCookieWidget() {
  cookieWidget.classList.add('cookie-collapsed');
}

cookieArrow.addEventListener('click', function() {
  if (cookieWidget.classList.contains('cookie-collapsed')) {
    cookieWidget.classList.remove('cookie-collapsed');
  } else {
    closeCookieWidget();
  }
});
cookieYes.addEventListener('click', closeCookieWidget);
cookieNo.addEventListener('click', closeCookieWidget);