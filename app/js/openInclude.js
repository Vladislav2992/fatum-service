(function (){
    const cliningOptions = document.querySelectorAll('.clining-include');

    if(cliningOptions) {
        cliningOptions.forEach(include => {
            include.addEventListener('click', ()=> include.classList.toggle('active'))
        })
    }   
}());