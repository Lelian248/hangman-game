let storageArray = []

const getAPIResponse = async () => {
  const response = await fetch('https://the-trivia-api.com/api/questions')
  const result = await response.json()

  result.map((el) => {
    storageArray.push({
      question: el.question,
      correctAnswer: el.correctAnswer
    })
  })
  //   console.log(result)
}
getAPIResponse()

// console.log(storageArray)

const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
]

alphabet.map((el) => {
  const letter = document.createElement('button')
  letter.setAttribute('class', 'letter')
  letter.setAttribute('id', el)
  letter.innerHTML = el
  document.body.append(letter)
})

const startGame = () => {
  const p = document.createElement('p')
  p.innerHTML = storageArray[0].question
  document.body.append(p)

  checkUserAnswers(storageArray[0].correctAnswer)
}

const checkUserAnswers = (correct) => {
  document.querySelectorAll('.letter').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault()
      if ()
      console.log(e.target.id)
    })
  })
}
