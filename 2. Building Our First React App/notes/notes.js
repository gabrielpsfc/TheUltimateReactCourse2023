function rent(mont, end, tax, n) {
  const liq = end * (1 - tax);

  const r = (liq / mont) ** (1 / n) - 1;

  return r;
}

function valorPresente(parc, r, n) {
  const pv = parc / (1 + r) ** n;

  return pv;
}

function valorPresenteSequenciaMonetaria(parcela, tx, n) {
  const a = ((1 + tx) ** n - 1) / ((1 + tx) ** n * tx);
  const pv = parcela * a;
  const obj = { a, pv };
  return obj;
}

console.log(
  rent(850000, 3813128, 0.15, 221),
  valorPresente(150000, 0.03, 10),
  valorPresenteSequenciaMonetaria(550, 0.05, 4),
  550 * 3.545951
);
