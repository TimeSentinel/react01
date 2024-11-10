/*
React Hamburger Menu File - (c)2024 Lance Stubblefield
--------------------------------------------------------------------------------------
Requires Vite, React.JS, React-Router-Dom, Typescript, Tailwind CSS, PostCSS, PostCSS-custom-properties
header.tsx; React Router used for navigation
######################################################################################
 */


function handleClick() {
    const hamburgerMenu = document.getElementById('hamBar') as HTMLInputElement

    if (hamburgerMenu.className === "hamMenu hidden") {
        hamburgerMenu.className = "hamMenu show"
    } else {
        hamburgerMenu.className = "hamMenu hidden"
    }
    console.log("menu hidden: " + hamburgerMenu.hidden)
    console.log("navbar class: " + hamburgerMenu.className)
}

function PageSelect(data: string) {
    const homeClass = document.getElementById('btnHome') as HTMLInputElement
    const portfolioClass = document.getElementById('btnPortfolio') as HTMLInputElement
    const resumeClass = document.getElementById('btnResume') as HTMLInputElement
    const freelanceClass = document.getElementById('btnFreelance') as HTMLInputElement
    const restaurantClass = document.getElementById('btnRestaurant') as HTMLInputElement
    const contactClass = document.getElementById('btnContact') as HTMLInputElement

    console.log("menu selected: " + data)
    homeClass.className = "menuItem";
    portfolioClass.className = "menuItem";
    resumeClass.className = "menuItem";
    freelanceClass.className = "menuItem";
    restaurantClass.className = "menuItem";
    contactClass.className = "menuItem";

    switch (data) {
        case 'home':
            homeClass.className = "menuSelected";
            break;
        case 'portfolio':
            portfolioClass.className = "menuSelected ";
            break;
        case 'resume':
            resumeClass.className = "menuSelected";
            break;
        case 'freelance':
            freelanceClass.className = "menuSelected";
            break;
        case 'restaurant':
            restaurantClass.className = "menuSelected";
            break;
        case 'contact':
            contactClass.className = "menuSelected";
            break;
        default:
            homeClass.className = "menuSelected";
            break;
    }

    return {data}
}

function HamMenuShow() {

    return (
        <>
            <div className="hamburger-menu" onClick={handleClick}>
                <div className="hamburger-bar"></div>
                <div className="hamburger-bar"></div>
                <div className="hamburger-bar"></div>
            </div>

        </>
    )
}

export {PageSelect, handleClick}
export default HamMenuShow;