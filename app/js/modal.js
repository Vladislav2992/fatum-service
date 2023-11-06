(function () {
    const modal = document.querySelector('.modal__form-wrapper');

    const buttons = document.querySelectorAll('.btn');
    const closeButtons = document.querySelectorAll('.close-button');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => modal.classList.add('active'))
    })

    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => modal.classList.remove('active'))
    })
}());