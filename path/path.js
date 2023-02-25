const path = require("path");

console.log({
  sep: path.sep,
});

const filepath = path.join("/os", "os.js");
console.log(filepath);
console.log(path.basename(filepath));
console.log(path.resolve(__dirname, "/os", "os.js"));
console.log(path.resolve(__filename, "/os", "os.js"));
