function toRoman(input) {
  // start your code here
  var ones=["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"]
  var tens=["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "C"]
  var hundreds=["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "M"]

  var str=String(input)

  if(str.length === 1){
    return ones[Number(str[0])-1] 
  } 
  else if(input>=1000){
    var millions= ""
    for(var i=1; i<=Number(str[0]); i++){
      millions += "M" 
    }
    return millions + toRoman(Number(str.slice(1)))
  }
  else if(input>=100){
    return hundreds[Number(str[0])-1] + toRoman(Number(str.slice(1)))
  }
  else if(input>=10){
    return tens[Number(str[0])-1] + toRoman(Number(str.slice(1)))
  }

}

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('4     | IV       | ', toRoman(4))
console.log('9     | IX       | ', toRoman(9))
console.log('23    | XXIII    | ', toRoman(23))
console.log('1453  | MCDLIII  | ', toRoman(1453))
console.log('1646  | MDCXLVI  | ', toRoman(1646))

module.exports = toRoman
