/* FOR BUTTONS (NO LONGER USED)
$(document).ready(function(){
    $("#button_coupons").click(function(){
        $(".coupons").show();
        $(".deals").hide();
    });
    $("#button_ads").click(function(){
        $(".deals").show();
        $(".coupons").hide();
    });
});
*/

$(".carousel").swipe({

  swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

    if (direction == 'left') $(this).carousel('next');
    if (direction == 'right') $(this).carousel('prev');

  },
  allowPageScroll:"vertical"

});
