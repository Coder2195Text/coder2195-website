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
  //get lang from localstorage
  $("#lang-select").val(localStorage.getItem("lang"));
  //make a:hover work
  $("a").css("hover", "font-weight: bold");
}

function changelang(currentlang) {
  document.title = langdata["head"]["title"][currentlang];
  //change title!
  $("#home-title div").text(langdata["titles"]["welcome"][currentlang]);
  //change "welcome to my site" to their language
  $("#home-snap").text(langdata["titles"]["snap"][currentlang]);
}

let currentColor = 0;
function changeColor() {
  currentColor += 1; // change
  if (currentColor == 360) currentColor = 0;
  $("#home-title").css("color", `hsl(${currentColor.toString()}, 100%, 50%)`);
  setTimeout(changeColor, 10);
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

window.onload = () => {
  checkip();
  setup();
  changelang("en");
  changeColor();
  checklang();
};
