let Objeto = {
    nome: 'Lucas', sobrenome: 'Bonfim', idade: 24 + ' Anos',

    /* Exemplo de função inserida dentro do Objeto */
    tell(){
        console.log(`Tudo bem? Me chamo ${this.nome} ${this.sobrenome}`)
    }

};

/* console.log(Objeto.nome, Objeto.sobrenome, Objeto.idade) */
/* Vamos chamar a função contida dentro do objeto que criamos agora */
Objeto.tell();