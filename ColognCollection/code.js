document.addEventListener('DOMContentLoaded', () => {
    const rightIcon = document.querySelector('.rightIcon');
    const leftIcon = document.querySelector('.leftIcon');
    const items = document.querySelectorAll(".slideItem");
    const mensSlider = document.querySelector(".sliderWrapper");
    const womensSlider = document.querySelector(".sliderWrapperWomens");
    const women = document.querySelector(".navWomen");
    const men = document.querySelector(".navMen");
    const menProducts = document.querySelector(".products");
    const womenProducts = document.querySelector(".productsWomen");
    const productLinks = document.querySelectorAll(".product");
    const productlinks = document.querySelectorAll(".slideImg");
   
    var itemCount = items.length/2;
    var x = 0;
    var wrapper = mensSlider;

    women.addEventListener('click', () => {
        mensSlider.style.display = "none";
        womensSlider.style.display = "flex";

        menProducts.style.display = "none";
        womenProducts.style.display = "flex";
        wrapper = womensSlider;
        x= 0;
    });

    men.addEventListener('click', () => {
        mensSlider.style.display = "flex";
        womensSlider.style.display = "none";

        menProducts.style.display = "flex";
        womenProducts.style.display = "none";
        wrapper = mensSlider;
        x= 0;
    });
    
    rightIcon.addEventListener('click', () => {
      if(x < itemCount-1 ){
        x++;
        wrapper.style.transform = `translateX(${-100*x}vw)`;
      }
      else{
        x=0;
        wrapper.style.transform = `translateX(0)`;
      }
    });
  
    leftIcon.addEventListener('click', () => {
        if(x == 0){
            wrapper.style.transform = `translateX(${(itemCount-1)*-100}vw)`;
            x = 3; 
        }
        else if(x == itemCount){
            x=1;
            wrapper.style.transform = `translateX(${(x)*-100}vw)`;
        }
        else if(x<itemCount){
            console.log(1);
            x--;
            wrapper.style.transform = `translateX(${(x)*-100}vw)`;
        }

    });

    productLinks.forEach(link => {
        link.addEventListener('click', () => {
            location.href = "productPage.html";
        });
      });

      productlinks.forEach(link => {
        link.addEventListener('click', () => {
            location.href = "productPage.html";
        });
      });
  });