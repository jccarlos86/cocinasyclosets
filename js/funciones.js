$(document).ready(function(){

    $("#menuCocinas").click(function(evt) {
        evt.preventDefault();
        $([document.documentElement, document.body]).animate({
          scrollTop: $("#cocinas").offset().top
        }, 2000);
      });

      $("#menuClosets").click(function(evt) {
        evt.preventDefault();
        $([document.documentElement, document.body]).animate({
          scrollTop: $("#closets").offset().top
        }, 2000);
      });

      $("#menuMantenimiento").click(function(evt) {
        evt.preventDefault();
        $([document.documentElement, document.body]).animate({
          scrollTop: $("#mantenimiento").offset().top
        }, 2000);
      });

      $("#menuMapa").click(function(evt) {
        evt.preventDefault();
        $([document.documentElement, document.body]).animate({
          scrollTop: $("#mapa").offset().top
        }, 2000);
      });


//     var cols = 1;
//     for(var i = 0; i < imgNames.length; i++){
//         var src = "img/"+imgNames[i];
        
//         if(cols == 1){
//             $("#galeria").append('<div id="rowGaleria" class="row pb-5 pt-5"><div class="col-sm-3"><img src="'+ src +'" class="img-thumbnail img-galeria w-50"></div>');
//         }
//         if(cols <= 4){
//             $("#rowGaleria").append('<div class="col-sm-3"><img src="'+ src +'" class="img-thumbnail img-galeria w-50"></div>');
//         }else{
//             $("#galeria").append('</div>');
//             cols = 0;
//         }        
//         cols++;
//     }
});