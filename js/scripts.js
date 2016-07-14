var currYear = function () {
	var d = new Date();
	var n = d.getFullYear();
	return n;
};

$(document).ready(function() {
	$("#copyright").append(currYear);
});




// ( function( $ ) {
//     // Init Skrollr
//     var s = skrollr.init({
//         render: function(data) {
//             //Debugging - Log the current scroll position.
//             //console.log(data.curTop);
//         }
//     });
// } )( jQuery );




// // Redirect Page Function
// var redirect = function(x) {
//   window.location.assign(x)
// };


// $(document).ready(function() {
//   $('.tile').each(function() {
//     $.data(this, 'dialog',
//       $(this).next('.summary').dialog({
//         autoOpen: false,
//         title: null,
//         width: 400,
//         modal: true,
//         //position: 'center',
//         // height: 400,
//         draggable: false
//       })
//     );
//   }).mouseenter(function() {
//     $.data(this, 'dialog').dialog('open');
//     return false;
//    }).mouseleave(function() {
//     $.data(this, 'dialog').dialog('close');
//     return false;
//   });

//   $(".summary").position({
//     my: "center",
//     at: "center",
//     of: target
//   });
// });
