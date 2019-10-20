$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        nav: true,
        dots: true
    });
    let prevHeaderBtn = document.querySelector('.header').querySelector('.owl-prev');
    let nextHeaderBtn = document.querySelector('.header').querySelector('.owl-next');
    prevHeaderBtn.querySelector('span').remove();
    nextHeaderBtn.querySelector('span').remove();
    prevHeaderBtn.innerHTML = `
    <svg width="51" height="38" viewBox="0 0 51 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 1L1 37" stroke="#61BDEF" stroke-width="1.5"/>
    <path d="M8.96967 20.0303C8.67678 19.7374 8.67678 19.2626 8.96967 18.9697L13.7426 14.1967C14.0355 13.9038 14.5104 13.9038 14.8033 14.1967C15.0962 14.4896 15.0962 14.9645 14.8033 15.2574L10.5607 19.5L14.8033 23.7426C15.0962 24.0355 15.0962 24.5104 14.8033 24.8033C14.5104 25.0962 14.0355 25.0962 13.7426 24.8033L8.96967 20.0303ZM50.5 20.25H9.5V18.75H50.5V20.25Z" fill="#61BDEF"/>
    </svg>
    `;
    nextHeaderBtn.innerHTML = `
    <svg width="51" height="38" viewBox="0 0 51 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M49 1L49.5 37" stroke="#61BDEF" stroke-width="1.5"/>
    <path d="M41.5303 20.0303C41.8232 19.7374 41.8232 19.2626 41.5303 18.9697L36.7574 14.1967C36.4645 13.9038 35.9896 13.9038 35.6967 14.1967C35.4038 14.4896 35.4038 14.9645 35.6967 15.2574L39.9393 19.5L35.6967 23.7426C35.4038 24.0355 35.4038 24.5104 35.6967 24.8033C35.9896 25.0962 36.4645 25.0962 36.7574 24.8033L41.5303 20.0303ZM0 20.25H41V18.75H0V20.25Z" fill="#61BDEF"/>
    </svg>    
    `;
});
