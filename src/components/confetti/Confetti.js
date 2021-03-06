import React from 'react'
import PropTypes from 'prop-types'

/**
 * The code for ConfettiParticle was taken from https://codepen.io/rainner/pen/BEOyJq
 * thank you Rainner Lins :)
 */
class ConfettiParticle {
  constructor({ context, width, height, color, speed }) {
    this.context = context;
    this.width = width;
    this.height = height;
    this.color = color;
    this.diameter = 0;
    this.tilt = 0;
    this.tiltAngleIncrement = 0;
    this.tiltAngle = 0;
    this.particleSpeed = speed;
    this.waveAngle = 0;
    this.x = 0;
    this.y = 0;
    this.reset();
  }

  reset() {
    this.x = Math.random() * this.width;
    this.y = Math.random() * this.height - this.height;
    this.diameter = Math.random() * 6 + 4;
    this.tilt = 0;
    this.tiltAngleIncrement = Math.random() * 0.1 + 0.04;
    this.tiltAngle = 0;
  }

  update() {
    this.waveAngle += this.tiltAngleIncrement;
    this.tiltAngle += this.tiltAngleIncrement;
    this.tilt = Math.sin(this.tiltAngle) * 12;
    this.x += Math.sin(this.waveAngle);
    this.y += (Math.cos(this.waveAngle ) + this.diameter + this.particleSpeed) * 0.4;
  }

  complete() {
    return (this.y > this.height + 20);
  }

  draw() {
    let x = this.x + this.tilt;
    this.context.beginPath();
    this.context.lineWidth = this.diameter;
    this.context.strokeStyle = this.color;
    this.context.moveTo(x + this.diameter / 2, this.y);
    this.context.lineTo(x, this.y + this.tilt + this.diameter / 2);
    this.context.stroke();
  }
}

const colorOptions = [
  '#44D7B6',
  '#76C2F3',
  '#F0FF02',
  '#FEACBE',
  '#FF511C',
  '#6236FF',
  '#0073D1'
]

class Confetti extends React.Component {
  constructor(props) {
    super(props)
    this.setCanvasRef = this.setCanvasRef.bind(this)
    this.animate = this.animate.bind(this)
    this.setup = this.setup.bind(this)
  }

  componentDidMount() {
    setTimeout(this.setup, 500)
  }

  setCanvasRef(canvas) {
    this.canvas = canvas
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.animationId)
  }

  setup() {
    this.createParticles()
    this.animate()
  }

  // create confetti particles
  createParticles() {
    const context = this.getContext()
    const { width, height, particleCount, particleSpeed } = this.props

    this.particles = [];

    for (let i = 0; i < particleCount; ++i) {
      const index = Math.floor(Math.random() * colorOptions.length)
      const color = colorOptions[index]
      const particle = new ConfettiParticle({
        context, width, height, color, speed: particleSpeed
      })
      this.particles.push(particle);
    }
  }

  getContext() {
    return this.canvas.getContext('2d')
  }

  animate() {
    const { width, height, onComplete } = this.props
    const context = this.getContext()
    context.clearRect(0, 0, width, height)

    let complete = true
    for (let p of this.particles) {
      p.width = width;
      p.height = height;
      p.update();
      p.draw();
      complete = complete && p.complete()
    }

    if (complete) {
      onComplete()
    } else {
      this.animationId = requestAnimationFrame(this.animate)
    }
  }

  render() {
    const { width, height } = this.props
    return (
      <canvas ref={this.setCanvasRef} width={width} height={height}></canvas>
    )
  }
}

Confetti.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  particleCount: PropTypes.number,
  particleSpeed: PropTypes.number,
  onComplete: PropTypes.func
}

Confetti.defaultProps = {
  particleCount: 300,
  particleSpeed: 1,
  onComplete: () => null
}

/** @component */
export default Confetti
