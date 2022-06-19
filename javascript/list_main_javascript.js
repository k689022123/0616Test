var playlist = document.querySelectorAll('.main__list__button > a > span');
var playlistOne = document.querySelector('.playlist01');
var playlistTwo = document.querySelector('.playlist02');
var playlistThree = document.querySelector('.playlist03');
var playlistFour = document.querySelector('.playlist04');

var recommendedArea = document.getElementById('recommended__area');
var mainMusicTitle = document.querySelector('.main__music__title');

var playlistClickOne = function () {
  playlist.forEach(function (element) {
    element.classList.remove('active');
  });
  playlistOne.classList.add('active');
};

var playlistClickTwo = function () {
  playlist.forEach(function (element) {
    element.classList.remove('active');
  });
  playlistTwo.classList.add('active');
};
var playlistClickThree = function () {
  playlist.forEach(function (element) {
    element.classList.remove('active');
  });
  playlistThree.classList.add('active');
};

var playlistClickFour = function () {
  playlist.forEach(function (element) {
    element.classList.remove('active');
  });
  playlistFour.classList.add('active');
};

playlistClickOne();

var recommendedArea = document.getElementById('recommended__area');
var mainMusicTitle = document.querySelector('.main__music__title');
const scroller = document.getElementById('scroller');

/*function scrollX() {
  if (recommendedArea.scrollLeft > 0) {
    mainMusicTitle.style.left += recommendedArea.scrollLeft;
  }
}

scroller.scrollTo(scroller.scrollWidth);*/
