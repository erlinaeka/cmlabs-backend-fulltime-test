// Task 1 - FizzBuzz
/* Buat loop yang mencetak angka 1-100, JIKA kelipatan 3 maka outputnya "Fizz" , 
JIKA kelipatan 5 outputnya "Buzz" dan JIKA kelipatan 3 dan 5 keluarkan 'FizzBuzz' */

for (let i = 1; i <= 100; i++) {
    (i % 5 == 0) & (i % 3 == 0)
        ? console.log(`FizzBuzz`)
        : i % 3 == 0
        ? console.log(`Fizz`)
        : i % 5 == 0
        ? console.log(`Buzz`)
        : console.log(i);
}
