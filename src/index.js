import $ from 'jquery'
import { Listeners } from './listeners'
import { topWord } from './wordRequests'

$(document).ready(() => {
  topWord()
  Listeners.breakDownClick()
  Listeners.breakDownEnter()
})
