// position
let slidePosition = 0;

//slides
const slides = document.getElementsByClassName('imageCarousel-item');
console.log('slides existentes >', slides);

/*const imageSlides = [];
for(let i = 0; i < slides.length; i++){
    imageSlides.push(slides[i]);
}
console.log('total de imageSlides >', imageSlides);*/

const totalSlides = slides.length;
console.log('total de slides >', totalSlides);

//testar slides
/*const calcSlides = totalSlides - 1;
console.log('total de calcSlides >', calcSlides);*/

//bullets
const bullets = [];
console.log('bullets', bullets);

for(let i = 0; i < totalSlides; i++){ 
    console.log('testar o i >',i);
    bullets.push(i);
}
console.log('bullets listados', bullets);

function fBullets(){    
    let listBullets = document.createElement('div');

    for(let i = 0; i < bullets.length; i++){
        // Crie o item da lista:
        let bullet = document.createElement('button');
        // Defina seu conteúdo:
        bullet.classList.add('imageCarousel-bullets-button');
        bullet.appendChild(document.createTextNode(''));
        //bullet.click
        bullet.setAttribute('id', i);
        bullet.setAttribute("onClick", "fBulletMoveTo("+ i +")");

        console.log('bullet index', bullet);
        // Adicione-o à lista:
        listBullets.appendChild(bullet);
        
    }    
    return listBullets;
}
document.getElementById('bulletButtons').appendChild(fBullets());


// actions
document.getElementById('imageCarousel-bt-next')
.addEventListener('click', function(){
    moveToNextSlide();
});

document.getElementById('imageCarousel-bt-prev')
.addEventListener('click', function(){
    moveToPrevSlide();
});

function updateSlidesPosition(){
    const bullets = document.getElementsByClassName('imageCarousel-bullets-button');

    for(let slide of slides){
        console.log('retornar cada >', slide);
        slide.classList.remove('imageCarousel-item-visible');
    }
    for(let bullet of bullets){
        console.log('retornar cada >', bullet);
        bullet.classList.remove('bulletActive');
    }
    slides[slidePosition].classList.add('imageCarousel-item-visible');
    console.log('slides[slidePosition] >', slides[slidePosition]);
    bullets[slidePosition].classList.add('bulletActive');
    console.log('bullets[slidePosition] >', bullets[slidePosition]);
}

function fBulletMoveTo(id){
    slidePosition = id;    
    updateSlidesPosition();
}

function moveToPrevSlide(){
    if(slidePosition === 0){ // se o index do slide for o 0 
        //slidePosition = 0;// entao mantem-se no 0
        slidePosition = totalSlides -1;// entao passa o ultimo slide
    } else { // se for qualquer outro valor
        slidePosition--; // baixa o numero do index
    }    
    updateSlidesPosition();
    console.log('prev slide Position nr >', slidePosition);  
}
function moveToNextSlide(){
    console.log('next slide');
    if(slidePosition ===  totalSlides -1){ // se o index do slide for o ultimo (ver acima > calcSlides)
        slidePosition = 0;// entao volta para o 0 (primeiro)
    } else { // se for qualquer outro valor
        slidePosition++; // aumenta o numero do index
    }
    updateSlidesPosition();
    console.log(' next slide Position nr >', slidePosition);  
}


/******************************************************************* */


