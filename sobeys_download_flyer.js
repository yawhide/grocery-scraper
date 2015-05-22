var urlStep1 = window.location.href.replace(/%5/g, '')
var urlStep2 = urlStep1.replace(/\D+/g, ',')
var urlStep3 = urlStep2.split(',')
var pageNum = parseInt(urlStep3[1])
var department = parseInt(urlStep3[2])
var arrOfDepartment = [49, 56, 65, 62, 61, 48, 54, 51, 58, 43, 59, 45, 44, 57]
var departmentIndex = arrOfDepartment.indexOf(department)
var $cards = document.querySelectorAll('div.card.flyer-card div.card-top')
var flyerExists = !!document.querySelector('div.card.flyer-card div.card-top')

if(flyerExists){
  var page = []
  var startDate = new Date(document.querySelector('.fancy-heading h3').innerText.split('-')[0] + ' ' + new Date().getFullYear())
  for (var i = 0; i < $cards.length; i++) {
    var c = $cards[i]
    var imgUrl = c.querySelector('img').src
    var title = c.querySelector('h6').innerText
    var amount = c.querySelector('p').innerText
    var savings = c.querySelector('.price-promos') ? c.querySelector('.price-promos').innerText : ''
    var price = c.querySelector('.price-amount').firstChild ? c.querySelector('.price-amount').firstChild.nodeValue : ''
    if (c.querySelector('.price-amount sup')){
      var extra = c.querySelector('.price-amount sup').innerText
      var finalPrice = price + '.' + extra
    } else{
      var finalPrice = c.querySelector('.price-amount').innerText
    }
    console.log(savings)
    // console.log(imgUrl, title, amount, savings, finalPrice)
    var data = {
      img: imgUrl,
      name: title,
      amount: amount,
      savings: savings,
      price: finalPrice,
      department: department,
      startDate: startDate,
    }
    page.push(data)
  };
  var payload = {
    flyer: page,
    store: 'sobeys',
    _id: parseInt(JSON.parse(localStorage['step'])),
  }
  chrome.runtime.sendMessage({
    action: 'xhttp',
    url: 'http://localhost:3000/update',
    data: payload,
  }, function (responseText) {
    if(responseText && responseText.error){
      // do nothing
    } else {
      pageNum++
      var url = "https://www.sobeys.com/en/flyer?page=" + pageNum + "&products%5Bdepartment_id%5D=" + department + "&products%5Bq%5D="
      window.location.href = url
    }
  });
} else if (departmentIndex + 1 === arrOfDepartment.length){
  var i = parseInt(getFromCache('step')) + 1
  giveToCache('step', i.toString())
  var url = 'https://www.sobeys.com/en/stores/' + i
  window.location.href = url
} else{
  var url = "https://www.sobeys.com/en/flyer?page=1&products%5Bdepartment_id%5D=" + arrOfDepartment[departmentIndex+1] + "&products%5Bq%5D="
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
