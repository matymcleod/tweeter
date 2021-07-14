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
  $('#tweetContainer').empty();
  // loops through tweets
  for (const tweet of tweets) {
    // calls createTweetElement for each tweet
    const $tweet = createTweet(tweet);
    // takes return value and appends it to the tweets container
    $('#tweetContainer').prepend($tweet);
  }
};

const createTweetElement = function(tweet) {
let $tweet = `<article> class="tweet">
<header class="tweet-header">
<img class="avatar" src="${data.user.avatars.small}">
<div class="handle" name="handle">${data.user.name}</div>
<div class="tweet-body">${data.content.text}</div>
<div id="tweetFooter">
  <div id="tweet-date">x days ago</div>
  <div id="icons">
  <i class="fas fa-retweet"></i>
  <i class="fas fa-flag"></i>
  <i class="fas fa-heart"></i>
</div>
</article>
`;
  return $tweet;
}

renderTweets(data);










// const createPost = (post) => {
//   const $title = $('<h3>').text(`Title: ${post.title} (${postMessage.id})`);
//   const $body = $('<h4>').text(`Body: ${post.body}`);
//   const $author = $('<h5>').text(`Author: ${post.userId}`);
//   const $post = $('<div>').addClass('post');
// }
//   $post.apend($title);
//   $post.append($body);

//   $post.append($title).append($body);

//   $post.append($title, $body, $author);


//   const renderPosts = (posts => {
//     for (const post of posts) {

//   }
// })


// const $form = $('#new-post');

// $form.on('submit', function () {
//   const urlEncodedData = $(this).serialize();
//   preventDefault
//   console.log('urlEncodedData:', urlEncodedData);
// });

