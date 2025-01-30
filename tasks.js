// Задача 1: Основен Callback

// Задача: Напиши функция processMessage, която приема съобщение и callback функция. Callback функцията трябва да бъде извикана след като съобщението бъде отпечатано.

/*
function processMessage(message, callback) {
    console.log("Съобщение: " + message);
    callback();
}

function done() {
    console.log("Обработката е завършена!");
}

// Тест
processMessage("Здравей, свят!", done);

Очакван изход:
Съобщение: Здравей, свят!  
Обработката е завършена!  

*/

/*
Задача 2: Callback с параметър

Задача: Напиши функция calculate, която приема две числа и callback функция, която ще извърши математическа операция върху тях.

function calculate(a, b, callback) {
    return callback(a, b);
}

function add(x, y) {
    return x + y;
}

// Тест
console.log(calculate(5, 3, add)); // Очакван резултат: 8
*/

/*
Задача 3: Callback с setTimeout

Задача: Симулирай забавяне на операция с setTimeout. След 2 секунди трябва да се извика callback функция.

function delayedMessage(callback) {
    setTimeout(() => {
        console.log("Съобщението е изпратено!");
        callback();
    }, 2000);
}

function done() {
    console.log("Операцията е завършена!");
}

// Тест
delayedMessage(done);

*/

/*
Задача 4: Работа с масив

Задача: Напиши функция filterNumbers, която приема масив от числа и callback, който решава кои числа да останат.

function filterNumbers(numbers, callback) {
    return numbers.filter(callback);
}

function isEven(num) {
    return num % 2 === 0;
}

// Тест
console.log(filterNumbers([1, 2, 3, 4, 5, 6], isEven)); // Очакван резултат: [2, 4, 6]
*/

/*
Задача 5: Callback с потребителска информация

Задача: Направи функция getUserData, която получава име и callback, който обработва информацията.

function getUserData(name, callback) {
    let user = { name: name, age: 25 };
    callback(user);
}

function displayUser(user) {
    console.log(`Име: ${user.name}, Възраст: ${user.age}`);
}

// Тест
getUserData("Иван", displayUser);
*/

/*
Задача 6: Прости изчисления с различни операции

Задача: Промени calculate(), така че да приема различни математически операции.

function calculate(a, b, callback) {
    return callback(a, b);
}

console.log(calculate(10, 5, (x, y) => x - y)); // Очакван резултат: 5
console.log(calculate(10, 5, (x, y) => x * y)); // Очакван резултат: 50
*/

/*
Задача 7: Обработка на списък от имена

Задача: Напиши processNames(), която обработва списък с имена чрез callback.

function processNames(names, callback) {
    return names.map(callback);
}

function toUpperCase(name) {
    return name.toUpperCase();
}

// Тест
console.log(processNames(["Иван", "Мария", "Петър"], toUpperCase)); // ["ИВАН", "МАРИЯ", "ПЕТЪР"]
*/

/*
Задача 8: Асинхронно зареждане на данни

Задача: Имитация на зареждане на данни с setTimeout.

function fetchData(callback) {
    setTimeout(() => {
        callback({ id: 1, name: "Продукт", price: 100 });
    }, 3000);
}

function displayProduct(product) {
    console.log(`Продукт: ${product.name}, Цена: ${product.price} лв.`);
}

// Тест
fetchData(displayProduct);

*/

/*
Задача 9: Сортиране на числа

Задача: Напиши sortNumbers(), която приема числа и callback за сравнение.

function sortNumbers(numbers, callback) {
    return numbers.sort(callback);
}

console.log(sortNumbers([5, 3, 8, 1], (a, b) => a - b)); // Очакван резултат: [1, 3, 5, 8]
*/

/*
Задача 10: Работа с DOM и събития

Задача: Добави бутон в HTML, който изпълнява callback функция при натискане.

<button id="myButton">Натисни ме</button> index.htmil

document.getElementById("myButton").addEventListener("click", function() {
    console.log("Бутонът беше натиснат!");
});
*/

/*
Задача 11: Проверка на числа
Задача: Напиши функция checkNumber(), която приема число и callback функция, която проверява дали числото е положително или отрицателно.

function checkNumber(num, callback) {
    callback(num);
}

function isPositive(n) {
    if (n >= 0) {
        console.log(`${n} е положително число`);
    } else {
        console.log(`${n} е отрицателно число`);
    }
}

// Тест
checkNumber(10, isPositive);
checkNumber(-5, isPositive);

✅ Разбери го: checkNumber() извиква callback-а isPositive(), който проверява числото.
*/

/*
Задача 12: Изпълнение на няколко callback функции
Задача: Напиши runCallbacks(), която изпълнява няколко callback функции върху дадено число.

function runCallbacks(num, callback1, callback2) {
    callback1(num);
    callback2(num);
}

function double(n) {
    console.log(`Удвоено: ${n * 2}`);
}

function square(n) {
    console.log(`Квадрат: ${n * n}`);
}

// Тест
runCallbacks(4, double, square);

Изпълняваме две различни функции върху едно число.
*/

/*
Задача 13: Callback при успешно изпълнение

Задача: Напиши executeTask(), която приема callback за успех и грешка.

function executeTask(successCallback, errorCallback) {
    let success = Math.random() > 0.5; // 50% шанс за успех

    if (success) {
        successCallback("Задачата беше успешна!");
    } else {
        errorCallback("Възникна грешка!");
    }
}

// Тест
executeTask(
    (message) => console.log("✅ " + message),
    (error) => console.log("❌ " + error)
);

Симулираме случайно дали задачата ще е успешна или не.
*/

/*
Задача 14: Търсене на дума в масив

Задача: Направи функция findWord(), която намира дума в масив и извиква callback.

function findWord(words, target, callback) {
    let found = words.includes(target);
    callback(found);
}

function showResult(isFound) {
    console.log(isFound ? "Думата е намерена!" : "Думата не е намерена!");
}

// Тест
findWord(["ябълка", "банан", "портокал"], "банан", showResult);
findWord(["ябълка", "банан", "портокал"], "грозде", showResult);

includes() проверява дали думата е в масива.
*/

/*
Задача 15: Преобразуване на списък от числа
Задача: Напиши modifyNumbers(), която приема масив и callback за модификация.

function modifyNumbers(numbers, callback) {
    return numbers.map(callback);
}

function multiplyByThree(n) {
    return n * 3;
}

// Тест
console.log(modifyNumbers([1, 2, 3, 4], multiplyByThree)); // [3, 6, 9, 12]

map() използва callback-а, за да преобразува числата.
*/

/*
Задача 16: Обратно броене с callback
Задача: Използвай setTimeout(), за да направиш обратно броене от 5 до 1.

function countdown(n, callback) {
    if (n === 0) {
        callback();
        return;
    }
    console.log(n);
    setTimeout(() => countdown(n - 1, callback), 1000);
}

function finish() {
    console.log("🚀 Старт!");
}

// Тест
countdown(5, finish);

Функцията извиква сама себе си и намалява n, докато стигне 0.
*/

/*
Задача 17: Проверка за възраст
Задача: Напиши checkAge(), която проверява дали човек е пълнолетен

function checkAge(age, callback) {
    if (age >= 18) {
        callback("Може да влезеш.");
    } else {
        callback("Достъпът е забранен.");
    }
}

// Тест
checkAge(20, console.log);
checkAge(15, console.log);

Callback-ът връща съобщение в зависимост от възрастта.
*/

/*
Задача 18: Изпълнение на код след забавяне
Задача: Направи delayedExecution(), която изпълнява код след забавяне.

function delayedExecution(callback, delay) {
    setTimeout(callback, delay);
}

// Тест
delayedExecution(() => console.log("Това се появява след 3 секунди!"), 3000);

setTimeout() изчаква определено време преди да извика callback-а.
*/

/*
Задача 19: Генериране на произволно число и обработка
Задача: Направи generateNumber(), която генерира число и извиква callback.

function generateNumber(callback) {
    let number = Math.floor(Math.random() * 100);
    callback(number);
}

function printNumber(num) {
    console.log("Произволно число: " + num);
}

// Тест
generateNumber(printNumber);

Math.random() генерира число, което подаваме на callback-а.
*/

/*
Задача 20: Оценяване на тест
Задача: Направи gradeTest(), която приема резултат и callback за обратна връзка.

function gradeTest(score, callback) {
    if (score >= 50) {
        callback("Поздравления! Изпита е взет.");
    } else {
        callback("Неуспешен опит. Опитайте отново.");
    }
}

// Тест
gradeTest(75, console.log);
gradeTest(30, console.log);

Проверяваме дали оценката е над 50 и подаваме резултата към callback-а.
*/

/*
🔥 По-сложни задачи с комбиниране на callback функции
Сега ще комбинираме няколко callback функции, за да създадем по-сложни сценарии.

Задача 21: Верижно изпълнение на задачи
Задача: Имаме три задачи, които трябва да се изпълнят една след друга, всяка с определено забавяне.

function task1(callback) {
    setTimeout(() => {
        console.log("🔹 Задача 1 изпълнена.");
        callback();
    }, 1000);
}

function task2(callback) {
    setTimeout(() => {
        console.log("🔹 Задача 2 изпълнена.");
        callback();
    }, 2000);
}

function task3(callback) {
    setTimeout(() => {
        console.log("🔹 Задача 3 изпълнена.");
        callback();
    }, 1500);
}

// Изпълнение във верига
task1(() => {
    task2(() => {
        task3(() => {
            console.log("✅ Всички задачи са изпълнени!");
        });
    });
});

Всяка задача изчаква предишната преди да започне.
*/

/*
Задача 22: Последователна обработка на потребителски заявки

Задача: Имаме списък с потребители. За всеки потребител трябва да заредим данни, да ги обработим и накрая да ги покажем.

function fetchUser(id, callback) {
    setTimeout(() => {
        console.log(`📥 Зареждане на потребител ${id}`);
        callback({ id: id, name: `Потребител ${id}`, age: 20 + id });
    }, 1000);
}

function processUser(user, callback) {
    setTimeout(() => {
        user.status = "Активен";
        console.log(`🔄 Обработка на ${user.name}`);
        callback(user);
    }, 1000);
}

function displayUser(user) {
    setTimeout(() => {
        console.log(`👤 ${user.name}, Възраст: ${user.age}, Статус: ${user.status}`);
    }, 500);
}

// Изпълнение
fetchUser(1, (user) => {
    processUser(user, (processedUser) => {
        displayUser(processedUser);
    });
});

Зареждаме, обработваме и показваме потребителя, използвайки callback-и.
*/

/*
Задача 23: Управление на заявки с грешки
Задача: Добави обработка на грешки в предишната задача.

function fetchUser(id, callback, errorCallback) {
    setTimeout(() => {
        let success = Math.random() > 0.3; // 70% шанс за успех
        if (success) {
            console.log(`📥 Зареждане на потребител ${id}`);
            callback({ id: id, name: `Потребител ${id}`, age: 20 + id });
        } else {
            errorCallback(`❌ Грешка при зареждане на потребител ${id}`);
        }
    }, 1000);
}

// Тест
fetchUser(1, 
    (user) => console.log(`✅ Успешно зареден: ${user.name}`), 
    (error) => console.log(error)
);

Ако Math.random() върне грешка, се извиква errorCallback().
*/

/*
Задача 24: Комбиниране на няколко callback функции в масив

Задача: Създай масив от callback функции и ги изпълни последователно.

function runCallbacks(callbacks) {
    callbacks.forEach((callback, index) => {
        setTimeout(() => {
            console.log(`➡️ Изпълняване на функция ${index + 1}`);
            callback();
        }, index * 1000);
    });
}

// Списък с callback-и
let tasks = [
    () => console.log("🔹 Първа задача изпълнена."),
    () => console.log("🔹 Втора задача изпълнена."),
    () => console.log("🔹 Трета задача изпълнена.")
];

// Изпълнение
runCallbacks(tasks);

Използваме forEach(), за да стартираме всички callback-и със забавяне.
*/

/*
Задача 25: Управление на списък със заявки (асинхронно изпълнение)

Задача: Имаме списък от потребители, за които искаме да заредим данни едновременно.

function fetchUser(id, callback) {
    setTimeout(() => {
        console.log(`📥 Зареждане на потребител ${id}`);
        callback({ id: id, name: `Потребител ${id}` });
    }, Math.random() * 2000);
}

function fetchUsers(ids, callback) {
    let users = [];
    let completed = 0;

    ids.forEach((id) => {
        fetchUser(id, (user) => {
            users.push(user);
            completed++;
            if (completed === ids.length) {
                callback(users);
            }
        });
    });
}

// Тест
fetchUsers([1, 2, 3], (users) => {
    console.log("✅ Всички потребители заредени:", users);
});

Изпълняваме няколко заявки едновременно и изчакваме всички да завършат.
*/

/*
Задача 26: Последователно изпълнение с reduce()
Задача: Използвай reduce(), за да изпълниш функции една след друга.

function runTasks(tasks, finalCallback) {
    tasks.reduce((prev, task) => {
        return () => task(prev);
    }, finalCallback)();
}

// Списък със задачи
let steps = [
    (next) => { console.log("🛠 Стъпка 1"); setTimeout(next, 1000); },
    (next) => { console.log("🛠 Стъпка 2"); setTimeout(next, 1000); },
    (next) => { console.log("🛠 Стъпка 3"); setTimeout(next, 1000); }
];

// Изпълнение
runTasks(steps, () => console.log("✅ Всички стъпки завършени!"));

Използваме reduce(), за да свържем всички callback-и в една верига.
*/

/*
Задача 27: Имитация на API повиквания с различни времена на изпълнение

Задача: Симулирай три заявки към различни API, като всяка връща резултат след различно време.

function fetchData(api, callback) {
    let time = Math.random() * 3000;
    setTimeout(() => {
        console.log(`📡 Получени данни от ${api}`);
        callback({ api: api, data: "Данни от " + api });
    }, time);
}

// Изпълнение на няколко заявки
fetchData("API 1", (data) => console.log(data));
fetchData("API 2", (data) => console.log(data));
fetchData("API 3", (data) => console.log(data));

Всяко API има различно време за изпълнение.
*/
