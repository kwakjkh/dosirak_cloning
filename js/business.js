window.addEventListener("load",function(){
    const swBusiness = new Swiper(".sw-business",{
        slidesPerView:1,
        spaceBetween:0,
        breakpoints:{
            640:{
                slidesPerView:2,
            }, 1024:{
                slidesPerView:3,
            },
        },
    });
    
});