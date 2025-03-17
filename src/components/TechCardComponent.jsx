export const TechCardComponent = ({ icon, label, link }) => {
    const handleClick = () => {
        if (label === "CV") {
            window.open("docs/cv.pdf", "_blank");  // Replace with your actual CV file name
        } else if (link.startsWith("mailto:")) {
            window.location.href = link; // Opens default mail client
        } else {
            window.open(link, "_blank"); // Opens external links in a new tab
        }
    };

    return (
        <button
            onClick={handleClick}
            className="flex items-center w-full justify-center gap-4 px-4 py-2 mx-2 bg-white ring ring-gray-300 rounded-lg shadow-lg hover:bg-gray-200 hover:shadow-xl transition duration-300"
        >
            <div className="flex items-center justify-center">
                {icon}
            </div>
            <span className="text-sm font-semibold text-gray-900">{label}</span>
        </button>
    );
};