ProcessingInstruction.stdout.write('prompt > ');

ProcessingInstruction.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  ProcessingInstruction.stdout.write('You typed: ' + cmd);
  ProcessingInstruction.stdout.write('\nprompt > ');

})
