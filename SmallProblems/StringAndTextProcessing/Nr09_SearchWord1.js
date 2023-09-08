// Write a function that takes two arguments, a word and a string of text, 
// and returns an integer representing the number of times the word appears in the text.

// You may assume that the word and text inputs will always be provided, 
// and that all word breaks are spaces. Thus, some words will include punctuation such as 
// periods and commas. Also assume that the search is case-insensitive.

//INPUT: a one word string, a string of text
//OUTPUT: Number (integer)

//RR
/*
- both argument are always provided
- all words are separated by space (commas count as part of the word)
- search/comparison should be case- insensitive
- return value is integer representing:
  - number of times, the full word appears within the text

MM:
"sEd" - "Sed is A lil sed" => turn both arg to lower case => "sed" - "sed is a lil sed"
=> check if word is included in text.
=> get arr of text
=> filter all matches
=> return length
*/

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

function searchWord(word = "", text = "") {
  word = word.toLowerCase();
  text = text.toLowerCase();

  if (word === "" || text === "") return "you are missing an argument there!";
  if (!text.includes(word)) return 0;

  return text.split(" ").filter(element => element === word).length;
}

console.log(searchWord('sed', text));      // 3
