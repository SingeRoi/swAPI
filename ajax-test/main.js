var xhr = new XMLHttpRequest();

xhr.open("GET",  "https://ci-swapi.herokuapp.com/api/");
xhr.send();


xhr.onreadystatechange = function() {
//  console.log(this.readyState);
  if(this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText);

//    console.log(JSON.parse(this.responseText));
//    document.getElementById('data').innerHTML = this.responseText;
  }
};
setTimeout(function() {
  console.log(data);
}, 500);
