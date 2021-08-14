function showHeader()
{
    var x = document.getElementsByTagName("header");
    var y = document.getElementsByTagName("main");
    x[0].style.position = "fixed";
    x[0].style.left = "0";
    y[0].classList.add("blur_effect");
}

function hideHeader()
{
    var x = document.getElementsByTagName("header");
    var y = document.getElementsByTagName("main");
    var z = window.outerWidth;
    if(z < 980)
    {
        x[0].style.position = "absolute";
        x[0].style.left = "-100rem";
        y[0].classList.remove("blur_effect");
    }
}

/* For displaying/hiding header on clicking hamburger menu. For screens having width less than 980px */
function dispHeader()
{
    var x = document.getElementsByTagName("header");

    /* If hamburger menu is visible, then hide it, else show. */
    if(x[0].style.position == "fixed")
    {
       hideHeader();
    }
    else
    {
        showHeader();
    }
}

/* Show header when window is larger than 980px and hide it when less than 980px */
window.addEventListener("resize", retainHeader);
function retainHeader()
{
    var y = window.outerWidth;
    if(y > 980)
    {
        showHeader();
    }
    else
    {
        hideHeader();
    }
}