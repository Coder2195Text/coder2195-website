import { data } from "../scripts/data.js";
var ls = window.localStorage;

function setup() {
  $("body").css("visibility", "visible");
  //hide certain elements
  $("#games").css("display", "none");
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
  $('#web-version').html(`<img src="../img/load.gif" height="64px" width="64px">`)
  $("#stat").attr("hidden", true)
  // hide this first
  document.title = data["head"]["title"][currentlang];
  //change title!
  $("#home-title div").text(data["titles"]["welcome"][currentlang]);
  //change "welcome to my site" to their language
  $("home-games").text(data["titles"]["games"][currentlang]);
  //change music select options to current lang
  $("#music-select option[value='']").text(
    data["music"]["no-music"][currentlang]
  );
  $("#music-select option[value='../snd/coffindance.mp3']").text(
    data["music"]["coffindance"][currentlang]
  );
  $("#music-select option[value='../snd/waterfall.mp3']").text(
    data["music"]["nightwaterfall"][currentlang]
  );
  $("#music-select option[value='../snd/invisible.mp3']").text(
    data["music"]["invisible"][currentlang]
  );
  $("#music-select option[value='../snd/fruitninjamusic.mp3']").text(
    data["music"]["fruitninja"][currentlang]
  );
  $("#music-select option[value='custom-music']").text(
    data["music"]["custom"][currentlang]
  );
  $("#music-url-input").attr("placeholder", data["music"]["custom"][currentlang]);
  if (data["stat"]["support"][currentlang]){
    //do stuff if it does support...
    $("#stat1").attr("src", "https://github-readme-stats.vercel.app/api?username=coder2195text&show_icons=true&theme=tokyonight&locale=" + data["stat"]["conlang"][currentlang])
    $("#stat2").attr("src", "https://github-readme-stats.vercel.app/api/top-langs/?username=coder2195text&theme=merko&layout=compact&locale=" + data["stat"]["conlang"][currentlang])
    $("#stat").attr("hidden", false)
  } 
  $("#wallpaper-select option[value='default']").text(data["wallpaper"]["default"][currentlang])
  $('#web-version').html(data["version"])
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
        $("#music").attr("src", $("#music-url-input").val());
      }
    })
    .change();
};


  setup();
  changelang("en");
  changecolor();
  checklang();
  checkmusic();
  checkmusicurl();
  $('#web-version').html(data["version"])

