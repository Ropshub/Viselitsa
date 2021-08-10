let slova = ["кошка","живот","икота","левый","успех","молоко","археолог"];
let slovo = slova[Math.floor(Math.random()*slova.length)];
let p = 12;
let bukvi = []
document.querySelector(".start").onclick = function(){
	for (let i = 0;i<slovo.length;i++) {
		slova = ["кошка","живот","икота","левый","успех","молоко","археолог"];
		slovo = slova[Math.floor(Math.random()*slova.length)];
		p = 12;	
		document.querySelector(".u").innerHTML = p;
		bukvi = []
		document.querySelector(".slovo").value = ""
		document.getElementsByClassName('men')[0].style.backgroundImage = "url('img/12.png')";
		document.querySelector(".check").disabled = false;
	}
}
document.querySelector(".check").onclick = function(){
	let bukva = document.querySelector(".bukva").value;
	let ingame = document.querySelector(".slovo").value;
	bukvi.push(bukva)
	let out = ""
	for (let i = 0;i<slovo.length;i++) {
		let char = slovo[i]
		if (bukvi.indexOf(char)!=-1) {
			out = out + char
		}
		else{
			out = out + "*"
		}
	}
	p = p-1;
		document.querySelector(".u").innerHTML = p;
		if (p==0) {
		document.querySelector(".check").disabled = true;
		}
		if (p==11) {
		document.getElementsByClassName('men')[0].style.backgroundImage = "url('img/11.png')";
		}
		if (p==10) {
		document.getElementsByClassName('men')[0].style.backgroundImage = "url('img/10.png')";
		}
		if (p==9) {
		document.getElementsByClassName('men')[0].style.backgroundImage = "url('img/9.png')";
		}
		if (p==8) {
		document.getElementsByClassName('men')[0].style.backgroundImage = "url('img/8.png')";
		}
		if (p==7) {
		document.getElementsByClassName('men')[0].style.backgroundImage = "url('img/7.png')";
		}
		if (p==6) {
		document.getElementsByClassName('men')[0].style.backgroundImage = "url('img/6.png')";
		}
		if (p==5) {
		document.getElementsByClassName('men')[0].style.backgroundImage = "url('img/5.png')";
		}
		if (p==4) {
		document.getElementsByClassName('men')[0].style.backgroundImage = "url('img/4.png')";
		}
		if (p==3) {
		document.getElementsByClassName('men')[0].style.backgroundImage = "url('img/3.png')";
		}
		if (p==2) {
		document.getElementsByClassName('men')[0].style.backgroundImage = "url('img/2.png')";
		}
		if (p==1) {
		document.getElementsByClassName('men')[0].style.backgroundImage = "url('img/1.png')";
		}
		if (p==0) {
		document.getElementsByClassName('men')[0].style.backgroundImage = "url('img/0.png')";
		}
	document.querySelector(".slovo").value = out
}