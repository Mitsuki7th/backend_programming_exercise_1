let result = '';
let i = 1;

do {
    let BilPrima = true;
    i++;
    
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            BilPrima = false;
            break;
        }
    }

    if (BilPrima) {
        result += i + ', ';
    }
} while (i < 1000);

console.log('Bilangan Prima dari 1 - 1.000 :');
console.log(result);