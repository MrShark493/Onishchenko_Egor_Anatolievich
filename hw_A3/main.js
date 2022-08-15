let userString = '';

do {
    userString = prompt('Введите слово на проверку.', '');
}
while(userString == '');

const palindromCheck = (stringIn) => {
    let i = 0; let j = stringIn.length - 1;
    const stringInToLowerCase = stringIn.toLowerCase();
    while (i != j && i < j) {
        while (/[ьъ\s\.\,\-]/.test(stringInToLowerCase[i])) {
            i += 1;
        }
        while (/[ьъ\s\.\,\-]/.test(stringInToLowerCase[j])) {
            j -= 1;
        }
        if (stringInToLowerCase[i] != stringInToLowerCase[j]) {
            if (/[её]/.test(stringInToLowerCase[i]) != true && /[её]/.test(stringInToLowerCase[j]) != true) {
                return false;
            }
        }
        i += 1;
        j -= 1;
    }
    
    return true;
}

alert(`
Введенное слово: ${userString}
Является ли палиндромом: ${palindromCheck(userString)}
`);

console.log('Проверка 1. Игнорирование пробелов и регистров. Фраза: \'! Ежу хуже !\'' + palindromCheck(' Ежу хуже '));
console.log('Проверка 2. Игнорирование мягких, твердых знаков, а также знаков препинания.. Фраза: \'!Муза, ранясь шилом опыта, ты помолишься на разум!\'' + palindromCheck('Муза, ранясь шилом опыта, ты помолишься на разум'));
console.log('Проверка 3. Игнорирование разницы  между е и ё. Фраза: \'!Ёжу хуже!\'' + palindromCheck('Ёжу хуже'));
console.log('Проверка 4. Фраза: \'!Я - дядя ежу. Уже я дядя...!\'' + palindromCheck('Я - дядя ежу. Уже я дядя...'));
console.log('Проверка 5. Проверка на полную несуразицу. Фраза: \'!абфьтыдфлвиорфыол!\'' + palindromCheck('абфьтыдфлвиорфыол'));
