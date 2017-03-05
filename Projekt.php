<!DOCTYPE html>
<html>
<head>
    <style>
    </style>
</head>
<body>

<header class="absolute" >
    <h1 align="center">Projekt, mille mõte on alles selgumisel</h1>
    <h3>Less important heading here</h3>
    <p>Some additional information here</p>

</header>
<div style="background:yellow;border:1px solid #cccccc;padding: 10px;" contextmenu="mymenu">
    <p class="relative" >Right-click inside this box to see the context menu!</p>
    <div class="dropdown">
        <span>Mouse over me</span>
        <div class="dropdown-content">
            <p>Hello World!</p>
        </div>
        <menu type="context" id="mymenu">
            <menuitem label="Refresh" onclick="window.location.reload();" icon="menuu.png"></menuitem>
            <menu label="Share on...">
                <menuitem label="Twitter" icon="ico_twitter.png" onclick="window.open('//twitter.com/intent/tweet?text=' + window.location.href);"></menuitem>
                <menuitem label="Facebook" icon="ico_facebook.png" onclick="window.open('//facebook.com/sharer/sharer.php?u=' + window.location.href);"></menuitem>
            </menu>
            <menuitem label="Email This Page" onclick="window.location='mailto:?body='+window.location.href;"></menuitem>
        </menu>

    </div>

    <p>This example currently only works in Firefox!</p>



    <iframe frameborder="1" width="600" height="1200" name="iframe" align="right" scrolling="yes">
    </iframe>
    <p>
        <a href="http://enos.itcollege.ee/~asuun/Praktikum2/Praktikum2vorm1.html" target="iframe"> vorm2</a>
        <a href="http://enos.itcollege.ee/~asuun/Praktikum2/Praktikum2vorm2.html" target="iframe">vorm1</a>
        <a href="https://delfi.ee" target="iframe">delfi</a>
    </p>


    <h3>
        <u>
            giti link
        </u>
    </h3>

    <p>
        <button type="button" onclick="funktsioon">2 Me!</button>
    <ul>kaks</ul>
    <ul>viis</ul>
    <ul>kaheksa</ul>
    <a href="https://github.com/asuun/v-rgurakendused">Võrgurakenduste praktikumid</a>


    </p>

    <h3>
        PHP versiooniks on:
    </h3>
    <footer>Copyright &copy; LM</footer>
</body>
</html>
