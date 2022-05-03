const jdenticon = require("jdenticon");
const fs = require("fs");

if (!fs.existsSync("public/icons")) {
  fs.mkdirSync("public/icons");
}

for(let i = 0; i < 100; i++) {
  const png = jdenticon.toPng(`user${i}`, 200);
  fs.writeFileSync(`public/icons/user${i}.png`, png);
}

console.log('successfully generated')
