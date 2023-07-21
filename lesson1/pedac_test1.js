// Given a string, produce a new string with every other word removed.

/*
- Explicit requirements:
  input: a string of words
  output: new string containing every other word
  Remove every other word from input string

- Questions:
  - What do we mean by every other word?
  - How do we define a word in this context?
    - Words are delimited by spaces

- Mental model:
  ================
  Convert string to an array with every word as its own element.
  Then create an empty array and push all even elements to it before converting
  it back to a string and returning the result.

- D&A
  ====================
  - Create a function that takes 1 string argument
  - Declare a new variable and initialize it to the array version of the string
    (elements are divided by spaces)
  - declare another new variable and initialize it to an empty array.
  - Iterate over the first array and push every element with an even index (starting with 0)
    to the empty array.
  - Convert the second array to a string and return the value.

*/

// code

function getEveryOtherWord(str) {
  const arrOfStr = str.split(" ");
  let resultArr = [];

  arrOfStr.forEach((word, index) => {
    if (index % 2 === 0) {
      resultArr.push(word);
    }
  });
  return resultArr.join(" ");
}

console.log(getEveryOtherWord("Hello Jonny, How are you today?"));