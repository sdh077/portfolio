'use client'
import { useRef } from 'react'
import BallComponent from './ball/app'
import Sheep from './sheep/app'
import './style.css'
import Grim from './grim/grim'
export default function Canvas() {
    const canvasBall = useRef<HTMLCanvasElement>()
    const canvasSheep = useRef<HTMLCanvasElement>()
    if (canvasBall.current) new BallComponent(canvasBall.current)
    if (canvasSheep.current) new Sheep(canvasSheep.current)
    return (
        <div>
            {/* <canvas ref={canvasSheep} /> */}
            <Grim />
            <canvas className='bg-black' ref={canvasBall} />
        </div>
    )
}
