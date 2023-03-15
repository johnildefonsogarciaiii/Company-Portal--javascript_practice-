import { employeeArr, birthdayEvents, dateMonth, currentUser} from '../config.js'


const months = dateMonth.toString();
let body = document.querySelector('body')

console.log(currentUser);
//Rendering User in Birthday Box
const renderBirthdays = function(){
    let table = document.querySelector('.birthday-table')
    birthdayEvents.forEach(function(value){
        if (value.birthday[1] === months){
       const markup =
        `<tr>
            <td> ${value.firstName} </td>
            <td> ${value.birthday}</td>
        </tr>`
        table.insertAdjacentHTML('beforeend', markup);
        
        }
    })
    }
    body.addEventListener('load', renderBirthdays() )

export const slider = function () {
    const slides = document.querySelectorAll('.image');
    const btnLeft = document.querySelector('.left-caret');
    const btnRight = document.querySelector('.right-caret');
  
    let curSlide = 0;
    const maxSlide = slides.length - 1;
  
  
    const goToSlide = function (slide) {
      slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
      );
    };
  
    // Next slide
    const nextSlide = function () {
      if (curSlide === maxSlide) {
        curSlide = 0;
      } else {
        curSlide++;
      }
  
      goToSlide(curSlide);
    };
  
    const prevSlide = function () {
      if (curSlide === 0) {
        curSlide = maxSlide;
      } else {
        curSlide--;
      }
      goToSlide(curSlide);

    };

    // Event handlers
    btnRight.addEventListener('click', nextSlide);
    btnLeft.addEventListener('click', prevSlide);
      
  };

 

  export const imageAnimation = function(){
  let image_1 = document.querySelector('#image1');
  let image_2 = document.querySelector('#image2');
  let image_3 = document.querySelector('#image3');



  const imageInterval_1 = function(){
    setTimeout(function(){
    image_1.style.transform = "translateX(0%)";
    image_2.style.transform = "translateX(100%)";
    image_3.style.transform = "translateX(200%)";
  }, 0)}  

  const imageInterval_2 = function(){
    setTimeout(function(){
    image_1.style.transform = "translateX(-100%)";
    image_2.style.transform = "translateX(0%)";
    image_3.style.transform = "translateX(100%)";
  }, 5000)}

  const imageInterval_3 = function(){
    setTimeout(function(){
    image_1.style.transform = "translateX(-200%)";
    image_2.style.transform = "translateX(-100%)";
    image_3.style.transform = "translateX(0%)";


    let maxSlide = 3;

    if(maxSlide === 3){
      setInterval(() => loop_image(), 5000)

    }
  }, 10000)}

  const loop_image = function(){
  imageInterval_1();
  imageInterval_2();
  imageInterval_3();
  }
  loop_image();

  }
  imageAnimation()
