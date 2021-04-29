export default function shareOnTwitter(score) {
    let shareURL = "http://twitter.com/share?";
    
    let params = {
      url: "https://nika-nabakhteveli-quizapp.netlify.app/", 
      text: `I scored - ${score} points on this quiz. You can try it too!:`,
      via: "__Nabakhteveli",
      hashtags: "quiz"
    }
    for(let prop in params) shareURL += '&' + prop + '=' + encodeURIComponent(params[prop]);
    window.open(shareURL, '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');    
}
