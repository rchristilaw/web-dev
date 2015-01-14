function searchArtist() {
	var resultsList = document.getElementById("searchResults");

	$("#searchResults").empty();


	var url = "https://itunes.apple.com/search?callback=callback";
	
	var searchEntity = "album";
	var searchAttribute = "allArtistTerm";
	var searchLimit = 200;
	var searchTerm = document.getElementById("searchValue").value;

	url += "&entity=" + searchEntity;
	//url += "&attribute=" + searchAttribute;
	url += "&limit=" + searchLimit;
	url += "&term=" + searchTerm;
	


	
	$.ajax({
		url:url,
		jsonp: "callback",
		dataType: "jsonp",
		success: function (data) {
			console.log(data);
			for (var i = 0; i < data.results.length; i++) {   
				var listItem = document.createElement("li");
				listItem.innerHTML = "<a href='" + data.results[i].collectionViewUrl + "'>" + data.results[i].collectionName + "</a>";		
				resultsList.appendChild(listItem);
			}
		}
	});
}



			function searchArtis1t() {
				var searchVal = document.getElementById("searchValue").value;
				console.log("Search for " + searchVal);

				
				//var results = httpGet('https://itunes.apple.com/search?term=drake&entity=album&limit=2');
				//console.log(results);
				
				
				var resultsList = document.getElementById("searchResults");
				
				var listData = [ 'Blue' , 'Red' , 'White' , 'Green' , 'Black' , 'Orange'];
				var numberOfListItems = listData.length;
				for( var i =  0 ; i < numberOfListItems ; ++i){
					
						// create a <li> for each one.
						var listItem = document.createElement("li");

						// add the item text
						listItem.innerHTML = listData[i];

						// add listItem to the listElement
						resultsList.appendChild(listItem);
				}
				
			}
			
			function httpGet(theUrl)
			{
				var xmlHttp = null;

				xmlHttp = new XMLHttpRequest();
				xmlHttp.open( "GET", theUrl, false );
				xmlHttp.send( null );
				return "test";
			}
			
			function loadXMLDoc() {
				var xmlhttp;

				if (window.XMLHttpRequest) {
					// code for IE7+, Firefox, Chrome, Opera, Safari
					xmlhttp = new XMLHttpRequest();
				} else {
					// code for IE6, IE5
					xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
				}

					xmlhttp.onreadystatechange = function() {
					if (xmlhttp.readyState == 4 ) {
					   if(xmlhttp.status == 200){
						   document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
					   }
					   else if(xmlhttp.status == 400) {
						  alert('There was an error 400')
					   }
					   else {
						   alert('something else other than 200 was returned')
					   }
					}
				}

				xmlhttp.open("GET", "ajax_info.txt", true);
				xmlhttp.send();
			}