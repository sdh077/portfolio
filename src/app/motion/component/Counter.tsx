'use client'
import { animate, motion, useAnimate, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

const Counter = ({ number = 100 }) => {
    const count = useMotionValue(0)
    const rounded = useTransform(count, latest => Math.round(latest))

    useEffect(() => {
        const controls = animate(count, number, { duration: 3 })

        return controls.stop
    }, [])

    return <motion.div>{rounded}</motion.div>
}

export default Counter