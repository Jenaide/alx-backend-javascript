process.stdout.write("Welcome to Holberton School, what is your name?\n");

process.stdin.on("readable", () => {
  const rl = process.stdin.read();

  if (rl) {
    process.stdout.write(`Your name is: ${rl}`);
  }
});

process.stdin.on("end", () => {
  process.stdout.write("This import software is now closing\n");
});
