$(window).scroll(startCounter);
function startCounter() {
    if ($(window).scrollTop() > 200) {
        $(window).off("scroll", startCounter);
        $('.counter').each(function () {
            var $this = $(this);
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 4000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
    }
}

const myDate = new Date();
var currDay = myDate.getDate();
const x = 16;

if((x-currDay)>0){
  currDay = (x-currDay) + 30;
}
else if((x-currDay) == 0){
  currDay = 30;
}
else if((x-currDay) < 0){
  currDay = 30 - (currDay - 16 );
}

currDay = currDay + " Days to go."

$(".btn_01").html(currDay);
