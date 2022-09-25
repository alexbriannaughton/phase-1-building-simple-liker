// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const heart = document.querySelectorAll('.like-glyph')

heart.forEach(like => {
  like.addEventListener('click', event => {
    if (like.textContent===FULL_HEART){
      like.classList.remove("activated-heart")
      like.textContent = EMPTY_HEART
    } else {
    mimicServerCall()
    .then(data => console.log(data))
    .then(like.textContent = FULL_HEART, like.classList.add("activated-heart"))
    .catch(error => {
      document.querySelector('#modal').classList.remove("hidden")
      like.classList.remove("activated-heart")
      like.textContent = EMPTY_HEART
      setTimeout(() => {
        document.querySelector('#modal').classList.add("hidden")
      }, 3000)
    })}
  })
})

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
