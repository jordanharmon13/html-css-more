// Create function button

	var inputFirstName = localStorage.getItem("firstName");
	var inputLastName = localStorage.getItem("lastName");
	
if (typeof localStorage.getItem("firstName") !== 'undefined' && localStorage.getItem("firstName") !== null) {
	document.getElementById("first-name").value = inputFirstName;
}

if (typeof localStorage.getItem("lastName") !== 'undefined' && localStorage.getItem("lastName") !== null) {
	document.getElementById("last-name").value = inputLastName;
}
	
function saveInput() {
	// store input in local storage
	var first = document.getElementById("first-name").value;
	localStorage.setItem("firstName", document.getElementById("first-name").value);
		
	var last = document.getElementById("last-name").value
	localStorage.setItem("lastName", document.getElementById("last-name").value);
		
	if (first  < 1) {
		document.getElementById("false1").innerHTML = "Name must be more than one letter";
	} else {
		document.getElementById("false1").innerHTML = "";
	} if (last < 1) {
		document.getElementById("false2").innerHTML = "Last name must be longer than one letter";
	} else {
		document.getElementById("false2").innerHTML = "";	
	}
	console.log(localStorage.getItem(document.getElementById("first-name").value));
}	
// create reset function
	// reset local storage
	