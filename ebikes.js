const img = document.getElementsByClassName('img')
const mini = document.getElementsByClassName('left')
const slide = document.getElementsByClassName('bottom')

const colors = document.getElementsByClassName('color')
const color1X = colors[1].querySelectorAll('div')
const color2X = colors[2].querySelectorAll('div')

color1X[0].style.backgroundColor ='#5A5B0E';  
color1X[1].style.backgroundColor ='#000000'; 

color2X[0].style.backgroundColor ='#1C2058';  
color2X[1].style.backgroundColor ='#5A5B0E'; 


function getImages(color, displayer) {
    return "media/ebikes/H" + color + displayer + ".png";
}

function animate(element, time, anim) {
    element.style.animation = anim; 

        setTimeout(() => {
            element.style.animation = "none";
        }, time);
}




/* HELIOS 1 FOLDING BIKE */

const helios1 = img[0].querySelectorAll('.pic1')
const mini1 = mini[0].querySelectorAll('img')
const slide1 = slide[0].querySelectorAll('li')

let color = '1BLUE'
let blackBoxes = document.getElementsByClassName('color2');
let blueBoxes = document.getElementsByClassName('color1');

let displayer = 1



blackBoxes[0].addEventListener ('click', event => {

    color = '1BLACK';

    helios1[0].src = getImages(color, displayer);

    mini1[0].src="media/ebikes/H1BLACKMIN1.png";
    mini1[1].src="media/ebikes/H1BLACKMIN2.png";
    mini1[2].src="media/ebikes/H1BLACKMIN3.png";




})

blueBoxes[0].addEventListener ('click', event => {

    color = '1BLUE';

    helios1[0].src = getImages( color, displayer);

    mini1[0].src="media/ebikes/H1B1MIN1.png";
    mini1[1].src="media/ebikes/H1B1MIN2.png";
    mini1[2].src="media/ebikes//H1B1MIN3.png";


})


for (let i = 0; i < mini1.length; i++) {
    mini1[i].addEventListener ('click' , event => {

        displayer = i + 1;


        helios1[0].src = getImages(
            color, displayer)

        animate(helios1[0], 550, "myAnim 1s ease 0s 1 normal none");
    })
}

for (let i = 0; i < slide1.length; i++) {
    slide1[i].addEventListener ('click' , event => {

        displayer = i + 1;


        helios1[0].src = getImages(
            color, displayer)

            animate(helios1[0], 550, "myAnim 1s ease 0s 1 normal none");

    })
}


/* HELIOS 1X FOLDING BIKE */

const helios1x = img[1].querySelectorAll('img')
const mini2 = mini[1].querySelectorAll('img')
const slide2 = slide[1].querySelectorAll('li')

let color1x = '1XOLIVE'

let displayerr = 1


blackBoxes[1].addEventListener ('click', event => {

    color1x = '1XGREY';

    helios1x[0].src = getImages( color1x, displayerr);

    mini2[0].src="media/ebikes/H1XOMIN1.png";
    mini2[1].src="media/ebikes/H1XOMIN2.png";
    mini2[2].src="media/ebikes/H1XOMIN3.png";




})

blueBoxes[1].addEventListener ('click', event => {

    color1x = '1XOLIVE';

    helios1x[0].src = getImages( color1x, displayerr);

    mini2[0].src="media/ebikes/H1XGMIN1.png";
    mini2[1].src="media/ebikes/H1XGMIN2.png";
    mini2[2].src="media/ebikes/H1XGMIN3.png";


})


for (let i = 0; i < mini2.length; i++) {
    mini2[i].addEventListener ('click' , event => {

        displayerr = i + 1;


        helios1x[0].src = getImages(
            color1x, displayerr)

        animate(helios1x[0], 550, "myAnim 1s ease 0s 1 normal none");
    })
}

for (let i = 0; i < slide2.length; i++) {
    slide2[i].addEventListener ('click' , event => {

        displayerr = i + 1;


        helios1x[0].src = getImages(
            color1x, displayerr)

            animate(helios1x[0], 550, "myAnim 1s ease 0s 1 normal none");

    })
}

/* HELIOS 2 ELECTRIC BIKE */

const helios2 = img[2].querySelectorAll('img')
const mini3 = mini[2].querySelectorAll('img')
const slide3 = slide[2].querySelectorAll('li')

let color2x = '2NAVY'

let displayerrr = 1


blackBoxes[2].addEventListener ('click', event => {

    color2x = '2OLIVE';

    helios2[0].src = getImages( color2x, displayerrr);

    mini3[0].src="media/ebikes/H2OMIN1.png";
    mini3[1].src="media/ebikes/H2OMIN2.png";
    mini3[2].src="media/ebikes/H2OMIN3.png";

})

blueBoxes[2].addEventListener ('click', event => {

    color2x = '2NAVY';

    helios2[0].src = getImages( color2x, displayerrr);

    mini3[0].src="media/ebikes/H2NMIN1.png";
    mini3[1].src="media/ebikes/H2NMIN2.png";
    mini3[2].src="media/ebikes/H2NMIN3.png";


})


for (let i = 0; i < mini3.length; i++) {
    mini3[i].addEventListener ('click' , event => {

        displayerrr = i + 1;


        helios2[0].src = getImages(
            color2x, displayerrr)

        animate(helios2[0], 550, "myAnim 1s ease 0s 1 normal none");
    })
}

for (let i = 0; i < slide3.length; i++) {
    slide3[i].addEventListener ('click' , event => {

        displayerrr = i + 1;


        helios2[0].src = getImages(
            color2x, displayerrr)

            animate(helios2[0], 550, "myAnim 1s ease 0s 1 normal none");

    })
}

