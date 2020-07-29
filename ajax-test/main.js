const baseURL = "https://ci-swapi.herokuapp.com/api/";

function getData(type, cb) {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", baseURL + type + "/");
  xhr.send();

  xhr.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
          cb(JSON.parse(this.responseText));
    }
  };
}
/*/return to 1:23 in video
function writeToDocument(type) {
    getData(type, function(data) {
      console.dir(data);
        document.getElementById("data").innerHTML = data.results;
    });
}*/
//added el var to take each output and allow clearing of element on each call
function writeToDocument(type) {
  var el = document.getElementById("data");
  el.innerHTML ="";
  getData(type, function(data) {
      data = data.results;

      data.forEach(function(item) {
//obtains keys to set up table
        Object.keys(item).forEach(function(key) {
            console.log(key);
        })
        el.innerHTML += "<p>" + item.name + "</p>";
    });
  }
)}
