'use client'

import { motion } from "framer-motion";
import { useState } from "react";
import './zoom.scss'

export default function ZoomComponent() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="zoom cursor-pointer">
            <motion.div
                layout
                data-isopen={isOpen}
                initial={{ borderRadius: 50 }}
                className="parent"
                onClick={() => setIsOpen(!isOpen)}
            >
                <motion.div layout className="child" />
            </motion.div>
        </div>
    );
}
