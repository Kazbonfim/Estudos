const variavel = [`facebook`, `twitter`, `youtube`]
    variavel.forEach((variavel, index, array) => {
        console.log(variavel)
    })

let singular1 = [`banana`, `maçã`, 'laranja']
    singular1.forEach((singular, index, array) =>{
        console.log(singular1)       
    })

    /* Exemplo de ação 'onclick' em Inline HTML */
    /* Após pressionar o botão, ativamos a 'function' que busca por elementos dentro do HTML que contém a tag
    '<h2>' e cria um alerta dentro do console */
    function botao () {
        document.getElementsByTagName("<h2>"), console.log('Botão pressionado')
    };