function findShort(s) {
  const list = s.split(" ");
  const listNumber = list.map((word) => {
    return word.length;
  });

  const result = listNumber.sort((a, b) => a - b)[0];
  return result;
}

console.log(
  findShort(
    "Waves Dogecoin Lisk ProofOfWork Lisk Dogecoin Classic BTC 21inc 21inc Dogecoin Mine Dash Ethereu"
  )
);
