$( document ).ready(function() {
  console.log("okay!");
  var API_KEY = ;

  $.getJSON("https://api.meetup.com/2/events?&sign=true&photo-host=public&group_urlname=queensjs&page=20&&key=API_KEY", 
    function (data) {
      console.log(data);
    });

});