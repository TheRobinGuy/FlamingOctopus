"use strict"
$(document).ready(function() { 

  var proxy = 'https://cors-anywhere.herokuapp.com/'; // -- This Proxy Somehow Gets Around CORS Errors !?!?!
  var apiLinkDS = "https://api.darksky.net/forecast/da3446444c06189f7f6a7a9cb0727927/37.8267,-122.4233";

  $.ajax({
    url: proxy + apiLinkDS,
    success:function(data) { 
        console.log(data);
    }
  });

});
