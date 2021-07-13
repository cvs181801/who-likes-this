//grab elements from the DOM

const addNewButton = document.getElementById("add-new");
const parentDiv = document.getElementById("container-div-2");
let childFriendDiv = document.createElement("div");
let likeButton = document.createElement("button");
let unlikeButton = document.createElement("button");
let likeCounter = document.getElementById("like-counter");
let saveNewFriendButton = document.createElement("button");
let savedFriendsDiv = document.getElementById("container-div-3");
let nameInput = document.createElement("input");
let newFriendDiv = document.createElement("div");

console.log(likeCounter);

//save the new friend when the save new friend button is pushed.

function friendSaved(name) {
    parentDiv.textContent = "";
    //save the new friend
    savedFriendsDiv = document.getElementById("container-div-3");
    childFriendDiv = document.createElement("div");
    childFriendDiv.id = "friend";
    savedFriendsDiv.append(childFriendDiv);
    friendNameLabel = document.createElement("p");
    friendNameLabel.textContent = `${name}`;
    childFriendDiv.append(friendNameLabel);
    
    //create a 'person icon' image, then attach it above the name
    let personPic = document.createElement("img");
    personPic.src = "/Users/casvalkyriespicer/Documents/GitHub/who-likes-this/pics/person.jpg";
    childFriendDiv.prepend(personPic);

     //create a 'like' button for the new friend
     likeButton = document.createElement("button");
     likeButton.textContent = `👍`;
     friendNameLabel.append(likeButton);
     
     //create a 'unlike' button for the new friend
     unlikeButton = document.createElement("button");
     unlikeButton.textContent = `👎`;
     friendNameLabel.append(unlikeButton);

}

//make a way to create a new "friend".

function addFriend() {
    //create a place to type the friend's name
    newFriendDiv = document.createElement("div");
    parentDiv.append(newFriendDiv);
    let nameInput = document.createElement("input");
    nameInput.placeholder = "Enter Friend's Name Here"
    newFriendDiv.append(nameInput);

    //once the friend's name is entered, make a button to save the name
    const saveNewFriendButton = document.createElement("button");
    saveNewFriendButton.id = "save-friend-btn";
    saveNewFriendButton.textContent = "Add Friend";
    newFriendDiv.append(saveNewFriendButton);

    //make the 'save new friend' button work
     
    saveNewFriendButton.addEventListener('click', function(e) {
        e.preventDefault();
        console.log("save new friend button worked!");
        return friendSaved(nameInput.value);
})
    
}

//make the 'like' button and 'unlike' button count how many likes and unlikes, and from which friends.

let likeCount = 0;

likeButton.addEventListener("click", function(e) {
    e.preventDefault();
    likeCount++;
    console.log(likeCount);
    let likeCounter = document.getElementById("like-counter");
    if (likeCounter <= 1) {
        return likeCounter.textContent = `${likeCount} person liked this post.`
    } else {
        return likeCounter.textContent = `${likeCount} people liked this post.`
    }
  
}) 

unlikeButton.addEventListener("click", function(e) {
    e.preventDefault();
    likeCount -= 1;
    console.log(likeCount);
    let likeCounter = document.getElementById("like-counter");
    likeCounter.textContent = `${likeCount} person unliked this post.`
})

//make the add new button create a new 'friend'.

addNewButton.addEventListener('click', function(e) {
    e.preventDefault();
    console.log("add new friend btn worked!");
    return addFriend();
})


    
console.log("name input =" + nameInput.value);