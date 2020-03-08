var long;
var lat;
var cityName = "";
function searchCity() {
  cityName = $("#searchBar").val();
  //var key ="af600e774dcfe8d4ba99e9a7bf4ced2c"
  //var key = "5495b7f13ab5bdde931c6f4d218ed2e4"
  var key= "4885a852e61e265d64c7bdc240b7beb5"
  var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + key;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    long = response.city.coord.lon;
    lat = response.city.coord.lat;
    //aquiring date
    $("#dateDay1").text(response.list[0].sys.dt_txt)
    $("#dateDay2").text(response.list[1].sys.dt_txt)
    $("#dateDay3").text(response.list[2].sys.dt_txt)
    $("#dateDay4").text(response.list[3].sys.dt_txt)
    $("#dateDay5").text(response.list[4].sys.dt_txt)

    //aquiring temperature for 5 day forecast
    $("#tempDay1").text(response.list[0].main.temp)
    $("#tempDay2").text(response.list[1].main.temp)
    $("#tempDay3").text(response.list[2].main.temp)
    $("#tempDay4").text(response.list[3].main.temp)
    $("#tempDay5").text(response.list[4].main.temp)
    //aquiring humidity for 5 day forecast
    $("#humidDay1").text(response.list[0].main.humidity)
    $("#humidDay2").text(response.list[1].main.humidity)
    $("#humidDay3").text(response.list[2].main.humidity)
    $("#humidDay4").text(response.list[3].main.humidity)
    $("#humidDay5").text(response.list[4].main.humidity)

    //aquiring wind speed
    $("#windDay1").text(response.list[0].wind.speed)
    $("#windDay2").text(response.list[1].wind.speed)
    $("#windDay3").text(response.list[2].wind.speed)
    $("#windDay4").text(response.list[3].wind.speed)
    $("#windDay5").text(response.list[4].wind.speed)

    //aquiring UV Index
    $("#UVDay1").text(response.list[0].main.temp)
    $("#UVDay2").text(response.list[1].main.temp)
    $("#UVDay3").text(response.list[2].main.temp)
    $("#UVDay4").text(response.list[3].main.temp)
    $("#UVDay5").text(response.list[4].main.temp)
  });
}
function enterKey() {
  var enterText = $("#searchBar");
  enterText.on("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      cityName = $("#searchBar").val();
      searchCity();
    }
  });
}
function loadPage() {
  enterKey()
}