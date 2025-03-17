import NavigationBarComponent from "../components/NavigationBarComponent.jsx";

export const ProfessionalLayoutPage = ({children}) => {
    return (
        <div className={"min-h-screen"}>
            <NavigationBarComponent />
            {children}
        </div>
    );
};