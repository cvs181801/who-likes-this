//grab elements from the DOM

const addNewButton = document.getElementById("add-new");
const parentDiv = document.getElementById("container-div");
let childFriendDiv = document.createElement("div");

//make the add new button create a new 'friend'.

console.log(parentDiv);
console.log(addNewButton);

function addFriend(name) {
    childFriendDiv = document.createElement("div");
    childFriendDiv.textContent = `${name}`;
    parentDiv.append(childFriendDiv);
}

addNewButton.addEventListener('click', function(e) {
    e.preventDefault();
    console.log("it worked!");
    return addFriend("Joice");
})

//code with: node.textContent instead on element.innerHTML
//adjusting CSS in JS
//toggling classes in JS