/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function renderTweets(tweets) {
  for (let tweet of tweets) {
    // console.log(createTweetElement(tweet))
    $(".tweet-container").prepend(createTweetElement(tweet))
  }
}

function createTweetElement(tweet) {
  // let $tweet = $("<article>").addClass("tweet");
  const $tweet = ` 
<article class ="tweet">
              <header>
                  <img class= "profile-picture" src="${tweet.user.avatars}"> 
                  <p class="username">${tweet.user.name}</p>
                  <p class="handler">${tweet.user.handle}</p>
              </header>
              <body>
                <p class="tweet-content">${escape(tweet.content.text)}</p>
              </body>
              <footer>
                <p class="date">${tweet.created_at}</p>
              </footer>
            </article>`
  //  $tweet = $tweet.append(markup);

  return $tweet;

}


function validateInput(textInput) {
  if (textInput === "") {
    return "tweet is empty"
  } else if (textInput.length > 140) {
    return "tweet is over 140 "
  } else {
    return false;
  }
}

$(function () {
  const $button = $("#tweet-button");
  $button.on("click", function (event) {
    event.preventDefault();
    let textInput = $("#textarea").serialize();
    let text = textInput.split("=")[1]
    let error = validateInput(text)
    if (error) {
      alert(error);
    } else {
      $.ajax("/tweets/", { method: "POST", data: textInput })
        .done(function () {
          loadTweet()
        }).error(function () {
          console.log("post tweet error")
        })
    }
  })
})


function loadTweet() {
  $.ajax("/tweets/", { method: "GET" })
    .done(function (data) {
      renderTweets(data)
    })
}

$(document).ready(function () {
  loadTweet()
})

