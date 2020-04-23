const canvas = document.getElementById('canvas')

canvas.style.border = "1px solid"

const ctx = canvas.getContext('2d')

ctx.fillStyle = "cornsilk"
ctx.fillRect(0, 0, 800, 600)

// const graph = ctx.drawCoordinateGrid(50, 50, 700, 500, -3, 10, -6, 4)

ctx.fillStyle = "black"




// const recalc = ctx.coordinateAxes(50, 50, 700, 500)
// ctx.chartByX(recalc([[0, 0], [1, 1], [2, 2], [3, 7], [4, 3], [5, 20]]))

ctx.setLineDash([5, 10])

ctx.coordinateAxes(50, 50, 700, 500)
   .chartByX([[0, 0], [1, 10], [2, 2], [3, 7], [4, 3], [13, 100]])