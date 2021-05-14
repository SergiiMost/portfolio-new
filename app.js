const UI = (() => {
  function injectText(value, selector) {
    return new Promise((resolve) => {
      setTimeout(() => {
        document.querySelector(selector).innerHTML = value
        resolve()
      }, 100)
    })
  }

  function pause(msec) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, msec)
    })
  }

  async function printWord(word, selector) {
    for (let i = 0; i < word.length; i++) {
      await injectText(word.substring(0, i + 1), selector)
    }
  }

  async function initTerminal() {
    const resp1 = document.querySelector('.terminal__response-1')
    const resp2 = document.querySelector('.terminal__response-2')
    const carret1 = document.querySelector('.terminal__carret--1')
    const carret2 = document.querySelector('.terminal__carret--2')
    const section2 = document.querySelector('.terminal__text-section--2')
    const section3 = document.querySelector('.terminal__text-section--3')
    await printWord('node', '.terminal__input-1')
    await pause(200)
    resp1.classList.remove('u-d-none')
    carret1.remove()
    section2.classList.remove('u-d-none')
    await pause(500)
    await printWord('console.log("Welcome !!!")', '.terminal__input-2')
    await pause(200)
    carret2.remove()
    resp2.classList.remove('u-d-none')
    section3.classList.remove('u-d-none')
  }

  return {
    initTerminal,
  }
})()

document.addEventListener('DOMContentLoaded', () => {
  const terminal = document.querySelector('.terminal')
  terminal.classList.add('animate__fadeInRight', 'animate__animated', 'animate__slow')
  setTimeout(() => {
    UI.initTerminal()
  }, 2000)
})
