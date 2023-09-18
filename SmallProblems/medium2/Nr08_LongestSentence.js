// Write a program that prints the longest sentence in a string based on the number of words.


//INPUT: string
//OUTPUT: longest string + num of words

//RR
/*
- Sentence:
  - ends with !, ? or .
  - composed of words
    - word = any sequence of chars not separated by spaces or endings.
           = is separated by a space from ohter words
- log longest sentence + word count to the console.

MM: string => if char = ending => slice string part =push> empty arr. 
    compare arr elements lengths and return the highest one.

DS
Arrays

Algorithm:
1. create empty array
2. iterate over each char of string
  2.1. find ending char => slice string at ending char and push sliced portion to new arr
  2.2. continue 2.1. starting with ending index + 1 until the end of arr.

3. iterate over arr
  3.1. get the amount of words from each element string and compare that value
4. return longest string + it's length

*/

function findSentences(str) {
  const ENDING = ["!", "?", "."];
  let arr = [];
  let startSliceAt = -1;

  for (let i = 0; i < str.length; i++) {
    if (ENDING.includes(str[i])) {
      arr.push(str.slice(startSliceAt + 1, i + 1));
      startSliceAt = i + 1;
    }
  }

  return arr;
}

function longestSentence(str) {
  let sentences = findSentences(str);

  sentences.sort((a, b) => a.split(" ").length - b.split(" ").length);
  
  console.log(sentences[sentences.length - 1]);
  console.log("");
  console.log(`The longest sentence has ${sentences[sentences.length - 1].split(" ").length} words`);
}


let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.