$(document).ready(fonksiyon(){
  var bölge = "Turkiye";
  $.getJSON("https://query.yahooapis.com/v1/public/yql?q=" + bölge + "&format=json").success(fonksiyon(veri){
   console.log(veri);
   $('#alalim').html("Bölgenin Durumu Ve Sıcaklığı " + bölge + " ");
  });
});
