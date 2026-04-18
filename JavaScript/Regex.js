//exec() -->  Execute the regex search on a string


regex=/^\d/;
// \d --> at aleast one digit anywhere
// ^\d --> start with digit
// \d$ -->end with digit
// ^\d+$ -->it all digits

let a="64tspk";
let b="tspk64";

console.log(regex.test(a)); //test is method if the pattern match anywhere
console.log(regex.test(b));

!isNaN(a.charAt(0)) ? console.log("hello") : console.log("hi");
!isNaN(b.charAt(0)) ? console.log("hello") : console.log("hi");

a.match(/^\d/)? console.log("hello") : console.log("hi");
b.match(/^\d/)? console.log("hello") : console.log("hi");

Number(a.charAt(0))? console.log("hello") : console.log("hi");
Number(b.charAt(0))? console.log("hello") : console.log("hi");

console.log(a.search(/^\d/) !== -1);
console.log(b.search(/^\d/) !== -1);

num="234.4578";

console.log(Math.floor(num *10)/10);

console.log(parseFloat(num.substring(0,num.indexOf('.')+2)));

console.log(parseFloat(num.match(/^\d+\.\d{1}/)));

regex=/^\d+\.\d{1}/;
console.log(regex.exec(num));

console.log(Number(regex.exec(num)));



//Regex is a pattern written between /.../ 
/*
flags:
    g- global(find all matches)
    i- case insensitive
    m- multiline
    u- unicode mode
    y- sticky mode

character classes:
    \d - digit[0-9]
    \w - word char[a-zA-Z0-9_]
    \s - whitespace
    \D - not digit
    \W - not word char
    \S - not whitespace

Custom Sets and Ranges [ ... ]

Unicode property escapes: \p{...}
    \p{L} - matches any kind of letter (English, french, Hindi, chinese)
    \p{N} - matches any numeric character ((0-9),Roman numerals)
    \p{P} - any punctuation (. , ! ? -)
    \p{S} - currency match symbols,emojis,etc
    \p{Z} - whitespace

^ -> start
$ -> end

Multiline Mode 
    normal ^ and $ apply to whole string . with m they apply to each line


Escaping special characters 
    (. ^ $ * + ? () [] {} | \) ---> \.  \^ \$ \+ \( \) \[ \] \{ \} \| \\

word Boundary:
    \b - matches a boundary between word and non-word 

Greedy & Lazy match
    Greedy - try to match as much as possible ( .*,+)
    lazy - match as little as possible(.*?)

capturing Groups 
    Group parts of a match in ( )

Backreferences:
    reuse something already matched ealier
    first capture somehing using parenthese (), tehn after to it using \1,\2 etc..

Alternation:
    (or) - |  match this or that

Lookahead and Lookbehind:
    X(?=Y)   → positive lookahead (match X only if Y comes after)
    X(?!Y)   → negative lookahead (match X only if Y not comes after)
    (?<=Y)X   → positive lookbehind (match x only if Y come before)  
    (?<!Y)X   → negative lookbehind (match X only if Y not come before)

catastrophic Backtracking:



*/


let text="cat cat cat";
let result= text.match(/cat/g);
console.log(result);//find all occurences not just the first

text="cAt CAT Cat cat";
result=text.match(/cat/i);
console.log(result);//ignores uppercase/lowercase differences display first match
//in global it display all 

text="hello\nworld\nhello";
result=text.match(/^hello/gm);
console.log(result);
//without m only first line would match

text="𝌆A";
console.log(/\u{1D306}/u.test(text));
//Enables proper handling of Unicode characters (like emojis, non-Latin scripts).


text="abc def";
regex=/a/y;
console.log(regex.exec(text));//["a"]
console.log(regex.exec(text));//null (must continue exactly at next index)


text="Hello नमस्ते 你好 مرحبا ";
console.log(text.match(/\p{L}+/gu));


text = "Order ५ items  and 3 apples";//match hindi digit + ASCII digit
console.log(text.match(/\p{N}+/gu));

text = "ABC αβγ АБВ";//script match specific letter latin-> English, French.Han ->chinese characters
console.log(text.match(/\p{Script=Latin}+/gu));

console.log("hello test\ntest the text".match(/^test/m));

console.log("cat catalog".match(/\bcat\b/g));

text="a123b456b"
console.log(text.match(/a.*b/));//match a string start with a end with b and ha anything in between
console.log(text.match(/a.*?b/));//it stop at the first b

console.log("abab".match(/(ab)+/));
console.log("2026-04-18".match(/(\d{4})-(\d{2})-(\d{2})/));

console.log("hello hello".match(/(\w+)\s\1/));//captures "hello" must match the same word again 
console.log("12-12-29".match(/(\d\d)-\1/));
console.log("12-04-12".match(/(\d\d)-\1/));//(\d\d) → matches "12" → Group 1 = "12" - → matches "-" \1 → must match "12" again
//"12-04-12".match(/(\d\d)-\d\d-\1/) ---> first 12 any two digits (04) same 12 again

console.log("dog and cat".match(/cat|dog/g));
console.log("cat , dog and one more dog".match(/cat|dog/g));

console.log("100$ 200 300$".match(/\d+(?=\$)/g));
console.log("100$ 200 300$".match(/\b\d+\b(?!\$)/g));

console.log("$500 300 $400".match(/(?<=\$)\d+/g));
console.log("$500 300 $400".match(/(?<!\$)\b\d+\b/g));

str = "aaaaaaaaaaaaaaaaab";
console.log(/^a+$/.test(str));
str = "<div><span>text</span></divX";
console.log(/<[^>]*>[^<]*<\/[^>]*>/.test(str));//[^>]* - this means that any characters except >


regex=/\$\d+/;
str = "Total price is $500";

console.log(regex.test(str));//true/false
console.log(regex.exec(str));//detailed match object (matched text.position,original string)


console.log(str.match(regex));
console.log(str.replace(regex, "$999"));
console.log(str.search(regex));
console.log(str.split(regex));
