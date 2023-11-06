(function() {
    const faq = document.querySelectorAll('.question-block');


    faq.forEach(element => {
        element.addEventListener('click', ()=> {            
            element.parentNode.querySelector('.answer').classList.toggle('active');
            element.parentNode.querySelector('.open-answer').classList.toggle('active');
               
        })}
    );
}());