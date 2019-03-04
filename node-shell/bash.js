process.stdout.write("prompt > ");

const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat")

process.stdin.on("data", data => {
  const cmd = data.toString().trim().split(" ")[0];
  const arg = data.toString().trim().split(" ")[1];
  if (cmd === "pwd") {
    pwd();
  } else if (cmd === "ls") {
    ls();
  } else if (cmd === "cat"){
    cat(arg);
  }
  else {
    process.stdout.write("You typed: " + cmd);
    process.stdout.write("\nprompt > ");
  }
});
