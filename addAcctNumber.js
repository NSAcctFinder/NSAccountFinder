// Get the comment with the NS Account number and add it to the footer
<!-- // Example of the Account info block on any NS page: [ 1234567 ] [ /s.nl ] [ Sat Jan 01 1:01:01 PDT 1901 ] -->
debugger;
// use jQuery to get all comments from the page:
$.fn.getComments = function () {
    return this.contents().map(function () {
        if (this.nodeType === 8) return this.nodeValue;
    }).get();
}
// Find the account number:
var arrComments = $('body').getComments();
var acctNum = arrComments[arrComments.length-2]
if (acctNum) {
	var ind = acctNum.indexOf(']');
	if (ind) {
		acctNum = acctNum.substr(3,ind-4);
	} else { 
		acctNum = acctNum.substr(3,9);
	}
} else {
	acctNum = '--Error--';
}
// Add the account number to the footer:
var foot = document.getElementById('div__footer');
var nextDiv = null;
if (foot) {
	nextDiv = foot.children[0];
}
if (nextDiv) {
	//console.log("Ind:" + ind + " -- Account: " + acctNum);
	nextDiv.innerHTML = "<b>Account: " + acctNum + "</b> " + nextDiv.innerHTML;
}