const numberofImages = document.images.length - 1
const idArray = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

showImages()
dragAbleElements()

function showImages() {
    let timer = 3000
    for (i = 0; i < numberofImages; i++) {
        sleep(timer).then(unhideImage(unhideImage[i]))
        timer += 3000
    }

}

function sleep(ms, idNumber) {
    return new Promise(() => setTimeout(unhideImage(idNumber), ms));
}

function unhideImage(theimage) {
    var element = document.getElementById(theimage);
    element.classList.remove("hideItem");
}

const dragAbleElements = () => {
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