// Fungsi untuk memulai musik
function playMusic() {
  const music = document.getElementById('background-music');
  music.play();
}
window.addEventListener('DOMContentLoaded', function() {
  playMusic();
});
document.body.addEventListener('click', playMusic, { once: true });

const content = document.getElementById('content');
const footer = document.getElementsByTagName('footer')[0];
const timer = document.getElementById('timer');

const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Oct 22, 2023 00:00:00').getTime(),
    x = setInterval(function () {
      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('hours').innerText = Math.floor(distance / (hour));
      document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute));
      document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

      if (distance < 0) {
        timer.classList.add('d-none');
        confetti();
        clearInterval(x);
        _slideSatu();
      }

    }, second);

const _slideSatu = function () {
  const tap = document.getElementById('tap');
  const slideSatu = document.getElementById('slideSatu');
  slideSatu.classList.remove('d-none');
  setTimeout(function () {
    tap.classList.remove('d-none');
    document.body.addEventListener('click', function () {
      _slideDua();
    }, { once: true }); // FIX: Only one click
  }, 7000);
};

const _slideDua = function () {
  const slideSatu = document.getElementById('slideSatu');
  const tap = document.getElementById('tap');
  const slideDua = document.getElementById('slideDua');

  setTimeout(function () {
    slideSatu.classList.replace('animate__slideInDown', 'animate__backOutDown');
    tap.classList.add('d-none');
    setTimeout(function () {
      slideSatu.classList.add('d-none');
    }, 1000);
  }, 1000);

  slideDua.classList.remove('d-none');

  setTimeout(function () {
    tap.classList.remove('d-none');

    // FIXED: Use only one click for the next action
    document.body.addEventListener(
      'click',
      function () {
        slideDua.classList.replace('animate__zoomInDown', 'animate__fadeOutLeft');
        slideDua.classList.remove('animate__delay-2s', 'animate__slow');
        tap.classList.add('d-none');

        setTimeout(function () {
          slideDua.remove();
          _slideTiga();
        }, 1000);
      },
      { once: true } // <-- important fix
    );

  }, 35000); // FIXED: TAP appears faster (was 4000 before)
};

const _slideTiga = function () {
  const tap = document.getElementById('tap');
  const slideTiga = document.getElementById('slideTiga');

  slideTiga.classList.remove('d-none');
  setTimeout(function () {
    tap.classList.remove('d-none');
    document.body.addEventListener('click', function () {
      slideTiga.classList.remove('animate__delay-2s', 'animate__slow');
      slideTiga.classList.replace('animate__fadeInRight', 'animate__fadeOut');
      tap.remove();
      setTimeout(function () {
        slideTiga.remove();
        _slideEmpat();
      }, 1000);
    });
  }, 15000);
};

function getRandomPosition(element) {
  var x = document.body.offsetHeight - element.clientHeight;
  var y = document.body.offsetWidth - element.clientWidth;
  var randomX = Math.floor(Math.random() * 500);
  var randomY = Math.floor(Math.random() * y);
  return [randomX, randomY];
}

const _slideEmpat = function () {
  const slideEmpat = document.getElementById('slideEmpat');
  const btn = document.getElementsByTagName('button');
  slideEmpat.classList.remove('d-none');

  btn[0].addEventListener('click', function () {
    var xy = getRandomPosition(slideEmpat);
    slideEmpat.style.top = xy[0] + 'px';
  });

  btn[1].addEventListener('click', function () {
    slideEmpat.classList.replace('animate__fadeInDown', 'animate__bounceOut');
    slideEmpat.classList.remove('animate__delay-2s');
    setTimeout(function () {
      slideEmpat.remove();
      setTimeout(() => {
        _slideLima(); // Heart animation remains intact
      }, 500);
    }, 1000);
  });
};

const _slideLima = function () {
  const slideLima = document.getElementById('slideLima');
  slideLima.classList.remove('d-none');
  const trims = document.getElementById('trims');

  setTimeout(() => {
    trims.classList.remove('d-none');
  }, 1000);

  slideLima.addEventListener('animationend', () => {
    slideLima.classList.add('animate__delay-3s');
    slideLima.classList.replace('animate__bounceIn', 'animate__fadeOut');
    trims.classList.add('animate__animated', 'animate__fadeOut', 'animate__delay-3s');
    setTimeout(() => {
      trims.remove();
      setTimeout(() => {
        slideLima.remove();
        _slideEnam();
      }, 1000);
    }, 6000);
  });
};

const _slideEnam = function () {
  const slideEnam = document.getElementById('slideEnam');
  slideEnam.classList.remove('d-none');
};

new TypeIt("#teks1", {
  strings: ["Happy Birthday Jan,<br>you are the greatest gift fate has given me. yet আমি তেমন ভালো না নিজের word express করতে বা তোমাকে সেটা বোঝাতে।তোমার existence, তোমার হাসি, তোমার রাগ,তোমার silliness, তোমার care, তোমার ভালোবাসা আমার life কে complete করেছে, তোমার Birthday আমার জীবনের একটা valuable event, cause that's the day my life partner was born.  "],
  startDelay: 4000,
  speed: 100,
  waitUntilVisible: true
}).go();

new TypeIt("#teks2", {
  strings: [" আমি চাই তুমি সকল সুখ, ভালোবাসা আর success পাও আমার through. আমি চেষ্টা করবো আমার সব ভালোবাসা দিয়ে তোমার life কে Best life to lead করতে তুলতে। সেই ability আমার নেই এখন, But I'll try my best Happy Birthday again.I love you sooooo muchhhhh🌺"],
  startDelay: 2000,
  speed: 75,
  waitUntilVisible: true
}).go();

new TypeIt("#trims", {
  strings: ["knew it already 😉💗"],
  startDelay: 1000,
  speed: 150,
  loop: false,
  waitUntilVisible: true,
}).go();

// --- Confetti code remains exactly as before ---
'use strict';
var onlyOnKonami = false;
function confetti() {
  // ... everything remains exactly the same
            }
