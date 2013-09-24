

var phoneNum = prompt("Please enter your phone number with dashes. "+
	" Please note: Your number will not be shared with any third parties." , "xxx-xxx-xxxx");
alert (phoneNum.charAt(3)==='-'&& phoneNum.charAt(7)==='-'&& typeof(phoneNum)==="number");

var birthdate = prompt("Please enter your birth date in the format mm/dd/yy", "mm/dd/yy");
alert (birthdate.charAt(2)==='/'&& birthdate.charAt(5)==='/');

var postalCode = prompt("Please enter your postal code.", "xxxxx-xxxx");
alert (postalCode.length===5 ||(postalCode.length===10 && postalCode.charAt(5)==='-') );  

var stateAbbr = prompt("Please enter your state (abbreviated).", "XX");
alert (stateAbbr.length===2 && (stateAbbr === stateAbbr.toUpperCase()) );

var married = prompt("Are you married? Please respond yes or no." , "yes or no");
alert (married.toLowerCase()=== 'yes' || married.toLowerCase() ==='no');

	
	
