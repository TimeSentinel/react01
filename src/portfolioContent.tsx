import PortfolioCarousel from "./portfolio-carousel.tsx";
import Filmstrip from "./filmstrip.tsx";

// import ArchiveCarousel from "./archive-carousel.tsx";

function MainContent() {
    return (
        <>
            <div className="main-head">
                <PortfolioCarousel/>
            </div>
            <div className="main-body">
                {Filmstrip("../images/c1pos2.png","VYSO Logo","../images/c1pos1.png","Figma Wireframe","../images/c1pos3.png","VYSO Stickersheet")}
            </div>


        </>
    )
}

export default MainContent;
