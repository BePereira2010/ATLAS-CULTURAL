
// --- Slideshow for left side images ---
const slideshowImages = [
  "rios.jpeg",
  "rainforest.jpeg",
  "picodaneblina.jpeg",
  "indigenas.jpeg",
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

let slideshowIndex = 0;
const slideshowImg = document.getElementById('slideshow-img');

function showNextSlideshowImage() {
  slideshowIndex = (slideshowIndex + 1) % slideshowImages.length;
  slideshowImg.style.opacity = 0;
  setTimeout(() => {
    slideshowImg.src = slideshowImages[slideshowIndex];
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