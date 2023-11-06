(function () {
    const individual = document.querySelector('#individual');
    const individualPrices = document.querySelector('.individual-prices');
    const entity = document.querySelector('#entity');
    const entityPrices = document.querySelector('.entity-prices');

    if(individual) {
        individual.addEventListener('click', () => {
            individualPrices.classList.add('active')
            entityPrices.classList.remove('active')
        })
    }

    if(entity) {
        entity.addEventListener('click', () => {
            individualPrices.classList.remove('active')
            entityPrices.classList.add('active')
        })
    }
}());