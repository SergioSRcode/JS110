// Write a function that takes a string argument containing one or more words and returns a new string 
// containing the words from the string argument. 
// All five-or-more letter words should have their letters in reverse order.
// The string argument will consist of only letters and spaces.
// Words will be separated by a single space.

function reverseWords(str) {
  let arrOfStr = str.split(" ");

  return arrOfStr.map(word => {
    if (word.length >= 5) word = word.split("").reverse().join("");
    return word;
  }).join(" ");
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"