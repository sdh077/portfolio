import { useEffect, useState } from "react";
import "./animation.scss";
import { useAnimate } from "framer-motion";


const MyComponent = () => {
    const [scope, animate] = useAnimate()

    useEffect(() => {
        const animation = async () => {
            await animate(scope.current, { x: "50%" })
            animate("li", { opacity: 1 })
        }

        animation()
    }, [])

    return (
        <ul ref={scope}>
            <li />
            <li />
            <li />
        </ul>
    )
}

export default function Animation() {
    const [x, setX] = useState(100)
    const [y, setY] = useState(100)
    const [rotate, setRotate] = useState(0)
    const [isVisible, setIsVisible] = useState(true)
    return (
        <div className="animation">
            {/* <button onMouseEnter={() => setX(x => (x + 30) % 150)}>X</button>
            <button onMouseEnter={() => setY(y => (y + 30) % 150)}>Y</button>
            <button onMouseEnter={() => setRotate(r => (r + 30) % 360)}>R</button>
            <button onMouseEnter={() => setIsVisible(v => !v)}>visible</button> */}
            {/* {isVisible && <motion.div className="w-16 h-16 bg-white"
                animate={{ x: [0, x * 2, x], y, rotate, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 1 }}
                initial={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                whileHover={{ scale: [null, 1.5, 1.4] }}
                whileTap={{ scale: 0.9 }}
                whileInView={{ opacity: 1 }}
            />} */}
            <MyComponent />
        </div>
    );
}
