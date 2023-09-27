let header =
`<header>
    <div class='logo'>
        <div style="flex-grow: 1;"></div>
        <span><a href="..">МИХАИЛ ГОРДЕЕВ</a></span>
        <div style="flex-grow: 1;"></div>
    </div>
    <div style='flex-grow: 1;'></div>
    <div class="desktop">
        <div class="menu">
            <p><a href="creation.html">CERES SURVIVAL</a></p>
            <p><a href="modules.html">DEADSHOT BRIGATE</a></p>
        </div>
    </div>
    <div style='flex-grow: 1;'></div>
    <div onclick='menuButtonClick()' class = 'mobile menu_button'>
        <img id='menu_button' class='button_image' src='./images/menu.svg'></img>
        <img id='close_button' class='button_image inactive' src='./images/close.svg'></img>
    </div>
</header>`
document.body.innerHTML = header;