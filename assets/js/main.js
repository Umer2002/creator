$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll >= 100) {
      //clearHeader, not clearheader - caps H
      $("nav").addClass("header-white");
  }else{
      $("nav").removeClass("header-white");
  }
}); //missing );



// search-box open close js code
// let navbar = document.querySelector(".navbar");
// let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

// searchBox.addEventListener("click", ()=>{
//   navbar.classList.toggle("showInput");
//   if(navbar.classList.contains("showInput")){
//     searchBox.classList.replace("bx-search" ,"bx-x");
//   }else {
//     searchBox.classList.replace("bx-x" ,"bx-search");
//   }
// });

$("#search-ico").click(function(){
$(".navbar").toggleClass("showInput")

})
$("#close-ico").click(function(){
  $(".navbar").toggleClass("showInput")
})

// sidebar open close js code
// let navLinks = document.querySelector(".nav-links");
// let menuOpenBtn = document.querySelector(".navbar .bx-menu");
// let menuCloseBtn = document.querySelector(".nav-links .bx-x");
// menuOpenBtn.onclick = function() {
// navLinks.style.left = "0";
// }
// menuCloseBtn.onclick = function() {
// navLinks.style.left = "-100%";
// }


// sidebar submenu open close js code
// let htmlcssArrow = document.querySelector(".htmlcss-arrow");
// htmlcssArrow.onclick = function() {
//  navLinks.classList.toggle("show1");
// }
// let moreArrow = document.querySelector(".more-arrow");
// moreArrow.onclick = function() {
//  navLinks.classList.toggle("show2");
// }
// let jsArrow = document.querySelector(".js-arrow");
// jsArrow.onclick = function() {
//  navLinks.classList.toggle("show3");
// }
$(".bx-menu").click(function(){
  $("#phone-menu").toggleClass("nav-phone");
})

// $(document).ready(function(){

//   if ($(window).width() <= 767) {  
//   $("#phone-links").addClass("sec-box");
//   }  
     
//   if ($(window).width() >= 768) {  
//   $("#phone-links").removeClass("sec-box");
//   }        
//   });