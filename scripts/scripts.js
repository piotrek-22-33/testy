//
//var names = [ "piotr", "tadeo", "sefan", "kazek" ];
//var showGreetings = function(names) {
//	for ( var i = 0; i < names.length; i++ ){
//	console.log("witaj " + (names[i]) + "!");
//}};
//showGreetings(names);


//var person = {
//	firstName: "piotr",
//	secondName: "mikos",
//	age: 31,
//	showGreeting: function(){
//		console.log ("witaj " + this.firstName + " " + this.secondName);
//		console.log ("masz już " + this.age + " lat! Jesteś już kurwa stary:P");
//	}
//}

//person.showGreeting();

//var country = "UK";
//var showCountry = function(){
//	var country = "Polska";
//	console.log(country);
//}
//console.log("I'm from " + showCountry() + " not from the " + country);

//$(document).ready(function(){
//	$(".banner h1").text("Najgorsza restauracja w mieście!");

//});

//$(document).ready(function(){
//	$(".col-one-third h3").css("color", "red");
//	$(".intro h2").text("Dlaczego nie warto nas wybrać").css("color", "blue").hide(3000).show(3000);

//});

$(document).ready(function(){
	$("#login").click(function(event){
		event.preventDefault();
		var name = $("#name").val();
		var email = $("#email").val();
		var password = $("#password").val();

		$("#contact-right").html(name + "<br>" + email + "<br>" + password);

	});

	/* animacje */
	$("p, h1, h2, h3, h4, a, img, form, button").hide().fadeIn(2000);

});





















