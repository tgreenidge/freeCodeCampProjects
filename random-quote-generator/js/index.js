
var printQuotes = function(){
  var tweetBtn = document.getElementById("tweetBtn");
  tweetBtn.style.display= "inline";
  tweetBtn.style.color = "#ee1684";
  var btn = document.getElementById("getQuote");
  btn.innerHTML = "Get New Quote";
  btn.style.color = "#ee1684";
  var words = document.getElementById("quotes");
  var xhr = new XMLHttpRequest();
  xhr.onload = function(){
   if(xhr.status === 200){
      responseObject = JSON.parse(xhr.responseText);
   }
    var rand = Math.floor(Math.random() * (responseObject.length - 1));   
    words.innerHTML= "<p>" + responseObject[rand].quote + "</p>"+" -<em>" + responseObject[rand].author + "</em>";
  };
  xhr.open('GET', 'http://quotes.stormconsultancy.co.uk/quotes.json', true);
  xhr.send(null);
}; 
  
var tweetQuote = function(){
  var tweet = document.getElementById("quotes");
  if(tweet.innerText.length > 140){
    alert("Quote too long, try a shorter quote");
  }else{
    var tweetLink = 'http://twitter.com/home?status=' +encodeURIComponent(tweet.innerText);
    window.open(tweetLink,'_blank');
  }
}