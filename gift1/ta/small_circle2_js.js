var tachange1_circle=document.getElementById("small_font1");
var tachange2_circle=document.getElementById("small_font2");
var circle_change1=document.getElementById("cicle1");
var circle_change2=document.getElementById("cicle2");
var circle_change3=document.getElementById("cicle3");
var circle_change4=document.getElementById("cicle4");
var circle_change5=document.getElementById("cicle5");
var circle_change6=document.getElementById("cicle6");
if (localStorage.getItem("nin")!="电子产品"){
  tachange1_circle.style.display="none";
}
if (localStorage.getItem("nin2")!="美妆"){
  tachange2_circle.style.display="none";
}


var changeblue=function (x) {
  var num=0;
  x.onclick=function () {
    if ((num%2)==0) {
      x.style.color = "white";
      x.style.backgroundColor = "#2194ff"
    }
    if ((num%2)!=0){
      x.style.color="#2194ff";
      x.style.borderColor="#2194ff";
      x.style.backgroundColor="white"
    }
    num+=1;
  };
};


var changeblue2=function (x) {
  var num=0;
  x.onclick=function () {
    if ((num%2)==0) {
      x.style.color = "white";
      x.style.backgroundColor = "#ff6ea4"
    }
    if ((num%2)!=0){
      x.style.color="#ff6ea4";
      x.style.borderColor="#ff6ea4";
      x.style.backgroundColor="white"
    }
    num+=1;
  };
};

changeblue(circle_change1);
changeblue(circle_change2);
changeblue(circle_change3);
changeblue2(circle_change4);
changeblue2(circle_change5);
changeblue2(circle_change6);

localStorage.removeItem("ta");
localStorage.removeItem("ta2");
localStorage.removeItem("nin");
localStorage.removeItem("nin2");