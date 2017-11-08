'use strict';


var tags = [
  {'name': 'My Favorites', 'color': 'orange'},
  {'name': 'Ralphs', 'color': 'pink'}
]

var index = 1;

var couponList = [
  {'title': 'Apples', 'expdate': '2012-10-14', 'tags': ['My Favorites', 'Groceries']},
]


function scanFile(event) {
  var resImage = document.getElementById("fileInput");
  document.getElementById("fileInput").click();
  var file = resImage.files[0];
  window.location.replace("../addcoupon.html");
}

function goBack(event){
  window.location.replace("../coupon.html");
}

function save_data(){
	var list= null;
  if (localStorage.getItem('customCoupons') != null){
    list = JSON.parse(localStorage.getItem('customCoupons'));
  } else {
  	list = couponList;
  }
  console.log('poop');
  var form1 = document.getElementById("frm");
  console.log(form1.elements[0].value);
  console.log(form1.elements[1].value);
  console.log(form1.elements[2].checked);
  console.log(form1.elements[3].checked);
  var arr = [];

  for (var i = 2; i < 4; i++) {
    if(form1.elements[i].checked){
    	arr.push(form1.elements[i].value);
    }
  }

  list.push({'title': form1.elements[0].value, 'expdate': form1.elements[1].value, 'tags': arr});
  localStorage.setItem('customCoupons', JSON.stringify(list));

}
