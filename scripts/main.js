import { langdata } from "../scripts/lang.js";
var ls = window.localStorage;
async function checkip() {
  let res = await fetch("https://www.cloudflare.com/cdn-cgi/trace"); // blocks execution until fetch is finished
  let data = await res.text();
  let ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/;
  let ip = data.match(ipRegex)[0];
  ip = ip.toString();
  // ban if IP doesnt match
  if (!(ip == "74.71.211.152" /*ipv4*/ || ip == "2603:7000") /*ipv6*/) {
    console.log(ip);
    document.write(
      "<h1 style='font-size: 50pt; color: green; font-family: Verdana;'>It's private! Coder2195 is developing! Get out right this instant!</h1>"
    );
  }
}
function check(url){
  $.get(url)
    .done(function() { 
       return true
    }).fail(function() { 
       return false
    })
}

function setup() {
  $("body").css("visibility", "visible");
  //hide certain elements
  $("#snap").css("display", "none");
  $("#python").css("display", "none");
  $("#other").css("display", "none");
  //show certain elements
  $("#settings").css("display", "inline-block");
  $("#home").css("display", "block");
  $("#bar").css("display", "block");
  //get lang from localstorage
  $("#lang-select").val(localStorage.getItem("lang"));
  //hide certain elements that are in dev
  $("#lang-select").val(localStorage.getItem("lang"));
}

function changelang(currentlang) {
  $("#stat").attr("hidden", true)
  // hide this first
  document.title = langdata["head"]["title"][currentlang];
  //change title!
  $("#home-title div").text(langdata["titles"]["welcome"][currentlang]);
  //change "welcome to my site" to their language
  $("#home-snap").text(langdata["titles"]["snap"][currentlang]);
  //change music select options to current lang
  $("#music-select option[value='']").text(
    langdata["music"]["no-music"][currentlang]
  );
  $("#music-select option[value='../snd/coffindance.mp3']").text(
    langdata["music"]["coffindance"][currentlang]
  );
  $("#music-select option[value='../snd/waterfall.mp3']").text(
    langdata["music"]["nightwaterfall"][currentlang]
  );
  $("#music-select option[value='../snd/invisible.mp3']").text(
    langdata["music"]["invisible"][currentlang]
  );
  $("#music-select option[value='../snd/fruitninjamusic.mp3']").text(
    langdata["music"]["fruitninja"][currentlang]
  );
  $("#music-select option[value='custom-music']").text(
    langdata["music"]["custom"][currentlang]
  );
  $("#music-url-input").attr("placeholder", langdata["music"]["custom"][currentlang]);
  if (langdata["stat"]["support"][currentlang]){
    //do stuff if it does support...
    $("#stat1").attr("src", "https://github-readme-stats.vercel.app/api?username=coder2195text&show_icons=true&theme=tokyonight&locale=" + langdata["stat"]["conlang"][currentlang])
    $("#stat2").attr("src", "https://github-readme-stats.vercel.app/api/top-langs/?username=coder2195text&theme=merko&layout=compact&locale=" + langdata["stat"]["conlang"][currentlang])
    $("#stat").attr("hidden", false)
  } 
  $("#wallpaper-select option[value='default']").text(langdata["wallpaper"]["default"][currentlang])
}

let currentColor = 0;
function changecolor() {
  currentColor += 1; // change
  if (currentColor == 360) currentColor = 0;
  $("#home-title").css("color", `hsl(${currentColor.toString()}, 100%, 50%)`);
  setTimeout(changecolor, 10);
}

function checklang() {
  $("#lang-select")
    .change(function() {
      if ($("#lang-select").val() == null) {
        $("#lang-select").val("en");
      }
      changelang($("#lang-select").val());
      ls.setItem("lang", $("#lang-select").val());
    })
    .change();
}

function checkmusic() {
  $("#music-select")
    .change(function() {
      $("#music").css("display", "none");
      if ($("#music-select").val() == "custom-music") {
        $("#music-url-input").css("display", "inline-block");
        $("#music").attr("src", "");
      } else {
        $("#music-url-input").css("display", "none");
        $("#music").attr("src", $("#music-select").val());
      }
    })
    .change();
}
function checkmusicurl() {
  $("#music-url-input")
    .change(function() {
      if ($("#music-select").val() == "custom-music") {
        if (check($("#music-url-input").val())){
          $('#music').css('display', 'block');
        } else {
          $('#music').css('display', 'none');
        }
      }
    })
    .change();
}
window.onload = () => {
  checkip();
  setup();
  changelang("en");
  changecolor();
  checklang();
  checkmusic();
  checkmusicurl();
};
