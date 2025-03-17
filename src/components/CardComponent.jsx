export const CardComponent = ({children}) => {
    return (
        <div className="relative bg-white ring ring-gray-300 rounded-lg shadow-lg p-6">
            {children}
        </div>
    )
}