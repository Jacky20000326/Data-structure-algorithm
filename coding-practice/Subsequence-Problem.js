// 題目：寫個演算法函式接受兩個字串引數，並判斷是否戶為SubString

// 範例1: isSubsequence("hello","hello Dear") -> true
// 範例2: isSubsequence("book","brooklyn") -> true
// 範例2: isSubsequence("abc","bac") -> order error 排序錯誤

function isSubsequence(str1, str2) {
  if (str1.length === 0) {
    return true;
  }

  let pointerOneIndex = 0;
  let pointerTwoIndex = 0;

  while (pointerTwoIndex < str2.length) {
    if (str1[pointerOneIndex] === str2[pointerTwoIndex]) {
      pointerOneIndex += 1;
    }
    pointerTwoIndex += 1;
  }

  if (pointerOneIndex === str1.length) {
    return true;
  }
  return false;
}

console.log(isSubsequence("book", "brooklyn"));
console.log(isSubsequence("abc", "bac"));
console.log(isSubsequence("hello", "hello Dear"));
