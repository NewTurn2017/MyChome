// 날씨 정보 출력 함수
async function showWeather() {
  const apiKey = 'API_KEY' // OpenWeatherMap API 키를 입력해주세요
  const city = 'seoul' // 날씨 정보를 가져올 도시를 입력해주세요
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

  const response = await fetch(url) // 날씨 정보를 가져옴
  const data = await response.json()
  const weather = data.weather[0].description
  const temperature = Math.round(data.main.temp)

  const weatherElem = document.getElementById('weather')
  weatherElem.innerHTML = `<p>${weather}, ${temperature}℃</p>`

  // 10분마다 showWeather 함수를 호출하여 날씨 정보를 업데이트 함
  setTimeout(showWeather, 600000)
}

// showWeather 함수를 최초로 호출하여 화면에 날씨 정보를 표시함
showWeather()
