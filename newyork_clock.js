function newYorkTimeLoad() {
  const now = new Date()
  const newYorkOffset = -4 // 일광 절약 시간 적용 시 (대략 3월 ~ 11월)
  // const newYorkOffset = -5; // 일광 절약 시간이 아닌 경우

  const newYorkTime = new Date(
    now.getTime() + (now.getTimezoneOffset() + newYorkOffset * 60) * 60 * 1000
  )

  const hour = newYorkTime.getHours()
  const minute = newYorkTime.getMinutes()
  const second = newYorkTime.getSeconds()

  const clockElement = document.getElementById('newyork_clock')
  clockElement.textContent = `${hour < 10 ? '0' + hour : hour}:${
    minute < 10 ? '0' + minute : minute
  }:${second < 10 ? '0' + second : second}`

  setTimeout(newYorkTimeLoad, 1000)
}

newYorkTimeLoad()
