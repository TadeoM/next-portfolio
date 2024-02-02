import React, { useRef, useEffect  } from 'react'
import Canvas from './Canvas'

function lerp(a, b, n) {
  return (b - a) * n + a;
}

export default function Waves(props) {

  let xDots = props.xDots;
  let yDots = props.yDots;
  let tm = Date.now();
  let prevTime;
  let currentTime;
  let deltaTime;
  let num = 0.0;
  let negate = 1;

  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    currentTime = Date.now();
    deltaTime = (currentTime - prevTime) * .0002;
    if(!num) { num = 0; }
    num = num + (negate * deltaTime);
    if(num > 1 || num < 0) { negate *= -1; }

    for(let y = 0; y < yDots; y++) 
    {
      let inbetween = 15 * ((y - (yDots/2)) / (yDots/2));
      let yPos = (y * 25) + (ctx.canvas.height/3);
      let size = 1 + (3 * (y / yDots));

      for (let x = 0; x < xDots; x++) 
      {
        let xPos = (x * (25+inbetween)) + 5;
        
        if(xPos < ctx.canvas.width
          && yPos < ctx.canvas.height)
        {
          let lerpDisplace = ((x+y)/(xDots+yDots));

          let red = lerp(8, 8, num + lerpDisplace);
          let green = lerp(143, 24, num + lerpDisplace);
          let blue = lerp(143, 168, num + lerpDisplace);
          ctx.fillStyle = `rgba(${red}, ${green}, ${blue},${y/yDots})`;

          ctx.beginPath();
          
          let yPosDisplacement = 50 * (Math.sin((frameCount*0.005)+ (x/(xDots/5)))**3 ); // (y/(yDots/5))
          ctx.arc(xPos, yPos + yPosDisplacement, size, 0, 2*Math.PI);
          ctx.fill();
        }
      }
    }
    
    prevTime = currentTime;
  }
  
  return <Canvas draw={draw} options={{context:'2d'}} />
}
