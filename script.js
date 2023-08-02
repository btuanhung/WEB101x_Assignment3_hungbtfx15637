'use strict';

// Hiển thị thông tin lý lịch
const checkInfo = function (anybtn, anyEL) {
  if (anyEL.classList.contains('hide')) {
    anyEL.classList.remove('hide');
    anybtn.textContent = 'View Less';
  } else {
    anyEL.classList.add('hide');
    anybtn.textContent = 'View More';
  }
};

// Event hiển thị nút View Mores
const addevent = function (ElTitle, anybtn) {
  ElTitle.addEventListener('mouseover', () => {
    anybtn.style.display = 'block';
  });

  ElTitle.addEventListener('mouseleave', () => {
    anybtn.style.display = 'none';
  });
};

// Kiểm tra email để hiển thị thông tin các nhân
const check = function (email, warn_text, emailCheck, hiddentext) {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regex.test(email.value)) {
    email.classList.add('hide');
    warn_text.classList.add('hide');
    emailCheck.classList.add('hide');
    hiddentext.classList.remove('hide');
  } else {
    warn_text.textContent = 'Email chưa đúng, xin hãy nhập lại!';
  }
};

/* khai báo các biến */
// Thông tin các nhân -- Information
let email = document.querySelector('.inputEmail');
let hiddentext = document.querySelector('.p-info');
let emailCheck = document.querySelector('.checkemail');
let warn_text = document.querySelector('.p-form-result');
7;

// Lý lịch -- Kinh nghiệm
let expTitle = document.querySelector('.experiences');
let exp_info = document.querySelector('.exp');
let btnExp = document.querySelector('.btn-experience');

// Lý lịch -- Học vấn
let eduTitle = document.querySelector('.educations');
let edu_info = document.querySelector('.edu');
let btnEdu = document.querySelector('.btn-educations');

// Hoạt động -- Activities
let actTitle = document.querySelector('.activities');
let act_info = document.querySelector('.acts');
let btnAct = document.querySelector('.btn-activities');

// Sở thích -- Interests
let intsTitle = document.querySelector('.interests');
let ints_info = document.querySelector('.ints');
let btnInts = document.querySelector('.btn-interests');

// Ngôn ngữ - Languages
let langTitle = document.querySelector('.languages');
let lang_info = document.querySelector('.lang-desc');
let btnLang = document.querySelector('.btn-language');

// Kỹ năng -- Personal Skills
let skillTitle = document.querySelector('.p-skills');
let skill_info = document.querySelector('.skills');
let btnSkill = document.querySelector('.btn-p-skill');

/* Sử dụng DOM xử lý các event */
// Xử lý kiểm tra email, hiển thị thông tin cá nhân
emailCheck.addEventListener('click', function () {
  check(email, warn_text, emailCheck, hiddentext);
});

// Kinh nghiệm -- Experiences
btnExp.addEventListener('click', () => {
  checkInfo(btnExp, exp_info);
});
addevent(expTitle, btnExp);

// Học vấn -- Educations
btnEdu.addEventListener('click', () => {
  checkInfo(btnEdu, edu_info);
});
addevent(eduTitle, btnEdu);

// Hoạt động -- Activities
btnAct.addEventListener('click', () => {
  checkInfo(btnAct, act_info);
});
addevent(actTitle, btnAct);

// Sở thích -- Interests
btnInts.addEventListener('click', () => {
  checkInfo(btnInts, ints_info);
});
addevent(intsTitle, btnInts);

// Ngôn ngữ - Languages
btnLang.addEventListener('click', () => {
  checkInfo(btnLang, lang_info);
});
addevent(langTitle, btnLang);

// Kỹ năng -- Personal Skills
btnSkill.addEventListener('click', () => {
  checkInfo(btnSkill, skill_info);
});
addevent(skillTitle, btnSkill);
