//welcome
var nama = prompt("Siapa nama kamu?", "");
        // document.write("<p>Hello "+ nama +"</p>");
        document.getElementById('user').innerHTML = nama;

        
//navigasi bar
const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});

//form validation
function formValidation(){
    let name = document.getElementById('name').value;
    let date = document.getElementById('date').value;
    let gender = document.getElementById('gender').value;
    let message = document.getElementById('message').value;

    var dt = new Date();
    document.getElementById("tanggalwaktu").innerHTML = dt.toLocaleString();

    if (name == '') {
      alert('formnya kosong');
    }
    else {
      document.getElementById('nama').innerHTML = name;
    }
    if (date == '') {
      alert('belum dipilih');
    }
    else {
      n =  new Date();
      y = n.getFullYear();
      m = n.getMonth() + 1;
      d = n.getDate();
      document.getElementById('tanggal').innerHTML = m + "/" + d + "/" + y ;
    }
    if (gender == '') {
      alert('belum dipilih');
    }
    else if (gender == 'laki-laki') {
      document.getElementById('kelamin').innerHTML = gender;
    }
    else if (gender == 'perempuan') {
      document.getElementById('kelamin').innerHTML = gender;
    }

    if (message == '') {
      alert('pesannya kosong');
    }
    else {
      document.getElementById('pesan').innerHTML = message;
    }
    console.log('form-validation')
}

//banner auto slide
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}