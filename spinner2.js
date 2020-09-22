const sentence = "|  /  -  \\  |";
let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char + '\r');
  }, delay);
  delay += 200;
}