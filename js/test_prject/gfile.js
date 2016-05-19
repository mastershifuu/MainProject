//Event delegethion:
var textInput = document.getElementById('textInput');
var imageHolder = document.getElementById('planet');
var ul = document.getElementById('ul');
var result = document.getElementById('result');
var p = document.getElementById('p');
ul.addEventListener('click', changeImg)
function changeImg(event) {
	event.preventDefault();
	//console.log(event.target);
	//var p = event.target.href;
	if (event.target.tagName === 'A') {
		imageHolder.src = event.target.href;
	};
	//console.log(event.currentTarget);
	//var img = elem.getAttribute('href');
	//var img = elem.href;
	//imageHolder.setAttribute('src', img)
	
}
/*function test1() {
	console.log(test1);
};
function test2() {
	console.log(test2);
};*/

var counter = 0;
var li_items = ul.children;
window.addEventListener('keypress', function(event){
	if (event.code !== 'Space') {return;}
	var index = counter%li_items.length;
	imageHolder.src = li_items[index].firstChild.href;
	counter++;
});


textInput.addEventListener('change', function (event){
	var letters = countLetters(event.target.value);
	result.innerHTML = '<p>Гласных: '+letters.vowels+'</p>'+
						'<p>Согласных: '+letters.consonants+'</p>';
});

function countLetters(str) {
	var vowelsRegExp = /[aeiouy]/ig;
	var consonantsRegExp = /[qwrtpsdfghjklzxcvbnm]/ig;
	var result = {
		vowels: 0,
		consonants: 0,
	};
	while(vowelsRegExp.exec(str)){
		result.vowels++;
	}
	while(consonantsRegExp.exec(str)){
		result.consonants++;
	}
	return result;
}

//=============================================querySelector
/*var a1 = document.getElementsByTagName('a');
var a2 = document.querySelectorAll('a');
var newA = document.createElement('a');
result.appendChild(newA);
console.log(a1);
console.log(a2);*/


//=============================================.classList
result.classList.add('red', 'blue', 'green');
result.classList.remove('red'); 
console.log(result.classList);
console.log(result.classList.contains('blue'));

result.addEventListener('mouseover', function() {
	//result.classList.toggle('red');
	result.style.fontSize = "25px"
})


//=============================================node.insertAdjacent(where(куда вставляем),what(что вставляем))
//insertAdjacentHTML      insertAdjacentElement    insertAdjacentText
//where:
//	'beforeBegin'
//	'afterBegin'
//	'beforeEnd'
//	'afterEnd'

// <div>text'beforeBegin'<p>'afterBegin't2'beforeEnd'</p>'afterEnd'</div>

//p.insertAdjacentHTML('beforeEnd', '<span>new element</span>');

//result.style.color = "red";
//result.style.fontSize = "25px";
console.log(result.style);























































