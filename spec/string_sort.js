const str1 = 'AaBbCc';
const str2 = 'IUAOWKJLGSBFVoiuJKBpsdifuolkvhb';
const str3 = '!@#$%^&*()(*&^%$SFDcbkjnn23985y';
const str4 = 'Coding is fun (Hint for reverse players: unscramble CSIAI)';
const str5 = '1234567890!@#$%^&*()`~-_=+QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm{}|[]\:";\'<>?,./';

const Arr_from_string = (str) => {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(str[i].charCodeAt());
  }
  return arr;
}

const Arr_Sort = (arr) => {
    let M = 0;

    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
          M = arr[i];
          arr[i] = arr[j];
          arr[j] = M;
        }
      }
    }

    return arr;
  }

function SortBycharCode(str) {
    let arr = Arr_from_string(str);
    arr = Arr_Sort(arr);
    arr.reverse();
    let str0 = "";
    for (let i = 0; i < arr.length; i++) {
      str0 += String.fromCharCode(arr[i]);
    }
    return str0;

}

console.log(SortBycharCode(str1));
console.log(SortBycharCode(str2));
console.log(SortBycharCode(str3));
console.log(SortBycharCode(str4));
console.log(SortBycharCode(str5));
