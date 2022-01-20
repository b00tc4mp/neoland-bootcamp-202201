function accum(s) {
  let result = s.split("");
  console.log(result);
  for (let i = 1; i < result.length; i++) {
    return result[i] + s[i];
  }
}

console.log(accum("abcfgh"));
