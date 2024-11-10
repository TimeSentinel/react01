/*
React Hamburger Menu File - (c)2024 Lance Stubblefield
--------------------------------------------------------------------------------------
Requires Vite, React.JS, React-Router-Dom, Typescript, Tailwind CSS, PostCSS, PostCSS-custom-properties
header.tsx; React Router used for navigation
######################################################################################
 */

//todo: fix menu hiding effect

function handleClick () {
    const hamburgerMenu = document.getElementById('navbar4') as HTMLInputElement

    if (hamburgerMenu.className === "navMenu hidden") {
        hamburgerMenu.className = "navMenu show"
    } else {
        hamburgerMenu.className = "navMenu hidden"
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
    const hamburgerIcon = document.getElementById('hamMenu') as HTMLInputElement

    console.log("menu selected: " + data)

        switch (data) {
            case 'home':
                homeClass.className = "menuSelected";
                portfolioClass.className = "menuItem";
                resumeClass.className = "menuItem";
                freelanceClass.className = "menuItem";
                restaurantClass.className = "menuItem";
                contactClass.className = "menuItem";
                break;
            case 'portfolio':
                homeClass.className = "menuItem";
                portfolioClass.className = "menuSelected ";
                resumeClass.className = "menuItem";
                freelanceClass.className = "menuItem";
                restaurantClass.className = "menuItem";
                contactClass.className = "menuItem";
                break;
            case 'resume':
                homeClass.className = "menuItem";
                portfolioClass.className = "menuItem";
                resumeClass.className = "menuSelected";
                freelanceClass.className = "menuItem";
                restaurantClass.className = "menuItem";
                contactClass.className = "menuItem";
                break;
            case 'freelance':
                homeClass.className = "menuItem";
                portfolioClass.className = "menuItem";
                resumeClass.className = "menuItem";
                freelanceClass.className = "menuSelected";
                restaurantClass.className = "menuItem";
                contactClass.className = "menuItem";
                break;
            case 'restaurant':
                homeClass.className = "menuItem";
                portfolioClass.className = "menuItem";
                resumeClass.className = "menuItem";
                restaurantClass.className = "menuSelected";
                freelanceClass.className = "menuItem";
                contactClass.className = "menuItem";
                break;
            case 'contact':
                homeClass.className = "menuItem";
                portfolioClass.className = "menuItem";
                resumeClass.className = "menuItem";
                freelanceClass.className = "menuItem";
                restaurantClass.className = "menuItem";
                contactClass.className = "menuSelected";
                break;
            default:
                homeClass.className = "menuSelected";
                portfolioClass.className = "menuItem";
                resumeClass.className = "menuItem";
                freelanceClass.className = "menuItem";
                restaurantClass.className = "menuItem";
                contactClass.className = "menuItem";
                break;
        }

    if (hamburgerIcon.className === "navMenu show") {
        handleClick()
        console.log("button class: " + hamburgerIcon.className)
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

// function HamMenu() {
//
//     return (
//
//         <div className="hamMenu hidden" id="hamburger">
//             <ul className="hamBar">
//                 <li>
//                     <Link to="/" id="btnHome" className="menuSelected" onClick={() => PageSelect("home")}>
//                         Home</Link>
//                 </li>
//                 <li>
//                     <Link to="/portfolio" id="btnPortfolio" className="menuItem"
//                           onClick={() => PageSelect("portfolio")}>
//                         Portfolio</Link>
//                 </li>
//                 <li>
//                     <Link to="/resume" id="btnResume" className="menuItem"
//                           onClick={() => PageSelect("resume")}>
//                         Resume</Link>
//                 </li>
//                 <li>
//                     <Link to="/freelance" id="btnFreelance" className="menuItem"
//                           onClick={() => PageSelect("freelance")}>
//                         Packages</Link>
//                 </li>
//                 <li>
//                     <Link to="/restaurant" id="btnRestaurant" className="menuItem"
//                           onClick={() => PageSelect("restaurant")}>
//                         Restaurant</Link>
//                 </li>
//                 <li>
//                     <Link to="/contact" id="btnContact" className="menuItem"
//                           onClick={() => PageSelect("contact")}>
//                         Contact</Link>
//                 </li>
//             </ul>
//
//         </div>
//     )
// }

export {PageSelect}
export default HamMenuShow;