import {arr_generator} from './special_functions.js';
const arr =
[5, 7,
[4, [2], 8, [1,3], 2],
[9, [] ],
1, 8];

console.log(arr);

const treeSum = (arr) => {
  let sum = 0;
  //основное тело цикла
  for (let i = 0; i < arr.length; i++) {
    switch (typeof arr[i]) {
      case 'number' : {
        sum += arr[i];
        break;
      }
      //массив внутри js определяется как тип "Объект"
      case 'object' : {
        sum += treeSum(arr[i]);
        break;
      }
      default: {
        console.log("Error");
        return -1;
      }
    }
  }
  return sum;
}

console.log(treeSum(arr));
console.log("______");

//Проверка алгоритма
//Для этого написал рекурсивную функцию, которая будет создавать похожие массивы.
//Она находится в файле special_functions.js, который в дальнейшем будет подкидываться если понадобятся какие-то функции.

const arr2 = arr_generator();
console.log(arr2);
console.log("______");
console.log(treeSum(arr2));
