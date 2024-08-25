// 題目：有個Fn傳入兩個引數，第一個引數為一個sorted array，第二個引數為一個number，此演算法需要找array中有幾組pair(array中
// 兩個value為一個pair) 此pair的平均值需等於第二個引數number。

// 範例1: averagePair([-11,0,1,2,4,9,14,17,21],1.5) The number pair is (-11,14) (0,3) (1,2)

function averagePair(sortedArr, avgNum) {
  let pointerOneIndex = 0;
  let pointerTwoIndex = sortedArr.length - 1;
  let result = [];
  while (pointerTwoIndex > pointerOneIndex) {
    let temp_avg =
      (sortedArr[pointerTwoIndex] + sortedArr[pointerOneIndex]) / 2;

    if (temp_avg > avgNum) {
      pointerTwoIndex -= 1;
    } else if (temp_avg < avgNum) {
      pointerOneIndex += 1;
    } else if (temp_avg === avgNum) {
      result.push([sortedArr[pointerTwoIndex], sortedArr[pointerOneIndex]]);
      pointerTwoIndex -= 1;
      pointerOneIndex += 1;
    }
  }
  return result;
}

console.log(averagePair([-11, 0, 1, 2, 4, 9, 14, 17, 21], 1.5));
