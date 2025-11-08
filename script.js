const wrapper = document.querySelector('.wrapper');
const signUpLink = document.querySelector('.sign-up');
const btnWrapper = document.getElementById('btn-wrapper');

function changeColor(color) {
  const bgAnimate = document.getElementById('bg-animate');
  const curved = document.getElementById('curved');

  bgAnimate.style.background = color;
  curved.style.background = color;
  bgAnimate.classList.add('active');

  setTimeout(function () {
    bgAnimate.classList.remove('active');
  }, 1200);
}

const colors = document.querySelectorAll('.color');

function activeLink() {
  colors.forEach((item) => item.classList.remove('active'));
  this.classList.add('active');
  const selectedColor = this.getAttribute('data-color');
  document.body.style.backgroundColor = selectedColor;
  
}

colors.forEach((circle) => {
  circle.addEventListener('click', activeLink);
});



const signUpBtn = document.querySelector('.sign-up');
const loginBtn = document.querySelector('.login-input');

signUpBtn.addEventListener('click', (e) => {
  e.preventDefault();
  wrapper.classList.add('active');
});

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  wrapper.classList.remove('active');
});


//REGISTRAZIONE
let registeredUsername = [];
let registeredPassword = [];

function register(){
  const username  = document.getElementById('usernameText').value;
  const password = document.getElementById('passwordText2').value;

  if(username === registeredUsername && password === registeredPassword){
    showPopup();
    messaggio.innerHTML = 'Utente gia registrato! Accedi';
    return false;
  }
  else if(username === '' || password === ''){
    alert('Compila tutti i campi!');

  }else{
    registeredUsername = username;
    registeredPassword = password;
    
    
    setTimeout(()=>{
      btnWrapper.style.transition = 'width 3s ease-in-out';
      btnWrapper.style.width = '100%';
    }, 600);

    btnWrapper.addEventListener('transitionend',()=>{
      showPopup();
      messaggio.style.fontSize = '1.6rem';
      messaggio.innerHTML = 'Registrazione effettuata con successo! Accedi.'
      return true;
    });
  }
}

//LOGIN
function login(){
  const username = document.getElementById('usernameText1').value;
  const password = document.getElementById('password').value;

  if(username === '' || password === ''){
    showPopup();
    messaggio.innerHTML = 'Compila tutti i campi';

  }else if(username === registeredUsername && password === registeredPassword){
    showPopup();
    messaggio.innerHTML = 'Login effettuato con successo!';
  }else {
    wrapper.style.transform = 'scale(0)';
    showPopup();
    messaggio.innerHTML = 'Username o password errati! o se non sei registrato registrati';
    
  }
}



const popup = document.getElementById('popupWrapp');
function closePopup(){
  popup.style.transition = 'opacity 0.5s ease';
  popup.style.opacity = '0';

  popup.style.pointerEvents = 'none';
  wrapper.style.transition = 'transform 1s ease';
  wrapper.style.display = 'flex';
  wrapper.style.transform = 'scale(0)';
  btnWrapper.style.width = '0%';


  setTimeout(function () {
    wrapper.style.transition = 'transform 1s ease';
    wrapper.style.display = 'flex';
    wrapper.style.transform = 'scale(1) rotateY(360deg)';
  }, 500);
}



const messaggio = document.getElementById('messaggio');
function showPopup(){
  wrapper.style.transition = 'transform 1s ease';
  wrapper.style.display = 'none';
  wrapper.style.transform = 'scale(0)';
  popup.style.transition = 'transform 0.4s ease';
  popup.style.transform = 'scale(1)';
  popup.style.opacity = '1';
  popup.style.display = 'flex';
  popup.style.pointerEvents = 'auto';
}










