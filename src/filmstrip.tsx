/*
Custom Filmstrip Module - (c)2024 Lance Stubblefield
--------------------------------------------------------------------------------------
Files Required slideshow.tsx, slideshow.css, filmstrip.tsx, filmstrip.css
Images must be listed in /photos/slideImages.ts
Requires React.JS, Typescript, Tailwind CSS, PostCSS, PostCSS-custom-properties
######################################################################################
 */

import './filmstrip.css'

function Filmstrip(pic1: string, alt1: string, pic2: string, alt2: string, pic3: string, alt3: string) {
    return (
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
            <div className="tagline">photos by lance</div>
            <div className="filmGallery">
                <div className="frame-1">
                    <img src={pic1} alt={alt1} className="frameImg"/>
                </div>
                <div className="frame-2">
                    <img src={pic2} alt={alt2} className="frameImg"/>
                </div>
                <div className="frame-3">
                    <img src={pic3} alt={alt3} className="frameImg"/>
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
    )
}

export default Filmstrip;