function dispHamburger()
{
    var x = document.getElementsByTagName("header");
    var y = document.getElementsByTagName("section");
    if(x[0].style.display == "block")
    {
        x[0].style.display = "none";
        x[0].style.visibility = "hidden";
        /* for(var i = 0;i < y.length;i++)
        {
            y[i].classList.remove("blur_effect");
        } */
    }
    else
    {
        x[0].style.display = "block";
        x[0].style.visibility = "visible";
        /* for(var i = 0;i < y.length;i++)
        {
            y[i].classList.add("blur_effect");
        }
        x[0].style.opacity = "1"; */
        /* x[0].style.boxShadow = "50rem 50rem 100rem black"; */
        
    }
}