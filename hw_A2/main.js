function CutTheStringOff(str) {
    let i = 0;
    do {
        if (str[i] == " "){
            i++
        }
        else {
            break;
        }
    } while (i < str.length);

    let j = str.length - 1;
    do {
        if (str[j] == " "){
            j--;
        }
        else {
            break;
        }
    }
    while (j > 0);

    let new_str = "";
    for (i; i <= j; i++) {
      new_str += str[i];
    }
    return new_str;
  }

/////////////////////////////////////////////

let userString = '';

do {
    userString = prompt('Введите фразу', '');
} 
while(userString == '');

alert(`
Ваша строка: ${'!' + userString + '!'}
Строка после обработки: ${'!' + CutTheStringOff(userString) + '!'}
`);