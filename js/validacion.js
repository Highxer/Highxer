$(document).ready(function(){

    if(window.location.href.indexOf('contact') > -1){

        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });

         $.validate({
            lang: 'es',
            errorMessagePosition:'top',
            scrollToTopOnError:'True' 
    });         
    }
});




