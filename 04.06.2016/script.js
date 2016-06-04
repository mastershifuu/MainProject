for (i in data) {
	product += '<option value='+ i +'>'+ i +'</option>';
}

.html(emptySelect + product);



data[prod].forEach(function(el) {
	color += '<option value='+ el.value +'>'+ el.text +'</option>';
});


