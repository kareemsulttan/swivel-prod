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



