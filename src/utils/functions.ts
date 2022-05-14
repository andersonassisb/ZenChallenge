export function handleFeelingIntensity(rate: number) {
  let feel = ''
  switch (rate) {
    case 1:
      feel = 'Slightly'
      break
    case 2:
      feel = 'A Little'
      break
    case 3:
      feel = 'Fairly'
      break
    case 4:
      feel = 'Very'
      break
    case 5:
      feel = 'Extremely'
      break
  }
  return feel
}