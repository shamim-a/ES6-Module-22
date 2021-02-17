const age = [18, 15, 23, 26, 25];
const age2 = [14, 16, 19, 21, 22, 24];
const age3 = [10, 12, 13]
const allages = age.concat(age2).concat(age3);
const allages2 = [...age, ...age2, ...age3];
// console.log(allages2);
const business = 650;
const minister = 450;
const shochib = 250;
const tkpoysa = [650, 450, 250 ,700]
// const maximum = Math.max(business, minister, shochib);
const maximum = Math.max(...tkpoysa);
console.log(maximum);