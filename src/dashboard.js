/**
 * Script de usos freguntes
 */
import { Popover } from 'bootstrap';
import './color-modes.js'

(() => {
  'use strict'

  document.querySelector('#navbarSideCollapse').addEventListener('click', () => {
    document.querySelector('.offcanvas-collapse').classList.toggle('open')
  })


  // Create an example popover
  document.querySelectorAll('[data-bs-toggle="popover"]')
    .forEach(popover => {
      new Popover(popover)
    })

   
})()