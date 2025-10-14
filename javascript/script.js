$(document).ready(function() {

    $('#mobile_btn') .on('click', function() {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-bars fa-times');
    });

    const sections = $('section');
    const navitems = $('.nav_item');
  $(window).on('scroll', function() {

    const header = $('header');
    const scroll= $(window).scrollTop() - header.outerHeight();
    let ActiveSectionIndex = 0;

    if(scroll <= 0) {
        header.css('box-shadow', 'none'); 
    } else{
        header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
    }

}) 
});
  scrollreveal().reveal('#cta', {
      origin: 'left',
      distance: '20%',
      duration: 2000,
  });