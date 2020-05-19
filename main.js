window.addEventListener('DOMContentLoaded', init);

function init(e){

    // form validation
    const [form, input, error] = [document.querySelector('form'), document.querySelector('input'), document.querySelector('.error')];

    form.addEventListener('submit', function(e){
        if(input.value === ''){
            e.preventDefault();
            error.textContent = 'Looks like you forgot to enter your email';

        }else{
            error.textContent = '';
        }
    })
    

    input.addEventListener('keyup', function(e){
        if(input.value.indexOf('@') === -1){
            e.preventDefault();
            error.textContent = `Uhhh... doesn't look like an email`;
            
        }else{
            error.textContent = '';
        }
    })











        // menu
        const [open, close, menu, overlay] = [document.querySelector('#menu-btn'), document.querySelector('#close'), document.querySelector('#menu'), document.querySelector('.body_overlay')];

        open.addEventListener('click', function(e){
            this.classList.add('hide');
            close.classList.remove('hide');

            // overlay
            overlay.classList.remove('hide');
            overlay.classList.add('fade_in');
    
            // menu show
            menu.classList.remove('hide');
            menu.classList.add('show_menu');
    
            setTimeout(() => {
                menu.style.transform = 'scale(1)';
                menu.classList.remove('show_menu');

                // overlay
                overlay.classList.remove('fade_in');
            }, 400);
        })
        
        
        // close menu
        close.addEventListener('click', hide);
    
        const links = document.querySelectorAll('#menu a');
    
        links.forEach(link => {
            link.addEventListener('click', hide);
        })
        
    
    
        function hide(e){
            close.classList.add('hide');
            open.classList.remove('hide');

            // overlay hide
            overlay.classList.add('fade_out');
            
    
            menu.classList.add('hide_menu');
    
            setTimeout(() => {
                menu.style.transform = 'scale(0)';
                menu.classList.add('hide');
                menu.classList.remove('hide_menu');

                // overlay
                overlay.classList.add('hide');
                overlay.classList.remove('fade_out');
            }, 400);
        }
    




        // slides
        const [one, two, three, four] = [document.querySelector('#anisha'), document.querySelector('#ali'), document.querySelector('#richard'), document.querySelector('#shanai')]
        

        // event
       
    
}