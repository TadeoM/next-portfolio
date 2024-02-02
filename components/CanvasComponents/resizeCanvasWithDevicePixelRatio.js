export default function resizeCanvas(canvas) {
  //const { width, height } = canvas.getBoundingClientRect()
  const width = window.innerWidth
  const height = window.innerHeight
  
  if (canvas.width !== width || canvas.height !== height) {
    const { devicePixelRatio:ratio=1 } = window
    const context = canvas.getContext('2d')
    canvas.width = width*ratio
    canvas.height = height
    context.scale(ratio, ratio)
    return true;
  }

  return false;
}