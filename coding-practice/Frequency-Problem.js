// 題目：寫個演算法，查詢以下兩組字串在不管排列的情況下是否相同

// 範例1: ("aabc","bbac") -> 不同因為第一組字串只有一個b，第二組卻有兩個b，回傳false
// 範例2: ("aabc","baca") -> 相同字母數回傳true

// 提示：使用Counter方法

function sameFrequency(strList1, strList2) {
  const concatStrList = strList1.concat(strList2).split("");
  const countHistory = {};
  let result = true;

  for (let i = 0; i < concatStrList.length; i++) {
    if (!countHistory[concatStrList[i]]) {
      countHistory[concatStrList[i]] = 1;
      continue;
    }
    countHistory[concatStrList[i]] = countHistory[concatStrList[i]] += 1;
  }

  for (item in countHistory) {
    if (countHistory[item] % 2 !== 0) {
      result = false;
    }
  }
  return result;
}

const isSameFrequencyEx1 = sameFrequency("aabc", "baca");
const isSameFrequencyEx2 = sameFrequency("aabc", "bbac");
const isSameFrequencyEx3 = sameFrequency("aiaisodjwlq", "iaaiqwdjols");

console.log(isSameFrequencyEx1);
console.log(isSameFrequencyEx2);
console.log(isSameFrequencyEx3);
