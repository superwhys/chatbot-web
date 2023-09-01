export function parseStringWidth(strWidth) {
  console.log(strWidth);
  let pWidth = strWidth.replace("px", "");
  return parseInt(pWidth);
}

export function isParentWidthLessThanSpecifyWidth(parentWidth, specifyWidth) {
  return parseStringWidth(parentWidth) < specifyWidth;
}
