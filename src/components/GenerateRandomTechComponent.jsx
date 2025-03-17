import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaJs, FaCss3Alt, FaHtml5, FaDatabase, FaPython, FaJava, FaCogs, FaDocker, FaGithub } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { SiSpring, SiTailwindcss, SiKubernetes, SiDocker, SiNextdotjs } from "react-icons/si";

const technologies = [
    { name: "Java", icon: <FaJava className="text-yellow-600" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "React", icon: <FaReact className="text-cyan-500" /> },
    { name: "Node.js", icon: <DiNodejs className="text-green-500" /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "SQL", icon: <FaDatabase className="text-red-500" /> },
    { name: "Python", icon: <FaPython className="text-blue-700" /> },
    { name: "Spring", icon: <SiSpring className="text-green-600" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Kubernetes", icon: <SiKubernetes className="text-blue-400" /> },
    { name: "Docker", icon: <SiDocker className="text-cyan-600" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
    { name: "Git", icon: <FaGithub className="text-black" /> }
];

const GenerateRandomTechComponent = () => {
    const [randomPosition, setRandomPosition] = useState([]);
    const [randomTech, setRandomTech] = useState(null);

    // Function to generate random positions for each flash
    const generateRandomPosition = () => {
        const randomX = Math.floor(Math.random() * (80 - 20 + 1)) + 20; // Random percentage for X position
        const randomY = Math.floor(Math.random() * (80 - 20 + 1)) + 20; // Random percentage for Y position
        return { x: `${randomX}vw`, y: `${randomY}vh` };
    };

    useEffect(() => {
        const randomTech = technologies[Math.floor(Math.random() * technologies.length)];
        setRandomTech(randomTech);
        const interval = setInterval(() => {
            setRandomPosition((prevPositions) => [
                ...prevPositions,
                generateRandomPosition(),
            ]);
        }, 3500); // Fixed interval for the flashing effect

        // Clean up the interval when the component unmounts
        return () => clearInterval(interval);
    }, []); // Empty dependency array to run once when the component mounts


    return (
        <div className="relative">
            {randomPosition.map((position, index) => (
                <motion.div
                    key={index}
                    className="absolute text-white"
                    style={{ top: position.y, left: position.x }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }} // Fade in, then fade out
                    transition={{ duration: 3, ease: "easeInOut" }}
                >
                    <div className="flex items-center bg-stone-50 text-slate-700 p-1 px-6 rounded-md">
                        {/* Tech Icon */}
                        <div className="mr-4">
                             {randomTech.icon}
                        </div>

                        {/* Random Technology Text */}
                        <span>
                            {randomTech.name}
                        </span>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default GenerateRandomTechComponent;