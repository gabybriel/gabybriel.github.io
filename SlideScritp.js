let Slide = document.getElementsByClassName('Slide');
let etape = 0;
let Nbre_Images = Slide.length;

function EnleverActiveImages()
{
    for(let i = 0; i < Nbre_Images; i++)
    {
        Slide[i].classList.remove('active');
    }
}
setInterval(function()
{
    etape++;
    if( etape >= Nbre_Images)
    {
        etape = 0;
    }
    EnleverActiveImages();
    Slide[etape].classList.add('active');
}, 3000)