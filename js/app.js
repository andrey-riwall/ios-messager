// CALC WIDTH SECTION.CHAT
var chatWidth = document.querySelector('.chat'); //width chat
var sideBarWidth = document.querySelector('.sidebar').getBoundingClientRect().width //width sidebar
var nomadWidth = document.querySelector('.nomad').getBoundingClientRect().width //width nomad
var scrollpaddingWidth = document.querySelector('.scroll-padding').getBoundingClientRect().width //width scroll-padding
var infoWidth = document.querySelector('.info').getBoundingClientRect().width; //width info
var calcWidth = window.innerWidth - sideBarWidth - nomadWidth - scrollpaddingWidth - infoWidth; //calc
console.log(calcWidth);

chatWidth.style.width = calcWidth + "px";

// ACTIVE FOR ANIMATED DOM
let menuToggle = document.querySelector('.burger'); //rotate arrow in burger
let info = document.querySelector('.info'); //translateX section.info
let chat = document.querySelector('.chat'); //max-width section.chat
let chatContainer = document.querySelector('.chat__container'); //max-width chat__container

menuToggle.onclick = function() { //on click add class "active"
  menuToggle.classList.toggle('active'); //burger
  info.classList.toggle('active'); //section.info
  chat.classList.toggle('active'); //section.chat
  chatContainer.classList.toggle('active'); //chat__container
  calcWidth += infoWidth; //section.chat width
  console.log(calcWidth + '2');
  chatWidth.style.width = calcWidth + "px"; //section.chat add style width
}


// BACKGROUND FOR ACTIVE BUTTON IN CHANNEL
let tagToggle = document.querySelectorAll('.nomad__channels__list__item'); //bg nomad__channels__list__item

for (let i=0; i<tagToggle.length; i++) {

  tagToggle[i].onclick = function() {
    let j = 0;

    while(j < tagToggle.length) {
      tagToggle[j++].className = 'nomad__channels__list__item'; //remove active for item
    }

    tagToggle[i].className = 'nomad__channels__list__item active'; //add active for item
  }

};


// CALC LENGTH FRIENDS
let friends = document.querySelectorAll('.nomad__friends__list__item');
let numberFriends = document.querySelector('.nomad__friends__heading__numbers');
friends.forEach(el => {
  numberFriends.innerHTML = friends.length;
});


// CALC LENGHT CHANNEL
let channels = document.querySelectorAll('.nomad__channels__list__item');
let numberChannels = document.querySelector('.nomad__channels__heading__numbers');
channels.forEach(el => {
  numberChannels.innerHTML = channels.length;
});


// ADD NEW DOM
var lastChild = document.querySelector('#lastChild');

var newChat = document.createElement('div');
lastChild.parentNode.insertBefore(newChat, lastChild.nextElementSibling);
newChat.className = "name";