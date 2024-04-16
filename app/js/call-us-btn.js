(function() {
    const callUsBtn = document.querySelector('.call-us');
    
    if(callUsBtn) {
        const phone = callUsBtn.querySelector('.call__phone');
        const whatsapp = callUsBtn.querySelector('.call__whatsapp');
        const close = callUsBtn.querySelector('.call__close');

        callUsBtn.addEventListener('click', (e)=>{
            e.stopPropagation();
            if (!callUsBtn.classList.contains('active')) {
                callUsBtn.classList.add('active')
                phone.classList.add('active')
                whatsapp.classList.add('active')            
            } 
        });

        close.addEventListener('click', (e)=>{
            e.stopPropagation();
            if (callUsBtn.classList.contains('active')) {
                callUsBtn.classList.remove('active')
                phone.classList.remove('active')
                whatsapp.classList.remove('active')            
            } 
        });
    }
})();