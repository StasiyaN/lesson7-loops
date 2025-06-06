/*
loops
Состоят из тела цикла и условия
правило: пока стакан не полный наливай
*/

// break vs continue

apples = [
    {
        apple : 1,
        isRotten: false
    },
    {
        apple : 2,
        isRotten: true
    },
    {
        apple : 3,
        isRotten: false
    },

    {
        apple : 4,
        isRotten: true
    }
]
//continue
for (let i =0; i < apples.length; i++) {
    if (apples[i]. isRotten) {
        continue;// Пропусти это яблоко, иди к следующему
    }
    console.log(apples[i]); // Съесть хорошее яблоко
}

/* "Фу, это гнилое. Пропускаю. Следующее!"
— Ты продолжаешь перебирать яблоки, пока все не проверишь.*/

//break
for (let i =0; i < apples.length; i++) {
    if (apples[i].isRotten) {
        break;
    }
    console.log(apples[i]);
}


//for

for (let i = 0; i < 4; i++) {
    console.log(i);
}

/*
i = index
приравниваем i к 0 - i : 0
проверяем i меньше 0 или нет - i < 4 ? true
увеличиваиваем i на 1
console log выдодит 1
опятьб проверяем ( теперь i равно 1)
i = 1 < 4 ? true
console.log 2 (1+1)

i = 2 < 4 ? true
console log 3 (2 + 1)

*/

const books = [
    {
        name: 'To Kill a Mockingbird',
        year: '1960'
    },
    {
        name: '1984',
        year: '1949'
    },
    {
        name: 'The Great Gatsby',
        year: '1925'
    },
    {
        name: 'Pride and Prejudice',
        year: '1813'
    },
    {
        name: 'The Catcher in the Rye',
        year: '1951'
    },
    {
        name: 'Harry Potter and the Philosopher’s Stone',
        year: '1997'
    }
]

for (let i = 0; i < books.length; i++) {
    console.log(`${books[i].name} - ${books[i].year}`);
}

// =

for (let book of books) {
    console.log(`${book.name} - ${book.year}`);
}

// =
// for (let book in books) {
//     if (book === 'name') { - Никогда не выполнится book === 'name', потому что book — это не поле name, а строковый индекс массива.
//         break;
//     }
//     console.log(book, books[book]);
// }

for (const book of books) {
    if (book.name) {
        console.log("Первая книга найдена:", book.name);
        break; // остановить цикл — больше ничего не проверяем
    }
}
/*
🔍 Что делает этот код:
Первая итерация: проверяет book.name (у первой книги)

Если название есть (не null, не undefined, не пустое) → печатает и выходит из цикла

Остальные книги не проверяются вообще*/

//gpt example
/* Задача:
Есть два таймера:
— один отсчитывает вперёд (время с начала запуска)
— другой отсчитывает назад (время до дедлайна)

Каждый шаг = 1 секунда

Когда они встретятся или пересекутся → цикл останавливается*/
function tickTimers(up, down) {
    console.log(`⏱ Завершение шага: прошло ${up} сек, осталось ${down} сек`);
    return[up +1, down -1];
}

let timePassed = 0;
let timeLeft = 10;

for (; timePassed <= timeLeft; [timePassed, timeLeft] = tickTimers(timePassed, timeLeft)) {
    console.log(`🔁 Внутри цикла: прошло ${timePassed} сек, осталось ${timeLeft} сек`);
}

/*🔍 Что происходит:
timePassed увеличивается — как секундомер.

timeLeft уменьшается — как обратный отсчёт.

Цикл продолжается, пока timePassed <= timeLeft

После каждого шага вызывается функция tickTimers, которая выводит и обновляет значения.

*/

/*

|                   | `for...in`                     | `for...of`                 |
| ----------------- | ------------------------------ | -------------------------- |
| Что перебирает    | Ключи (индексы, имена свойств) | Значения элементов         |
| Тип ключа         | Строка                         | Любой (значение напрямую)  |
| Подходит для      | Объектов                       | Массивов, строк, коллекций |
| Пример с массивом | Да, но возвращает индексы      | Да, и возвращает значения  |



🧠 Краткий вывод:
Symbol.iterator — это ключ к "for...of"`

Если он есть → объект можно перебирать

Проверка: typeof obj[Symbol.iterator] === 'function'

Можно вызвать iterator.next() вручную и увидеть, как работает итерация
*/

/*🎯 Цель:
Сделать так, чтобы по нашему объекту можно было пройтись с помощью for...of.
*/
const person1 = {
    name: "Anna",
    age: 25,
    city: "Paris",

    [Symbol.iterator]() {
        const entries = Object.entries(this); // [['name', 'Anna'], ['age', 25], ['city', 'Paris']]
        let index = 0;

        return {
            next() {
                if (index < entries.length) {
                    const value = entries[index];
                    index++;
                    return { value, done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
};


//while

let i = 0;
while (i < 5) {
    console.log('I am still working - ' + i)
    i++
}
//
// let word ='';
// while (word.length < 5) {
//     const value = prompt ('Enter the letter')
//     if (value.length === 0) {
//         break;
//     }
//     word = word + value;
//     console.log(word);
// }

// do ... while
let h = 5;
do {
    console.log(h);
    h++;
} while (h < 5);

// for ... in

const person = {
    name: 'John',
    age: 25,
    city: 'Paris'
};
//получение значения по ключу
console.log(person.city);
console.log(person['city'])

for (let key in person) {
    console.log(key + '-' + person[key]);
}

const user = {
    name: 'John',
    age: 25,
    isMarried: true
};

for (let key in user) {
if (key === 'age') {
    break;
    }
    console.log(key, user[key]);
}

//Вложенные циклы
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`i = ${i}, j = ${j}`);
    }
}
// Вывод:
// i = 0, j = 0
// i = 0, j = 1
// i = 0, j = 2
// i = 1, j = 0
// i = 1, j = 1
// i = 1, j = 2
// i = 2, j = 0
// i = 2, j = 1
// i = 2, j = 2

//разбор с Алексеем
for (let i = 0; i < 3; i++) {
    // i = 0; потом начинается цикл
    //287 -> i = 1; etc
    for (let j = 0; j < 3; j++) {
        //j = 0; -> цикл не закончен а будет закончен только тогда когда j будет равно 0
        //значит
        //j = 1;
        //j = 2;
        //потом пойдет новая итерация на 279
        console.log(`i = ${i}, j = ${j}`);
    }
}