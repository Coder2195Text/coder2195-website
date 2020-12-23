var blinkcolor;
/*!lang: english (en), chinese (ch), french (fr), spanish (sp) 
 portuguese (pt), dutch (nl), german (de), arabic (ar)
 russian (ru), korean (ko), japanese (jp), hindi (hi), greek (el)
*/
const langdata = {
  head: {
    title: {
      en: "Coder2195's Website",
      ch: "Coder2195的网站",
      fr: "Site Web de Coder2195",
      sp: "Sitio web de Coder2195",
      pt: "Site do Coder2195",
      nl: "De website van Coder2195",
      de: "Die Website von Coder2195",
      ar: "موقع ويب Coder2195",
      ru: "Сайт Coder2195",
      ko: "Coder2195의 웹 사이트",
      jp: "Coder2195のウェブサイト",
      hi: "Coder2195 की वेबसाइट",
      el: "Ιστοσελίδα του Coder2195"
    }
  },
  home: {
    "null-for-copying": {
      en: "",
      ch: "",
      fr: "",
      sp: "",
      pt: "",
      nl: "",
      de: "",
      ar: "",
      ru: "",
      ko: "",
      jp: "",
      hi: "",
      el: ""
    }
  },
  titles: {
    welcome: {
      en: "Welcome to my website!",
      ch: "欢迎来到我的网站",
      fr: "Bienvenue sur mon site web!",
      sp: "¡Bienvenidos a mi sitio web!",
      pt: "Bem-vindo ao meu site!",
      nl: "Welkom op mijn website!",
      de: "Willkommen auf meiner Website!",
      ar: "مرحبا بكم في موقع الويب الخاص بي!",
      ru: "Добро пожаловать на мой сайт!",
      ko: "내 웹 사이트에 오신 것을 환영합니다!",
      jp: "私のウェブサイトへようこそ!",
      hi: "मेरी वेबसाइट पर स्वागत है!",
      el: "Καλώς ήλθατε στον ιστότοπό μου!"
    },
    snap: {
      en: "My Snap Games",
      ch: "我 Snap 的游戏",
      fr: "Mes Jeux Snap",
      sp: "Mis Juegos Snap",
      pt: "Meus Jogos Snap",
      nl: "My Snap-spellen",
      de: "Meine Snap Spiele",
      ar: "ألعابي Snap",
      ru: "Мои игры Snap",
      ko: "내 Snap 게임",
      jp: "私の Snap ゲーム",
      hi: "मेरे Snap खेल",
      el: "Τα Snap παιχνίδια μου"
    },
    python: {
      en: "My Python Games",
      ch: "我 Python 的游戏",
      fr: "Mes Jeux Python",
      sp: "Mis Juegos Python",
      pt: "Meus Jogos Python",
      nl: "My Python-spellen",
      de: "Meine Python Spiele",
      ar: "ألعابي Python",
      ru: "Мои игры Python",
      ko: "내 Python 게임",
      jp: "私の Python ゲーム",
      hi: "मेरे Python खेल",
      el: "Τα Python παιχνίδια μου"
    }
  }
};

async function checkip() {
  let res = await fetch("https://www.cloudflare.com/cdn-cgi/trace"); // blocks execution until fetch is finished
  let data = await res.text();
  let ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/;
  let ip = data.match(ipRegex)[0];
  ip = ip.toString();
  // ban if IP doesnt match
  if (ip !== "74.71.211.152") {
    document.write(
      "<h1 style='font-size: 50pt; color: green; font-family: Verdana;'>It's private! Coder2195 is developing! Get out right this instant!</h1>"
    );
  }
}

function setup() {
  $("body").css("visibility", "visible");
  //hide certain elements
  $("#snap").css("display", "none");
  $("#python").css("display", "none");
  $("#other").css("display", "none");
  //show certain elements
  $("#settings").css("display", "block");
  $("#home").css("display", "block");
  $("#bar").css("display", "block");
}

function changelang(currentlang) {
  document.title = langdata["head"]["title"][currentlang];
  //change title!
  $("#home-title div").text(langdata["titles"]["welcome"][currentlang]);
  //change "welcome to my site" to their language
}

function blinkcolors() {
  const colors = [
    "hsl(0, 100%, 50%)",
    "hsl(10, 100%, 50%)",
    "hsl(20, 100%, 50%)",
    "hsl(30, 100%, 50%)",
    "hsl(40, 100%, 50%)",
    "hsl(50, 100%, 50%)",
    "hsl(60, 100%, 50%)",
    "hsl(70, 100%, 50%)",
    "hsl(80, 100%, 50%)",
    "hsl(90, 100%, 50%)",
    "hsl(100, 100%, 50%)",
    "hsl(110, 100%, 50%)",
    "hsl(120, 100%, 50%)",
    "hsl(130, 100%, 50%)",
    "hsl(140, 100%, 50%)",
    "hsl(150, 100%, 50%)",
    "hsl(160, 100%, 50%)",
    "hsl(170, 100%, 50%)",
    "hsl(180, 100%, 50%)",
    "hsl(190, 100%, 50%)",
    "hsl(200, 100%, 50%)",
    "hsl(210, 100%, 50%)",
    "hsl(220, 100%, 50%)",
    "hsl(230, 100%, 50%)",
    "hsl(240, 100%, 50%)",
    "hsl(250, 100%, 50%)",
    "hsl(260, 100%, 50%)",
    "hsl(270, 100%, 50%)",
    "hsl(280, 100%, 50%)",
    "hsl(290, 100%, 50%)",
    "hsl(300, 100%, 50%)",
    "hsl(310, 100%, 50%)",
    "hsl(320, 100%, 50%)",
    "hsl(330, 100%, 50%)",
    "hsl(340, 100%, 50%)",
    "hsl(350, 100%, 50%)"
  ];
  if (blinkcolor == undefined) {
    blinkcolor = 0;
    // this variable is undefined also 0
  } else {
    blinkcolor += 1;
    //change blinkcolor
    if (blinkcolor == colors.length) {
      blinkcolor = 0;
      //overflow of colors... set back to zero
    }
  }
  $("#home-title").css("color", colors[blinkcolor]);
  setTimeout(blinkcolors, 200);
}

window.onload = () => {
  checkip();
  setup();
  blinkcolors();
  changelang("en");
};
