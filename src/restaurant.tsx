/*
React Portfolio Project - (c)2024 Lance Stubblefield
--------------------------------------------------------------------------------------
Requires Vite, React.JS, React-Router-Dom, Typescript, Tailwind CSS, PostCSS, PostCSS-custom-properties
restaurant.tsx
######################################################################################
 */

import Port5 from './images/portfolio5.webp'
import Port6 from './images/portfolio6.webp'

function Restaurant() {
    return (
        <>
            <div className="mainHead">
                <h1>Restaurant / Food Service Sites</h1>
                <p>
                    One of my favorite types of sites to build is a restaurant site. I love food!!!
                    <br/>
                    From a simple single page food to an order and pay online site, I've got you covered.
                    I will provide SEO friendly pages (your site will be easy for an SEO/marketing specialist to work with).
                    <br/><br/>
                    Take a look at some of the options below and let me know what you are looking for.
                </p>
            </div>
            <div className="mainBody">
                <div className="content-section">
                    <h2>Restaurant Packages</h2>
                    <div className="projects">
                        {/*----- project card -----    */}
                        <div className="project-card">
                            <div className="project-title">
                                <h3><a href="#">Single-Page Site</a></h3>
                            </div>
                            <div className="project-item">
                                <div className="project-description">
                                    <p>
                                        A simple, yet very functional restaurant site.
                                        Completely customized to show the world your restaurant, people and food.
                                    </p>
                                    <h3>What you get...</h3>
                                    <ul>
                                        <li>Nav bar at top, side, none</li>
                                        <li>Photos and text how you want them laid out</li>
                                        <li>Links to other sites/works</li>
                                        <li>Social media links</li>
                                    </ul>
                                    <h3>What I need from you...</h3>
                                    <p>For the standard package, you provide all text, images, and links.
                                        Of course, if you are wanting to put up a menu, I will need all of the details.
                                        I will go over color and layout options and create a mock-up for you to approve
                                        before coding the site.
                                    </p>
                                </div>
                                <div className="project-frame">
                                    <div className="project-img"><img src={Port5} alt=""/></div>
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
                                <h3><a href="#">Multi-page Site</a></h3>
                            </div>
                            <div className="project-item">
                                <div className="project-description">
                                        <p>
                                            This one includes multiple pages/modules to provide a custom.
                                        </p>
                                        <h3>Choose from some popular pages...</h3>
                                        <ul>
                                            <li>Home Page (required, of course)</li>
                                            <li>About Us</li>
                                            <li>Contact Us</li>
                                            <li>Gallery</li>
                                            <li>Menu (food)</li>
                                            <li>Order Online</li>
                                        </ul>
                                        <h3>Then add modules (or constant across site)...</h3>
                                        <ul>
                                            <li>Photo Sea (gallery)</li>
                                            <li>Photo Carousel</li>
                                            <li>Contact Form</li>
                                            <li>Navbar/Menu</li>
                                            <li>Social Media Links</li>
                                            <li>Blog/Newsfeed</li>
                                            <li>Catalog/Menu/Prices</li>
                                            <li>Order Online Integration</li>
                                            <li>User Accounts (save favorites, order history, etc)</li>
                                        </ul>

                                </div>
                                <div className="project-frame">
                                    <div className="project-img"><img src={Port6} alt=""/></div>
                                    {/*<div className="project-img"><img src={"#"} alt=""/></div>*/}
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
            </div>
            <div className="mainFoot">

            </div>
        </>
    )
}

export default Restaurant;