import { MeshPhongMaterial } from 'three'

/*******************
COLORS
*******************/

const red = new MeshPhongMaterial({
  color: 0xff0000,
  shininess: 100
})

const white = new MeshPhongMaterial({
  color: 0xffffff,
  shininess: 100
})

const black = new MeshPhongMaterial({
  color: 0x000000,
  shininess: 100
})

const blue = new MeshPhongMaterial({
  color: 0x0000ff,
  shininess: 100
})

const yellow = new MeshPhongMaterial({
  color: 0xffff00,
  shininess: 100
})

/*******************
LOGIC
*******************/

export const wireCount = ['3','4','5','6']

export const wireCountCases = {
  '3': [
    {
      colors: [red,white,blue],
      correct: 2
    },
    {
      colors: [red,blue,red],
      correct: 2
    },
    {
      colors: [white,white,blue],
      correct: 1
    },
    {
      colors: [blue,blue,red],
      correct: 1
    },
    {
      colors: [white,red,white],
      correct: 1
    },
    {
      colors: [blue,red,white],
      correct: 1
    }],
  // '4': [],
  // '5': [],
  // '6': []
}



