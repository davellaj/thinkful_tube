//global variable that saves the url with api key 
//testing 

var endpoint = 'https://www.googleapis.com/youtube/v3/search';

//function that getDataFromApi
	//parameters: searchTerm, callback
	//var that has an object with name/value pairs
		// part: 'snippet'
		// key: (your API key as a string)
		// q: (your search term as a string)
	//  JSON call: $.getJSON(OMDB_BASE_URL, query, callback);

	function getDataFromApi (searchTerm, callback) {
		var object = {
			part: 'snippet',
			key: 'AIzaSyA1irBtJU79pBNkNC8g0HplNyy0Cd4TAhk',
			q: searchTerm
		}

		$.getJSON(endpoint, object, callback);
	}

//function that displays that data on the dom (displaySearchData)
	//data which is returned from the getDataApiFunction
	//var in an empty string
	//if we receive a truth value back, meaning we received content, then it will place it in appropriate html elements
		//img with a hrefs, making images clickable to the youtube video
		//a href
		//buttons - to show previous and next
	//else return html that says that no results
	//final call to inject the html to the page .html()

//event listener that listens for clicks on the submit button
	//select the form, then find the input value, save to variable
	//call our getDataFromApi function, pass in the parameters of the query variable above and displaySearchData

//document ready to load the submit event 