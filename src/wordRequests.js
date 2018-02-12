import $ from 'jquery'

const wordsGetTopWord = () => {
  return fetch(`https://wordwatch-api.herokuapp.com/api/v1/top_word`)
  .then(response => handleResponse(response))
}

const handleResponse = (response) => {
  return response.json()
    .then(json => {
      if (!response.ok) {
        const error = {
          status: response.status,
          statusText: response.statusText,
          json
        }
        return Promise.reject(error)
      }
      return json
    })
}

export const topWord = () => {
  wordsGetTopWord()
  .then(word => {
    let wordData = word.word
    let actualWord = Object.keys(wordData)[0]
    let count = wordData[`${actualWord}`]
    $('section.word-data article.top-word h3').append(`${actualWord} (${count})`)
  })
}

export const postWord = (word) => {
  return fetch(`https://wordwatch-api.herokuapp.com/api/v1/words`, {
    method: `POST`,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ word: { value: `${word}` } })
  })
  .then(response => {
    handleResponse(response)
  })
}
