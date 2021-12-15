//Projet Insights
// 1. When we make an element fixed it no longer takes space from the document.
// 2. Width property in css cannot be transitoned from 0 to auto ( instead use max-width )




//grabbing nav
const nav = document.querySelector("nav");

//grabbing navtop
const topOfNav = nav.offsetTop;

//func for adding fixed-nav class to body( so that we can target children)
function logText()
{
  

    if( window.scrollY > topOfNav)
    {
        //adding padding to remove certain jump of <p> ( padding should be equal to nav's height)
        document.body.style.paddingTop = nav.offsetHeight + "px";
        document.body.classList.add("fixed-nav");
    }

    else
    {
        document.body.style.paddingTop = 0;

        document.body.classList.remove("fixed-nav");

    }
}

//if scrolling happens, call logText func
window.addEventListener("scroll", logText);