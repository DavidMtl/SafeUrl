// Convert all links when the window is loaded
window.onload = function () {
  	if (window.safeAuth) {
    	convert_links_to_safe_protocol();
    } else {
    	convert_links_to_http_protocol();
    }
}

function convert_links_to_safe_protocol() {
  	console.log("Converting all links to safe protocol");
    var alinks = document.getElementsByClassName("safe_url");
	for (var i = 0; i < alinks.length; i++) {
      	var href = convert_to_safe_protocol(alinks[i].href);
      	alinks[i].setAttribute("href", href);
	}
}

function convert_links_to_http_protocol() {
  	console.log("Converting all links to http protocol");
    var alinks = document.getElementsByClassName("safe_url");
	for (var i = 0; i < alinks.length; i++) {
        var href = convert_to_http_protocol(alinks[i].href);
      	alinks[i].setAttribute("href", href);
	}
}

function convert_to_http_protocol(url) {
  	var parser = new URL(url);
  	if (parser.protocol == 'safe:') {
      	parser.protocol = "http:";
    }

  	if (!parser.hostname.includes(".safenet")) {
	  	parser.hostname = parser.hostname + ".safenet";
    }
  	return parser.toString();
}

function convert_to_safe_protocol(url) {
  	var parser = new URL(url);
  	if (parser.protocol == "http:") {
      	parser.protocol = "safe:"
    }
  	if (parser.hostname.includes(".safenet")) {
	  	parser.hostname = parser.hostname.replace(".safenet", '');
    }
  	return parser.toString();
}
