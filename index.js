const names = ["Guadalupe", "Ollie", "Aki"];
function writeCards() {
  let messages = [];
  for (let i = 0; i < names.length; i++) {
    messages[i] = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
  }
  return messages;
}
console.log(writeCards());

function countDown() {
  let number = 10;
  while (number >= 0) {
    console.log(number);
    number--;
  }
}
countDown();
