// Paradigma de Orientação a Objetos
// Processo de Abstração de Entidade (pré-objeto)
// Exemplo de serviços bancários.

class contaBancaria {
    // agencia
    // numeroConta
    // saldo 
    // limite
        constructor() {
            this.agencia = 1122
            this.numeroConta = 320791
            this.saldo = 50
            this.limite = 450
        } 

    // Essas funções são chamadas de MÉTODOS.
    // Não é necessário atributir 'function' aos métodos nesse contexto.
        depositar(valorDeposito) {
            this.saldo += valorDeposito
        }

        sacar(valorSaque) {
            this.saldo -= valorSaque
        }

        consultarSaldo() {
            return this.saldo
        }

        verDados() {
            return `Agência: ${this.agencia} | Conta: ${this.numeroConta}`
        }
}

let bancoLucas = new contaBancaria()

    console.log(bancoLucas.consultarSaldo())
    bancoLucas.depositar(500)
    console.log(`Saldo depositado com sucesso! Novo saldo de: R$${bancoLucas.consultarSaldo()}`)
    bancoLucas.sacar(250)
    console.log(`Saldo depositado com sucesso! Novo saldo de: R$${bancoLucas.consultarSaldo()}`)
    console.log(`${bancoLucas.verDados()}`)

    
    

    