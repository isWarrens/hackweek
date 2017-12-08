$(document).ready(function(){
    $("#electronics").click(function(){
        if($("#electronics").css("color")=="rgb(255, 255, 255)"){
            $("#electronics").css({"line-height":"5.125em","width":"5.125em","font-size":"1.2em","color":"#2194ff","background-color":"white"})
        }
        else{
            $("#electronics").css({"line-height":"4.5em","width":"4.5em","font-size":"1em","color":"white","background-color":"#2194ff"});
        }
        if($(".circle1").css("display")=="none"){
        $(".circle1").css("display","block");
        }
        else{
        $(".circle1").css("display","none");
        }
    })
})

$(document).ready(function(){
    $("#computer").click(function(){
        if($("#computer").css("color")=="rgb(255, 255, 255)"){
            $("#computer").css({"color":"#2194ff","background-color":"white"})
        }
        else{
            $("#computer").css({"color":"white","background-color":"#2194ff"})
        }
    })
    $("#phone").click(function(){
        if($("#phone").css("color")=="rgb(255, 255, 255)"){
            $("#phone").css({"color":"#2194ff","background-color":"white"})
        }
        else{
            $("#phone").css({"color":"white","background-color":"#2194ff"})
        }
    })
    $("#earphone").click(function(){
        if($("#earphone").css("color")=="rgb(255, 255, 255)"){
            $("#earphone").css({"color":"#2194ff","background-color":"white"})
        }
        else{
            $("#earphone").css({"color":"white","background-color":"#2194ff"})
        }
    })
})
