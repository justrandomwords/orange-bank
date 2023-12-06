const CryptoJS = require('crypto-js');

function textToNumber(text) {
  const hash = CryptoJS.SHA256(text).toString(CryptoJS.enc.Hex);
  const numericHash = parseInt(hash.substring(0, 8), 16); 
  const maxValue = 999999; 
  const scaledNumber = numericHash % maxValue;

  return scaledNumber; 
}

function colorsByText(text) {
  const valuesArray = textToNumber(text)
    .toString()
    .padStart(6, '0')
    .match(/(\d)(\d)(\d)(\d{3})/)
    .slice(1)
    .map(element => +element)

  return {
    h: Math.floor(valuesArray[3] / 999 * 360),
    w: valuesArray[2],
    b: valuesArray[1],
    siqn: valuesArray[0] % 2 == 0 ? 1 : -1,
  }
}

export function getTwoSimilarColorsHWB(text) {
  const colorsProperties = colorsByText(text)

  const firstColor = getRandomColor(colorsProperties);
  const secondColor = getSimilarColor(colorsProperties);

  return [ ToHWB(firstColor), ToHWB(secondColor) ]
}

export function getRandomColor(colorsProperties) {
    const h = colorsProperties.h; 
    const w = colorsProperties.w;
    const b = colorsProperties.b;
    
    return { h, w, b};
}
//360 10 10 2
// _3_1_1_1_  
export function getSimilarColor(colorsProperties) {
  const koeficient = colorsProperties.siqn * 40;

  let h = Math.floor(colorsProperties.h + koeficient); 
  h = h < 0 ? -h : h; 
  const w = colorsProperties.w + 20;

  return { ...colorsProperties, h, w }
}

export function ToHWB(color) {
  return `hwb(${color.h} ${color.w}% ${color.b}%)`;
}