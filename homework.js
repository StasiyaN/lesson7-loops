//1

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//2
let i = 1;
let total = 0;
while (i <= 100) {
    total += i;
    console.log(`Добавляем ${i} ->сумма сейчас : ${total}`);
    i++
}
console.log(total);

//3
for (let simpleNumber = 2; simpleNumber <= 100; simpleNumber++) {
    let isSimpleNumber = true;

    for(let i = 2; i <= Math.sqrt(simpleNumber); i++) {
        if (simpleNumber % i === 0) {
            isSimpleNumber = false;
            break;
        }
    }
    if (isSimpleNumber) {
        console.log(simpleNumber);
    }
}