function toRoman(input) {
  let numStr = String(input)
  let number = input
  let ribuanDic = ["","M","MM","MMM"]
  let ratusanDic = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"]
  let puluhanDic = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"]
  let satuanDic = ["","I","II","III","IV","V","VI","VII","VIII","IX"]
  let result = ""

  if (numStr.length === 4) {
    result = ribuanDic[Number(numStr[0])]
    let pengurang = Math.floor(number/1000)*1000
    return result + toRoman(number - pengurang)
  }
  else if (numStr.length === 3) {
    result = ratusanDic[Number(numStr[0])]
    let pengurang = Math.floor(number/100)*100
    return result + toRoman(number - pengurang)
  }
  else if (numStr.length === 2) {
    result = puluhanDic[Number(numStr[0])]
    let pengurang = Math.floor(number/10)*10
    return result + toRoman(number - pengurang)
  }
  else if (numStr.length === 1) {
    result = satuanDic[input]
    return result
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
