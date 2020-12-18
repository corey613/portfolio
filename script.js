function scrollShow(){
    var cont = document.querySelector('#aboutContainer');
    var introPos = cont.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    if(introPos < screenPosition){
        cont.style.opacity = '1';
    }
};

window.addEventListener('scroll', scrollShow);