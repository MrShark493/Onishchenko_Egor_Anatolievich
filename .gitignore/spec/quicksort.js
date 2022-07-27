const randomDiap = (n, m) => {
  return Math.round(Math.random() * m + n);
}

const randomArr = (N, n, m) => {
  const arr = [];

  for (let i = 0; i < N; i++) {
    arr.push(randomDiap(n, m));
  }
  return arr;
}

const swap = (items, firstIndex, secondIndex) => {
    const temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

const partition = (items, left, right) => {
  let pivot = items[Math.floor((right + left) / 2)], i = left, j = right;
  while (i <= j) {
    while (items[i] < pivot) {
        i++;
      }
    while (items[j] > pivot) {
        j--;
      }
    if (i <= j) {
        swap(items, i, j);
        i++;
        j--;
      }
  }
  return i;
}

const quickSort = (items, left, right) => {
  let index;
  if (items.length > 1) {
    //задает левый и правый указатели. По умолчанию сами выбираются
    left = typeof left != "number" ? 0 : left;
    right = typeof right != "number" ? items.length - 1 : right;

    index = partition(items, left, right);
    if (left < index - 1) {
        quickSort(items, left, index - 1);
        }
    if (index < right) {
        quickSort(items, index, right);
        }
    }
  return items;
}

const arr = randomArr(20, 0, 50);

console.log(arr);
console.log('-------------------------------------');
//проверка времени при сортировке встроенным методом
console.time();
console.log(arr.sort((a,b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    if (a = b) return 0;
  }));
  console.timeEnd();
//console.timeEnd(quickSort(arr));
console.log('-------------------------------------');
console.time();
console.log(quickSort(arr));
console.timeEnd();
console.log('-------------------------------------');
