const apiKey = '826d7a44b198cf8c95e55967b086ae22' // 발급 받은 API 키를 입력하세요.

async function getWeather(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  )

  if (response.status === 200) {
    const data = await response.json()
    console.log(data)
    return data
  } else {
    throw new Error('날씨 정보를 불러오는데 실패했습니다.')
  }
}

const weatherDiv = document.getElementById('weather')

async function displayWeather() {
  try {
    const city = 'Seoul' // 원하는 도시 이름을 입력하세요.
    const weatherData = await getWeather(city)
    console.log(weatherData)
    const weatherDescription = weatherData.weather[0].description
    const temperature = weatherData.main.temp
    const feelsLike = weatherData.main.feels_like

    weatherDiv.innerHTML = `
      <h3>날씨: ${weatherDescription}</h3>
      <p>온도: ${temperature}°C</p>
      <p>체감 온도: ${feelsLike}°C</p>
    `
  } catch (error) {
    weatherDiv.innerHTML = `<p>${error.message}</p>`
  }
}

displayWeather()
