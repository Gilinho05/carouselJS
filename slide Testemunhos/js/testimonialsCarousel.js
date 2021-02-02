const left = document.querySelector('.left');
const right = document.querySelector('.right');

const slider = document.querySelector('.slider');
const Sliders = document.querySelectorAll('.slider section');


const indicatorParent = document.querySelector('.control ul'); 
const indicators = document.querySelectorAll('.control li');
let index = 0;

//testar nr de slides visiveis
let nrSlides = 1;
slider.setAttribute('id','1');
// slider.classList.add("visibleSlides-" + nrSlides);
slider.classList.add(`visibleSlides-${nrSlides}`);
console.log('decubrir o slider.classList >', slider.classList[1]);

let larguraSlides = Sliders.length * 100 + "%";
console.log('decubrir o larguraSlides >', larguraSlides);

if(nrSlides){
  slider.style.width = 400 / nrSlides  + "%"; 
  console.log('decubrir o slider.style.width >', slider.style.width);
}


// bullets functionalities
indicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    document.querySelector('.control .selected').classList.remove('selected');
    indicator.classList.add('selected');
    slider.style.transform = 'translateX(' + (i) * -25 + '%)';  
    index = i;
    console.log('decubrir o i >', i);
  });
});

left.addEventListener('click', function() {
  index = (index > 0) ? index -1 : Sliders.length - 1;
  console.log('decubrir o index left >', index);
  document.querySelector('.control .selected').classList.remove('selected');
  indicatorParent.children[index].classList.add('selected');
  slider.style.transform = 'translateX(' + index * -25 + '%)';
  console.log('decubrir o slider.style.transform left >', slider.style.transform);
});

right.addEventListener('click', function() {
  index = (index < Sliders.length - 1) ? index+1 : 0;
  console.log('decubrir o index right >', index);
  document.querySelector('.control .selected').classList.remove('selected');
  indicatorParent.children[index].classList.add('selected');
  slider.style.transform = 'translateX(' + (index) * -25 + '%)';
  console.log('decubrir o slider.style.transform right >', slider.style.transform);
});