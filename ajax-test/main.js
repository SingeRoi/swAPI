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
//return to 1:23 in video 
function writeToDocument(type) {
    getData(type, function(data) {
      console.dir(data);
        document.getElementById("data").innerHTML = data.results;
    });
}

/*function writeToDocument(type) {
  getData(type, function(data) {
      data = data.results;

      data.forEach(function(item) {
        document.getElementById("data").innerHTML += item.name;
    });
  }
}*/
