import PortfolioCarousel from "./portfolio-carousel.tsx";
import Slideshow from "./slideshow.tsx";

// import ArchiveCarousel from "./slideshow.tsx";

function MainContent() {


    return (
        <>
            <div className="main-head">
                <PortfolioCarousel/>
            </div>
            <div className="main-body">
                <Slideshow/>
            </div>


        </>
    )
}

export default MainContent;
