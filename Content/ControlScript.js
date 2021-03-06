"use strict"
$(document).ready(function() { 
    $("#Submit").click(function(){
        var Lat = $("#LatitudeText").val();    
        var Long = $("#LongitudeText").val();
        console.log("Lat: " + Lat + " Long: " + Long);
        var proxy = "https://cors-anywhere.herokuapp.com/"; // -- This Proxy Somehow Gets Around CORS Errors !?!?!
        var apiLinkDS = "https://api.darksky.net/forecast/da3446444c06189f7f6a7a9cb0727927/" + Lat + "," + Long + "";
        //"https://api.darksky.net/forecast/da3446444c06189f7f6a7a9cb0727927/37.8267,-122.4233";
        myMap(); //Execute Maps Refresh
          $.ajax({
            url: proxy + apiLinkDS,
            success:function(data) { 
                console.log(data);
                var imgSrc = data.currently.summary;      
                var tempF = data.currently.temperature;
                var location = data.timezone.split('/')[1];
                console.log(location);
                //Converting From °F to °C
                var tempC = (tempF - 32) * (5/9);
                $("#output").text("It will be " + imgSrc + " in " + location + ".\nIt is " + Math.round(tempC) + " °C.");
            }
          });
    });
});
