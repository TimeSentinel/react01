import {images} from './images/slideImages.ts'
import Filmstrip from "./filmstrip.tsx";
import './slideshow.css'

console.log(images.length)
document.addEventListener("DOMContentLoaded",
    function () {
        const slideInterval: number = setInterval(nextSlide, 3000);
        console.log("interval --> " + slideInterval)
        let currentSlide = 0;

        function nextSlide() {
            const slides = document.querySelectorAll('#slides .slide');
            slides[currentSlide].className = 'slide';
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].className = 'slide showing';
        }
    })

function Slideshow() {
    function slideLoop() {
        const items = [];
        for (let i = 0; i < images.length; i++) {
            items.push(
                <li className="slide" key={i}>
                    {Filmstrip(images[i].image, images[i].alt, images[++i].image, images[++i].alt, images[++i].image, images[++i].alt)}
                </li>
            )
        }
        return (
            <>
                <ul className="slides-container" id="slides">
                    {items}
                </ul>
            </>
        )
    }

    return (
        <>
            <ul className="slides-container" id="slides">
                {slideLoop()}
            </ul>
        </>
    )
}

export default Slideshow;