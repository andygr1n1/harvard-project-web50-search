'use strict'

document.addEventListener('DOMContentLoaded', function () {
    const buttonsContainer = document.getElementById('buttons-container')
    const luckyInput = document.getElementById('lucky-input')

    buttonsContainer?.addEventListener('click', event => {
        if (event.target.id === 'simple-search-btn') {
            luckyInput.disabled = true
        } else if (event.target.id === 'lucky-btn') {
            luckyInput.disabled = false
        }
    })
})
