var currYear = function () {
	var d = new Date();
	var n = d.getFullYear();
	return n;
};

$(document).ready(function() {
	$("#copyright").append(currYear);
});



// // Redirect Page Function
// var redirect = function(x) {
//   window.location.assign(x)
// };
