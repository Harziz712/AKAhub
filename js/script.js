let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 10000); // Change image every 2 seconds
}

let toggleBtn 
let headerLinks
let body
body=  document.querySelector("#hero")
toggleBtn = document.querySelector("#navlink_toggle")
headerLinks = document.querySelector( ".navbar")

toggleBtn.onclick = () => { 
    if( headerLinks.style.display === "none" ){ 
        headerLinks.style.display = "grid"
    } else{ headerLinks.style.display = "none"}
 }

 body.onclick = () => { 
    if( headerLinks.style.display === "grid" ){ 
        headerLinks.style.display = "none"
    }
 }

//   // Get the message of the new recommendation
//   let recommendation = document.getElementById("new_recommendation");
//  function addRecommendation() {

//   // If the user has left a recommendation, display a pop-up
//   if (recommendation.value != null && recommendation.value.trim() != "") {
//     console.log("New recommendation added");
//     //Call showPopup here

 
//   showPopup(true);
// }
// else{
//   alert("invalid input");
// }
// }


// function showPopup(bool) {
//   if (bool) {
//     document.getElementById('popup').style.visibility = 'visible'
//   } else {
//     document.getElementById('popup').style.visibility = 'hidden'
//   }
  
// }

let newLetter = document.querySelector("#new_email");
let popup = document.querySelector("#popup");
let emailBtn = document.querySelector("#email_btn");
let confirmBtn = document.querySelector("#confirmbtn");

emailBtn.onclick = () => { 
  if (newLetter.value != null && newLetter.value.trim() != "") {
    console.log("New recommendation added");
    //Call showPopup here

 
  showPopup(true);
}
else{
  alert("invalid input");
}

}

confirmBtn.onclick  = () => { 
  popup.style.visibility = 'hidden'
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
  
}


