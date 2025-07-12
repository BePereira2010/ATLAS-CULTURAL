const facts = [
    "O Sudeste concentra cerca de 55% do PIB brasileiro.",
    "São Paulo é a cidade mais populosa do Hemisfério Sul.",
    "A bossa nova e o samba nasceram na região.",
    "O Rio de Janeiro foi capital do Brasil até 1960.",
    "O café foi responsável pelo crescimento das cidades do Sudeste no século XIX.",
    "A Serra do Espinhaço, em Minas Gerais, é Patrimônio Mundial da UNESCO.",
    "O Sudeste possui importantes centros culturais e museus reconhecidos internacionalmente.",
    "O Sudeste abriga o ponto mais alto do Brasil, o Pico da Neblina (2.994m), localizado no estado do Rio de Janeiro, na Serra do Imeri.",
    "O Rio Doce, que banha Minas Gerais e Espírito Santo, possui a maior bacia hidrográfica inteiramente dentro do Sudeste.",
    "O Vale do Ribeira, entre SP e PR, contém o maior contínuo de Mata Atlântica preservada do Brasil.",
    "O estado de São Paulo possui a maior população absoluta e a maior densidade demográfica entre os estados brasileiros.",
    "O Litoral Norte de São Paulo concentra a maior frota de barcos de mergulho recreativo do Brasil, devido à biodiversidade marinha.",
    "O Arquipélago de Trindade e Martim Vaz, pertencente ao Espírito Santo, é o ponto mais oriental do território brasileiro.",
    "Minas Gerais é o estado brasileiro com o maior número de municípios, ultrapassando 850.",
    "O Parque Estadual da Serra do Mar (SP) é o maior corredor ecológico contínuo de Mata Atlântica do país.",
    "O Parque Nacional do Caparaó (MG/ES) protege o terceiro pico mais alto do Brasil, o Pico da Bandeira (2.892m).",
    "O Muriqui-do-sul (Brachyteles arachnoides), o maior primata das Américas, é endêmico da Mata Atlântica do Sudeste e está criticamente ameaçado.",
    "A Ilha da Queimada Grande (SP), conhecida como Ilha das Cobras, é o único habitat natural da jararaca-ilhoa (Bothrops insularis), serpente endêmica e criticamente ameaçada.",
    "O 'Pão de Queijo' mineiro é considerado Patrimônio Cultural Imaterial de Minas Gerais.",
    "Congonhas (MG) abriga o Santuário do Bom Jesus de Matosinhos, com os célebres 12 Profetas esculpidos por Aleijadinho em pedra-sabão, Patrimônio Mundial da UNESCO.",
    "Tiradentes (MG) sedia um dos mais importantes festivais de cinema de curta-metragem da América Latina, o 'Festival de Cinema de Tiradentes'.",
    "O Vale do Paraíba (SP/RJ) foi o epicentro do ciclo do café no século XIX, deixando um legado de fazendas históricas e influência cultural.",
    " O Cristo Redentor, no Rio de Janeiro, eleito uma das 7 Maravilhas do Mundo Moderno, é o maior monumento em estilo Art Déco do mundo.",

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
