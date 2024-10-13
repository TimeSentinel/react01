import './filmstrip.css'

function Filmstrip(img1: string, imgAlt1: string, img2: string, imgAlt2: string, img3: string, imgAlt3: string) {
    return (
        <>
            <div className="filmstrip">
                <div className="tractionTop">
                    <div className="traction"></div>
                    <div className="traction"></div>
                    <div className="traction"></div>
                    <div className="traction"></div>
                    <div className="traction"></div>
                    <div className="traction"></div>
                    <div className="traction"></div>
                    <div className="traction"></div>
                    <div className="traction"></div>
                    <div className="traction"></div>
                    <div className="traction"></div>
                    <div className="traction"></div>
                </div>
                <div className="filmGallery">
                <div className="frame-1">
                        <img src={img1} alt={imgAlt1} className="frameImg"/>
                    </div>
                    <div className="frame-2">
                        <img src={img2} alt={imgAlt2} className="frameImg"/>
                    </div>
                    <div className="frame-3">
                        <img src={img3} alt={imgAlt3} className="frameImg"/>
                    </div>
                </div>
                <div className="tractionBottom">
                    <div className="traction"></div>
                    <div className="traction"></div>
                    <div className="traction"></div>
                    <div className="traction"></div>
                    <div className="traction"></div>
                    <div className="traction"></div>
                    <div className="traction"></div>
                    <div className="traction"></div>
                    <div className="traction"></div>
                    <div className="traction"></div>
                    <div className="traction"></div>
                    <div className="traction"></div>
                </div>
            </div>

        </>
    )
}

export default Filmstrip;