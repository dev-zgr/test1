export const SectionWrapper = ({headerOne, headerTwo, className, id,children}) => {
    return (
        <div className={className} id={id}>
            <h1 className="font-bold text-slate-900 text-4xl text-center">
                {headerOne}
            </h1>
            <h2 className="font-bold text-slate-700 text-2xl text-center">
                {headerTwo}
            </h2>
            <ul className={"flex flex-col justify-center items-center "}>
                {children}
            </ul>

        </div>
    )
}