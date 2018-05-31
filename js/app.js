function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var session = "AM";

  if(h == 0){
    h ==12;
  }
if(h > 12){
  h = h-12;
  session = "PM";
}

  var time = h + ":" + m + ":" + s + " " + session ;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

  setTimeout(showTime, 1000);
}
showTime();
