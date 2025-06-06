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
for (let key in books) {
    if (key === 'name') {
        break;
    }
    console.log(key, books[key]);
}


//while

let i = 0;
while (i < 5) {
    console.log('I am still working - ' + i)
    i++
}

let word ='';
while (word.length < 5) {
    const value = prompt ('Enter the letter')
    if (value.length === 0) {
        break;
    }
    word = word + value;
    console.log(word);
}

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
    console.log(key + '-' +person[key]);
}