enterKey();
var cityName = "";
function searchCity() 
{
cityName= $("#searchBar").val();
var key ="af600e774dcfe8d4ba99e9a7bf4ced2c";
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q="+cityName+"&appid="+key;

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) { 
    console.log(response);
    searchCity()


//aquiring temperature for 5 day forecast
$("#tempDay1").text(response.list[0].main.temp)
$("#tempDay2").text(response.list[1].main.temp)
$("#tempDay3").text(response.list[2].main.temp)
$("#tempDay4").text(response.list[3].main.temp)
$("#tempDay5").text(response.list[4].main.temp)
//aquiring humidity for 5 day forecast
$("#tempDay1").text(response.list[0].main.humidity)
$("#tempDay2").text(response.list[1].main.humidity)
$("#tempDay3").text(response.list[2].main.humidity)
$("#tempDay4").text(response.list[3].main.humidity)
$("#tempDay5").text(response.list[4].main.humidity)
});
}

function enterKey()
{
    var enterText = $("#searchBar");
    enterText.on("keyup", function(event) {
      if (event.keyCode===13) {
        event.preventDefault();
        cityName = $("#searchBar").val();
        console.log(cityName);
        onload()
      }
    });
}