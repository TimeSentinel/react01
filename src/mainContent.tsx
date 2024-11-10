/*
React Portfolio Project - (c)2024 Lance Stubblefield
--------------------------------------------------------------------------------------
Requires Vite, React.JS, React-Router-Dom, Typescript, Tailwind CSS, PostCSS, PostCSS-custom-properties
mainContent.tsx: home/root page
######################################################################################
 */

function MainContent() {


    return (
        <>
            <div className="mainHead">
                <h1>Unique Web Pages</h1>
                <p>
                    Hello, and welcome to my portfolio project. My name is Lance and I create websites. <br/>
                    I put together the design, write the code, test and help you get it up and running.
                    <br/><br/>
                    Like most designers, I have a collection of certificates and years of experience. If you are looking
                    for qualifications, see my resume page. <br/>
                    Take a look at the other pages on this site to get an idea of my design style.

                    <br/><br/>
                    <h3>Click on the contact link above and send me a message to start on your new website!</h3>
                </p>

            </div>
            <div className="mainBody">
                <h2>What can I do for you?</h2>
                <p>
                    I can bring your vision to life and present it to the world. After a short consultation,
                    I will have an idea of what colors, images, and layouts you are looking for.
                    Generally, I will do a little research on your industry and competition to figure out the best way
                    to introduce you into your market.
                </p>
                <h2>My Code</h2>
                <p>
                    My code is SEO friendly (<i>though I don't tend to focus on the marketing aspect exclusively</i>)
                    and written to the current 'best practices' of web technologies.
                    <br/>
                    All my sites are designed and tested to insure they look good in most environments.
                </p>
                <br/>
                <h3>Every site is tested on the following:</h3>
                <div className="table-half">
                    <div className="table-row">
                        <div className="column-4 table-title">OS/System</div>
                        <div className="column-4 table-title">Devices</div>
                        <div className="column-4 table-title">Browsers</div>
                    </div>
                    <div className="table-row">
                        <div className="column-4">
                            <ul>
                                <li>Linux</li>
                                <li>Mac</li>
                                <li>Windows</li>
                            </ul>
                        </div>
                        <div className="column-4">
                            <ul>
                                <li>Desktop</li>
                                <li>Tablet</li>
                                <li>Mobile</li>
                            </ul>
                        </div>
                        <div className="column-4">
                            <ul>
                                <li>Chrome</li>
                                <li>Firefox</li>
                                <li>Vivaldi</li>
                                <li>Sarari</li>
                                <li>Edge</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <br/>
            <br/>

            <div className="mainFoot">
                <h3>Thanks for checking out my site!</h3>
                <div className="imageFrame1"></div>
                <br/><br/><br/><br/>
            </div>

        </>
    )
}

export default MainContent;
