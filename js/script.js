var request = new XMLHttpRequest();
request.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json",
  true
);
request.send();
request.onload = function () {
  var data = JSON.parse(request.response);
  console.log(data);
  /* for (let i = 0; i < data.length; i++) {
    console.log(
      data[i].name + " " + data[i].latlng[0] + " " + data[i].latlng[1] 
    );} */
  for (var i in data) {
    try {
      var name = data[i].name;
      var lang = data[i].latlng;
      if (lang.length === 0) throw new Error("Longitudes not found");
      wd(name, ...lang);
    } catch (e) {
      console.log("Invalid Coordinates" + name + " " + e.message);
    }
  }
  // function wd()
};

function wd(name, lat, lon) {
  // console.log(name);
  // console.log(lat);
  // console.log(lon);
  var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=73e5a49500029e2102cd5cca9da7d40c`;
  var request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.send();
  request.onload = function () {
    var data = JSON.parse(request.response);
    console.log(`${name}-${data.main.temp}`);
  };
}
