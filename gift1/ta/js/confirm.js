$(document).ready(function(){
    $("#electronics").click(function(){
        if($("#electronics").css("color")=="rgb(255, 255, 255)"){
            $("#electronics").css({"color":"#2194ff","background-color":"white"})
        }
        else{
            $("#electronics").css({"color":"white","background-color":"#2194ff"});
        }
    })
})

$(document).ready(function(){
    $("#cosmetics").click(function(){
        if($("#cosmetics").css("color")=="rgb(255, 255, 255)"){
            $("#cosmetics").css({"color":"#ff6ea4","background-color":"white"})
        }
        else{
            $("#cosmetics").css({"color":"white","background-color":"#ff6ea4"});
        }
    })
})

$(document).ready(function(){
    $(".change").click(function(){
        if($("#select1").css("display")=="block"){
            $("#select1").css("display","none");
            $("#select2").css("display","block");
        }
        else{
            $("#select2").css("display","none");
            $("#select1").css("display","block");
        }
    })
});
var name;
var name1;
var num=-1;
var select1=document.getElementById("electronics");
var select2=document.getElementById("cosmetics");
select1.onclick = function () {

  if (num % 2 != 0) {
    name = '电子产品'
  }
  if (num % 2 == 0) {
    name = null;
  }
  num += 1;
  window.localStorage.setItem("ta", name);
};

var select2=document.getElementById("cosmetics");

select2.onclick = function () {
  if (num % 2 != 0) {
    name1 = '美妆'
  }
  if (num % 2 == 0) {
    name1 = null;
  }
  num += 1;
  window.localStorage.setItem("ta2", name1);
};















