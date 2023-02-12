const data = require("./data.json");

const newAge = data.filter((d) => d.age > 40);
const getAll = data.map((m) => m.address);
console.table(newAge);
console.log(getAll);
