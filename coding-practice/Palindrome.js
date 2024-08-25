// 題目：Palindrome由前面讀跟後面讀結果會是一樣的。需寫一個演算法來確認是否符合Palindrome

// 範例1: tacocat
// 範例2: amanaplanacanalpanama

function isPalindrome(stringValue) {
  let valueList = stringValue.split("");
  let pointerOneIndex = 0;
  let pointerTwoIndex = valueList.length - 1;
  while (pointerTwoIndex > pointerOneIndex) {
    if (valueList[pointerOneIndex] === valueList[pointerTwoIndex]) {
      pointerOneIndex += 1;
      pointerTwoIndex -= 1;
    } else {
      return false;
    }
  }
  return true;
}
console.log(isPalindrome("amanaplanacanalpanama"));
console.log(isPalindrome("amanaplanacanalpanama1"));
