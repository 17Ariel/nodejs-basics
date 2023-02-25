const { readFileSync, writeFileSync, readFile, writeFile } = require("fs");

console.log(readFileSync("../txt/text.txt", "utf8"));
console.log(readFileSync("../txt/txt.txt", "utf8"));
console.log(writeFileSync("../txt/task.txt", "task 1, task 2", { flag: "a" }));

readFile("../txt/task.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});

writeFile("../txt/txt.txt", "cocomelon", (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});
