// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let errorMessage = document.querySelector('#modal')
errorMessage.className = 'hidden'

let allHearts = document.querySelectorAll('.like-glyph')

function likeHeart(heart) {
  heart.innerText = FULL_HEART
}

allHearts.forEach(heart => addEventListener("click", function() {
  mimicServerCall()
   .then(likeHeart(heart))
   .catch()
}))























//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
