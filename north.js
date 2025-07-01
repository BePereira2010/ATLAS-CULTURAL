// Curiosidades para a Região Norte
const facts = [
    "A floresta Amazônica, presente na Região Norte, é a maior floresta tropical do mundo.",
    "O Festival de Parintins, no Amazonas, é um dos maiores festivais folclóricos do Brasil.",
    "O açaí, fruto típico da região, é considerado um superalimento mundialmente.",
    "Na Região Norte existem mais de 180 povos indígenas distintos.",
    "Manaus já foi conhecida como 'A Paris dos Trópicos' durante o ciclo da borracha.",
    "O rio Amazonas é o maior em volume de água do planeta.",
    "O estado do Pará é o maior produtor de cacau do Brasil.",
    "Grande parte da energia da região é gerada por usinas hidrelétricas, como a de Tucuruí.",
    "O Arquipélago de Mariuá (AM) no Rio Negro possui cerca de 1.400 ilhas.",
    "A árvore mais alta da Amazônia é a Dinizia excelsa (Angelim-vermelho) de 88m, descoberta em 2019 no Pará.",
    "Palmas (TO) tem IDH de 0.788 (2022), maior da região Norte.",
    "O Festival de Parintins (AM) atrai 100 mil pessoas anualmente, e é o maior festival folclórico do Brasil.",
    "A maior reserva de nióbio do mundo está localizada em São Gabriel da Cachoeira (AM).",
    "São Gabriel da Cachoeira (AM) tem 3 línguas co-oficiais indígenas além do português.",
    "A Ilha de Marajó (PA) tem 40 mil km².",
    "O Poraquê da Amazônia emite descargas de até 860 volts.",
    "A Bacia do Rio Negro tem mais de 1.000 espécies de peixes.",
    "A 'Borboleta Asa e Vidro', ou 'Borboleta Transparente' 'Greta oto' foi encontrada na Floresta Nacional do Tapajós (PA).",
    "Neonothopanus gardneri - endêmico do Pará e do Tocantins - é o maior cogumelo bioluminescente já descoberto.",
    "O Rio Negro e Rio Solimões fluem por 6 quilômetros sem se misturar, no encontro das águas.",
    "A gruta mais profunda do mundo é o Abismo Guy Collet (AM), com 671m, localizada no Amazonas, no município de Barcelos.",
    "A cidade de Belém, no Pará, é conhecida como a 'metrópole da Amazônia' e possui o maior mercado ao ar livre da América Latina, o Ver-o-Peso.",
    "O estado de Roraima abriga o Monte Roraima, um dos pontos mais altos do Brasil, com cerca de 2.875 metros de altitude, e que inspirou o romance 'O Mundo Perdido' de Arthur Conan Doyle.",
    "",
    "",
    "",
    "",
    "",
    "",



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