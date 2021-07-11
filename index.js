//grab elements from the DOM

const addNewButton = document.getElementById("add-new");
const parentDiv = document.getElementById("container-div-2");
let childFriendDiv = document.createElement("div");
let likeButton = document.createElement("button");
let unlikeButton = document.createElement("button");
let likeCounter = document.getElementById("like-counter");

console.log(likeCounter);
//make a way to create a new "friend".

function addFriend(name) {
    //create a new 'friend' using the name, then attach it below
    childFriendDiv = document.createElement("div");
    childFriendDiv.id = "friend";
    childFriendDiv.textContent = `${name}`;
    parentDiv.append(childFriendDiv);
    //create a 'person icon' image, then attach it above the name
    let personPic = document.createElement("img");
    personPic.src = "/Users/casvalkyriespicer/Documents/GitHub/who-likes-this/pics/person.jpg";
    childFriendDiv.prepend(personPic);
    //create a 'like' button
    likeButton.textContent = `👍`;
    childFriendDiv.append(likeButton);
    //console.log(likeButton);
    //create a 'unlike' button
    unlikeButton.textContent = `👎`;
    childFriendDiv.append(unlikeButton);
    console.log(unlikeButton);
}

let likeCount = 0;

//make the 'like' button and 'unlike' button count how many likes and unlikes, and from which friends.

likeButton.addEventListener("click", function(e) {
    e.preventDefault();
    likeCount++;
    console.log(likeCount);
    likeCounter.textContent = `${likeCount} person liked this post.`
}) 

unlikeButton.addEventListener("click", function(e) {
    e.preventDefault();
    likeCount -= 1;
    console.log(likeCount);
    likeCounter.textContent = `${likeCount} person unliked this post.`
})

//make the add new button create a new 'friend'.

addNewButton.addEventListener('click', function(e) {
    e.preventDefault();
    console.log("add new friend btn worked!");
    return addFriend("Joy");
})


    
