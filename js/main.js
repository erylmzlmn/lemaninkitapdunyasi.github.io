var menuBar = document.querySelector('#menu_bar');
var menulerLink = document.querySelector('.menulerlink');

menulerLink.style.top = '-450px'

menuBar.onclick = function () 
{
    if (menulerLink.style.top == '-450px')
{
    menulerLink.style.top = '50px' ;
} else 
{
    menulerLink.style.top = '-450px'
}
}