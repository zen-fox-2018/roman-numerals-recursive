function toRoman(input) {
  let romanDic = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
  let numberDic = [1000,900,500,400,100,90,50,40,10,9,5,4,1 ]
  let number = input
  let result = ""

  let index = numberDic.findIndex(function(element) {
    return element <= number
  })
  result = romanDic[index]
  number = number - numberDic[index]

  if (number === 0) {
    return result
  }
  return result + toRoman(number)
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
