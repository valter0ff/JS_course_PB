/*
#### Задача 9

Отсортировать массив по убыванию.

```javascript
var arr = [1,2,3,4,5,6];
// [6,5,4,3,2,1]
```

**Внимание**!

- Не разрашается использовать специальные методы массивов.
*/

var arr = [1,2,3,4,5,6];
var n = arr.length;
for (let i = 0; i < n-1; i++) {
  let indexMax = i;
  for (let j = i + 1; j < n; j++) {
    if (arr[indexMax] < arr[j]) {
      indexMax = j;
    }
  }
  if (indexMax !== i) {
    [arr[i], arr[indexMax]] = [arr[indexMax], arr[i]];
  }
}
console.log( arr );
