import {
    filtroGenero,filtroStatus,filtroSpecies,filtroName,filtroOrder,calculoPorcentagem
} from "./data.js";
import data from "./data/rickandmorty/rickandmorty.js";


function imprimirCardsTela(data) {
document.getElementById("infoCards").innerHTML = data.map(
(item) => `  
    <div class = "cards">
        <div class="frenteCards">
            <img class="cardImg" src="${item.image}" loading="lazy" ></img>
        </div>
        
        <div class = "telaText">
            <ul class = "telaTextCard">
                <li class="nome_personagem"><strong> </strong>${item.name}</li>
                <li class="li_categorias"><strong class="categoria_filtro">Espécie: </strong>${item.species}</li>
                <li class="li_categorias"><strong class="categoria_filtro">Status: </strong>${item.status}</li>
                <li class="li_categorias"><strong class="categoria_filtro">Gênero: </strong>${item.gender}</li>
                <li class="li_categorias"><strong class="categoria_filtro">Local de Origem: </strong>${item.origin.name}</li>
            </ul>
        </div>
    </div>
    `
    )
    .join(" ");
}
imprimirCardsTela(data.results);

const selecaoGenero = document.querySelector("#gender-filter");
const selecaoStatus = document.querySelector("#status-filter");
const selecaoSpecies = document.querySelector("#species-filter");
const alphaOrder = document.querySelector("#order-filter");

const porcentagem = document.getElementById("porcentagemFiltro");
const searchName = document.getElementById("text-search");
const btnLimpar = document.getElementById("btn_reset");

function imprimirPorcentagem(data) {
porcentagem.innerHTML = `Aqui possui ${data}`
porcentagem.style.display = 'inline-block'
}

function imprimirFiltroGenero(e) {
const resultadoGenero = filtroGenero(data.results, e.target.value)
const porcentagemGenero = `${calculoPorcentagem(data.results.length, resultadoGenero.length)}% dos personagens`
imprimirPorcentagem(porcentagemGenero);
selecaoSpecies.selectedIndex=0;
selecaoStatus.selectedIndex=0;
return imprimirCardsTela(resultadoGenero);
}

function imprimirFiltroSpecies(e) {
const resultadoSpecies = filtroSpecies(data.results, e.target.value);
const porcentagemEspecie = `${calculoPorcentagem(data.results.length, resultadoSpecies.length)}% dos personagens`
imprimirPorcentagem(porcentagemEspecie);
selecaoStatus.selectedIndex=0;
selecaoGenero.selectedIndex=0;
return imprimirCardsTela(resultadoSpecies);
}

function imprimirFiltroStatus(e) {
const resultadoStatus = filtroStatus(data.results, e.target.value);
const porcentagemStatus = `${calculoPorcentagem(data.results.length, resultadoStatus.length)}% dos personagens`
imprimirPorcentagem(porcentagemStatus);
selecaoGenero.selectedIndex=0;
selecaoSpecies.selectedIndex=0;
return imprimirCardsTela(resultadoStatus);
}

function imprimirFiltroName(e) {
const resultadoName = filtroName(data.results, e.target.value);
const porcentagemName = `${calculoPorcentagem(data.results.length, resultadoName.length)}% dos personagens`
imprimirPorcentagem(porcentagemName)
return imprimirCardsTela(resultadoName);
}

function  imprimirAlphaOrder(e) {
const resultadoOrder = filtroOrder(data.results, e.target.value);
return imprimirCardsTela(resultadoOrder);
}

function limparFiltros(){
window.location.reload();
}

selecaoGenero.addEventListener("change", imprimirFiltroGenero);
selecaoStatus.addEventListener("change", imprimirFiltroStatus);
selecaoSpecies.addEventListener("change", imprimirFiltroSpecies);
alphaOrder.addEventListener("change", imprimirAlphaOrder);
searchName.addEventListener("keyup", imprimirFiltroName);
btnLimpar.addEventListener("click", limparFiltros);