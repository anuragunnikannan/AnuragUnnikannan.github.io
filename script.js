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
            y[i].style.display.marginLeft("5rem");
        }
    }
    else
    {
        x[0].style.position = "fixed";
        x[0].style.left = "0";
        for(var i = 0;i < y.length;i++)
        {
            y[i].style.display.marginLeft("38rem");
        }
        /*x[0].style.opacity = "1"; */
        /* x[0].style.boxShadow = "50rem 50rem 100rem black"; */
        
    }
}