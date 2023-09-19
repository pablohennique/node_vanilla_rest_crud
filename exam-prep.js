const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function reverseWords() {
  const N = parseInt(await getInput("Enter the number of lines: "));

  const reversedLines = [];
  for (let i = 0; i < N; i++) {
    const line = await getInput(`Enter line ${i + 1}: `);
    const reversedWords = line.split(" ").reverse().join(" ");
    reversedLines.push(reversedWords);
  }

  // Output the reversed lines
  console.log("Reversed lines:");
  for (const line of reversedLines) {
    console.log(line);
  }
}

function getInput(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, (input) => {
      resolve(input);
    });
  });
}

reverseWords().then(() => {
  rl.close();
});
