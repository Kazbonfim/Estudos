// Função construtora ValidaCPF, recebe um CPF como argumento e define a propriedade 'cpfLimpo'.
function ValidaCPF(cpfEnviado) {
  // Cria a propriedade 'cpfLimpo' que retorna o CPF enviado sem caracteres não numéricos.
  Object.defineProperty(this, 'cpfLimpo', {
    // Define que a propriedade será exibida quando o objeto for iterado ou convertido em string.
    enumerable: true,
    // Define um getter que limpa o CPF removendo todos os caracteres que não são dígitos.
    get: function () {
      return cpfEnviado.replace(/\D+/g, ''); // Remove tudo que não for número.
    }
  });
}

// Método 'valida' adicionado ao protótipo do objeto ValidaCPF.
ValidaCPF.prototype.valida = function () {
  // Verifica se o CPF limpo existe. Se não existir, retorna falso.
  if (typeof this.cpfLimpo === 'undefined') return false;

  // Verifica se o CPF tem exatamente 11 dígitos. Se não, retorna falso.
  if (this.cpfLimpo.length !== 11) return false;

  // Verifica se o CPF é uma sequência de números repetidos (ex: 111.111.111-11). Se for, retorna falso.
  if (this.isSequencia()) return false;

  // Extrai os primeiros 9 dígitos do CPF, que serão usados para calcular os dois dígitos verificadores.
  const cpfParcial = this.cpfLimpo.slice(0, -2);

  // Calcula o primeiro dígito verificador.
  const digito1 = this.criaDigito(cpfParcial);

  // Calcula o segundo dígito verificador usando o primeiro dígito já calculado.
  const digito2 = this.criaDigito(cpfParcial + digito1);

  // Constrói o novo CPF (parcial + dígitos verificadores).
  const novoCpf = cpfParcial + digito1 + digito2;

  // Verifica se o novo CPF gerado é igual ao CPF limpo. Se for, o CPF é válido.
  return novoCpf === this.cpfLimpo;
};

// Método para criar os dígitos verificadores.
ValidaCPF.prototype.criaDigito = function (cpfParcial) {
  // Converte o CPF parcial em um array para facilitar a manipulação dos valores.
  const cpfArray = Array.from(cpfParcial);

  // Inicia o valor regressivo (que começa em 10 ou 11 dependendo do dígito sendo calculado).
  let regressivo = cpfArray.length + 1;

  // Calcula o total da multiplicação dos dígitos do CPF pelo número regressivo.
  const total = cpfArray.reduce((ac, val) => {
    ac += (regressivo * Number(val)); // Multiplica o valor do dígito pelo número regressivo.
    regressivo--; // Decrementa o valor regressivo.
    return ac; // Acumula o resultado.
  }, 0);

  // Calcula o dígito verificador a partir do total acumulado.
  const digito = 11 - (total % 11);

  // Se o dígito for maior que 9, retorna '0'. Caso contrário, retorna o próprio dígito.
  return digito > 9 ? '0' : String(digito);
};

// Verifica se o CPF é uma sequência de números repetidos (ex: 111.111.111-11).
ValidaCPF.prototype.isSequencia = function () {
  // Cria uma string com o primeiro dígito repetido várias vezes.
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);

  // Compara a sequência gerada com o CPF limpo. Se forem iguais, o CPF é inválido.
  return sequencia === this.cpfLimpo;
};

// Cria uma instância de ValidaCPF com o CPF fornecido.
const cpf = new ValidaCPF('070.987.720-03');

// Valida o CPF e exibe a mensagem apropriada no console.
if (cpf.valida()) {
  console.log('Cpf válido');
} else {
  console.log('Cpf inválido');
}
// End!
