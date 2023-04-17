// 명언 출력 함수
async function showQuote() {
  const response = await fetch('https://quotes.rest/qod') // 명언을 가져옴
  const data = await response.json()
  const quote = data.contents.quotes[0].quote
  const author = data.contents.quotes[0].author

  const quoteElem = document.getElementById('quote')
  quoteElem.innerHTML = `<p>${quote}</p><p>- ${author}</p>`

  // 30초마다 showQuote 함수를 호출하여 명언을 업데이트 함
  setTimeout(showQuote, 30000)
}

// showQuote 함수를 최초로 호출하여 화면에 명언을 표시함
showQuote()
