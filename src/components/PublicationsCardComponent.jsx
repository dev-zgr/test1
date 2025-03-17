import {HiOutlineExternalLink} from "react-icons/hi";
import {IoLocationSharp} from "react-icons/io5";
import {BsCalendar2Date} from "react-icons/bs";
import {motion} from "framer-motion";

export const PublicationsCardComponent = ({publicationName, publicationLogoSrc, projectLink, conferenceName,location, dates , additionalInfo}) => {
    console.log(additionalInfo)
    return (

        <motion.button
            whileHover={{scale: 1.02}}
            whileDrag={{scale: 1}}
            className={"flex justify-center w-full"}
        >
            <li
                className="flex flex-row justify-between items-center w-[90%] bg-white ring ring-gray-300 rounded-lg shadow-lg p-8 mt-4">
                <div className={"flex  flex-col self-start  mt-2"}>
                    <div className={"flex items-center"}>
                        <h3 className="font-semibold text-slate-900 text-3xl inline text-left
                        ">
                            {publicationName}
                            {projectLink && (
                                <>
                                    <p className="inline-flex ml-4 text-slate-700 text-3xl"> | </p>
                                    <button onClick={() => {
                                        window.open(projectLink, "_blank")
                                    }}
                                            className={"hover:text-sky-400 text-slate-700"}
                                    >
                                        <HiOutlineExternalLink
                                            className={"inline text-3xl text-slate-900 ml-2 hover:text-sky-600"}/>
                                    </button>
                                </>
                            )}
                        </h3>

                    </div>
                    <div className={"flex items-center"}>
                        <IoLocationSharp
                            className={"inline  self-center text-1xl text-slate-500 hover:text-sky-600 align"}/>
                        <p className="inline text-slate-500 text-1xl mr-2"> {location} | </p>
                        <BsCalendar2Date
                            className={"inline self-center text-1xl text-slate-500 hover:text-sky-600 align"}/>
                        <p className="inline ml-4 text-slate-500 text-1xl ml-1"> {dates}</p>
                    </div>
                    <ul role="list" className="flex flex-col flex-start list-disc marker:text-sky-700 ml-6">
                        {
                            additionalInfo && additionalInfo.length > 0 ? (
                                additionalInfo.map((addition, index) => (
                                    <li key={index}>

                                        <p className={"text-left text-slate-900"}>{addition}</p>
                                    </li>
                                ))
                            ) : null}
                    </ul>
                </div>

                <img src={publicationLogoSrc}
                     className="w-32 h-32 rounded-full object-cover" alt="Your Photo"/>
            </li>
        </motion.button>


    )
}
export default PublicationsCardComponent