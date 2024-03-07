'use client'

import { useRef } from "react"

export default function Raf() {
    const ref = useRef()
    return (
        <div>
            <canvas ref={ref} className="bg-white" />
        </div>
    )
}
