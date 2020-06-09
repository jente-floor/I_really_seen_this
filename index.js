const numberofImages = document.images.length - 1
const idArray = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "video1"]
const buttonRearrange = document.getElementById("rearrange")

showImages()
dragAbleElements()
setTimeout(() => hideheader(), 9000)
setTimeout(() => hidesubtext(), 9000)
setTimeout(() => unhidebackground(), 22000)
buttonRearrange.addEventListener('click', hidebackground)


function showImages() {
    setTimeout(() => unhideImage("one"), 9000)
    setTimeout(() => unhideImage("two"), 14000)
    setTimeout(() => unhideImage("three"), 19000)
    setTimeout(() => unhideImage("four"), 4000)
    setTimeout(() => unhideImage("five"), 8000)
    setTimeout(() => unhideImage("six"), 14000)
    setTimeout(() => unhideImage("seven"), 18000)
    setTimeout(() => unhideImage("eight"), 5000)
    setTimeout(() => unhideImage("nine"), 10000)
    setTimeout(() => unhideImage("ten"), 15000)
    setTimeout(() => unhideImage("eleven"), 19000)
    setTimeout(() => unhideImage("twelve"), 5000)
    setTimeout(() => unhideImage("thirteen"), 10000)
    setTimeout(() => unhideImage("fourteen"), 15000)
    setTimeout(() => unhideImage("fifteen"), 20000)
    setTimeout(() => unhideImage("sixteen"), 5000)
    setTimeout(() => unhideImage("seventeen"), 10000)
    setTimeout(() => unhideImage("eighteen"), 15000)
    setTimeout(() => unhideImage("nineteen"), 18000)
}


function unhideImage(theimage) {
    if (document.getElementById(theimage) !== null) {
        var element = document.getElementById(theimage);
        element.classList.remove("hideItem");
    }
}

function dragAbleElements() {
    for (i = 0; i < idArray.length; i++) {
        if (document.getElementById(idArray[i]) !== undefined) {
            dragElement(document.getElementById(idArray[i]));
        }
    }
    dragElement(document.getElementById("video1"))
}

function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;

    if (elmnt !== null) {
        elmnt.onmousedown = dragMouseDown;
    }

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
    console.log("hide subtext", header)
    header.classList.add("hideItem")
}

function unhidebackground() {
    var header = document.getElementsByClassName("background")[0]
    header.classList.remove("hideItem")
}

function hidebackground() {
    var header = document.getElementsByClassName("background")[0]
    header.classList.add("hideItem")
    setTimeout(unhidebackground, 15000)
}