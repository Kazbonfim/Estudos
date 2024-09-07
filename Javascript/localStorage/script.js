// Coloque os scripts aqui, e valide se estão linkados ao HTML.
console.log('Hello, friend.')

const frm = document.getElementById('frm');
const divCor = document.getElementsByClassName('cor');

console.log(frm);
console.log(divCor);

const selecionarCor = () => {

    let cor

    if(frm.vermelho.checked){
        cor = 'vermelho'
    } else if (frm.verde.checked){
        cor = 'verde'
    } else {
        cor = 'azul'
    }


}