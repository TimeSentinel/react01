function Carousel() {
    return (
        <>
            <div className="a-carousel-main">
                <br/>
                <div id="aCarousel" className="carousel " data-ride="carousel">
                    <div className="carousel-selectors">
                        <ol className="carousel-indicators ">
                            <li data-target="#aCarousel" data-slide-to="0" className="crsl-indicator active"></li>
                            <li data-target="#aCarousel" data-slide-to="1" className="crsl-indicator "></li>
                            <li data-target="#aCarousel" data-slide-to="2" className="crsl-indicator "></li>
                            <li data-target="#aCarousel" data-slide-to="3" className="crsl-indicator "></li>
                        </ol>
                    </div>
                    <div className="carousel-inner carousel-container" role="listbox">

                        <div className="item active">
                            <div className="a-carousel-img">
                                <img src="/images/c6pos1.png" alt="Drone Website"/></div>
                            <div className="a-carousel-summary">
                                <h3>Drone Website</h3>
                                <p>Customized WordPress site.</p>
                            </div>

                        </div>

                        <div className="item ">
                            <div className="a-carousel-img">
                                <img src="/images/c3pos2.png" alt="Travel Photo Journal"/></div>
                            <div className="a-carousel-summary">
                                <h3>Travel Photo Journal</h3>
                                <p>Personal photo journal project to share travel photo galleries</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="a-carousel-img">
                                <img src="/images/c2pos3.png" alt="M&M Cleaning Services website"/></div>
                            <div className="a-carousel-summary">
                                <h3>M&M Cleaning Services</h3>
                                <p>Local janitorial website using Joomla and Nicepage.</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="a-carousel-img">
                                <img src="/images/c4pos3.png" alt="Travel Info site for class"/></div>
                            <div className="a-carousel-summary">
                                <h3>Class Project</h3>
                                <p>Goal was to create a search function that retrieved JSON data</p>
                            </div>
                        </div>

                    </div>


                </div>
            </div>

        </>
    )
}

export default Carousel;