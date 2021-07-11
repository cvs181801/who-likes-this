//grab elements from the DOM

const addNewButton = document.getElementById("add-new");
const parentDiv = document.getElementById("container-div-2");
let childFriendDiv = document.createElement("div");
//let childFriendDivHtml = '<div class="friend-div"> <img src="/Users/casvalkyriespicer/Documents/GitHub/who-likes-this/pics/person.jpg"> </div>' 

//make the add new button create a new 'friend'.

//console.log(parentDiv);
//console.log(addNewButton);

function addFriend(name) {
    //create a new 'friend' using the name, then attach it below
    childFriendDiv = document.createElement("div");
    childFriendDiv.id.add('friend');
    childFriendDiv.textContent = `${name}`;
    parentDiv.append(childFriendDiv);
    //create a 'person icon' image, then attach it above the name
    let personPic = document.createElement("img");
    personPic.src = "/Users/casvalkyriespicer/Documents/GitHub/who-likes-this/pics/person.jpg";
    parentDiv.prepend(personPic);
    let likeButton = document.createElement("button");
    likeButton.textContent = `👍`;
    childFriendDiv.append(likeButton);
    console.log(likeButton);
    
}

addNewButton.addEventListener('click', function(e) {
    e.preventDefault();
    console.log("it worked!");
    return addFriend("Joy");
})

//code with: node.textContent instead on element.innerHTML
//adjusting CSS in JS
//toggling classes in JS