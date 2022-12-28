function buttonhit()
{
    let value = document.getElementById('img').alt;
    if(value=='off')
    {
        document.getElementById('img').src='bulb-on.png';
        document.getElementById('img').alt='on';
        document.getElementById('switch').src='on.png';
    }
    else
    {
        document.getElementById('img').src='bulb-off.png';
        document.getElementById('img').alt='off';
        document.getElementById('switch').src='off.png';
    }
}