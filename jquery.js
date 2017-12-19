// --------- Nav-bar -------

/*$(document).ready(function() {
  
      $('#navbar').addClass('.navbar-fixed');
      $('#navbar').removeClass('.navbar-fixed');
      //.log to determine when you want the 
      //if you hard code, then use console
      //nav bar to stick.  
      console.log($(window).scrollTop())
    if ($(window).scrollTop() < 100) {
    if ($(window).scrollTop() > 800) {
    }
    }
  $(window).scroll(function () {
  });
});*/





//-----------

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

// --------- Horoscope --------


function aries(){
        $("#aries").toggle("fast");
        $("#taurus").hide();
        $("#gemini").hide();
        $("#leo").hide();
        $("#virgo").hide();
        $("#libra").hide();
        $("#sagitarius").hide();
        $("#scorpio").hide();
        $("#capricorn").hide();
        $("#aquarius").hide();
        $("#pisces").hide();
};

function taurus(){
        $("#aries").hide();
        $("#taurus").toggle("fast");
        $("#gemini").hide();
        $("#cancer").hide();
        $("#leo").hide();
        $("#virgo").hide();
        $("#libra").hide();
        $("#sagitarius").hide();
        $("#scorpio").hide();
        $("#capricorn").hide();
        $("#aquarius").hide();
        $("#pisces").hide();
};

function gemini(){
        $("#aries").hide();
        $("#taurus").hide();
        $("#gemini").toggle("fast");
        $("#cancer").hide();
        $("#leo").hide();
        $("#virgo").hide();
        $("#libra").hide();
        $("#sagitarius").hide();
        $("#scorpio").hide();
        $("#capricorn").hide();
        $("#aquarius").hide();
        $("#pisces").hide();
};

function cancer(){
        $("#aries").hide();
        $("#taurus").hide();
        $("#gemini").hide();
        $("#cancer").toggle("fast");
        $("#leo").hide();
        $("#virgo").hide();
        $("#libra").hide();
        $("#sagitarius").hide();
        $("#scorpio").hide();
        $("#capricorn").hide();
        $("#aquarius").hide();
        $("#pisces").hide();
};

function leo(){
        $("#aries").hide();
        $("#taurus").hide();
        $("#gemini").hide();
        $("#cancer").hide();
        $("#leo").toggle("fast");
        $("#virgo").hide();
        $("#libra").hide();
        $("#sagitarius").hide();
        $("#scorpio").hide();
        $("#capricorn").hide();
        $("#aquarius").hide();
        $("#pisces").hide();
};

function virgo(){
        $("#aries").hide();
        $("#taurus").hide();
        $("#gemini").hide();
        $("#cancer").hide();
        $("#leo").hide();
        $("#virgo").toggle("fast");
        $("#libra").hide();
        $("#sagitarius").hide();
        $("#scorpio").hide();
        $("#capricorn").hide();
        $("#aquarius").hide();
        $("#pisces").hide();
};

function libra(){
        $("#aries").hide();
        $("#taurus").hide();
        $("#gemini").hide();
        $("#cancer").hide();
        $("#leo").hide();
        $("#virgo").hide();
        $("#libra").toggle("fast");
        $("#sagitarius").hide();
        $("#scorpio").hide();
        $("#capricorn").hide();
        $("#aquarius").hide();
        $("#pisces").hide();
};

function sagitarius(){
        $("#aries").hide();
        $("#taurus").hide();
        $("#gemini").hide();
        $("#cancer").hide();
        $("#leo").hide();
        $("#virgo").hide();
        $("#libra").hide();
        $("#sagitarius").toggle("fast");
        $("#scorpio").hide();
        $("#capricorn").hide();
        $("#aquarius").hide();
        $("#pisces").hide();
};

function scorpio(){
        $("#aries").hide();
        $("#taurus").hide();
        $("#gemini").hide();
        $("#cancer").hide();
        $("#leo").hide();
        $("#virgo").hide();
        $("#libra").hide();
        $("#sagitarius").hide();
        $("#scorpio").toggle("fast");
        $("#capricorn").hide();
        $("#aquarius").hide();
        $("#pisces").hide();
};

function capricorn(){
        $("#aries").hide();
        $("#taurus").hide();
        $("#gemini").hide();
        $("#cancer").hide();
        $("#leo").hide();
        $("#virgo").hide();
        $("#libra").hide();
        $("#sagitarius").hide();
        $("#scorpio").hide();
        $("#capricorn").toggle("fast");
        $("#aquarius").hide();
        $("#pisces").hide();
};

function aquarius(){
        $("#aries").hide();
        $("#taurus").hide();
        $("#gemini").hide();
        $("#cancer").hide();
        $("#leo").hide();
        $("#virgo").hide();
        $("#libra").hide();
        $("#sagitarius").hide();
        $("#scorpio").hide();
        $("#capricorn").hide();
        $("#aquarius").toggle("fast");
        $("#pisces").hide();
};

function pisces(){
        $("#aries").hide();
        $("#taurus").hide();
        $("#gemini").hide();
        $("#cancer").hide();
        $("#leo").hide();
        $("#virgo").hide();
        $("#libra").hide();
        $("#sagitarius").hide();
        $("#scorpio").hide();
        $("#capricorn").hide();
        $("#aquarius").hide();
        $("#pisces").toggle("fast");
};