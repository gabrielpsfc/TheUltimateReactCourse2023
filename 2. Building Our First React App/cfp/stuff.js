let n = 120;
let r = 0.8 / 100;
let PV = 400000;

let P = (r * PV) / (1 - Math.pow(1 + r, -n));

console.log(Math.pow(1 + r, n));
console.log(Math.pow(1 + r, -n));
console.log(P);
console.log(Math.pow(1.14, 1 / 360) ** 185);
console.log(2000 / (1.012 / 1.005 - 1));
console.log(480000 / 240 + 480000 * 0.01);
