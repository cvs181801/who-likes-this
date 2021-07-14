//grab elements from the DOM

const addNewButton = document.getElementById("add-new");
const parentDiv = document.getElementById("container-div-2");
let childFriendDiv = document.createElement("div");
let likeButton = document.createElement("button");
let likeCounter = document.getElementById("like-counter");
let saveNewFriendButton = document.createElement("button");
let savedFriendsDiv = document.getElementById("container-div-3");
let nameInput = document.createElement("input");
let newFriendDiv = document.createElement("div");

console.log(likeCounter);

//save the new friend. (See the 'make a way to create a new friend part below)

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
    likeButton.id = `${name}-like-btn`;
    likeButton.textContent = `👍`;
    friendNameLabel.append(likeButton);

     //make the 'like' button count how many likes, and from which friends.
    likeButton.addEventListener("click", function(e) {
      e.preventDefault();
      let likeCounter = document.getElementById("like-counter");
      likeCounter.textContent = `${name} liked this post.`;
  }) 
}

//make a way to create a new "friend".

function addFriend() {
    //create a place to type the friend's name
    newFriendDiv = document.createElement("div");
    parentDiv.append(newFriendDiv);
    let nameInput = document.createElement("input");
    nameInput.placeholder = "Enter Friend's Name Here"
    newFriendDiv.append(nameInput);

    //once the friend's name is entered, make a button to save/render the name
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

//make the add new button create a new 'friend'.

addNewButton.addEventListener('click', function(e) {
    e.preventDefault();
    console.log("add new friend btn worked!");
    return addFriend();
})
