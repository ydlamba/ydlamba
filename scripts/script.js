$(document).ready(function(){

	var $contact = $(".contact");
	var $main = $("main");
	var $backImg = $(".backImg");
	var $cross = $(".cross");
	var $allfour = $(".contact,.about,.interests,.work");
	var $interests = $(".interests");
	var $work = $(".work");
	var $about = $(".about");
	var $mpart = $(".mpart");
	var $mh1 = $(".mpart>h1");
	var $mh4 = $(".mpart>h4");
	var $mp = $(".mpart>p");
	var $mhr = $(".mpart>hr");
	var $msm = $(".mpart>small");
	var $nav = $("nav");
	var $footer = $("footer");

/*on click changes to main*/
	function change(){
		$main.addClass("mainonclick")
		$backImg.css("transform","scale(1.1)");
		$backImg.css("filter","blur(3px)");
	}

/*all four sections*/
	$(".cont").click(function(){
		change();
		$contact.css("transform","scale(5)");
		$contact.fadeIn(500);
		$contact.css("transform","scale(1)");
		});

	$(".abt").click(function(){
		change();
		$about.css("transform","scale(5)");
		$about.fadeIn(500);
		$about.css("transform","scale(1)");
	});
	$(".inte").click(function(){
		change();
		$interests.css("transform","scale(5)");
		$interests.fadeIn(500);
		$interests.css("transform","scale(1)");
	});

	$(".wor").click(function(){
		change();
		$work.css("transform","scale(5)");
		$work.fadeIn(500);
		$work.css("transform","scale(1)");
	});

/*close button*/
	$cross.click(function(){
		$main.removeClass("mainonclick");
		$allfour.css("transform","scale(5)");
		$allfour.fadeOut(500);
		$backImg.css("transform","scale(2)");
		$backImg.css("filter","blur(0px)");
		});

/*starting sequence*/
	setTimeout(function(){
		$mpart.css("opacity","1");
		$mh1.css("opacity","1");
		setTimeout(function(){
			$mh4.css("opacity","1");
			setTimeout(function(){
				$mp.css("opacity","1");
				setTimeout(function(){
					$mhr.css("opacity","1");
					$main.addClass("mainback");
					setTimeout(function(){
						$msm.css("opacity","1");
						$nav.css("opacity","1");
						$footer.css("opacity","1");
					},1000)
				},2000)
			},1000)
		},1500);
	},1000);
/*ajax requests*/
	function loadDoc(i){
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
			if(this.readyState == 4 && this.status == 200){
				infoInt(this,i);
			}
		};
		xhttp.open("GET","infoInt.xml",true);
		xhttp.send();
	}
	function infoInt(xml,i){
		var xmlDoc = xml.responseXML;
		var x = xmlDoc.getElementsByTagName("INTEREST");
		var info = "<h3>"+x[i].getElementsByTagName("NAME")[0].childNodes[0].nodeValue+"</h3>"+"<p>"+x[1].getElementsByTagName("INFO")[0].childNodes[0].nodeValue+"</p>";
				
		document.getElementsByClassName("int_info")[0].innerHTML = info;
	}
/*
	$(".hobdiv").click(function(){
		var p = $(".hobdiv").index();
		console.log(p);
		if(p == 0){
			loadDoc(0);
		}else if(p == 1){
			loadDoc(1);
		}else if(p == 2){
			loadDoc(2);
		}else{
			loadDoc(3);
		}
	});
*/
	$("#hob0").click(function(){
		loadDoc(0);
	});
	$("#hob1").click(function(){
		loadDoc(1);
	});	
	$("#hob2").click(function(){
		loadDoc(2);
	});
	$("#hob3").click(function(){
		loadDoc(3);
	});			
});