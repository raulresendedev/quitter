

function ani() {
  seta = document.getElementById('seta')
  element = document.getElementById('extrato')
  estado = element.className
  
  if (element.classList.contains('on')){
    element.classList.replace('on', 'off')
    seta.style.transform = "rotate(0deg)"
    deleteDiv();
  }else if (element.classList.contains('off')){
    element.classList.replace('off', 'on')
    seta.style.transform = "rotate(180deg)"
    for(var a = 0; a < 5; a++){
      createDiv();
    }
  }else if(element.classList.contains('inicial')){
    element.classList.replace('inicial', 'on')
    seta.style.transform = "rotate(180deg)"
    for(var a = 0; a < 5; a++){
      createDiv();
    }
  }
}

let novaDiv;
let novaImg;
let novaValor;
let novaObs;
let novaData;

function createDiv(){

  exItem = document.getElementById('extrato')

  novaDiv = document.createElement('div')
  novaImg = document.createElement('img')
  novaValor = document.createElement('p')
  novaObs = document.createElement('p')
  novaData = document.createElement('p')

  novaDiv.className = "teste"
  novaImg.src = "./css/assets/wallet.png"
  novaValor.innerHTML = 'R$ 30,00'
  novaObs.innerHTML = 'Venda de Camiseta'
  novaData.innerHTML = '12/02/2022'

  novaDiv.appendChild(novaImg)
  novaDiv.appendChild(novaValor)
  novaDiv.appendChild(novaObs)
  novaDiv.appendChild(novaData)
  exItem.appendChild(novaDiv)
  
}

function deleteDiv(){
  del = Array.from(document.getElementsByClassName('teste'))
  
  for (var i = (del.length - 1) ; i >= 0; i--){
    del[i].parentNode.removeChild(del[i])
  }
}