function HarshaOSDT(){
  var Device = navigator.platform;
var chk = Device.charAt(0)
if(chk == "L"){
document.getElementById("show").innerHTML="SITE FOR ANDRIOD Mobile";
}
else{
window.alert("This Is Not For not Windows & MacOsX Operating System Such as Windows Desktop & IPhone && MacBook\nSupported For Android Operating Systems");
document.write("Not Supported For Your Operating System".fontsize(80));
setTimeout(() => window.open("about:blank","_self").close(), 4000);
}
}