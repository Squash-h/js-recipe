const number = 100
for (let n = 1; n <= number; n++) {
  if (n % 3 === 0) {
    console.log(`${n}!!!!!!!`)
  } else {
    if (/3/.test(n)) {
      console.log(`${n}!!!!!!!`)
    } else {
      console.log(n)
    }
  }
}
