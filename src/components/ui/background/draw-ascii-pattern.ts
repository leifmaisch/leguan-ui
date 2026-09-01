export type AsciiCell = {
  char: string
  opacity: number
}

export function paintAsciiPattern(
  canvas: HTMLCanvasElement,
  cells: AsciiCell[][],
  foregroundColor: string,
  fontFamily: string
) {
  const parent = canvas.parentElement
  if (!parent) return

  const { width, height } = parent.getBoundingClientRect()
  if (width <= 0 || height <= 0) return

  const rows = cells.length
  const cols = cells[0]?.length ?? 0
  if (rows === 0 || cols === 0) return

  const dpr = window.devicePixelRatio || 1
  canvas.width = Math.round(width * dpr)
  canvas.height = Math.round(height * dpr)
  canvas.style.width = `${width}px`
  canvas.style.height = `${height}px`

  const ctx = canvas.getContext("2d")
  if (!ctx) return

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  ctx.clearRect(0, 0, width, height)

  const cellWidth = width / cols
  const cellHeight = height / rows
  const fontSize = Math.min(cellWidth, cellHeight) * 0.95

  ctx.font = `${fontSize}px ${fontFamily}`
  ctx.fillStyle = foregroundColor
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const cell = cells[row][col]
      if (cell.char === " ") continue

      ctx.globalAlpha = cell.opacity
      ctx.fillText(
        cell.char,
        col * cellWidth + cellWidth / 2,
        row * cellHeight + cellHeight / 2
      )
    }
  }

  ctx.globalAlpha = 1
}
