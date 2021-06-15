var img=document.getElementById("qr");
var isMobile = navigator.userAgent.match(/(iPhone|iPod|iPad|Android)/);
class qr{
	constructor(){
		if(isMobile!=null){
			img.style.pointer-events="auto";
		}
	}
}
