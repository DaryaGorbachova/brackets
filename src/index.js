module.exports = function check(str, bracketsConfig) {
	let count1 = 0;
	let count2 = 0;
  for (let i = 0; i < str.length; i++) {
	  for (let j = 0; j < bracketsConfig.length; j++) {
	if(str[i] === bracketsConfig[j][0]) count1++;
	if(str[i] === bracketsConfig[j][1]) count2++;
	  }
  	
  }
	if (count1 === count2) return true
	else return false
}
