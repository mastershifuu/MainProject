
//var byClass = documen.getElementsByClassName('myspan');
//var byId = document.getElementById('outer');
//console.log(byId.childNodes);
//console.log(byId.childNodes[1].firstChild);
//console.log(byId.childNodes[0].nodeType);
//console.log(byId.childNodes[1].firstChild.nodeValue);
//byId.childNodes[1].firstChild.nodeValue =  'new value'
//console.log(byId.firstChild);
//console.log(byId.lastChild);
//log(byId.childNodes[1].nextSibling);
//console.log(byId.lastChild.previousSibling);
//var allElements = byId.getElementsByClassName('myspan');
//var p = document.getElementsByTagName('p');
//console.log(allElements.length);
//console.log(typeof allElements);
//console.log(allElements);
//console.log('p:', p);
//console.log('byId:', byId);
//byId.setAttribute('myAttr', 'myValue');
//for (var i=0; i<allElements.length; i++){
	//console.log(allElements[i].getAttribute('title'));
//}


var byId = document.getElementById('outer');
var newP = document.createElement('p');
var tn = document.createTextNode('my new p')

//newP.appendChild(tn);
newP.innerHTML = '<ul><li>my</li><li>ineer</li><li>HTML</li></ul>'
byId.appendChild(newP);

var inner = byId.innerHTML;
console.log(typeof inner);
console.log(inner);