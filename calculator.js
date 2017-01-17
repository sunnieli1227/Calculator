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
 	document.getElementByClassName("button").className="blue";
	document.getElementByClassName("button").className="red";
	// elementsToChange = ["<input>", "<input>"]
	// cycle through all the elements in the array, changing their class (.classname = "");
	//var array = [1,"potato",3,4];
	//alert(array[0]);
}

