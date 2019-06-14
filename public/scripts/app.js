// Test / driver code (temporary). Eventually will get this from the server.
$(document).ready(function() {
    //renderTweets(data);
    let AJAXParameters = {
      url:'http://localhost:8080/tweets',
      method:'GET'
  }
  //think i need to add an event listner to refresh the tweet page
  $.ajax(AJAXParameters)
  .done(listOfTweets =>{
    console.log("list of tweet", listOfTweets)
    for(let i = 0; i < listOfTweets.length; i++){
      console.log("before rendertweets", listOfTweets[i])
      let newARR = []
      newARR.push(listOfTweets[i])
      renderTweets(newARR);
    }
  })
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
  function createTweetElement(Object){
      let profileImglink = Object.user ? Object.user.avatars.small : "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png";
       let nameHeader = Object.user ? Object.user.name : 'Matt test';
      let nameHandle = Object.user ? Object.user.handle : "@matt";
       let createdDate = Object.created_at || 777777;
      let messageContent = Object.content.text;
      let article = $('<article>');
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
      let footer = $('<footer>').text(createdDate);
      // add everything to the aritcle
      article.append(header)
      .append(divTwo).append(footer)
console.log("article", article)
return article

  }


function renderTweets(tweets) {
  console.log("rendertweets",tweets)
  console.log("renderTweets data", tweets)
    for(let i = 0; i < tweets.length; i++){
        $('#tweets-container').append(createTweetElement(tweets[i]))
    }
}



  

