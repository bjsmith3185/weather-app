


  // var apiKey = "7a966b580102119ddbcfa34b8cdafb5b";
  // var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&units=imperial&appid=" + apiKey;


   $("#submit").on("click", function() {
    var city = $("#input").val();
    console.log("this is " + city);
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=7a966b580102119ddbcfa34b8cdafb5b";
    console.log("this is url " + queryURL);


   
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        console.log(response);
        console.log("city: " + response.name);
        console.log("Currently: " + response.weather[0].description);
        console.log("Temperature: " + response.main.temp);
        console.log("Humidity: " + response.main.humidity + "%");
        console.log("Wind speed: " + response.wind.speed);
        console.log("Sunrise: " + response.sys.sunrise);
        console.log("Sunset: " + response.sys.sunset);
        console.log("img: " + " http://openweathermap.org/img/w/" + response.weather[0].icon + ".png")

    $("#city").text("Results for: " + response.name + " , " + response.sys.country);

    $("#current").text("Currently: " + response.weather[0].description);
    $("#temp").text("Temperature: " + response.main.temp);
    $("#humidity").text("Humidity: " + response.main.humidity + "%");
    $("#wind").text("Wind speed: " + response.wind.speed);
    $("#sunrise").text("Sunrise: " + response.sys.sunrise);
    $("#sunset").text("Sunset: " + response.sys.sunset);

    $('#display').html("<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png'>");

     
    });

});

//var icon = ("<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png'>");

//then

