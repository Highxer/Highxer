$(document).ready(function(){

    if(window.location.href.indexOf('reloj') > -1){


        setInterval(function(){   
            var reloj = moment().format("hh:mm:ss");
            $('#reloj').html(reloj);
        },1000);         
    }
        
});