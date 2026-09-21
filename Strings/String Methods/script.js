let text = " Hello JavaScript ";
let text2 = " Programming ";

document.getElementById("demo").innerHTML =
"Length: " + text.length + "<br>" +
"Uppercase: " + text.toUpperCase() + "<br>" +
"Lowercase: " + text.toLowerCase() + "<br>" +
"charAt(1): " + text.charAt(1) + "<br>" +
"indexof('Java') " + text.indexOf("Java") + "<br>" +
"slice(7,17): " + text.slice(7,17) + "<br>" +
"substring(0,6): " + text.substring(0,6) + "<br>" +
"replace(): " + text.replace("JavaScript" , "JS") + "<br>" +
"trim(): " + text.trim() + "<br>" +
"concat(): " + text.concat(text2) + "<br>" +
"split(): " + text.split();
