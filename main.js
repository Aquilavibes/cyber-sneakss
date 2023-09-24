/*let leftNext = document.getElementById('left-next')
let product = document.getElementById('product')

leftNext.addEventListener('click', function(){
  
})
*/

let i = 0,images = 
["image-product-1.jpg",
"image-product-2.jpg",
"image-product-3.jpg",
"image-product-4.jpg"];

function mySlide (param) {
 if (param === "next") {
   i++;
   if (i === images.length) {i = images.length -1; } 
   
   }else{
   i--;
   
   if (i < 0) {i = 0;}
 }
 document.getElementById('product').src = images[i];
};

let count = 0;
let increment = document.getElementById('plus').onclick = function(){
  count+= 1;
  
  document.getElementById('numb').innerHTML = count;
}
let decrement = document.getElementById('minus').onclick = function(){
  document.getElementById('numb').innerHTML = count-=1;
}

let cardInc = 0;

let incre = document.querySelector('.addd ').onclick = function(){
  cardInc+= 1;
  
  document.getElementById('cart-numb').innerHTML = cardInc;
  
  
}

function hamburg() {
  
  let cont = document.querySelector('.modal-container')
  let open = document.getElementById('menu');
  let close = document.getElementById('close')
    
    open.addEventListener('mouseover', function(){
      
      cont.style.opacity = 30;
      open.style.opacity = 0;
      close.style.opacity = 30;
      
    
    })
    
    close.addEventListener('click', function (){
      cont.style.opacity = 0;
      open.style.opacity = 30;
      close.style.opacity = 0;
      
    
    })
    
}

hamburg();

function carty () {
  
  let cartt = document.getElementById('cartt');
  let mod = document.querySelector('.modal');
  let cart = document.getElementById('cart');
  let cartNumb = document.getElementById('cart-numb')
  cartt.addEventListener('click', function(){
    mod.style.opacity = 30;
    cart.style.opacity = 30;
    cartt.style.opacity = 0;
    cartNumb.style.opacity = 0;
  })
  
  cart.addEventListener('click', function(){
    mod.style.opacity = 0;
    cartt.style.opacity = 30;
    cart.style.opacity = 0;
    cartNumb.style.opacity = 30;
    
  })
}
carty();


function deleting(){
  let del1 = document.getElementById('delete1');
  let del2 = document.getElementById('delete2');
  
  let marge1 = document.querySelector('.marg-cart1');
  
  let marge2 = document.querySelector('.marg-cart2');
  
  del1.addEventListener('click', function(){
    marge1.style.opacity = 0;
  })
  
  del2.addEventListener('click', function(){
    marge2.style.opacity = 0;
  })
  
  
}
deleting();