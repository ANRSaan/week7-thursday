let count = 0

const canWin = n => {
  count++

  if (n < 2) {
    return false
  }

  let legalMoves = [2, 3, 5]

  for (let i = 0; i < legalMoves.length; i++) {
    console.log('Iteration:', count, n, legalMoves[i])
    if (!canWin(n - legalMoves[i])) {
      return true
    }
  }
  
  return false
}

const canWin2 = (stones) => {
    let player = 0;
    let winner = false
    while (stones >= 2) {
      if (stones - 2 < 2) {
        stones -= 2;
        player++;
        winner = true
      } else if (stones - 3 < 2) {
        stones -= 3;
        player++
        winner = true
      } else if (stones - 5 < 2) {
        stones -= 5;
        player++;
        winner = true
      } else {
        stones -= 2;
        player++
      }
    }
    return (player % 2 !== 0 && winner === true);
  };