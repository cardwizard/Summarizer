document.onmouseup = function(e){
	
	var summarizer = new JsSummarize();
	var selected_text = window.getSelection().toString();
	var summary = summarizer.summarize("", selected_text);
	
	var nameList = "<div id=\"title_bar\">" + "Summary by Conciser!" + "</div>";
	
	if (selected_text.length == 0) {
		$('#tooltip').html("");
		return;
	}
	
	console.log(e.target);
	console.log($(e.target).closest('h1', 'h2', 'h3', 'h4', 'h5','h6'));
	nameList += "<div id = \"summary\">";
	
	for (var i=0; i<summary.length; i++) {
		nameList += "<div>" + summary[i] + "</div>";
	}
	
	nameList += "</div>";
	
	$('#tooltip').html(nameList);
	$('#tooltip').css("bottom", "100px");
	$('#tooltip').addClass("show");
	
// 	console.log(nameList);
};

$('body').append("<div id=\"tooltip\"> </div>");

chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
		
		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		// console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------

	}
	}, 10);
});