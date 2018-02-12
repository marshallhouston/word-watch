import $ from 'jquery'
import { postWord } from './wordRequests'
import { dataCleaner } from './dataCleaner'

export const Listeners = {

  breakDownClick: () => {
    $('section.text-submission button').on('click', event => {
      event.preventDefault()
      let separated = dataCleaner.onlyLetters(getInput())
      separated.forEach(word => postWord(word))
      let formattedWords = dataCleaner.allLowerCase(separated)
      renderWords(formattedWords)
    })
  },

  breakDownEnter: () => {
    $(document.body).keydown(event => {
      let key = event.which
      if (key == 13) {
        $('section.text-submission button').click()
        return false
      }
    })
  },
}

const renderWords = (formattedWords) => {
  let unique = dataCleaner.uniqueWords(formattedWords)
  let words = Object.keys(unique)
  words.forEach((word) => {
    let count = unique[`${word}`]
    $('section.word-data article.word-count').append(
      `
      <p style='font-size:${count}em'> ${word} <p>
      `
    )
  })
}

const getInput = () => {
  let textInput = $('section.text-submission textarea').val()
  $('section.text-submission textarea').val('')
  return textInput
}
