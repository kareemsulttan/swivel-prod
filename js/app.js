/*app.js*/
$(".selectbox-menu .dropdown-links-list > li > a").click(function () {
  $(".selectbox-menu > .btn").text($(this).text());
});

$('.pagination li a.current-link').on('click', function () {
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
$('.select-one li').click(function () {
  $(this).addClass('active').siblings().removeClass('active');
});

// add class on click
$('.select-multiple li').click(function () {
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
jQuery(document).ready(function ($) {
  $('.tab-video').click(function () {
    this.paused ? this.play() : this.pause();
  });
});


// duplicate page

const duplicateContainer = document.querySelectorAll('.duplicate-form-container')

duplicateContainer.forEach(function (elem) {
  const editContainer = elem.querySelector('.edit-container')
  const editCurrent = elem.querySelector('.edit-current')
  const editValue = elem.querySelector('.edit-value')
  const saveValue = elem.querySelector('.save-value')
  const updatedValue = elem.querySelector('.updated-value')
  const deleteCurrent = elem.querySelector('.delete-current')

  $(editCurrent).click(function () {
    $(this).addClass('d-none');
    $(editValue).addClass('active');
    $(saveValue).addClass('active');
    $(updatedValue).addClass('d-none')
    $(deleteCurrent).addClass('float-right ml-3')
    $(editContainer).css('height', $(editValue).height() + 'px');
    $('#questions .edit-current').addClass('d-none')
  })

  $(saveValue).click(function () {
    $(editValue).removeClass('active');
    $(saveValue).removeClass('active');
    $(updatedValue).removeClass('d-none')
    $(editCurrent).removeClass('d-none')
    $(editContainer).css('height', 'auto');
    $(deleteCurrent).removeClass('float-right ml-3')
    $('#questions .edit-current').removeClass('d-none')
  })
})
const confirmDeleteImg = document.getElementById('confirm-delete-img')
$(confirmDeleteImg).click(function () {
  $('.form__files-container li').hide()
})
const jobsNav = document.querySelectorAll('.create-job-tab-header')
jobsNav.forEach(function (ele) {

})

function changeToSave() {
  const questionNav = document.getElementById('questions-tab')
  const nextBtn = document.getElementById('next-btn')
  if (questionNav.classList.contains('active')) {
    nextBtn.textContent = 'Save'
    nextBtn.classList.remove('disabled')
  }
}
changeToSave();
