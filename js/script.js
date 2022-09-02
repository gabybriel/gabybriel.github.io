const body = document.querySelector("body"),
      nav = document.querySelector("nav");
$(document).ready(function(){

    //Nav Slide Toggle
    $('.icons i').click(function () { 
        $('.nav-list').slideToggle();
        
    });
    body.addEventListener("click" , function(){
        let clickedElm = e.target;
    
        if(!clickedElm.style.contains('display:block;') && !clickedElm.classList.contains('.nav-list')){
            $('.nav-list').slideToggle();
        }
    });

    //Stickey Navbar
    $(window).scroll(function () { 
        var NewNav = $(this).scrollTop();
        if(NewNav > 95)
        {
            $('header').addClass('sticky');
        }
        else
        {
            $('header').removeClass('sticky')
        }
        
    });


}) 




 // Scroll Animmantion
    $(function(){

        $(".nav-list a, .home a").on("click", function(event){
        
            event.preventDefault();
            var hash = this.hash;
            
            $('html').animate({scrollTop: $(hash).offset().top} , 900 , function(){window.location.hash = hash;})
            
        });
    
    })