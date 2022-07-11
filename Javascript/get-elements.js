
console.log (
    document.getElementById("header")
); /* dessa forma, coletamos um 'documento' dentro do HTML via JS para exibir via console.log. */

console.log(
    document.getElementById("header").innerHTML
);

console.log(
    document.getElementsByClassName("#classname").innerHTML, console.log("Classe OK!")
);

/* Nos 2 exemplos acima, buscamos por dados internos, dentro do documento HTML, buscando sempre
seus identificadores, sejam classes, tags, ou Ids. Lembrando de usar sempre o comando .innerHTML para especificar 
onde o script deve procurar por tais elementos. */

console.log(
    document.getElementsByTagName("div" )
); /* Dessa forma, o console vai retornar os elementos 'div' de forma indexada. Neste caso, podemos usar o
comando de selecionar um dos indexes (ex: [0], [1], [2])..., como no exemplo logo a baixo */

/* Neste caso, todos os elementos 'div' contido dentro de uma própria 'div' serão indexados, e mostrados em
formato de array */

console.log(
    document.getElementsByTagName("div")[0].innerHTML, console.log("Último elemento coletado!")
);

/* console.log(
    document.getElementsByClassName("header3").innerHTML
); */

console.log(
    document.querySelector(".classname"), console.log('Classe coletada!'), document.querySelector(".classname").innerHTML
);

/* Pegar pela classe '.classe', pegar pelo ID '#suaId' */

