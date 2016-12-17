		var count = 3;

		var reverseCount = 1;

		var pages = getElementsByClass("scrollPage","div");

		var dot = getElementsByClass("dots", "li");

		var sOne = "The origin of the interpreting.";

		var sTwo = "Today, the Skype Translator preview edition has already been able to support simutaneous interpreting on English, Chinese, Spanish and Italian......";

		var sThree = "1919Paris Peace Conference";

		var time  = getElementsByClass("axisC", "span");

		var i = 0;

		var jj = 0;

		var k = 0;

		var simCount = 0;

		window.onload = function() {
			for (var i = 0; i < pages.length; i++) add(pages[i],i);
			for (var j = 0; j < time.length; j++) time[j].addEventListener("click", showSimPics,false);
		}
		
		function showSimPics() {
			if (simCount == 0) {
				document.getElementById("labourPic").style.opacity = "1";
				document.getElementById("labourDes").style.opacity = "1";
				simCount++;
				return;
			}
			if (simCount == 1) {
				document.getElementById("nurembergPic").style.opacity = "1";
				document.getElementById("nurembergDes").style.opacity = "1";
				simCount++;
				return;
			}
			if (simCount == 2) {
				document.getElementById("unPic").style.opacity = "1";
				document.getElementById("unDes").style.opacity = "1";
				simCount++;
				return;
			}
		}

		function add(o,x){
		o.addEventListener("mousewheel",MouseWheelHandler,false);
		o.addEventListener("DOMMouseScroll",MouseWheelHandler,false);
		if (x != 0 && x != 1) 
		o.addEventListener("click", MouseWheelHandler, false);
		return;
		}
		

		function MouseWheelHandler() {
			for (var i = 0; i < dot.length; i++)
				dot[i].style.backgroundColor="white";
			if (reverseCount <= 3)
			dot[reverseCount].style.backgroundColor = "black";
			pages[count].style.backgroundColor = "#999999";
			pages[count].style.top = "-1500px";	
			count--;
			reverseCount++;
			if (count == 2) {
				nul();
				setTimeout("nul2()", 2000);
				setTimeout("nul3()", 4000);
				setTimeout("afternul()",6000);
				setTimeout("pottery()", 8500);
				setTimeout("afterpottery()",11000);
				return;
			}
			if (count == -1) {
				// playVideo();
				// setTimeout("afterVideo()",115000);
				// return;
			}
			if (count == 1) {
				nul4();
				var o = document.getElementById("l");
				o.addEventListener("click",ppc, false);
				return;
			}
		}

		function ppc() {
				setTimeout("ppcPicDisappear()", 1000);
				setTimeout("showDebatePics(0)", 3000);
				setTimeout("showDebatePics(1)", 4400);
				setTimeout("showDebatePics(2)", 5000);
				setTimeout("showDebatePics(3)", 6100);
				setTimeout("hideDebatePics()", 9999);
				setTimeout("showMainChara()", 12999);
				return;
		}


		function nul4() {
				if (k < sThree.length) {
				document.getElementById("PPCcontent").innerHTML += sThree[k];
				k++;
				if (sThree[k] == 'P' && sThree[k+1] == 'a')
				document.getElementById("PPCcontent").innerHTML += "<br>";
				setTimeout("nul4()",7);
				} else {
				return;
			}
		}

		function ppcPicDisappear() {
			document.getElementById("PPCcontent").style.opacity = "0";
			document.getElementById("ppc").style.opacity = "0";
			return;
		}

		function nul(){


			if ( i < sOne.length) {
			document.getElementById("ancientEygptianContent").innerHTML += sOne[i];
			i++;

			setTimeout("nul()",20);
			} else {
				return;
			}
		}

		function nul2() {
				var img = document.getElementById("imge");
				img.style.opacity = "0";
				img.style.height = "0px";
				img.style.width = "0px";
				return;
		}

		function nul3()  {
				var img = document.getElementById("imge");
				img.style.opacity = "1";
				setTimeout(change(),15000);
				img.style.height = "550px";
				img.style.width = "550px";
				return;
		}

		function afternul() {
			var tt = document.getElementById("ancientGreeceAndRome");
			var t = document.getElementById("ancientEygptian");
			t.style.opacity = "0";
			tt.style.opacity = "1";
			return;
		}

		function pottery() {
			var t  = getElementsByClass("pottery", "div");
			for (var i = 0; i < t.length; i++)
				t[i].style.opacity = "1";
			document.getElementById("shadow").style.opacity = "1";
			return;
		}

		function afterpottery()  {
			var t  = getElementsByClass("pottery", "div");
			for (var i = 0; i < t.length; i++)
				t[i].style.opacity = "0";
			setTimeout("document.getElementById('rome').style.top = '0px';",2000);			
			return;
		}

	function getElementsByClass(sClass,element){
    	var aResult = [];
    	var aNode = document.getElementsByTagName(element);
    	for(var i=0; i<aNode.length; i++){
        	if(aNode[i].className == sClass){
            	aResult.push(aNode[i]);
        	}
    	}
    	return aResult;
	}

	function change() {
		var img = document.getElementById("imge");
		img.style.backgroundImage = 'url(img/wallEygpt.jpg)';
		img.style.opacity = "1";
		return;
	}

	// function playVideo() {
	// 	var v = document.getElementById("sk");
	// 	v.style.width = "1320px";
	// //	v.style.left = "300px";
	// 	v.play();
	// 	return;
	// }

	// function afterVideo() {
	// 	var v = document.getElementById("sk");
	// 	v.style.width = "0px";
	// //	v.style.left = "600px";
	// 	setTimeout("showScript()", 3000);
	// 	return;
	// }

	function showScript()  {
			if ( jj < sTwo.length) {
			document.getElementById("vContainer").innerHTML += sTwo[jj];
			jj++;
			setTimeout("showScript()",7);
			} else {

				return;
			}
	}


	function showDebatePics(x) {
		var pic = getElementsByClass("debatePic","div");
		pic[x].style.opacity = "1";
		if (x != 0) {
		var w = pic[x].clientWidth * 0.8;
		var h = pic[x].clientHeight * 0.8;
		pic[x].style.width  = w+"px";
		pic[x].style.height = h +"px";
		if (x == 1) {
				pic[x].style.left = "300px";
				pic[x].style.top = "250px";
				pic[x].style.transform="rotate(360deg)";
			}
		if (x == 2) {
				pic[x].style.left = "100px";
				pic[x].style.top = "50px";
		}
		}
		return;
	}

	function hideDebatePics() {
		var pic = getElementsByClass("debatePic","div");
		for (var t = 0; t < pic.length; t++){
		pic[t].style.opacity = "0";
		if (t == 1) {
				pic[t].style.top = "3250px";
				pic[t].style.transform="rotate(360deg)";
			}
		if (t == 2) {
				pic[t].style.left = "-1100px";
				pic[t].style.top = "-1150px";
				pic[t].style.transform="rotate(360deg)";
		}
		if (t == 3) {
				pic[t].style.left = "1100px";
				pic[t].style.top = "1150px";
				pic[t].style.transform="rotate(360deg)";
		}
		}
		return;

	}

	function showMainChara() {
		var t = document.getElementById("debateOne");
		var tt = document.getElementById("debateSix");
		var tf = document.getElementById("debateSeven");
		var ttf = document.getElementById("debateEight");
		t.style.opacity = "1";
		tt.style.opacity = "1";
		tf.style.opacity = "1";
		ttf.style.opacity = "1";
		return;
	}