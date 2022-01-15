$(document).ready(function() {
    $('.slider').slick({
        arrows:false,
        dots:true,
        appendDots:'.slider-dots',
        dotsClass:'dots'
    });


    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');


    hamberger.addEventListener('click', function() {
        mobileNav.classList.add('open');
    });
    times.addEventListener('click', function() {
        mobileNav.classList.remove('open')
    });


});

// speech to text - name filed

// const btn = document.getElementById("name-mic");  
//     const results = document.getElementById("form-name");  
//     const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;  
//     const recognition = new speechRecognition();  
//     recognition.onstart = function(){  
//     console.log("you can speek now");  
//     }  
//     recognition.onresult = function(event){  
//     var text = event.results[0][0].transcript;  
//     console.log(text);  
//     document.getElementById("form-name").value = text;  
//     }  

// speech to text - message filed
const btn2 = document.getElementById("message-mic");  
    const results2 = document.getElementById("form-message");  
    const speechRecognition2 = window.speechRecognition || window.webkitSpeechRecognition;  
    const recognition2 = new speechRecognition();  
    recognition.onstart = function(){  
    console.log("you can speek now");  
    }  
recognition.onresult = function(event){  
  var text = event.results[0][0].transcript;  
  console.log(text);  
  document.getElementById("form-message").value = text;  
} 