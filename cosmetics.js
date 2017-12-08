$(document).ready(function(){
    $("#cosmetics").click(function(){
        if($("#cosmetics").css("color")=="rgb(255, 255, 255)"){
            $("#cosmetics").css({"line-height":"5.125em","width":"5.125em","font-size":"1.2em","color":"#ff6ea4","background-color":"white"})
        }
        else{
            $("#cosmetics").css({"line-height":"4.5em","width":"4.5em","font-size":"1em","color":"white","background-color":"#ff6ea4"});
        }
        if($(".circle2").css("display")=="none"){
        $(".circle2").css("display","block");
        }
        else{
        $(".circle2").css("display","none");
        }
    })
})

$(document).ready(function(){
    $("#lipstick").click(function(){
        if($("#lipstick").css("color")=="rgb(255, 255, 255)"){
            $("#lipstick").css({"color":"#ff6ea4","background-color":"white"})
        }
        else{
            $("#lipstick").css({"color":"white","background-color":"#ff6ea4"})
        }
    })
    $("#skin").click(function(){
        if($("#skin").css("color")=="rgb(255, 255, 255)"){
            $("#skin").css({"color":"#ff6ea4","background-color":"white"})
        }
        else{
            $("#skin").css({"color":"white","background-color":"#ff6ea4"})
        }
    })
    $("#fragrance").click(function(){
        if($("#fragrance").css("color")=="rgb(255, 255, 255)"){
            $("#fragrance").css({"color":"#ff6ea4","background-color":"white"})
        }
        else{
            $("#fragrance").css({"color":"white","background-color":"#ff6ea4"})
        }
    })
})