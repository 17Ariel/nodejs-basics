const os = require("os");
// console.log(os.userInfo());
// console.log(os.uptime());
// console.log(os.freemem());

console.log({
  name: os.type(),
  release: os.release(),
});
