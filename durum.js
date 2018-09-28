$(document).ready(function(){
  var bölge = "Turkiye";
  var bolgeara = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + bölge + "') and u='c'"
  $.getJSON("https://query.yahooapis.com/v1/public/yql?q=" + bolgeara + "&format=json").success(function(veri){
   console.log(veri);
   $('#temp').html("Bölgenin Durumu Ve Sıcaklığı " + bölge + " is " + veri.query.results.channel.item.condition.temp + "°C");
  });
});
