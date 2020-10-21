//////Use DOM Selection to select items we want to change with AJAX////////////
const playerimg = document.querySelector('.starter1img');
const cardText = document.querySelector('.card-text');
const cardTitle = document.querySelector('.card-title')
////////Create our Request to serve1
let xhr = new XMLHttpRequest();
////////Set up a callback function to run when server req is successful///////////
xhr.onreadystatechange = () => {
    ///////Create an if statement that asks if the server req is complete/////////////
    if(xhr.readyState === 4)
    ///////now server is complete create an if to see if connection succcessful///////
    if(xhr.status = 200) {
        ///////Body of the callback where we parse data and use DOM Manipulation//////////
        const data = JSON.parse(xhr.response);
        console.log(data);
        playerimg.src = data.sprites.front_default;
        cardTitle.innerHTML = data.name;
        cardText.innerHTML = data.abilities[0].ability.name;
        ///////Else if clause where we throw an error if we dont have success connecting//
    } else if(xhr.status === 404) {
        alert("The page you seem to be looking for cannot be found.");
    } else if(xhr.status === 500) {
        alert("We apologize for the inconveinence, but it appears the server isn't responding.");
    }
};
///////open server request////////////////////////////////////////////////////////
xhr.open("GET", "https://bungie-net.github.io");
///////send server request////////////////////////////////////////////////////////
xhr.send();
