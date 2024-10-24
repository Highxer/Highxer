$(document).ready(function(){
    
    $("#login form").submit(function(){
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);

      });

      var form_name = localStorage.getItem("form_name");

      if(form_name != null && form_name != "undefined"){
        var about_parrafo = $("#about p");
        about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong>");
        about_parrafo.append("<a href ='#' id ='logout'>Cerrar sesión</a>");

        $("#login").hide();

        $("#logout").click(function(){
          localStorage.clear();
          location.reload();
        });
      }
});