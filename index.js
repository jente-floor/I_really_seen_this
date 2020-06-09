const numberofImages = document.images.length - 1
const idArray = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
const buttonRearrange = document.getElementById("rearrange")

showImages()
dragAbleElements()
setTimeout(() => hideheader(), 7000)
setTimeout(() => hidesubtext(), 7000)
setTimeout(() => unhidebackground(), 2000)
buttonRearrange.addEventListener('click', hidebackground)



function showImages() {
    setTimeout(() => unhideImage("one"), 7000)
    setTimeout(() => unhideImage("two"), 12000)
    setTimeout(() => unhideImage("three"), 17000)
    setTimeout(() => unhideImage("four"), 22000)

}

function sleep(ms, idNumber) {
    return new Promise(() => setTimeout(unhideImage(idNumber), ms));
}

function unhideImage(theimage) {
    var element = document.getElementById(theimage);
    element.classList.remove("hideItem");
}

function dragAbleElements() {
    for (i = 0; i < numberofImages; i++) {
        dragElement(document.getElementById(idArray[i]));
    }
}

function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;


    elmnt.onmousedown = dragMouseDown;


    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {

        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function hideheader() {
    var header = document.getElementsByClassName("title")[0]
    header.classList.add("hideItem")
}

function hidesubtext() {
    var header = document.getElementsByClassName("introSubtext")[0]
    header.classList.add("hideItem")
}

function unhidebackground() {
    var header = document.getElementsByClassName("background")[0]
    header.classList.remove("hideItem")
}

function hidebackground() {
    var header = document.getElementsByClassName("background")[0]
    header.classList.add("hideItem")
}