import Dropdown from 'bootstrap/js/dist/dropdown';

const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
dropdownElementList.map(function (dropdownToggleEl) {
  return new Dropdown(dropdownToggleEl)
})

import Modal from 'bootstrap/js/dist/modal'
Modal(document.querySelector('#exampleModal'), options)
