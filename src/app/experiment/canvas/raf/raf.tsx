import { NEXT_PUBLIC_SITE_URL } from "@/lib/constants";
import { useEffect, useRef, useState } from "react";
const SPEED = 5
const ROCKET_SIZE = 20
interface Position {
    x: number;
    y: number;
}
export default function Raf() {
    const ref = useRef<HTMLCanvasElement>()
    let ctx: CanvasRenderingContext2D

    const requestRef = useRef<number>(0);
    const pressedKey = useRef("");

    const bricks = [
        {
            x: 20,
            y: 40,
            dx: 50,
            dy: 50
        }, {
            x: 100,
            y: 240,
            dx: 50,
            dy: 50
        }, {
            x: 500,
            y: 100,
            dx: 50,
            dy: 50
        }
    ]
    let position = useRef<Position>({ x: 100, y: 100 })
    let stageWidth
    let stageHeight
    const clear = () => {
        stageWidth = 600 //document.body.clientWidth;
        stageHeight = 600//document.body.clientHeight;
        ctx.clearRect(0, 0, stageWidth, stageHeight);

        const dpr = window.devicePixelRatio;
        const rect = ref.current.getBoundingClientRect();
        ref.current.width = rect.width * dpr;
        ref.current.height = rect.height * dpr;
        ctx.scale(dpr, dpr);
    }
    const drawBricks = () => {
        for (const brick of bricks) {
            ctx.beginPath();
            ctx.rect(brick.x, brick.y, brick.dx, brick.dy);
            ctx.fillStyle = "#FF0000";
            ctx.fill();
            ctx.closePath();
        }
    }
    function collisionDetection() {
        for (const brick of bricks) {
            const { x, y } = position.current
            if (x >= brick.x - ROCKET_SIZE && x <= brick.x + brick.dx && y >= brick.y - ROCKET_SIZE && y <= brick.y + brick.dy) {
                alert('실패')
                position.current = { x: 100, y: 100 }
                pressedKey.current = ""
            }
        }
    }
    const animate = (t: DOMHighResTimeStamp) => {
        clear()
        collisionDetection()
        const arrowObj = {
            "ArrowUp": [0, -1],
            "ArrowDown": [0, 1],
            "ArrowLeft": [-1, 0],
            "ArrowRight": [1, 0]
        }
        if (arrowObj[pressedKey.current]) {
            const arrow = arrowObj[pressedKey.current]
            console.log(position.current.y + arrow[0] * SPEED, stageHeight)
            position.current = { x: (position.current.x + arrow[0] * SPEED) % stageWidth, y: (position.current.y + arrow[1] * SPEED) % stageHeight }
        }

        drawBricks()

        const img = new Image();
        img.src = `${NEXT_PUBLIC_SITE_URL}/images/rocket.png`;

        ctx.drawImage(img, position.current.x, position.current.y, ROCKET_SIZE, ROCKET_SIZE);


        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        if (ref.current)
            ctx = ref.current.getContext("2d");
    }, [])
    useEffect(() => {
        window.addEventListener("keydown", (e) => {
            e.preventDefault();
            pressedKey.current = e.code
        });
        window.addEventListener("keyup", (e) => {
            e.preventDefault();
            pressedKey.current = null
        });
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, []);
    return <>
        <canvas ref={ref} className="bg-slate-500" style={{ width: '600px', height: '600px' }}></canvas>
    </>
}