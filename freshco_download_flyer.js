var storeName = document.getElementById('NameOfStore').innerText
var flyerPeriod = document.querySelectorAll('tr td')[4].innerText
var items = document.querySelectorAll('tbody tbody')

for (var i = 0; i < items.length; i++) {
  var name = items[i].querySelector('b').innerText
  var nodes = items[i].querySelectorAll('td')[1]
  var span = nodes.querySelector('span')
  if(span){
    for (var i = span.childNodes.length - 1; i >= 0; i--) {
      var childNode = span.childNodes[i]

    };
  }
  nodes.childNodes[nodes.childNodes.length-1].wholeText
};
