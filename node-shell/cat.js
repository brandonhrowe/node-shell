const fs = require("fs");

const readFile = (arg) => {
  fs.readFile(arg, "utf8", (err, data) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(data);
    }
    process.stdout.write("\nprompt > ");
  });
};

module.exports = readFile;
