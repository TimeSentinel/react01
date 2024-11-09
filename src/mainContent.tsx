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
                    I believe most of you come to my site to find out what I can do for you...
                    <br/><br/>
                </p>
            </div>
            <div className="mainBody">
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
