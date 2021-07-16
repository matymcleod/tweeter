$(document).ready(() => {
  $("form").on("submit", onSubmit);
});

console.log('jQuery is ready!');

const onSubmit = function (event) {
  event.preventDefault();
  
  const $error = $("div.error-message");
  const tweetChars = $("#text-input").val();
 
  if (tweetChars === null || tweetChars.length === 0) {
    alert(`Cannot submit an empty tweet!`);
    return;
  }

  if (tweetChars.length > 140) {
    alert(`Character limit exceded!`);
    return;
  }


  $error.slideUp();

  const data = $(this).serialize();

  $.post('/tweets', data)
      .then(() => {
        $("#text-input").val("");
        $("#counter").html("140");
        loadTweets();
      });

  console.log("the request has been made to the server");
};


const loadTweets = () => {
  $.ajax({
    url: '/tweets',
    method: 'GET',
    success: (tweets) => {
      console.log(tweets);
      console.log(createTweetElement(tweets[0]));
      renderTweets(tweets);
    },
    error: (err) => {
      console.error(err);
    }
  });
};

loadTweets();




const tweetData = [
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
    "created_at": 1626382533953
  }
]

const renderTweets = function(tweets) {
  $('#tweets-Container').empty();
  let tweetsContainer = $('#tweets-Container');
  // loops through tweets
  for (const tweet of tweets) {
    let tweetElement = createTweetElement(tweet);
    tweetsContainer.prepend(tweetElement);
  }
};


const createTweetElement = function(Data) {
  const { content, created_at } = Data;
  const { name, avatars, handle} = Data.user;
  let newDate = new Date(Data.created_at * 1000)
  let newDate2 = Data.created_at;
  const daysAgo = timeago.format(newDate2);
  let $tweet = `<div class="tweet">
  <section class="show-tweets">
  <div class="tweet-head">
  <div id="avatar-user">
  <img class="avatar" src="${Data.user.avatars}">
  <div class="username" name="name">${Data.user.name}</div>
  </div>
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

renderTweets(tweetData);
