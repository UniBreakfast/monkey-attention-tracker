const Ctx = CanvasRenderingContext2D

Ctx.prototype.coordinateAxes = function (x, y, width, height) {
  const arrowLength = 15, arrowWidth = 10
  const x0 = x + arrowWidth/2,  y0 = y + height - arrowWidth/2
  const xLength = width - arrowWidth/2,
        yLength = height - arrowWidth/2
  this.arrowUp(x0, y0, yLength, arrowLength, arrowWidth)
  this.arrowRight(x0, y0, xLength, arrowWidth, arrowLength)
}

Ctx.prototype.triangle = function (x1, y1, x2, y2, x3, y3) {
  this.beginPath()
  this.moveTo(x1, y1)
  this.lineTo(x2, y2)
  this.lineTo(x3, y3)
  this.fill()
}

Ctx.prototype.arrowUp = function (x, y, length, height, width) {
  const x1 = x,            y1 = y-length,
        x2 = x - width/2,  y2 = y1+height,
        x3 = x2+width,     y3 = y2
  this.beginPath()
  this.moveTo(x, y)
  this.lineTo(x, y1+height)
  this.stroke()
  this.triangle(x1, y1, x2, y2, x3, y3)
}

Ctx.prototype.arrowRight = function (x, y, length, height, width) {
  const x1 = x+length,  y1 = y,
        x2 = x1-width,  y2 = y1 - height/2,
        x3 = x2,        y3 = y2+height
  this.beginPath()
  this.moveTo(x, y)
  this.lineTo(x1-width, y)
  this.stroke()
  this.triangle(x1, y1, x2, y2, x3, y3)
}

Ctx.prototype.lines = function (x, y, width, height, num=2) {
  const step = height / (num-1)
  for (let i=0; i<num; ++i) {
    this.beginPath()
    this.moveTo(x, y + i*step)
    this.lineTo(x+width, y + i*step)
    this.stroke()
  }
}