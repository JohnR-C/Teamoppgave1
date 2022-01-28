const imgContainer = document.getElementById('img-container');
const btnShow = document.getElementById('btnShow');
const btnReset = document.getElementById('btnReset');
const resultContainer = document.getElementById('result-container');
let valgteKomponenter = '';

function selectItems(clickedElement) {
  valgteKomponenter += clickedElement.innerHTML; 
}

function displayItems(){
  resultContainer.innerHTML += valgteKomponenter;
  valgteKomponenter = '';
}

function resetItems(){
  resultContainer.innerHTML = '';
} 