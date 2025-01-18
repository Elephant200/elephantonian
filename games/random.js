function randint(min, max) {
	return Math.floor(Math.random() * max) + min;
}

function randRGB() {
	return [randint(0, 255), randint(0, 255), randint(0, 255)]
}

function choice(array) {
	var index = randint(0, array.length);
	return array[index];
}

function text(myText, locationID) {
	this.print = function () {
		document.getElementById(locationID).innerHTML = myText;
	}
	this.clear = function () {
		document.getElementById(locationID).innerHTML = "";
	}
}

function shuffle(array) {
  	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
   		[array[i], array[j]] = [array[j], array[i]];
	}	
}