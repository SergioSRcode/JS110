
//input: arr of strings
//output: string

function getSameValues(arr1, arr2) {
  return arr1.filter(str => {
    for (let i = 0; i < arr2.length; i++) {
      if (str === arr2[i]) return str;
    }
  });
}

function longestPrefix(arr) {
  if (arr.length <= 1) return arr.join("");
  
  return arr.sort((a, b) => b.length - a.length)[0];
}

function getSubstrings(str) {
  let firstWord = str.split("");
  let substrings = [];

  firstWord.forEach(char => {
    for (let idx = 1; idx <= firstWord.length; idx++) {
      let substring = firstWord.slice(firstWord[0], idx);
      if (substring.length <= 1) continue;
      substrings.push(substring);
    }
  });

  substrings = substrings.map(subarr => subarr.join(""));

  return substrings;
}

function commonPrefix(arr) {
  let sameValues = "";

  for (let i = 0; i < arr.length - 1; i++) {
    let substrings1 = sameValues || getSubstrings(arr[i]);
    let substrings2 = getSubstrings(arr[i + 1]);
    
    sameValues = getSameValues(substrings1, substrings2);
  }

  return longestPrefix(sameValues);
}
// console.log(getSubstrings(["flower", "flow", "flight"]));

console.log(commonPrefix(["flower", "flow", "flight"]) === "fl");
console.log(commonPrefix(["dog", "racecar", "car"]) === "");
console.log(commonPrefix(["interspecies", "interstellar", "interstate"]) === "inters");
console.log(commonPrefix(["throne", "dungeon"]) === "");
console.log(commonPrefix(["throne", "throne"]) === "throne");
