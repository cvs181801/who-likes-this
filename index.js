//grab elements from the DOM

const addNewButton = document.getElementById("add-new");
const parentDiv = document.getElementById("container-div-2");
let childFriendDiv = document.createElement("div");
//let childFriendDivHtml = '<div class="friend-div"> <img src="/Users/casvalkyriespicer/Documents/GitHub/who-likes-this/pics/person.jpg"> </div>' 

//make the add new button create a new 'friend'.

//console.log(parentDiv);
//console.log(addNewButton);

function addFriend(name) {
    childFriendDiv = document.createElement("div");
    childFriendDiv.classList.add('friend');
    childFriendDiv.textContent = `${name}`;
    parentDiv.append(childFriendDiv);
    let personPic = document.createElement("img");
    personPic.src = "/Users/casvalkyriespicer/Documents/GitHub/who-likes-this/pics/person.jpg";
    let friendDivs = document.querySelectorAll(".friend");
    friendDivs.appendChild("personPic");
}

addNewButton.addEventListener('click', function(e) {
    e.preventDefault();
    console.log("it worked!");
    return addFriend("Joy");
})

//code with: node.textContent instead on element.innerHTML
//adjusting CSS in JS
//toggling classes in JS