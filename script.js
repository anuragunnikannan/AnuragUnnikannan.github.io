function dispHamburger()
{
    var x = document.getElementsByTagName("header");
    var y = document.getElementsByTagName("section");
    if(x[0].style.position == "fixed")
    {
        x[0].style.position = "absolute";
        x[0].style.left = "-100rem";

        for(var i = 0;i < y.length;i++)
        {
            y[i].classList.remove("blur_effect");
        }
    }
    else
    {
        x[0].style.position = "fixed";
        x[0].style.left = "0";
        for(var i = 0;i < y.length;i++)
        {
            y[i].classList.add("blur_effect");
        }
    }
}

window.addEventListener("resize", retain_header);

function retain_header()
{
    var x = document.getElementsByTagName("header");
    var y = window.outerWidth;
    if(y > 980)
    {
        x[0].style.position = "fixed";
        x[0].style.left = "0";
    }
    else
    {
        x[0].style.position = "absolute";
        x[0].style.left = "-100rem";
    }
}