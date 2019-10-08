/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
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
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

function renderTweets(tweets) {
  for(let tweet of tweets) {
    console.log(createTweetElement(tweet))
    $("tweet-container").prepend(createTweetElement(tweet))
  }
}


function createTweetElement(tweet) {

  // let $tweet = $("<article>").addClass("tweet-container");

  const $tweet = `
  <article class ="tweet-container">
                <img class= "profile-picture" src="${tweet.user.avatars}"> 
              <p class="username">${tweet.user.name}</p>
              <p class="handler">${tweet.user.handle}</p>
              <p class="tweet-content">${tweet.content.text}</p>
              <p class="date">${tweet.created_at}</p>
              </article>
  `;
//  $tweet = $tweet.append(markup);

  return $tweet;

}




renderTweets(data);