module.exports = function check(str, bracketsConfig) {
  let brackets = [];
  for (let i of str) {
  	for (let j of bracketsConfig){
  		if (j[0] === i && i !== j[1]) {
        brackets.push(j);
  			break;
  		}
      else if (i === j[0] && i === j[1]) {
        if (brackets.includes(j)) {
          if (j === brackets[brackets.length-1]) {
            brackets.pop();
          }
          else return false;
        }
        else brackets.push(j);
      }
  		else{
  			if (j[1] === i) {
  				if(brackets.length !== 0) {
  				if (i === brackets[brackets.length-1][1]){
  					brackets.pop();
  				}
  			}
  				else return false;
  			}
  		}
  	}
  }
  	if (brackets.length === 0) return true;
  	return false;
}
