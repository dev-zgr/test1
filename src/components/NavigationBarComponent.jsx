import {motion} from "framer-motion";

export const HeaderComponent = ({...rest}) => {

    const menuSections = [
        { path: "/home", name: "Home" },
        { path: "/services", name: "Services" },
        { path: "/about-us", name: "About Us" },
        { path: "/blog", name: "Blog" },
        { path: "/contact", name: "Contact" },
    ];

    const accountSections = [
        { path: "/profile", name: "Profile" },
        { path: "/settings", name: "Settings" },
        { path: "/notifications", name: "Notifications" },
        { path: "/logout", name: "Logout" },
    ];
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
                                return <HeaderButtonMetaComponent key={index} url={section.path} buttonLabel={section.name}/>
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
                                    return <HeaderButtonMetaComponent key={index} url={section.path} buttonLabel={section.name}/>
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

export const HeaderButtonMetaComponent = ({url, buttonLabel, ...rest}) => {
    return (
        <li {...rest}>
            <div>
                <button className={ ({isActive}) => {
                    if(isActive){
                        return "text-sky-600 underline underline-offset-2"
                    }else{
                        return "hover:text-sky-400 text-slate-700"
                    }
                }} to={url}>{buttonLabel}</button>
            </div>

        </li>
    )
}