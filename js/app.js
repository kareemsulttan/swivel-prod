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

// show password
const passInput = document.querySelectorAll('.with-show-hide-pass');

function showPass() {
  passInput.forEach((x) => {
    if (x.type === "password") {
      x.type = "text";
      $('.right-btn-icon').css('opacity', 'initial')
    } else {
      x.type = "password";
      $('.right-btn-icon').css('opacity', '.5')
    }
  })
};

/* Start SMS Code input logic */

const fieldset = document.querySelector(".validation");
const fields = document.querySelectorAll(".validation .form-control");

function handleInputField({ target }) {
  const value = target.value.slice(0, 1);
  target.value = value;

  const step = value ? 1 : -1;
  const fieldIndex = [...fields].findIndex((field) => field === target);
  const focusToIndex = fieldIndex + step;

  if (focusToIndex < 0 || focusToIndex >= fields.length) return;

  fields[focusToIndex].focus();

}
fields.forEach((field) => {
  field.addEventListener("input", handleInputField);
});

/* End SMS Code input logic */

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

// change the next link if the reason (no) radio is checked
const ableToHireForm = document.getElementById('able-to-hire-radio-form');
const notAble = document.getElementById('not-able');
const changeableNext = document.getElementById('conditional-next');
ableToHireForm.addEventListener('click', function() {
  if(notAble.checked) {
    changeableNext.dataset.target = '#job-survey-step-2-2'
  } else {
    changeableNext.dataset.target = '#job-survey-step-1-2'
  }
})

// open texterea if other reason selected
const stepTow = document.getElementById('step-2-2-form')
const reasonFour = document.getElementById('reason-4')
const otherReason = document.getElementById('other-reason-text')
stepTow.addEventListener('click', function() {
  if(reasonFour.checked) {
    otherReason.classList.remove('hidden-textarea')
  } else {
    otherReason.classList.add('hidden-textarea')
  }
})

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

const shrinkBtn = document.getElementById('shrink-btn');

shrinkBtn.addEventListener('click', function() {
  $('.chat-right-side').toggleClass('active')
  $('.chat-left-side').toggleClass('chat-left-side-space')
  $('.expand-toggle').toggleClass('d-none')
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

$(".job-card").click(function(){
  window.location=$(this).find("a").attr("href"); return false;
});

