const facts = [
    "O Sul possui as temperaturas mais baixas do Brasil.",
    "As Cataratas do Iguaçu são uma das maiores quedas d'água do mundo.",
    "A Oktoberfest de Blumenau é a segunda maior festa da cerveja do mundo.",
    "A região recebeu grande número de imigrantes europeus no século XIX.",
    "O chimarrão é uma tradição gaúcha e símbolo da região.",
    "O Parque Nacional de Aparados da Serra abriga os famosos cânions do Sul.",
    "Os Arenitos de Vila Velha (PR) são formações rochosas esculpidas há mais de 300 milhões de anos, criando paisagens surrealistas.",
    "A região central do Paraná está sobre o maior derrame de basalto do planeta, resultante de intenso vulcanismo no Período Cretáceo.",
    "O Porto de Paranaguá (PR) possui um canal natural com mais de 15m de profundidade, facilitando o acesso de grandes navios.",
    "O Paraná já teve cerca de 40% de seu território coberto por Floresta de Araucárias, hoje drasticamente reduzida.",
    "O litoral sul de Santa Catarina (especialmente Garopaba e Imbituba) é área de reprodução da Baleia Franca Austral entre julho e novembro.",
    "O Parque Nacional das Araucárias (SC) é um dos principais refúgios do Papagaio-de-peito-roxo, espécie ameaçada, que depende da araucária para sobreviver.",
    "A tradição do chimarrão foi herdada dos povos indígenas Guarani, que chamavam a infusão de 'caá-i'",
    "Realizada em Caxias do Sul (RS), a Festa da Uva acontece a cada dois anos e celebra a imigração italiana e a vitivinicultura.",
    "Blumenau (SC) sedia anualmente a maior festa alemã do mundo fora da Alemanha.",
    "São Miguel das Missões (RS) é o sítio arqueológico mais importante das Missões Jesuíticas no Brasil, Patrimônio Mundial da UNESCO.",
    "Itaipu Binacional (PR), na fronteira com o Paraguai, foi a maior geradora de energia do planeta por duas décadas e ainda é a segunda maior em operação.",
    "Cartão-postal de Florianópolis (SC), inaugurada em 1926, foi a primeira ligação da ilha ao continente e é um marco da engenharia brasileira.",
    "A Estrada de Ferro Curitiba-Paranaguá (PR), inaugurada em 1885, é uma obra-prima da engenharia com pontes, túneis e paisagens deslumbrantes.",
    "Nova Veneza (SC) é considerada o marco inicial da imigração italiana organizada para o estado de Santa Catarina.",
    "O Beto Carrero World, Localizado em Penha (SC), é o maior parque temático da América Latina.",

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