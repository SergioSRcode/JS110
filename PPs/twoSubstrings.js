/*
Given 2 strings, your job is to find out if there is a substring that appears in both strings.
You will return true if you find a substring that appears in both strings, or
false if not.
We only care about substrings that are longer than one letter long.
*/

//INPUT: two strings
//OUTPUT: boolean

//RR:
/*
- only substrings with more than 1 char are compared.
- the substring should appear in both strings.
- substrings are not case sensitive.

MM: "Something" - "Home": "So" === "Ho" ? return true : "So" == "om" ? ... "om" === "HO" ? nope => "om" === "om" ? YES => return true

Algorithm:

1. select 2 chars of first str and check whether the substring is included in second str.
2. if no => take next two chars "So" => "om" => "me"
*/

function substringTest(str1, str2) {
  let firstWord = str1.split("");

  for (let i = 0; i < str1.length - 1; i++) {
    let substr = firstWord[i].toLowerCase() + firstWord[i + 1].toLowerCase();

    if (str2.includes(substr)) return true;
  }

  return false;
}

console.log(substringTest("Something", "Fun") === false);
console.log(substringTest("Something", "Home") === true);
console.log(substringTest("Something", "Fun") === false);
console.log(substringTest("Something", "") === false);
console.log(substringTest("", "Something") === false);
console.log(substringTest("BANANA", "banana") === true);
console.log(substringTest("test", "lllt") === false);
console.log(substringTest("", "") === false);
console.log(substringTest("1234567", "541265") === true);
console.log(substringTest("supercalifragilisticexpialidocious", "SoundOfItIsAtrociou") === true);

