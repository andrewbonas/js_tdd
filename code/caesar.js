const caesar = (pos, str) => {
  const letterArray = "abcdefghijklmnopqrstuvwxyz".split("");
  let result = "";

  for(let i = 0; i < str.length; i++) {
    const char = str[i];
    const index = letterArray.indexOf(char);

    if (index === -1) {
      result += char;
      continue;
    }
    const caesarIndex = (index + pos) % 26;
    result += letterArray[caesarIndex];
  }
  return result
}


module.exports = caesar;