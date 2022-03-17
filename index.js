let greeting = "Привет! Как тебя зовут?";
let name = prompt(greeting);

while (name == "" || name == null) {
  name = prompt(greeting);
}

alert(
  name +
    ', я загадал число от 1 до 100. Попробуй отгадать его за наименьшее колличество попыток. После каждой попытки я скажу "мало", "много" или "угадал".'
);

let number = random(100);
let guess = prompt("Какое число я загадал?");
let numberofguesses = 0;

while (guess != 42) {
  numberofguesses = numberofguesses + 1;
  if (guess > number) {
    guess = prompt("Много. Попробуй еще раз.");
  } else if (guess < number) {
    guess = prompt("Мало. Попробуй еще раз.");
  }
}
alert(
  "Да, ты угадал! Это число " +
    number +
    ". Ты использовал " +
    numberofguesses +
    " попыток."
);
