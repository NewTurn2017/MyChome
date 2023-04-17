// 파티클 생성과 관련된 코드를 추가합니다.
const canvas = document.getElementById('particles')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

class Particle {
  constructor(x, y, size) {
    this.x = x
    this.y = y
    this.size = size
    this.speedX = Math.random() * 3 - 1.5
    this.speedY = Math.random() * 3 - 1.5
  }

  update() {
    this.x += this.speedX
    this.y += this.speedY

    if (this.size > 0.2) this.size -= 0.1
  }

  draw() {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
    ctx.strokeStyle = 'rgba(34, 147, 214, 0.8)'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()
  }
}

const particlesArray = []

function handleParticles() {
  for (let i = 0; i < 5; i++) {
    let x = Math.random() * canvas.width
    let y = Math.random() * canvas.height
    let size = Math.random() * 5 + 1
    particlesArray.push(new Particle(x, y, size))
  }

  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update()
    particlesArray[i].draw()

    if (particlesArray[i].size <= 0.3) {
      particlesArray.splice(i, 1)
      i--
    }
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  handleParticles()
  requestAnimationFrame(animateParticles)
}

animateParticles()
