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
	// find all the buttons
	var elementsToChange = document.getElementByClassName("button").className="blue";
	// elementsToChange = ["<input>", "<input>"]
	// cycle through all the elements in the array, changing their class (.classname = "");
	//var array = [1,"potato",3,4];
	//alert(array[0]);
	// change their class
}

