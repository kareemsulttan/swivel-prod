/*app.js*/
$(".selectbox-menu .dropdown-links-list > li > a").click(function () {
  $(".selectbox-menu > .btn").text($(this).text());
});

$('.pagination li a.current-link').on('click', function(){
  $('.pagination li a.current-link.active').removeClass('active');
  $(this).addClass('active');
});


$('.btn-plus, .btn-minus').on('click', function (e) {
  const isNegative = $(e.target).closest('.btn-minus').is('.btn-minus');
  const input = $(e.target).closest('.form-group').find('input');
  if (input.is('input')) {
    input[0][isNegative ? 'stepDown' : 'stepUp']()
  }
})

// add class and remove from others
$('.select-one li').click(function() {
  $(this).addClass('active').siblings().removeClass('active');
});

// add class on click
$('.select-multiple li').click(function() {
  $(this).toggleClass('active');
});

// oprevent collapse
$('.open-all').on('hide.bs.collapse', function (e) {
  e.preventDefault();
});

// open all panels on click
$('.open-all-panel').click(function () {
  $('.open-all.collapse').collapse('show');
  $('h2').removeClass('closed-title')
});

// play video on click
jQuery( document ).ready(function($) {
  $('.tab-video').click(function() {
      this.paused ? this.play() : this.pause();
  });
});