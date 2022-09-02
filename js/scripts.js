$(document).ready(function(){

    //Nav Slide Toggle
    $('.icons i').click(function () { 
        $('.nav-list').slideToggle();
        
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

// script pour la partie contact
$(function () {
    
    $('#contact-form').submit(function(e) {
        e.preventDefault();
        $('.comments').empty();
        var postdata = $('#contact-form').serialize();
        
        $.ajax({
            type: 'POST',
            url: 'php/contact.php',
            data: postdata,
            dataType: 'gabriel',
            success: function(gabriel) {
                 
                if(json.isSuccess) 
                {
                    $('#contact-form').append("<p class='thank-you'>Votre message a bien été envoyé. Merci de m'avoir contacté :)</p>");
                    $('#contact-form')[0].reset();
                }
                else
                {
                    $('#firstname + .comments').html(gabriel.firstnameError);
                    $('#name + .comments').html(gabriel.nameError);
                    $('#email + .comments').html(gabriel.emailError);
                    $('#phone + .comments').html(gabriel.phoneError);
                    $('#message + .comments').html(gabriel.messageError);
                }                
            }
        });
    });

});
})