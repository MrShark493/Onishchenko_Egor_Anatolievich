let a = 5;
let b = 6;

console.log(`1) a + b = ${a + b}`);
console.log(`2) a - b = ${a - b}`);
console.log(`3) a % b = ${a % b}`);
console.log(`4) a / b = ${a / b}`);

console.log(`5) a == b -> ${a == b}`);
console.log(`6) a !== b -> ${a !== b}`);

let str1 = 'book';
let str2 = 'notepad';

console.log(`7) str1 = str2 -> ${str1 == str2}`);

let int_number = 6;
let str_number = "6";

console.log(`8) int_number == str_number -> ${int_number == str_number}`);
console.log(`9) int_number === str_number -> ${int_number === str_number}`);

function console_log_but_with_auto_counter(i, str) {
  console.log(`${i++}) ${str}`);
}

let counter = 10;
console_log_but_with_auto_counter(counter, `int_number !== str_number -> ${int_number !== str_number}`);
console_log_but_with_auto_counter(counter, `a == b and str1 == str2 - > ${(a == b) && (str1 == str2)}`);
console_log_but_with_auto_counter(counter, `a != b and str1 != str2 - > ${(a != b) && (str1 != str2)}`);
console_log_but_with_auto_counter(counter, `a == b or str1 == str2 - > ${(a == b) || (str1 == str2)}`);
