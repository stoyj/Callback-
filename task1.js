// Задача 1: Основен Callback

// Задача: Напиши функция processMessage, която приема съобщение и callback функция. Callback функцията трябва да бъде извикана след като съобщението бъде отпечатано.
function processMessage(message, callback) {
  console.log("Събщение:" + message);
  // callback();
}

function done() {
  console.log("Обработката е завършена!");
}

// Test
processMessage("Здравей, свят!"); // Съобщение: Здравей, свят! // Обработката е завършена!

// Задача 2: Callback с параметър

// Задача: Напиши функция calculate, която приема две числа и callback функция, която ще извърши математическа операция върху тях.

function calculate(a, b, callback) {
  return callback(a, b);
}

function add(x, y) {
  return x + y;
}

// Test
console.log(calculate(5, 3, add)); // Резултат 8
