import {useEffect} from "react";
import {motion} from "framer-motion"
import Gradient from "./Gradient.js";
import {FaGithub, FaLinkedin} from "react-icons/fa";

import {TechCardComponent} from "../components/TechCardComponent.jsx";
import {IoMailUnreadSharp} from "react-icons/io5";
import GenerateRandomTechComponent from "../components/GenerateRandomTechComponent.jsx";
import {EducationCard} from "../components/EducationCard.jsx";
import {achievementsHistory, educationHistory, publicationHistory} from "../config/professional_config.js";
import {SectionWrapper} from "../components/SectionWrapper.jsx";
import {AchievementsCard} from "../components/AchievementsCard.jsx";
import PublicationsCardComponent from "../components/PublicationsCardComponent.jsx";


export const IndexPage = () => {
    useEffect(() => {
        // Initialize the gradient after the component mounts
        var gradient = new Gradient();
        gradient.initGradient('#gradient-canvas');
    }, []);

    return (
        <div>
            <motion.canvas
                id="gradient-canvas"
                className="absolute top-0 left-0 w-full z-0 h-[100vh] max-h-full"
                initial={{opacity: 0.5}}
                animate={{opacity: [0, 1]}}
                transition={{duration: 3, ease: 'easeOut',}}
            ></motion.canvas>
            <div className={"relative z-8"}>
                <GenerateRandomTechComponent/>
                <GenerateRandomTechComponent/>
                <GenerateRandomTechComponent/>
                <GenerateRandomTechComponent/>
                <GenerateRandomTechComponent/>
                <GenerateRandomTechComponent/>

            </div>

            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: [0, 1]}}
                transition={{duration: 4, ease: 'anticipate', delay: 0}}
            >
                <div className={"relative flex z-10 justify-center"}>

                    <div
                        className="relative flex flex-col items-center w-[40%] bg-white ring ring-gray-300 rounded-lg shadow-lg p-8 mt-[10vh]">
                        <img src="images/huseyin_ozgur_kamali.jpg"
                             className="w-32 h-32 rounded-full object-cover" alt="Your Photo"/>
                        <h1 className="font-semibold text-slate-900 text-3xl text-center mt-8">
                            Özgür Kamalı
                        </h1>
                        <p className="italic text-slate-900 text-center mt-2 text-justify mb-8">
                            Merhaba! Ben Özgür, yazılım mühendisliği 3. sınıf öğrencisiyim. Teknolojiye olan ilgimle
                            yazılım geliştirme alanında kendimi sürekli olarak geliştiriyorum. Portföyümdeki projeler
                            hakkında daha fazla bilgiye ulaşabilirsiniz.
                        </p>
                        <div className={"flex flex-row justify-around w-full m-4"}>
                            <TechCardComponent className={"basis-1/4"} icon={<FaGithub/>} label={"github"}
                                               link={"https://github.com/dev-zgr"}/>
                            <TechCardComponent icon={<FaLinkedin/>} label={"Linkedin"}
                                               link={"https://linkedin.com/in/özgür-kamalı/"}/>
                            <TechCardComponent icon={<IoMailUnreadSharp/>} label={"Email"}
                                               link={"mailto:ozgurkamaliprofessional@gmail.com"}/>
                        </div>
                        <div className={"flex flex-row justify-around w-full"}>
                            <TechCardComponent label={"CV"} link={"docs/cv.pdf"}/>
                        </div>

                    </div>
                    <div className={"flex"}>

                    </div>
                </div>

            </motion.div>

            <div className="mt-[25vh] bg-neutral-50 z-10 p-8" >
                <SectionWrapper headerOne={"Eğitim"} headerTwo={"Eğitim Geçmişim"} id={"education"}>
                    {educationHistory.map((education, index) => (
                        <EducationCard
                            key={index}
                            schoolName={education.schoolName}
                            schoolLogoSrc={education.schoolLogoSrc}
                            schoolLink={education.schoolLink}
                            location={education.location}
                            position={education.position}
                            activeDates={education.activeDates}
                            additionalInfo={education.additionalInfo}
                        />
                    ))}
                </SectionWrapper>
                <SectionWrapper  className={"mt-30"} headerOne={"Başarımlar"} headerTwo={"Geçmişte içersinde Bulunduğum bazı araştırma projeleri ve Yarışamalar..."} id={"achievements"}>
                    {achievementsHistory.map((achievement, index) => (
                        <AchievementsCard
                            key={index}
                            projectName={achievement.projectName}
                            projectLogoSrc={achievement.projectLogoSrc}
                            projectLink={achievement.projectLink}
                            location={achievement.location}
                            activeDates={achievement.activeDates}
                            additionalInfo={achievement.additionalInfo}
                        />
                    ))}
                </SectionWrapper>
                <SectionWrapper  className={"mt-30"} headerOne={"Akademik Yayınlar & Sunumlar"} headerTwo={"Geçmişte içersinde Bulunduğum bazı araştırma projeleri ve akademik yayınlar"} id={"publications"}>
                    {publicationHistory.map((publication, index) => (
                        <PublicationsCardComponent
                            key={index}
                            publicationName={publication.publicationName}
                            conferenceName = {publication.conferenceName}
                            publicationLogoSrc={publication.publicationLogoSrc}
                            projectLink={publication.projectLink}
                            location={publication.location}
                            dates={publication.dates}
                            additionalInfo={publication.additionalInfo}
                        />
                    ))}
                </SectionWrapper>

            </div>


            {/* First Content Section (takes full screen, stays on top) */}

        </div>
    );
};

