import { useEffect, useState } from "react";
import "./animation.scss";
import { useAnimate } from "framer-motion";

export default function Animation() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [rotate, setRotate] = useState(0)
    const [scope, animate] = useAnimate()

    useEffect(() => {
        const animation = async () => {
            await animate(scope.current, { x: `${x - 50}%`, y: `${y}%`, rotate })
            animate("li", { opacity: 1 })
        }

        animation()
    }, [x, y, rotate])
    return (
        <div className="animation">
            <div className="flex gap-2 justify-center">
                <button onClick={() => setX(x => (x + 25) % 125)}>X</button>
                <button onClick={() => setY(y => (y + 30) % 90)}>Y</button>
                <button onClick={() => setRotate(r => (r + 30) % 360)}>R</button>
            </div>

            <ul ref={scope}>
                <li />
                <li />
                <li />
            </ul>
        </div>
    );
}
