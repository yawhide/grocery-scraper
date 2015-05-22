// get list of links
// for each link, open the link in a new tab and wait 1 second
var listOfLinks = document.querySelectorAll('a')
for (var i = listOfLinks.length - 1; i >= 0; i--) {
  var link = listOfLinks[i].href
  setTimeout(function (){
    //window.open(link)
  }, i*1000)
}
