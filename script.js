//your JS code here. If required.
const mapLetters = (str) =>{
	const obj = {};
	str.trim().split('').forEach((letter,i)=> obj[letter] ? obj[letter].push(i) : obj[letter] =  [i]);
	return obj;
}





