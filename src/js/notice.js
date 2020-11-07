import '@pnotify/core/dist/BrightTheme.css';
import { error } from '@pnotify/core';
import getRefs from './refs'

const refs = getRefs()

export function noticeError() {   
  refs.form.innerHTML = ''
  const myNotice = error({
  delay: 1000,
  hide: true,
  sticker: false,
  text: "Too many matches found. Pleas enter a more specific query"});
}