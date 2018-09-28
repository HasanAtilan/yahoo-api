$(document).ready(fonksiyon(){
  var bölge = "Turkiye";
  $.getJSON("https://query.yahooapis.com/v1/public/yql?q=turkiye&format=json").success(fonksiyon(veri){
   console.log(veri);
   $('#temp').html("Bölgenin Durumu Ve Sıcaklığı " + bölge + " ");
  });
});
