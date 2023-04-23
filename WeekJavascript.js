
let addBtn = document.getElementById('add_btn');
addBtn.addEventListener('click', addSong);
let parentList = document.getElementById('parent-List');
function addSong(e) {
    if (parentList.children.length > 0 && parentList.children[0].className == "emptyMsg") {
        parentList.children[0].remove();
    }
    let currentBtn = e.currentTarget;
    let currentInput = currentBtn.previousElementSibling;
    let currentSongName = currentInput.value;
    currentInput.value = "";
    if (currentSongName.length <= 0) {
        let newEmptyMsg = document.createElement("h5");
        newEmptyMsg.classList.add("emptyMsg");
        newEmptyMsg.textContent = "Nothing is added.";
        parentList.appendChild(newEmptyMsg);
       
    }
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

function removeSong(currElement) {
    currElement.parentElement.remove();
    if (parentList.children.length <= 0) {
        let newEmptyMsg = document.createElement("h5");
        newEmptyMsg.classList.add("emptyMsg");
        newEmptyMsg.textContent = "Nothing is here. Please Add a Song";
        parentList.appendChild(newEmptyMsg);
    }
}

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