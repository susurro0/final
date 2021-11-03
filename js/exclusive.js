var title = document.getElementById("title");
var content = document.getElementById("content");
var seriesTitle = document.getElementById("seriesTitle");

function reActiveScene(btn){
  var group = document.getElementById("group");
  for (var i =0; i < group.children.length; i++){
    group.children[i].classList.remove('active')
  }
  btn.classList.add("active");

}
function reActiveSeries(btn){
  var category = document.getElementById("category");
  for (var i = 0; i < category.children.length; i++) {
    category.children[i].classList.remove("active");
  }
  btn.classList.add("active");
}

function showFirstElement(path){
  btn = document.getElementById("1");
  btn.classList.add("active");
  fetch(path)
    .then((r) => r.text())
    .then((text) => {
      title.innerHTML = "Scene 1";
      document.getElementById("output").textContent = text;

    });
}



function renameSeriesTitle(ele){
  seriesTitle.innerHTML = document.getElementById(ele).innerHTML;
}
function selectChapter(ele) {
  var btn = document.getElementById(ele);
  reActiveScene(btn);
  var path = "/files/bootcamp/"

  switch (ele) {
    case "bootcamp":
      path = "/files/bootcamp/1.txt";
      reActiveSeries(btn)
      showFirstElement(path)
      renameSeriesTitle(ele);
      
      break;
    case "fullcircle":
      path = "/files/fullCircle/1.txt";
      reActiveSeries(btn);
      showFirstElement(path)
      renameSeriesTitle(ele);

      break;
    case "queertango":
      path = "/files/queerTango/1.txt";
      reActiveSeries(btn);
      showFirstElement(path);
      renameSeriesTitle(ele);

      break;
    case "1":
      path = path + ele + ".txt";
      fetch(path)
        .then((r) => r.text())
        .then((text) => {
          title.innerHTML = "Scene 1";
          document.getElementById("output").textContent = text;

          console.log(text.length);
        });

      break;
    case "2":
      path = path + ele + ".txt";

      fetch(path)
        .then((r) => r.text())
        .then((text) => {
          title.innerHTML = "Scene 2";
          document.getElementById("output").textContent = text;

          console.log(text.length);
        });
      break;

    case "3":
      path = path + ele + ".txt";

      fetch(path)
        .then((r) => r.text())
        .then((text) => {
          title.innerHTML = "Scene 3";
          document.getElementById("output").textContent = text;

          console.log(text.length);
        });
      break;
    case "4":
      path = path + ele + ".txt";
      fetch(path)
        .then((r) => r.text())
        .then((text) => {
          title.innerHTML = "Scene 4";
          document.getElementById("output").textContent = text;

          console.log(text.length);
        });
      break;
    default:
      path = path + ele + ".txt";
      fetch(path)
        .then((r) => r.text())
        .then((text) => {
          title.innerHTML = "Scene 1";
          document.getElementById("output").textContent = text;

          console.log(text.length);
        });
      break;
  } 
}


//default view
fetch("/files/bootcamp/1.txt")
  .then((r) => r.text())
  .then((text) => {
    title.innerHTML = "Scene 1";
    document.getElementById("output").textContent = text;
});
seriesTitle.innerHTML = "Boot Camp"