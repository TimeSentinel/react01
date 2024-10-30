

function PortfolioCarousel() {
    return (
        <>
            <div className="carousel-main">
                <br/>
                <div id="myCarousel" className="carousel " data-ride="carousel" data-interval="false">
                    <div className="carousel-selectors">
                        <ol className="carousel-indicators ">
                            <li data-target="#myCarousel" data-slide-to="0" className="crsl-indicator active"></li>
                            <li data-target="#myCarousel" data-slide-to="1" className="crsl-indicator "></li>
                            <li data-target="#myCarousel" data-slide-to="2" className="crsl-indicator "></li>
                            <li data-target="#myCarousel" data-slide-to="3" className="crsl-indicator "></li>
                        </ol>
                    </div>
                    <div className="carousel-inner carousel-container" role="listbox">

                        <div className="item active">
                            <div className="carousel-img">
                                <img src="/src/images/c6pos1.png" alt="Drone Website"/></div>
                            <div className="carousel-summary">
                                <h3>Drone Website</h3>
                                <p>Customized WordPress site.</p>
                            </div>
                            <div className="w-full h-screen content-center">

                            </div>
                        </div>

                        <div className="item ">
                            <div className="carousel-img">
                                <img src="/src/images/c3pos2.png" alt="Travel Photo Journal"/></div>
                            <div className="carousel-summary">
                                <h3>Travel Photo Journal</h3>
                                <p>Personal photo journal project to share travel photo galleries</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="carousel-img">
                                <img src="/src/images/c2pos3.png" alt="M&M Cleaning Services website"/></div>
                            <div className="carousel-summary">
                                <h3>M&M Cleaning Services</h3>
                                <p>Local janitorial website using Joomla and Nicepage.</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="carousel-img">
                                <img src="/src/images/c4pos3.png" alt="Travel Info site for class"/></div>
                            <div className="carousel-summary">
                                <h3>Class Project</h3>
                                <p>Goal was to create a search function that retrieved JSON data</p>
                            </div>
                        </div>

                    </div>

                    <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>

        </>
    )
}

export default PortfolioCarousel;
