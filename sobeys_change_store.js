$btn = document.querySelector('div.combo-right div.palm--hide a.button')
console.log($btn)
var currentStoreNum = parseInt(getFromCache('step'))
if (currentStoreNum > 450){

} else if ($btn){
  var openStores = localStorage['open_stores']
  if (!openStores)
    openStores = []
  else
    openStores = JSON.parse(openStores)
  openStores.push(currentStoreNum)
  localStorage['open_stores'] = JSON.stringify(openStores)
  $btn.click()
} else {
  // var i = currentStoreNum + 1
  // console.log(i)
  // giveToCache('step', i.toString())
  // console.log(getFromCache('step'))
  // var url = 'https://www.sobeys.com/en/stores/' + (i++)
  // console.log(url)
  // window.location.href = url
  var url = "https://www.sobeys.com/en/flyer?page=1&products%5Bdepartment_id%5D=49&products%5Bq%5D="
      window.location.href = url
}

function giveToCache(item, entity){
  localStorage[item] = JSON.stringify(entity);
}

function getFromCache(item){
  var unparsed = localStorage[item];
  if (unparsed){
    var parsed = JSON.parse(unparsed);
  } else {
    var parsed = 1;
    localStorage[item] = JSON.stringify(1);
  }
  return parsed;
}
