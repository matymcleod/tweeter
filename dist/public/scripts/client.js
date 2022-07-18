$(document).ready(() => {
  $("form").on("submit", onSubmit);
});

// SETS UP SERVER ACTIONS BASED ON USER INPUT
const onSubmit = function (event) {
  event.preventDefault();
  
  const tweetChars = $("#text-input").val();
 
  // ALERTS IF NO INPUT IS ENTERED INTO TWEET FORM
  if (tweetChars === null || tweetChars.length === 0) {
    alert(`Cannot submit an empty tweet!`);
    return;
  }
// ALERTS IF MORE THAN 140 ARE ENTERED INTO THE TEXT AREA
  if (tweetChars.length > 140) {
    alert(`Character limit exceded!`);
    return;
  }

  const data = $(this).serialize();

  $.post('/tweets', data)
      .then(() => {
        $("#text-input").val("");
        $("#counter").html("140");
        loadTweets();
      });
};

// GET REQUEST TO SERVER FOR TWEETS IN MEMORY
const loadTweets = () => {
  $.ajax({
    url: '/tweets',
    method: 'GET',
    success: (tweets) => {
      renderTweets(tweets);
    },
    error: (err) => {
      console.error(err);
    }
  });
};

// CALLS LOAD TWEETS FUNCTION
loadTweets();

// TWEETS DATABASE
const tweetData = [];

// RENDERS TWEETS FROM DATABASE
const renderTweets = function(tweets) {
  $('#tweets-Container').empty();
  let tweetsContainer = $('#tweets-Container');
  // loops through tweets
  for (const tweet of tweets) {
    let tweetElement = createTweetElement(tweet);
    tweetsContainer.prepend(tweetElement);
  }
};

// SETS UP TWEETS TO BE SENT TO SERVER
const createTweetElement = function(Data) {
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
// CALLS RENDER TWEETS FUNCTION AND PASSES IN TWEET DATA
renderTweets(tweetData);
