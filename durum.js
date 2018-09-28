$(document).ready(function(){
  var bölge = "Turkiye";
  $.getJSON("https://query.yahooapis.com/v1/public/yql?q=turkiye&format=json").success(function(veri){
   console.log(veri);
   $('#temp').html("Bölgenin Durumu Ve Sıcaklığı " + bölge + " ");
  });
});
