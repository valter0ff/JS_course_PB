/*
#### Задача 10

Отсортировать массив по возрастанию.

```javascript
var arr = [6,5,4,3,2,1];
// [1,2,3,4,5,6]
```

**Внимание**!

- Не разрашается использовать специальные методы массивов.
*/

var arr = [1,2,3,4,5,6];
var n = arr.length;
for (let i = 0; i < n-1; i++) {
  let indexMin = i;
  for (let j = i + 1; j < n; j++) {
    if (arr[indexMin] > arr[j]) {
      indexMin = j;
    }
  }
  if (indexMin !== i) {
    [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
  }
}
console.log( arr );
