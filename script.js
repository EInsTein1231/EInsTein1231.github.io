


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}





const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick(event) {
  // 👇️ if you are submitting a form (prevents page reload)
  event.preventDefault();

  const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

  // Send value to server
  console.log(emailInput.value);
  console.log(passwordInput.value);

  // 👇️ clear input field
  emailInput.value = '';
  passwordInput.value = '';
});


function display() { 
  var email = document.getElementById("email").value;
  alert(email);
  var password = document.getElementById("password").value;
  alert(password);
}



