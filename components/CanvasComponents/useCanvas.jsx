import { useRef, useEffect } from 'react'
import resizeCanvas from './resizeCanvasWithDevicePixelRatio'

export default function useCanvas(draw, options={}, {predraw,postdraw}) {
  
  const canvasRef = useRef(null)
  console.log('here')
  
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext(options.context || '2d')
    let frameCount = 0
    let animationFrameId

    const render = () => {
      predraw(context, canvas)
      draw(context, frameCount)
      frameCount = postdraw(frameCount,context)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])
  return canvasRef
}
