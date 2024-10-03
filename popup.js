document.addEventListener('DOMContentLoaded', function() {
  const jokeElement = document.getElementById('joke');
  const laughButton = document.getElementById('laughButton');
  const laughSound = document.getElementById('laughSound');
  const nextJokeButton = document.getElementById('nextJokeButton');
  const prevJokeButton = document.getElementById('prevJokeButton');
  const addJokeButton = document.getElementById('addJokeButton');

  let jokes = [];
  let currentJokeIndex = 0;

  function fetchJokes() {
    fetch('https://official-joke-api.appspot.com/jokes/ten')
      .then(response => response.json())
      .then(data => {
        jokes = data;
        displayJoke();
      })
      .catch(error => {
        jokeElement.textContent = 'Failed to load jokes.';
        console.error('Error fetching jokes:', error);
      });
  }

  function displayJoke() {
    if (jokes.length > 0) {
      const joke = jokes[currentJokeIndex];
      jokeElement.textContent = `${joke.setup} - ${joke.punchline}`;
    }
  }

  nextJokeButton.addEventListener('click', function() {
    if (currentJokeIndex < jokes.length - 1) {
      currentJokeIndex++;
      displayJoke();
    }
  });

  prevJokeButton.addEventListener('click', function() {
    if (currentJokeIndex > 0) {
      currentJokeIndex--;
      displayJoke();
    }
  });

  addJokeButton.addEventListener('click', function() {
    const userJoke = prompt('Enter your joke (format: setup - punchline):');
    if (userJoke) {
      const [setup, punchline] = userJoke.split(' - ');
      if (setup && punchline) {
        jokes.push({ setup, punchline });
        currentJokeIndex = jokes.length - 1;
        displayJoke();
      } else {
        alert('Invalid joke format. Please use "setup - punchline".');
      }
    }
  });

  laughButton.addEventListener('click', function() {
    laughSound.play();
  });

  fetchJokes();
});