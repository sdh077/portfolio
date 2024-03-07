'use client'

import clsx from "clsx";
import { useCallback, useEffect, useRef, useState } from "react"

export default function Grim() {
  const canvasGrim = useRef<HTMLCanvasElement>()
  let ctx: CanvasRenderingContext2D
  const colors = ['black', 'white', 'red', 'yellow', 'orange', 'green', 'blue', 'navy', 'purple']
  const [choiceColor, setColor] = useState('black');
  let isPainting = false

  const painting = (event) => {
    if (isPainting) {
      console.log(isPainting)
      ctx = canvasGrim.current.getContext("2d");
      event.preventDefault();   // drag 방지
      event.stopPropagation();  // drag 방지

      ctx.strokeStyle = choiceColor
      ctx.lineWidth = 2.5
      ctx.lineJoin = 'round'
      const x = event.pageX - canvasGrim.current.offsetLeft
      const y = event.pageY - canvasGrim.current.offsetTop
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(x + 1, y + 1);
      ctx.closePath()
      ctx.stroke()
      // setMouse({ x, y })
    }
  }
  const resize = () => {
    if (!canvasGrim.current) return
    const pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
    const stageWidth = document.body.clientWidth;
    const stageHeight = document.body.clientHeight;
    canvasGrim.current.width = stageWidth * pixelRatio * 2 / 3;
    canvasGrim.current.height = stageHeight * pixelRatio * 2 / 3;

    ctx.scale(pixelRatio, pixelRatio);
  }
  const handlePaint = useCallback((event: any, onOff: boolean) => {
    isPainting = onOff
  }, [])

  useEffect(() => {
    if (!canvasGrim.current) return
    ctx = canvasGrim.current.getContext("2d");
    window.addEventListener("resize", resize.bind(this), false);
    resize();
    canvasGrim.current.addEventListener("mousedown", (event) => handlePaint(event, true))
    canvasGrim.current.addEventListener("mouseup", (event) => handlePaint(event, false))
    canvasGrim.current.addEventListener("mousemove", (event) => painting(event))
    canvasGrim.current.addEventListener("mouseleave", (event) => handlePaint(event, false))
  }, [canvasGrim.current])

  return (
    <div className="bg-slate-100 flex text-black">
      <canvas ref={canvasGrim} className="bg-slate-100 w-2/3"
        onMouseDown={(event) => handlePaint(event, true)}
        onMouseUp={(event) => handlePaint(event, false)}
        onMouseMove={(event) => painting(event)}
      />
      <div className="bg-white w-1/3">그림판
        <div className="flex">
          {colors.map(color =>
            <div key={color} onClick={() => setColor(color)} className={clsx(choiceColor === color ? 'border-4 border-slate-300' : '', "w-[48px] h-[48px] rounded-full shadow-xl bg-slate-50 cursor-pointer")} style={{ backgroundColor: color }}></div>
          )}
        </div>
      </div>
    </div>
  )
}
