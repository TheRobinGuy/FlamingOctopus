"use strict"
$(document).ready(function(){
    console.log("Document Loaded");
    
    $.ajax({
        url: 'https://api.darksky.net/forecast/da3446444c06189f7f6a7a9cb0727927/37.8267,-122.4233',
        type: "GET",
        dataType: "json",
        success: function(data) {
            alert(data);
        }
    });
});
