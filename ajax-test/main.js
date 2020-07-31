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

// create table array TableHeaders
function getTableHeaders(obj) {
  var tableHeaders = [];

  Object.keys(obj).forEach(function(key) {
//  table tableHeaders.push must  be a string literal denoted by `` acent grave '<td>${key}</td>'
      tableHeaders.push(`<td>${key}</td>`);
  });

  return `<tr>${tableHeaders}</tr>`;
}



//added el var to take each output and allow clearing of element on each call
function writeToDocument(type) {
// new var to create table for data
  var tableRows = [];
  var el = document.getElementById("data");
  el.innerHTML ="";

  getData(type, function(data) {
      data = data.results;
//add getTableHeaders()
       //var tableHeaders = getTableHeaders(data[()]);
       var tableHeaders = getTableHeaders(data[0]);
// function to push data element onto table
      data.forEach(function(item) {
        var dataRow =[];
//item [key] obtains value for each data pair
        Object.keys(item).forEach(function(key) {
            dataRow.push(`<td>${item[key]}</td>`);
        });
      tableRows.push(dataRow);
    });
//added tableRows to string litteral
        el.innerHTML = `<table>${tableHeaders}${tableRows}</table>`;
        //el.innerHTML += "<p>" + item.name + "</p>";
    });

  }
