var phoneWidth =  parseInt(window.screen.width);
var phoneScale = phoneWidth/375;
var ua = navigator.userAgent;
if (/Android (\d+\.\d+)/.test(ua)){
    var version = parseFloat(RegExp.$1);
    if(version>2.3){
        document.write('<meta name="viewport" content="width=375, minimum-scale = '+phoneScale+', maximum-scale = '+phoneScale+', target-densitydpi=device-dpi">');
    }else{
        document.write('<meta name="viewport" content="width=375, target-densitydpi=device-dpi">');
    }
} else {
    document.write('<meta name="viewport" content="width=375, user-scalable=no, target-densitydpi=device-dpi">');
}