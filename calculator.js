// JavaScript Document

//Change Display
function d(val) {
	document.getElementById("d").value = val;
}

//Type numbers and operators
function v(val) {
	document.getElementById("d").value += val;
}

//Evalucate the equation
function e( ) {
	try {
		d(eval(document.getElementById("d").value));
	}
	catch(err) { 
		d("Error");
	}
}

function colorChange(color) {
	document.getElementById("style").setAttribute("href", color);
}

