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
})