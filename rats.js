////////Create our Request to serve1
let xhr = new XMLHttpRequest();
////////Set up a callback function to run when server req is successful///////////
xhr.onload = () => {}
///////open server request////////////////////////////////////////////////////////
xhr.open("GET", "https://www.bungie.net/Platform/Destiny2/Manifest/");
xhr.setRequestHeader("X-API-Key", "c019e29561f549c2839a986482d80140", "Access-Control-Allow-Origin", "http://www.bungie.net",);
///////send server request////////////////////////////////////////////////////////
xhr.send();

// Access-Control-Allow-Origin: http://www.bungie.net //