function fill(){
  $('body').append(`
<div id="settings">
      <img
        src="/img/settings.png"
        height="60px"
        width="60px"
        id="setting-icon"
      />
      <div id="setting-content">
        <img src="/img/sound.png" alt="music" height="48px" width="48px" />
        <br />
        <audio
          id="music"
          controls
          onerror="\$('#music').css('display', 'none')"
          onloadeddata="\$('#music').css('display', 'block')"
          loop
          autoplay
        ><h1 style="color:white; font-family: Mono">Your browser doesn't support audio. :(</h1></audio>
        <select id="music-select">
          <option value=""></option>
          <option value="../snd/coffindance.mp3"></option>
          <option value="../snd/waterfall.mp3"></option>
          <option value="../snd/invisible.mp3"></option>
          <option value="../snd/fruitninjamusic.mp3"></option>
          <option value="custom-music"></option> </select
        ><br />
        <input
          type="text"
          id="music-url-input"
          style="font-family: Trebuchet MS; font-size: 15pt; width: 90%;"
        />
        <hr />
        <img
          src="/img/language.png"
          alt="language"
          height="48px"
          width="48px"
        /><br />
        <select id="lang-select">
          <option value="en">English</option>
          <option value="ch">中文</option>
          <option value="fr">Français</option>
          <option value="sp">Español</option>
          <option value="pt">Portugues</option>
          <option value="nl">Nederlands</option>
          <option value="de">Deutsche</option>
          <option value="ar">عربى</option>
          <option value="ru">русский</option>
          <option value="ko">한국어</option>
          <option value="jp">日本語</option>
          <option value="hi">हिंदी</option>
          <option value="el">Ελληνικά</option>
          <option value="it">Italiana</option>
        </select>
        <hr />
        <img src="../img/wallpaper.png" height="60px" width="60px">
        <select id="wallpaper-select">
          <option value="default"></option>
        </select>
        <hr>
        </div>
    </div>
    <div id="home">
      <h1 id="home-title">
        <div></div>
      </h1>
      <a id="home-snap" href="javascript: \$('home').css('display', 'none');\$('snap').css('display', 'block')"></a>
      <br />
      <a id="home-python"></a>
      <br />
      <div id="stat">
      <img
        id="stat1"
        style="border: none; height:200px"
      >
      <img
        id="stat2"
        style="border: none; height:200px"
      >
      </div>
    </div>
    <div id="snap">
      3
    </div>
    <div id="python">
      4
    </div>
    <div id="other">
      5
    </div>
    <div id="bar">
    </div>
    <div id="web-version">Loading version...</div>
    <img id="backdrop" src="../img/lines-of-code.jpg">
    <script type="module" src="../scripts/update.js"></script>
  `)
}

$.ajax({
  url: 'https://dotmaui.com/my-ip/raw/',
  success: function(data) {
    if (data.toString() == "74.71.211.152"){
      fill()
    } else {
      document.write('The website is temporary down for upgrading...')
    }
  }
});


