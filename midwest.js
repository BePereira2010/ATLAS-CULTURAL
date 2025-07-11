const facts = [
    "O Pantanal é a maior planície alagável do planeta, cobre 62% do Mato Grosso do Sul e 35% do Mato Grosso.",
    "Brasília foi construída em apenas 41 meses.",
    "O Centro-Oeste concentra grande parte da produção de grãos do Brasil.",
    "O Cerrado é o segundo maior bioma brasileiro.",
    "A Festa do Divino é uma das principais manifestações culturais da região.",
    "A cidade de Goiás, localizada na unidade federativa de mesmo nome, foi Patrimônio Mundial da UNESCO em 2001.",
    "Brasília é a única cidade do século XX reconhecida como Patrimônio Mundial da UNESCO (1987).",
    "O Cerrado, bioma predominante na região, abriga 5% da biodiversidade mundial.",
    "O Parque Nacional da Chapada dos Veadeiros (GO) possui formações rochosas de mais de 1 bilhão de anos.",
    "Bonito (MS) lidera o ranking de destino turístico sustentável no Brasil desde 2013.",
    "O Distrito Federal tem o maior IDH (0,850) entre as regiões brasileiras.",
    "Mato Grosso é o maior produtor nacional de soja (26,9% da safra 2022/23).",
    "A Festa do Divino de Pirenópolis (GO) é a mais antiga do Centro-Oeste (1819).",
    "O Aquário do Pantanal (MS) é o maior aquário de água doce do mundo.",
    "A Chapada dos Guimarães (MT) é o ponto central geodésico da América do Sul.",
    "Goiás é o maior produtor de sorgo do Brasil (38% da produção nacional).",
    "A cidade de Goiás (GO) preserva 90% de seu casario colonial, sendo Patrimônio da Humanidade.",
    "O Pantanal abriga a maior concentração de onças-pintadas do mundo (cerca de 2.000).",
    "A Ponte JK (Brasília) ganhou o prêmio 'Ponte do Ano' em 2003 na Suíça.",
    "Corumbá (MS) é o município com maior extensão territorial do Brasil (65.000 km²).",
    "O Parque Nacional das Emas (GO/MS) é o único local do mundo com cupinzeiros bioluminescentes.",
    "A Estrada Parque Pantanal (MS) é uma das únicas rodovias tombadas como patrimônio ecológico.",
    "O Parque Nacional do Juruena (MT) protege nascentes do rio Teles Pires e Juruena.",
    "Mato Grosso do Sul concentra 86% da produção nacional de carvão vegetal de florestas plantadas.",
    "A Cavalhada de Pirenópolis (GO) recria torneios medievais desde 1826.",
    "O Pantanal é o lar de 263 espécies de peixes, incluindo o pintado e o dourado.",
    "A Ilha do Bananal (TO, divisa com GO) é a maior ilha fluvial do mundo.",
    "O artesanato Kadiwéu (MS) é Patrimônio Cultural do Brasil, com cerâmicas e pinturas corporais.",
    "Mato Grosso lidera a produção nacional de algodão (67% da safra 2022).",
    "Goiânia tem o maior índice de área verde por habitante do Centro-Oeste (94 m²/hab).",
    "O Projeto Arara Azul ajudou a salvar a espécie da extinção no Pantanal.",
    "O Parque Estadual Terra Ronca (GO) abriga 200 cavernas, incluindo a terceira maior do Brasil em extensão.",

];
const factBtn = document.getElementById('fact-btn');
const factText = document.getElementById('fact-text');
let lastFactIndex = -1;
function showRandomFact() {
    let idx;
    do { idx = Math.floor(Math.random() * facts.length); }
    while (facts.length > 1 && idx === lastFactIndex);
    lastFactIndex = idx;
    factText.style.opacity = 0;
    setTimeout(() => {
        factText.textContent = facts[idx];
        factText.style.opacity = 1;
    }, 160);
}
if (factBtn) { factBtn.addEventListener('click', showRandomFact); }
