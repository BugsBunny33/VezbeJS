/** 

With JavaScript, the global scope is the complete JavaScript environment.
In HTML, the global scope is the window object: All global variables belong to the window object.
The window object is supported by all browsers. It represents the browser's window.

All global JavaScript objects, functions, and variables automatically become members of the window object.
Global variables are properties of the window object.
Global functions are methods of the window object.
Even the document object (of the HTML DOM) is a property of the window object: 

window.document.getElementById("header");
is the same as:
document.getElementById("header"); 

 */

var fullname = 'John Doe';
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
      	a = 3, b = 5;
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;
var kolek = {
	a:3,
	b:4
	
};

console.log(test());
console.log(typeof(test));
//console.log(obj.prop.getFullname.arguments.lenght);
console.log(window.location);
//window.location = "http://www.google.com";

/*
navigator.geolocation.getCurrentPosition(function(pos) {
    var latitude = pos.coords.latitude;
    var longitude = pos.coords.longitude;
    alert("Your position: " + latitude + ", " + longitude);
});
*/


