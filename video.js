//Закрываем окно и слой затемнения
$(document).on('click', 'a.close, #fade', function() { //закрытие по клику вне окна и кнопке закрытия...
  $('#fade , .popup_block').fadeOut(function() {
       $('#fade, a.close').remove(); //При нажатии закрывается окно и видео останавливается
   document.location.reload();
   });
    return false;
   });
});