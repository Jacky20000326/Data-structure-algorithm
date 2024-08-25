// 寫一個Sliding Window的函式幣找出最大/最小值

function maxSlidingWindowFn(originArr, size) {
  let maxResult = -Infinity;

  if (size > originArr.length) {
    return null;
  }

  for (let i = 0; i <= originArr.length; i++) {
    let calcMaxValue = 0;
    for (let j = i; j < i + size; j++) {
      calcMaxValue += originArr[j];
      if (calcMaxValue > maxResult) {
        maxResult = calcMaxValue;
      }
    }
  }
  return maxResult;
}

console.log(maxSlidingWindowFn([2, 7, 3, 0, 6, 1, -5, -12, -11], 3));
