import {h, init} from 'snabbdom'

//1. hello world

let patch = init([])
let vnode = h('div#container.cls', 'Hello World')

let app = document.querySelector('#app')

let oldVnode = patch(app,vnode)

vnode = h('div', 'Hello Sanbbdom')

patch(oldVnode, vnode)
