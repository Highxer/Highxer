$(document).ready(function(){
    //SELECTOR DE TEMA

    var theme = $("#theme");

    $("#to-orange").click(function(){
      theme.attr("href", "css/orange.css")
    });

    $("#to-red").click(function(){
      theme.attr("href", "css/red.css")
    });

    $("#to-blue").click(function(){
      theme.attr("href", "css/blue.css")
    });
});