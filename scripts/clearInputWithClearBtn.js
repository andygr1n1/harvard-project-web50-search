'use strict'

document.addEventListener('DOMContentLoaded', function () {
    const inputField = document.getElementById('search-input')
    const closeIcon = document.getElementById('close-icon')

    inputField?.addEventListener('input', function () {
        if (inputField.value.trim().length > 0) {
            closeIcon.classList.add('visible')
        } else {
            closeIcon.classList.remove('visible')
        }
    })

    closeIcon?.addEventListener('click', function () {
        inputField.value = ''
        closeIcon.classList.remove('visible')
        inputField.focus()
    })
})
