import CRPfigma from './images/cnc-figma.webp'
import CRPhome from './images/cnc-home.webp'
import CRPcontact from './images/cnc-contact.webp'



function Portfolio() {

    return (
        <>

            <div className="mainHead">
                <h1>Previous Work</h1>
                <p>
                    Here is some of my recent works.
                    Please use the contact form from the menu or the email address in the footer if you have any
                    questions or suggestions.
                    <br/><br/>
                    Thanks for taking a look!
                </p>
            </div>
            <div className="mainBody">
                <div className="content-section">
                    <h2>Smaill Business Sites</h2>
                    <div className="projects">
                        {/*----- project card -----    */}
                        <div className="project-card">
                            <div className="project-title">
                                <h3><a href="#"> CNC Router Pros</a></h3>
                            </div>
                            <div className="project-item">
                                <div className="project-description">
                                    <p>
                                        The owner of a local (<i>to me</i>) start-up cnc machine shop wanted a website
                                        to give him an online presence. The project was driven by the desire to give
                                        his cnc business some legitimacy. He started with no photos or content, so we had
                                        to start mostly from scratch. <br/><br/>
                                        An AI generated logo was the inspiration for the color palette and basic theme. <br/><br/>
                                        I started with a figma prototype to workout the general flow of the site and get his
                                        approval to move forward with the project.<br/><br/>
                                        For now, he is satisfied with a simple three-page layout, but we are already planning on adding
                                         a gallery and online shop in the near future.
                                        <br/><br/>
                                        The site was coded using Vite-React-Typescript with Tailwind CSS.
                                    </p>

                                    <div className="liveLink">
                                        <a href="https://crp.sol3.one" target="_blank">Live Site</a>
                                    </div>

                                </div>
                                <div className="project-frame">
                                    <div className="project-img"><img src={CRPfigma} alt="Figma Prototype for CNC Router Pros"/>
                                    <div className="caption">CRP Figma Prototype</div>
                                    </div>
                                    <div className="project-img"><img src={CRPhome} alt="Home page for CNC Router Pros"/>
                                        <div className="caption">CRP Home Page</div>
                                    </div>
                                    <div className="project-img"><img src={CRPcontact} alt="Contact page for CNC Router Pros"/>
                                        <div className="caption">CRP Contact Page</div>
                                    </div>
                                </div>
                            </div>
                                {/* project-item */}
                        </div>
                        {/*----- end project card -----       */}
                        {/*----- project card -----    */}
                        <div className="project-card">
                            <div className="project-title">
                                <h3><a href="#">Harry Bananas</a></h3>
                            </div>
                            <div className="project-item">
                                <div className="project-description">
                                    <p>
                                        This is a quick and easy restaurant site made as a school project.
                                        <br/><br/>
                                        It is a quick and simple page with a lot of content and style. All images are roylaty free.
                                        <br/><br/>
                                        This site was done in Vite-React-TypeScript.

                                    </p>
                                    <div className="liveLink">
                                        <a href="https://hairybanana.sol3.one/" target="_blank">Live Site</a>
                                    </div>
                                </div>
                                <div className="project-frame">
                                    <div className="project-img"><img src={"#"} alt=""/></div>
                                    <div className="project-img"><img src={"#"} alt=""/></div>
                                    <div className="project-img"><img src={"#"} alt=""/></div>
                                </div>
                            </div>
                            {/* project-item */}
                        </div>
                        {/*----- end project card -----       */}
                        {/*----- project card -----    */}
                        <div className="project-card">
                            <div className="project-title">
                                <h3><a href="#"> M&M Cleaning Services </a></h3>
                            </div>
                            <div className="project-item">
                                <div className="project-description">
                                    <p>
                                        This was an early project for a local janitorial company that wanted to be able to compete
                                        with other local cleaning services.
                                        <br/><br/>
                                        This is a Wordpress site with a modified, custom template.

                                    </p>
                                    <div className="liveLink">
                                        <a href="#" target="_blank">Live Site</a>
                                    </div>
                                </div>
                                <div className="project-frame">
                                    <div className="project-img"><img src={"#"} alt=""/></div>
                                    <div className="project-img"><img src={"#"} alt=""/></div>
                                    <div className="project-img"><img src={"#"} alt=""/></div>
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
                    <h2>Specialty Projects</h2>
                    <div className="projects">
                        {/*----- project card -----    */}
                        <div className="project-card">
                            <div className="project-title">
                                <h3><a href="#"> The bestest title! </a></h3>
                            </div>
                            <div className="project-item">
                                <div className="project-description">
                                    <p>
                                        A lovely description goes here
                                    </p>
                                </div>
                                <div className="project-frame">
                                    <div className="project-img"><img src={"#"} alt=""/></div>
                                    <div className="project-img"><img src={"#"} alt=""/></div>
                                    <div className="project-img"><img src={"#"} alt=""/></div>
                                </div>
                            </div>
                            {/* project-item */}
                        </div>
                        {/*----- end project card -----       */}
                        {/*----- project card -----    */}
                        <div className="project-card">
                            <div className="project-title">
                                <h3><a href="#"> The bestest title! </a></h3>
                            </div>
                            <div className="project-item">
                                <div className="project-description">
                                    <p>
                                        A lovely description goes here
                                    </p>
                                </div>
                                <div className="project-frame">
                                    <div className="project-img"><img src={"#"} alt=""/></div>
                                    <div className="project-img"><img src={"#"} alt=""/></div>
                                    <div className="project-img"><img src={"#"} alt=""/></div>
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

export default Portfolio