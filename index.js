var h = require('virtual-dom/h')
var main = require('main-loop')
var loop = main({n: 0}, render, require('virtual-dom'))
document.querySelector('body').appendChild(loop.target)

function render (state) {
  return h('div', [
    h('h1', 'clicked '+ state.n+ ' times'),
    h('button', {onclick: onclick}, 'click me to double!')
    ])
  function onclick() {
    loop.update({n: state.n + 2})
  }
}


