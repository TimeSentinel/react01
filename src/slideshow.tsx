import Filmstrip from "./filmstrip.tsx";
import './slideshow.css'
import image1 from './images/samples/1a.webp'
import image2 from './images/samples/1b.webp'
import image3 from './images/samples/1c.webp'
import image4 from './images/samples/2a.webp'
import image5 from './images/samples/2b.webp'
import image6 from './images/samples/2c.webp'
import image7 from './images/samples/3a.webp'
import image8 from './images/samples/3b.webp'
import image9 from './images/samples/3c.webp'
import image10 from './images/samples/4a.webp'
import image11 from './images/samples/4b.webp'
import image12 from './images/samples/4c.webp'

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
        src1: object;
        alt1: string;
        src2: object;
        alt2: string;
        src3: object;
        alt3: string;
    }

    const filmFrameArray: filmFrame[] = [
        {
            item: 1,
            src1: {image1}, alt1: "image 1",
            src2: {image2}, alt2: "image 2",
            src3: {image3}, alt3: "image 3"
        },
        {
            item: 2,
            src1: {image4}, alt1: "image 4",
            src2: {image5}, alt2: "image 5",
            src3: {image6}, alt3: "image 6",
        },
        {
            item: 3,
            src1: {image7}, alt1: "image 7",
            src2: {image8}, alt2: "image 8",
            src3: {image9}, alt3: "image 9"
        },
        {
            item: 4,
            src1: {image10}, alt1: "image 10",
            src2: {image11}, alt2: "image 11",
            src3: {image12}, alt3: "image 12"
        },
    ]

    return (
        <>
            <ul className="slides-container" id="slides">
                {filmFrameArray.map(function(data) {
                    return (
                        <li className="slide">
                            {Filmstrip(data.src1, data.alt1, data.src2, data.alt2, data.src3, data.alt3,)}
                        </li>
                    )
                    }
                )}
            </ul>
        </>
    )
}

export default Slideshow;