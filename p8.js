function get_br_blue(){
 var br="def";
 if(navigator.appName.indexOf("Netscape")>-1){
  if(navigator.appVersion.indexOf("Macintosh")>-1) br="FFM";
  if(navigator.appVersion.indexOf("Windows")>-1) br="FFW";
 }else if(navigator.appName.indexOf("Microsoft")>-1){
  if(navigator.appVersion.indexOf("MEIE 6.0")>-1) {
   br="ie6";
  }else{
    br="ie";
  }
 }
 return br;
}

function unescape_blue14(str){
 var result="";
 for(i=1;i<str.length;i+=3){
  result+=""+String.fromCharCode(parseInt((str.substr(i,2)).toString(2),14));
 }
 return result;
}

function nokp(){
 document.getElementById("hint").focus();
 return false;
}

function escdiv(e){
 if(get_br_blue()=="FFM" || get_br_blue()=="FFW"){mx=e.clientX;my=e.clientY;}else{mx=event.x;my=event.y;}
 obj.style.left=mx+ax;
 obj.style.top=my+ay;
 if(sw==1){ax--;ay--;if(i==r){sw=2;i=0;}}
 if(sw==2){ax++;ay--;if(i==r){sw=3;i=0;}}
 if(sw==3){ax++;ay++;if(i==r){sw=4;i=0;}}
 if(sw==4){ax--;ay++;if(i==r){sw=1;i=0;}}
 i++;
}
