const facts = [
    "O São João do Nordeste é uma das maiores festas populares do Brasil.",
    "O frevo, típico de Pernambuco, é considerado Patrimônio Imaterial da Humanidade.",
    "O litoral nordestino possui mais de 3.000 km de praias.",
    "A literatura de cordel tem origem e tradição forte na região.",
    "O acarajé baiano foi reconhecido como patrimônio cultural brasileiro.",
    "A cidade de Olinda (PE) é uma das mais antigas do Brasil e Patrimônio Mundial da UNESCO.",
    "O sertão nordestino é palco de mitos, lendas e de grande produção literária.",
    "O Nordeste responde por 89% da capacidade instalada do país em energie eólica.",
    "O gênero musical forró tem suas raízes mais consolidadas no agreste e sertão nordestinos, com Luiz Gonzaga como seu maior expoente.",
    "O Parque Nacional dos Lençóis Maranhenses (MA) possui o maior campo de dunas da América do Sul, intercalado por lagoas de água doce formadas pelas chuvas.",
    "Localizado em Pirangi do Norte (RN), o Cajueiro de Pirangi cobre uma área equivalente a 70 cajueiros comuns (Guinness World Records).",
    "Salvador (BA) foi a primeira capital do país, de 1549 a 1763.",
    "O Nordeste é responsável por mais de 95% da produção nacional de camarão marinho cultivado.",
    "O Parque Nacional Serra da Capivara (PI) possui uma das maiores concentrações de sítios arqueológicos com pinturas rupestres das Américas, datando de até 50.000 anos.",
    "O Delta do Parnaíba (entre PI e MA) é um dos únicos deltas em mar aberto no mundo e o maior das Américas.",
    "A poesia improvisada e cantada, conhecida como Repente ou Cantoria, é uma tradição oral forte especialmente em Pernambuco, Paraíba, Ceará e Rio Grande do Norte.",
    "O Nordeste (especialmente RN, CE e BA) possui jazidas significativas e é um grande exportador de Granito.",
    "A Lavagem do Bonfim, em Salvador (BA), é uma das maiores manifestações religiosas sincréticas do mundo, reunindo milhões de pessoas.",
    "O Rio Grande do Norte é o maior produtor de petróleo onshore do Brasil, com a Bacia de Potiguar abrigando a maior parte da produção.",
    "Fernando de Noronha (PE) e o Atol das Rocas (RN) formam o primeiro e único sítio do Hemisfério Sul inscrito na lista de Sítios do Patrimônio Mundial Natural da UNESCO devido à sua importância biológica marinha",
    "A Cachoeira da Fumaça (ou do Buracão), na Chapada Diamantina (BA), tem aproximadamente 380 metros de queda livre.",
    "O Nordeste (principalmente CE, PI e RN) produz mais de 95% da castanha de caju brasileira",
    "A Sinagoga Kahal Zur Israel, em Recife (PE), foi fundada em 1636, sendo a primeira das Américas.",
    "A praia de jericoacoara foi eleita uma das 10 praias mais bonitas do mundo pelo jornal The Washington Post.",
    "O Polo Gesseiro do Araripe (PE) é responsável por cerca de 95% da produção nacional de gesso.",
    "O Aeroporto Internacional do Recife/Guararapes - Gilberto Freyre (PE) - foi o primeiro aeroporto projetado como internacional no Brasil, inaugurado em 1958.",
    " Beach Park, em Aquiraz (CE), é frequentemente classificado como o maior parque aquático da América Latina em número de atrações.",


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