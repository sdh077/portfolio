import "./tab.scss";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

export default function Tab() {
    const tabs = [
        { icon: "🍅", label: "Tomato" },
        { icon: "🥬", label: "Lettuce" },
        { icon: "🧀", label: "Cheese" },
    ]
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    return (
        <div className="tab mx-auto w-[480px] h-80 rounded-2xl bg-white">
            <nav className="p-2 round-md h-12">
                <ul className="flex w-full">
                    {tabs.map((item) => (
                        <li
                            key={item.label}
                            className={clsx('style-none flex items-center my-6 text-black', (item.label === selectedTab.label ? "selected" : ""))}
                            onClick={() => setSelectedTab(item)}
                        >
                            {`${item.icon} ${item.label}`}
                            {item.label === selectedTab.label ? (
                                <motion.div className="underline" layoutId="underline" />
                            ) : null}
                        </li>
                    ))}
                </ul>
            </nav>
            <main>
                <AnimatePresence mode="wait">
                    <motion.div
                        className="flex justify-center items-center text-[128px]"
                        key={selectedTab ? selectedTab.label : "empty"}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {selectedTab ? selectedTab.icon : "😋"}
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    );
}
