export function getTwoSimilarColorsHWB() {
  const firstColor = getRandomColor();
  const secondColor = getSimilarColor(firstColor);

  return [ ToHWB(firstColor), ToHWB(secondColor) ]
}

export function getRandomColor() {
    // const koeficient = (Math.random() - 0.5) * 40;
  
    let h = Math.floor((Math.random() * 360)); 
    h = h < 0 ? -h : h; 
  
    const w = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
  
    return { h, w, b};
}
  
export function getSimilarColor(color) {
  const koeficient = (Math.random() < 0.5 ? 1 : -1) * 40;

  let h = Math.floor(color.h + koeficient); 
  h = h < 0 ? -h : h; 
  const w = color.w + 20;

  return { ...color, h, w }
}

export function ToHWB(color) {
  return `hwb(${color.h} ${color.w}% ${color.b}%)`;
}