const apiKey2 = 'DZgTWSk7G8zffkGfHBZ9nA==LBa1KGthmH6oC8lA' // Replace with your actual API key

const categories = [
  'age',
  'alone',
  'amazing',
  'anger',
  'architecture',
  'art',
  'attitude',
  'beauty',
  'best',
  'birthday',
  'business',
  'car',
  'change',
  'communications',
  'computers',
  'cool',
  'courage',
  'dad',
  'dating',
  'death',
  'design',
  'dreams',
  'education',
  'environmental',
  'equality',
  'experience',
  'failure',
  'faith',
  'family',
  'famous',
  'fear',
  'fitness',
  'food',
  'forgiveness',
  'freedom',
  'friendship',
  'funny',
  'future',
  'god',
  'good',
  'government',
  'graduation',
  'great',
  'happiness',
  'health',
  'history',
  'home',
  'hope',
  'humor',
  'imagination',
  'inspirational',
  'intelligence',
  'jealousy',
  'knowledge',
  'leadership',
  'learning',
  'legal',
  'life',
  'love',
  'marriage',
  'medical',
  'men',
  'mom',
  'money',
  'morning',
  'movies',
  'success',
]

function getRandomCategory() {
  return categories[Math.floor(Math.random() * categories.length)]
}

function fetchQuote() {
  const category = getRandomCategory()
  const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`

  $.ajax({
    method: 'GET',
    url: url,
    headers: { 'X-Api-Key': apiKey2 },
    contentType: 'application/json',
    success: function (result) {
      displayQuote(result[0])
    },
    error: function ajaxError(jqXHR) {
      console.error('Error: ', jqXHR.responseText)
    },
  })
}

function displayQuote(quoteObj) {
  const quote = quoteObj.quote
  const author = quoteObj.author

  const quoteElement = document.getElementById('quote')
  quoteElement.innerHTML = `<p>${quote}</p><p><em>- ${author}</em></p>`
}

// Fetch a new quote
fetchQuote()
