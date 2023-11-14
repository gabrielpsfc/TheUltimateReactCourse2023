const returnN = (c, m, t) => {
  let n;
  n = (1 / t) * (m / c) ** (1 / (1 + t));
  return n;
};

console.log(returnN(130, 650, 0.7));

function calcularPrazoInvestimento(P, A, r) {
  if (P <= 0 || A <= 0 || r <= 0) {
    return "Valores inválidos. Certifique-se de que P, A e r sejam maiores que zero.";
  }

  let n = 0; // Prazo inicial

  while (P < A) {
    P = P * (1 + r); // Atualize o montante com base na taxa de juros
    n++; // Incremente o prazo
  }

  return n;
}

const P = 130;
const A = 650;
const r = 0.007; // 0.7% ao mês

const prazo = calcularPrazoInvestimento(P, A, r);
console.log("Prazo em meses:", prazo);

console.log((1.12 ** 2 * 100) / 111);
const invest = 3200 / (0.9 - 0.38);
console.log(invest);
