// Test / driver code (temporary). Eventually will get this from the server.
$(document).ready(function() {
    //renderTweets(data);
 
  //think i need to add an event listner to refresh the tweet page
  function loadTweets(){

    let AJAXParameters = {
      url:'http://localhost:8080/tweets',
      method:'GET'
  }

  $.ajax(AJAXParameters)
  .done(listOfTweets =>{
    for(let i = 0; i < listOfTweets.length; i++){
      let newARR = []
      newARR.push(listOfTweets[i])
      renderTweets(newARR);
    }
  }
  )
  }

  //text input form submitting to the mongoDB
  $("#new-tweet-form").submit(function(event) {
    event.preventDefault(); 
    var formSubmission = $(event.target).find('textarea').val()
    let serialForm= $( this ).serialize();
    let submitobj = [{content:{text: $(event.target).find('textarea').val()}}]
    if(formSubmission === ''){
      return $('#alertone').text("Please add wonderful insight to your message for all to hear!")
    } if(formSubmission.length > 140){
      return $('#alertone').text("keep the message simple, 140 character max!")
    }

    $.ajax('/tweets', { method: 'post', data: serialForm})
   .done(function (response){
    //   let responseArr = []
    //   responseArr.push(response)
    //  renderTweets(responseArr)
    $('#tweets-container').prepend(createTweetElement(response))

     

   })
   // reset text counter
   $("textarea").val("")
   $('.counter').text(140)
})
  loadTweets();
});

const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];

  function checkDay(diffDays, createdDate){
    if (diffDays === 0){
      let todayDateAgain = Date.now()
      let oneDayByHours = 24*60*60
      let diffDaysAgain = Math.round(Math.abs((createdDate - todayDateAgain))/(oneDayByHours));

      return `${diffDaysAgain} minutes ago.`
    } else{
      return `${diffDays} days ago`
  }
}
  function createTweetElement(Object){
      let profileImglink = Object.user ? Object.user.avatars.small : "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png";
      let nameHeader = Object.user ? Object.user.name : 'Matt test';
      let nameHandle = Object.user ? Object.user.handle : "@matt";
      let createdDate = Object.created_at //|| 777777;
      let todayDate = Date.now()
      let oneDay = 24*60*60*1000;
      let diffDays = Math.round(Math.abs((createdDate - todayDate))/(oneDay));
      let daychecker = checkDay(diffDays, createdDate)
      let messageContent = Object.content.text;
      let article = $('<article>').addClass('hover');
      //header to modify
      let header = $('<header>')
      .addClass('name-field');
      let image = $('<img>')
      .attr("src", profileImglink);
      let div= $('<div>')
      .addClass("user-info")
      let h2 = $('<h2>').
      text(nameHeader);
      let span = $('<span>')
      .attr('id', 'handle')
      .text(nameHandle);
      div.append(h2).append(span)
      //header modification
      header.append(image).append(div)
      //header is now modify
      // main text content
      let divTwo = $('<div>')
      .text(messageContent);
      //footer 
      let footerImg = ('<img class= "social" id= "footerimg" src = https://image.freepik.com/free-vector/new-like-love-dislike-icons-printed-paper-social-media-vector-stock-illustration_100456-50.jpg>')
      let footer = $('<footer>').text(daychecker).append(footerImg);
      // add everything to the aritcle
      article.append(header)
      .append(divTwo).append(footer)
return article

  }


function renderTweets(tweets) {
  console.log("rendertweets",tweets)
  console.log("renderTweets data", tweets)
    for(let i = 0; i < tweets.length; i++){
        $('#tweets-container').append(createTweetElement(tweets[i]))
    }
}




  

