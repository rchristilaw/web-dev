function login() {

	var userName = document.getElementById("userName").value;
	var userPass = document.getElementById("userPass").value;
	
	
	var url = "http://localhost:5555/login/userName="+userName+"&password="+userPass;

	console.log(url);
	
	$.ajax({
		url:url,
		jsonp: "callback",
		dataType: "jsonp",
		success: function (data) {

			console.log("test");
		}
	});
}