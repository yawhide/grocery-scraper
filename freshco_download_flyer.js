document.querySelector('div.blockUI.blockMsg.blockPage').addEventListener('DOMNodeRemoved', function (ev){
  var storeName = document.querySelector('.name-of-store').innerText
  var flyerPeriod = document.querySelector('#RUNDATES').innerText
  var items = document.querySelectorAll('.PRODUCTLIST_item')
  if(!items.length){
    // window.close()
    return
  }
  for (var i = 0; i < items.length; i++) {
    var item = items[i]
    var price = item.dataset.price
    var url = item.querySelector('.PRODUCTVIEW_thumbnailImage img').src
    var name = item.querySelector('.PRODUCTVIEW_titleLink').innerText
    var saveUntil = item.querySelector('.PRODUCTVIEW_priceSavings span') ?  item.querySelector('.PRODUCTVIEW_priceSavings span').innerText : null
    var fullPrice = item.querySelector('.PRODUCTVIEW_price span').innerText
    var description = item.querySelector('.PRODUCTVIEW_description').innerText
    // var nodes = items[i].querySelectorAll('td')[1]
    // var span = nodes.querySelector('span')
    // if(span){
    //   for (var i = span.childNodes.length - 1; i >= 0; i--) {
    //     var childNode = span.childNodes[i]
    //
    //   };
    // }
    // nodes.childNodes[nodes.childNodes.length-1].wholeText
    console.log(price, url, name, saveUntil, fullPrice, description)
  };
  var pageNum = parseInt(getParameterByName('page'))+1
  window.location.href = 'http://local.flyerservices.com/SOB/FRSH/EN/846dffa1-039c-4d71-b40c-51b59bd8b73f/Product/List?page='+ pageNum +'&storeId=f9c037c1-56dd-42e4-897f-de5565dcde0c&morePublications=false'
})


function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
