export const generateRandom = (number) => {
  if (typeof number !== 'number') parseInt(number)
  return Math.floor(Math.random() * number)
}