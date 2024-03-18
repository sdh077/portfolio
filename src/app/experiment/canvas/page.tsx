'use client'
import { useRef } from 'react'
import BallComponent from './ball/app'
import './style.css'
import Grim from './grim/grim'
import Raf from './raf/raf'
export default function Canvas() {
    const canvasBall = useRef<HTMLCanvasElement>()
    if (canvasBall.current) new BallComponent(canvasBall.current)
    return (
        <div>
            {/* <Raf /> */}
            <Grim />
            <canvas className='bg-black' ref={canvasBall} />
        </div>
    )
}
