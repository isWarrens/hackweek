window.onload=function () {
  var control_num=0;
  var left_change=document.getElementsByClassName("left-trigon")[0];
  var left1_recover=document.getElementsByClassName("left-rectangular")[0];
  var left2_recover=document.getElementsByClassName("left-2")[0];
  var left3_recover=document.getElementsByClassName("left-3")[0];
  var right_change=document.getElementsByClassName("right-trigon")[0];
  var right1_recover=document.getElementsByClassName("right-rectangular")[0];
  var right2_recover=document.getElementsByClassName("right-2")[0];
  var right3_recover=document.getElementsByClassName("right-3")[0];
  var x_font=left1_recover.innerHTML;
  var y_font=right1_recover.innerHTML;


  function innnerfont_recover(x,y,z,a) {
    a.onclick = function () {
      if ((control_num % 2) === 0) {
        y.style.display = "block";
        z.style.display = "block";
        a.style.transform = "rotate(90deg)";
        a.style.marginTop="0.546667rem";
        control_num += 1;
      }
      if ((control_num % 2) !== 0) {
        y.style.display = "block";
        z.style.display = "block";
        a.style.transform = "rotate(90deg)";
        a.style.marginTop="0.546667rem";
        x.innerHTML = x_font;
        control_num += 1;
      }
    };
  }
  innnerfont_recover(left1_recover,left2_recover,left3_recover,left_change);

  right_change.onclick = function () {
    if ((control_num % 2) === 0) {
      right2_recover.style.display = "block";
      right3_recover.style.display = "block";
      right_change.style.transform = "rotate(90deg)";
      right_change.style.marginTop="0.546667rem";
      control_num += 1;
    }
    if ((control_num % 2) !== 0) {
      right2_recover.style.display = "block";
      right3_recover.style.display = "block";
      right_change.style.transform = "rotate(90deg)";
      right_change.style.marginTop="0.546667rem";
      right1_recover.innerHTML = y_font;
      control_num += 1;
    }
  };

  function click_recover(x,y,z,a) {
    x.onclick=function () {
      y.style.display = "none";
      z.style.display = "none";
      a.style.transform = "rotate(0)";
      a.style.marginTop="0.453333rem";
    };
    y.onclick=function () {
      y.style.display = "none";
      z.style.display = "none";
      a.style.transform = "rotate(0)";
      a.style.marginTop="0.453333rem";
      x.innerHTML = y.innerHTML;
    };
    z.onclick = function () {
      y.style.display = "none";
      z.style.display = "none";
      a.style.transform = "rotate(0)";
      x.innerHTML = z.innerHTML;
      a.style.marginTop="0.453333rem";
    };
  }


  click_recover(left1_recover,left2_recover,left3_recover,left_change);
  click_recover(right1_recover,right2_recover,right3_recover,right_change);
}