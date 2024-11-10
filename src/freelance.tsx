/*
React Portfolio Project - (c)2024 Lance Stubblefield
--------------------------------------------------------------------------------------
Requires Vite, React.JS, React-Router-Dom, Typescript, Tailwind CSS, PostCSS, PostCSS-custom-properties
freelance.tsx
######################################################################################
 */

import Port1 from './images/portfolio1.webp'
import Port2 from './images/portfolio2.webp'
import Port3 from './images/portfolio3.webp'
import Port4 from './images/portfolio4.webp'
import Port5 from './images/portfolio5.webp'
import Port6 from './images/portfolio6.webp'
import Port7 from './images/portfolio7.webp'
import Port8 from './images/portfolio8.webp'

function Freelance() {

    return (
        <>
            <div className="mainHead">
                <h1>Freelancer Portfolio / Small Business Site</h1>
                <p>
                    I specialize in helping small businesses and freelances create a unique web presence.
                    My process involves learning a bit about who you are and what you do. You can provide as much input
                    and comment as you would like and I will put together the rest.
                </p>
                <br/><br/>
                Take a look at some of my starting points below...
            </div>
            <div className="mainBody">
                <div className="content-section">
                    <h2>Freelancer Packages</h2>
                    <div className="projects">
                        {/*----- project card -----    */}
                        <div className="project-card">
                            <div className="project-title">
                                <h3><a href="#">Single Page Portfolio</a></h3>
                            </div>
                            <div className="project-item">
                                <div className="project-description">
                                    <p>
                                        This is a beautiful, quick and easy site to put up.
                                        Built in React-Typescript using Tailwind CSS, W3.CSS, or Bootstrap.
                                        It is not as easy to edit, so this is recommended for sites that don't require
                                        frequent
                                        updating.
                                        <br/><br/>
                                    </p>

                                    <h3>What you get...</h3>
                                    <ul>
                                        <li>Nav bar at top, side, none</li>
                                        <li>Photos and text how you want them laid out</li>
                                        <li>Links to other sites/works</li>
                                        <li>Social media links</li>
                                    </ul>
                                    <h3>What do you need to provide?</h3>
                                    <p>For the standard package, you provide all text, images, and links.
                                        I will go over color and layout options and create a mock-up for you to approve
                                        before coding the site.

                                    </p>
                                </div>
                                <div className="project-frame">
                                    <div className="project-img"><img src={Port2} alt="Gallery Portfolio"/></div>
                                    <div className="project-img"><img src={Port4} alt="Web Portfolio"/></div>
                                    {/*<div className="project-img"><img src={"#"} alt=""/></div>*/}
                                </div>
                            </div>
                            {/* project-item */}
                        </div>
                        {/*----- end project card -----       */}
                        {/*----- project card -----    */}
                        <div className="project-card">
                            <div className="project-title">
                                <h3><a href="#">3+ Page React Site</a></h3>
                            </div>
                            <div className="project-item">
                                <div className="project-description">
                                    <p>
                                        This one includes multiple pages/modules to provide a custom.
                                    </p>
                                    <h3>Choose from some popular pages...</h3>
                                    <ul>
                                        <li>Home Page (required, of course)</li>
                                        <li>About(Me/Us) Page</li>
                                        <li>Contact Me/Us Page</li>
                                        <li>Gallery Page</li>
                                        <li>Work/Portfolio/Resume Page</li>
                                    </ul>
                                    <h3>Then add modules to any pages (or constant across site)...</h3>
                                    <ul>
                                        <li>Photo Sea (gallery)</li>
                                        <li>Photo Carousel</li>
                                        <li>Contact Form</li>
                                        <li>Navbar/Menu</li>
                                        <li>Social Media Links</li>
                                        <li>Blog/Newsfeed</li>
                                        <li>Catalog/Menu/Prices</li>
                                    </ul>
                                </div>
                                <div className="project-frame">
                                    <div className="project-img"><img src={Port1} alt="Lance's previous portfolio homepage"/></div>
                                    <div className="project-img"><img src={Port3} alt="Side Nav Portfolio"/></div>
                                    {/*<div className="project-img"><img src={"#"} alt=""/></div>*/}
                                </div>
                            </div>
                            {/* project-item */}
                        </div>
                        {/*----- end project card -----       */}
                    </div>
                    {/* projects */}
                </div>
                {/* content sectionj */}

                <div className="content-section">
                    <h2>Business Websites</h2>
                    <div className="projects">
                        {/*----- project card -----    */}
                        <div className="project-card">
                            <div className="project-title">
                                <h3><a href="#">Single Page Website</a></h3>
                            </div>
                            <div className="project-item">
                                <div className="project-description">
                                    <p>
                                        A simple landing page to give your business some legitimacy.
                                        Put up a few images, brief description and contact information.
                                        <br/><br/>
                                        Upgrade by adding some modules like a photo carousel or contact form.
                                    </p>
                                </div>
                                <div className="project-frame">
                                    <div className="project-img"><img src={Port5} alt="Restaurant Single Page"/></div>
                                    {/*<div className="project-img"><img src={"#"} alt=""/></div>*/}
                                    {/*<div className="project-img"><img src={"#"} alt=""/></div>*/}
                                </div>
                            </div>
                            {/* project-item */}
                        </div>
                        {/*----- end project card -----       */}
                        {/*----- project card -----    */}
                        <div className="project-card">
                            <div className="project-title">
                                <h3><a href="#">Multi-Page Site</a></h3>
                            </div>
                            <div className="project-item">
                                <div className="project-description">
                                    <p>
                                        Whatever you want to do here. Build a custom site for any type of business.
                                        <br/><br/>

                                    </p>
                                    <h3>Choose from some popular pages...</h3>
                                    <ul>
                                        <li>Home Page (required, of course)</li>
                                        <li>About Us Page</li>
                                        <li>Contact Us Page</li>
                                        <li>Gallery Page</li>
                                        <li>News/Blog/Forum</li>
                                        <li>Reference/Reviews</li>
                                        <li>Shop/Store Page(s)</li>
                                    </ul>
                                    <h3>Then add modules to any pages (or constant across site)...</h3>
                                    <ul>
                                        <li>Photo Sea (gallery)</li>
                                        <li>Photo Carousel</li>
                                        <li>Contact Form</li>
                                        <li>Navbar/Menu</li>
                                        <li>Social Media Links</li>
                                        <li>Blog/Newsfeed</li>
                                        <li>Catalog/Menu/Prices</li>
                                        <li>Shopping Cart</li>
                                    </ul>
                                </div>
                                <div className="project-frame">
                                    <div className="project-img"><img src={Port6} alt="Web Module Collage"/></div>
                                    <div className="project-img"><img src={Port7} alt="Drone Website"/></div>
                                    <div className="project-img"><img src={Port8} alt="M&M Website"/></div>
                                </div>
                            </div>
                            {/* project-item */}
                        </div>
                        {/*----- end project card -----       */}
                    </div>
                    {/* projects */}
                </div>
                {/* content sectionj */}
            </div>
            {/* mainBody */}

            <div className="mainFoot">

            </div>

        </>
    )
}

export default Freelance;