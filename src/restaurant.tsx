/*
React Portfolio Project - (c)2024 Lance Stubblefield
--------------------------------------------------------------------------------------
Requires Vite, React.JS, React-Router-Dom, Typescript, Tailwind CSS, PostCSS, PostCSS-custom-properties
restaurant.tsx
######################################################################################
 */

function Restaurant() {
    return (
        <>
            <div className="mainHead">
                <h1>Restaurant / Food Service Sites</h1>
                <p>
                    Some desciption for food industry sites.
                </p>
            </div>
            <div className="mainBody">
                <div className="content-section">
                    <h2>Restaurant Packages</h2>
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
            <div className="mainFoot">

            </div>
        </>
    )
}

export default Restaurant;