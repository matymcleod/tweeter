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

const renderTweets = function(tweets) {
  // $('#tweetContainer').empty();
  // let tweetsContainer = $('.tweets');
  // console.log('tweets:',tweets);
  // loops through tweets
  for (const tweet of tweets) {
    // calls createTweetElement for each tweet
    let tweetElement = createTweetElement(tweet);
    // takes return value and appends it to the tweets container
    // $('#tweetContainer').prepend($tweet);
    tweetsContainer.append(tweetElement);
  }
};

// const timeago = window.timeago
// console.log('timeago:', timeago);

const createTweetElement = function(Data) {
  const { content, created_at } = Data;
  const { name, avatars, handle} = Data.user;
  // console.log('data.content.created_at:', Data.created_at);
  // let newDate = new Date(Data.created_at * 1000)
  let newDate2 = Data.created_at;
  // console.log('timeago:', newDate.timeago);
  const daysAgo = timeago.format(newDate2);
  console.log('daysago:', daysAgo);
  console.log('Data:', Data);
  
  let $tweet = `<div id="tweets-Container" class="tweet">
  <section class="show-tweets">
  <header class="tweet-header">
  <div id="avatar-user">
  <img class="avatar" src="${Data.user.avatars}">
  <div class="username" name="name">${Data.user.name}</div>
  <div class="handle" name="handle">${Data.user.handle}</div>
  </div>
  </section>

  <div id="body-container">
  <div class="tweet-body">${Data.content.text}</div>
  </div>

  <div id="footer-container">
  <div id="tweetFooter">
  <div id="tweet-date">${(daysAgo)}</div>
  <div id="icons">
    <i class="fas fa-retweet"></i>
    <i class="fas fa-flag"></i>
    <i class="fas fa-heart"></i>
  </div>
  </div>
  </div>
  </div> 
  </main>
  `;
  return $tweet;
}

renderTweets(data);

const $tweet = createTweetElement(data);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweetContainer').append($tweet);
