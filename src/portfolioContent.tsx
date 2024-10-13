import PortfolioCarousel from "./portfolio-carousel.tsx";
import ArchiveCarousel from "./archive-carousel.tsx";

function MainContent() {
    return (
        <>
            <div className="main-head">
                <PortfolioCarousel/>
            </div>
            <div className="main-body">
                <ArchiveCarousel/>
            </div>


        </>
    )
}

export default MainContent;
