//grab elements from the DOM

const addNewButton = document.getElementById("add-new");
const parentDiv = document.getElementById("container-div");
let childFriendDiv = createElement("div");

//make the add new button create a new 'friend'.

function addFriend(name) {
    childFriendDiv = createElement("div");
    childFriendDiv.innerHTML = `${name}`;
    parentDiv.append(childFriendDiv);
}

addNewButton.addEventListenter('click', function(e) {
    e.preventDefault();
    return addFriend("Joice");
})

