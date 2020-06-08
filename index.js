function showImages() {
    setTimeout(() => unhideImage("one"), 3000)
    setTimeout(() => unhideImage("two"), 6000)
    setTimeout(() => unhideImage("three"), 9000)
    setTimeout(() => unhideImage("four"), 12000)
    setTimeout(() => unhideImage("five"), 15000)
}


function unhideImage(theimage) {
    var element = document.getElementById(theimage);
    element.classList.remove("hideItem");
}

showImages()