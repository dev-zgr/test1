import { motion } from "framer-motion";

export const TechnologyFlashingComponent = ({ icon, name }) => {
    const randomX = Math.floor(Math.random() * 100); // Random X position
    const randomY = Math.floor(Math.random() * 100); // Random Y position

    return (
        <motion.div
            className="absolute flex items-center justify-center bg-white ring ring-gray-300 rounded-m shadow-lg p-1"
            style={{ top: `${randomY}vh`, left: `${randomX}vw` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }} // Flash effect: fade in and out
            transition={{
                duration: 3, // Duration of the flash
                ease: "easeInOut",
                repeat: Infinity, // Keep flashing indefinitely
            }}
        >
            <div className="flex items-center">
                <div className="h-4">{icon}</div>
                <span className="text-sm font-semibold text-gray-900">{name}</span>
            </div>
        </motion.div>
    );
};