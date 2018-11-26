function toRoman(input) {
  const ribuan = ["", "M", "MM", "MMM"]
  const ratusan = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
  const puluhan = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
  const satuan = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
  const numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  let numberStr = String(input)
  let index = numbersArr.indexOf(numberStr[0])

  switch (numberStr.length) {
    case 1:
      return satuan[index]
      break;

    case 2:
      return puluhan[index] + toRoman(numberStr.slice(1, numberStr.length))
      break;

    case 3:
      return ratusan[index] + toRoman(numberStr.slice(1, numberStr.length))
      break;

    case 4:
      return ribuan[index] + toRoman(numberStr.slice(1, numberStr.length))

      break;
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
