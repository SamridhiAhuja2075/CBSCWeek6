// Function to fetch a random quote from the Quotable API
function fetchQuote() {
  fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      displayQuote(data.content, data.author);
    })
    .catch(error => {
      console.error('Error fetching quote:', error);
    });
}

// Function to display the fetched quote on the webpage
function displayQuote(quote, author) {
  document.getElementById('quote').innerText = `"${quote}"`;
  document.getElementById('author').innerText = `- ${author}`;
}

// Initially fetch a quote when the page loads
fetchQuote();
