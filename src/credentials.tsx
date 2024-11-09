/*
React Portfolio Project - (c)2024 Lance Stubblefield
--------------------------------------------------------------------------------------
Requires Vite, React.JS, React-Router-Dom, Typescript, Tailwind CSS, PostCSS, PostCSS-custom-properties
credentials.tsx
######################################################################################
 */

import './credentials.css'

//Profiles
import LinkedIn from './images/linkedin.webp'
import YouTube from './images/youtube.webp'
import Upwork from './images/upwork.webp'
import Github from './images/github.webp'

//Certificates
import UCdavisSEO from './images/googleSEO.webp'
import Tailwind from './images/tailwind.webp'
import JHweb from './images/jhWeb.webp'
import GoogleUX from './images/googleUX.webp'
import IBMreact from './images/ibmReact.webp'


function Credentials() {
    return (
        <>
            <div className="mainHead">
                <h1> Hey!!! Look at me!</h1>


            </div>
            <div className="mainBody">
                <h2 className="credTitle">Certificates</h2>
                <div className="library">

                    <div className="webcard">
                        <a href="https://coursera.org/verify/professional-cert/GBZ94C0VRDNX" target="_blank">
                            <div className="webimage2"><img src={GoogleUX} alt="Google UX Design Certificate"/></div>
                            <div className="webcaption2"> Google UX Design by Google.
                                <br/>August 10, 2024
                            </div>
                        </a>
                    </div>
                    <div className="webcard">
                        <a href="https://coursera.org/verify/specialization/67VEGLRRFHB4" target="_blank">
                            <div className="webimage2"><img src={UCdavisSEO} alt="UC Davis SEO Certificate"/></div>
                            <div className="webcaption2"> Search Engine Optimization (SEO) by University of California,
                                Davis.
                                <br/>October 16, 2024
                            </div>
                        </a>
                    </div>
                    <div className="webcard">
                        <a href="https://coursera.org/verify/R6MGASA16JOG" target="_blank">
                            <div className="webimage2"><img src={Tailwind} alt="Scrimba Tailwind CSS Certificate"/>
                            </div>
                            <div className="webcaption2"> Tailwind CSS by Scrimba,
                                Davis on Coursera. <br/>October 8, 2024
                            </div>
                        </a>
                    </div>
                    <div className="webcard">
                        <a href="https://coursera.org/verify/235GO6LGQZ60" target="_blank">
                            <div className="webimage2"><img src={JHweb} alt="John Hopkins Web Developer Certificate"/>
                            </div>
                            <div className="webcaption2"> HTML, CSS, and Javascript for Web Developers by Johns Hopkins
                                University.
                                <br/>October 4, 2024
                            </div>
                        </a>
                    </div>
                    <div className="webcard">
                        <a href="https://coursera.org/verify/PC3I48Z5A9QH" target="_blank">
                            <div className="webimage2"><img src={IBMreact} alt="IBM React/Front-End Certificate"/></div>
                            <div className="webcaption2"> Developing Front-End Apps with React by IBM.
                                <br/>September 30, 2024
                            </div>
                        </a>
                    </div>

                </div>
                <div className="followup">
                    <p>Currently enrolled in 'IBM Full Stack Software Developer', 'IBM Full Stack Javascript Developer',
                        and
                        'Meta Front-End Developer'
                        certificate courses.</p>
                </div>
                <hr className="resumeDivider"/>
                <h2 className="credTitle">Profiles</h2>
                <div className="library">
                    <div className="webcard">
                        <a href="https://github.com/TimeSentinel" target="_blank">
                            <div className="webimage"><img src={Github} alt="Github Page"/></div>
                            <div className="webcaption"> View my code on GitHub</div>
                        </a>
                    </div>
                    <div className="webcard">
                        <a href="https://www.linkedin.com/in/lance-stubblefield-designer/" target="_blank">
                            <div className="webimage"><img src={LinkedIn} alt="LinkedIn Page"/></div>
                            <div className="webcaption">Connect with me on LinkedIn</div>
                        </a>
                    </div>
                    <div className="webcard">
                        <a href="https://www.upwork.com/freelancers/timesentinel" target="_blank">
                            <div className="webimage"><img src={Upwork} alt="Upwork Page"/></div>
                            <div className="webcaption">Hire me on Upwork</div>
                        </a>
                    </div>
                    <div className="webcard">
                        <a href="https://www.youtube.com/@Sol3-l5j" target="_blank">
                            <div className="webimage"><img src={YouTube} alt="youTube Page"/></div>
                            <div className="webcaption">Watch my videos on youTube</div>
                        </a>
                    </div>
                </div>
            </div>
            <hr className="resumeDivider"/>
            <div className="mainFoot">
                {/*skills and experience table*/}
                <div className="divTable">
                    <div className="tblHead">
                        <h2 className="credTitle">Skills</h2>
                    </div>
                    <div className="tblRow">
                        <div className="tblCol tblSub">Web Development</div>
                        <div className="tblCol2">Full Stack; Front End, Back End, API</div>
                        <div className="tblCol tblInfo">HTML, XML, JSON, CSS, Javascript, AJAX, React, PHP,
                            ASP.net, Database Integration
                        </div>
                    </div>
                    <div className="tblRow tblDivider"></div>
                    <div className="tblRow">
                        <div className="tblCol tblSub">UX Design</div>
                        <div className="tblCol2">Research and Design</div>
                        <div className="tblCol tblInfo">Empathy Maps, Competitive Audits, Storyboards, Sitemaps,
                            Wireframes, Prototypes, Sticker Sheets, Case Studies
                        </div>
                    </div>
                    <div className="tblRow tblDivider"></div>
                    <div className="tblRow">
                        <div className="tblCol tblSub">Database Admin</div>
                        <div className="tblCol2">Design, Install, and Maintain. Interface Development
                        </div>
                        <div className="tblCol tblInfo">SQL, noSQL, Access, MongoDB, MS SQL, MySQL</div>
                    </div>
                    <div className="tblRow tblDivider"></div>
                    <div className="tblRow">
                        <div className="tblCol tblSub">App Development</div>
                        <div className="tblCol2">Android, Windows, Linux</div>
                        <div className="tblCol tblInfo">Python, Java/Kotlin, VBA</div>
                    </div>
                    <div className="tblRow tblDivider"></div>
                    <div className="tblRow">
                        <div className="tblCol tblSub">Data Analysis</div>
                        <div className="tblCol2">Analysis, Report Writing, Live Reporting, Pivot
                            Tables, API Integration
                        </div>
                        <div className="tblCol tblInfo">Excel, Crystal Reports, Powerpoint, Power BI, Syspro,
                            Google Docs
                        </div>
                    </div>
                    <div className="tblFoot"><br/><br/><br/></div>
                </div>
                <div className="tblRow tblDivider"></div>
                <div className="divTable">
                    {/*recent jobs*/}
                    <div className="tblHead">
                        <h2 className="credTitle">Recent Positions</h2>
                    </div>
                    <div className="tblRow">
                        <div className="tblCol tblSub">Current</div>
                        <div className="tblCol2">
                            <div className="jobPosition">Freelance Full-Stack Developer</div>
                            <div className="jobLocation"></div>
                        </div>
                        <div className="tblCol3">Specialties: HTML/CSS, Javascript, React, databases,
                            php, ASP.
                        </div>
                        <div className="tblCol tblDesc">Work with local businesses and in freelance forums to
                            design
                            creative solutions to meet their communications needs.
                        </div>
                    </div>
                    <div className="tblRow tblDivider"></div>
                    <div className="tblRow">
                        <div className="tblCol tblSub">2008 - Present</div>
                        <div className="tblCol2">
                            <div className="jobPosition">Office Coordinator</div>
                            <div className="jobLocation">Interstate Advanced Materials</div>
                        </div>
                        <div className="tblCol3">Technologies: Excel/Word, VBA, Android Studio/Kotlin,
                            Access/MariaDB, Syspro, Crystal Reports
                        </div>
                        <div className="tblCol tblDesc">Mostly financial processing and report writing.
                            Managed branch purchasing and inventory as well.
                            Designed many production procedures and implemented technologies.
                            Even created a couple android apps for scanning and tracking inventory (see screenshots in
                            Archives)
                        </div>
                    </div>
                    <div className="tblRow tblDivider"></div>
                    <div className="tblRow">
                        <div className="tblCol tblSub">2010 - Present</div>
                        <div className="tblCol2">
                            <div className="jobPosition">Freelance Business Analyst</div>
                            <div className="jobLocation"></div>
                        </div>
                        <div className="tblCol3">Technologies: Excel, Database, VBA, REST APIs (using,
                            not developing).
                        </div>
                        <div className="tblCol tblDesc">Data analysis and report writing for several remote
                            and local customers.
                        </div>
                    </div>
                    <div className="tblFoot"><br/><br/><br/></div>
                </div>
                <div className="divTable">
                    {/*previous jobs*/}
                    <div className="tblHead">
                        <h2 className="credTitle">Previous Jobs</h2>
                    </div>
                    <div className="tblRow">
                        <div className="tblCol tblSub">2003 - 2005</div>
                        <div className="tblCol2">
                            <div className="tblCol jobPosition">Systems Analyst 3</div>
                            <div className="tblCol jobLocation">Hollywood Entertainment; Wilsonville, OR</div>
                        </div>
                        <div className="tblInfo">From the NOC, used dial-up and satellite connections to retrieve
                            missing
                            data from the 2600+ remote locations.
                        </div>
                    </div>
                    <div className="tblRow tblDivider"></div>
                    <div className="tblRow">
                        <div className="tblCol "></div>
                        <div className="tblCol tblSub">2000 - 2003</div>
                        <div className="tblCol2">
                            <div className="tblCol jobPosition">Graphic Designer</div>
                            <div className="tblCol jobLocation">Kopyworld.com; Beaverton, OR</div>
                        </div>
                        <div className="tblInfo">Creative print designs and photo editing using Photoshop,
                            Illustrator, Mac OS.
                        </div>
                    </div>
                    <div className="tblRow tblDivider"></div>
                    <div className="tblRow">
                        <div className="tblCol "></div>
                        <div className="tblCol tblSub">1998 - 2000</div>
                        <div className="tblCol2">
                            <div className="tblCol jobPosition">Y2k Project Manager</div>
                            <div className="tblCol jobLocation">Epson; Portland/San Jose/Redmond</div>
                        </div>
                        <div className="tblInfo">Tested, researched, updated/patched, and documented all
                            computerized electronics in the facilities.
                        </div>

                    </div>
                    <div className="tblRow tblDivider"></div>
                    <div className="tblRow">
                        <div className="tblCol"></div>
                        <div className="tblCol tblSub">1999 - 2000</div>
                        <div className="tblCol2">
                            <div className="tblCol jobPosition">Y2K Tech</div>
                            <div className="tblCol jobLocation">Warm Springs Reservation</div>
                        </div>
                        <div className="tblInfo">Project involved replacing all desktop PCs in
                            every government facility on the reservation.
                        </div>

                    </div>
                    <div className="tblFoot"><br/><br/><br/></div>
                </div>
            </div>


        </>
    )
}

export default Credentials;