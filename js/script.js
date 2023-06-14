
let navbar = document.querySelector('.navbar')
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}


let loginForm = document.querySelector('.login-form')

let searchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}

let themeBtn = document.querySelector('#theme-btn');

themeBtn.onclick = () =>{
    themeBtn.classList.toggle('fa-sun');

    if(themeBtn.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }

};


$('form').submit(function(event) {
    event.preventDefault();
    var query = $('input[name="search"]').val();
    var url = 'https://example.com/api/search?q=' + encodeURIComponent(query);
    // make AJAX request to API
    $.ajax({
      url: url,
      dataType: 'json',
      success: function(data) {
        // process search results
        displayResults(data);
      },
      error: function(xhr, textStatus, errorThrown) {
        console.log('Error: ' + errorThrown);
      }
    });
  });
  

//$('form').submit(function(event) {
  //  event.preventDefault();
    //var query = $('input[name="search"]').val();
    // perform search with query using API or database
  //});



// var swiper = new Swiper(".review-slider", {
//     loop:true,
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//         delay: 5500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//     },
// });