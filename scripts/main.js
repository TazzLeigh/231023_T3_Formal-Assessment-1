// When the document loads
$(document).ready(function(){

    console.log("Hello");

    // -----------------------------------------
    // Home Page

    // When the document loads, animate the hero image upwards
    $(".hero-image").animate({top: '-=100px'});

    // -----------------------------------------
    // Browse Page

    // Hide all description text from the plant cards
    $("#descriptionText").hide();

  }); 

  // When the card is clicked
  $(".card").click(function(){

    // Toggle the price & description text
    $("#priceText").toggle();
    $("#descriptionText").toggle();

    // Resize the image to fit the additional content
    $(".card-img-top").toggleClass("small");

  });

  //Wishlist Table//
  //Remove Item Button
  $(".btn1").click(function(){
    $("#item1").remove();
    })
  $(".btn2").click(function(){
    $("#item2").remove();
      })
  $(".btn3").click(function(){
    $("#item3").remove();
        })
