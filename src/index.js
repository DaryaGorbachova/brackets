module.exports = function check(str, bracketsConfig) {
	let array1 = [];
	let array2 = [];
  for (let i = 0; i < str.length; i++) {
	  for (let j = 0; j < bracketsConfig.length; j++) {
	if(str[i] === bracketsConfig[j][0]) {
		array1.push(i);
	}
	if(str[i] === bracketsConfig[j][1]) {
		array2.push(i);
	}
  }
  	
  }
	if (array1.length === array2.length) {
	//	console.log(array2)
		for (let i = 0; i < array1.length; i++) {
			if(array1[i] > array2[i]) return false
		}
		return true
	}
	else return false
}
