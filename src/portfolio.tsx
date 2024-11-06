import CRPfigma from './images/cnc-figma.webp'
import CRPhome from './images/cnc-home.webp'
import CRPcontact from './images/cnc-contact.webp'
import HBhome from './images/hb-main.webp'
import HBmenu from './images/hb-menu.webp'
import HBgallery from './images/hb-gallery.webp'
import HBabout from './images/hb-about.webp'
import MMmain from './images/mm-main.webp'
import MMfoot from './images/mm-foot.webp'
import MMcontact from './images/mm-contact.webp'
import LS1 from './images/ls-main.webp'
import LS2 from './images/ls2-main.webp'
import LS3 from './images/ls3-main.webp'


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
                                        his cnc business some legitimacy. He started with no photos or content, so we
                                        had
                                        to start mostly from scratch. <br/><br/>
                                        An AI generated logo was the inspiration for the color palette and basic
                                        theme. <br/><br/>
                                        I started with a figma prototype to workout the general flow of the site and get
                                        his
                                        approval to move forward with the project.<br/><br/>
                                        For now, he is satisfied with a simple three-page layout, but we are already
                                        planning on adding
                                        a gallery and online shop in the near future.
                                        <br/><br/>
                                        The site was coded using Vite-React-Typescript with Tailwind CSS.
                                    </p>
                                    <hr className="divider"/>
                                    <div className="review">
                                        "Communication through UpWork was outstanding.
                                        They provided valuable feedback, helping me make informed decisions on key
                                        aspects of the project. Highly recommend!"
                                        <br/><br/>
                                        - Julio
                                    </div>

                                    <div className="liveLink">
                                        <a href="https://crp.sol3.one" target="_blank">Live Site</a>
                                    </div>

                                </div>
                                <div className="project-frame">
                                    <div className="project-img"><img src={CRPfigma}
                                                                      alt="Figma Prototype for CNC Router Pros"/>
                                        <div className="caption">CRP Figma Prototype</div>
                                    </div>
                                    <div className="project-img"><img src={CRPhome}
                                                                      alt="Home page for CNC Router Pros"/>
                                        <div className="caption">CRP Home Page</div>
                                    </div>
                                    <div className="project-img"><img src={CRPcontact}
                                                                      alt="Contact page for CNC Router Pros"/>
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
                                        It is a quick and simple page with a lot of content and style. All images are
                                        roylaty free.
                                        <br/><br/>
                                        This site was done in Vite-React-TypeScript.
                                    </p>
                                    <hr className="divider"/>
                                    <div className="review">"I recently had a website created for me, and I couldn't be
                                        happier
                                        with the results! The design is clean and user-friendly, making navigation a
                                        breeze.
                                        The responsiveness on both desktop and mobile devices is impressive, ensuring a
                                        great
                                        experience for all visitors.
                                        <br/><br/>
                                        The freelancer was incredibly professional, listening to my needs and
                                        incorporating my
                                        feedback throughout the process. They delivered the project on time and was
                                        always available for questions.
                                        <br/><br/>
                                        Overall, this website perfectly represents my brand and serves its purpose
                                        effectively.
                                        I highly recommend their services to anyone looking to enhance their online
                                        presence!"
                                        <br/><br/>
                                        - Eli
                                    </div>
                                    <div className="liveLink">
                                        <a href="https://hairybanana.sol3.one/" target="_blank">Live Site</a>
                                    </div>
                                </div>
                                <div className="project-frame">
                                    <div className="project-img"><img src={HBhome} alt="Harry Banana home page"/>
                                        <div className="caption">Harry Banana Home Page</div>
                                    </div>
                                    <div className="project-img"><img src={HBgallery} alt="Harry Banana gallery"/>
                                        <div className="caption">Harry Banana Gallery Section</div>
                                    </div>
                                    <div className="project-img"><img src={HBabout} alt="Harry Banana about page"/>
                                        <div className="caption">Harry Banana About Section</div>
                                    </div>
                                    <div className="project-img"><img src={HBmenu} alt="Harry Banana menu section"/>
                                        <div className="caption">Harry Banana Menu Section</div>
                                    </div>
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
                                        This was an early project for a local janitorial company that wanted to be able
                                        to compete
                                        with other local cleaning services.
                                        <br/><br/>
                                        This is a Wordpress site with a modified, custom template.

                                    </p>
                                    <hr className="divider"/>
                                    <div className="review">
                                        "Overall very pleased with Lance and his friendliness with us.
                                        He did everything we asked in a timely manner. I will definitely be recommending
                                        him to other companies.
                                        Thanks for such good work"
                                        <br/><br/>
                                        - Melvin
                                    </div>
                                    <div className="liveLink">
                                        <a href="https://mm-cleaningservices.com" target="_blank">Live Site</a>
                                    </div>
                                </div>
                                <div className="project-frame">
                                    <div className="project-img"><img src={MMmain} alt="M&M Cleaning Main Page - Top"/>
                                        <div className="caption">M&M Cleaning Main Page - Top</div>
                                    </div>
                                    <div className="project-img"><img src={MMcontact} alt="M&M Cleaing Contact Page"/>
                                        <div className="caption">M&M Cleaing Contact Page</div>
                                    </div>
                                    <div className="project-img"><img src={MMfoot} alt="M&M Cleaning Page Footer"/>
                                        <div className="caption">M&M Cleaning Page Footer</div>
                                    </div>
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
                    <h2>Project Pages</h2>
                    <div className="projects">
                        {/*----- project card -----    */}
                        <div className="project-card">
                            <div className="project-title">
                                <h3><a href="#">Previous Designer Portfolios</a></h3>
                            </div>
                            <div className="project-item">
                                <div className="project-description">
                                    <p>
                                        These are previous portfolio sites of mine.
                                    </p>
                                </div>
                                <div className="project-frame">
                                    <div className="project-img"><a href="https://lance.aervela.com"><img src={LS2}
                                                                                                          alt="Lance's previous portfolio site"/></a>
                                    </div>
                                    <div className="project-img"><a href="https://photo.sol3.one"><img src={LS3}
                                                                                                       alt="Lance's photo portfolio"/></a>
                                    </div>
                                    <div className="project-img"><a href="https://lance.allppl.me"><img src={LS1}
                                                                                                        alt="Lance's sample gallery"/></a>
                                    </div>

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