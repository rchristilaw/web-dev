
function searchArtist() {

	var searchTerm = document.getElementById("searchValue").value;
	
	if (searchTerm.length > 0)
	{
		window.location = 'search.html?artist=' + searchTerm;
	}
}

function searchLoaded(){
	var resultsList = document.getElementById("searchResults");
	
	var searchTerm = getUrlParameters("artist", "", true);
	
	$("#searchResults").empty();

	var url = "http://localhost:5555/search/artist=";

	url += searchTerm;
	console.log(url);
	
	$.ajax({
		url:url,
		jsonp: "callback",
		dataType: "jsonp",
		success: function (data) {
			console.log(data);
			console.log("test");
			for (var i = 0; i < data.results.length; i++) {   
				var listItem = document.createElement("li");
				listItem.innerHTML = "<a href='" + data.results[i].collectionViewUrl + "'>" + data.results[i].collectionName + "</a>";		
				resultsList.appendChild(listItem);
			}
		}
	});
}


function getUrlParameters(parameter, staticURL, decode){
   /*
    Function: getUrlParameters
    Description: Get the value of URL parameters either from 
                 current URL or static URL
    Author: Tirumal
    URL: www.code-tricks.com
   */
   console.log(window.location.search); 
   var currLocation = (staticURL.length)? staticURL : window.location.search,
       parArr = currLocation.split("?")[1].split("&"),
       returnBool = true;
	   
	   
   
   for(var i = 0; i < parArr.length; i++){
        parr = parArr[i].split("=");
        if(parr[0] == parameter){
            return (decode) ? decodeURIComponent(parr[1]) : parr[1];
            returnBool = true;
        }else{
            returnBool = false;            
        }
   }
   
   if(!returnBool) return false;  
}

function httpGet(theUrl)
{
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
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