
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  console.log('hello world');

  // compile the template
  var source   = $("#entry-template").html();
  var template = Handlebars.compile(source);

  var parentDiv = $("#couponBook");

  var html = null;
  // start with a simple template
  if (localStorage.getItem('customCoupons') != null){
    html = template((JSON.parse(localStorage.getItem('customCoupons')))[0]);
  } else {
    html = template(couponList[0]);
  }
  
  console.log(html);
  parentDiv.append(html);

  var cl = JSON.parse(localStorage.getItem('customCoupons'));
  for (var i = 1; i < cl.length; i++) {
    var curData = cl[i];
    var curHtml = template(curData);
    parentDiv.append(curHtml);
  }

})
