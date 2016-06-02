//$('#element').addClass('elbut');

//$('#element').removeClass('elbut');

//$('#element').attr('title','element Title');
//console.log($('#element').attr('title'));
//$('#element').attr('disabled', true);

//$('#element').removeAttr('class');

//console.log($('#element').prop('disabled'));

//$('#element').val("butval");
//console.log($('#element').val());

//$('#element').css("width",'200');
/*$('#element').css("width",function(){
	return "200";
});
$('#element').css({
	'margin-top':'200px',
	'color':"red"
})
*/

//console.log($('#element').hasClass('active'));

//console.log($('#box').height("300px"));
/*console.log($('#box').height());
console.log($('#box').innerHeight());
console.log($('#box').outerHeight());
console.log($('#box').outerHeight('500px'));
console.log($('#box').outerHeight(true));
*/

/*console.log($('#box').width());
console.log($('#box').innerWidth());
console.log($('#box').outerWidth());
console.log($('#box').outerWidth('300px'));
console.log($('#box').outerWidth(true));
*/

//console.log($('#circle').offset());
//console.log($('#box').offset());
//$('#circle').offset({top: 8, left: 8});

//$('#circle').offset($('#box').offset());
/*var xy = $('#box').offset();
$('#circle').offset(xy);

$('#circle').hide(500);
$('#circle').show(700);
*/

/*$('#element').on('click', function(e){
	alert('Hello word')
});
*/

//console.log($('#element').data('direction'));
//$('#element').data('name', 'slideToTop');
//console.log($('#element').data('name'));

$('#thailand').hide();

$('#switcher').on('click', function(e){
	var funcName = $('#switcher').data('direction');
	funcObj[funcName]();
});
	//$('#forest').slideUp();
	//$('#thailand').slideDown();
var funcObj = {
	slideToUp: function(){
		$('#forest').slideUp();
		$('#thailand').slideDown();
		$('#switcher').val("Down").data('direction', 'slideToDown');
	}, 
	slideToDown: function(){
		$('#thailand').slideUp();
		$('#forest').slideDown();
		$('#switcher').val("Up").data('direction', 'slideToUp');
	}   
}



























