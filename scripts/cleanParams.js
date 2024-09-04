'use strict'

document.addEventListener('DOMContentLoaded', function () {
    /* I need a small js instruction to redirect without params, precisely like google does */
    document.getElementById('lucky-btn')?.addEventListener('click', event => {
        event.preventDefault()
        window.location.href = 'https://doodles.google/'
    })
})
