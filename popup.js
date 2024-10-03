document.addEventListener('DOMContentLoaded', function() {
    const jokeElement = document.getElementById('joke');
    const laughButton = document.getElementById('laughButton');
    const laughSound = document.getElementById('laughSound');
  
    // Fetch a joke from an API
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(response => response.json())
      .then(data => {
        jokeElement.textContent = `${data.setup} - ${data.punchline}`;
      })
      .catch(error => {
        jokeElement.textContent = 'Failed to load joke.';
        console.error('Error fetching joke:', error);
      });
  
    // Play laughing sound when button is clicked
    laughButton.addEventListener('click', function() {
      laughSound.play();
    });
  });