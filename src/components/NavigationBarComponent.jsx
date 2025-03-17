import {motion} from "framer-motion";

const scrollToIcon = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};
export const HeaderComponent = ({...rest}) => {

    const menuSections = [
        { path: "education", name: "Eğitim" },
        { path: "achievements", name: "Başarımlar" },
        { path: "publications", name: "Akademik Yayınlar & Sunumlar" },

    ];

    const accountSections = [];
    let className = "absolute sticky top-0 px-10 py-6 pt-6 lg:pt-8  backdrop-blur-2xl text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200 border-b border-slate-900/10 z-30  w-full";
    if(rest.fixed){
        className = "absolute fixed top-0 px-10 py-6 pt-6 lg:pt-8  backdrop-blur-2xl text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200 border-b border-slate-900/10 z-30  w-full";
    }
    return (
        <div className={className}>
            <header className={"flex justify-between"} >

                <motion.div
                    initial={{ opacity: 0}}
                    animate={{ opacity: [0, 1] }}
                    transition={{ duration: 2, ease: 'anticipate', delay: 0}}
                 >
                    <nav >
                        <ul className={"flex items-center gap-x-8"}>
                            {menuSections.map((section, index) => {
                                return <HeaderButtonMetaComponent key={index} sectionID={section.path} buttonLabel={section.name}/>
                            })}
                        </ul>
                    </nav>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0}}
                    animate={{ opacity: [0, 1] }}
                    transition={{ duration: 2, ease: 'anticipate', delay: 0 }}
                >
                    <nav>
                        <ul className={"flex items-center gap-x-8"}>
                            {
                                accountSections.map((section, index) => {
                                    return <HeaderButtonMetaComponent key={index} buttonLabel={section.name}/>
                                })
                            }
                        </ul>
                    </nav>
                </motion.div>


            </header>
        </div>

    )
}
export default HeaderComponent

export const HeaderButtonMetaComponent = ({buttonLabel,sectionID, ...rest}) => {
    return (
        <li {...rest}>
            <div className={"hover:text-sky-600"}>
                <button onClick={() => scrollToIcon(sectionID)} >{buttonLabel}</button>
            </div>

        </li>
    )
}