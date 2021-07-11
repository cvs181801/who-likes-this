//grab elements from the DOM

const addNewButton = document.getElementById("add-new");
const parentDiv = document.getElementById("container-div");
let childFriendDiv = document.createElement("div");

//make the add new button create a new 'friend'.

console.log(parentDiv);
console.log(addNewButton);

function addFriend(name) {
    childFriendDiv = createElement("div");
    childFriendDiv.innerHTML = `${name}`;
    parentDiv.append(childFriendDiv);
}

addNewButton.addEventListener('click', function(e) {
    e.preventDefault();
    console.log("it worked!");
    return addFriend("Joice");
})

