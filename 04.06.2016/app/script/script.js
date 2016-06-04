var data = {
	Shirt: [{text: 'Red', value: 'Red'}, {text: 'Orange', value: 'Orange'}],
    Jeans: [{text: 'Blue', value: 'Blue'}, {text: 'Gray', value: 'Gray'}]
};

//$('#stopPropagation').text('hi');
//$('#stopPropagation').empty('');

//console.log($('#changeBg').find('#scroll'));

//$('#trigger').remove('');

//$('#stopPropagation').html('<a id="prevent" href="http://www.vk.com" target="_blank">VK</a>');

$(document).ready(function(){
	//$('#stopPropagation').text('hi');
	//$('#trigger').remove('');
	/*$('#delegateClick').on('click',function(e){
		alert("rtghrfg");
	});*/
	
	/*$('#delegateClick').on('click','.first',function(e){
		alert("rtghrfg");
	});*/
	$('#on').on('click',function(e){
		$('#testClick').on('click',function(e){
		$('#result').text('hello word');
	});
	});
	$('#off').on('click',function(e){
		$('#testClick').off('click');
		$('#result').empty();
	});
	
	$('#one').one('click',function(e){
		alert("rtghrfg");
	});
	$('#changeBg').scroll(function(e){
		$('#none').show((function(e){
			$('#none').hide(1000);
		}));
	});
	
	$(window).on('resize', function(e){
		var docWidth =  $(document).width();
		if (docWidth < 700) 
			$('#changeBg').css({'background': 'green'});
		else
			$('#changeBg').css({'background': 'red'});
	});
	
	$('#clicked').on('click',function(e, param){
		$('#clicked').css({'background': 'navy', 'color':'white'}).val(param);
		//$(e.target).val(param);
	});
	$('#trigger').on('click',function(e){
		$('#clicked').trigger('click',['Clicked']);
	});
	
	$('#prevent').on('click',function(e){
		e.preventDefault();
	});
	
	/*$('body').on('click',function(e){
		alert("rtghrfg");
	});*/
	
	$('#stopPropagation').on('click',function(e){
		//alert("AEGFAEGAEGEAG");
		e.stopPropagation();
	});
	
	$('#change').on('change',function(e){
		alert("change");
	});
	
	var product = '';
	var color = '';
	var emptySelect = '<option value="n/a"></option>';
	
	for(i in data){
		product += '<option value='+ i +'>'+ i+ '</option>';
	}
	
	$('#product').html(emptySelect+product);
	$('#color').html(emptySelect);
	
	$('#product').on('change',function(e){
		setColor(e.target.val);
	});
	
	function setColor(prod){
		color = emptySelect;
		data[prod].forEach(function(el){
			color += '<option value='+ el.valur +'>'+ el.text + '</option>';
			
		});
		
		$('#color').html(color);
	};
	
	
	
});


