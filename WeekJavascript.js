
let addBtn = document.getElementById('add_btn'); // variable to hold the element for add_btn
addBtn.addEventListener('click', addSong); // Event listener to add a song when button is clicked
let parentList = document.getElementById('parent-List'); // creates a variable for the parent list

// function to add a song to the setlist app
function addSong(e) {
    if (parentList.children.length > 0 && parentList.children[0].className == "emptyMsg") {
        parentList.children[0].remove();
    }
    let currentBtn = e.currentTarget; 
    let currentInput = currentBtn.previousElementSibling; 
    let currentSongName = currentInput.value; 
    currentInput.value = "";

    // if loop to handle empty form 
    if (currentSongName.length <= 0) {
        let newEmptyMsg = document.createElement("h5");
        newEmptyMsg.classList.add("emptyMsg");
        newEmptyMsg.textContent = "Nothing is added.";
        parentList.appendChild(newEmptyMsg);
       
    }
    // handles a string from the input and renders the DOM
    else {
        let newLi = document.createElement('li');
        // newLi.classList.add('list-group-item');
        newLi.className = "list-group-item d-flex justify-content-between";
        newLi.innerHTML = `<h5 class="flex-grow-1">${currentSongName}</h5>
            <button class="btn btn-dark mx-3" onclick="editSong(this)" >Edit</button>
            <button class="btn btn-danger" onclick="removeSong(this)">Remove</button>`


        parentList.appendChild(newLi);
       
    }
    
}

// handles the delete function
function removeSong(currElement) { 
    currElement.parentElement.remove();
    if (parentList.children.length <= 0) {
        let newEmptyMsg = document.createElement("h5");
        newEmptyMsg.classList.add("emptyMsg");
        newEmptyMsg.textContent = "Nothing is here. Please Add a Song";
        parentList.appendChild(newEmptyMsg);
    }
}

// edits current element 
function editSong(currElement) {
    if (currElement.textContent == "Done") {
        currElement.textContent = "Edit";
        let currSongName = currElement.previousElementSibling.value;
        let currHeading = document.createElement('h5');
        currHeading.className = "flex-grow-1";
        currHeading.textContent = currSongName;
        currElement.parentElement.replaceChild(currHeading, currElement.previousElementSibling);
    }
    else {
        currElement.textContent = "Done";
        let currSongName = currElement.previousElementSibling.textContent;
        let currInput = document.createElement('input');
        currInput.type = "text";
        currInput.placeholder = "Song Title";
        currInput.className = "form-control";
        currInput.value = currSongName;
        currElement.parentElement.replaceChild(currInput, currElement.previousElementSibling);
    }
}