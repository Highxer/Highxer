$(document).ready(function(){

    //Slider

    if(window.location.href.indexOf('index') > -1){

    $('.galeria').bxSlider({
        auto: true,
        autoControls: true,
        stopAutoOnClick: true,
        pager: true,
        slideWidth: 1200
      });
    }

      //Posts
      if(window.location.href.indexOf('index') > -1){
        var posts = [
          {
            title: 'Prueba de titulo 1',
            date: moment().format("MMMM Do YYYY"),
            content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam vestibulum dolor, eu tincidunt velit porta id. Sed et lorem egestas risus pharetra tempus viverra id quam. Duis sed lacus elementum, finibus nunc ut, elementum est. Phasellus eget finibus enim, ac maximus libero. Suspendisse in eros libero. Maecenas feugiat pellentesque vestibulum. Pellentesque risus odio, laoreet sed neque vel, ultrices sodales lectus."
          },

          {
            title: 'Prueba de titulo 2',
            date: new Date(),
            content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam vestibulum dolor, eu tincidunt velit porta id. Sed et lorem egestas risus pharetra tempus viverra id quam. Duis sed lacus elementum, finibus nunc ut, elementum est. Phasellus eget finibus enim, ac maximus libero. Suspendisse in eros libero. Maecenas feugiat pellentesque vestibulum. Pellentesque risus odio, laoreet sed neque vel, ultrices sodales lectus."
          },
          {
            title: 'Prueba de titulo 3',
            date: new Date(),
            content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam vestibulum dolor, eu tincidunt velit porta id. Sed et lorem egestas risus pharetra tempus viverra id quam. Duis sed lacus elementum, finibus nunc ut, elementum est. Phasellus eget finibus enim, ac maximus libero. Suspendisse in eros libero. Maecenas feugiat pellentesque vestibulum. Pellentesque risus odio, laoreet sed neque vel, ultrices sodales lectus."
          },
          
          {
            title: 'Prueba de titulo 4',
            date: new Date(),
            content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam vestibulum dolor, eu tincidunt velit porta id. Sed et lorem egestas risus pharetra tempus viverra id quam. Duis sed lacus elementum, finibus nunc ut, elementum est. Phasellus eget finibus enim, ac maximus libero. Suspendisse in eros libero. Maecenas feugiat pellentesque vestibulum. Pellentesque risus odio, laoreet sed neque vel, ultrices sodales lectus."
          },

          {
            title: 'Prueba de titulo 5',
            date: new Date(),
            content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam vestibulum dolor, eu tincidunt velit porta id. Sed et lorem egestas risus pharetra tempus viverra id quam. Duis sed lacus elementum, finibus nunc ut, elementum est. Phasellus eget finibus enim, ac maximus libero. Suspendisse in eros libero. Maecenas feugiat pellentesque vestibulum. Pellentesque risus odio, laoreet sed neque vel, ultrices sodales lectus."
          },
        ];

        posts.forEach((item, index) => {
          var post = `
            <article class = "post">
              <h2>${item.title}</h2>
              <span class = "date">${item.date}</span>
              <p>
              ${item.content}
              </p>
              <a href = "#" class = "button-more">Leer más</a>
          
              </article>
            `;
            $("#posts").append(post);
          });
      }

      
        //Scroll arriba


      $('.subir').click(function(e){
        e.preventDefault();

          $('html, body').animate({
            scrollTop: 0
          }, 500);

          return false;
      });

      //Acordeon

      if(window.location.href.indexOf('about') > -1){
        $("#acordeon").accordion();
        console.log("1");
      }
      
});