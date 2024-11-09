/*
Custom Filmstrip Module - (c)2024 Lance Stubblefield
--------------------------------------------------------------------------------------
Files Required slideshow.tsx, slideshow.css, filmstrip.tsx, filmstrip.css
Images must be listed in slideImages.ts
Requires React.JS, Typescript, Tailwind CSS, PostCSS, PostCSS-custom-properties
######################################################################################
 */

const imgBase: string = '/src/images/photos/' //image folder
export const images: { image: string, alt: string } [] = [
    {image: imgBase + '001.webp', alt: 'image 1'},
    {image: imgBase + '002.webp', alt: 'image 2'},
    {image: imgBase + '003.webp', alt: 'image 3'},
    {image: imgBase + '004.webp', alt: 'image 4'},
    {image: imgBase + '005.webp', alt: 'image 5'},
    {image: imgBase + '006.webp', alt: 'image 6'},
    {image: imgBase + '007.webp', alt: 'image 7'},
    {image: imgBase + '008.webp', alt: 'image 8'},
    {image: imgBase + '009.webp', alt: 'image 9'},
    {image: imgBase + '010.webp', alt: 'image 10'},
    {image: imgBase + '011.webp', alt: 'image 11'},
    {image: imgBase + '012.webp', alt: 'image 12'},
    {image: imgBase + '013.webp', alt: 'image 13'},
    {image: imgBase + '014.webp', alt: 'image 14'},
    {image: imgBase + '015.webp', alt: 'image 15'},
    {image: imgBase + '016.webp', alt: 'image 16'},
    {image: imgBase + '017.webp', alt: 'image 17'},
    {image: imgBase + '018.webp', alt: 'image 18'},
    {image: imgBase + '019.webp', alt: 'image 19'},
    {image: imgBase + '020.webp', alt: 'image 20'},
    {image: imgBase + '021.webp', alt: 'image 21'},
    {image: imgBase + '022.webp', alt: 'image 22'},
    {image: imgBase + '023.webp', alt: 'image 23'},
    {image: imgBase + '024.webp', alt: 'image 24'},
    {image: imgBase + '025.webp', alt: 'image 25'},
    {image: imgBase + '026.webp', alt: 'image 26'},
    {image: imgBase + '027.webp', alt: 'image 27'},
    {image: imgBase + '028.webp', alt: 'image 28'},
    {image: imgBase + '029.webp', alt: 'image 29'},
    {image: imgBase + '030.webp', alt: 'image 30'},
    {image: imgBase + '031.webp', alt: 'image 31'},
    {image: imgBase + '032.webp', alt: 'image 32'},
    {image: imgBase + '033.webp', alt: 'image 33'},
    {image: imgBase + '034.webp', alt: 'missing image'},
    {image: imgBase + '035.webp', alt: 'image 35'},
    {image: imgBase + '036.webp', alt: 'image 36'},
    {image: imgBase + '037.webp', alt: 'image 37'},
    {image: imgBase + '038.webp', alt: 'image 38'},
    {image: imgBase + '039.webp', alt: 'image 39'},
    {image: imgBase + '040.webp', alt: 'image 40'},
    {image: imgBase + '041.webp', alt: 'image 41'},
    {image: imgBase + '042.webp', alt: 'image 42'},
    {image: imgBase + '043.webp', alt: 'image 43'},
    {image: imgBase + '044.webp', alt: 'image 44'},
    {image: imgBase + '045.webp', alt: 'image 45'},
    {image: imgBase + '046.webp', alt: 'image 46'},
    {image: imgBase + '047.webp', alt: 'image 47'},
    {image: imgBase + '048.webp', alt: 'image 48'},
    {image: imgBase + '049.webp', alt: 'image 49'},
    {image: imgBase + '050.webp', alt: 'image 50'},
    {image: imgBase + '051.webp', alt: 'image 51'},
    {image: imgBase + '052.webp', alt: 'image 52'},
    {image: imgBase + '053.webp', alt: 'image 53'},
    {image: imgBase + '054.webp', alt: 'image 54'},
    {image: imgBase + '055.webp', alt: 'image 55'},
    {image: imgBase + '056.webp', alt: 'image 56'},
    {image: imgBase + '057.webp', alt: 'image 57'},
    {image: imgBase + '058.webp', alt: 'image 58'},
    {image: imgBase + '059.webp', alt: 'image 59'},
    {image: imgBase + '060.webp', alt: 'image 60'},
    {image: imgBase + '061.webp', alt: 'image 61'},
    {image: imgBase + '062.webp', alt: 'image 62'},
    {image: imgBase + '063.webp', alt: 'image 63'},
    {image: imgBase + '064.webp', alt: 'image 64'},
    {image: imgBase + '065.webp', alt: 'image 65'},
    {image: imgBase + '066.webp', alt: 'image 66'},
    {image: imgBase + '067.webp', alt: 'image 67'},
    {image: imgBase + '068.webp', alt: 'image 68'},
    {image: imgBase + '069.webp', alt: 'image 69'},
    {image: imgBase + '070.webp', alt: 'image 70'},
    {image: imgBase + '071.webp', alt: 'image 71'},
    {image: imgBase + '072.webp', alt: 'image 72'},
    {image: imgBase + '073.webp', alt: 'image 73'},
    {image: imgBase + '074.webp', alt: 'image 74'},
    {image: imgBase + '075.webp', alt: 'image 75'},
    {image: imgBase + '076.webp', alt: 'image 76'},
    {image: imgBase + '077.webp', alt: 'image 77'},
    {image: imgBase + '078.webp', alt: 'image 78'},
    {image: imgBase + '079.webp', alt: 'image 79'},
    {image: imgBase + '080.webp', alt: 'image 80'},
    {image: imgBase + '081.webp', alt: 'image 81'},
    {image: imgBase + '082.webp', alt: 'image 82'},
    {image: imgBase + '083.webp', alt: 'image 83'},
    {image: imgBase + '084.webp', alt: 'image 84'},
    {image: imgBase + '085.webp', alt: 'image 85'},
    {image: imgBase + '086.webp', alt: 'image 86'},
    {image: imgBase + '087.webp', alt: 'image 87'},
    {image: imgBase + '088.webp', alt: 'image 88'},
    {image: imgBase + '089.webp', alt: 'image 89'},
    {image: imgBase + '090.webp', alt: 'image 90'},
]




