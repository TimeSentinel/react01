import Filmstrip from "./filmstrip.tsx";
import './slideshow.css'


document.addEventListener("DOMContentLoaded",
    function () {
        const slideInterval: number = setInterval(nextSlide, 3000);
        console.log("interval --> " + slideInterval)
        let currentSlide = 0;

        function nextSlide() {
            const slides = document.querySelectorAll('#slides .slide');
            slides[currentSlide].className = 'slide';
            currentSlide = (currentSlide + 1) % slides.length;
            // console.log("-New Slide --> " + currentSlide)
            slides[currentSlide].className = 'slide showing';
        }

    })


function Slideshow() {


    interface filmFrame {
        item: number;
        src1: string;
        alt1: string;
        src2: string;
        alt2: string;
        src3: string;
        alt3: string;
    }

    const filmFrameArray: filmFrame[] = [
        {
            item: 1,
            src1: "../images/c1pos2.png", alt1: "Figma Wireframe",
            src2: "../images/c1pos1.png", alt2: "VYSO Logo",
            src3: "../images/c1pos3.png", alt3: "VYSO Stickersheet"
        },
        {
            item: 2,
            src1: "../images/c1pos2.png", alt1: "Figma Wireframe",
            src2: "../images/c1pos1.png", alt2: "VYSO Logo",
            src3: "../images/c1pos3.png", alt3: "VYSO Stickersheet"
        },
        {
            item: 3,
            src1: "../images/c1pos2.png", alt1: "Figma Wireframe",
            src2: "../images/c1pos1.png", alt2: "VYSO Logo",
            src3: "../images/c1pos3.png", alt3: "VYSO Stickersheet"
        },
        {
            item: 4,
            src1: "../images/c1pos2.png", alt1: "Figma Wireframe",
            src2: "../images/c1pos1.png", alt2: "VYSO Logo",
            src3: "../images/c1pos3.png", alt3: "VYSO Stickersheet"
        },
    ]

    return (
        <>

            <ul className="slides-container" id="slides">
                {/*todo: loop through array for number of slides*/}
                <li className="slide showing">
                    {Filmstrip(filmFrameArray[0].src1, filmFrameArray[0].alt1, filmFrameArray[0].src2, filmFrameArray[0].alt2, filmFrameArray[0].src3, filmFrameArray[0].alt3,)}
                </li>
                <li className="slide">
                    {Filmstrip(filmFrameArray[1].src3, filmFrameArray[1].alt3, filmFrameArray[1].src1, filmFrameArray[1].alt1, filmFrameArray[1].src2, filmFrameArray[1].alt2,)}
                </li>
                <li className="slide">
                    {Filmstrip(filmFrameArray[2].src1, filmFrameArray[2].alt1, filmFrameArray[2].src2, filmFrameArray[2].alt2, filmFrameArray[2].src3, filmFrameArray[2].alt3,)}
                </li>
                <li className="slide">
                    {Filmstrip(filmFrameArray[3].src2, filmFrameArray[3].alt1, filmFrameArray[3].src3, filmFrameArray[3].alt2, filmFrameArray[3].src1, filmFrameArray[3].alt3,)}
                </li>
            </ul>
            {/*{changeMe()}*/}
        </>
    )
}

export default Slideshow;